---
name: elevate-product-opportunity-scoring
description: Evaluates and prioritizes product opportunities, concepts, categories, and replacements across 20 evidence dimensions—separating category opportunities from specific product validation and rejecting numerical hype or commission-driven selection.
version: 1.1
domain: product-opportunity-scoring-and-prioritization
ownership: opportunity-level-scoring-prioritization-and-research-queueing
depends_on:
  - elevate-trend-demand-intelligence
  - elevate-problem-product-intelligence
  - elevate-niche-product-matching
  - elevate-seasonal-product-intelligence
  - elevate-product-research-intelligence
  - elevate-commercial-product-validation
  - elevate-editorial-retention
  - elevate-product-portfolio-intelligence
  - elevate-content-freshness-intelligence
  - elevate-product-freshness-intelligence
  - elevate-product-performance-intelligence
  - elevate-content-cluster-intelligence
  - elevate-source-integrity
  - elevate-affiliate-compliance
---

# Elevate Product Opportunity Scoring & Prioritization Intelligence

## 1. Overview & Core Philosophy

`elevate-product-opportunity-scoring` is the strategic opportunity-level decision and prioritization layer for Elevate. It evaluates whether a product category, concept, role, or replacement opportunity deserves research, verification, editorial testing, monitoring, or rejection—*before* committing substantial research or drafting resources.

### Core Question
> **"Does this product opportunity address a genuine reader problem, fit Elevate's editorial standards, fill a portfolio gap, and possess sufficient evidence to justify research or creation?"**

### Core Principles
1. **Attractive Product $\neq$ Valuable Opportunity:** A visually appealing or high-paying affiliate product is NOT automatically a valuable opportunity. Opportunity evaluation requires multi-signal alignment across 20 dimensions.
2. **Category Opportunity $\neq$ Product Validation:** A promising product category (e.g. *Cordless Rechargeable Table Lamps*) does NOT mean an arbitrary specific item is valid. Category opportunity and specific product validation MUST remain strictly separated.
3. **No Universal 0–100 Score:** Elevate rejects simplistic pseudo-scientific numerical scores (e.g. `87/100`). System output defaults to clear, evidence-backed descriptive classifications.
4. **Preserve Unknown Signals:** Missing optional data MUST remain `UNKNOWN` and MUST NOT be converted to zero penalty points or positive evidence.
5. **No Sales or Conversion Hype:** This is an evidence-based decision-support system. It MUST NOT predict sales, traffic, conversions, or revenue.

---

## 2. Core Flow & Handoff Pipeline

```
TREND / DEMAND (`elevate-trend-demand-intelligence`)
        ↓
USER PROBLEM (`elevate-problem-product-intelligence`)
        ↓
SOLUTION MECHANISM (Functional Room Fix)
        ↓
NICHE / ROOM / STYLE FIT (`elevate-niche-product-matching`)
        ↓
EDITORIAL & VISUAL VALUE (`elevate-editorial-retention`)
        ↓
PRODUCT RESEARCH EVIDENCE (`elevate-product-research-intelligence`)
        ↓
COMMERCIAL VALIDITY (`elevate-commercial-product-validation`)
        ↓
PORTFOLIO GAP (`elevate-product-portfolio-intelligence`)
        ↓
FRESHNESS (`elevate-content-freshness-intelligence` / `product-freshness`)
        ↓
OBSERVED PERFORMANCE (`elevate-product-performance-intelligence`)
        ↓
OPPORTUNITY DECISION (Classification & Queue)
```

---

## 3. Opportunity Types (9 Taxonomy Types)

