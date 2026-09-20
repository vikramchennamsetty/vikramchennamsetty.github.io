---
name: elevate-product-portfolio-intelligence
description: >-
  Evaluates product portfolio diversity, category concentration, brand concentration, room/style coverage, 
  contextual reuse, visual/functional diversity, Shop The Look compositions, and cluster cannibalization 
  across Elevate's editorial articles—without forcing artificial diversity or replacing niche matching.
version: 1.0
triggers:
  - "diversify products"
  - "diversify product recommendations"
  - "are we recommending the same products"
  - "product repetition"
  - "repeated Amazon products"
  - "product portfolio"
  - "product category gaps"
  - "brand concentration"
  - "product diversity"
  - "Shop The Look diversity"
  - "article product overlap"
  - "cluster product overlap"
  - "product cannibalization"
  - "portfolio gaps"
  - "underrepresented categories"
scope: portfolio-product-diversity-and-coverage-intelligence
risk: medium
source:
  type: native-specialized
  version: 1.0
---

# Elevate Product Portfolio & Diversity Intelligence Skill (V1.0)

## Purpose
Establishes the macro portfolio intelligence layer for ElevateLivingCo. Evaluates product diversity, category concentration, brand repetition, room/style coverage gaps, contextual product reuse, visual/functional role distribution, Shop The Look room compositions, and cluster-level cannibalization—ensuring that product recommendations add strategic portfolio value without forcing artificial diversity or overriding niche matching, problem decomposition, or commercial validation decision engines.

---

## 1. System Architecture & Inter-Skill Integration

$$\begin{matrix} \text{ARTICLE / CLUSTER CANDIDATE} \\ \downarrow \\ \text{EVALUATE 18 PORTFOLIO DIMENSIONS} \\ \downarrow \\ \text{REUSE / CONCENTRATION / CANNIBALIZATION AUDIT} \\ \downarrow \\ \text{PORTFOLIO VALUE ASSESSMENT} \end{matrix} \implies \begin{cases} \text{HANDOFF TO OPPORTUNITY SCORING} & \text{(as 1 of 15 dimensions)} \\ \text{HANDOFF TO NICHE MATCHING} & \text{(for alternative candidate search)} \end{cases}$$

### Skill Responsibility Boundaries:
- **`elevate-product-portfolio-intelligence` (THIS SKILL):** Audits macro portfolio diversity, contextual reuse, category/brand concentration, room/style coverage, visual/functional role balance, and cluster cannibalization.
- **`elevate-niche-product-matching`:** Matches individual candidate products to article intent, room context, and decor style (18 dimensions).
- **`elevate-problem-product-intelligence`:** Maps user decorating dilemmas to non-product and product solution mechanisms.
- **`elevate-product-opportunity-scoring`:** Receives portfolio value as one dimension in cross-signal opportunity prioritization.
- **`elevate-commercial-product-validation`:** Audits ASIN parity, marketplace isolation, URL integrity, and commercial freshness.

---

## 2. The 18 Portfolio Diversity Dimensions

Every product candidate or article composition is evaluated across these 18 portfolio dimensions:

1. **Product Identity Parity:** Exact ASIN, URL, and candidate name integrity.
2. **Product Category:** Primary product type (e.g. table lamp, area rug, storage ottoman, throw blanket).
3. **Product Function:** Functional job performed (e.g. task lighting, acoustic dampening, concealed storage).
4. **Product Role:** Contribution level (`PRIMARY SOLUTION`, `SECONDARY SOLUTION`, `SUPPORTING DETAIL`, `VISUAL ACCENT`, `OPTIONAL ALTERNATIVE`, `EDITORIAL EXAMPLE`).
5. **Room Context:** Target room environment (12 standardized room types).
6. **Decor Style:** Target aesthetic taxonomy (16 decor styles).
7. **User Problem Class:** Target problem class (27 decor problem classes from `problem-product` skill).
8. **Solution Mechanism:** Functional mechanism (e.g. 2700K ambient warmth, vertical storage, raised leg optical space expansion).
9. **Brand / Seller:** Verified manufacturer or seller identity.
10. **Price Position:** Verified price tier (`BUDGET`, `MID-RANGE`, `PREMIUM`, `LUXURY`, `UNKNOWN`).
11. **Seasonality:** Mapped seasonal state and event timing from `seasonal-product` skill.
12. **Marketplace Isolation:** Explicit marketplace tag (`AMAZON_US`, `AMAZON_IN`, `OTHER`).
13. **Visual Language:** Aesthetic form factor, silhouette, and design movement.
14. **Material:** Dominant physical materials (e.g. walnut, brushed brass, linen, bouclé, smoked glass).
15. **Product Form Factor:** Spatial dimensions and footprint profile (compact, tall vertical, modular, wall-mounted).
16. **Article Cluster:** Associated content pillar (e.g. Dark Academia Cluster, Small-Space Rental Cluster).
17. **Content Intent:** Article intent taxonomy (e.g. how-to, roundup, shopping guide, styling showcase).
18. **Audience / Context:** Target reader lifestyle (urban apartment renter, compact homeowner, host/entertainer).

