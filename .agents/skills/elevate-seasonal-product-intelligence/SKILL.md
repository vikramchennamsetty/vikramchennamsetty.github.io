---
name: elevate-seasonal-product-intelligence
description: >-
  Analyzes seasonal relevance timing, seasonal event taxonomies, lead-time preparation windows, 
  geographic markets, and seasonal user needs to guide content planning and product category handoffs—
  without substituting trend or demand evidence or fabricating commercial sales claims.
version: 1.0
triggers:
  - "seasonal products"
  - "Christmas products"
  - "Halloween products"
  - "fall décor products"
  - "summer décor products"
  - "spring décor products"
  - "winter décor products"
  - "holiday shopping ideas"
  - "seasonal home décor"
  - "seasonal Amazon products"
  - "what to publish for a season"
  - "upcoming décor opportunities"
  - "seasonal product research"
  - "seasonal content planning"
scope: seasonal-product-and-timing-intelligence
risk: medium
source:
  type: native-specialized
  version: 1.0
---

# Elevate Seasonal Product Intelligence Skill (V1.0)

## Purpose
Establishes the specialized timing and context intelligence layer for ElevateLivingCo. Determines WHEN and WHY products, decor categories, and editorial topics become seasonally relevant, WHEN content preparation and publishing should occur, and WHEN opportunities pass—strictly grounded in verifiable evidence, preserving geographic market context, and delegating product selection, trend verification, and niche matching to their respective V4.4 skills.

---

## 1. System Architecture & Inter-Skill Pipeline

$$\text{SEASON / EVENT} \longrightarrow \text{USER NEED} \longrightarrow \text{SEASONAL PROBLEM} \longrightarrow \text{SOLUTION CATEGORY} \longrightarrow \text{PRODUCT CATEGORY} \longrightarrow \text{PRODUCT CANDIDATE} \longrightarrow \text{EDITORIAL TIMING}$$

### Separation of Responsibilities & Skill Handoffs:
- **`elevate-seasonal-product-intelligence` (THIS SKILL):** Timing & context intelligence layer determining seasonal relevance, seasonal event taxonomy, lead-time preparation windows, geographic market alignment, and seasonal problem mechanisms.
- **`elevate-trend-demand-intelligence`:** Analyzes macro search trajectory, visual search trends, and demand evidence (decoupled from seasonality).
- **`elevate-problem-product-intelligence`:** Deconstructs user decorating dilemmas, root causes, constraints, and non-product solution mechanisms.
- **`elevate-niche-product-matching`:** Validates product category alignment against Elevate decor style taxonomy, room context, and visual identity.
- **`elevate-product-research-intelligence`:** Evaluates candidate product sets using the 12-step hierarchy and 5-tier classification matrix.
- **`elevate-web-scraping-product-discovery`:** Collects permitted source data and product discovery records from web sources.
- **`elevate-source-integrity` & `elevate-affiliate-compliance`:** Validates commercial identity, ASIN mapping, Associate tags (`elevateliv05f-20`), FTC disclosures, and protected link contracts.

---

## 2. Core Question Evaluation Framework

For any product category, article topic, or seasonal opportunity, the system MUST evaluate the following 10 core questions:

1. **IS THIS SEASONALLY RELEVANT?** (Requires evidence basis; retailer marketing language alone is insufficient).
2. **WHICH SEASON OR EVENT?** (Mapped to the Seasonal Taxonomy).
3. **WHY IS IT RELEVANT?** (Identify underlying functional, environmental, or cultural drivers).
4. **FOR WHICH AUDIENCE?** (Urban renters, homeowners, compact apartment dwellers, host/entertainers).
5. **WHAT USER NEED CHANGES?** (Environmental shift, lighting change, hosting prep, weather condition).
6. **WHAT PRODUCT CATEGORIES BECOME RELEVANT?** (Functional solution categories).
7. **WHEN DOES RELEVANCE BEGIN?** (First observable search/interest emergence).
8. **WHEN IS PEAK RELEVANCE?** (Highest consumer intent and search volume).
9. **WHEN DOES IT DECLINE / PASS?** (Interest drop-off point).
10. **WHAT LEAD TIME IS REQUIRED?** (Preparation and publishing window before peak demand).

> [!WARNING]
> Never assume seasonality merely because a retailer uses seasonal terms (e.g. "Summer Collection" or "Fall Sale"). Seasonal relevance MUST be verified by objective signal evidence.

---

## 3. Seasonal & Event Taxonomy

The skill supports a comprehensive taxonomy across 5 primary seasonal dimensions, plus a custom event protocol:

### A. Four Core Seasons
- **Spring:** Refresh, deep cleaning, natural light, floral/botanical elements, pastel accents, balcony prep.
- **Summer:** Outdoor entertaining, patio/deck living, cooling/airflow, lightweight textiles, heat management.
- **Fall:** Warmth, cozy layering, ambient lighting, deep color tones, dark academia aesthetics, indoor warmth.
- **Winter:** Cold weather insulation, mood lighting, heavy textiles, fireside styling, indoor warmth.

### B. Major Holidays & Cultural Observances
- **Christmas / Winter Holidays:** Festive lighting, guest room prep, holiday entertaining, mantle styling, gifting.
- **Halloween / Spooky Season:** Gothic décor, mood lighting, autumnal accent displays, front porch entryways.
- **Thanksgiving:** Dining table styling, harvest accents, host preparation, seating expansion.
- **Valentine’s Day:** Romantic ambiance, bedroom textiles, candle lighting, intimate seating.
- **Mother’s Day / Father’s Day:** Curated home gifting, specialized relaxation & workspace upgrades.
- **New Year:** Organization, desk & workspace refresh, decluttering systems, minimalist clean slates.

### C. Life Stage & Transitional Events
- **Back-to-School / Move-In:** Student study spaces, compact organization, budget desk lighting.
- **Dorm & Apartment Move-In:** Small-space storage, damage-free wall art, multi-functional furniture, modular layout.
- **Graduation:** Starter apartment essentials, professional workspace setup.
- **Wedding Season:** Registry curation, couples' bedroom/living room upgrades, host gifting.
- **Moving Season (Spring/Summer Peak):** Unpacking organization, spatial planning, core room foundation pieces.

### D. Activity & Weather-Driven Seasons
- **Patio & Outdoor Season:** Weatherproof rugs, solar lighting, outdoor seating, balcony dining.
- **Holiday Entertaining Period:** Extra seating, bar cart organization, servingware storage, powder room refresh.
- **Gifting Periods (Q4 Peak):** Price-tiered gift guides, host gifts, decor lover gift sets.
- **Weather-Driven Events:** Sudden heatwaves, early cold snaps, rainy season entryways.

### E. Custom Seasonal Events & Regional Festivals
- **Protocol:** Allows custom seasonal entries (e.g. *Diwali*, *Monsoon Season*, *Solstice Refresh*, *Spring Festival*).
- **Rule:** Do NOT force non-standard regional or cultural opportunities into a predefined Western holiday container.

---

## 4. Seasonal Signal Classification

Every seasonal evaluation MUST tag its evidence using one or more of these 10 signal types:

| Signal Type | Description & Primary Source |
|---|---|
| `CALENDAR_BASED` | Fixed annual date windows (e.g. October 31, December 25). |
| `WEATHER_BASED` | Regional temperature shifts, daylight changes, rainfall patterns. |
| `CULTURAL` | Societal traditions, holiday hosting norms, social gatherings. |
| `RETAIL` | Authoritative retail calendar shifts (catalogs, floor transitions). |
| `SEARCH` | Historical query interest curves and search volume trends. |
| `TREND` | Social & visual search directional growth curves. |
| `EDITORIAL` | Magazine publishing schedules and editorial issue themes. |
| `HISTORICAL` | Multi-year recurring performance data from Elevate catalogs. |
| `AUDIENCE_BEHAVIOR` | Renter lease transition windows, college move-in dates. |
| `INTERNAL_SITE_DATA` | Historical traffic patterns on ElevateLivingCo existing pages. |

---

## 5. Seasonal State Model

Every seasonal opportunity MUST be assigned an explicit current state based on evidence:

```
  EARLY  ──────►  UPCOMING  ──────►  ACTIVE  ──────►  PEAK
                                                        │
  YEAR_ROUND ◄──────────────────────────────────────────┤
  UNCLEAR    ◄───────────────── DECLINING ◄─────────────┘
                                     │
                                     ▼
                              PASSED / ENDED
```

- **`EARLY`:** Initial search emergence; 60–90 days before peak. Ideal window for outline & draft creation.
- **`UPCOMING`:** Growing search interest; 30–60 days before peak. Recommended publishing & indexing window.
- **`ACTIVE`:** Steady demand surge; 15–30 days before peak. Content should be live, indexed, and promoted.
- **`PEAK`:** Maximum search volume & purchase intent; 0–15 days before/during event. Maximum traffic period.
- **`DECLINING`:** Search volume dropping rapidly; event concluding. Stop new publishing push.
- **`PASSED` / `ENDED`:** Seasonal event concluded. Archive or remove promotional priority.
- **`YEAR_ROUND`:** Topic exhibits consistent demand throughout all 12 months (e.g. small closet organization).
- **`UNCLEAR`:** Insufficient empirical data to verify seasonal timing. Requires verification.

