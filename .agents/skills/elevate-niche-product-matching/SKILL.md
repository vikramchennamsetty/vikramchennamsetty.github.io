---
name: elevate-niche-product-matching
description: >-
  Contextual mapping of candidate decor products to specific ElevateLivingCo articles, room contexts, 
  aesthetic styles, user problems, visual compositions, and portfolio roles—preventing irrelevant or 
  uncoordinated products from entering production guides.
version: 1.0
triggers:
  - "products for this article"
  - "what products fit this article"
  - "best products for this room"
  - "products for Dark Academia"
  - "products for small apartments"
  - "products that solve this décor problem"
  - "which products should go into Shop The Look"
  - "match Amazon products to this article"
  - "product selection for a specific style"
  - "product recommendations for a specific room"
scope: niche-product-matching
risk: medium
source:
  type: native-specialized
  version: 1.0
---

# Elevate Niche Product Matching Skill (V1.0)

## Purpose
Establishes the contextual intelligence layer for determining which product categories and product candidates genuinely fit a specific ElevateLivingCo article, audience, aesthetic style, room context, user problem, and editorial intent. Prevents visually mismatched, contextually irrelevant, or uncoordinated products from entering production guides simply because they are commercially attractive, trending, or readily available.

---

## 1. System Architecture & Relational Hierarchy

$$\text{ARTICLE INTENT} \longrightarrow \text{AUDIENCE} \longrightarrow \text{ROOM / CONTEXT} \longrightarrow \text{DECOR STYLE} \longrightarrow \text{USER PROBLEM} \longrightarrow \text{EDITORIAL PURPOSE} \longrightarrow \text{PRODUCT CATEGORY} \longrightarrow \text{PRODUCT CANDIDATE}$$

### Integration Pipeline:
- **`elevate-trend-demand-intelligence`:** Provides macro trend directions and seasonal demand signals.
- **`elevate-product-research-intelligence`:** Provides candidate product sets, quality signals, and PA-API data boundaries.
- **`elevate-niche-product-matching` (THIS SKILL):** Maps candidates to specific article contexts, room dilemmas, aesthetic styles, product roles, and Shop The Look compositions.
- **`elevate-source-integrity` & `elevate-affiliate-compliance`:** Validates 9-field identity parity, Associate tags (`elevateliv05f-20`), FTC disclosures, and protected link contracts.

---

## 2. The 18 Core Matching Dimensions

Every candidate product relationship MUST be evaluated across the relevant subset of these 18 matching dimensions:

1. **Article Intent:** Primary objective(s) of the guide (e.g. `PROBLEM_SOLUTION`, `ROOM_TRANSFORMATION`, `SMALL_SPACE`).
2. **Audience Persona:** Aesthetic-conscious apartment dwellers, renters, urban professionals, or small-space homeowners.
3. **Room / Context:** Specific spatial setting (Living Room, Bedroom, Reading Nook, Balcony, Rental Kitchen, Entryway).
4. **Decor Style:** Aesthetic classification (Dark Academia, Quiet Luxury, Warm Minimal, Organic Modern, Urban Rental).
5. **User Problem:** The explicit decorating dilemma being solved (low ambient light, cramped storage, bare walls).
6. **Product Purpose:** Primary function within the room setting (task lighting, vertical storage, tactile contrast).
7. **Visual Fit:** Silhouette, proportion, material finish, texture, and photographic harmony with surrounding items.
8. **Functional Fit:** Intended use, mounting requirements, portability, power source, and renter compatibility.
9. **Scale & Space Fit:** Physical footprint, clearance, and visual weight. If dimensions are unknown: `SCALE_UNVERIFIED`.
10. **Material & Finish Fit:** Authenticity of materials (wood, brass, blackened metal, velvet, stone, ceramic).
11. **Color & Palette Fit:** Harmonious or intentional contrast relationship with the article's color palette.
12. **Price Positioning:** Aligned with intended article Positioning (`PRICE_VERIFIED` / `PRICE_UNVERIFIED`).
13. **Seasonal Relevance:** Seasonal alignment (spring refresh, fall cozy, summer balcony, holiday).
14. **Trend Relevance:** Contextual trend support received from `elevate-trend-demand-intelligence`.
15. **Editorial Usefulness:** Gives the article something meaningful to explain or demonstrate.
16. **Commercial Relevance:** Verified affiliate destination URL and Associate tag (`elevateliv05f-20`).
17. **Existing Elevate Coverage:** Cross-referenced against `AMAZON_PRODUCT_CATALOG.csv` to avoid unintentional catalog duplication.
18. **Portfolio Diversity:** Balanced distribution across decor roles, silhouettes, and price tiers.

---