---

## 3. Product Reuse Classification Model

A previously recommended product is **NOT** automatically negative. The system classifies product reuse into 5 distinct categories:

- **`APPROPRIATE REUSE`:** Product appears in a different article with distinct intent, style, or room context where its inclusion provides high reader value.
- **`CONTEXTUAL REUSE`:** Product serves a complementary role in a related cluster article (e.g. same candle warmer in *Dark Academia Bookshelf Styling* and *Fall Ambient Lighting Ideas*).
- **`HIGH REPETITION`:** Product appears across multiple articles within the same cluster with minimal contextual differentiation. Triggers alert for candidate diversification.
- **`DUPLICATE USE`:** Identical product recommended multiple times within the same article or identical section intent.
- **`UNKNOWN`:** Product historical usage across Elevate content is unconfirmed.

> [!IMPORTANT]
> Never penalize legitimate contextual reuse. A versatile staple item (e.g. a damage-free tension rod or classic brass task lamp) may validly serve multiple distinct articles.

---

## 4. Category & Brand Concentration Tracking

### A. Category Concentration States
Monitors category density across articles and clusters relative to article intent and site scope:
- **`UNDERREPRESENTED`:** Category is sparse across relevant room/style guides.
- **`BALANCED`:** Optimal mix of functional furniture, lighting, textiles, and accents.
- **`CONCENTRATED`:** Category represents >40% of recommendations in a general multi-category guide.
- **`OVERCONCENTRATED`:** Category dominates a general guide (e.g. 7 lamps in a 10-item general living room guide).

*Rule:* Interpret concentration contextually. A dedicated "Best Lamps for Dark Rooms" article is expected to be 100% lighting; a general "Living Room Refresh" guide requires category balance.

### B. Brand Concentration States
Tracks repeated brands/sellers where verified:
- **`DIVERSE`:** Recommendations span multiple independent brands.
- **`MODERATELY CONCENTRATED`:** 2–3 items from the same brand in a multi-item guide.
- **`HEAVILY CONCENTRATED`:** Single brand dominates >50% of an article's recommendations.
- **`UNKNOWN`:** Brand identity unconfirmed.

*Rule:* Do NOT reject a brand solely because it appears repeatedly if it provides unique product specifications, high quality evidence, and strong niche fit.

---

## 5. Coverage Mapping: Rooms, Styles & Problems

Surfaces genuine coverage gaps across 3 core dimensions:

### 12 Standardized Rooms:
Living Room, Bedroom, Kitchen, Dining Room, Entryway, Home Office, Reading Nook, Patio, Balcony, Bathroom, Small Apartment, Rental.

### 16 Decor Styles:
Modern, Contemporary, Luxury, Quiet Luxury, Dark Academia, Moody, Old Money, Minimal, Warm Minimal, Organic Modern, Traditional, Vintage, Neo-Deco, Apartment Luxury, Small-Space, Renter-Friendly.

