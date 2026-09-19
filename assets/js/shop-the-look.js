/**
 * ElevateLivingCo - Shop The Look & Featured Product State System (V4.3)
 * Handles cursor perspective tilt, keyboard navigation, and explicit product state transitions:
 * DEFAULT -> PREVIEW (hover/focus) -> LOCKED (click/tap) -> EXPLICIT RESET
 */
document.addEventListener('DOMContentLoaded', function () {
  initShopLookTilt();
  initShopLookKeyboard();
  initFeaturedProductStage();
});

// Cursor Perspective Tilt (Desktop only via hover query & reduced-motion check)
function initShopLookTilt() {
  const isTouchOrReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    !window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  if (isTouchOrReducedMotion) return;

  const tiltCards = document.querySelectorAll('.shop-look-card, .shop-look-img-container, .featured-product-card');
  tiltCards.forEach(function (card) {
    let ticking = false;
    let mouseX = 0;
    let mouseY = 0;

    card.addEventListener('mousemove', function (e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate rotation (-3.5deg to +3.5deg max)
      const rotateX = -((y - centerY) / centerY) * 3.5;
      const rotateY = ((x - centerX) / centerX) * 3.5;

      mouseX = rotateX;
      mouseY = rotateY;

      if (!ticking) {
        window.requestAnimationFrame(function () {
          card.style.transform = `perspective(1000px) rotateX(${mouseX.toFixed(2)}deg) rotateY(${mouseY.toFixed(2)}deg) scale3d(1.012, 1.012, 1.012)`;
          ticking = false;
        });
        ticking = true;
      }
    });

    card.addEventListener('mouseleave', function () {
      card.style.transition = 'transform 0.5s ease';
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      setTimeout(function () {
        card.style.transition = '';
      }, 500);
    });

    card.addEventListener('mouseenter', function () {
      card.style.transition = 'transform 0.15s ease-out';
    });
  });
}

// Global state tracker per container
const productStageState = {};

function initFeaturedProductStage() {
  const containers = document.querySelectorAll('.shop-look-container, .featured-product-stage');
  containers.forEach(function (container) {
    const id = container.id || 'stl-default';
    productStageState[id] = {
      lockedIndex: null, // null means DEFAULT (Product 0)
      previewIndex: null
    };

    // Attach hover & click handlers to thumb buttons
    const buttons = container.querySelectorAll('.stl-thumb-btn');
    buttons.forEach(function (btn, index) {
      btn.addEventListener('mouseenter', function () {
        previewShopLookProduct(id, index);
      });
      btn.addEventListener('mouseleave', function () {
        clearShopLookPreview(id);
      });
      btn.addEventListener('focus', function () {
        previewShopLookProduct(id, index);
      });
      btn.addEventListener('blur', function () {
        clearShopLookPreview(id);
      });
      btn.addEventListener('click', function () {
        lockShopLookProduct(id, index);
      });
    });

    // Reset button
    const resetBtn = container.querySelector('.stl-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        resetShopLookState(id);
      });
    }

    // Set initial DEFAULT state
    renderShopLookState(id, 0, 'DEFAULT');
  });
}

function previewShopLookProduct(containerId, index) {
  const state = productStageState[containerId];
  if (!state) return;
  state.previewIndex = index;
  renderShopLookState(containerId, index, state.lockedIndex !== null ? 'LOCKED' : 'PREVIEW');
}

function clearShopLookPreview(containerId) {
  const state = productStageState[containerId];
  if (!state) return;
  state.previewIndex = null;
  const activeIndex = state.lockedIndex !== null ? state.lockedIndex : 0;
  const stateMode = state.lockedIndex !== null ? 'LOCKED' : 'DEFAULT';
  renderShopLookState(containerId, activeIndex, stateMode);
}

function lockShopLookProduct(containerId, index) {
  const state = productStageState[containerId];
  if (!state) return;

  // Toggle lock if clicking the already locked product
  if (state.lockedIndex === index) {
    resetShopLookState(containerId);
    return;
  }

  state.lockedIndex = index;
  renderShopLookState(containerId, index, 'LOCKED');
}

function resetShopLookState(containerId) {
  const state = productStageState[containerId];
  if (!state) return;
  state.lockedIndex = null;
  state.previewIndex = null;
  renderShopLookState(containerId, 0, 'DEFAULT');
}

function renderShopLookState(containerId, index, mode) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const dataEl = container.querySelector('.shop-look-data');
  if (!dataEl) return;

  let products = [];
  try {
    products = JSON.parse(dataEl.textContent);
  } catch (err) {
    console.error('Invalid Shop The Look product data', err);
    return;
  }

  if (!products[index]) return;

  const prod = products[index];

  const imgEl = container.querySelector('.stl-featured-img');
  const catEl = container.querySelector('.stl-featured-category');
  const titleEl = container.querySelector('.stl-featured-title');
  const descEl = container.querySelector('.stl-featured-desc');
  const whyEl = container.querySelector('.stl-featured-why');
  const ctaEl = container.querySelector('.stl-featured-cta');
  const badgeEl = container.querySelector('.stl-state-badge');
  const resetBtn = container.querySelector('.stl-reset-btn');
  const animContainer = container.querySelector('.stl-anim-overlay');

  if (imgEl && prod.img) {
    imgEl.src = prod.img;
    imgEl.alt = prod.alt || prod.name;
  }
  if (catEl && prod.category) catEl.textContent = prod.category;
  if (titleEl && prod.name) titleEl.textContent = prod.name;
  if (descEl && prod.desc) descEl.textContent = prod.desc;
  if (whyEl && prod.whyItWorks) whyEl.textContent = prod.whyItWorks;

  if (ctaEl && prod.href) {
    ctaEl.href = prod.href;
    if (prod.onclick) {
      ctaEl.setAttribute('onclick', prod.onclick);
    } else {
      const label = 'stl-' + prod.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      ctaEl.setAttribute('onclick', `trackAffiliate('${prod.href}', '${label}');`);
    }
  }

  // Update State Badge & Reset Button visibility
  if (badgeEl) {
    badgeEl.textContent = mode;
    badgeEl.setAttribute('data-state', mode);
  }
  if (resetBtn) {
    resetBtn.style.display = mode === 'LOCKED' ? 'inline-flex' : 'none';
  }

  // Update product-specific atmospheric visual class on stage
  if (animContainer) {
    animContainer.className = 'stl-anim-overlay ' + (prod.animClass || 'anim-default');
  }

  // Active thumb buttons styling & accessibility
  const buttons = container.querySelectorAll('.stl-thumb-btn');
  buttons.forEach(function (btn, idx) {
    if (idx === index) {
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    }
  });
}

// Zero-Reload Product Switcher compatibility wrapper
function switchShopLookProduct(containerId, index) {
  lockShopLookProduct(containerId, index);
}

// Keyboard navigation for selector buttons
function initShopLookKeyboard() {
  const buttons = document.querySelectorAll('.stl-thumb-btn');
  buttons.forEach(function (btn) {
    btn.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });
}
