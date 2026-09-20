---
name: elevate-product-research-queue-orchestration
description: Orchestrates product opportunity conversion into a structured, evidence-aware, dependency-driven research queue, managing structured normalization, missing-evidence queuing, skill dispatch contracts, research dependency graphs, research batching, stop conditions, and return contracts.
version: 1.0
domain: product-opportunity-research-queue-orchestration
ownership: opportunity-to-research-queue-orchestration-and-dispatch-management
depends_on:
  - elevate-product-opportunity-scoring
  - elevate-web-scraping-product-discovery
  - elevate-product-research-intelligence
  - elevate-problem-product-intelligence
  - elevate-niche-product-matching
  - elevate-source-integrity
  - elevate-commercial-product-validation
  - elevate-product-portfolio-intelligence
  - elevate-seasonal-product-intelligence
  - elevate-content-freshness-intelligence
  - elevate-product-freshness-intelligence
  - elevate-editorial-product-integration
  - elevate-product-article-optimization
  - elevate-product-performance-intelligence
  - elevate-content-cluster-intelligence
---

# Elevate Product Opportunity $\rightarrow$ Research Queue Orchestration Intelligence

## 1. Overview & Core Philosophy

`elevate-product-research-queue-orchestration` is the orchestration layer that converts evaluated product opportunities into a structured, evidence-aware, dependency-driven research queue.

### Core Question
> **"Given all currently identified product opportunities, what should we research next, why, what evidence is missing, which specialized skill should handle it, and what upstream dependencies must be resolved before the opportunity can advance?"**

### Operational Boundaries
- **DOES NOT** perform scraping, product research, source verification, niche matching, commercial validation, or article drafting itself.
- **DOES** manage opportunity normalization, duplicate/overlap detection, missing-evidence tagging, dependency graphs, readiness classification, research batching, skill dispatch contracts, stop conditions, result return contracts, and re-evaluation routing.

---

## 2. Core Orchestration Pipeline

```
PRODUCT OPPORTUNITIES (`elevate-product-opportunity-scoring`)
        ↓
OPPORTUNITY NORMALIZATION (27 Structured Record Fields)
        ↓
DUPLICATE / OVERLAP CHECK (`DISTINCT`, `COMPLEMENTARY`, `DUPLICATE`)
        ↓
EVIDENCE-STATE AUDIT (`VERIFIED`, `UNVERIFIED`, `UNKNOWN`, `STALE`)
        ↓
USER-PROBLEM / SOLUTION CHAIN CHECK (`elevate-problem-product-intelligence`)
        ↓
SEASONAL + FRESHNESS CHECK (`elevate-seasonal-product-intelligence` / Freshness)
        ↓
PORTFOLIO / EXISTING-COVERAGE CHECK (`elevate-product-portfolio-intelligence`)
        ↓
RESOURCE / RESEARCH COST CHECK (`LOW`, `MEDIUM`, `HIGH`, `UNKNOWN`)
        ↓
RESEARCH READINESS (`READY_TO_RESEARCH`, `RESEARCH_REQUIRED`, `BLOCKED`, etc.)
        ↓
QUEUE PRIORITIZATION (`IMMEDIATE_RESEARCH`, `NEXT_RESEARCH_BATCH`, etc.)
        ↓
SKILL DISPATCH (Structured Research Handoff Contract)
        ↓
RESEARCH RESULT RETURN (Result Return Contract)
        ↓
OPPORTUNITY RE-EVALUATION (`elevate-product-opportunity-scoring`)
```

---

## 3. Opportunity Normalization Schema (27 Fields)

Every incoming opportunity MUST be normalized into a structured record:

1. `OPPORTUNITY_ID`: Unique system identifier (e.g. `OPP-2026-0920-001`).
2. `OPPORTUNITY_TYPE`: `PRODUCT_CATEGORY`, `PRODUCT_CONCEPT`, `PRODUCT_ROLE`, `PRODUCT_CLUSTER`, `ARTICLE_PRODUCT_SET`, `SHOP_THE_LOOK_COMPONENT`, `SEASONAL_PRODUCT_OPPORTUNITY`, `EMERGING_PRODUCT_OPPORTUNITY`, `REPLACEMENT_OPPORTUNITY`.
3. `OPPORTUNITY_NAME`: Concise descriptive name.
4. `PRODUCT_CATEGORY`: Target product category.
5. `PRODUCT_CONCEPT`: Specific functional or visual concept.
6. `USER_PROBLEM`: Documented reader problem or friction.
7. `SOLUTION_MECHANISM`: Functional room fix or styling solution.
8. `ARTICLE_INTENT`: Target article intent (`HOW_TO`, `DISCOVERY`, `SMALL_SPACE`, etc.).
9. `ROOM_CONTEXT`: Spatial environment (e.g. Small Studio Living Room).
10. `STYLE_CONTEXT`: Aesthetic tag (e.g. Dark Academia, Warm Minimalism).
11. `AUDIENCE`: Lifestyle target (e.g. Renters, Pet Owners).
12. `TREND_STATE`: `RISING`, `STABLE`, `DECLINING`, `EMERGING`, `SEASONAL`, `MIXED`, `UNCLEAR`, `UNKNOWN`.
13. `DEMAND_STATE`: `STRONG_SIGNAL`, `MODERATE_SIGNAL`, `WEAK_SIGNAL`, `MIXED_SIGNAL`, `UNKNOWN`.
14. `SEASONAL_STATE`: `NOW`, `UPCOMING`, `FUTURE`, `PASSED`, `RECURRING`, `EVERGREEN`, `UNKNOWN`.
15. `FRESHNESS_STATE`: `NEW`, `CURRENT`, `AGING`, `STALE`, `REPLACEMENT_REQUIRED`, `UNKNOWN`.
16. `EXISTING_ELEVATE_COVERAGE`: `UNUSED_OPPORTUNITY`, `UNDER_COVERED`, `ALREADY_COVERED`, `UNKNOWN`.
17. `PORTFOLIO_STATE`: `FILLS_GAP`, `COMPLEMENTS_EXISTING`, `DUPLICATES_EXISTING`, `OVERCONCENTRATED_CATEGORY`, `UNKNOWN`.
18. `EDITORIAL_VALUE`: `HIGH`, `MODERATE`, `LOW`, `UNKNOWN`.
19. `VISUAL_VALUE`: `HIGH`, `MODERATE`, `LOW`, `UNKNOWN`.
20. `CURRENT_EVIDENCE_STATE`: `VERIFIED`, `SUPPORTED`, `PARTIAL`, `UNVERIFIED`, `UNKNOWN`, `STALE`, `TIME_SENSITIVE`, `CONFLICTED`.
21. `MISSING_EVIDENCE`: Explicit array of missing evidence types.
22. `SOURCE_CONFLICT_STATE`: `NONE`, `SOURCE_CONFLICT`, `IDENTITY_CONFLICT`, `MARKETPLACE_CONFLICT`.
23. `RESOURCE_COST`: `LOW`, `MEDIUM`, `HIGH`, `UNKNOWN`.
24. `CURRENT_CLASSIFICATION`: `STRONG OPPORTUNITY`, `PROMISING OPPORTUNITY`, `RESEARCH REQUIRED`, `MONITOR`, `WEAK OPPORTUNITY`, `REJECT`, `UNKNOWN`.
25. `CURRENT_QUEUE_STATE`: `READY_TO_RESEARCH`, `RESEARCH_REQUIRED`, `VERIFY_FIRST`, `BLOCKED`, `MONITOR`, `NO_ACTION`, `UNKNOWN`.
26. `LAST_REVIEWED`: Timestamp of last audit.
27. `NEXT_REQUIRED_ACTION`: Specific receiving skill and next task description.

> [!CAUTION]
> **Preserve UNKNOWN Values:** Missing information MUST remain `UNKNOWN`. Never fabricate or infer values for unverified fields.

---

## 4. Research Readiness (7 Taxonomy States)

