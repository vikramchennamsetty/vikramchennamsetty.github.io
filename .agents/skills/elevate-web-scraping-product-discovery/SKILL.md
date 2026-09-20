---
name: elevate-web-scraping-product-discovery
description: >-
  Automated discovery, HTTP/browser extraction, normalization, provenance recording, and duplicate 
  consolidation of product candidates across permitted web sources for ElevateLivingCo guides—without 
  bypassing access controls or overriding product evaluation intelligence.
version: 1.0
triggers:
  - "scrape products"
  - "find products from websites"
  - "research product candidates"
  - "collect product data"
  - "discover Amazon products"
  - "discover décor products"
  - "scrape retailer pages"
  - "find trending products"
  - "collect seasonal products"
  - "build a product candidate list"
  - "replace stale products"
  - "crawl product categories"
  - "compare products from multiple sources"
scope: web-scraping-and-product-discovery
risk: medium
source:
  type: native-specialized
  version: 1.0
---

# Elevate Web Scraping & Product Discovery Skill (V1.0)

## Purpose
Establishes the discovery and extraction pipeline for identifying candidate decor products, market trend signals, seasonal data, and supplier specifications across permitted web sources. Provides structured normalization and field-level provenance tracking—strictly separating candidate data collection from product selection decisions (owned by `elevate-product-research-intelligence`).

---

## 1. System Architecture & Workflow Pipeline

$$\text{WEB DISCOVERY} \longrightarrow \text{DATA EXTRACTION} \longrightarrow \text{NORMALIZATION} \longrightarrow \text{PROVENANCE RECORD} \longrightarrow \text{PRODUCT RESEARCH INTELLIGENCE} \longrightarrow \text{VALIDATION} \longrightarrow \text{SELECTION}$$

### Separation of Responsibilities:
- **`elevate-web-scraping-product-discovery` (THIS SKILL):** Discovers, extracts, normalizes, and records provenance for candidate product records across permitted web sources.
- **`elevate-product-research-intelligence`:** Evaluates candidate records using the 12-step contextual hierarchy, problem-solving fit, and 5-tier classification matrix.
- **`elevate-source-integrity` & `elevate-affiliate-compliance`:** Validates commercial identity, ASIN mapping, Associate tags (`elevateliv05f-20`), FTC compliance, and protected link contracts.

---

## 2. 10 Permitted Discovery Sources

Source selection depends strictly on the research objective. Never assume a single source fits every discovery task:

1. **Search Engines:** Publicly accessible search engine results for decorating styles, room solutions, and product queries.
2. **Public Retailer & Category Pages:** Permitted catalog structures, category listings, and product landing pages.
3. **Public Product Pages:** Permitted individual product detail pages for specification and visual extraction.
4. **Public Trend Sources:** Visual search interest, design publication trend lists, and public decor trend roundups.
5. **Public Editorial & Design Sources:** Interior design blogs, trade publications, architectural reviews, and styling guides.
6. **Public Seasonal & Category Sources:** Seasonal decor showcases, holiday buyer guides, and spring/fall refresh lists.
7. **Existing Elevate Product Catalog:** Internal catalog records (`AMAZON_PRODUCT_CATALOG.csv`) and existing production articles.
8. **Approved APIs:** Official data APIs with authorized credentials.
9. **Approved Marketplace Data Feeds:** Authorized affiliate program data feeds and partner APIs (e.g. Amazon PA-API / Creators API).
10. **User-Provided URLs / Data:** Direct URLs or product specification lists provided by the user.

---

## 3. Strict Amazon Access Rules

> [!CAUTION]
> **ABSOLUTE PROHIBITION ON AMAZON ACCESS-CONTROL BYPASS:**
> - NEVER build or execute scrapers designed to bypass Amazon CAPTCHAs, bot detection, or access controls.
> - NEVER harvest protected customer reviews, private customer data, or imitate API access.
> - NEVER collect or reproduce Amazon product data outside officially permitted program mechanisms.

### Amazon Data Collection Protocol:
- **Approved Program Mechanisms:** Use authorized Amazon Associate tools, Creators API, PA-API, or approved data feeds for commercial product attributes.
- **Missing Data Handling:** If official Amazon PA-API data is unavailable for a candidate field, set the field state to `UNVERIFIED`. **Never fabricate Amazon pricing, ratings, availability, or reviews.**

---

## 4. Scraping Technology Selection Ladder

Collection MUST follow the lightweight-first technology ladder. Do not launch heavy browser automation when lightweight HTTP requests are sufficient:

