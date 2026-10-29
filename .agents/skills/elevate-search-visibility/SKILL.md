---
name: elevate-search-visibility
description: >-
  Provides SEO, GEO (Generative Engine Optimization), AEO (Answer Engine Optimization),
  and Post-Publication Search Console discovery/indexing governance for Elevate.
version: 4.7
source: external-capability-normalized
source_repository: https://github.com/SNLabat/SEO-GEO-AEO-Skill
source_path: SKILL.md
source_license: MIT
integration_status: NORMALIZED_INTO_ELEVATE_ARCHITECTURE
triggers:
  - "SEO audit"
  - "SEO analysis"
  - "technical SEO"
  - "GEO"
  - "AI search visibility"
  - "ChatGPT search visibility"
  - "AI citation readiness"
  - "AEO"
  - "featured snippet optimization"
  - "answer engine optimization"
  - "search visibility audit"
  - "schema audit"
  - "search intent audit"
  - "Search Console inspection"
  - "post publish SEO"
  - "indexing verification"
scope: search-visibility-audit-and-intelligence
risk: low
---

# Elevate Search Visibility Skill (V4.7 — SEO / GEO / AEO & Post-Publication Governance)

## 1. PURPOSE
Establishes a normalized audit, intelligence, and post-publication governance layer for **Search Engine Optimization (SEO)**, **Generative Engine Optimization (GEO)** (for AI search platforms like Perplexity, ChatGPT Search, and Gemini), **Answer Engine Optimization (AEO)** (for Google Featured Snippets and voice answers), and **Google Search Console Indexing Governance**.

> [!IMPORTANT]
> **ARCHITECTURE BOUNDARY:**
> - `elevate-google-search-quality` is the **authoritative standards and editorial quality framework** synthesized directly from official Google Search Central documentation (`https://developers.google.com/search/docs`).
> - `elevate-seo-performance` is the **authoritative execution and performance controller** (modifies HTML meta, title tags, canonicals, and site speed).
> - `elevate-search-visibility` is the **audit, intent, entity, post-publication indexing, and search-visibility intelligence layer** (evaluates search readiness, manages GSC post-publish lifecycles, plans schema, and audits GEO citation readiness).

---

## 2. POST-PUBLICATION SEARCH VISIBILITY LIFECYCLE

All published content must transition through the 10 canonical stages of the `SEARCH_VISIBILITY_LIFECYCLE`:

### 10 Canonical Lifecycle Stages
1. `PRE_PUBLISH_AUDIT`: Technical HTML, metadata, schema, and accessibility readiness check.
2. `PRODUCTION_RELEASE`: Commit, push, and deployment to production hosting (`origin/main`).
3. `LIVE_TECHNICAL_VERIFICATION`: Real HTTP 200 verification, responsive rendering, and Lighthouse validation.
4. `SEARCH_CONSOLE_DISCOVERY`: Verifying sitemap declaration and initial GSC discovery signals.
5. `URL_INSPECTION`: Fetching live URL inspection data via Google Search Console.
6. `INDEXING_REQUEST`: Executing explicit indexing request via GSC when technically eligible.
7. `INDEXING_OBSERVATION`: Longitudinal tracking of Google indexing status (Indexed vs Excluded/Crawled).
8. `SEARCH_APPEARANCE_OBSERVATION`: Auditing SERP title, snippet, and rich result rendering.
9. `PERFORMANCE_QUERY_OBSERVATION`: Tracking empirical impressions, clicks, CTR, and average position.
10. `REASSESSMENT`: Evaluating search performance trends to signal content freshness updates.

### Strict Visibility Layer Separation
Antigravity MUST explicitly distinguish these 5 independent concepts and NEVER treat one as proof of another:
- `TECHNICAL_ELIGIBILITY`: Valid HTML, indexable robots, self-referencing canonical, sitemap presence, 0 blocking errors.
- `GOOGLE_DISCOVERY`: Google crawler awareness of the URL via sitemap or internal links.
- `GOOGLE_INDEXING`: Confirmation that Google has added the document to its searchable index.
- `SEARCH_APPEARANCE`: How the URL renders in SERPs (rich snippets, titles, metadata).
- `SEARCH_PERFORMANCE`: Empirical user engagement data (impressions, clicks, CTR, position).

---

## 3. CANONICAL EVIDENCE STATES & GSC DATA SCHEMA