Before dispatching an opportunity to a specialized skill, audit its research readiness:
- `READY_TO_RESEARCH`: Problem, solution mechanism, category, value, available evidence, and missing evidence are all clearly defined. Clear for skill dispatch.
- `RESEARCH_REQUIRED`: Broad category or idea exists, but user problem or solution mechanism requires definition before dispatching discovery.
- `VERIFY_FIRST`: Commercial identity or source conflict requires resolution before proceeding.
- `BLOCKED`: Hard upstream conflict (`SOURCE_CONFLICT`, `IDENTITY_CONFLICT`) halts advancement.
- `MONITOR`: Emerging trend or seasonal timing is premature; hold in watchlist queue.
- `NO_ACTION`: Opportunity rejected or already fully covered on site.
- `UNKNOWN`: Insufficient normalized data to audit readiness.

---

## 5. Missing-Evidence Queue (14 Taxonomy Types)

Instead of classifying an opportunity as vaguely "weak", tag exact missing evidence items:
1. `MISSING_TREND_EVIDENCE` (`elevate-trend-demand-intelligence`)
2. `MISSING_DEMAND_EVIDENCE` (`elevate-trend-demand-intelligence`)
3. `MISSING_SEASONAL_EVIDENCE` (`elevate-seasonal-product-intelligence`)
4. `MISSING_PRODUCT_CANDIDATES` (`elevate-web-scraping-product-discovery`)
5. `MISSING_QUALITY_EVIDENCE` (`elevate-product-research-intelligence`)
6. `MISSING_SOURCE_VERIFICATION` (`elevate-source-integrity`)
7. `MISSING_COMMERCIAL_DATA` (`elevate-commercial-product-validation`)
8. `MISSING_NICHE_MATCH` (`elevate-niche-product-matching`)
9. `MISSING_PORTFOLIO_CONTEXT` (`elevate-product-portfolio-intelligence`)
10. `MISSING_FRESHNESS_DATA` (`elevate-content-freshness-intelligence` / `elevate-product-freshness-intelligence`)
11. `MISSING_EDITORIAL_PURPOSE` (`elevate-editorial-product-integration`)
12. `MISSING_ARTICLE_SYSTEM_FIT` (`elevate-product-article-optimization`)
13. `MISSING_USER_PROBLEM` (`elevate-problem-product-intelligence`)
14. `MISSING_PERFORMANCE_FEEDBACK` (`elevate-product-performance-intelligence`)

Each missing evidence item MUST specify: `evidence_type`, `current_state`, `required_skill`, `priority`, `is_blocking`, and `reason`.

---

## 6. Skill Dispatch Map & Research Dependency Graph

### Skill Dispatch Map
- **Trend/Demand Evidence:** $\rightarrow$ `elevate-trend-demand-intelligence`
- **Web Discovery:** $\rightarrow$ `elevate-web-scraping-product-discovery`
- **Product Research:** $\rightarrow$ `elevate-product-research-intelligence`
- **Problem Analysis:** $\rightarrow$ `elevate-problem-product-intelligence`
- **Niche Matching:** $\rightarrow$ `elevate-niche-product-matching`
- **Source Verification:** $\rightarrow$ `elevate-source-integrity`
- **Commercial Validation:** $\rightarrow$ `elevate-commercial-product-validation`
- **Portfolio Analysis:** $\rightarrow$ `elevate-product-portfolio-intelligence`
- **Seasonality:** $\rightarrow$ `elevate-seasonal-product-intelligence`
- **Freshness:** $\rightarrow$ `elevate-content-freshness-intelligence` / `elevate-product-freshness-intelligence`
- **Editorial Integration:** $\rightarrow$ `elevate-editorial-product-integration`
- **Whole-Page Optimization:** $\rightarrow$ `elevate-product-article-optimization`
- **Performance Feedback:** $\rightarrow$ `elevate-product-performance-intelligence`

