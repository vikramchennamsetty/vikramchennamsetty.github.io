/**
 * ElevateLiving Tracking OS
 * Centralized affiliate and analytics management.
 */

window.ElevateLiving = window.ElevateLiving || {};
window.ElevateLiving.config = window.ElevateLiving.config || {
  gaId: 'G-SSKL97RTQC',
  amazonTag: 'elevateliv05f-20'
};

/**
 * Standardized, backward-compatible affiliate tracking function.
 * Accepts:
 *  - trackAffiliate(label)
 *  - trackAffiliate(url, label)
 *  - trackAffiliate(url, label, category)
 */
window.ElevateLiving.trackAffiliate = function(arg1, arg2, arg3) {
  var url = '';
  var label = '';
  var category = 'affiliate';

  if (typeof arg1 === 'string' && arg1.trim() !== '') {
    var str1 = arg1.trim();
    if (str1.indexOf('http://') === 0 || str1.indexOf('https://') === 0) {
      url = str1;
      label = (typeof arg2 === 'string' && arg2.trim() !== '') ? arg2.trim() : str1;
      category = (typeof arg3 === 'string' && arg3.trim() !== '') ? arg3.trim() : 'affiliate';
    } else {
      label = str1;
      if (typeof arg2 === 'string' && arg2.trim() !== '') {
        var str2 = arg2.trim();
        if (str2.indexOf('http://') === 0 || str2.indexOf('https://') === 0) {
          url = str2;
          category = (typeof arg3 === 'string' && arg3.trim() !== '') ? arg3.trim() : 'affiliate';
        } else {
          category = str2;
          url = (typeof arg3 === 'string' && arg3.trim().indexOf('http') === 0) ? arg3.trim() : '';
        }
      }
    }
  } else if (typeof arg2 === 'string' && arg2.trim() !== '') {
    label = arg2.trim();
  }

  if (typeof gtag === 'function') {
    var payload = {
      event_category: category,
      event_label: label || 'affiliate_click',
      event_page: (window.location && window.location.pathname) ? window.location.pathname : '',
      transport_type: 'beacon'
    };
    if (url) {
      payload.outbound_url = url;
    }
    gtag('event', 'affiliate_click', payload);
  }
};

window.ElevateLiving.trackAffiliateClick = function(arg1, arg2, arg3) {
  if (typeof window.ElevateLiving.trackAffiliate === 'function') {
    window.ElevateLiving.trackAffiliate(arg1, arg2, arg3);
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

// Global helper fallbacks so legacy inline onclick handlers never throw ReferenceError
window.trackAffiliate = function(arg1, arg2, arg3) {
  if (window.ElevateLiving && typeof window.ElevateLiving.trackAffiliate === 'function') {
    return window.ElevateLiving.trackAffiliate(arg1, arg2, arg3);
  }
};

window.trackAffiliateClick = function(arg1, arg2, arg3) {
  if (window.ElevateLiving && typeof window.ElevateLiving.trackAffiliateClick === 'function') {
    return window.ElevateLiving.trackAffiliateClick(arg1, arg2, arg3);
  } else if (typeof window.trackAffiliate === 'function') {
    return window.trackAffiliate(arg1, arg2, arg3);
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
