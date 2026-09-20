---
name: elevate-design-system
description: >-
  Enforces ElevateLivingCo global design tokens, 8px grid, typography hierarchy system, icon systems, 
  accessible split-text animation standards, component contracts, and WCAG AA accessibility.
version: 4.1
triggers:
  - Creating or modifying HTML/CSS layouts, headers, footers, section containers, or components.
  - Defining typography systems, font pairings, icon families, or responsive scaling rules.
  - Implementing split-text animations, letter/word wrapping, or text motion effects.
  - Modifying shared CSS files (`main.css`, `components.css`, `theme-skins.css`, `article.css`, `motion.css`).
scope: global-design-system
risk: high
source:
  type: internal-upgraded
  version: 4.1
---

# Elevate Design System Skill (V4.1)

## Purpose
Establishes a single, uncompromised visual hierarchy, component contract system, typography system, icon system, accessible text-split standard, responsive grid discipline, completed-page protection protocol, and WCAG AA accessibility model across ElevateLivingCo.

---

## 1. Typography as a System

Typography MUST participate in the art direction of the page:
- **Defined Font Roles:**
  - *Display Face:* High-end serif/display font for hero H1 titles and major section headings.
  - *Editorial / Body Face:* Highly legible serif or clean sans-serif for long-form reading.
  - *UI / Microcopy Face:* Clean, crisp sans-serif for CTAs, metadata, badges, navigation, and captions.
- **Systemic Consistency:** Typography rules apply uniformly across hero, section titles, body copy, product cards, sidebars, CTAs, metadata, and navigation. Avoid mixing unrelated font families.
- **Typesetting Discipline:** Define explicit line-height (1.2–1.3 for display, 1.6–1.7 for body), max measure (60–75 characters per line for body copy), and responsive fluid scaling (`clamp()`).

---

## 2. Accessible Split-Text Animation (HARD ACCESSIBILITY RULE)

When splitting text into words, characters, or lines for animation (GSAP SplitText or CSS reveals):

> [!CAUTION]
> **PRESERVE ORIGINAL ACCESSIBLE NAME IN THE DOM TREE:**
> 1. Meaningful text MUST remain fully accessible to screen readers as a contiguous string.
> 2. Wrap the intact original text in a screen-reader-only element (`.sr-only` / `aria-label`).
> 3. Mark decorative split fragments with `aria-hidden="true"` so assistive technologies do not announce fragmented syllables or letters individually.
> 4. NEVER split text inside interactive links (`<a>`) or inline semantic tags (`<em>`, `<strong>`).
> 5. Ensure a completely readable static version of the text is rendered if JavaScript is unavailable.

---

## 3. Interface Icon System

- **Primary Icon Library:** Prefer Solar icons via Iconify when suitable for UI controls, navigation, and badges.
- **Family Consistency:** Maintain a single icon stroke weight (e.g. linear 1.5px or solid) across all components. Never mix disparate icon families within the same interface.
- **Truthful Branding:** Use official SVG brand logos (from Iconify) ONLY when representing real companies truthfully. Never construct fake logo walls or un-verified partner grids.

---

## 4. Completed-Page Protection Protocol (MANDATORY)

Before editing any completed reference page (`dark-academia-apartment-decor-2026.html`, `5-antique-bar-carts-2026.html`, etc.):

1. **Inspect DOM:** Review existing markup, element structure, and class assignments.
2. **Inspect CSS Dependencies:** Confirm loaded stylesheets (`main.css`, `components.css`, `article.css`).
3. **Inspect JS Dependencies:** Confirm script imports (`tracking.js`, GA4).
4. **Inspect Canonicals & Schemas:** Verify `<link rel="canonical">` and JSON-LD structured data.
5. **Inspect Affiliate Links:** Verify Amazon URLs, ASINs, `target="_blank"`, `rel="sponsored nofollow"`, Associate tags.
6. **Inspect Screenshots:** Capture baseline screenshots at 375px and 1440px.
7. **Minimal Edits Only:** Apply ONLY minimal surgical edits.

