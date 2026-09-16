# 🚀 ElevateLiving Publish OS (Production Engine v3.5)

Welcome to ElevateLivingCo — a high-performance static affiliate publishing platform optimized for **Extreme PageSpeed**, **Pinterest Visual Commerce**, and **Technical SEO Compliance**.

---

## 🧱 1. SYSTEM ARCHITECTURE

Logic and styles are centralized into core asset files:
- `/assets/css/main.css`: Global design tokens, typography, header/footer layout.
- `/assets/css/components.css`: Reusable UI (Product Cards, FAQ accordions, Buttons, Newsletters).
- `/assets/css/article.css`: Post-specific typography optimized for mobile reading.
- `/assets/js/tracking.js`: Vanilla JS for mobile nav toggle, FAQ accordions, and GA4 `affiliate_click` tracking.

---

## 🧱 2. REPOSITORY MAP

- `/index.html`: Main cluster homepage.
- `/about.html`, `/contact.html`, `/privacy.html`, `/disclosure.html`, `/shop-amazon-finds.html`: Core utility & legal pages.
- `/*.html`: 13 high-intent articles placed at the root for maximum crawl depth efficiency.
- `/sitemap.xml`: XML sitemap containing production HTTPS canonical URLs.
- `/robots.txt`: Crawler directives pointing to `https://elevatelivingco.me/sitemap.xml`.

---

## 🚀 3. PUBLISHING WORKFLOW (SOP)

Follow this 5-step process when publishing a new article:

1. **Initialize:** Create static `.html` file at root using kebab-case slug (e.g., `best-outdoor-rugs-2026.html`).
2. **Head & Metadata:**
   - Add `<title>`, `<meta name="description">`, and `<link rel="canonical" href="https://elevatelivingco.me/[slug].html">`.
   - Add complete OpenGraph tags (`og:title`, `og:description`, `og:url`, `og:image`, `og:type`).
   - Include GA4 script (`G-SSKL97RTQC`) and `<script src="/assets/js/tracking.js" defer></script>`.
   - Insert JSON-LD `Article`, `Organization`, and `BreadcrumbList` schemas.
3. **Content & Layout:**
   - Use standard `<header class="site-header">` and `<footer>` components.
   - Insert body sections inside `<main class="article-container">`.
4. **Commerce & Images:**
   - Convert hero/og images to **WebP** format.
   - Include explicit `width` and `height` attributes on every `<img>` tag to prevent Layout Shift (CLS).
   - Use valid Amazon product links with parameter `tag=elevateliv00e-20`.
5. **Distribution & Sitemap:**
   - Link the article from `index.html` and contextually related articles.
   - Add entry to `sitemap.xml`.

---

## 🧪 4. VALIDATION COMMANDS

Run the automated verification test suite locally using Python 3.11+:

```bash
python scratch/P0_K_verification_suite.py
```

Checks performed:
- Canonical tag consistency (`.html` extensions).
- Sitemap URL alignment.
- Absence of `{search_term_string}` / `SearchAction` placeholders.
- 0 broken internal links or first-party asset paths.
- GA4 & `tracking.js` inclusion on 100% of pages.

---

**© 2026 ElevateLiving Performance Engineering.**
