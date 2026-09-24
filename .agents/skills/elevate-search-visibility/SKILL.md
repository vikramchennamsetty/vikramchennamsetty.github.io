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

### Post-Publish Checklist
For every newly published article:

#### A. Production Verification
- [ ] HTTP Status Code = 200.
- [ ] Canonical URL is self-referencing and correct.
- [ ] Meta robots set to `index, follow`.
- [ ] `sitemap.xml` contains the article URL.
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
1. **Request Indexing $\neq$ Guaranteed Indexing:** Submitting an indexing request asks Google to queue the URL for crawling; it does not guarantee immediate indexation.
2. **Sitemap Submission $\neq$ Guaranteed Indexing:** Adding a URL to `sitemap.xml` signals discovery intent; indexing remains at Google's algorithmic discretion.
3. **Live Test Pass $\neq$ Indexed:** Passing the GSC "Test Live URL" verifies technical eligibility today; it is NOT proof that the URL is already in Google's index.
4. **Google-Selected Canonical Monitoring:** The declared canonical tag in HTML must be compared against `google_selected_canonical` in GSC reports to catch algorithmic canonical overrides.
5. **Indexed State vs Live State:** Search Console's index data reflects Google's cached index database, which may lag behind recent live page updates.
6. **No Conflation:** Live-test results and historical index-state results must never be conflated.
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

## 6. SEARCH PERFORMANCE OBSERVATION

During the `PERFORMANCE_QUERY_OBSERVATION` stage, track empirical performance data:
- **Metrics Tracked:** Impressions, Clicks, Click-Through Rate (CTR), Average Position, Target Queries, Top Performing Pages, Country breakdown, Device breakdown, Date Range.

> [!IMPORTANT]
> **ANALYTICS INTERPRETATION RULES:**
> - Low clicks do NOT automatically mean poor content quality (e.g. low search volume niche or zero-click AEO answers).
> - Ranking position is NOT a complete score of content value.
> - All performance evaluations MUST be based on empirical GSC performance data, never assumptions.

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
