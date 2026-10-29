import React, { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

export interface SlideEntranceProps {
  children: ReactNode;
  /**
   * Direção da entrada lateral:
   * - 'left': inicia em translateX(-28px)
   * - 'right': inicia em translateX(28px)
   */
  direction?: 'left' | 'right';
  /** Classes CSS adicionais */
  className?: string;
  /** Duração em segundos (padrão: 0.6s / 600ms) */
  duration?: number;
  /** Fração de visibilidade necessária para disparar (padrão: 0.2 / 20%) */
  threshold?: number;
  /** Atraso antes do início da animação em segundos */
  delay?: number;
  /** Deslocamento inicial em pixels por eixo X (padrão: 28px) */
  offset?: number;
}

/**
 * SlideEntrance: Entrada lateral fluida com aceleração por hardware (transform + opacity).
 * 
 * - Dispara uma única vez ao atingir cerca de 20% de visibilidade.
 * - Mantém estado final estável após a animação, mesmo saindo da viewport.
 * - Não altera fluxo nem provoca scroll horizontal.
 * - Respeita prefers-reduced-motion: reduce e fallback no-js.
 */
export const SlideEntrance: React.FC<SlideEntranceProps> = ({
  children,
  direction = 'left',
  className = '',
  duration = 0.6,
  threshold = 0.2,
  delay = 0,
  offset = 28,
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Acessibilidade WCAG 2.3.3: renderização imediata e estável sem deslocamento
  if (shouldReduceMotion) {
    return (
      <div data-slide-entrance={direction} className={className}>
        {children}
      </div>
    );
  }

  // Direção configurável: 'left' usa deslocamento negativo (-28px), 'right' positivo (+28px)
  const initialX = direction === 'left' ? -offset : offset;

  return (
    <motion.div
      data-slide-entrance={direction}
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: threshold }}
      transition={{
        duration,
        ease: [0.22, 1, 0.36, 1] as const,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
