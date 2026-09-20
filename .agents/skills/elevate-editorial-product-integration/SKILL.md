---
name: elevate-editorial-product-integration
description: Governs the contextual integration of validated products into editorial content, mapping article intent, user problems, section purpose, product roles, placement patterns, non-manipulative CTAs, and visual/mobile presentation without turning articles into affiliate catalogs.
---

# Editorial Product Integration Intelligence (v1.0)

## 1. Executive Summary & Core Principle

`elevate-editorial-product-integration` is Elevate's specialized capability for placing and contextualizing validated product recommendations within published articles. It establishes the bridge between editorial narrative flow and commercial product discovery.

### Core Principle
A product enters an article ONLY because it contributes directly to the reader's understanding, problem resolution, or aesthetic visualization.

**Prohibited Workflow (Catalogization):**
$$\text{ARTICLE} \rightarrow \text{INSERT PRODUCTS} \rightarrow \text{ADD AFFILIATE LINKS}$$

**Mandatory Workflow (Contextual Integration):**
$$\text{PROBLEM} \rightarrow \text{EXPLANATION} \rightarrow \text{SOLUTION PRINCIPLE} \rightarrow \text{PRODUCT CATEGORY} \rightarrow \text{CONTEXTUAL PRODUCT} \rightarrow \text{WHY IT FITS} \rightarrow \text{OPTIONAL COMMERCIAL ACTION}$$

### Key Architectural Boundaries
- **Does NOT** measure reader attention, scroll depth, or Pinterest retention (owned by `elevate-editorial-retention`).
- **Does NOT** format affiliate links, Associate tags, or disclosure notices (owned by `elevate-affiliate-compliance`).
- **Does NOT** evaluate raw commercial facts or ASIN validity (owned by `elevate-commercial-product-validation`).
- **Does NOT** evaluate initial style fit or room matching (owned by `elevate-niche-product-matching`).

---

## 2. Article Intent Integration Matrix

Product integration logic MUST adapt dynamically to the target article intent:

| Article Intent | Integration Pattern & Strategy | Primary Product Role |
|---|---|---|
| `HOW_TO` | Problem $\rightarrow$ Solution Principle $\rightarrow$ Practical Product Example | `PRIMARY SOLUTION` / `EDITORIAL EXAMPLE` |
| `COMPARISON` | Criteria $\rightarrow$ Product A/B/C $\rightarrow$ Objective Tradeoffs & Use-Case Fit | `PRIMARY SOLUTION` / `OPTIONAL ALTERNATIVE` |
| `INSPIRATION` | Visual Idea $\rightarrow$ Styling Principle $\rightarrow$ Contextual Product Anchor | `VISUAL ACCENT` / `SUPPORTING DETAIL` |
| `PROBLEM_SOLUTION` | Root Cause $\rightarrow$ Solution Mechanism $\rightarrow$ Dedicated Problem Solver | `PRIMARY SOLUTION` |
| `PRODUCT_DISCOVERY` | Category Context $\rightarrow$ Curated Spectrum $\rightarrow$ Distinct Product Cards | `PRIMARY SOLUTION` / `SECONDARY SOLUTION` |
| `ROOM_TRANSFORMATION` | Room Goal $\rightarrow$ Spatial Anchor $\rightarrow$ Layered Product Ensemble | `PRIMARY SOLUTION` / `SUPPORTING DETAIL` |
| `STYLE_GUIDE` | Aesthetic Blueprint $\rightarrow$ Style Signature $\rightarrow$ Representative Pieces | `VISUAL ACCENT` / `EDITORIAL EXAMPLE` |
| `SEASONAL` | Seasonal Need $\rightarrow$ Seasonal Solution $\rightarrow$ Timely Product | `PRIMARY SOLUTION` |
| `GIFTING` | Recipient Persona $\rightarrow$ Gifting Intent $\rightarrow$ Curated Gift Item | `PRIMARY SOLUTION` / `OPTIONAL ALTERNATIVE` |
| `SMALL_SPACE` | Spatial Constraint $\rightarrow$ Scale Mechanism $\rightarrow$ Compact / Multifunctional Product | `PRIMARY SOLUTION` (requires scale checks) |
| `RENTAL_FRIENDLY` | Renter Constraint $\rightarrow$ Damage-Free Solution $\rightarrow$ Non-Permanent Product | `PRIMARY SOLUTION` (requires installation check) |
| `BUDGET` | Cost Constraint $\rightarrow$ Value Principle $\rightarrow$ Accessible Quality Product | `PRIMARY SOLUTION` / `OPTIONAL ALTERNATIVE` |
| `LUXURY` | Design Legacy / Craftsmanship $\rightarrow$ Material Excellence $\rightarrow$ Premium Anchor | `PRIMARY SOLUTION` / `VISUAL ACCENT` |
| `MIXED` | Multi-intent narrative requiring explicit per-section intent tagging. | Section-Dependent Role |