The skill evaluates 9 distinct opportunity scopes:
1. `PRODUCT_CATEGORY`: Broad product category (e.g. *Fluted Ceramic Planters*).
2. `PRODUCT_CONCEPT`: Novel functional or aesthetic concept (e.g. *Modular Wall-Mounted Shelving for Renters*).
3. `PRODUCT_ROLE`: Functional slot within a room design (e.g. *Primary Seating Anchor*).
4. `PRODUCT_CLUSTER`: Group of complementary items serving a room composition.
5. `ARTICLE_PRODUCT_SET`: Ensemble of candidate items for a specific article.
6. `SHOP_THE_LOOK_COMPONENT`: Specific role component in a Shop The Look layout (`PRIMARY`, `TASK`, `TEXTILE`, `LIGHTING`, `STORAGE`, `DETAIL`, `ACCENT`).
7. `SEASONAL_PRODUCT_OPPORTUNITY`: Time-bound product opportunity (`NOW`, `UPCOMING`, `FUTURE`, `PASSED`).
8. `EMERGING_PRODUCT_OPPORTUNITY`: Early-stage trend or category emerging in social search.
9. `REPLACEMENT_OPPORTUNITY`: Substitute candidate replacing a stale or out-of-stock item.

---

## 4. The 20 Contextual Opportunity Dimensions

Opportunities are evaluated contextually across up to 20 dimensions:

| # | Dimension | Source Skill / System | Key Evaluation Question |
|---|---|---|---|
| 1 | `USER_PROBLEM` | `elevate-problem-product-intelligence` | What reader dilemma or environmental friction does this solve? |
| 2 | `SOLUTION_MECHANISM` | Problem Framework | Is the physical/styling mechanism effective and non-gimmicky? |
| 3 | `ARTICLE_INTENT` | Editorial Taxonomy | Does this fit target intent (`HOW_TO`, `DISCOVERY`, `SEASONAL`, etc.)? |
| 4 | `ROOM_CONTEXT` | Niche Taxonomy | Target spatial environment (Small Living Room, Rental Bedroom, Patio). |
| 5 | `STYLE_FIT` | `elevate-niche-product-matching` | Alignment with Elevate aesthetics (Dark Academia, Warm Minimalism). |
| 6 | `AUDIENCE_FIT` | Niche Taxonomy | Alignment with audience lifestyle (Renters, Compact Living, Pet Owners). |
| 7 | `TREND_SIGNAL` | `elevate-trend-demand-intelligence` | Directional momentum (`RISING`, `STABLE`, `EMERGING`, etc.). |
| 8 | `DEMAND_SIGNAL` | Search Telemetry | Verified query intent (`STRONG_SIGNAL`, `MODERATE_SIGNAL`, etc.). |
| 9 | `SEASONAL_TIMING` | `elevate-seasonal-product-intelligence` | Timing window and lead time (`PREPARATION_WINDOW`, `NOW`, etc.). |
| 10 | `EDITORIAL_USEFULNESS` | `elevate-editorial-retention` | Enables explanation, comparison, styling advice, or education? |
| 11 | `VISUAL_USEFULNESS` | `elevate-editorial-retention` | Contributes to room composition, visual story, or Pinterest pins? |
| 12 | `PRODUCT_RESEARCH_EVIDENCE` | `elevate-product-research-intelligence` | Rating stability, review sentiment, material/scale specifications. |
| 13 | `COMMERCIAL_VALIDITY` | `elevate-commercial-product-validation` | Marketplace, destination URL, ASIN, price & stock status. |
| 14 | `SOURCE_VERIFIABILITY` | `elevate-source-integrity` | Hard identity match (`IDENTITY_STATUS` check; halt on conflict). |
| 15 | `PRODUCT_FRESHNESS` | `elevate-product-freshness-intelligence` | Recency of listing data and product availability status. |
| 16 | `PORTFOLIO_GAP` | `elevate-product-portfolio-intelligence` | Fills room/style/category gap or duplicates existing items? |
| 17 | `CATEGORY_DIVERSITY` | `elevate-product-portfolio-intelligence` | Avoids overconcentrating single category or brand across site. |
| 18 | `EXISTING_ELEVATE_COVERAGE` | `elevate-content-cluster-intelligence` | Is opportunity `UNUSED`, `UNDER_COVERED`, or `ALREADY_COVERED`? |
| 19 | `OBSERVED_SITE_INTEREST` | `elevate-product-performance-intelligence` | Post-publication telemetry (`OBSERVED_INTEREST_SIGNAL`). |
| 20 | `RESOURCE_COST` | Operational Scope | Research effort required (`LOW`, `MODERATE`, `HIGH`). |

