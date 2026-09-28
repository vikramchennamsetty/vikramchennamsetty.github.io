# ElevateLivingCo Pinterest Performance Data Model Schema (V1.0)

This document defines the authoritative data schema and metadata attributes required for tracking, normalizing, and analyzing Pinterest Pin performance across all ElevateLivingCo visual campaigns.

---

## 1. Schema Definitions & Field Specifications

### Campaign & Asset Identification
| Field | Data Type | Requirement | Example | Description |
| :--- | :--- | :--- | :--- | :--- |
| `PIN_ID` | String | **Required** | `DAC-001` | Unique permanent identifier assigned to every Pin asset. |
| `CAMPAIGN` | String | **Required** | `Dark Academia Essentials` | Parent campaign or topical cluster name. |
| `ARTICLE` | String | **Required** | `10 Dark Academia Essentials` | Title of destination content article. |
| `PRIMARY_KEYWORD` | String | **Required** | `dark academia decor` | Primary search keyword targeted by the Pin. |
| `SECONDARY_KEYWORDS` | String List | Optional | `moody room decor, vintage desk setup` | Secondary search keywords targeted. |
| `BOARD` | String | **Required** | `Dark Academia Decor` | Target Pinterest Board name. |
| `PUBLISH_DATE` | Date (YYYY-MM-DD) | **Required** | `2026-09-29` | Date scheduled or published on Pinterest. |
| `DESTINATION_URL` | URI | **Required** | `https://elevatelivingco.me/10-dark-academia-essentials.html?utm_source=pinterest&utm_medium=organic_social&utm_campaign=dark_academia&utm_content=DAC-001` | Canonical destination link with UTM tags. |

### Creative & Content Metadata
| Field | Data Type | Requirement | Allowed Values / Examples | Description |
| :--- | :--- | :--- | :--- | :--- |
| `PIN_FORMAT` | Enum | **Required** | `Static Image (1000x1500)`, `Video Pin`, `Carousel` | Technical asset format. |
| `VISUAL_CONCEPT` | Enum | **Required** | `Hero Room`, `Lighting Nook`, `Bookshelf Vignette`, `Desk Detail`, `Small Apartment Nook` | Aesthetic visual composition archetype. |
| `STYLE` | Enum | **Required** | `Dark Academia`, `Neo Deco`, `Modern Minimalist`, `Warm Vintage` | Interior design style sub-genre. |
| `ROOM_TYPE` | Enum | **Required** | `Library Study`, `Living Room Corner`, `Compact Workspace`, `Reading Nook` | Architectural space depicted. |
| `HEADLINE_FORMAT` | Enum | **Required** | `Category Title`, `Rule Set`, `Checklist`, `Formula`, `Space-Specific Guide` | Headline typographic formula. |
| `VALUE_FORMAT` | Enum | **Required** | `Quick List (5-Item)`, `4-Point Rule Set`, `Checklist (4-Point)`, `4-Step Formula`, `Small-Space Guide (4-Point)` | Information architecture structure. |
| `SEARCH_INTENT` | Enum | **Required** | `Inspiration`, `Informational`, `Shopping`, `Problem-Solving` | Target user search intent. |

---

## 2. Platform Telemetry Metrics (Raw Counts)

| Metric | Source | Value Type | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `IMPRESSIONS` | Pinterest Analytics | Integer $\ge 0$ | `N/A` | Total number of times the Pin appeared on screen. |
| `PIN_CLICKS` | Pinterest Analytics | Integer $\ge 0$ | `N/A` | Total clicks to expand or close-up the Pin. |
| `OUTBOUND_CLICKS` | Pinterest Analytics | Integer $\ge 0$ | `N/A` | Clicks redirecting user to destination URL. |
| `SAVES` | Pinterest Analytics | Integer $\ge 0$ | `N/A` | Total times users saved the Pin to a board. |
| `ENGAGEMENTS` | Pinterest Analytics | Integer $\ge 0$ | `N/A` | Total interactions (Saves + Clicks + Outbound Clicks). |

### Optional / Extended Platform Metrics
| Metric | Value Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `VIDEO_VIEWS` | Integer $\ge 0$ | `N/A` | Total views $\ge 3$ seconds (Video Pins only). |
| `COMMENTS` | Integer $\ge 0$ | `N/A` | User comments posted on Pin. |
| `FOLLOWS` | Integer $\ge 0$ | `N/A` | Profile follows driven directly from Pin. |
| `PROFILE_VISITS` | Integer $\ge 0$ | `N/A` | Visits to ElevateLivingCo profile from Pin. |

---

## 3. Derived Rate KPIs (Calculated Fields)

> [!IMPORTANT]
> Calculated rate metrics MUST be computed using raw platform counts. Never estimate or guess missing rates.

1. **`SAVE_RATE`**:
   $$\text{SAVE\_RATE} = \left(\frac{\text{SAVES}}{\text{IMPRESSIONS}}\right) \times 100$$
   - Measures aesthetic saveability and aspirational value.

2. **`OUTBOUND_CLICK_RATE` (CTR)**:
   $$\text{OUTBOUND\_CLICK\_RATE} = \left(\frac{\text{OUTBOUND\_CLICKS}}{\text{IMPRESSIONS}}\right) \times 100$$
   - Measures headline conversion strength and curiosity gap effectiveness.

3. **`ENGAGEMENT_RATE`**:
   $$\text{ENGAGEMENT\_RATE} = \left(\frac{\text{ENGAGEMENTS}}{\text{IMPRESSIONS}}\right) \times 100$$
   - Measures overall platform engagement per impression.

---

## 4. Null & Missing Data Standard

- **Initial State:** Before platform telemetry is collected (e.g. at Pin publish date), all performance count and rate fields MUST be populated as `N/A`.
- **Zero Values:** Explicit `0` values may ONLY be recorded when Pinterest Analytics explicitly reports 0 impressions, 0 clicks, or 0 saves after indexation.
- **Data Integrity:** Never populate fabricated numbers or placeholder metrics.