## 3. Article Intent Classification Matrix

Articles may possess single or mixed intents. Never force a single label on mixed-intent guides:

- `INSPIRATION`: Visual mood boards, emerging design trends, aesthetic showcases.
- `HOW_TO`: Step-by-step decorating tutorials and styling guides.
- `PROBLEM_SOLUTION`: Dedicated guides addressing specific spatial or lighting dilemmas.
- `PRODUCT_DISCOVERY`: Curated roundups of design-forward product recommendations.
- `ROOM_TRANSFORMATION`: Before/after room makeovers and complete room styling.
- `STYLE_GUIDE`: In-depth exploration of a specific decor taxonomy (e.g. Dark Academia).
- `COMPARISON`: Head-to-head evaluation of decor solutions or material choices.
- `SEASONAL`: Time-bound seasonal refreshes (fall cozy, spring balcony).
- `GIFTING`: Curated holiday or occasion gift guides.
- `SMALL_SPACE`: Specialized solutions for compact apartments ($\le 750\text{ sq ft}$).
- `RENTAL_FRIENDLY`: Non-permanent, damage-free decorating solutions.
- `BUDGET`: Accessible, high-value decor selections.
- `LUXURY`: Investment pieces and high-end materials.
- `MIXED`: Combination of multiple intent types (e.g. Rental-Friendly + Small-Space + Dark Academia).

---

## 4. Elevate Decor Style Taxonomy & Visual Verification

Styles MUST be evaluated using visual and material evidence—**never rely solely on retailer promotional labels**:

| Elevate Style | Key Material & Finish Indicators | Color Palette Profile | Signature Product Forms |
|---|---|---|---|
| **Dark Academia** | Aged brass, walnut, espresso wood, velvet, leather, stone, antique glass. | Oxblood, forest green, charcoal, warm gold, deep espresso. | Candle-style lamps, floating book ledges, brass sconces, bust sculptures. |
| **Quiet Luxury** | Travertine, unlacquered brass, bouclé, cashmere, honed marble, smoked glass. | Cream, taupe, warm beige, soft charcoal, muted warm bronze. | Sculptural ceramic vases, low-profile sofas, minimalist marble trays. |
| **Warm Minimalist** | Light oak, natural linen, matte ceramic, brushed nickel, woven jute. | Warm white, oat, sand, soft terracotta, pale olive. | Arc floor lamps, organic ceramic vessels, linen curtains, woven baskets. |
| **Urban Rental** | Lightweight metal, damage-free hanging, rechargeable lighting, rugs. | Flexible neutral base with high-contrast accent pieces. | Plug-in sconces, tension-rod shelving, washable area rugs, modular carts. |

---

## 5. Problem $\rightarrow$ Product Category Mapping Framework

Every recommended product category MUST directly address the article's core problem:

```
                  [USER PROBLEM]
                        │
        ┌───────────────┼───────────────┐
   Low Ambient      Cramped Small      Unfinished
     Light?            Space?         Rental Wall?
        │                 │                │
┌───────┴───────┐ ┌───────┴───────┐ ┌──────┴───────┐
 Table Lamps       Vertical Shelving  Removable Sconces
 Rechargeable     Slim Cabinets      Leaning Mirrors
 Candle Warmers   Under-Bed Drawers  Framed Canvases
```

*Rule: Do NOT force products into an article if they do not materially address the stated problem.*

---

## 6. Product Role Classification System

Assign every candidate product to one of these 8 explicit portfolio roles:

1. **PRIMARY SOLUTION:** Direct, high-impact answer to the article's primary user problem.
2. **SECONDARY SOLUTION:** Complementary item addressing a secondary aspect of the problem.
3. **SUPPORTING DETAIL:** Functional or structural accessory that completes the primary solution.
4. **VISUAL ACCENT:** Aesthetic focal point adding texture, color contrast, or visual interest.
5. **OPTIONAL ALTERNATIVE:** Budget, premium, or size variation of the primary solution.
6. **EDITORIAL EXAMPLE:** Illustrative item used to explain a specific design principle.
7. **WEAK FIT:** Contextually marginal item that adds minimal value; candidate for exclusion.
8. **REJECT:** Mismatched style, wrong room context, unverified identity, or irrelevant product category.

---

## 7. Match Classification Framework & Evidence Model

Assign candidate matching status accompanied by an explicit, evidence-based written rationale:

