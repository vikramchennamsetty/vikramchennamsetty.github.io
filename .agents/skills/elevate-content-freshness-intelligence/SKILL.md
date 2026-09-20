---
name: elevate-content-freshness-intelligence
description: Evaluates whether existing Elevate articles remain current, useful, coherent, and strategically relevant across 20 content freshness dimensions, recommending evidence-based refresh, expansion, consolidation, or retirement actions.
version: 1.0
domain: content-freshness-and-editorial-decay-intelligence
ownership: content-level-longitudinal-freshness-and-decay-evaluation
depends_on:
  - elevate-trend-demand-intelligence
  - elevate-seasonal-product-intelligence
  - elevate-product-freshness-intelligence
  - elevate-commercial-product-validation
  - elevate-source-integrity
  - elevate-problem-product-intelligence
  - elevate-product-performance-intelligence
  - elevate-editorial-retention
  - elevate-niche-product-matching
  - elevate-affiliate-compliance
---

# Elevate Content Freshness & Editorial Decay Intelligence

## 1. Overview & Core Philosophy

`elevate-content-freshness-intelligence` evaluates the longitudinal validity, usefulness, narrative coherence, and strategic relevance of existing Elevate articles over time.

### Core Question
> **"Is this article still the right version of itself for its intended reader, or does it require evidence-based refresh, expansion, consolidation, or retirement?"**

### Core Principles
1. **Age Is Not Decay:** Publication date alone does NOT constitute content decay. An article published 3 years ago that remains factually accurate, aesthetically aligned, and useful is `CURRENT` or `EVERGREEN`.
2. **Traffic Decline Is Not Content Failure:** Search visibility or traffic drops can stem from algorithm updates, seasonality, or competitor movements. Declines must be evaluated across multiple dimensions before altering content.
3. **Product Staleness Is Not Article Decay:** Outdated or unavailable products require product replacement via `elevate-product-freshness-intelligence`, NOT complete article rewriting or deletion.
4. **Preserve Protected Article Identity:** Any content refresh action MUST preserve canonical URLs, primary search intent, ASIN tracking tags, and brand editorial identity.

---

## 2. The 20 Content Freshness Dimensions

The skill audits an article across 20 distinct freshness dimensions:

| # | Dimension | Source Skill / System | What It Audits |
|---|---|---|---|
| 1 | `PUBLICATION_DATE` | CMS Metadata | Original publication timestamp |
| 2 | `LAST_EDITORIAL_REVIEW` | Editorial Log | Date of last human editorial review |
| 3 | `LAST_RENDERING_UPDATE` | Build System | Date of last static site HTML build |
| 4 | `TREND_FRESHNESS` | `elevate-trend-demand-intelligence` | Trend phase shift (e.g. `EMERGING` $\rightarrow$ `DECLINING`) |
| 5 | `SEASONAL_FRESHNESS` | `elevate-seasonal-product-intelligence` | Seasonal timing window (e.g. `OFF_SEASON`, `PREPARATION_WINDOW`) |
| 6 | `PRODUCT_FRESHNESS` | `elevate-product-freshness-intelligence` | Status of embedded products (`RETAIN`, `REPLACE`, `REMOVE`) |
| 7 | `COMMERCIAL_FRESHNESS` | `elevate-commercial-product-validation` | Commercial offer and affiliate link validity |
| 8 | `SOURCE_FRESHNESS` | `elevate-source-integrity` | Fact/source integrity and domain status |
| 9 | `SEARCH_VISIBILITY` | Search Telemetry | Impression, ranking, and search traffic trajectory |
| 10 | `USER_ENGAGEMENT` | `elevate-product-performance-intelligence` | CTR, scroll depth, and interaction telemetry |
| 11 | `INTERNAL_LINK_FRESHNESS` | Site Graph | Validity of internal inbound/outbound links |
| 12 | `IMAGE_MEDIA_FRESHNESS` | Asset Registry | Image quality, asset availability, and responsive scaling |
| 13 | `STRUCTURED_DATA_VALIDITY` | Schema Validator | Schema.org JSON-LD validity and field compliance |
| 14 | `ARTICLE_INTENT_VALIDITY` | Editorial Taxonomy | Alignment with target user intent (`HOW_TO`, `DISCOVERY`, etc.) |
| 15 | `PROBLEM_VALIDITY` | `elevate-problem-product-intelligence` | Relevance of reader problem/root cause definitions |
| 16 | `PRODUCT_CATEGORY_VALIDITY` | Category Taxonomy | Relevance of product category coverage |
| 17 | `CONTENT_OVERLAP_DUPLICATION` | Portfolio Graph | Overlap with newer articles in same cluster |
| 18 | `EDITORIAL_USEFULNESS` | Editorial Review | Reader utility, clarity, and narrative flow |
| 19 | `PINTEREST_RELEVANCE` | `elevate-editorial-retention` | Visual pin styling and Pinterest engagement signals |
| 20 | `BRAND_STYLE_RELEVANCE` | `elevate-niche-product-matching` | Alignment with current Elevate brand/aesthetic guidelines |