---

## 3. Product Roles & Section Purpose Alignment

### Product Role Taxonomy
A product may hold exactly ONE primary role within a given editorial section:
- `PRIMARY SOLUTION`: Directly addresses the primary problem or transformation described in the section.
- `SECONDARY SOLUTION`: Provides a secondary, complementary option that addresses an auxiliary requirement.
- `SUPPORTING DETAIL`: Enhances or completes the primary solution (e.g. bulb for a lamp, rug pad under a rug).
- `VISUAL ACCENT`: Adds aesthetic coherence or styling depth to a room composition.
- `OPTIONAL ALTERNATIVE`: Provides a alternative design, material, or footprint option.
- `EDITORIAL EXAMPLE`: Illustrates an abstract styling concept without implying necessity.

### Section Purpose Mapping
Before placing any product, the evaluator MUST establish the `SECTION_PURPOSE`:
- `EXPLAIN`: Elaborate a concept (0 products or `EDITORIAL_EXAMPLE`).
- `DEMONSTRATE`: Show how a technique works (`EDITORIAL_EXAMPLE` or `SUPPORTING_DETAIL`).
- `SOLVE`: Fix a specific decor defect (`PRIMARY_SOLUTION`).
- `INSPIRE`: Present an aesthetic mood (`VISUAL_ACCENT` or `SHOP_THE_LOOK`).
- `COMPARE`: Evaluate alternatives (`COMPARISON_BLOCK`).
- `STYLE`: Provide finishing touches (`SUPPORTING_DETAIL` / `VISUAL_ACCENT`).

---

## 4. Product Density Model

- **NO Universal Word Quota:** Prohibit rules like "one product every 300 words".
- **Zero-Product Sections:** Sections dedicated to explanation, root-cause analysis, layout planning, or DIY steps MUST legitimately contain ZERO commercial products if products add no value.
- **Density Factors:** Evaluated based on section purpose, problem complexity, article length, and visual breathing room.

---

## 5. Contextual Product Explanation & Tradeoff Schema

Every integrated commercial product MUST provide contextual rationale:

```markdown
PRODUCT: [Product Name / Verified ASIN Title]
ROLE: [PRIMARY_SOLUTION | SECONDARY_SOLUTION | SUPPORTING_DETAIL | VISUAL_ACCENT | OPTIONAL_ALTERNATIVE | EDITORIAL_EXAMPLE]
PROBLEM SOLVED: [Explicit Decor Problem or Aesthetic Need]
WHY IT FITS: [Material, Scale, Silhouette, or Functional Parity Explanation]
TRADEOFF: [Verified Footprint, Care Requirement, Material Limitation, or Assembly Factor]
COMMERCIAL ACTION: [Non-manipulative CTA]
```

### Prohibited Superlatives & Unsubstantiated Claims
Never use unsupported claims like *"the best"*, *"guaranteed"*, *"cheapest"*, *"must-have"*, *"perfect"*, or *"bestseller"* unless backed by empirical evidence logged in `elevate-source-integrity`.

### Tradeoff Evaluation Rules
Expose genuine contextual tradeoffs:
- *Scale vs. Storage:* Compact footprint yields reduced interior volume.
- *Aesthetic vs. Maintenance:* Natural linen requires steaming/dry cleaning vs. synthetic blend.
- *Portability vs. Stability:* Lightweight aluminum frame vs. heavy solid iron base.
- *Installation vs. Permanence:* Adhesive mounting vs. wall-anchor drilling.

---

