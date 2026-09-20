---
name: elevate-trend-demand-intelligence
description: >-
  Analyzes market trend direction, search interest signals, visual search trends, seasonal timing, 
  and consumer demand across permitted sources to identify content and product category opportunities 
  aligned with ElevateLivingCo's editorial niche—without manufacturing hype or guaranteed claims.
version: 1.0
triggers:
  - "trending products"
  - "trending décor"
  - "what's trending"
  - "current décor trends"
  - "rising styles"
  - "seasonal trends"
  - "demand research"
  - "market demand"
  - "product demand"
  - "what people are searching for"
  - "Pinterest trends"
  - "emerging décor styles"
  - "upcoming seasonal opportunities"
  - "content opportunities based on trends"
  - "product opportunities based on demand"
scope: trend-and-demand-intelligence
risk: medium
source:
  type: native-specialized
  version: 1.0
---

# Elevate Trend & Demand Intelligence Skill (V1.0)

## Purpose
Establishes the intelligence layer for analyzing decor style trends, search interest movement, seasonal opportunities, and market demand signals. Evaluates evidence to identify high-value editorial topics and product category opportunities for ElevateLivingCo—strictly decoupling trend direction from purchase demand, enforcing niche relevance, and recording field-level provenance without manufacturing hype or traffic/sales guarantees.

---

## 1. System Architecture & Workflow Pipeline

$$\text{DISCOVERY} \longrightarrow \text{TREND / DEMAND ANALYSIS} \longrightarrow \text{PRODUCT RESEARCH} \longrightarrow \text{SOURCE VALIDATION} \longrightarrow \text{EDITORIAL SELECTION}$$

### Separation of Responsibilities:
- **`elevate-web-scraping-product-discovery`:** Collects permitted source data and discovery records from the web.
- **`elevate-trend-demand-intelligence` (THIS SKILL):** Analyzes macro trend directions, demand signals, seasonal lead times, and Elevate niche relevance to identify topic and category opportunities.
- **`elevate-product-research-intelligence`:** Evaluates candidate product sets using the 12-step contextual hierarchy and 5-tier classification matrix.
- **`elevate-source-integrity` & `elevate-affiliate-compliance`:** Validates commercial identity, ASIN mapping, Associate tags (`elevateliv05f-20`), FTC disclosures, and protected link contracts.

---

## 2. Decoupling Trend vs Demand

Never treat trend direction and purchase demand as identical concepts:

| Dimension | Technical Definition | Key Evidence Indicators | Prohibited Assumptions |
|---|---|---|---|
| **TREND** | Change or emergence of interest in a decor style, material, or visual concept over time. | Rising visual search interest, editorial publication frequency, growing query variants. | ~~"Trending = Best Seller"~~ *(Prohibited)* |
| **DEMAND** | Active reader/consumer intent seeking, comparing, or considering a specific solution or product category. | High-intent search queries ("best lamps for dark rental"), category search volume, solution seeking. | ~~"High Interest = Purchase Intent"~~ *(Prohibited)* |

---

## 3. The 15 Signal Categories

Trend and demand intelligence synthesizes evidence from across these 15 signal categories:

1. **Search Interest:** Absolute or relative query interest levels across search engines.
2. **Search Trend Direction:** Trajectory of search queries over defined time windows.
3. **Search Query Growth:** Emergence of long-tail modifier queries (e.g. "dark academia bedroom lighting ideas").
4. **Pinterest & Visual Trend Signals:** Visual search interest, recurring mood board elements, saveable visual themes.
5. **Public Retailer Category Signals:** Emerging category placements, featured seasonal showcases.
6. **Editorial Publication Frequency:** Volume of coverage across interior design magazines, blogs, and trade publications.
7. **Public Discussion Signals:** Permitted public forum topics and decor community discussions.
8. **Seasonal Patterns:** Recurring annual interest spikes (spring refresh, fall cozy, summer patio).
9. **Holiday & Event Timing:** Key seasonal events (Christmas, Halloween, Valentine's, Back-to-school, Moving season).
10. **Product / Category Emergence:** New product form factors or material innovations entering the decor space.
11. **Elevate Internal Performance Data:** Historical traffic trends and engagement patterns across existing articles.
12. **Elevate Product Catalog:** Historical ASIN performance and category coverage (`AMAZON_PRODUCT_CATALOG.csv`).
13. **Competitor & Editorial Coverage:** Topic gaps and coverage density across competing lifestyle publications.
14. **Geographic Relevance:** Regional applicability (urban apartments, suburban homes, climate factors).
15. **Signal Recency:** Timestamped observation windows ensuring stale data is not presented as current.

---

## 4. Standardized Trend & Demand Evidence Model

Every trend or demand observation MUST record its complete provenance schema:

```markdown
### Trend / Demand Observation Record

- **TOPIC_OR_CATEGORY:** [e.g. Dark Academia Ambient Lighting]
- **SIGNAL:** [Extracted visual/search observation]
- **SOURCE:** [Specific source dataset or publication]
- **SOURCE_TYPE:** [SEARCH_TREND / VISUAL_SEARCH / EDITORIAL / RETAILER / SEASONAL]
- **OBSERVED_AT:** [ISO 8601 Timestamp, e.g. 2026-09-20T09:27:00Z]
- **TIME_WINDOW:** [30_DAYS / 90_DAYS / 1_YEAR / SEASONAL_ANNUAL]
- **GEOGRAPHY:** [US_NATIONAL / URBAN_APARTMENT / REGIONAL / UNKNOWN]
- **CONFIDENCE:** [HIGH / MEDIUM / LOW / UNKNOWN]
- **STATUS:** [VERIFIED / UNVERIFIED / STALE / TIME-SENSITIVE]
- **EVIDENCE_NOTES:** [Qualitative corroboration summary]
```

*Rule: Extraction success does NOT equal truth verification. Never set status to `VERIFIED` without independent source corroboration.*

---

## 5. Trend Direction Classification Framework

Classify trend trajectory strictly based on verifiable evidence. Do NOT invent percentages or force a direction when data is ambiguous:

- **RISING:** Clear evidence of increasing search interest, visual mentions, or query growth across multiple sources.
- **STABLE:** High, sustained interest with minimal directional fluctuation over 6–12 months.
- **DECLINING:** Evidence of diminishing search interest or visual frequency over consecutive time windows.
- **SEASONAL:** Spikes predictably at specific times of the year (e.g. outdoor patio decor in April–June).
- **EMERGING:** Early-stage visual or editorial signals with limited historical search volume.
- **MIXED:** Conflicting signals across different channels (e.g. rising on visual search but flat in general search).
- **UNCLEAR:** Insufficient data to determine trajectory.

### Correct Trend Rationale Example:
```markdown
TOPIC: Rechargeable Brass Cordless Table Lamps
DIRECTION: RISING
CONFIDENCE: MEDIUM
EVIDENCE: Multiple independent editorial roundups and rising long-tail visual search queries over 90 days.
```

---

## 6. Seasonal Intelligence & Publishing Lead-Time Matrix

Content planning MUST evaluate seasonal timing against publishing lead-time windows (`NOW`, `UPCOMING`, `FUTURE OPPORTUNITY`, `PASSED`):

| Season / Event | Primary Category Focus | Optimal Publishing Window | Lead-Time Status Rule |
|---|---|---|---|
| **Spring Refresh** | Bright textiles, pastel accents, balcony greening, decluttering storage. | January 15 – March 1 | UPCOMING if analyzed in Dec/Jan; PASSED if analyzed in May. |
| **Summer Outdoor** | Patio lighting, outdoor rugs, small balcony furniture, summer entertaining. | March 15 – May 1 | UPCOMING if analyzed in Feb/Mar; NOW if analyzed in June. |
| **Fall Cozy / Back-to-School** | Moody lighting, plush throws, study desks, warm wood tones, Dark Academia. | July 1 – August 15 | UPCOMING if analyzed in June/July; NOW if analyzed in September. |
| **Winter / Holidays** | Festive table settings, warm ambient lamps, velvet textures, holiday gifting. | September 15 – October 31 | UPCOMING if analyzed in Aug/Sept; PASSED if analyzed in Dec 25. |
| **Moving / Rental Season** | Non-permanent wall decor, modular storage, rental lighting hacks. | April 1 – June 1 | UPCOMING if analyzed in Feb/Mar. |

---

## 7. The Elevate Niche Filter & Content Gap Analysis

### Elevate Niche Filter:
Before a trend signal is converted into a content or product opportunity, it MUST pass the **Elevate Niche Filter**:
- *Core Pillars:* Modern Home Decor, Luxury Apartment Decor, Dark Academia, Small-Space Living, Ambient Lighting, Rental-Friendly Upgrades, Tactical Organization.
- *Filter Question:* *"Does this trend translate meaningfully into Elevate's target audience of aesthetic-conscious apartment dwellers and renters?"*
- *Rejection Rule:* Reject broad mass-market trends (e.g. suburban lawn care, rustic farmhouse barn doors) that clash with Elevate's urban editorial positioning.

### Content Gap Analysis Matrix:
Compare identified demand against existing Elevate coverage:
- **UNCOVERED:** High niche demand with 0 existing Elevate articles.
- **WEAKLY COVERED:** Topic mentioned briefly within a general guide; opportunity for a dedicated pillar.
- **OUTDATED:** Existing guide features stale products or obsolete styling advice.
- **WELL COVERED:** Topic fully addressed by existing production articles; avoid duplicate creation.

---

## 8. Opportunity Handoff to Product Research Intelligence

When a valid trend/demand opportunity is confirmed, output a **Trend Opportunity Package** to `elevate-product-research-intelligence`:

```markdown
### Trend Opportunity Handoff Package

**TARGET TOPIC:** [e.g. Moody Dark Academia Reading Nooks]  
**ELEVATE NICHE FIT:** [High - Direct match for Dark Academia pillar]  
**TREND DIRECTION:** [RISING]  
**DEMAND LEVEL:** [MEDIUM - Strong problem-solving query growth]  
**SEASONAL TIMING:** [UPCOMING - Target fall cozy prep]  
**LEAD TIME STATUS:** [Prepare content by August 1]  

#### Identified Product Category Opportunities:
1. **Category 1:** Warm ambient brass task lamps (Focus: Non-glare, dimmable)
2. **Category 2:** Dark wood floating book ledges (Focus: Rental-friendly mounting)
3. **Category 3:** Velvet accent pillows in deep forest green/burgundy

**EVIDENCE SUMMARY:** [List of corroborated search, visual, and editorial sources]
```

*Rule: This skill hands off CATEGORY OPPORTUNITIES. Final product ASIN selection is strictly performed by `elevate-product-research-intelligence`.*

---

## 9. Claims Gate & Source Quality Hierarchy

> [!CAUTION]
> **STRICT PROHIBITION ON MANUFACTURED TREND METRICS & GUARANTEED OUTCOMES:**
> - NEVER fabricate search volumes, growth percentages, sales volumes, bestseller ranks, viral status, or Pinterest save counts.
> - NEVER promise traffic increases, ranking positions, sales conversions, or viral outcomes.
> - Prohibited language: ~~"Guaranteed to trend"~~, ~~"This product is trending #1 on Pinterest"~~, ~~"Searched 50,000 times monthly"~~ (unless explicitly supported by authoritative data).

### Source Quality Hierarchy:
1. **Tier 1 (Highest Confidence):** First-party official search platform data and verified analytics feeds.
2. **Tier 2:** Established, reputable market research datasets and trade organization surveys.
3. **Tier 3:** Leading interior design publications (e.g., Architectural Digest, ELLE Decor, Domino).
4. **Tier 4:** Multi-source corroborated public discussions and retailer category placements.
5. **Tier 5 (Lowest Confidence):** Single social post or uncorroborated blog mention (requires `CONFIDENCE: LOW`).

---

## 10. Integration Matrix with Existing Skills

- `elevate-web-scraping-product-discovery`: Collects raw permitted web source records for trend interpretation.
- `elevate-product-research-intelligence`: Receives trend opportunity packages to select and classify candidate product sets.
- `elevate-editorial-retention`: Aligns trend insights with narrative retention structure and Pinterest pin-to-page journeys.
- `elevate-source-integrity`: Validates commercial identity and data provenance before production.
- `elevate-regression-prevention`: Enforces failure patterns FP-031 through FP-036 and rules RULE-027 through RULE-033.
- `elevate-skill-evolution`: Records trend prediction accuracy and recency lessons.
