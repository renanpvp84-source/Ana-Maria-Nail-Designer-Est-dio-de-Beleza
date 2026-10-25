/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Nail Aesthetics & Beauty Luxury Micro-Interactions Script
 * Specially designed for high-end aesthetics, nail design & beauty studios.
 * 
 * Focus: Sophisticated polish, zero layout shift (CLS), 60FPS performance,
 * buttery smooth CTA tactile feedback, micro-ripples, and adaptive mobile/tablet awareness.
 */

export interface NailInteractivityOptions {
  /** Selector for elements that should animate on scroll */
  scrollRevealSelector?: string;
  /** Selector for CTA and interactive action buttons */
  ctaSelector?: string;
  /** Animation duration on desktop/tablet in ms */
  durationDesktop?: number;
  /** Animation duration on mobile in ms */
  durationMobile?: number;
}

declare global {
  interface Window {
    __nailInteractivityInitialized?: boolean;
    initNailAestheticsInteractivity?: (options?: NailInteractivityOptions) => () => void;
  }
}

export function initNailAestheticsInteractivity(options: NailInteractivityOptions = {}) {
  // Prevent double initialization
  if (typeof window === 'undefined') return () => {};
  if (window.__nailInteractivityInitialized) {
    return () => {};
  }
  window.__nailInteractivityInitialized = true;

  const {
    scrollRevealSelector = '.ux-reveal-item',
    ctaSelector = [
      'a[href*="wa.me"]',
      'a[href="#agenda"]',
      'a[href="#servicos"]',
      'button[type="submit"]',
      'button[type="button"].cta-btn',
      '[data-cta]'
    ].join(', '),
    durationDesktop = 650,
    durationMobile = 500,
  } = options;

  // 1. Hardware & Preference Detection
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.matchMedia('(max-width: 767px)').matches;
  let isLowPowerMode = false;

  // Battery API check (Chromium/Android)
  if ('getBattery' in navigator) {
    (navigator as any).getBattery?.().then((battery: any) => {
      if (battery && battery.level <= 0.15 && !battery.charging) {
        isLowPowerMode = true;
      }
    }).catch(() => {
      // Gracefully ignore if restricted
    });
  }

  // 2. Inject Non-Invasive Dynamic Luxury Stylesheet
  const STYLE_ID = 'nail-ux-interactivity-styles';
  let styleEl = document.getElementById(STYLE_ID) as HTMLStyleElement | null;
  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = STYLE_ID;
    styleEl.textContent = `
      /* ==========================================================================
         Nail Aesthetics Micro-Interactions (Dynamic Injection)
         ========================================================================== */
      
      /* Optional explicit scroll reveal elements */
      .ux-scroll-init {
        opacity: 0;
        transform: translate3d(0, 16px, 0);
        will-change: opacity, transform;
        transition-property: opacity, transform;
        transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
      }

      @media (max-width: 767px) {
        .ux-scroll-init {
          transform: translate3d(0, 8px, 0);
        }
      }

      .ux-scroll-visible {
        opacity: 1 !important;
        transform: translate3d(0, 0, 0) !important;
      }

      /* Refined CTA Interactive Micro-states */
      .ux-cta-interactive {
        position: relative;
        overflow: hidden;
        transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1),
                    background-color 250ms ease,
                    box-shadow 300ms cubic-bezier(0.16, 1, 0.3, 1),
                    filter 250ms ease !important;
        backface-visibility: hidden;
        -webkit-font-smoothing: subpixel-antialiased;
      }

      /* Hover state: delicate scale lift with soft luminous halo */
      @media (hover: hover) and (pointer: fine) {
        .ux-cta-interactive:hover {
          transform: translateY(-1.5px) scale(1.015);
          filter: brightness(1.04);
          box-shadow: 0 8px 24px -6px rgba(216, 160, 164, 0.25);
        }
      }

      /* Active/Click feedback: tactile soft press */
      .ux-cta-interactive:active {
        transform: translateY(0.5px) scale(0.985) !important;
        filter: brightness(0.97) !important;
        box-shadow: 0 2px 8px -2px rgba(216, 160, 164, 0.15) !important;
        transition-duration: 120ms !important;
      }

      /* Subtle Rose-Gold Touch Ripple Pulse */
      .ux-ripple-wave {
        position: absolute;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.32) 0%, rgba(216, 160, 164, 0.2) 70%, transparent 100%);
        transform: scale(0);
        animation: uxRippleAnim 500ms cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
        pointer-events: none;
        z-index: 10;
      }

      @keyframes uxRippleAnim {
        0% {
          transform: scale(0);
          opacity: 0.9;
        }
        100% {
          transform: scale(3.2);
          opacity: 0;
        }
      }

      /* Reduced motion compliance */
      @media (prefers-reduced-motion: reduce) {
        .ux-scroll-init,
        .ux-scroll-visible {
          opacity: 1 !important;
          transform: none !important;
          transition: none !important;
        }
        .ux-cta-interactive {
          transform: none !important;
          transition: none !important;
        }
        .ux-ripple-wave {
          display: none !important;
        }
      }
    `;
    document.head.appendChild(styleEl);
  }

  // 3. Scroll Animation via Intersection Observer (Zero-Jank, Single-Trigger)
  let observer: IntersectionObserver | null = null;

  const initScrollObserver = () => {
    if (prefersReducedMotion || isLowPowerMode) {
      return;
    }

    const elements = document.querySelectorAll(scrollRevealSelector);
    if (!elements.length) return;

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => {
        el.classList.add('ux-scroll-visible');
      });
      return;
    }

    const duration = isMobile ? durationMobile : durationDesktop;

    observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.transitionDuration = `${duration}ms`;
            target.classList.add('ux-scroll-visible');
            obs.unobserve(target);
          }
        });
      },
      {
        threshold: isMobile ? 0.05 : 0.1,
        rootMargin: '0px 0px 50px 0px', // Preload ahead of viewport
      }
    );

    elements.forEach((el, index) => {
      const htmlEl = el as HTMLElement;
      if (htmlEl.closest('#hero') || htmlEl.dataset.skipScrollAnim === 'true') {
        return;
      }

      const delay = (index % 3) * 60;
      if (delay > 0 && !isMobile) {
        htmlEl.style.transitionDelay = `${delay}ms`;
      }

      htmlEl.classList.add('ux-scroll-init');
      observer?.observe(htmlEl);
    });
  };

  // 4. Button & CTA Interactive Feedback Enhancement
  const attachButtonInteractions = () => {
    const ctas = document.querySelectorAll<HTMLElement>(ctaSelector);

    ctas.forEach((btn) => {
      if (!btn.classList.contains('ux-cta-interactive')) {
        btn.classList.add('ux-cta-interactive');
      }

      const handlePointerDown = (e: MouseEvent | TouchEvent) => {
        if (prefersReducedMotion) return;

        const rect = btn.getBoundingClientRect();
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

        const ripple = document.createElement('span');
        ripple.className = 'ux-ripple-wave';

        const size = Math.max(rect.width, rect.height) * 0.9;
        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;
        ripple.style.left = `${clientX - rect.left - size / 2}px`;
        ripple.style.top = `${clientY - rect.top - size / 2}px`;

        btn.appendChild(ripple);

        setTimeout(() => {
          if (ripple.parentNode === btn) {
            btn.removeChild(ripple);
          }
        }, 500);
      };

      btn.addEventListener('mousedown', handlePointerDown, { passive: true });
      btn.addEventListener('touchstart', handlePointerDown, { passive: true });
    });
  };

  // 5. Initialize on DOM ready or immediate
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initScrollObserver();
      attachButtonInteractions();
    });
  } else {
    setTimeout(() => {
      initScrollObserver();
      attachButtonInteractions();
    }, 40);
  }

  // Cleanup handler in case of SPA navigation or unmount
  return () => {
    if (observer) {
      observer.disconnect();
    }
    const injected = document.getElementById(STYLE_ID);
    if (injected) {
      injected.remove();
    }
    window.__nailInteractivityInitialized = false;
  };
}

if (typeof window !== 'undefined') {
  window.initNailAestheticsInteractivity = initNailAestheticsInteractivity;
}
