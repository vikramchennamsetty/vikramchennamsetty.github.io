---
name: elevate-seo-performance
description: >-
  Protects indexed URLs, canonical tags, schema/content parity, Core Web Vitals (LCP <= 2.0s, CLS < 0.1, INP < 200ms), 
  animation & media performance budgets, SVG complexity limits, and zero-drift SEO routing.
version: 4.0
triggers:
  - Creating or editing page metadata, titles, descriptions, canonical tags, or robots directives.
  - Adding or modifying JSON-LD structured data schemas (`Article`, `BreadcrumbList`, `FAQPage`, `HowTo`, `Product`).
  - Optimizing page load speeds, image/video preloading, Core Web Vitals, or performance budgets.
scope: seo-and-web-performance-mastery
risk: high
source:
  type: internal-upgraded
  version: 4.0
  adapted_from: "sickn33/agentic-awesome-skills (seo-audit, seo-drift, web-performance-optimization)"
  license: MIT
---

# Elevate SEO & Performance Skill (V4.0)

## Purpose
Maintains search engine indexation, structured data validity, zero-drift canonical routing, animation & media performance stability, and sub-2-second Core Web Vitals performance across mobile and desktop devices.

---

## Technical SEO & Immutable Asset Protection

1. **Canonical & URL Path Protection:**
   - Canonical URLs MUST match the exact published path: `https://elevatelivingco.me/[slug].html`.
   - NEVER alter published `.html` filenames or remove `.html` extensions.
   - Run **Canonical Drift Checks** after every task.
2. **Metadata Integrity:**
   - Every page MUST contain `<title>`, `<meta name="description">`, `<meta name="keywords">`, `<meta name="robots" content="index, follow...">`, and complete OpenGraph + Twitter tags.
3. **Schema / Content Parity Rule:**
   - JSON-LD schemas MUST reflect actual visible content present in the HTML DOM.
   - `FAQPage` schema is permitted ONLY when matching visible `<div class="faq-card">` accordion content exists.
   - `Product` schema is permitted ONLY when valid, verified product facts exist. NEVER fabricate prices, star ratings, or availability figures in schema.

---

## Animation & Media Performance Budgets (Phase 14)

### 1. Core Web Vitals Thresholds
- **LCP (Largest Contentful Paint):** $\le 2.0\text{s}$ (Articles), $\le 2.5\text{s}$ (Homepage).
- **CLS (Cumulative Layout Shift):** $< 0.1$.
- **INP (Interaction to Next Paint):** $< 200\text{ms}$.

### 2. Media Payload & Complexity Budgets
- **Total Initial Page Weight:** $\le 1.5\text{MB}$ (Articles), $\le 3.5\text{MB}$ (3D Homepage).
- **JavaScript Execution Cost:** $\le 150\text{KB}$ gzipped total JS (excluding isolated 3D scenes).
- **SVG Complexity Budget:** Inline SVGs MUST have $\le 500$ DOM nodes and payload $\le 25\text{KB}$.
- **Video Payload Budget:** Micro-video files (`.mp4`/`.webm`) MUST remain $\le 3.0\text{MB}$ and use `preload="metadata"`.
- **Image Sequence Frame Budget:** Single frames MUST be $\le 40\text{KB}$ WebP images; total sequence $\le 2.5\text{MB}$.

### 3. Execution & Event Throttling
- **Scroll Event Throttling:** ALL custom scroll event listeners MUST be throttled via `requestAnimationFrame` or `IntersectionObserver`. Never run heavy DOM calculations inside raw `window.onscroll` callbacks.

---

## Guardrails & Prohibited Behavior
- NEVER add schema markup merely to satisfy a checklist when the underlying HTML content does not exist.
- NEVER omit explicit `width` and `height` dimensions on images.
- NEVER alter canonical URLs, sitemap files, or indexing directives without explicit instruction.

---

## Related Skills
- `elevate-browser-uat`: Verifies console errors, network requests, and page load performance.
- `elevate-source-integrity`: Validates canonical paths and product schemas against authoritative data.
- `elevate-3d-web-experience`: Manages WebGL rendering performance and 3D asset budgets.
