/**
 * ElevateLivingCo - Shop The Look Interactive Sidebar Component
 * Lightweight vanilla JS for cursor perspective tilt and zero-reload product switcher.
 */
document.addEventListener('DOMContentLoaded', function () {
  initShopLookTilt();
  initShopLookKeyboard();
});

// Cursor Perspective Tilt (Desktop only via hover query & reduced-motion check)
function initShopLookTilt() {
  const isTouchOrReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    !window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  if (isTouchOrReducedMotion) return;

  const tiltCards = document.querySelectorAll('.shop-look-card, .shop-look-img-container');
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
          card.style.transform = `perspective(1000px) rotateX(${mouseX.toFixed(2)}deg) rotateY(${mouseY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`;
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

// Zero-Reload Product Switcher
function switchShopLookProduct(containerId, index) {
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
  const ctaEl = container.querySelector('.stl-featured-cta');

  if (imgEl && prod.img) {
    imgEl.src = prod.img;
    imgEl.alt = prod.alt || prod.name;
  }
  if (catEl && prod.category) catEl.textContent = prod.category;
  if (titleEl && prod.name) titleEl.textContent = prod.name;
  if (descEl && prod.desc) descEl.textContent = prod.desc;

  if (ctaEl && prod.href) {
    ctaEl.href = prod.href;
    if (prod.onclick) {
      ctaEl.setAttribute('onclick', prod.onclick);
    } else {
      const label = 'stl-' + prod.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      ctaEl.setAttribute('onclick', `trackAffiliate('${prod.href}', '${label}');`);
    }
  }

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
