import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export interface SmoothScrollOptions {
  /**
   * Ponto de partida moderado para sensação de 'deslizar no gelo':
   * 0.08 a 0.1 oferece movimento contínuo e desaceleração progressiva
   * sem parecer pesado ou com atraso perceptível.
   */
  lerp?: number;
  /** Duração da transição do scroll em segundos */
  duration?: number;
  /** Deslocamento (offset) para compensar altura do navbar fixo ao navegar por âncoras */
  anchorOffset?: number;
}

/**
 * useSmoothScroll: Inicializa o Lenis com desaceleração progressiva,
 * preservando rolagem nativa no touch/mobile, acessibilidade para
 * prefers-reduced-motion e navegação por teclado/âncoras.
 */
export function useSmoothScroll({
  lerp = 0.09,
  duration = 1.15,
  anchorOffset = -70,
}: SmoothScrollOptions = {}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // 1. Respeito estrito a prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      return; // Mantém scroll nativo e imediato sem inércia
    }

    // 2. Criação da instância Lenis configurada
    const lenis = new Lenis({
      lerp,
      duration,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Curva exponencial suave
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      syncTouch: false, // PRESERVA ROLAGEM NATIVA EM TOUCH E DISPOSITIVOS MÓVEIS
      touchMultiplier: 1,
      infinite: false,
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;

    // 3. Loop contínuo com requestAnimationFrame
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // 4. Integração suave e acessível com links de âncora (#servicos, #agenda, etc.)
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement as HTMLElement, {
            offset: anchorOffset,
            duration,
          });
          // Atualiza a URL sem recarregar a página
          window.history.pushState(null, '', href);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // 5. Listener para alterações dinâmicas de prefers-reduced-motion
    const handleMotionPreferenceChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        lenis.destroy();
        cancelAnimationFrame(rafId);
      }
    };
    mediaQuery.addEventListener('change', handleMotionPreferenceChange);

    // 6. Limpeza e destruição completa no desmonte do componente
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      mediaQuery.removeEventListener('change', handleMotionPreferenceChange);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      delete window.__lenis;
    };
  }, [lerp, duration, anchorOffset]);

  return lenisRef;
}
