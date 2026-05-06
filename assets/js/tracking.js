/**
 * ElevateLiving Tracking OS
 * Centralized affiliate and analytics management.
 */

// Initialize tracking
window.ElevateLiving = {
  config: {
    gaId: 'G-SSKL97RTQC', // Your Analytics ID
    amazonTag: 'elevateliv00e-20'
  },

  trackAffiliate: function(event, label) {
    if (typeof gtag === 'function') {
      gtag('event', 'affiliate_click', {
        event_category: 'affiliate',
        event_label: label,
        event_page: window.location.pathname,
        transport_type: 'beacon'
      });
    }
  },

  trackInternal: function(label, destination) {
    if (typeof gtag === 'function') {
      gtag('event', 'internal_link', {
        dest: destination,
        label: label
      });
    }
  },
  
  initFAQ: function() {
    document.querySelectorAll('.faq-question').forEach(button => {
      button.addEventListener('click', () => {
        const item = button.parentElement;
        item.classList.toggle('active');
      });
    });
  },

  initMobileNav: function() {
    const toggle = document.querySelector('.mobile-nav-toggle');
    const header = document.querySelector('header.site-header');
    const nav = document.querySelector('.nav-links');
    
    if (toggle && nav) {
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
  }
};

// Auto-init on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  ElevateLiving.initFAQ();
  ElevateLiving.initMobileNav();
});
