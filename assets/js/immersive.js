/**
 * ElevateLivingCo — Immersive Homepage Script
 * Features:
 *  - Feature detection for CSS Scroll-Driven Animations
 *  - RequestAnimationFrame fallback door progress controller
 *  - IntersectionObserver reveal animations
 *  - Interactive Room Hotspots handler
 *  - GA4 Scroll Milestone Event Dispatcher
 */

(function () {
  'use strict';

  // Respect prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.addEventListener('DOMContentLoaded', function () {
    initDoorController();
    initRevealObserver();
    initHotspots();
    initScrollAnalytics();
  });

  /**
   * 1. 3D DOOR SCROLL PROGRESS CONTROLLER
   * If CSS Scroll-Driven Animation is supported, CSS controls the animation.
   * Otherwise, JS fallback drives door panels via requestAnimationFrame.
   */
  function initDoorController() {
    if (prefersReducedMotion) return;

    const supportsScrollTimeline = typeof CSS !== 'undefined' &&
      CSS.supports &&
      (CSS.supports('animation-timeline: scroll()') || CSS.supports('animation-timeline', 'scroll()'));

    if (supportsScrollTimeline) {
      // CSS handles animation natively; no JS transform needed
      return;
    }

    const doorLeft = document.querySelector('.door-panel-left');
    const doorRight = document.querySelector('.door-panel-right');
    const interior = document.querySelector('.door-interior-reveal');

    if (!doorLeft || !doorRight || !interior) return;

    let ticking = false;

    function updateDoor() {
      const scrollY = window.scrollY || window.pageYOffset;
      const heroHeight = window.innerHeight * 0.5;
      
      // Calculate progress from 0.0 to 1.0
      let progress = Math.min(Math.max(scrollY / heroHeight, 0), 1);

      // Easing curve for realistic door swing
      const easeProgress = Math.pow(progress, 0.85);

      const angle = 82 * easeProgress;
      const interiorOpacity = 0.15 + (0.75 * easeProgress);

      doorLeft.style.transform = 'rotateY(-' + angle + 'deg)';
      doorLeft.style.opacity = (1 - 0.8 * easeProgress).toString();

      doorRight.style.transform = 'rotateY(' + angle + 'deg)';
      doorRight.style.opacity = (1 - 0.8 * easeProgress).toString();

      interior.style.opacity = interiorOpacity.toString();

      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(updateDoor);
        ticking = true;
      }
    }, { passive: true });

    // Initial render
    updateDoor();
  }

  /**
   * 2. INTERSECTION OBSERVER FOR REVEAL ANIMATIONS
   */
  function initRevealObserver() {
    const reveals = document.querySelectorAll('.el-reveal, .el-reveal-up, .el-reveal-left, .el-reveal-scale');
    if (!reveals.length) return;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      reveals.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  }

  /**
   * 3. ROOM HOTSPOTS INTERACTION
   */
  function initHotspots() {
    const pins = document.querySelectorAll('.hotspot-pin');
    if (!pins.length) return;

    pins.forEach(function (pin) {
      pin.addEventListener('click', function (e) {
        e.preventDefault();
        const isActive = pin.classList.contains('active');
        
        // Close all pins first
        pins.forEach(function (p) { p.classList.remove('active'); });

        if (!isActive) {
          pin.classList.add('active');
        }
      });

      // Keyboard support
      pin.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          pin.click();
        }
      });
    });

    // Close hotspots when clicking outside
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.hotspot-pin') && !e.target.closest('.hotspot-card')) {
        pins.forEach(function (p) { p.classList.remove('active'); });
      }
    });
  }

  /**
   * 4. SCROLL MILESTONE ANALYTICS TRACKER
   */
  function initScrollAnalytics() {
    if (typeof gtag !== 'function') return;

    let heroEnteredTracked = false;

    window.addEventListener('scroll', function () {
      if (!heroEnteredTracked && window.scrollY > window.innerHeight * 0.3) {
        gtag('event', 'hero_enter', {
          'event_category': 'Engagement',
          'event_label': 'User Scrolled Into Immersive Experience'
        });
        heroEnteredTracked = true;
      }
    }, { passive: true });
  }

})();
