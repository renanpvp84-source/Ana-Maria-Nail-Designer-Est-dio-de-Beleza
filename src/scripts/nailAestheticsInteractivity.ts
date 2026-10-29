/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Nail Aesthetics & Beauty Luxury Micro-Interactions Script
 * 
 * Focus: Sophisticated polish, zero layout shift (CLS), 60FPS performance,
 * buttery smooth CTA tactile feedback and micro-ripples.
 * Optimized for zero main-thread blocking on initial paint.
 */

export interface NailInteractivityOptions {
  ctaSelector?: string;
}

declare global {
  interface Window {
    __nailInteractivityInitialized?: boolean;
    initNailAestheticsInteractivity?: (options?: NailInteractivityOptions) => () => void;
  }
}

export function initNailAestheticsInteractivity(options: NailInteractivityOptions = {}) {
  if (typeof window === 'undefined') return () => {};
  if (window.__nailInteractivityInitialized) {
    return () => {};
  }
  window.__nailInteractivityInitialized = true;

  const {
    ctaSelector = [
      'a[href*="wa.me"]',
      'a[href="#agenda"]',
      'a[href="#servicos"]',
      'button[type="submit"]',
      'button[type="button"].cta-btn',
      '[data-cta]'
    ].join(', '),
  } = options;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Cleanup references
  const listeners: Array<{ el: HTMLElement; event: string; fn: any }> = [];

  const attachButtonInteractions = () => {
    if (prefersReducedMotion) return;

    const ctas = document.querySelectorAll<HTMLElement>(ctaSelector);

    ctas.forEach((btn) => {
      if (!btn.classList.contains('ux-cta-interactive')) {
        btn.classList.add('ux-cta-interactive');
      }

      const handlePointerDown = (e: MouseEvent | TouchEvent) => {
        // Read geometry cleanly
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

      listeners.push(
        { el: btn, event: 'mousedown', fn: handlePointerDown },
        { el: btn, event: 'touchstart', fn: handlePointerDown }
      );
    });
  };

  // Schedule during browser idle time so FCP and LCP paint with zero interruption
  if (typeof window.requestIdleCallback === 'function') {
    window.requestIdleCallback(() => attachButtonInteractions(), { timeout: 1500 });
  } else {
    setTimeout(attachButtonInteractions, 150);
  }

  return () => {
    listeners.forEach(({ el, event, fn }) => {
      el.removeEventListener(event, fn);
    });
    window.__nailInteractivityInitialized = false;
  };
}

if (typeof window !== 'undefined') {
  window.initNailAestheticsInteractivity = initNailAestheticsInteractivity;
}