**HARD RULE: NEVER REWRITE A COMPLETED PAGE SOLELY BECAUSE ANOTHER ARCHITECTURE LOOKS CLEANER.**

---

## 5. Protected Component Contracts

### 1. Shared Component Protection Protocol
When modifying a shared component or stylesheet (`.site-footer`, `.header`, `.product-card`, `components.css`):
1. Compile consumer inventory (e.g. 13 articles + homepage = 14 consumers).
2. Record exact consumer count.
3. Apply minimal surgical edits.
4. Test computed styling across 100% of consumers.
5. Compare screenshot renderings before/after modification.

### 2. Product-Card Contract
- Unified card containing image wrapper, badge, category tag, title link, rating indicator, benefit list, and primary Amazon CTA button.
- Parent `<a>` elements own navigation and tracking (`trackAffiliate`). Nested `<img>` tags inside `<a>` must NEVER contain conflicting inline `onclick` handlers.

---

## 6. Permanent Image & Visual Performance Governance Rules (A through J)

### Rule A — VERIFIED IMAGE SOURCE RULE
NEVER invent, guess, infer, or fabricate image URLs under any circumstances. Every image URL in production MUST be verified via HTTP 200 check.

### Rule B — HUMAN IMAGE ESCALATION RULE
If a required image is unavailable or unverified in the catalog/evidence ledger:
- Set state to `IMAGE_REQUIRED_HUMAN_INPUT`.
- **STOP and ask the human for the image.** Do not silently search or select a random replacement.

### Rule C — ARTICLE IMAGE ISOLATION
An image verified for Article A must NOT automatically be assigned to Article B. Image identity is bound to:
$$\text{ARTICLE\_ID} + \text{ASIN / PRODUCT\_ID} + \text{IMAGE\_SOURCE} + \text{PROVENANCE} + \text{VERIFICATION\_STATE}$$

### Rule D — FULL IMAGE VISIBILITY RULE
Editorial and internal article-card images MUST show the complete source composition. Default setting:
$$\text{object-fit: contain;}$$

### Rule E — NO AUTOMATIC CROP RULE
Do NOT use `object-fit: cover` for editorial/article-card imagery unless the human explicitly requests visual cropping.

### Rule F — RESPONSIVE MEDIA FRAME RULE
Card media frames must preserve source aspect ratios while maintaining consistent visual dimensions (`aspect-ratio` or fixed height container with flex centering and subtle neutral background).

### Rule G — IMAGE DELIVERY RULE
Optimize image resolution and transfer size according to actual rendered container dimensions (e.g. using Amazon CDN `_AC_SL500_.jpg` variants when rendered card width is $\le 400\text{px}$) without degrading visual quality.

### Rule H — PERFORMANCE RULE
Image payload optimization must NEVER sacrifice complete visual composition or cause layout shifts ($0.00$ CLS).

### Rule I — 3D HERO RULE
Product-focused editorial heroes MUST be a single coherent interior environment ($\text{ROOM} + \text{PRODUCTS} + \text{DECOR}$). Product collages or floating rectangles are strictly prohibited.

### Rule J — 3D LCP RULE
The static hero image MUST render first as the LCP asset (`loading="eager"`, `fetchpriority="high"`). Three.js initializes asynchronously post-paint and MUST pause rendering loops using `IntersectionObserver` when the hero is outside the active viewport.

---

## Related Skills
- `elevate-design-intelligence`: Art direction thesis, creative direction brief, and 16 validation gates.
- `elevate-visual-assets`: Media art direction, asset provenance, icon asset licensing.
- `elevate-immersive-motion`: GSAP choreography and scroll timeline triggers.
- `elevate-browser-uat`: Real-browser UAT across viewports and accessibility states.