```
                  [DISCOVERY TASK]
                         │
        ┌────────────────┴────────────────┐
   Static Page?                     Dynamic JS / SPA?
        │                                 │
 Lightweight HTTP                 Playwright / Automation
 (requests / httpx)               (Headless Chromium)
        │                                 │
 BeautifulSoup Parser              DOM Selector / Parser
```

### Technology Matrix:
| Task Profile | Preferred Tooling | Selection Rationale |
|---|---|---|
| **Small Targeted Extraction** | `requests` / `httpx` + `BeautifulSoup` | Fast, lightweight, minimal resource footprint. |
| **Dynamic JS / Single-Page App** | `Playwright` (Python/Node) | Handles client-rendered DOM when legitimately permitted. |
| **Large-Scale Crawl** | `Crawlee` / `Apify` | Built-in queue management, rate limiting, and deduplication. |
| **Local CSV / Feed Parsing** | Python `csv` / `pandas` | Instant processing of approved catalog feeds. |

---

## 5. Permission, Robots.txt & Access Control Protocol

Before initiating automated collection from any web domain, execute the **5-Step Permission Audit**:

1. **Permission Check:** Verify that automated collection is permitted for the target domain.
2. **`robots.txt` Audit:** Check domain `robots.txt` rules for path restrictions and crawl-delay directives.
3. **Terms of Service Review:** Respect site terms of service and access policies.
4. **Rate Limit Enforcement:** Apply conservative delay intervals between HTTP requests (minimum 1.0s–2.0s per request).
5. **Graceful Termination:** Stop collection immediately if HTTP `403 Forbidden`, `429 Too Many Requests`, or CAPTCHA challenges are encountered.

### Access Status Flagging:
If automated permission is unclear or ambiguous:
$$\text{SOURCE\_ACCESS\_STATUS} = \text{UNCLEAR}$$
*Do NOT proceed with aggressive crawling when status is UNCLEAR.*

---

## 6. Standardized Product Candidate Schema (`PRODUCT_CANDIDATE`)

Extract candidate product data into this normalized, structured candidate record:

```markdown
### Product Candidate Record

- **candidate_id:** [UUID or hash]
- **name:** [Extracted product name]
- **brand:** [Brand name or UNKNOWN]
- **product_url:** [Normalized source URL]
- **source_domain:** [Domain name, e.g. target.com]
- **source_type:** [RETAILER_PAGE / SEARCH_ENGINE / API / USER_URL]
- **identifier:** [SKU, MPN, or UNKNOWN]
- **asin:** [Legitimately obtained ASIN or UNVERIFIED]
- **category:** [Primary category]
- **subcategory:** [Subcategory]
- **article_topic_relevance:** [Raw topical context]
- **problem_solved:** [Decor dilemma addressed]
- **style_niche:** [Aesthetic classification]
- **material:** [Extracted material or UNKNOWN]
- **dimensions:** [Physical dimensions or UNKNOWN]
- **color:** [Color / finish]
- **image_url:** [Extracted image asset URL]
- **image_provenance:** [Class A / B / C / UNKNOWN]
- **price:** [Raw value or PRICE_UNVERIFIED]
- **currency:** [USD / EUR / etc.]
- **availability:** [AVAILABILITY_VERIFIED_AT: YYYY-MM-DD / AVAILABILITY_UNVERIFIED]
- **rating:** [Raw rating or UNVERIFIED]
- **review_count:** [Raw review count or UNVERIFIED]
- **trend_signal:** [Extracted trend context or NONE]
- **demand_signal:** [Extracted demand indicator or NONE]
- **seasonal_signal:** [SEASON: Fall/Winter / RELEVANCE: Cozy lighting]
- **seller:** [Extracted merchant or UNKNOWN]
- **source_timestamp:** [ISO 8601 string]
- **extraction_timestamp:** [ISO 8601 string]
- **verification_status:** [EXTRACTED_UNVERIFIED]
- **notes:** [Extraction notes / warnings]
```

*Rule: Never fill missing values with guesses. Use `UNKNOWN` or `UNVERIFIED` as appropriate.*

---

## 7. Field-Level Provenance Model

Extraction success does NOT equal truth verification. Every extracted field MUST record its source and timestamp:

```markdown
PRICE: PRICE_UNVERIFIED
PRICE_SOURCE: retailer product page
PRICE_CHECKED: 2026-09-20T09:22:25Z

TREND_SIGNAL: VERIFIED_SOURCE
TREND_SOURCE: Architectural Digest 2026 Decor Survey
TREND_CHECKED: 2026-09-20T09:22:25Z

ASIN: B0F2HVG2WH
ASIN_SOURCE: Approved Amazon PA-API Feed
ASIN_CHECKED: 2026-09-20T09:22:25Z
```

---

## 8. Data Normalization & Duplicate Consolidation

