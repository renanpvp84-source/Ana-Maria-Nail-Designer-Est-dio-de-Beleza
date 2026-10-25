/**
 * Nail Aesthetics & Beauty Luxury Micro-Interactions (Standalone Vanilla JS)
 * Zero dependencies. Injects styles dynamically without touching original HTML/CSS.
 */
(function () {
  'use strict';

  if (typeof window === 'undefined' || window.__nailInteractivityInitialized) return;
  window.__nailInteractivityInitialized = true;

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isMobile = window.matchMedia('(max-width: 767px)').matches;
  var isLowPowerMode = false;

  if ('getBattery' in navigator) {
    navigator.getBattery().then(function (battery) {
      if (battery && battery.level <= 0.15 && !battery.charging) {
        isLowPowerMode = true;
      }
    }).catch(function () {});
  }

  // Inject luxury styles
  var STYLE_ID = 'nail-ux-interactivity-styles';
  if (!document.getElementById(STYLE_ID)) {
    var style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
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
      .ux-cta-interactive {
        position: relative;
        overflow: hidden;
        transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1), background-color 250ms ease, box-shadow 300ms cubic-bezier(0.16, 1, 0.3, 1), filter 250ms ease !important;
        backface-visibility: hidden;
        -webkit-font-smoothing: subpixel-antialiased;
      }
      @media (hover: hover) and (pointer: fine) {
        .ux-cta-interactive:hover {
          transform: translateY(-1.5px) scale(1.015);
          filter: brightness(1.04);
          box-shadow: 0 8px 24px -6px rgba(216, 160, 164, 0.25);
        }
      }
      .ux-cta-interactive:active {
        transform: translateY(0.5px) scale(0.985) !important;
        filter: brightness(0.97) !important;
        box-shadow: 0 2px 8px -2px rgba(216, 160, 164, 0.15) !important;
        transition-duration: 120ms !important;
      }
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
        0% { transform: scale(0); opacity: 0.9; }
        100% { transform: scale(3.2); opacity: 0; }
      }
      @media (prefers-reduced-motion: reduce) {
        .ux-scroll-init, .ux-scroll-visible { opacity: 1 !important; transform: none !important; transition: none !important; }
        .ux-cta-interactive { transform: none !important; transition: none !important; }
        .ux-ripple-wave { display: none !important; }
      }
    `;
    document.head.appendChild(style);
  }

  function initObserver() {
    if (prefersReducedMotion || isLowPowerMode) return;

    var selector = '.ux-reveal-item';
    var elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    if (!('IntersectionObserver' in window)) {
      elements.forEach(function (el) { el.classList.add('ux-scroll-visible'); });
      return;
    }

    var duration = isMobile ? 500 : 650;

    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var target = entry.target;
          target.style.transitionDuration = duration + 'ms';
          target.classList.add('ux-scroll-visible');
          obs.unobserve(target);
        }
      });
    }, {
      threshold: isMobile ? 0.05 : 0.1,
      rootMargin: '0px 0px 50px 0px'
    });

    elements.forEach(function (el, index) {
      if (el.closest('#hero') || el.dataset.skipScrollAnim === 'true') return;
      var delay = (index % 3) * 60;
      if (delay > 0 && !isMobile) {
        el.style.transitionDelay = delay + 'ms';
      }
      el.classList.add('ux-scroll-init');
      observer.observe(el);
    });
  }

  function initButtons() {
    var ctaSelector = 'a[href*="wa.me"], a[href="#agenda"], a[href="#servicos"], button[type="submit"], button[type="button"].cta-btn, [data-cta]';
    var buttons = document.querySelectorAll(ctaSelector);

    buttons.forEach(function (btn) {
      if (!btn.classList.contains('ux-cta-interactive')) {
        btn.classList.add('ux-cta-interactive');
      }

      function handlePointerDown(e) {
        if (prefersReducedMotion) return;
        var rect = btn.getBoundingClientRect();
        var clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        var clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

        var ripple = document.createElement('span');
        ripple.className = 'ux-ripple-wave';
        var size = Math.max(rect.width, rect.height) * 0.9;
        ripple.style.width = size + 'px';
        ripple.style.height = size + 'px';
        ripple.style.left = (clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (clientY - rect.top - size / 2) + 'px';

        btn.appendChild(ripple);
        setTimeout(function () {
          if (ripple.parentNode === btn) ripple.remove();
        }, 500);
      }

      btn.addEventListener('mousedown', handlePointerDown, { passive: true });
      btn.addEventListener('touchstart', handlePointerDown, { passive: true });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initObserver();
      initButtons();
    });
  } else {
    setTimeout(function () {
      initObserver();
      initButtons();
    }, 40);
  }
})();