### Canonical Evidence States
- `VERIFIED`: Confirmed via static inspection or DOM parsing.
- `SUPPORTED`: Backed by explicit structural evidence.
- `PARTIAL`: Incompletely implemented.
- `MISSING`: Confirmed absent after complete DOM inspection.
- `UNVERIFIED`: Observed without authoritative verification.
- `UNKNOWN`: Insufficient evidence to evaluate.
- `STALE`: Outdated evidence requiring re-audit.
- `CONFLICTED`: Contradictory metadata or schema definitions.
- `NOT_APPLICABLE`: Dimension not relevant to content type.

### Search Console Evidence States
All Google Search Console observations MUST use one of these explicit GSC states:
- `GSC_NOT_CHECKED`
- `GSC_LIVE_TEST_PENDING`
- `GSC_LIVE_TEST_PASS`
- `GSC_LIVE_TEST_BLOCKED`
- `GSC_INDEXING_REQUESTED`
- `GSC_INDEXED`
- `GSC_NOT_INDEXED`
- `GSC_EXCLUDED`
- `GSC_CRAWLED_NOT_INDEXED`
- `GSC_DISCOVERED_NOT_INDEXED`
- `GSC_CANONICAL_CONFLICT`
- `GSC_CRAWL_ERROR`
- `GSC_UNKNOWN`

> [!CAUTION]
> **UNKNOWN PRESERVATION RULE:** Never convert `GSC_UNKNOWN` or `UNKNOWN` into `PASS` or `GSC_INDEXED` without empirical evidence from Search Console.

### GSC Evidence Data Schema
Every Search Console observation record MUST maintain the following field structure:
```json
{
  "inspection_timestamp": "ISO-8601 UTC timestamp",
  "inspected_url": "https://elevatelivingco.me/article-slug.html",
  "declared_canonical": "https://elevatelivingco.me/article-slug.html",
  "google_selected_canonical": "https://elevatelivingco.me/article-slug.html | UNKNOWN",
  "crawl_allowed": "Yes | No",
  "page_fetch": "Successful | Blocked | Failed",
  "indexing_allowed": "Yes | No",
  "last_crawl": "Timestamp | Never",
  "referring_sitemap": "https://elevatelivingco.me/sitemap.xml | None",
  "referring_page": "URL | None",
  "indexing_status": "GSC_INDEXED | GSC_CRAWLED_NOT_INDEXED | ...",
  "reason_text": "Detailed status explanation from Google",
  "request_indexing_timestamp": "Timestamp | Null",
  "observation_timestamp": "Timestamp"
}
```

---

## 4. POST-PUBLISH CHECKLIST & GOVERNANCE RULES

### Mandatory Article Publishing & Site Discovery Protocol (Checks A–I)
For EVERY future article publication workflow, execution MUST sequentially perform and verify these 9 post-publication steps:

1. **A. CREATE ARTICLE:** Build and verify the production `.html` article file according to design, affiliate, and technical QA standards.
2. **B. INTERNAL LINKING:** Establish a two-way topical cluster link network by adding inbound internal links from relevant existing articles and outbound links from the new article.
3. **C. HOMEPAGE DISCOVERY:** Inspect `index.html`. Check whether the new article is linked from the homepage editorial grid/listing. If missing, add it using the existing site component pattern without creating duplicate cards or altering existing homepage layouts.
4. **D. SITEMAP:** Inspect the production `sitemap.xml` file. If missing, add the exact `<loc>`, `<lastmod>`, `<priority>`, and `<image:image>` metadata under the appropriate cluster header. If using auto-generated sitemaps, verify front matter configuration. Never duplicate sitemap entries.
5. **E. FEED:** Verify inclusion in RSS/Atom feeds if the site uses active feed feeds.
6. **F. CANONICAL:** Verify that `<link rel="canonical">` points to the exact production URL (`https://elevatelivingco.me/[slug].html`).
7. **G. LIVE URL:** After GitHub push, perform HTTP request verification to confirm the production URL returns status code `200 OK` and renders properly.
8. **H. DISCOVERY AUDIT REPORTING:** Output an explicit audit summary table in the final publication report:
   - **Homepage:** `PRESENT` / `ADDED` / `NOT APPLICABLE`
   - **Sitemap:** `PRESENT` / `ADDED` / `AUTO-GENERATED` / `NOT APPLICABLE`
   - **Feed:** `PRESENT` / `ADDED` / `NOT APPLICABLE`
   - **Internal links:** `PASS` / `FAIL`
   - **Canonical:** `PASS` / `FAIL`
   - **Live URL:** `PASS` / `FAIL`
