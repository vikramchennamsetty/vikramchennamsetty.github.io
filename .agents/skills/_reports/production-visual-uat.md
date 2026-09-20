# Elevate V3.1 — Production Visual UAT Report

**Date:** 2026-09-18  
**Scope:** Real Browser Visual UAT & Screenshot Inspection against Live Production Site (`https://elevatelivingco.me/`)  
**Auditor:** Antigravity System Architect  
**Mode:** **READ-ONLY AUDIT — ZERO PRODUCTION WEBSITE CODE MODIFIED**

---

## 1. Executive Status Summary

| Audit Category | Final Status | Details |
|---|---|---|
| **Visual Browser UAT Execution** | **PASS** | Automated Playwright Chromium browser executed across all 14 production URLs & 8 viewports |
| **Viewport Coverage (375px–1440px)** | **PASS** | Tested 8 required viewports (375px, 390px, 412px, 430px, 768px, 1024px, 1280px, 1440px) |
| **Screenshot Artifacts** | **PASS** | 28 full-page screenshots captured at 375px and 1440px for every URL |
| **Footer Styling & Layout** | **FAIL** | 8 un-rebuilt legacy articles on live production lack `components.css` stylesheet import, rendering unstyled text footers |
| **Horizontal Mobile Overflow** | **FAIL** | 3 articles display horizontal overflow (`scrollWidth > innerWidth`) on mobile viewports (375px–430px) due to un-responsive tables |
| **Theme System & Skins** | **PASS** | Theme attributes (`data-theme`) and theme color palettes render cleanly on all rebuilt articles |
| **Product Cards & CTAs** | **PASS** | All product cards display positive height/width; 0 broken CTA buttons |
| **Mobile Menu & FAQ Interaction** | **PASS** | Accordion toggles and navigation menu interactions operate correctly where present |
| **Affiliate External Click Navigation** | **EXTERNAL_CLICK_NOT_EXECUTED** | Outbound third-party Amazon domain navigation was blocked by headless sandbox policy |
| **Homepage Editorial Card Audit** | **FAIL** | Expected 13 editorial cards on homepage; actual count is 7 (6 articles missing from homepage cards) |

---

## 2. Tested Viewports & Screenshot Evidence

The following viewports were systematically tested for every URL:
1. **375px** (iPhone SE / Mobile Small) - Screenshot Captured
2. **390px** (iPhone 12/13/14 Pro)
3. **412px** (Pixel / Samsung Galaxy)
4. **430px** (iPhone Pro Max)
5. **768px** (iPad Vertical)
6. **1024px** (iPad Horizontal)
7. **1280px** (Desktop Medium)
8. **1440px** (Desktop Large) - Screenshot Captured

All 28 full-page PNG screenshots are stored locally under:
`C:\Users\chenn\.gemini\antigravity\brain\99f12aa5-545c-40ff-bc22-7776482729b1\scratch\screenshots\`

---

## 3. Element-by-Element Visual Inspection Matrix

| Element | Viewport | Observed Visual Behavior | Expected Visual Behavior | Status |
|---|---|---|---|---|
| **Header** | Desktop / Mobile | Clean logo positioning, category links visible, dark navbar contrast | Header renders with high contrast | **PASS** |
| **Hero Section** | 1440px | Clean typography, dark academia / quiet luxury background gradients intact | High-impact hero layout | **PASS** |
| **Article Body** | 1440px / 375px | Legible font sizes (16px–18px), readable line-height (1.6) | High readability | **PASS** |
| **Theme Skins** | 1440px | Theme data attributes (`data-theme="dark-academia"`, `quiet-luxury`, `small-space`, `patio-outdoor`) render distinct palettes without color bleeding | Discrete theme CSS palettes | **PASS** |
| **Typography** | All | Serif headers and clean sans-serif body text load correctly | Standard Elevate typography | **PASS** |
| **Product Cards** | 1440px | Product cards render cleanly with images, pricing, and CTA buttons | Unbroken grid layout | **PASS** |
| **Images** | All | Editorial and product imagery renders with zero image broken-icon placeholders | Clean image load | **PASS** |
| **CTA Buttons** | 1440px | Amazon gold/amber buttons (`.cta-button`, `.shop-now-btn`) render with hover effects | Visible, clickable CTA buttons | **PASS** |
| **Tables** | 375px–430px | Fixed table widths cause mobile horizontal scrollbars on 3 articles | Responsively wrapped tables | **FAIL** |
| **FAQ Section** | 375px / 1440px | Accordion items expand on click, revealing question answers | Collapsible details summary | **PASS** |
| **Related Content** | 1440px | Related article cards display clean link targets | Grid of related articles | **PASS** |
| **Newsletter** | 1440px | Input fields and subscribe buttons align properly | Form container intact | **PASS** |
| **Disclosure** | 1440px | FTC affiliate disclosure text visible in body and footer | Clear disclosure notice | **PASS** |
| **Footer** | 1440px | Rebuilt articles display `#070707` obsidian footer; 8 legacy articles on live site display unstyled background (`rgba(0,0,0,0)`) | Styled obsidian 4-column footer | **FAIL** |

---

## 4. Detailed Failure Log

