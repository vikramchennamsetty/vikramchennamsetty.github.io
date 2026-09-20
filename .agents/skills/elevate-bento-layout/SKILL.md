---
name: elevate-bento-layout
description: >-
  Controlled design capability providing modular, asymmetric grid layout patterns, multi-span card 
  hierarchies, and responsive column collapse for editorial showcases and Shop The Look displays within Elevate.
version: 1.0
source: design-system-foundations
source_repository: https://github.com/Gatsbyhateyou/gatsby-website
source_path: STANDARDIZED_FROM_DESIGN_SYSTEM_FOUNDATIONS
source_license: MIT
integration_status: STANDARDIZED_FROM_DESIGN_SYSTEM_FOUNDATIONS
triggers:
  - "bento layout"
  - "bento grid"
  - "modular bento showcase"
  - "asymmetric editorial grid"
scope: design-capability
risk: low
---

# Elevate Bento Layout Design Capability (V1.0)

## 1. PURPOSE
Provides layout rules and responsive grid patterns for asymmetric, multi-span card arrangements ("Bento Layout") across Elevate Living Co editorial homepages, category showcases, and Shop The Look clusters.

> [!IMPORTANT]
> Bento is strictly a **LAYOUT PATTERN**, not a complete visual identity or color system.

## 2. WHEN TO USE
- Editorial feature showcases (e.g. Hero article + 3 supporting trend cards).
- "Shop The Look" room composition grids where one anchor item is paired with secondary styling accessories.
- Category overview landing pages displaying diverse content types (video, image, article link, stats).

## 3. WHEN NOT TO USE
- Homogeneous product comparison lists where items require equal visual weight.
- Long-form linear reading body text.
- Simple 2-column or 3-column uniform grid requirements.

## 4. DESIGN FOUNDATIONS
The Bento layout organizes content into a tight grid of distinct boxes of varying sizes (spans), creating visual rhythm, clear focal hierarchy, and high visual scannability.

## 5. TOKENS / VISUAL RULES
- **Grid Container:** `display: grid; grid-template-columns: repeat(12, 1fr); gap: 20px;` (desktop).
- **Asymmetric Spans:**
  - Hero Anchor Card: `grid-column: span 8; grid-row: span 2;`
  - Secondary Accent Cards: `grid-column: span 4;`
  - Stat/Feature Pill Card: `grid-column: span 4;`
- **Border Radius:** Consistent `border-radius: 16px` across all Bento tiles in a single container.

## 6. COMPONENT PATTERNS
- **Hero Bento Anchor:** Large featured tile with image background and high-contrast title.
- **Sidekick Bento Card:** Compact secondary tile featuring quick tips or product highlights.
- **Bento Stat Card:** Highlight box for single data points or callout metrics.

## 7. LAYOUT RULES
- Never force all Bento tiles into uniform 1x1 sizes—asymmetry is essential to Bento rhythm.
- Maintain consistent inner tile padding (`24px` desktop, `16px` mobile).

## 8. RESPONSIVE RULES
- **Desktop ($\ge 1024\text{px}$):** Full 12-column asymmetric grid layout.
- **Tablet ($768\text{px} - 1023\text{px}$):** 6-column grid (`span 6` for hero, `span 3` for sidekicks).
- **Mobile ($<768\text{px}$):** Single-column stacked layout (`grid-template-columns: 1fr; gap: 16px;`).

## 9. ACCESSIBILITY
- **DOM Order Parity:** Screen reader / keyboard DOM tab order MUST match visual reading sequence (Hero first, followed logically by secondary cards).
- **Heading Hierarchy:** `h2` for section header, `h3` for Bento tile titles.

## 10. MOTION / PERFORMANCE
- Use CSS Grid layout for native browser rendering efficiency.
- Animate tile entrances using subtle staggered opacity/transform (`opacity: 0 -> 1`, `translateY(16px -> 0)`).

## 11. ANTI-PATTERNS
- Forcing uniform square boxes and calling it a Bento layout.
- Breaking keyboard tab order between DOM elements and CSS Grid visual positions.

## 12. INTERACTION WITH ELEVATE DESIGN SYSTEM
- `elevate-design-intelligence` verifies if content hierarchy benefits from a Bento layout.
- Visual styling (colors, fonts, shadows) inside Bento tiles is governed by `elevate-design-system`.

## 13. SOURCE PROVENANCE
- Standardized from modern frontend Bento Grid layout specifications.
- Source path recorded as `STANDARDIZED_FROM_DESIGN_SYSTEM_FOUNDATIONS`.

## 14. QA CHECKLIST
- [ ] 12-column grid definition valid.
- [ ] Mobile single-column collapse verified at 375px.
- [ ] Keyboard DOM order matches visual layout flow.
- [ ] Heading hierarchy (`h2` $\rightarrow$ `h3`) maintained.