---

## 5. Evidence States (9 Taxonomy States)

Every evaluated dimension MUST be tagged with an explicit evidence state:
- `VERIFIED`: Confirmed by direct empirical evidence or audited database record.
- `SUPPORTED`: Indirect or high-confidence qualitative evidence.
- `PARTIAL`: Incomplete evidence; core claims supported but details unverified.
- `UNVERIFIED`: Lacks empirical confirmation.
- `UNKNOWN`: Evidence not gathered or signal unavailable.
- `STALE`: Outdated timestamp bounds requiring re-audit.
- `TIME_SENSITIVE`: Seasonal or promotional data with active expiration bounds.
- `NOT_APPLICABLE`: Dimension irrelevant to current opportunity type.
- `CONFLICTED`: Conflicting signals between sources (HALT ADVANCEMENT).

> [!CAUTION]
> **Unknown Preservation Rule:** Never convert `UNKNOWN` or `UNVERIFIED` states into positive evidence or zero-penalty points.

---

## 6. Opportunity Classifications (7 Descriptive States)

Elevate rejects 0–100 universal scores. Opportunities are assigned descriptive classifications with written rationale:

1. **`STRONG OPPORTUNITY`**: Multiple dimensions align cleanly; clear user need, high editorial value, verified niche fit, and zero major conflicts.
2. **`PROMISING OPPORTUNITY`**: Strong core signals exist, but 1–2 secondary dimensions require verification before selection.
3. **`RESEARCH REQUIRED`**: Potential exists, but baseline evidence (e.g. source identity or product quality) is insufficient.
4. **`MONITOR`**: Trend or seasonal concept emerging; current timing or demand evidence is premature.
5. **`WEAK OPPORTUNITY`**: Poor niche fit, weak editorial value, or low problem utility.
6. **`REJECT`**: Clear mismatch, severe category duplication, `SOURCE_CONFLICT`, or affiliate-only commercial fluff.
7. **`UNKNOWN`**: Telemetry or signal data insufficient to evaluate.

---

## 7. Problem $\rightarrow$ Product $\rightarrow$ Article Chain Verification

An opportunity MUST maintain an unbroken evidence chain:
```
USER PROBLEM
  ↓
SOLUTION MECHANISM
  ↓
PRODUCT CATEGORY
  ↓
PRODUCT CANDIDATE
  ↓
ARTICLE / SECTION
  ↓
EDITORIAL PURPOSE
```
If any link in this chain is unsupported or unverified, assign `UNSUPPORTED_CHAIN` status and HALT advancement until resolved.

---

## 8. Prioritization & Research Queue

When evaluating multiple opportunities, assign explicit research prioritization:
- `IMMEDIATE_RESEARCH`: Highest priority; dispatch to product research / discovery immediately.
- `NEXT_RESEARCH_BATCH`: Secondary priority for upcoming publication cycle.
- `WATCHLIST`: Monitor trend/seasonal timing before dispatching research.
- `LOW_PRIORITY`: De-prioritize relative to higher-utility opportunities.
- `BLOCKED`: Hard conflict (`SOURCE_CONFLICT`, `IDENTITY_CONFLICT`) blocks advancement.
- `NO_ACTION`: Rejected opportunity; no research scheduled.

---

## 9. Standardized Audit Outputs

### 9.1 Product Opportunity Record