## 6. The 8 Reusable Editorial Product Patterns

1. **CONTEXTUAL PRODUCT CARD:** In-depth single product block embedded within explanatory prose.
2. **FEATURED SOLUTION:** Prominent hero card for the primary problem-solving anchor of an article.
3. **COMPARISON BLOCK:** Multi-item row or matrix contrasting 2--4 items on explicit criteria.
4. **SHOP THE LOOK:** Room ensemble composition combining 3--6 complementary roles (`PRIMARY`, `SUPPORTING`, `ACCENT`).
5. **SUPPORTING PRODUCT ROW:** Horizontal strip of supporting items following a main section.
6. **ALTERNATIVE OPTION:** Secondary callout presenting budget/space/style variations.
7. **EDITORIAL EXAMPLE:** Lightly styled inline mention illustrating a principle without heavy CTA.
8. **RELATED PRODUCT DISCOVERY:** End-of-article recommendations pointing to related content clusters.

---

## 7. Article Narrative Flow & CTA Model

### Ideal Article Narrative Sequence
$$\text{HOOK} \rightarrow \text{CONTEXT} \rightarrow \text{PROBLEM} \rightarrow \text{PRINCIPLE} \rightarrow \text{SOLUTION} \rightarrow \text{PRODUCT} \rightarrow \text{EXPLANATION} \rightarrow \text{CONTINUATION}$$

### Commercial vs. Editorial Separation
Editorial prose describes utility and aesthetic value; commercial CTAs are strictly non-manipulative action prompts.

**Permitted CTAs:** `VIEW PRODUCT`, `SEE OPTIONS`, `CHECK CURRENT LISTING`, `EXPLORE THIS PIECE`, `SHOP THIS LOOK`.  
**Prohibited CTAs:** `BUY NOW OR MISS OUT`, `HURRY`, `LAST CHANCE`, `ACT NOW`, `DON'T MISS THIS DEAL`.

---

## 8. Intent-Specific Integration Protocols

- **Small-Space Articles:** Must expose footprint/dimensions. If dimensions unverified, flag `SCALE_UNVERIFIED`.
- **Rental-Friendly Articles:** Must clarify mounting/installation method. Do not label "renter-friendly" without evidence.
- **Budget Articles:** Use verified prices or flag `PRICE_UNVERIFIED`. Never convert article into discount sales copy.
- **Luxury Articles:** Focus on craftsmanship, proportions, and materials. Never fabricate designer provenance.

---

## 9. Inter-Skill Integration Protocols

- **`elevate-source-integrity`:** Any `SOURCE_CONFLICT` immediately HALTS editorial product integration.
- **`elevate-product-freshness-intelligence`:** Must verify product status is `CURRENT` before integration (`STALE`/`REVERIFY` must be checked; `BLOCK` halts integration).
- **`elevate-affiliate-compliance`:** Owns affiliate disclosures, tags, and link relation attributes (`rel="sponsored nofollow"`).
- **`elevate-editorial-retention`:** Ensures product cards do not disrupt reading rhythm, Pinterest continuity, or mobile viewports.

---

## 10. Article Product Integration Audit Output

```markdown
### Editorial Product Integration Plan

ARTICLE: 7 Small Living Room Storage Solutions
INTENT: SMALL_SPACE
PRIMARY PROBLEM: Floor space clutter due to lack of vertical storage

SECTION: 2. Floating Wall Shelves for Vertical Storage
SECTION PURPOSE: SOLVE

PRODUCT: Solid Wood Narrow Floating Shelf (ASIN: B08XXXXXXX)
PRODUCT ROLE: PRIMARY_SOLUTION
PLACEMENT: FEATURED_SOLUTION (Section 2 body)
WHY IT BELONGS: Uses zero floor space; 6-inch depth preserves walkway clearance.
EDITORIAL EXPLANATION: Wall-mounting shifts book storage overhead, freeing floor area next to sofa.
TRADEOFF: Requires stud mounting or heavy-duty drywall anchors; weight capacity capped at 25 lbs.
CTA: VIEW PRODUCT
COMMERCIAL STATUS: COMMERCIALLY_VALID
SOURCE STATUS: VERIFIED
FRESHNESS: CURRENT
```
