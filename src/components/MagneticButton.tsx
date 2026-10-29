/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Componente MagneticButton de Alto Desempenho
 * 
 * Características:
 * - Deslocamento magnético sutil limitado a no máximo 8px por eixo (configurável).
 * - Sem jitter / oscilação infinita: centro calculado a partir de container estacionário.
 * - Loop desacelerado via requestAnimationFrame com parada limpa quando em repouso (zero CPU idle).
 * - Zero re-render React durante o movimento (transformação direta na GPU via ref).
 * - Desativação estrita em:
 *   * prefers-reduced-motion: reduce
 *   * Dispositivos touch e ponteiro grosseiro: (hover: none) ou (pointer: coarse)
 *   * Navegação por teclado (:focus-visible)
 * - Área de clique estável sem fuga do ponteiro.
 */

import React, { useRef, useEffect } from 'react';

export interface MagneticButtonProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  /** Elemento HTML a ser renderizado: 'a', 'button' ou 'div' */
  as?: 'a' | 'button' | 'div';
  /** URL de destino se for link 'a' */
  href?: string;
  /** Tipo de botão se for 'button' */
  type?: 'button' | 'submit' | 'reset';
  /** Estado desabilitado */
  disabled?: boolean;
  /** Alvo de navegação do link (ex: '_blank') */
  target?: string;
  /** Relação do link (ex: 'noopener noreferrer') */
  rel?: string;
  /** Limite máximo de deslocamento em pixels por eixo (padrão: 8px) */
  maxDelta?: number;
  /** Raio de atração magnética além das bordas do botão (padrão: 24px) */
  magneticRadius?: number;
  /** Força do puxão magnético em direção ao cursor (padrão: 0.22) */
  strength?: number;
  /** Fator de amortecimento do retorno elástico (0.05 a 0.25, padrão: 0.14) */
  damping?: number;
  /** Classes CSS adicionais para o botão visual */
  className?: string;
  /** Classes CSS opcionais para o container estacionário */
  wrapperClassName?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  as = 'a',
  href,
  type = 'button',
  disabled = false,
  target,
  rel,
  maxDelta = 8,
  magneticRadius = 24,
  strength = 0.22,
  damping = 0.14,
  className = '',
  wrapperClassName = '',
  ...restProps
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const visualRef = useRef<HTMLElement | null>(null);

  // Estados mutáveis para o loop de animação sem causar re-render React
  const currentPos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  const isAnimatingRef = useRef(false);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    // 1. Guardas de Acessibilidade e Hardware
    if (typeof window === 'undefined') return;

    // Respeita preferência do usuário por movimento reduzido (WCAG 2.3.3)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Ativa apenas em mouses e trackpads de precisão (ignora touchscreens, smartphones e tablets)
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (prefersReducedMotion || !isFinePointer) {
      return;
    }

    const container = containerRef.current;
    const visual = visualRef.current;
    if (!container || !visual) return;

    // 2. Loop de interpolação amortecida via requestAnimationFrame
    const animate = () => {
      const cur = currentPos.current;
      const tgt = targetPos.current;

      cur.x += (tgt.x - cur.x) * damping;
      cur.y += (tgt.y - cur.y) * damping;

      if (visual) {
        visual.style.transform = `translate3d(${cur.x.toFixed(2)}px, ${cur.y.toFixed(2)}px, 0)`;
      }

      // Condição de parada de precisão: encerra o loop quando o elemento chega ao repouso
      const isResting = Math.abs(tgt.x - cur.x) < 0.04 && Math.abs(tgt.y - cur.y) < 0.04;

      if (isResting) {
        cur.x = tgt.x;
        cur.y = tgt.y;
        if (visual) {
          if (cur.x === 0 && cur.y === 0) {
            visual.style.transform = '';
          } else {
            visual.style.transform = `translate3d(${cur.x.toFixed(2)}px, ${cur.y.toFixed(2)}px, 0)`;
          }
        }
        isAnimatingRef.current = false;
        return;
      }

      rafIdRef.current = requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      if (!isAnimatingRef.current) {
        isAnimatingRef.current = true;
        rafIdRef.current = requestAnimationFrame(animate);
      }
    };

    // 3. Rastreamento relativo ao centro do container estacionário
    const handlePointerMove = (e: PointerEvent) => {
      // Ignora eventos que não sejam de mouse direto
      if (e.pointerType === 'touch') return;

      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distance = Math.hypot(deltaX, deltaY);

      // Raio máximo de influência magnética
      const effectiveRadius = Math.max(rect.width, rect.height) / 2 + magneticRadius;

      if (distance <= effectiveRadius) {
        // Atração magnética calculada e limitada a no máximo maxDelta px
        targetPos.current = {
          x: Math.max(-maxDelta, Math.min(maxDelta, deltaX * strength)),
          y: Math.max(-maxDelta, Math.min(maxDelta, deltaY * strength)),
        };
      } else {
        targetPos.current = { x: 0, y: 0 };
      }

      startAnimation();
    };

    const handlePointerLeave = () => {
      targetPos.current = { x: 0, y: 0 };
      startAnimation();
    };

    // 4. Reset imediato se o usuário navegar por teclado
    const handleFocus = () => {
      targetPos.current = { x: 0, y: 0 };
      currentPos.current = { x: 0, y: 0 };
      if (visual) {
        visual.style.transform = '';
      }
    };

    container.addEventListener('pointermove', handlePointerMove, { passive: true });
    container.addEventListener('pointerleave', handlePointerLeave, { passive: true });
    container.addEventListener('focusin', handleFocus, { passive: true });

    // 5. Limpeza completa ao desmontar
    return () => {
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerleave', handlePointerLeave);
      container.removeEventListener('focusin', handleFocus);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      isAnimatingRef.current = false;
    };
  }, [maxDelta, magneticRadius, strength, damping]);

  // Renderização polimórfica (a, button ou div)
  const Component = (as || (href ? 'a' : 'button')) as any;

  const componentProps: any = {
    ref: visualRef,
    className: `relative inline-flex items-center justify-center will-change-transform ${className}`,
    ...restProps,
  };

  if (Component === 'a') {
    componentProps.href = href;
    componentProps.target = target;
    componentProps.rel = rel;
  } else if (Component === 'button') {
    componentProps.type = type;
    componentProps.disabled = disabled;
  }

  return (
    <div
      ref={containerRef}
      data-magnetic-wrapper=""
      className={`relative inline-flex items-center justify-center ${wrapperClassName}`}
    >
      <Component {...componentProps}>
        {children}
      </Component>
    </div>
  );
};
