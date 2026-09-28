---
name: elevate-pinterest-learning-loop
description: Advanced Pinterest Performance Intelligence & Continuous Learning Engine for ElevateLivingCo. Normalizes platform telemetry, conducts multi-variable pattern analysis, tests structured hypotheses, and drives creative strategy improvements.
version: 2.0
scope: pinterest-performance-intelligence-and-analytics
risk: low
---

# Elevate Pinterest Learning Loop & Performance Intelligence Engine (V2.0)

## 1. PURPOSE & ARCHITECTURE
Establishes a rigorous, closed-loop analytics intelligence system that ingests empirical Pinterest Analytics telemetry post-publication, attaches multi-dimensional creative metadata, evaluates rate-based efficiency KPIs, and generates evidence-backed hypotheses to optimize future ElevateLivingCo visual campaigns.

```
PINTEREST ANALYTICS ──► RAW METRICS ──► NORMALIZE ──► ATTACH METADATA
                                                            │
FUTURE CREATIVE ◄── UPDATE STRATEGY ◄── HYPOTHESES ◄── COMPARE PINS
```

---

## 2. REPOSITORY ASSETS & DATA SOURCES

All performance tracking and hypothesis logging interact with these authoritative project datasets:

- **Performance Schema:** [pinterest-performance-schema.md](file:///d:/A_Elevate_Living_Co/vikramchennamsetty.github.io/.agents/data/pinterest-performance-schema.md)
- **KPI Definitions:** [pinterest-kpi-definitions.md](file:///d:/A_Elevate_Living_Co/vikramchennamsetty.github.io/.agents/data/pinterest-kpi-definitions.md)
- **Campaign Tracker:** [pinterest-campaign-tracker.csv](file:///d:/A_Elevate_Living_Co/vikramchennamsetty.github.io/.agents/data/pinterest-campaign-tracker.csv)
- **Hypothesis Log:** [pinterest-hypotheses.md](file:///d:/A_Elevate_Living_Co/vikramchennamsetty.github.io/.agents/data/pinterest-hypotheses.md)
- **Report Template:** [pinterest-performance-report.md](file:///d:/A_Elevate_Living_Co/vikramchennamsetty.github.io/.agents/templates/pinterest-performance-report.md)

---

## 3. THE 8-STAGE PERFORMANCE INTELLIGENCE PIPELINE

### STAGE 1: INGEST PINTEREST ANALYTICS
- Fetch raw platform metrics for published Pin IDs (`DAC-001` through `DAC-005`, `SLR-001`, etc.).
- Collect: `IMPRESSIONS`, `PIN_CLICKS`, `OUTBOUND_CLICKS`, `SAVES`, `ENGAGEMENTS`.
- **Source Integrity Rule:** Record date range, account scope, and organic status. Never mix paid and organic telemetry.

### STAGE 2: NORMALIZE METRICS
- Compute rate KPIs using exact platform definitions:
  - **Save Rate:** `(SAVES / IMPRESSIONS) * 100`
  - **Outbound Click Rate (CTR):** `(OUTBOUND_CLICKS / IMPRESSIONS) * 100`
  - **Engagement Rate:** `(ENGAGEMENTS / IMPRESSIONS) * 100`

### STAGE 3: ATTACH PIN CREATIVE METADATA
- Match every Pin ID in [pinterest-campaign-tracker.csv](file:///d:/A_Elevate_Living_Co/vikramchennamsetty.github.io/.agents/data/pinterest-campaign-tracker.csv) with its creative metadata:
  - `PIN_FORMAT` (Static / Video / Carousel)
  - `VISUAL_CONCEPT` (Hero Room / Lighting Nook / Bookshelf Vignette / Desk Detail / Small Apartment Nook)
  - `HEADLINE_FORMAT` (Category Title / Rule Set / Checklist / Formula / Space-Specific Guide)
  - `VALUE_FORMAT` (Quick List / Rule Set / Checklist / Formula / Small-Space Guide)
  - `SEARCH_INTENT` (Inspiration / Informational / Shopping / Problem-Solving)

### STAGE 4: EVALUATE EVIDENTIARY THRESHOLDS
> [!CAUTION]
> **PREMATURE OPTIMIZATION PREVENTION RULE:**
> - Do NOT label any Pin format a "winner" or "best-performing" on early samples.
> - Requires minimum **14 days post-publish** indexation window AND minimum **1,000 impressions per Pin**.
> - Samples failing these thresholds MUST be marked `INSUFFICIENT DATA`.

### STAGE 5: MULTI-DIMENSIONAL COMPARISON FRAMEWORK
When thresholds are satisfied, compare metrics across isolated dimensions:
1. **Value Format Performance:** Compare Save Rates & Outbound CTR between Quick List, Checklist, and Formula layouts.
2. **Visual Concept Performance:** Compare Impression velocity & Save Rates between Hero Room, Vignettes, and Detail shots.
3. **Headline & Intent Performance:** Compare Outbound CTR between broad aesthetic titles vs space-constrained problem-solving titles.
4. **Board Context:** Isolate performance differences attributable to Pinterest Board indexing.

### STAGE 6: IDENTIFY RECURRING PATTERNS
- Look for multi-variable interactions e.g. `Dark Academia + Bookshelf Vignette + Checklist + Search Keyword`.
- Require repeated evidence across $\ge 2$ independent campaign clusters before declaring a rule upgrade.

### STAGE 7: GENERATE STRUCTURED HYPOTHESES
- Log observations into [pinterest-hypotheses.md](file:///d:/A_Elevate_Living_Co/vikramchennamsetty.github.io/.agents/data/pinterest-hypotheses.md) using standard schema (`H-001`, `H-002`, etc.).
- Clearly separate correlation from causation.

### STAGE 8: UPDATE CREATIVE STRATEGY (IMMUTABLE APPEND ONLY)
- Append verified insights to `pinterest-keyword-database.md`, `pinterest-search-intent-matrix.md`, and `home-decor-visual-intent-matrix.md`.
- **Never overwrite historical research data.** All updates are dated append operations.

---

## 4. UTM & LINK TRACKING SPECIFICATION

All Pin destination links MUST be structured with standard tracking parameters:

```
https://elevatelivingco.me/10-dark-academia-essentials.html?utm_source=pinterest&utm_medium=organic_social&utm_campaign=dark_academia&utm_content=DAC-001
```

- `utm_source`: `pinterest`
- `utm_medium`: `organic_social`
- `utm_campaign`: `<topical_cluster_slug>`
- `utm_content`: `<permanent_pin_id>`

> [!IMPORTANT]
> **AFFILIATE LINK INTEGRITY:** UTM parameters added to destination links MUST NEVER interfere with destination page canonical tags (`<link rel="canonical">`) or on-page Amazon affiliate tag parameters (`tag=elevateliv05f-20`).