- **STRONG MATCH:** Perfect alignment across style, room context, problem solved, visual fit, and scale.
- **GOOD MATCH:** High contextual alignment; minor visual or scale variation that remains fully compatible.
- **CONDITIONAL MATCH:** Fits contextually but requires specific styling conditions or optional placement.
- **REQUIRES VERIFICATION:** Strong conceptual fit, but missing verified dimensions (`SCALE_UNVERIFIED`) or commercial URL.
- **WEAK MATCH:** Marginal fit; clashes slightly with color palette or scale; avoid unless no alternative exists.
- **REJECT:** Direct style conflict, wrong room setting, fails problem-solving fit, or source conflict.

### Standardized Match Evidence Schema:
```markdown
ARTICLE: 7 Dark Academia Bookshelf Styling Ideas
PRODUCT: Aged Brass Candle-Style Battery Lamp (ASIN: B0CTJGJL2T)
MATCH DIMENSIONS:
  - Style Fit: Dark Academia (Aged brass finish, mood lighting)
  - Room Setting: Private Library / Living Room Reading Nook
  - Problem Solved: Low ambient shelf lighting without visible cords
  - Function: Cordless battery-powered ambient illumination
  - Visual Fit: Exceptional silhouette harmony with dark walnut shelving
  - Scale Fit: Compact footprint (5" x 5" base) fits standard 10" shelf depth
CLASSIFICATION: STRONG MATCH
PRODUCT ROLE: PRIMARY SOLUTION
RATIONALE: Perfectly solves the cord-free shelf lighting problem in Dark Academia interiors while reinforcing the antique library aesthetic.
```

---

## 8. Shop The Look Cohesive Room Composition

When an article features a **Shop The Look** section, the recommended products MUST form a single, harmonized room composition—not a collection of 5 random affiliate links:

```markdown
### Shop The Look: The Dark Academia Reading Corner

1. **Focal Seating:** Deep Velvet Reading Armchair — *Role: Primary Comfort*
2. **Ambient Lighting:** Cordless Aged Brass Shelf Lamp — *Role: Task Illumination*
3. **Textile Layer:** Heavy Linen Drape in Forest Green — *Role: Light Control & Texture*
4. **Surface Accent:** Smoked Glass Candle Holder — *Role: Atmospheric Detail*
5. **Storage & Display:** Walnut Floating Book Ledge — *Role: Vertical Book Display*
```

*Rule: Shop The Look MUST feel like one professionally styled room layout.*

---

## 9. Pinterest Visual Coherence Protocol

For Pinterest-oriented articles:
- **Immediate Visual Confirmation:** Products must be immediately recognizable and match incoming visual pin expectations.
- **Save-Worthy Composition:** Products must naturally support visually compelling room scenes and formulas.
- **No Rigid Quotas:** Prohibit arbitrary rules like "one product every 250 words." Use natural topical and visual section boundaries.

---

## 10. Source Integrity & Conflict Stop Protocol

> [!CAUTION]
> **SOURCE CONFLICT HALT RULE:**
> If a candidate product's visual appearance contradicts its ASIN identity, product title, or destination URL:
> $$\text{IDENTITY\_STATUS} = \text{SOURCE\_CONFLICT}$$
> **STOP ALL MATCHING DECISIONS IMMEDIATELY.** Do not attempt to guess, swap, or match visually similar products until the identity conflict is resolved against authoritative program data.

---

## 11. Article-Level Matching Output Matrix

When evaluating product sets for an article, output the final matching decision in this structured matrix format:

| Candidate Product | Style Fit | Room Context | Problem Solved | Functional Fit | Visual Fit | Scale Fit | Product Role | Classification | Rationale |
|---|---|---|---|---|---|---|---|---|---|
| **Aged Brass Shelf Lamp** | Dark Academia | Library / Nook | Cordless Shelf Light | Cordless Battery | High Brass | 5" Base | Primary Solution | **STRONG MATCH** | Solves cord-free shelf lighting problem. |
| **Walnut Floating Ledge** | Dark Academia | Reading Nook | Vertical Display | Wall Mounted | High Walnut | 24" Depth | Secondary Solution | **GOOD MATCH** | Complements shelf lighting layout. |

---

## 12. Integration Matrix with Existing Skills

- `elevate-trend-demand-intelligence`: Provides macro trend directions and seasonal demand timing.
- `elevate-product-research-intelligence`: Provides candidate product sets, quality signals, and PA-API boundaries.
- `elevate-editorial-retention`: Integrates matched product sets into the 7-stage narrative structure.
- `elevate-source-integrity`: Enforces product truth, protected link contracts, and Phase 19 Hard Stop triggers.
- `elevate-affiliate-compliance`: Validates Associate tags (`elevateliv05f-20`), commercial link attributes, and FTC disclosures.
- `elevate-regression-prevention`: Incorporates failure patterns FP-037 to FP-042 and rules RULE-034 to RULE-039.
- `elevate-skill-evolution`: Tracks self-improving matching accuracy lessons.