9. **I. GIT SAFETY:** Never execute `git add .` blindly. Stage ONLY intended production website files (e.g. `[article].html`, `index.html`, `sitemap.xml`). Do NOT commit `.agents` tooling, manifests, experiments, or generated temporary assets.

### Post-Publish Checklist
For every newly published article:

#### A. Production Verification
- [ ] HTTP Status Code = 200.
- [ ] Canonical URL is self-referencing and correct.
- [ ] Meta robots set to `index, follow`.
- [ ] `sitemap.xml` contains the article URL.
- [ ] Homepage `index.html` links to the article.
- [ ] Internal links to the article exist in related content.
- [ ] JSON-LD schema is valid (`Article`, `BreadcrumbList`, `FAQPage`).
- [ ] Responsive mobile rendering verified across 375px/390px/768px/1440px viewports.
- [ ] Lighthouse score target met (Performance $\ge 90$, Accessibility = 100, SEO = 100).

#### B. Search Console Inspection
- [ ] Run GSC URL Inspection on the live production URL.
- [ ] Execute "Test Live URL".
- [ ] Verify Crawl allowed = `Yes`.
- [ ] Verify Page fetch = `Successful`.
- [ ] Verify Indexing allowed = `Yes`.
- [ ] Verify Google-selected canonical matches declared canonical.
- [ ] Verify referring sitemap matches `sitemap.xml`.
- [ ] Submit explicit "Request Indexing" if technically eligible.

#### C. Observation & Tracking
- [ ] Record `request_indexing_timestamp`.
- [ ] Schedule re-observation check.
- [ ] Categorize index status: `GSC_INDEXED`, `GSC_CRAWLED_NOT_INDEXED`, `GSC_DISCOVERED_NOT_INDEXED`, `GSC_CANONICAL_CONFLICT`, or `GSC_CRAWL_ERROR`.

### Google Search Console Governance Rules
1. **Request Indexing $\neq$ Guaranteed Indexing:** Submitting an indexing request asks Google to queue the URL for crawling; it does not guarantee immediate indexation. Submitting repeated indexing requests does NOT make Google recrawl faster or increase priority (`https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl`).
2. **Sitemap Submission $\neq$ Guaranteed Indexing:** Adding a URL to `sitemap.xml` signals discovery intent; indexing remains at Google's algorithmic discretion.
3. **Live Test Pass $\neq$ Indexed:** Passing the GSC "Test Live URL" verifies technical eligibility today; it is NOT proof that the URL is already in Google's index.
4. **Indexed View vs. Live Test View:** Search Console's index data reflects Google's cached index database, which may lag behind recent live page updates. Live Test evaluates real-time crawlability on the live server. These two views must never be conflated.
5. **Google-Selected Canonical Monitoring:** The declared canonical tag in HTML must be compared against `google_selected_canonical` in GSC reports to catch algorithmic canonical overrides.
6. **Indexing API Scope Restriction:** Google's Indexing API is strictly restricted to JobPosting and BroadcastEvent structured data. Standard editorial pages must use GSC URL Inspection.
7. **Timestamp Integrity:** All GSC observations and requests must be explicitly timestamped.

---

## 5. SITEMAP GOVERNANCE

After publishing or updating any article:
1. **Sitemap Inclusion:** Verify exact HTTPS URL exists in `sitemap.xml` with appropriate `<lastmod>`.
2. **Public Accessibility:** Confirm `https://elevatelivingco.me/sitemap.xml` returns HTTP 200.
3. **Robots Reference:** Confirm `robots.txt` contains `Sitemap: https://elevatelivingco.me/sitemap.xml`.
4. **Canonical Parity:** Assert canonical URL in HTML matches sitemap `<loc>` URL character-for-character.
5. **GSC Sitemap Submission:** Submit `sitemap.xml` in GSC Sitemaps report if not already registered.
6. **Sitemaps Report Audit:** Monitor GSC Sitemaps report for read status, submitted URL counts, and errors.
7. **Resubmission Control:** Do NOT repeatedly resubmit sitemaps without meaningful sitemap content changes.

---

## 6. SEARCH PERFORMANCE OBSERVATION & GSC TELEMETRY PROTOCOL

During the `PERFORMANCE_QUERY_OBSERVATION` stage, track and document empirical performance data adhering to official Google Search Console accounting principles:

### 1. Mandatory Audit Parameters
Every analysis must explicitly document:
* **Property:** URL-prefix (`https://elevatelivingco.me/`) or Domain property.
* **Search Type:** Web, Image, Video, or Google News (evaluated separately; never conflated).
* **Date Range:** Exact start and end dates (e.g. 28-day, 90-day, or comparative periods).
* **Applied Filters:** Specific Page, Query, Country, Device, or Search Appearance filters.
* **Grouping Dimension:** Grouped by Page, Query, Country, Device, Date, or Search Appearance.

### 2. GSC Accounting Principles & Export Guardrails (Official Google Support)
* **Property vs. Page Aggregation:** In property aggregation, multiple pages appearing in one SERP count as one impression with the topmost position. In page aggregation, each page logs its own impression and position. Never sum page-level impressions to calculate property totals. In small exports, page and property totals may happen to match if no query showed multiple site URLs; never assume page and property totals must match architecturally.
* **Unreported Queries (Privacy + Row Limits):** The gap between total page impressions and visible query-row sums represents **unreported queries** (a composite of privacy-threshold filtering and interface table row limits). Do NOT attribute 100% of this gap solely to anonymization, and do NOT infer zero reader search demand from missing query rows.
* **Row Truncation:** Interface tables truncate at 1,000 rows (API at 25,000–50,000).
* **Data Freshness:** Standard data carries a 2–3 day reporting lag. Preliminary fresh data may adjust upon batch finalization.
* **Average Position is NOT a Fixed Rank:** Average position is a mathematical mean across all recorded impressions, fluctuating by geography, device, personalization, and SERP layout.
* **Short Windows as Early Signals:** Early observation windows (such as a 10-day export) capture initial crawl discovery, not mature performance trends or proof of established success/failure.
* **Low-Impression Clicks:** Low-impression clicks (e.g. 1 click from 10 impressions) are isolated, encouraging observations, but unstable metrics that must not trigger major structural page rewrites.
* **Generative AI Reporting:** Google Search Console provides a dedicated report/view for generative AI search features, while this data is also included in overall Search Console performance reporting (announced at `https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports`; documented at `https://support.google.com/webmasters/answer/16984139`). Segment this dedicated view for analysis (internal recommendation). Do not treat generative AI impressions as proof of editorial authority or speculate about underlying retrieval experiments.

> [!IMPORTANT]
> **ANALYTICS INTERPRETATION RULES:**
> - Low clicks do NOT automatically mean poor content quality (e.g. low search volume niche or zero-click AEO answers).
> - Ranking position is NOT a complete score of content value.
> - All performance evaluations MUST be based on empirical GSC performance data, never assumptions or manufactured metrics.

---

## 7. RELEASE GATE & COMPLETION MATRIX

### Release Gate Completion Criteria
An article task reaches `RELEASE_COMPLETE` status ONLY when:
- Production code is committed and pushed (`origin/main`).
- Production URL returns HTTP 200.
- Declared canonical URL is verified.
- `sitemap.xml` contains the article URL.
- Lighthouse performance, accessibility (100), and SEO (100) passes.
- Affiliate compliance and ASIN links are verified.
- Search Console workflow (`SEARCH_CONSOLE_DISCOVERY` / `URL_INSPECTION`) is initiated.

> [!NOTE]
> **TECHNICAL RELEASE DECOUPLING:** Technical release completion (`RELEASE_COMPLETE`) does NOT require Google to have already indexed the page. Search Console discovery and index tracking proceed asynchronously through subsequent lifecycle states:
> `RELEASE_COMPLETE` $\rightarrow$ `SEARCH_CONSOLE_PENDING` $\rightarrow$ `INDEXING_OBSERVATION` $\rightarrow$ `SEARCH_PERFORMANCE_OBSERVATION`.

---

## 8. CROSS-SKILL CONTRACTS & HANDOFFS

```
                               ┌─────────────────────────────────────────┐
                               │        elevate-search-visibility        │
                               │    (Audit & Post-Publish Governance)    │
                               └────────────────────┬────────────────────┘
                                                    │
        ┌───────────────────┬───────────────────────┼───────────────────────┬───────────────────┐
        ▼                   ▼                       ▼                       ▼                   ▼
┌───────────────┐   ┌───────────────┐       ┌───────────────┐       ┌───────────────┐   ┌───────────────┐
│ elevate-seo-  │   │ elevate-      │       │ elevate-      │       │ elevate-      │   │ elevate-      │
│ performance   │   │ source-       │       │ content-      │       │ content-      │   │ product-      │
│ (Execution &  │   │ integrity     │       │ freshness-    │       │ cluster-      │   │ performance-  │
│ Technical     │   │ (Evidence &   │       │ intelligence  │       │ intelligence  │   │ intelligence  │
│ Controller)   │   │ Authority)    │       │ (Lifecycle)   │       │ (Topology)    │   │ (Analytics)   │
└───────────────┘   └───────────────┘       └───────────────┘       └───────────────┘   └───────────────┘
```

