---
name: elevate-market-trend-intelligence
description: >-
  Upstream trend discovery and market signal intelligence layer for ElevateLivingCo. 
  Aggregates Google Trends (keyword/topic/BigQuery) and Pinterest Trends (WoW/MoM/YoY growth), 
  normalizing evidence into TREND_EVIDENCE contracts without fabricating absolute search volumes.
version: 1.0.0
triggers:
  - "market trends"
  - "Google Trends"
  - "Pinterest Trends"
  - "trending décor topics"
  - "rising decor trends"
  - "seasonal interest spikes"
  - "emerging topics"
scope: trend-market-intelligence
risk: low
---

# Elevate Market Trend Intelligence (V1.0)

## 1. PURPOSE
Serves as the authoritative **upstream discovery layer** for market trend signals. It ingests search trend data from Google Trends and visual interest signals from Pinterest Trends, categorizing signals into standardized classifications and normalizing evidence for downstream product discovery.

> [!IMPORTANT]
> **DOES NOT REPLACE `elevate-trend-demand-intelligence`**:
> `elevate-market-trend-intelligence` acts as the raw upstream signal collector and multi-source adapter. `elevate-trend-demand-intelligence` remains responsible for decoupled trend vs. demand evaluation and niche fit validation.

---

## 2. TREND CLASSIFICATIONS & TAXONOMY
Every trend signal is categorized into one of 9 explicit categories:
* `SEARCH_TREND`: Rising search interest detected via search engine telemetry.
* `PINTEREST_TREND`: Visual discovery interest rising on Pinterest boards and search queries.
* `PRODUCT_TREND`: Specific product category or design aesthetic experiencing elevated demand.
* `SEASONAL_TREND`: Recurring annual/seasonal search pattern (e.g., fall entryways, holiday decor).
* `EMERGING_TOPIC`: Early-stage novelty trend with high MoM velocity.
* `SUSTAINED_DEMAND`: Multi-quarter evergreen search velocity.
* `SPIKE`: High short-term velocity requiring verification against long-term baseline.
* `DECLINING_INTEREST`: Negative YoY or MoM growth velocity.
* `UNKNOWN`: Insufficient data points to establish velocity direction.

---

## 3. COMPLIANT ADAPTER ARCHITECTURE

### A. Google Trends Adapter (`google_trends_adapter.js`)
* **Data Sources:** Keyword/topic exploration, related searches, regional interest, Trending Now, RSS/CSV feeds, Google Trends BigQuery public dataset (`bigquery-public-data.google_trends`).
* **Rule:** Relative interest values (0–100) MUST NEVER be presented as absolute monthly search volumes.
* **Fields:** `TREND_ID`, `source`, `query_or_topic`, `region`, `timestamp`, `time_window`, `interest_evidence`, `growth_evidence`, `related_queries`, `seasonality_evidence`, `source_url`, `evidence_state`.

### B. Pinterest Trends Adapter (`pinterest_trends_adapter.js`)
* **Data Sources:** Pinterest Trends API endpoints (requires OAuth bearer token via `PINTEREST_ACCESS_TOKEN`).
* **Metrics:** WoW (Week-over-Week), MoM (Month-over-Month), YoY (Year-over-Year) percentage growth, interest time series.
* **Missing Credentials Rule:** If `PINTEREST_ACCESS_TOKEN` is unconfigured, return `UNAVAILABLE_AUTH_REQUIRED` state immediately. Prohibit unauthorized web scraping.

---

## 4. TREND FUSION ENGINE (`trend_fusion_engine.js`)
Combines multi-source evidence into a single `TREND_EVIDENCE` object without inventing a fake unified numerical score.

### Evidence State Matrix:
* `GOOGLE`: `RISING` | `STABLE` | `DECLINING` | `UNKNOWN`
* `PINTEREST`: `RISING` | `STABLE` | `DECLINING` | `UNAVAILABLE_AUTH_REQUIRED`
* `SEASONALITY`: `STRONG` | `MODERATE` | `WEAK` | `OFF_SEASON`
* `PRODUCT_EVIDENCE`: `AVAILABLE` | `PARTIAL` | `MISSING`

$$\text{Resulting Opportunity State}: \text{PROMISING\_OPPORTUNITY} \mid \text{EMERGING\_NICHES} \mid \text{SEASONAL\_LEAD} \mid \text{INSUFFICIENT\_EVIDENCE}$$

---

## 5. DOWNSTREAM DISCOVERY PIPELINE
$$\text{TREND} \rightarrow \text{USER PROBLEM} \rightarrow \text{SOLUTION MECHANISM} \rightarrow \text{PRODUCT CATEGORY} \rightarrow \text{PRODUCT CANDIDATES} \rightarrow \text{EVIDENCE} \rightarrow \text{OPPORTUNITY} \rightarrow \text{RESEARCH QUEUE}$$

---

## 6. PROHIBITIONS & BOUNDARIES
* ❌ **NO FABRICATED METRICS:** Never estimate absolute search volume or monthly click numbers.
* ❌ **NO SCRAPING BYPASS:** Strictly respect Google and Pinterest API boundaries.
* ❌ **NO DIRECT PRODUCT CREATION:** Trend data alone does NOT authorize article creation; it must pass through problem-solution validation and commercial verification.
