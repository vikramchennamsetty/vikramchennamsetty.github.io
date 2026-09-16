/**
 * ElevateLiving Tracking OS
 * Centralized affiliate and analytics management.
 */

window.ElevateLiving = window.ElevateLiving || {};
window.ElevateLiving.config = window.ElevateLiving.config || {
  gaId: 'G-SSKL97RTQC',
  amazonTag: 'elevateliv05f-20'
};

window.ElevateLiving.trackAffiliate = function(label) {
  if (typeof gtag === 'function') {
    gtag('event', 'affiliate_click', {
      event_category: 'affiliate',
      event_label: label,
      event_page: window.location.pathname,
      transport_type: 'beacon'
    });
  }
};

window.ElevateLiving.trackInternal = function(label, destination) {
  if (typeof gtag === 'function') {
    gtag('event', 'internal_link', {
      dest: destination,
      label: label
    });
  }
};

// Global helper fallback so legacy inline onclick="trackAffiliate('...')" never throws ReferenceError
window.trackAffiliate = function(label) {
  if (window.ElevateLiving && typeof window.ElevateLiving.trackAffiliate === 'function') {
    window.ElevateLiving.trackAffiliate(label);
  }
};

window.ElevateLiving.initFAQ = function() {
  document.querySelectorAll('.faq-question').forEach(button => {
    if (button.dataset.faqInit) return;
    button.dataset.faqInit = "true";
    button.addEventListener('click', () => {
      const item = button.parentElement;
      item.classList.toggle('active');
    });
  });
};

window.ElevateLiving.initMobileNav = function() {
  const toggle = document.querySelector('.mobile-nav-toggle');
  const header = document.querySelector('header.site-header');
  const nav = document.querySelector('.nav-links');
  
  if (toggle && nav) {
    if (toggle.dataset.navInit) return;
    toggle.dataset.navInit = "true";
    
    toggle.addEventListener('click', () => {
      header.classList.toggle('nav-open');
      nav.classList.toggle('active');
      document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });

    // Close on link click
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        header.classList.remove('nav-open');
        nav.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
};

// Auto-init on DOM ready or immediately if DOM already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.ElevateLiving.initFAQ();
    window.ElevateLiving.initMobileNav();
  });
} else {
  window.ElevateLiving.initFAQ();
  window.ElevateLiving.initMobileNav();
}