### Normalization Rules:
- **URLs:** Strip tracking parameters (`utm_*`, `ref=`, `gclid`), normalize scheme to `https://`, lowercase domain.
- **Product Names:** Remove promotional fluff ("HOT SALE!", "BEST SELLER 2026"), normalize whitespace and quotes.
- **Currencies & Prices:** Standardize currency symbols (`$ USD`), extract raw float values where available.

### Duplicate Consolidation Protocol:
When the same physical product is discovered across multiple URLs or search results:

$$\text{URL A (Retailer)} + \text{URL B (Search)} + \text{URL C (Review)} \Longrightarrow \text{SINGLE CANDIDATE RECORD}$$

Consolidate into a single candidate record retaining an array of all discovered source URLs in `source_references`. Do NOT create fragmented duplicate candidates.

---

## 9. Product Identity & ASIN Non-Inference

- **Exact Identifier Preservation:** Preserve SKUs, MPNs, and ASINs only when extracted from authoritative, explicit source attributes.
- **Prohibition on Guessing ASINs:** ASINs MUST NOT be guessed or inferred from title similarity, image similarity, search engine rankings, or non-authoritative URL fragments.
- **Unverified Identity Handling:** If identifier cannot be authoritatively confirmed:
  $$\text{ASIN} = \text{IDENTITY\_UNVERIFIED}$$

---

## 10. Image Handling & Copyright Ethics

- **Usage Rights Tracking:** Record source URL, image URL, source domain, and usage license status for all discovered images.
- **No Automatic Repo Copying:** Never download or commit third-party images into the Elevate repository without verified usage rights (Asset Provenance Classes A–F).
- **Public $\neq$ Licensed Rule:** Publicly accessible web images are NOT automatically licensed for commercial website reuse.

---

## 11. Trend, Demand & Seasonal Discovery Rules

- **Discovered Signal $\neq$ Proven Demand:** Record raw trend mentions and source timestamps without fabricating hype.
- **Prohibited Claims:** Never output synthetic claims like *"best-selling"*, *"viral"*, *"trending #1"*, or *"most popular"* unless the authoritative source explicitly contains that exact verifiable claim.
- **Seasonal Schema:** Record seasonal data using:
  ```markdown
  SEASON: [Fall / Winter / Spring Refresh / Holiday]
  RELEVANCE: [Cozy ambient lighting for dark evenings]
  EVIDENCE: [Extracted from retailer seasonal showcase]
  ```

---

## 12. Rate Limiting & Crawl Safety Limits

All automated discovery tasks MUST enforce strict default safety boundaries:

### Default Safety Limits:
- **Max Crawl Scope:** max 3 domains per discovery session
- **Max Page Limit:** max 20 pages per discovery request
- **Request Delay:** min 1s delay between consecutive requests
- **Timeout Bound:** max 10s timeout per HTTP request
- **Retry Bounds:** max 2 retries per failed URL
- **Duplicate URL Prevention:** Maintain a `visited_urls` set during crawl

### Override Protocol:
Crawl limits may be overridden **ONLY** when explicitly justified by the specific task requirements, verified source permissions, and available resource budget. **Never bypass `robots.txt`, site terms of service, rate limits, or technical access controls under any override scenario.**


---

## 13. Explicit Failure Classification

Distinguish technical extraction failures from candidate rejection:

| Failure Type | Handling Protocol |
|---|---|
| **HTTP 403 / Access Denied** | Halt domain crawl; mark `SOURCE_ACCESS_STATUS: ACCESS_DENIED`. Do not retry. |
| **HTTP 429 / Rate Limited** | Halt crawl; log rate limit event; wait or terminate session. |
| **Robots.txt Restricted** | Skip URL; log `ROBOTS_DISALLOWED`. |
| **Parser / Selector Failure** | Record `PARSER_FAILURE` in candidate notes; set missing fields to `UNKNOWN`. |
| **Stale / Missing Data** | Mark affected signal fields as `UNVERIFIED`. |

*Never convert an extraction failure into synthetic fallback data.*

---

## 14. Integration Matrix with Existing Skills

- `elevate-product-research-intelligence`: Receives normalized `PRODUCT_CANDIDATE` records for contextual evaluation and 5-tier classification.
- `elevate-source-integrity`: Validates physical product identity, ASIN mapping, and 9-field identity parity before production.
- `elevate-affiliate-compliance`: Verifies commercial links, Associate tags (`elevateliv05f-20`), and FTC compliance attributes.
- `elevate-regression-prevention`: Incorporates failure patterns FP-025 to FP-030 and rules RULE-020 to RULE-026.
- `elevate-skill-evolution`: Records extraction failure lessons and rate-limiting rules.