```markdown
### Product Opportunity Record

OPPORTUNITY: [Category or Concept Name]
OPPORTUNITY_TYPE: [PRODUCT_CATEGORY / PRODUCT_CONCEPT / PRODUCT_ROLE / etc.]
USER_PROBLEM: [Reader friction or dilemma addressed]
SOLUTION_MECHANISM: [Functional or aesthetic solution path]
ARTICLE_INTENT: [Target intent: HOW_TO, DISCOVERY, SMALL_SPACE, etc.]
ROOM: [Target room environment]
STYLE: [Target decor style]
TREND: [RISING / STABLE / DECLINING / EMERGING / SEASONAL / UNKNOWN]
DEMAND: [STRONG_SIGNAL / MODERATE_SIGNAL / WEAK_SIGNAL / UNKNOWN]
SEASONAL: [NOW / UPCOMING / FUTURE / PASSED / EVERGREEN / UNKNOWN]
EDITORIAL_VALUE: [HIGH / MODERATE / LOW / UNKNOWN]
VISUAL_VALUE: [HIGH / MODERATE / LOW / UNKNOWN]
COMMERCIAL_STATUS: [PRICE_VERIFIED / AVAILABILITY_VERIFIED / UNVERIFIED / etc.]
SOURCE_STATUS: [VERIFIED / SOURCE_CONFLICT / UNVERIFIED]
FRESHNESS: [NEW / CURRENT / STALE / UNKNOWN]
PORTFOLIO_STATUS: [FILLS_GAP / COMPLEMENTS / DUPLICATES / OVERCONCENTRATED]
EXISTING_COVERAGE: [UNUSED_OPPORTUNITY / UNDER_COVERED / ALREADY_COVERED]
OBSERVED_INTEREST: [OBSERVED_INTEREST_SIGNAL / NONE / UNKNOWN]
RESOURCE_COST: [LOW / MODERATE / HIGH / UNKNOWN]
CLASSIFICATION: [STRONG OPPORTUNITY / PROMISING OPPORTUNITY / RESEARCH REQUIRED / MONITOR / WEAK OPPORTUNITY / REJECT / UNKNOWN]
PRIORITY: [IMMEDIATE_RESEARCH / NEXT_RESEARCH_BATCH / WATCHLIST / LOW_PRIORITY / BLOCKED / NO_ACTION]
CONFIDENCE: [HIGH / MEDIUM / LOW / UNKNOWN]
RATIONALE: [Written explanation grounding classification]
NEXT_ACTION: [Specific handoff skill and recommended next step]
```

### 9.2 Evidence Matrix

| Dimension | Evidence Summary | Status | Source System | Observed At | Confidence |
|---|---|---|---|---|---|
| User Problem | Compact seating deficit in small studios | `VERIFIED` | `problem-product-intelligence` | 2026-09-20 | `HIGH` |
| Trend Signal | Rising Pinterest searches for velvet poufs | `SUPPORTED` | `trend-demand-intelligence` | 2026-09-18 | `MEDIUM` |
| Commercial Validity | ASIN B0XXXXXX active on Amazon US | `VERIFIED` | `commercial-product-validation` | 2026-09-19 | `HIGH` |

### 9.3 Product Opportunity Queue Table

| Opportunity Name | User Problem | Primary Evidence | Seasonal Timing | Editorial Value | Research State | Priority |
|---|---|---|---|---|---|---|
| Modular Tension Storage | Small rental closet overload | High problem severity, rising trend | `EVERGREEN` | High (Storage Education) | `READY_TO_RESEARCH` | `IMMEDIATE_RESEARCH` |

---

## 10. Inter-Skill Handoffs

```
elevate-product-opportunity-scoring
  ↓ (Handoff when classified STRONG or PROMISING)
elevate-web-scraping-product-discovery (Web candidate discovery)
  ↓
elevate-product-research-intelligence (12-step quality research)
  ↓
elevate-source-integrity (Identity parity verification)
  ↓
elevate-niche-product-matching (Style & room context matching)
  ↓
elevate-commercial-product-validation (ASIN & URL fact checking)
  ↓
elevate-product-article-optimization / elevate-editorial-product-integration
```