### 27 Problem Classes:
Mapped directly from [`elevate-problem-product-intelligence`](file:///d:/A_Elevate_Living_Co/vikramchennamsetty.github.io/.agents/skills/elevate-problem-product-intelligence/SKILL.md).

- **Coverage Classifications:** `WELL COVERED`, `UNDERCOVERED`, `CONCENTRATED`, `UNKNOWN`.
- **Rule:** Every identified gap MUST be backed by evidence. Do NOT manufacture artificial gaps.

---

## 6. Visual, Functional & Role Diversity

### A. Visual Diversity Audit
Prevents recommending products that are technically different ASINs but visually interchangeable:
- Evaluates: silhouette, material, color palette, texture, scale, visual bulk.
- *Example:* Recommending 5 matte black dome table lamps creates low visual diversity, even if ASINs differ.

### B. Functional Diversity Audit
Ensures multi-item guides solve diverse functional jobs (lighting + seating + storage + textile + surface) rather than repeating one job.

### C. Product Role Distribution
Monitors balance across product roles:
- `PRIMARY SOLUTION` (1–2 core anchor pieces)
- `SECONDARY SOLUTION` (2–3 supporting pieces)
- `SUPPORTING DETAIL` & `VISUAL ACCENT` (complementary styling elements)
- *Rule:* Prohibits general guides from collapsing into 100% decorative accents with zero functional anchor solutions.

---

## 7. Shop The Look Compositional Intelligence

Audits Shop The Look modules as cohesive room compositions:

```markdown
### Shop The Look Composition Audit

- ROOM COHERENCE: VERIFIED (All items suit a compact urban living room)
- STYLE COHERENCE: VERIFIED (Dark Academia / Moody aesthetic harmony)
- FUNCTIONAL DIVERSITY: BALANCED (1 Task Lamp + 1 Accent Chair + 1 Wool Throw + 1 Bookend Set)
- VISUAL DIVERSITY: HIGH (Mix of dark walnut, brushed brass, velvet, and leather)
- ROLE DISTRIBUTION: BALANCED (1 Primary Anchor, 1 Secondary, 2 Supporting Accents)
- COMPOSITION RESULT: COHERENT ROOM COMPOSITION
```

> [!WARNING]
> Do NOT force artificial category diversity into a Shop The Look module if it breaks realistic room composition coherence. The primary goal of Shop The Look is a believable, harmonious room setup.

---

## 8. Cluster-Level Diversity & Cannibalization Auditing

Monitors product overlap across related articles within a content cluster:

- **`NO OVERLAP`:** Articles recommend completely distinct product sets.
- **`LOW OVERLAP`:** 1–2 shared staple products across 5+ cluster articles with distinct contexts.
- **`MODERATE OVERLAP`:** 30–50% product overlap across cluster articles.
- **`HIGH OVERLAP`:** >50% product overlap across cluster articles. Triggers candidate refresh review.
- **`UNKNOWN`:** Cluster product data unconfirmed.

### Overlap Differentiation Audit:
Moderate or high product overlap does **NOT** automatically require article removal if the articles have:
1. Distinct search intent.
2. Distinct target audience or room context.
3. Distinct decorating problem focus.
4. Distinct seasonal timing.

---

## 9. Portfolio Value & Diversity Assessment

Outputs explicit contextual assessments for new candidate products:

### Candidate Portfolio Value Tags:
`ADDS NEW CATEGORY`, `ADDS NEW FUNCTION`, `ADDS NEW ROOM`, `ADDS NEW STYLE`, `ADDS NEW PROBLEM SOLUTION`, `ADDS NEW PRICE POSITION`, `ADDS NEW SEASONAL CONTEXT`, `ADDS NEW VISUAL LANGUAGE`, `REPEATS EXISTING COVERAGE`, `UNKNOWN`.

### Contextual Diversity Assessment:
- **`STRONG PORTFOLIO ADD`:** Introduces new functional, visual, or contextual coverage.
- **`GOOD PORTFOLIO ADD`:** Complements existing coverage with clear differentiated value.
- **`NEUTRAL`:** Standard addition; maintains balanced portfolio mix.
- **`HIGH REPETITION`:** Repeats previously recommended items; review for candidate alternatives.
- **`DUPLICATIVE`:** Unnecessary duplicate recommendation without contextual justification.
- **`REQUIRES CONTEXT`:** Repetition requires explicit editorial context validation.

---

## 10. Inter-Skill Handoff Architecture

### A. Handoff to Product Opportunity Scoring
Returns portfolio audit metrics to [`elevate-product-opportunity-scoring`](file:///d:/A_Elevate_Living_Co/vikramchennamsetty.github.io/.agents/skills/elevate-product-opportunity-scoring/SKILL.md):

```markdown
- PORTFOLIO_VALUE: ADDS NEW FUNCTION (Task lighting for small desks)
- DIVERSITY_STATE: GOOD PORTFOLIO ADD
- REPETITION_STATE: LOW REPETITION
- CANNIBALIZATION_STATE: NO OVERLAP
- GAP_STATE: UNDERCOVERED (Compact desk lighting)
- RATIONALE: Fills genuine portfolio gap in compact workspace lighting.
```

### B. Handoff to Niche Product Matching
When `HIGH REPETITION` or `DUPLICATIVE` status is flagged, sends a contextual alert to [`elevate-niche-product-matching`](file:///d:/A_Elevate_Living_Co/vikramchennamsetty.github.io/.agents/skills/elevate-niche-product-matching/SKILL.md) to request alternative candidate matching—without overriding niche matching decision authority.

---

## 11. Standardized Output Format

Every Portfolio & Diversity Intelligence evaluation MUST present its findings using this format:

```markdown
### Portfolio Diversity Audit

- **PRODUCT / ARTICLE:** [Target Product ASIN or Article Title]
- **MARKETPLACE:** [AMAZON_US / AMAZON_IN / OTHER]
- **REUSE_CLASS:** [APPROPRIATE REUSE / CONTEXTUAL REUSE / HIGH REPETITION / DUPLICATE USE / UNKNOWN]
- **CATEGORY_CONCENTRATION:** [UNDERREPRESENTED / BALANCED / CONCENTRATED / OVERCONCENTRATED]
- **BRAND_CONCENTRATION:** [DIVERSE / MODERATELY CONCENTRATED / HEAVILY CONCENTRATED / UNKNOWN]
- **VISUAL_DIVERSITY:** [HIGH / BALANCED / INTERCHANGEABLE]
- **FUNCTIONAL_DIVERSITY:** [HIGH / BALANCED / SINGLE_CATEGORY]
- **ROLE_DISTRIBUTION:** [BALANCED / ACCENT_HEAVY / ANCHOR_HEAVY]
- **CLUSTER_CANNIBALIZATION:** [NO OVERLAP / LOW OVERLAP / MODERATE OVERLAP / HIGH OVERLAP / UNKNOWN]
- **COVERAGE_GAP_STATUS:** [WELL COVERED / UNDERCOVERED / GAP_IDENTIFIED / UNKNOWN]

### Portfolio Value & Recommendation

- **PORTFOLIO_VALUE_TAGS:** [ADDS NEW CATEGORY / ADDS NEW FUNCTION / REPEATS EXISTING COVERAGE / etc.]
- **DIVERSITY_ASSESSMENT:** [STRONG PORTFOLIO ADD / GOOD PORTFOLIO ADD / NEUTRAL / HIGH REPETITION / DUPLICATIVE / REQUIRES CONTEXT]
- **RATIONALE:** [Written rationale explaining how the recommendation impacts portfolio balance, cluster health, and reader value.]
```

---

## 12. Cataloged Failure Patterns & Active Regression Rules

### Cataloged Failure Patterns ([`FAILURE-PATTERNS.md`](file:///d:/A_Elevate_Living_Co/vikramchennamsetty.github.io/.agents/skills/_learning/FAILURE-PATTERNS.md)):
- **`FP-069` (Repetition Blindness):** Repeated products or categories are recommended across articles without visibility.
- **`FP-070` (Artificial Diversity):** Unrelated or visually clashing products are introduced solely to make a portfolio appear diverse.
- **`FP-071` (Contextual Reuse Misclassification):** Legitimate contextual product reuse across distinct articles is incorrectly penalized as duplication.
- **`FP-072` (Category Concentration Blindness):** Content becomes dominated by one product category without detection.
- **`FP-073` (Brand Concentration Blindness):** Single brand dominates recommendations without visibility or justification.
- **`FP-074` (Shop-The-Look Diversity Failure):** Shop The Look recommendations collapse into visually or functionally redundant items.
- **`FP-075` (Cluster Cannibalization):** Multiple cluster articles repeatedly recommend identical product sets without contextual differentiation.

### Active Regression Rules ([`REGRESSION-RULES.md`](file:///d:/A_Elevate_Living_Co/vikramchennamsetty.github.io/.agents/skills/_learning/REGRESSION-RULES.md)):
- **`RULE-068` (Portfolio Identity Preservation Gate):** Portfolio records MUST preserve exact product identity, ASIN, URL, and marketplace context.
- **`RULE-069` (Contextual Reuse Gate):** Previously recommended products MUST NOT be rejected solely because they were used before; evaluate contextual intent.
- **`RULE-070` (Artificial Diversity Prevention Gate):** Unrelated or visually incompatible products MUST NOT be introduced solely to increase category counts.
- **`RULE-071` (Category Concentration Detection Gate):** Repeated product categories MUST be tracked and visible at article and cluster levels.
- **`RULE-072` (Brand Concentration Detection Gate):** Repeated brand placements MUST be surfaced where evidence indicates heavy concentration.
- **`RULE-073` (Shop-The-Look Composition Gate):** Shop The Look modules MUST maintain realistic room coherence and balanced product roles.
- **`RULE-074` (Cluster Differentiation Gate):** Cluster articles sharing candidate products MUST maintain distinct search, problem, or room context differentiation.
- **`RULE-075` (Unknown Preservation Gate):** Missing portfolio attributes MUST remain `UNKNOWN` and MUST NOT be converted to negative scores.