---

## 3. Decay Taxonomy (14 Types)

When evidence indicates decay, the skill classifies it into one of 14 specific decay types:

1. `TREND_DECAY`: Aesthetics or topics transitioned from peak to stale/declining.
2. `SEASONAL_DECAY`: Content entered an off-season window requiring seasonal update or pause.
3. `PRODUCT_DECAY`: Embedded products are discontinued, out of stock, or stale.
4. `COMMERCIAL_DECAY`: Affiliate links broken, pricing brackets invalid, or merchant terms changed.
5. `SEARCH_DECAY`: Article lost search rankings or impressions due to query intent shift or competitors.
6. `EDITORIAL_DECAY`: Prose narrative feels outdated, clunky, or lacks clarity relative to current standards.
7. `SOURCE_DECAY`: Reference sources, domain links, or study citations are 404 or outdated.
8. `LINK_DECAY`: Internal cross-links point to deleted, redirected, or renamed pages.
9. `MEDIA_DECAY`: Images are low-res, broken, missing alt tags, or aesthetically outdated.
10. `STRUCTURED_DATA_DECAY`: Schema markup missing updated fields or failing validation syntax.
11. `INTENT_DECAY`: Reader search query intent evolved beyond original article scope.
12. `DUPLICATION_DECAY`: Newer cluster articles cannibalized search intent or content overlap.
13. `MIXED_DECAY`: Multiple decay types detected simultaneously across categories.
14. `UNKNOWN`: Insufficient evidence to confirm decay type.

---

## 4. Article Freshness & Action Taxonomy

### Article Freshness Statuses (8 Descriptives)
- `CURRENT`: Article meets all 20 freshness dimensions; no action needed.
- `AGING`: Article is older but functionally accurate and useful; monitor.
- `STALE`: Minor dimensions (links, specs, pricing) require attention.
- `DECAYING`: Multiple major dimensions (products, prose, search intent) show decay.
- `CONFLICTED`: Contradictory signals across dimensions (e.g. high traffic but broken products).
- `SEASONAL`: Off-season content entering or exiting active window.
- `EVERGREEN`: Timeless content with persistent utility and zero decay.
- `UNKNOWN`: Telemetry or dimension data incomplete.

### Article Refresh Actions (11 Actions)
1. `CURRENT`: Retain content as-is.
2. `MONITOR`: Keep active without edits; re-audit in next cycle.
3. `MINOR_REFRESH`: Update minor elements (pricing copy, internal links, date metadata).
4. `MAJOR_REFRESH`: Revise prose narrative, problem statements, or section structure.
5. `EXPAND`: Add new solution sections, sub-topics, or product categories.
6. `RESTRUCTURE`: Reorganize section layout, product hierarchy, or reading flow.
7. `CONSOLIDATE`: Merge article into a stronger cluster parent page.
8. `REDIRECT`: 301 redirect dead/thin article to a relevant cluster guide.
9. `ARCHIVE`: De-index or move page to archive if obsolete and un-redirectable.
10. `BLOCK`: Halt page rendering or publication due to severe compliance/source failure.
11. `UNKNOWN`: Requires human editorial review.

---

## 5. Protected Article Identity Manifest

Any refresh, expansion, or restructure operation MUST enforce identity preservation:

- **Canonical URL:** `slug` MUST NOT change without explicit 301 redirect mapping.
- **Primary Search Intent:** Target primary query class MUST remain preserved.
- **Affiliate Tag Integrity:** ASIN parameter tags and tracking IDs MUST NOT be wiped.
- **Editorial Voice:** Tone MUST adhere to Elevate Living Co design principles.

---

## 6. Site & Cluster Audit Protocol

```
ARTICLE AUDIT TRIGGER
        │
        ▼
INSPECT 20 FRESHNESS DIMENSIONS ───► (Gather Telemetry from Sub-Skills)
        │
        ▼
EVALUATE DECAY TAXONOMY ───────────► (Classify Decay: PRODUCT, SEARCH, INTENT, etc.)
        │
        ▼
DETERMINE FRESHNESS STATUS ────────► (CURRENT, AGING, STALE, DECAYING, etc.)
        │
        ▼
SELECT REFRESH ACTION ─────────────► (MINOR_REFRESH, EXPAND, CONSOLIDATE, etc.)
        │
        ▼
ENFORCE PROTECTED IDENTITY ────────► (Validate Canonical URL, ASINs, Intent)
        │
        ▼
DISPATCH TO SUB-SKILLS ────────────► (Execute specific fixes via specialized skills)
```

---

## 7. Inter-Skill Handoffs

- **Product Replacements:** Hand off to `elevate-product-freshness-intelligence`.
- **Trend Shifts:** Query `elevate-trend-demand-intelligence`.
- **Seasonal Windows:** Query `elevate-seasonal-product-intelligence`.
- **Fact/Source Errors:** Hand off to `elevate-source-integrity`.
- **Affiliate Link Errors:** Hand off to `elevate-affiliate-compliance`.
- **Narrative/Retention Edits:** Hand off to `elevate-editorial-retention`.
