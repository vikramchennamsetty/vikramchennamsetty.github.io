---
name: elevate-affiliate-compliance
description: >-
  Enforces absolute affiliate compliance, Amazon Associate tags, normalized URL/tracking parity, 
  Affiliate Conversion Intelligence, visual merchandising, CTA hierarchy, and ethical commerce standards.
version: 4.3
triggers:
  - Creating, editing, or auditing affiliate links, Amazon product CTAs, or commercial product cards.
  - Implementing visual merchandising, product groupings, comparison tables, or Shop-The-Look components.
  - Adding or modifying `trackAffiliate(...)` analytics tracking handlers.
  - Managing Amazon Associate tags (`elevateliv05f-20` for US, `elevatelivi08-21` for IN).
  - Validating rendered button text contrast, touch targets, and visual presentation of commercial CTAs.
scope: affiliate-compliance-and-conversion-intelligence
risk: high
source:
  type: internal-upgraded
  version: 4.3
  adapted_from: "sickn33/agentic-awesome-skills (analytics-tracking)"
  license: MIT
---

# Elevate Affiliate Compliance & Conversion Intelligence Skill (V4.3)

## Purpose
Guarantees 100% affiliate link navigation integrity, dual CTA validation (visual rendering + navigation mechanics), strict Amazon Associate tag compliance (`elevateliv05f-20`), exact `href` vs `trackAffiliate` identity parity, zero `href="#"` dead links, zero `return false` blocks, `target="_blank"` + `rel="sponsored nofollow"`, while providing Affiliate Conversion Intelligence to maximize reader trust, visual contrast, and conversion performance.

---

## Phase 13 — Affiliate Conversion Intelligence (ETHICAL CONVERSION)

Compliance ALWAYS wins over conversion. Once compliance is 100% guaranteed, apply conversion intelligence:

### 1. Contextual Visual Merchandising
- **Problem-First Placement:** Introduce products ONLY after explaining the exact spatial or aesthetic problem they solve. Never dump uncontextualized product links.
- **Product Grouping & Curation:** Present 3–5 complementary products per scene (e.g., Coffee Table + Ceramic Vase + Architectural Table Book + Brass Candle Warmer).
- **Comparison & Tradeoff Tables:** Use clear comparison matrices (Dimensions, Material, Ideal Room Type, Price Tier) so readers make confident decisions.

### 2. Card Architecture & Clickability
- **Whole-Card Clickability:** Wrap product images (`.product-image-link`) and product titles (`.product-title-link`) in valid commercial anchors so users can click anywhere on the card.
- **CTA Visual Hierarchy:**
  - *Primary CTA:* Direct Amazon purchase button (`.btn-amazon`, e.g. "Check Price on Amazon").
  - *Secondary CTA:* Internal Shop-The-Look reveal or detailed specification trigger.
- **Objection Handling:** Proactively address common reader hesitation in product descriptions (e.g. "Rental-friendly zero-drill mounting", "Spill-resistant washable fabric", "Compact 16-inch footprint").

---

## Strict Anti-Fabrication Rule (HARD STOP)

> [!CAUTION]
> **NEVER INVENT OR FABRICATE COMMERCIAL DATA.**

Antigravity MUST NEVER invent:
- Exact live prices (e.g., "$49.99") — prices change dynamically on Amazon. Use price tiers ("Under $50", "Investment Piece") or direct to Amazon via "Check Price".
- Review scores or star ratings (e.g., "4.8 out of 5 stars").
- Total review counts (e.g., "Over 2,000 positive reviews").
- Scarcity or availability claims (e.g., "Only 3 left in stock").
- Specifications not confirmed by official product documentation.

---

## ABSOLUTE COMPLIANCE & LINK RULES

### 1. Absolute Forbidden Rules
- **NEVER** output `href="#"` or `javascript:void(0)` on any commercial link.
- **NEVER** use `return false;` or `event.preventDefault()` inside `onclick` handlers on affiliate anchors.
- **NEVER** allow `trackAffiliate` destination URL to differ from anchor `href`.
- **NEVER** place conflicting inline `onclick` handlers on `<img>` tags wrapped inside product image anchors.

### 2. Absolute Required Rules
- **MUST** specify a real, destination-verified Amazon product URL in `href`.
- **MUST** contain correct, verified ASIN matching product copy.
- **MUST** assign correct Amazon marketplace domain (`amazon.com` for US, `amazon.in` for IN).
- **MUST** append valid Associate tag (`elevateliv05f-20` for US, `elevatelivi08-21` for IN).
- **MUST** specify `target="_blank"`.
- **MUST** specify `rel="sponsored nofollow"`.

---

## Normalized `href` / `trackAffiliate` Identity Test

Every commercial link MUST pass the Normalized Identity Test:

$$\text{NORMALIZED}(\text{anchor.href}) == \text{NORMALIZED}(\text{trackAffiliate destination})$$

**IF NORMALIZED STRINGS DIFFER AT ALL -> RESULT IS FAIL.**

---

## Related Skills
- `elevate-browser-uat`: Automates browser clicks and tab navigation checks.
- `elevate-source-integrity`: Verifies product identity and source URLs before editing.
- `elevate-regression-prevention`: Protects affiliate link contracts during releases.