### Research Dependency Graph & Upstream Halt Rules
```
USER_PROBLEM
  ↓
SOLUTION_MECHANISM
  ↓
PRODUCT_CATEGORY
  ↓
TREND / DEMAND
  ↓
PRODUCT_DISCOVERY (`web-scraping`)
  ↓
PRODUCT_RESEARCH (`12-step quality`)
  ↓
SOURCE_VALIDATION (`identity parity`)
  ↓
NICHE_MATCHING (`style & room fit`)
  ↓
COMMERCIAL_VALIDATION (`ASIN & URL`)
  ↓
EDITORIAL_INTEGRATION (`article placement`)
```

> [!IMPORTANT]
> **Upstream Halt Rules:**
> 1. Do NOT perform candidate selection if `PRODUCT_CATEGORY` = `UNKNOWN`.
> 2. Do NOT perform commercial validation if `PRODUCT_IDENTITY` = `UNVERIFIED`.
> 3. Do NOT integrate product into an article if `SOURCE_CONFLICT` = `ACTIVE`.

---

## 7. Contextual Priority Classes & Rationale Rules

Assign queue priority based on evidence alignment:
- `IMMEDIATE_RESEARCH`: High problem clarity, upcoming seasonal timing or high demand, clear portfolio gap, low/moderate research cost.
- `NEXT_RESEARCH_BATCH`: Solid opportunity scheduled for next standard batch.
- `WATCHLIST`: Emerging trend or future seasonal window; monitor.
- `LOW_PRIORITY`: High research cost, weak niche fit, or category overconcentration.
- `BLOCKED`: Active identity or source conflict.
- `NO_ACTION`: Rejected or duplicate opportunity.

### Written Priority Rationale Requirement
Every prioritized queue item MUST expose an explicit written reason.
- **Compliant Rationale:** *"Seasonal preparation window is active (Q4 holiday lead time), user problem is clearly defined for compact rentals, and category is underrepresented in portfolio. Product research evidence is required."*
- **Prohibited Rationales:** *"High score"*, *"High commission"*, *"Trending, research immediately"*.

---

## 8. Seasonal Lead-Time & Resource Cost Logic

### Seasonal Queue Lead-Time States
- `TOO_EARLY`: Outside preparation lead time; place on watchlist.
- `GOOD_RESEARCH_WINDOW`: Active preparation window; optimal time to dispatch research.
- `PUBLISHING_WINDOW`: Content drafting active; research must be complete.
- `LATE`: Post-peak preparation window; dispatch only if fast-track verification exists.
- `PASSED`: Season ended; suppress research queue item until next cycle.
- `UNKNOWN`: Seasonal timing bounds unverified.

### Resource-Aware Research Costs
- `LOW`: Single trusted source, verified ASIN, established category.
- `MEDIUM`: Multi-source web discovery required, moderate verification complexity.
- `HIGH`: Ambiguous product identity, dynamic source pages, multi-variant research.
- `UNKNOWN`: Research effort unquantified.

---

## 9. Research Batching & Duplicate Control

### Duplicate Control States
- `DISTINCT`: Unique opportunity; clear for queue entry.
- `COMPLEMENTARY`: Related to existing queue item; link opportunities and batch research.
- `PARTIAL_OVERLAP`: Shared category/problem; merge research scope.
- `HIGH_OVERLAP` / `DUPLICATE`: Identical opportunity already in queue; SUPPRESS NEW QUEUE ITEM.
- `UNKNOWN`: Overlap unverified.

### Research Batching Rules
- Batch items ONLY when they share a common `USER_PROBLEM`, `SOLUTION_MECHANISM`, `ROOM_CONTEXT`, or `RESEARCH_METHOD` (e.g. *Small Apartment Storage Batch*).
- Maintain individual `OPPORTUNITY_ID` and record identity for every item in a batch.
- Prohibit giant, unbounded research batches (>5 items).

---

## 10. Contracts & Stop Conditions

### 10.1 Research Handoff Contract Schema
When dispatching an opportunity to a receiving skill, produce a structured contract:

