# 🚀 ElevateLiving Publish OS (Zero-Confusion v3.0)

Welcome to the premium affiliate media system. Built for **Extreme PageSpeed**, **Pinterest Mobile SEO**, and **Zero Build Complexity**.

---

## 🧱 1. SYSTEM CORE (The 4 Asset Files)

To scale to 100+ articles without speed degradation, we centralize all logic into 4 files:
- `/assets/css/main.css`: Design tokens, typography, and site-wide layout.
- `/assets/css/components.css`: Reusable UI (Product Cards, FAQ, Newsletter, Buttons).
- `/assets/css/article.css`: Post-specific typography optimized for mobile reading.
- `/assets/js/tracking.js`: Vanilla JS for mobile nav and affiliate conversion tracking.

---

## 🧱 2. REPOSITORY MAP

- `/index.html`: The cluster-focused homepage.
- `/skeleton-article.html`: The master blueprint for every new article.
- `/metadata.json`: Site configuration & permissions.
- `/*.html`: All articles live at the root for maximum crawl depth efficiency.

---

## 🚀 3. PUBLISHING WORKFLOW (SOP)

Follow this 5-step process to publish a new high-intent article:

1. **Initialize:** Duplicate `skeleton-article.html`.
2. **Slug:** Rename file using kebab-case (e.g., `best-outdoor-rugs-2026.html`).
3. **Content:**
   - Update `<title>`, `<meta description>`, and `<link rel="canonical">`.
   - Update **JSON-LD Schema** in the `<head>`.
   - Paste content into `content-section` blocks.
4. **Commerce:**
   - Insert Product Cards using the template component.
   - **Crucial:** Every `<img>` must have explicit `width` and `height` to prevent Layout Shift (CLS).
   - Use `ElevateLiving.trackAffiliate(url, 'label')` for Amazon links.
5. **Distribute:** Add a Thumbnail Card to the `index.html` homepage.

---

## 📸 4. IMAGE PROTOCOL (Performance First)

- **Format:** Always prefer **WebP**.
- **Dimensions:** 
  - Hero: 1200px width.
  - Product Shots: 800x800px.
- **Attributes:** Always include `loading="lazy"` and `width/height`.
- **Naming:** `[keyword]-description.webp`.

---

## ⚡ 5. PERFORMANCE SPECS

- **FCP:** < 0.8s
- **LCP:** < 1.2s
- **CLS:** 0.00
- **Total Bundle Size:** < 50KB (Excluding Amazon images)

---

**© 2026 ElevateLiving Performance Engineering. Simplified for high-velocity growth.**