- **Inputs Accepted:** `SEARCH_CONSOLE_EVIDENCE`, `SEARCH_INDEXING_STATE`, `SEARCH_APPEARANCE_STATE`.
- **Handoff to `elevate-seo-performance`**: Passes technical search specifications for HTML execution.
- **Handoff to `elevate-source-integrity`**: Passes facts and claims for verification before marking GEO citation readiness as `VERIFIED`.
- **Handoff to `elevate-content-freshness-intelligence`**: Receives indexing and decay signals to trigger article updates.
- **Handoff to `elevate-product-performance-intelligence`**: Shares query impression data for commercial conversion optimization.

---

## 9. RELEASE LEARNING RECORD — CASE #001

### Case Study: Small Apartment Entryway Organization Guide
- **Article URL:** `https://elevatelivingco.me/small-apartment-entryway-organization-guide.html`
- **Production Commit Sequence:** `555a3cd` $\rightarrow$ `62c7c0b` $\rightarrow$ `442988a` $\rightarrow$ `229a069`
- **Final Measured Performance:** Performance: 99 | Accessibility: 100 | Best Practices: 100 | SEO: 100 (FCP: 0.8s, LCP: 1.0s, TBT: 0ms, CLS: 0)

### Empirical Release Learnings
1. **Lighthouse SEO 100 $\neq$ Google Indexing:** A 100 Lighthouse SEO score proves technical document eligibility, not indexation in Google's database.
2. **Lighthouse Performance 99 $\neq$ Field Core Web Vitals:** Lab performance testing validates synthetic speed; GSC Core Web Vitals field data requires 28-day Chrome User Experience Report (CrUX) observation.
3. **Static Sitemap Verification:** Sitemap inclusion must be verified in the deployed static repository immediately after release.
4. **URL Inspection Prerequisite:** Direct Google Search Console URL Inspection is the only authoritative source for Google-specific indexing state.
5. **Google-Selected Canonical Monitoring:** Algorithmic canonical selection must be monitored via GSC to ensure Google agrees with the site's declared canonical.
6. **Asynchronous Post-Publish Observation:** Search Console indexing and SERP appearance must be observed over time post-deployment.
7. **Accessibility in Release Gate:** Reaching 100/100 Accessibility requires enforcing color contrast ratios ($\ge 4.5:1$) and strict sequential `H1 -> H2 -> H3` heading hierarchy before final release.
8. **Optimization Diminishing Returns:** Performance optimization must cease once lab metrics reach elite levels (Performance 99, LCP 1.0s, TBT 0ms); further micro-optimizations carry risk with negligible return.
9. **Evidence-Based Optimization Only:** Code changes must be justified strictly by empirical trace evidence, log data, or verified defects.

---

## 10. GSC STRIKING-DISTANCE QUERY HARVESTING PROTOCOL (INTERNAL WORKFLOW RECOMMENDATION)

When evaluating empirical Search Console performance telemetry, prioritize organic queries in the **"Striking Distance" (Positions 8–20)** with high impressions but low CTR:

1. **Identification:**
   - Filter GSC Search Performance by: Impressions $> 50$, Average Position between 8.0 and 20.0, CTR $< 3\%$.
2. **Intent Classification:**
   - Verify whether the query represents Informational, Commercial Investigation, or Transactional intent.
3. **Surgical On-Page Levers (Zero Collateral Impact):**
   - **Snippet Refresh:** Adjust `<meta name="description">` and `<title>` to directly mirror the user intent and promise concrete answers without changing canonical URLs.
   - **Section Entity Targeting:** Add or refine a focused `<h3>` subsection covering the exact query topic with concrete specs, dimensions, or styling rules.
   - **AEO Direct Answer Inclusion:** Place a concise ($\le 50$ words) direct answer block immediately beneath the heading to target Google Featured Snippets.
   - **Internal Anchor Flow:** Add 1–2 internal links from high-authority existing articles using descriptive, natural anchors reflecting the striking-distance phrase.