```markdown
### Research Handoff Contract

OPPORTUNITY_ID: [OPP-ID]
TARGET_SKILL: [Receiving Skill Name, e.g. elevate-product-research-intelligence]
OBJECTIVE: [Specific research objective]
USER_PROBLEM: [Reader problem friction]
SOLUTION_MECHANISM: [Functional solution mechanism]
PRODUCT_CATEGORY: [Target category]
ARTICLE_CONTEXT: [Target article intent & title]
ROOM: [Target room]
STYLE: [Target decor style]
AUDIENCE: [Target lifestyle]
KNOWN_EVIDENCE: [Summary of verified evidence]
MISSING_EVIDENCE: [Array of missing evidence to investigate]
REQUIRED_SOURCES: [Authorized discovery sources]
RESEARCH_SCOPE: [Specific research boundaries]
RESOURCE_BUDGET: [LOW / MEDIUM / HIGH]
STOP_CONDITIONS: [Explicit halt triggers]
EXPECTED_OUTPUT: [Required return data format]
PROVENANCE_REQUIREMENTS: [Source URL, timestamp, and provenance field requirements]
```

### 10.2 Strict Stop Conditions (9 Halt Triggers)
Halt research immediately when:
1. Source permission is unclear or prohibited by `robots.txt` / terms.
2. Access restrictions or rate limits block automated discovery.
3. `SOURCE_CONFLICT` or `IDENTITY_CONFLICT` is detected.
4. Product physical identity or ASIN parity cannot be established.
5. Material evidence conflicts between authoritative sources.
6. Requested research scope boundaries are reached.
7. Allocated resource cost budget is exhausted.
8. Opportunity is proven to be editorially irrelevant or duplicate.
9. Required upstream dependency remains unresolved.

### 10.3 Result Return Contract Schema
When a specialized skill completes research, return results via this contract:

```markdown
### Result Return Contract

OPPORTUNITY_ID: [OPP-ID]
RESEARCH_STATUS: [COMPLETED / PARTIAL / HALTED / FAILED]
EVIDENCE_FOUND: [Summary of gathered evidence]
EVIDENCE_MISSING: [Remaining missing evidence]
PRODUCT_CANDIDATES_FOUND: [Count & candidate profiles]
SOURCE_STATUS: [VERIFIED / UNVERIFIED / SOURCE_CONFLICT]
IDENTITY_STATUS: [MATCHED / UNMATCHED / AMBIGUOUS]
COMMERCIAL_STATUS: [COMMERCIALLY_VALID / STALE / UNVERIFIED]
NICHE_STATUS: [MATCHED / MISMATCHED]
PORTFOLIO_IMPACT: [FILLS_GAP / DUPLICATIVE]
SEASONAL_STATUS: [TIMELY / LATE / PASSED]
FRESHNESS_STATUS: [CURRENT / STALE]
NEW_CONFLICTS: [List of new conflicts identified]
NEXT_ACTION: [Route to elevate-product-opportunity-scoring for re-evaluation]
```

---

## 11. Standardized Orchestration Queue Table

```markdown
### Product Opportunity Research Queue

| Opportunity ID | Name | User Problem | Missing Evidence | Priority | Lead Time | Cost | Target Skill | Queue State |
|---|---|---|---|---|---|---|---|---|
| OPP-2026-001 | Fluted Planters | Small patio greenery | `MISSING_PRODUCT_CANDIDATES` | `IMMEDIATE` | `GOOD_WINDOW` | `LOW` | `web-scraping-discovery` | `READY_TO_RESEARCH` |
```

---

## 12. Strict Unknown-State Non-Promotion & Commission Neutrality

- **NO State Promotion:**
  - `UNKNOWN` $\not\rightarrow$ `SUPPORTED`
  - `UNVERIFIED` $\not\rightarrow$ `VERIFIED`
  - `EXTRACTION` $\not\rightarrow$ `VALIDATION`
  - `PUBLIC_IMAGE` $\not\rightarrow$ `LICENSED_IMAGE`
  - `TREND` $\not\rightarrow$ `DEMAND`
  - `CATEGORY_OPPORTUNITY` $\not\rightarrow$ `VALID_PRODUCT`
- **Commission Neutrality:** Affiliate commission metadata MUST NOT independently dictate queue creation, research priority, or skill dispatch.
