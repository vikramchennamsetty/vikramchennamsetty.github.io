/**
 * ElevateLivingCo — Immersive Homepage Script
 * Refined Door Controller, Reveal Observer, Hotspots & Analytics
 */

(function () {
  'use strict';

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
      return;
    }

    const doorLeft = document.querySelector('.door-panel-left');
    const doorRight = document.querySelector('.door-panel-right');
    const interior = document.querySelector('.door-interior-reveal');
    const beam = document.querySelector('.door-light-beam');

    if (!doorLeft || !doorRight || !interior) return;

    let ticking = false;

    function updateDoor() {
      const scrollY = window.scrollY || window.pageYOffset;
      const heroHeight = window.innerHeight * 0.5;
      
      let progress = Math.min(Math.max(scrollY / heroHeight, 0), 1);
      const easeProgress = Math.pow(progress, 0.85);

      const angle = 84 * easeProgress;
      const opacity = 1 - 0.85 * easeProgress;
      const interiorOpacity = 0.15 + (0.80 * easeProgress);
      const brightness = 0.65 + (0.45 * easeProgress);
      const scale = 1.05 - (0.05 * easeProgress);

      doorLeft.style.transform = 'rotateY(-' + angle + 'deg)';
      doorLeft.style.opacity = opacity.toString();

      doorRight.style.transform = 'rotateY(' + angle + 'deg)';
      doorRight.style.opacity = opacity.toString();

      if (beam) {
        beam.style.opacity = (0.7 * easeProgress).toString();
      }

      interior.style.opacity = interiorOpacity.toString();
      interior.style.filter = 'brightness(' + brightness + ') contrast(1.1)';
      interior.style.transform = 'scale(' + scale + ')';

      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(updateDoor);
        ticking = true;
      }
    }, { passive: true });

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
        
        pins.forEach(function (p) { p.classList.remove('active'); });

        if (!isActive) {
          pin.classList.add('active');
        }
      });
    });

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
