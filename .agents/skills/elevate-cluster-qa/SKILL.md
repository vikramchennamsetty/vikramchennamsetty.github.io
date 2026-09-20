---
name: elevate-cluster-qa
description: >-
  Enforces 4-cluster art direction parity, reference-page benchmarking, completed-page protection, 
  GA4 analytics taxonomy, and pre-deployment visual regression validation across all ElevateLivingCo articles.
version: 3.1
triggers:
  - Performing pre-deployment validation, visual QA, or whole-repository audits.
  - Rebuilding or editing articles within the 4 publication clusters.
  - Verifying GA4 tracking events or cluster internal-linking structures.
scope: cluster-art-direction-and-qa
risk: high
source:
  type: internal-upgraded
  version: 3.1
  adapted_from: "sickn33/agentic-awesome-skills (ui-review, code-review-checklist)"
  license: MIT
---

# Elevate Cluster & Visual QA Skill (V3.1)

## Purpose
Ensures cluster-specific visual styling remains cohesive, validates article implementations against reference standards, enforces completed-page protection, and guarantees rigid pre-deployment QA before release.

---

## The 4 Publication Clusters

| Cluster Name | Theme Attribute | Palette & Atmosphere | Target Articles |
|---|---|---|---|
| **Dark Academia** | `data-theme="dark-academia"` | Obsidian + charcoal + aged gold + warm amber lighting + scholarly mood | `dark-academia-apartment-decor-2026.html`, `7-dark-bookshelf-styling-ideas.html`, `5-moody-entryway-ideas-luxury-on-budget.html`, `dark-luxury-kitchen-accessories-2026.html` |
| **Quiet Luxury** | `data-theme="quiet-luxury"` | Warm ivory + muted gold + dark walnut + unlacquered brass | `old-money-interiors-quiet-luxury-aesthetic.html`, `5-antique-bar-carts-2026.html`, `why-some-apartments-feel-expensive.html` |
| **Small Space** | `data-theme="small-space"` | Muted stone + soft cream + natural daylight + clean architectural lines | `small-living-room-decor-ideas.html`, `7-modern-coffee-tables-that-make-apartments-look-expensive-2026.html`, `how-to-style-a-round-coffee-table-like-a-designer-2026.html` |
| **Patio / Outdoor** | `data-theme="patio-outdoor"` | Stone + warm teak + botanical green + outdoor sanctuary textures | `cheap-patio-setup-under-50.html`, `5-patio-mistakes-that-make-your-space-look-cheap-fix-under-50.html`, `best-waterproof-outdoor-rug-patio-under-50.html` |

---

## Completed-Page Protection & 3-Way Benchmark Protocol

Every article MUST be evaluated against three authoritative baselines prior to modification:
1. **Global Design System:** Validates 8px grid, typography scale, header/footer contracts, and accessibility tokens.
2. **Cluster Theme Specification:** Validates `data-theme` attribute, `theme-skins.css` link, accent colors, and background contrast.
3. **Nearest Reference Page:** Compares visual pacing, component quality, and CTA structure against the completed cluster reference page.

**Hard Rule:** Never rewrite a completed reference page solely because a different visual structure looks cleaner.

---

## GA4 Analytics Event Taxonomy

Verify that `tracking.js` event names and data payloads are preserved:
- `affiliate_click` (URL, Product Name, Page)
- `hero_enter` (Immersive hero entered)
- `room_view` (Room section 50% in viewport)
- `style_select` (Atmosphere card selected)
- `shop_the_look_view` (Shop The Look component in viewport)
- `shop_product_select` (Thumbnail switcher clicked)
- `product_card_click` (Product card clicked)
- `related_article_click` (Internal cluster link clicked)

---

## Pre-Deployment Verification Matrix

Before declaring any article or refactor ready for deployment:
1. **Theme Skin Check:** Verify `<html data-theme="...">` and `<link rel="stylesheet" href="assets/css/theme-skins.css">` exist.
2. **Css Class Existence Check:** Confirm all CSS classes in the DOM exist in loaded stylesheets.
3. **8-Viewport Inspection:** Verify zero horizontal overflow at 375px, 390px, 412px, 430px, 768px, 1024px, 1280px, 1440px.
4. **Link Integrity:** Verify 0 broken internal links or extensionless URL mismatches.

---

## Related Skills
- `elevate-browser-uat`: Executes headless browser automation across viewports.
- `elevate-regression-prevention`: Protects cluster surfaces and shared interfaces.
- `elevate-design-system`: Enforces design tokens and component contracts.