---

## 6. Lead-Time & Preparation Model

Content success on search and Pinterest requires publishing **ahead** of consumer demand curves.

```markdown
### Lead-Time Timeline Framework

1. DISCOVERY_DATE: Date when seasonal opportunity signal is identified.
2. RECOMMENDED_PREPARATION_WINDOW: Lead time required to write, design, & review content (e.g. 6–8 weeks prior to peak).
3. PUBLISHING_WINDOW: Target live date to permit search crawling & Pinterest indexation (e.g. 4–6 weeks prior to peak).
4. PEAK_INTEREST_WINDOW: Horizon of maximum reader traffic (e.g. 0–2 weeks prior to event).
5. DECLINE_WINDOW: Post-event traffic wind-down window.
```

> [!IMPORTANT]
> Never claim an exact "optimal publishing date" (e.g. "Publish on exactly Oct 12 at 3 PM") unless supported by concrete empirical data. Always specify a **`RECOMMENDED_PREPARATION_WINDOW`** and **`PUBLISHING_WINDOW`**.

---

## 7. Problem → Season → Product Integration

Integrates directly with [`elevate-problem-product-intelligence`](file:///d:/A_Elevate_Living_Co/vikramchennamsetty.github.io/.agents/skills/elevate-problem-product-intelligence/SKILL.md).

The **Seasonal Skill** determines **TIMING & ENVIRONMENT SHIFTS**.
The **Problem Skill** determines **USER DILEMMA & SOLUTION MECHANISMS**.

### Integration Example:

```markdown
- SEASON: Fall / Autumn
- ENVIRONMENTAL SHIFT: Shorter daylight hours, dropping temperatures, cooler interior light.
- SEASONAL USER PROBLEM: Room feels visually cold, dim, and uninviting during early evenings.
- NON-PRODUCT SOLUTION: Rearrange seating toward warmth, maximize natural daytime light, declutter window sills.
- SOLUTION MECHANISM: Introduce warm-toned 2700K ambient lighting, textured tactile layering, dark wood tones.
- PRODUCT CATEGORIES: Warm table lamps, amber glass sconces, bouclé throws, velvet cushion covers.
- TIMING (SEASONAL SKILL): State = UPCOMING (Prepare in August, Publish in Early September, Peak in October).
```

---

## 8. Decoupling Seasonality, Trend & Demand

Integrates with [`elevate-trend-demand-intelligence`](file:///d:/A_Elevate_Living_Co/vikramchennamsetty.github.io/.agents/skills/elevate-trend-demand-intelligence/SKILL.md).

| Concept | Definition | Example |
|---|---|---|
| **SEASONALITY** | Calendar or weather-driven recurring relevance. | Fireplace mantle decor spikes every November. |
| **TREND** | Multi-month directional trajectory of visual/aesthetic interest. | Dark Academia decor rising over 24 months. |
| **DEMAND** | Verified active purchasing or high-intent search behavior. | High query volume for "renter safe fireplace heaters". |

### Matrix of Valid Combinations:
- **`SEASONAL + RISING`:** High-priority growth opportunity (e.g. Dark Academia Fall Tablescapes).
- **`SEASONAL + STABLE`:** Reliable recurring annual anchor (e.g. Christmas Tree Storage Bags).
- **`SEASONAL + UNCLEAR`:** Seasonal relevance exists, but trend trajectory is unverified.
- **`YEAR-ROUND + RISING`:** Evergreen category gaining viral/search momentum (e.g. Cordless Rechargeable Lamps).
- **`YEAR-ROUND + STABLE`:** Core evergreen staple (e.g. Under-bed storage bins).

> [!CAUTION]
> Never present seasonal relevance as proof of purchase demand. Seasonal interest in viewing Halloween decor does NOT automatically mean high purchase intent for expensive gothic furniture.

---

## 9. Niche Matching Integration

Integrates with [`elevate-niche-product-matching`](file:///d:/A_Elevate_Living_Co/vikramchennamsetty.github.io/.agents/skills/elevate-niche-product-matching/SKILL.md).

Seasonal product categories MUST pass Elevate niche validation:
- Does the seasonal category fit Elevate’s core audience (urban renters, small-space dwellers, aesthetic-conscious home decorators)?
- Does it fit the specific article’s room, decor style, and visual identity?

*Example:* Inflatable outdoor holiday decorations may be seasonally relevant for Christmas, but fail Elevate’s aesthetic and small-space rental niche matching.

---

## 10. Product Research Handoff Schema

When seasonal timing and problem logic are established, the output handoff record is passed to [`elevate-product-research-intelligence`](file:///d:/A_Elevate_Living_Co/vikramchennamsetty.github.io/.agents/skills/elevate-product-research-intelligence/SKILL.md):

```markdown
### Seasonal Product Research Handoff

- **SEASON_EVENT:** [e.g. Fall / Autumn Refresh]
- **GEOGRAPHY:** [US / GLOBAL / GEOGRAPHY_UNKNOWN]
- **SEASONAL_STATE:** [UPCOMING / ACTIVE / PEAK]
- **SEASONAL_USER_NEED:** [Cozy ambient warmth and tactile layering]
- **SEASONAL_PROBLEM:** [Room feels visually cold as daylight shrinks]
- **SOLUTION_MECHANISM:** [Warm 2700K lighting & heavy tactile textiles]
- **RECOMMENDED_PRODUCT_CATEGORIES:** [Warm accent lamps, bouclé throws, linen curtains]
- **RELEVANCE_WINDOW:** [September 15 – November 30]
- **PREPARATION_WINDOW:** [July 15 – August 31]
- **TREND_CONTEXT:** [SEASONAL + RISING]
- **ELEVATE_NICHE_FIT:** [VERIFIED — Compact urban living & rental safe]
- **VERIFICATION_REQUIRED:** [Stock stability for Q4 retail surge]
```

---

## 11. Regional & Geographic Context Protocol

Seasonal timing differs by geographic market. The system MUST maintain explicit regional tags:

- **`US`:** Default target market for Amazon.com content, Northern Hemisphere seasonal timing.
- **`INDIA`:** Specific festive/monsoon timing (e.g. Diwali, Festival of Lights, Monsoon dampness).
- **`GLOBAL`:** Hemisphere-agnostic or universal year-round relevance.
- **`GEOGRAPHY_UNKNOWN`:** Explicit marker when geographical target is unspecified.

> [!WARNING]
> Do NOT silently substitute market timing (e.g. applying US fall timing to Southern Hemisphere or Indian festive calendars). If geography is unspecified, set `GEOGRAPHY_UNKNOWN` and request clarification.

---

## 12. Weather-Dependent Products & Seasonal Freshness

### A. Weather-Driven Decoupling
Separate **`SEASONAL_EXPECTATION`** (historical climate averages) from **`CURRENT_WEATHER`** (real-time conditions).
Do NOT make real-time weather claims (e.g. "With this week's heatwave...") without verified real-time weather data.

### B. Product Freshness Tracking
Seasonal recommendations degrade if unverified across years. Track:
- **`FIRST_OBSERVED`:** Date seasonal opportunity was logged.
- **`LAST_VERIFIED`:** Date seasonal data was re-evaluated.
- **`SEASONAL_RELEVANCE`:** Verified annual window.
- **`CURRENT_STATUS`:** Set to `STALE` if data has not been verified within 12 months.

---

## 13. Content Repeatability & Refresh Protocol

When a recurring seasonal window approaches, inspect existing Elevate content before creating new articles:

```
                          ┌───────────────────────────┐
                          │ RECURRING SEASONAL WINDOW │
                          └─────────────┬─────────────┘
                                        │
                                        ▼
                          ┌───────────────────────────┐
                          │ CHECK EXISTING COVERAGE   │
                          └─────────────┬─────────────┘
                                        │
                 ┌──────────────────────┼──────────────────────┐
                 ▼                      ▼                      ▼
        [ EXISTING MATCH ]     [ OUTDATED PRODUCTS ]   [ GAP IDENTIFIED ]
                 │                      │                      │
                 ▼                      ▼                      ▼
        ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
        │ NO ACTION NEEDED│    │ REFRESH & UPDATE│    │ CREATE NEW PAGE │
        └─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Action Classifications:
1. **`NEW OPPORTUNITY`:** Uncovered seasonal dilemma or emerging trend. Create new page.
2. **`REFRESH EXISTING`:** Comprehensive existing page. Update intro, lead time, and internal links.
3. **`EXPAND CLUSTER`:** Existing pillar page exists; create supporting cluster post.
4. **`UPDATE PRODUCTS`:** Content is strong, but ASINs/products require freshness verification.
5. **`NO ACTION`:** Current page is live, indexed, fresh, and fully optimized for upcoming peak.

---

## 14. Seasonal Commercial Claims Gate

To preserve trust and legal compliance, the following claims are **STRICTLY PROHIBITED** unless verified by real-time API or authoritative feeds:

1. **NO Invented Sales or Discounts:** Prohibit "Labor Day Sale", "Black Friday Discount", or "Holiday Price Drop" claims without live API verification.
2. **NO Invented Stock Urgency:** Prohibit "Selling out fast for Christmas" or "Limited holiday stock" claims.
3. **NO Invented Shipping Deadlines:** Prohibit "Order by Dec 20 for Christmas delivery" without carrier/retailer API verification.
4. **Rule:** Seasonal relevance does NOT imply a commercial price promotion.

---

## 15. Standardized Output Format

Every Seasonal Product Intelligence evaluation MUST present its findings using this standardized two-part output format:

```markdown
### Seasonal Opportunity

- **EVENT:** [Season / Holiday / Life Event]
- **GEOGRAPHY:** [US / INDIA / GLOBAL / GEOGRAPHY_UNKNOWN]
- **STATE:** [EARLY / UPCOMING / ACTIVE / PEAK / DECLINING / ENDED / YEAR_ROUND / UNCLEAR]
- **USER_NEED:** [Core seasonal shift in reader environment or lifestyle]
- **PROBLEM:** [Deconstructed seasonal decorating or functional dilemma]
- **SOLUTION:** [Non-product & product solution mechanism]
- **PRODUCT_CATEGORIES:** [Functional product category list]
- **TREND_CONTEXT:** [e.g. SEASONAL + RISING]
- **DEMAND_CONTEXT:** [e.g. Verified search volume surge]
- **RELEVANCE_WINDOW:** [Evidence-backed active dates]
- **PREPARATION_WINDOW:** [Recommended lead-time window]
- **EXISTING_ELEVATE_COVERAGE:** [NO_COVERAGE / COVERED_PAGE_URL / NEEDS_UPDATE]
- **CONFIDENCE:** [HIGH / MEDIUM / LOW / UNKNOWN]
- **EVIDENCE:** [Cited signal sources and timestamp]

### Recommended Action

- **ACTION_TYPE:** [NEW CONTENT / REFRESH / EXPAND / PRODUCT UPDATE / NO ACTION / REQUIRES VERIFICATION]
- **RATIONALE:** [Detailed explanation grounding the recommendation in lead-time, problem relevance, and existing site coverage.]
```

---

## 16. Cataloged Failure Patterns & Active Regression Rules

### Cataloged Failure Patterns ([`FAILURE-PATTERNS.md`](file:///d:/A_Elevate_Living_Co/vikramchennamsetty.github.io/.agents/skills/_learning/FAILURE-PATTERNS.md)):
- **`FP-049` (Seasonality Assumption):** Treating a product or category as seasonal without an evidence basis.
- **`FP-050` (Calendar-Only Timing):** Assuming fixed calendar dates without verifying actual demand lead-time emergence.
- **`FP-051` (Seasonal Demand Conflation):** Conflating seasonal browsing interest with active purchase intent.
- **`FP-052` (Geographic Seasonality Mismatch):** Applying one geographic market's seasonal timing to another market.
- **`FP-053` (Stale Seasonal Recommendation):** Reusing outdated seasonal product data without annual freshness verification.
- **`FP-054` (Seasonal Sale Fabrication):** Inventing seasonal discounts, price drops, stock urgency, or shipping deadlines.

### Active Regression Rules ([`REGRESSION-RULES.md`](file:///d:/A_Elevate_Living_Co/vikramchennamsetty.github.io/.agents/skills/_learning/REGRESSION-RULES.md)):
- **`RULE-046` (Seasonal Evidence Gate):** Seasonal classification requires an explainable evidence basis.
- **`RULE-047` (Seasonal State Gate):** Every seasonal opportunity MUST have an explicit current state assigned.
- **`RULE-048` (Lead-Time Gate):** Seasonal planning MUST distinguish preparation, publishing, and peak interest windows.
- **`RULE-049` (Geography Gate):** Seasonal conclusions MUST preserve geographic market context (`US`, `INDIA`, `GLOBAL`, `GEOGRAPHY_UNKNOWN`).
- **`RULE-050` (Seasonal vs Demand Separation Gate):** Seasonal relevance MUST NOT be presented as proof of purchase demand.
- **`RULE-051` (Seasonal Freshness Gate):** Time-sensitive seasonal product claims require verification within 12 months.
- **`RULE-052` (Seasonal Commercial Claim Gate):** Prohibit unsupported pricing, sale, stock urgency, or shipping deadline claims.
