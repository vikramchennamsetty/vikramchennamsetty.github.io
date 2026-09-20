---
name: elevate-product-article-optimization
description: Evaluates whole-article product system coherence, problem/solution coverage, commercial density, Shop The Look integrity, CTA distribution, and page-level discovery flow above section placement and below macro retention/SEO.
---

# Product-to-Article Optimization Intelligence (v1.0)

## 1. Executive Summary & Core Model

`elevate-product-article-optimization` is Elevate's macro article-level product system optimization capability. It evaluates whether all recommended products across an entire published article collectively strengthen the narrative, solve documented reader problems, fit the editorial aesthetic, and establish a clear, unforced discovery path.

### Structural Architectural Position
- **Operates ABOVE:** `elevate-editorial-product-integration` (which owns single product-to-section placement).
- **Operates BELOW:** `elevate-editorial-retention` (reader attention/Pinterest flow), `elevate-seo-performance` (crawlability/schema), and `elevate-affiliate-compliance` (disclosure/link rules).

### Whole-Article Pipeline Model
$$\text{ARTICLE INTENT} \rightarrow \text{READER PROBLEMS} \rightarrow \text{EDITORIAL SECTIONS} \rightarrow \text{SOLUTION MECHANISMS} \rightarrow \text{PRODUCT ROLES} \rightarrow \text{PRODUCT COVERAGE} \rightarrow \text{PRODUCT SEQUENCE} \rightarrow \text{COMMERCIAL DENSITY} \rightarrow \text{SHOP THE LOOK} \rightarrow \text{FINAL DISCOVERY PATH}$$

---

## 2. Article Product Map & Chain States

The optimizer audits the entire page by mapping every section to its product chain:

```markdown
SECTION → PROBLEM → SOLUTION → PRODUCT CATEGORY → PRODUCT → ROLE → PLACEMENT → CTA → NEXT SECTION
```

### Chain Verification States
- `COMPLETE`: Full alignment from reader problem down to commercial action.
- `PARTIAL`: Missing contextual explanation, role definition, or tradeoff.
- `MISSING`: Documented reader problem or solution mechanism lacks product support where a product would add value.
- `CONFLICTED`: Identity, marketplace, variant, or source data mismatch (`SOURCE_CONFLICT`).
- `NOT_APPLICABLE`: Section legitimately contains zero products (e.g. root-cause analysis, layout principle).

---

## 3. Problem & Solution Coverage Analysis

Using `elevate-problem-product-intelligence`, the skill evaluates:
- **Primary & Secondary Problems:** Documented room/styling challenges.
- **Constraints & Outcomes:** Spatial, rental, or budget limitations.

### Coverage Classifications
- `COVERED`: Problem is directly addressed with a valid, highly relevant product.
- `PARTIALLY COVERED`: Solution is described, but product support is incomplete or generic.
- `UNCOVERED`: Meaningful problem/solution mechanism lacks product support where a product would add value.
- `NON-PRODUCT SOLUTION`: Problem is correctly solved via layout adjustments, decluttering, or DIY techniques (zero products).
- `UNKNOWN`: Insufficient problem/solution documentation.

> [!IMPORTANT]
> **Zero-Product Section Preservation:** Do NOT force products into every section. Sections covering measurements, design theory, root causes, or layout guidelines MUST remain zero-product sections.

---

## 4. Article Commercial Density & Balance

Commercial density is evaluated holistically across product cards, inline links, comparison tables, CTAs, and Shop The Look modules:

- `LOW`: Commercial elements cover $<20\%$ of section opportunities; may leave key solutions unsupported.
- `BALANCED`: Commercial elements correspond cleanly to documented problem solutions without visual clutter.
- `HIGH`: Commercial elements occupy $50$--$70\%$ of sections; requires high problem complexity to justify.
- `OVERLOADED`: Commercial elements dominate >70% of sections, creating affiliate catalogization.
- `UNKNOWN`: Commercial density cannot be calculated.

### Editorial vs. Commercial Balance Classifications
- `EDITORIAL_DOMINANT`: Narrative prose and educational principles dominate page structure.
- `BALANCED`: Perfect equilibrium between reader education and commercial product discovery.
- `COMMERCIAL_HEAVY`: High product density; appropriate only for dedicated `PRODUCT_DISCOVERY` guides.
- `COMMERCIAL_OVERLOADED`: Commercial elements degrade reading rhythm (`OVERLOADED`).
- `UNKNOWN`: Balance state unverified.

---

## 5. Whole-Article Product Repetition & Coherence