### Failure 1: Unstyled Footer Text on Live Production Site
- **URL:** 
  - `https://elevatelivingco.me/dark-academia-apartment-decor-2026.html`
  - `https://elevatelivingco.me/7-dark-bookshelf-styling-ideas.html`
  - `https://elevatelivingco.me/5-moody-entryway-ideas-luxury-on-budget.html`
  - `https://elevatelivingco.me/dark-luxury-kitchen-accessories-2026.html`
  - `https://elevatelivingco.me/5-antique-bar-carts-2026.html`
  - `https://elevatelivingco.me/why-some-apartments-feel-expensive.html`
  - `https://elevatelivingco.me/small-living-room-decor-ideas.html`
  - `https://elevatelivingco.me/cheap-patio-setup-under-50.html`
  - `https://elevatelivingco.me/5-patio-mistakes-that-make-your-space-look-cheap-fix-under-50.html`
  - `https://elevatelivingco.me/best-waterproof-outdoor-rug-patio-under-50.html`
- **Viewport:** 1440px & 375px
- **Element:** `footer.site-footer`
- **Observed Behavior:** Computed background color is `rgba(0, 0, 0, 0)` (transparent) with default un-themed text color (`rgb(10, 10, 10)` or `rgb(184, 178, 170)`).
- **Expected Behavior:** Styled obsidian background (`rgb(7, 7, 7)`) with gold headings and 4-column grid layout.
- **Evidence Screenshot:** `dark-academia-apartment-decor-2026.html_1440px.png`
- **Likely Root Cause:** The live deployed files on GitHub Pages for these articles do not include `<link rel="stylesheet" href="assets/css/components.css">` in `<head>`. (Note: Local rebuild commits fix this once pushed).

---

### Failure 2: Horizontal Scrollbar / Mobile Overflow on 3 Articles
- **URL:** 
  - `https://elevatelivingco.me/old-money-interiors-quiet-luxury-aesthetic.html` (scrollWidth: 463px at 375px viewport)
  - `https://elevatelivingco.me/7-modern-coffee-tables-that-make-apartments-look-expensive-2026.html` (scrollWidth: 769px at 375px viewport)
  - `https://elevatelivingco.me/how-to-style-a-round-coffee-table-like-a-designer-2026.html` (scrollWidth: 463px at 375px viewport)
- **Viewport:** 375px, 390px, 412px, 430px
- **Element:** `document.documentElement` / `table.comparison-table`
- **Observed Behavior:** Page `scrollWidth` exceeds viewport `innerWidth`, forcing a horizontal scrollbar on mobile devices.
- **Expected Behavior:** Page content stays strictly within viewport bounds (`scrollWidth == innerWidth`).
- **Evidence Screenshot:** `7-modern-coffee-tables-that-make-apartments-look-expensive-2026.html_375px.png`
- **Likely Root Cause:** Fixed-width HTML `<table>` elements or `<pre>` containers lacking `overflow-x: auto` wrapper or max-width CSS constraints on mobile screen sizes.

---

## 5. Homepage Editorial Card & Link Categorization Audit

**Target URL:** `https://elevatelivingco.me/`

### Editorial Card Summary
- **Expected Editorial Cards:** 13
- **Actual Editorial Cards Present:** 7
- **Homepage Card Status:** **FAIL** (6 articles are unlinked in homepage editorial feature cards)

### Editorial Card Links (`editorialCardHrefs`)
1. `dark-academia-apartment-decor-2026.html`
2. `small-living-room-decor-ideas.html`
3. `old-money-interiors-quiet-luxury-aesthetic.html`
4. `7-modern-coffee-tables-that-make-apartments-look-expensive-2026.html`
5. `7-dark-bookshelf-styling-ideas.html`
6. `5-moody-entryway-ideas-luxury-on-budget.html`
7. `dark-luxury-kitchen-accessories-2026.html`

### Footer Article Links (`footerHrefs`)
1. `dark-academia-apartment-decor-2026.html`
2. `small-living-room-decor-ideas.html`
3. `old-money-interiors-quiet-luxury-aesthetic.html`
4. `dark-luxury-kitchen-accessories-2026.html`
5. `7-dark-bookshelf-styling-ideas.html`
6. `7-modern-coffee-tables-that-make-apartments-look-expensive-2026.html`
7. `5-moody-entryway-ideas-luxury-on-budget.html`
8. `5-antique-bar-carts-2026.html`
9. `cheap-patio-setup-under-50.html`

### Hotspot Article Links (`hotspotHrefs`)
*(None linked via hotspot interactive room elements)*

### Navigation Article Links (`navHrefs`)
1. `dark-academia-apartment-decor-2026.html`
2. `small-living-room-decor-ideas.html`
3. `old-money-interiors-quiet-luxury-aesthetic.html`
4. `dark-luxury-kitchen-accessories-2026.html`
5. `7-dark-bookshelf-styling-ideas.html`

### Other Article Links (`otherHrefs`)
*(None)*

---

## 6. Verification Status Summary

- **Visual Browser UAT Execution:** **PASS** (Playwright headless Chromium fully executed across all 14 URLs and 8 viewports).
- **Affiliate Outbound Navigation:** **EXTERNAL_CLICK_NOT_EXECUTED** (Blocked by headless environment policy).
- **Homepage Coverage Audit:** **FAIL** (7/13 cards present).
- **Production File Safety:** **PASS** (Zero production HTML, CSS, JS, skill, or metadata files modified).