Using `elevate-product-portfolio-intelligence`:
- **Repetition Audit:** Tracks repeated ASINs, brands, or product categories across the article.
- **Repetition Classifications:**
  - `JUSTIFIED`: Repeated item serves a distinctly different room function or problem in separate sections.
  - `REDUNDANT`: Same item repeated without new editorial purpose.
  - `CONTEXTUAL`: Item appears inline and in Shop The Look ensemble.
  - `UNKNOWN`: Repetition context unverified.
- **System Coherence Audit:** Evaluates whether selected products share a unified design language (style, palette, materials, scale, room context) without requiring identical products.

---

## 6. Shop The Look Integration Audit

Shop The Look MUST be derived directly from the article's narrative advice:

$$\text{ARTICLE ADVICE} \rightarrow \text{ROOM COMPOSITION} \rightarrow \text{PRODUCT ROLES} \rightarrow \text{SHOP THE LOOK}$$

### Shop The Look Defect Triggers
- Product featured in Shop The Look is disconnected from the article's recommended styles or advice.
- Shop The Look duplicates items without role diversity (`PRIMARY`, `SUPPORTING`, `ACCENT`).
- Article strongly recommends an anchor piece that is missing from the Shop The Look module.

---

## 7. Whole-Page Discovery Path & CTA Distribution

The page-level discovery path maps user progression:
$$\text{FIRST PRODUCT MOMENT} \rightarrow \text{SUPPORTING DISCOVERY} \rightarrow \text{SHOP THE LOOK} \rightarrow \text{RELATED PRODUCT/ARTICLE} \rightarrow \text{FINAL ACTION}$$

### CTA Distribution Defect Detection
- `CTA OVERLOAD`: Multiple CTAs clutter single viewports or appear back-to-back.
- `CTA WITHOUT CONTEXT`: CTAs rendered before problem explanation.
- `CTA MISMATCH`: CTA text conflicts with user intent (e.g. "Buy Now" on high-friction luxury piece).

---

## 8. Mobile & Pinterest Parity

- **Mobile Viewport Optimization:** Independent 375px audit verifying that stacked product blocks do not create horizontal scroll, obscure tradeoffs, or bury CTAs.
- **Pinterest Continuity:** Cross-referenced with `elevate-editorial-retention` to ensure pin image promises align with page opening and whole-article visual discovery path.

---

## 9. Inter-Skill Integration Protocols

- **`elevate-source-integrity`:** Any `SOURCE_CONFLICT` immediately HALTS optimization for the affected product.
- **`elevate-product-freshness-intelligence`:** Verifies product recommendations are `CURRENT` (`STALE`/`REVERIFY` must be audited; `BLOCK` halts optimization).
- **`elevate-commercial-product-validation`:** Fact-checks live commercial status (URL, price, stock, variant).
- **`elevate-seo-performance`:** Ensures product system creates no keyword stuffing, duplicate content, or thin affiliate sections.

---

## 10. Article Product Optimization Audit Output Schema

```markdown
### Article Product Optimization Audit

ARTICLE: 7 Small Living Room Storage Solutions
INTENT: SMALL_SPACE
PRIMARY PROBLEM: Floor space clutter due to lack of vertical storage

COMMERCIAL DENSITY: BALANCED
PRODUCT COHERENCE: HIGH (Warm Minimalist palette, natural wood & matte black iron)
PROBLEM COVERAGE: COMPLETE (4 product solutions, 2 non-product layout solutions)
SOLUTION COVERAGE: COVERED
PRODUCT REPETITION: JUSTIFIED (Wall shelf used inline and in Shop The Look)
SHOP THE LOOK: COHERENT (Combines floating shelf, task lamp, and woven basket)
CTA DISTRIBUTION: BALANCED (1 CTA per product block; max 4 CTAs page-wide)
MOBILE PARITY: VERIFIED (Full text & tradeoffs visible at 375px)
PINTEREST FLOW: MATCHED (Pin image matches hero floating shelf section)
FRESHNESS: CURRENT
COMMERCIAL VALIDITY: COMMERCIALLY_VALID
SOURCE STATUS: VERIFIED

OVERALL STATE: OPTIMIZED
EDITORIAL BALANCE: BALANCED

### Section Matrix

| Section | Problem | Solution | Product | Role | Placement | CTA | State |
|---|---|---|---|---|---|---|---|
| 1. Clear Floor Space | Floor Clutter | Layout / Declutter | None | NON_PRODUCT | ZERO_PRODUCT | None | KEEP |
| 2. Vertical Wall Shelves | Overhead Storage | Floating Shelf | B08XXXXXXX | PRIMARY_SOLUTION | FEATURED_SOLUTION | VIEW PRODUCT | KEEP |
| 3. Multi-Functional Ottoman | Hidden Storage | Storage Ottoman | B09YYYYYYY | SECONDARY_SOLUTION | CONTEXTUAL_CARD | SEE OPTIONS | KEEP |
```
