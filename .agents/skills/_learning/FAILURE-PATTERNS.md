# Elevate Living Co — Master Failure Patterns Catalog

This document catalogs recognized failure patterns, their root causes, detection rules, prevention rules, and regression tests.

---

### Pattern FP-001: Shared CSS Unloaded by Consumer
- **Symptom:** Component markup (e.g. footer) renders with raw browser defaults (unstyled text, unaligned grid).
- **Root Cause:** Component CSS rules were defined in a page-specific stylesheet (`immersive.css`) rather than a shared stylesheet (`components.css`) imported by all consumers.
- **Why Previous QA Missed It:** Static HTML audit checked for presence of `<footer class="site-footer">` markup but did not verify loaded `<link rel="stylesheet">` tags or computed DOM styles.
- **Detection Rule:** Assert that every consumer HTML file imports `components.css` in `<head>`.
- **Prevention Rule:** Shared component CSS MUST reside in `components.css` (or `main.css`).
- **Regression Test:** Automated computed background and layout display assertion on `.site-footer` across all consumer HTML files.

---

### Pattern FP-002: Analytics Handler Cancels Anchor Navigation
- **Symptom:** Outbound affiliate CTA buttons fail to open target Amazon page when clicked.
- **Root Cause:** `onclick` event attribute contains `return false;` or `event.preventDefault()` which cancels native anchor navigation.
- **Why Previous QA Missed It:** Grep check verified `trackAffiliate` function presence but ignored the trailing `return false;` statement.
- **Detection Rule:** `grep -i 'return false' <file>` MUST return 0 matches on commercial anchors.
- **Prevention Rule:** Analytics MUST observe navigation, never control or block it.
- **Regression Test:** Repo-wide `return false` count audit script enforcing `count == 0`.

---

### Pattern FP-003: Placeholder `href="#"` Link Leakage
- **Symptom:** CTA button jumps to top of page (`#`) instead of opening product destination.
- **Root Cause:** Prototyping placeholder `href="#"` was forgotten during initial layout setup.
- **Why Previous QA Missed It:** Static checks validated button CSS class names without checking `href != "#"`.
- **Detection Rule:** `grep -i 'href="#"' <file>` MUST return 0 matches.
- **Prevention Rule:** `href="#"` is strictly prohibited on commercial anchors. Every CTA must have a valid destination URL.
- **Regression Test:** Repo-wide `href="#"` scanner enforcing `count == 0`.

---

### Pattern FP-004: Tracking Destination Mismatch
- **Symptom:** Analytics logs click for product A while browser navigates to product B (or vice versa).
- **Root Cause:** Anchor `href` and `trackAffiliate` destination parameter reference different ASINs or URLs (or child `<img>` tag has conflicting inline `onclick`).
- **Why Previous QA Missed It:** Link check regex only inspected parent `<a>` tags independently of `trackAffiliate` string parameters.
- **Detection Rule:** Assert $\text{NORMALIZED}(\text{anchor.href}) == \text{NORMALIZED}(\text{trackAffiliate destination})$.
- **Prevention Rule:** `href` destination MUST match `trackAffiliate` URL parameter for 100% of commercial links. Parent anchors own navigation.
- **Regression Test:** Normalized href vs tracking URL equality script across all commercial anchors.

---

### Pattern FP-005: Static HTML Audit Pass on Rendered UI Breakage
- **Symptom:** Automated static audit reports 100% PASS while rendered UI in browser is broken or misaligned.
- **Root Cause:** HTML markup contains correct CSS class names, but CSS stylesheets fail to load or override properties.
- **Why Previous QA Missed It:** System relied exclusively on static substring matching (`grep`) without browser rendering.
- **Detection Rule:** Browser UAT screenshot execution across 8 viewports; check computed element properties.
- **Prevention Rule:** Hard stop: static HTML checks alone are invalid when visual/interactive presentation matters.
- **Regression Test:** Headless browser rendering and screenshot capture at 375px and 1440px viewports.

---

### Pattern FP-006: Shared Component Change Without Full Consumer Testing
- **Symptom:** Editing a shared CSS file fixes page A but breaks pages B, C, and D.
- **Root Cause:** Shared component edits were tested on a single editing file without testing the entire consumer registry.
- **Why Previous QA Missed It:** QA was scoped locally to the active editing file instead of running consumer regression across the workspace.
- **Detection Rule:** Compile consumer inventory for shared assets; assert 100% consumer test execution.
- **Prevention Rule:** Modifying shared CSS/JS requires testing 100% of consumer pages.
- **Regression Test:** Consumer inventory regression runner across all 13 articles + homepage.

---

---

### Pattern FP-008: Generic Disconnected Visuals Lacking Art Direction
- **Symptom:** Page layout meets basic technical specs but feels visually disconnected, generic, or over-engineered (e.g. luxury font paired with generic stock photos, un-justified Three.js 3D, conflicting section aesthetics).
- **Root Cause:** Implementation proceeded without defining an explicit Art Direction Brief (visual thesis, hero focal asset, typography hierarchy, motion narrative, 3D decision).
- **Why Previous QA Missed It:** Subsystem-specific QA checked individual CSS rules, draw calls, or link parity independently without evaluating holistic creative direction.
- **Detection Rule:** Mandatory 10-point Creative Direction Brief and 16 Validation Gates required before major implementation.
- **Prevention Rule:** Reject implementations where typography, imagery, motion, 3D, and interaction language contradict or operate as disconnected design systems.
- **Regression Test:** Pre-implementation Art Direction Audit verifying all 10 brief requirements and 16 validation gates.

---

### Pattern FP-009: Inaccessible Split-Text Fragment Leakage
- **Symptom:** Screen readers read fragmented syllables or words repeatedly, or fail to read text when JavaScript is disabled.
- **Root Cause:** SplitText animation broke string into separate `<span>` nodes without preserving a contiguous `.sr-only` parent element or applying `aria-hidden="true"` to split fragments.
- **Why Previous QA Missed It:** Visual QA confirmed typography movement but omitted screen reader accessibility testing.
- **Detection Rule:** Assert intact original accessible name in DOM tree; verify split nodes contain `aria-hidden="true"`.
- **Prevention Rule:** Accessible split text must preserve a single, unsplit accessible name for assistive technology.
- **Regression Test:** Automated accessibility audit checking split-text DOM nodes for `aria-hidden` and `.sr-only` fallback parity.

---

### Pattern FP-010: Smooth-Scroll Engine Conflict & Touch Blocking
- **Symptom:** Mobile touch scrolling is trapped, anchor links (`#section`) fail to jump, or GSAP ScrollTrigger jitters violently.
- **Root Cause:** Multiple smooth-scroll libraries (Lenis + Locomotive) were initialized simultaneously, or OrbitControls captured touch gestures.
- **Why Previous QA Missed It:** Testing occurred only on desktop viewports with mouse wheel.
- **Detection Rule:** Assert maximum of 1 smooth-scroll engine initialized per page.
- **Prevention Rule:** Single Smooth-Scroll Engine Gate: Lenis OR Locomotive, never both; fallback to native scroll. Set `controls.enableZoom = false` on mobile 3D scenes.
- **Regression Test:** Mobile touch-scroll regression test and anchor navigation check across 375px and 768px viewports.

---

### Pattern FP-011: WebGL Resource Leak & GPU Memory Overfill
- **Symptom:** Browser crashes, page stutters, or mobile devices overheat when navigating between 3D scenes.
- **Root Cause:** Geometries, materials, textures, and WebGL renderers were not explicitly disposed on unmount, or RAF loop kept running offscreen.
- **Why Previous QA Missed It:** Single-page loads passed without checking memory heap across navigation cycles.
- **Detection Rule:** Assert `geometry.dispose()`, `material.dispose()`, `texture.dispose()`, and `renderer.dispose()` calls in cleanup routines.
- **Prevention Rule:** Mandatory 8-step GPU Resource Cleanup protocol on canvas unmount or context loss.
- **Regression Test:** Memory leak audit verifying RAF cancellation and WebGL texture/geometry disposal.

---

### Pattern FP-012: Hero-Only Concept with Neglected Editorial Body
- **Symptom:** Stunning hero viewport followed by plain, unformatted product lists and abrupt footer.
- **Root Cause:** Creative effort was concentrated exclusively on the first screen without designing a complete 7-stage editorial progression.
- **Why Previous QA Missed It:** Visual QA screenshot captured only 1440x900 above-the-fold viewport.
- **Detection Rule:** Audit full page scroll height for editorial section rhythm, H2 subheadings every 250 words, and Shop-The-Look integration.
- **Prevention Rule:** Every page must be a complete experience (Hero $\rightarrow$ Editorial Progression $\rightarrow$ Product Discovery $\rightarrow$ Shop The Look $\rightarrow$ Final CTA $\rightarrow$ Footer).
- **Regression Test:** Full-page scroll screenshot UAT audit across desktop and mobile.

---

### Pattern FP-013: Fake Visual Proof & Fabricated Endorsements
- **Symptom:** Page displays invented star ratings ("4.9/5"), fake customer quotes, synthetic human faces as endorsers, or unverified partner logo walls.
- **Root Cause:** Agent attempted to enrich visual presentation by fabricating social proof data from external design templates.
- **Why Previous QA Missed It:** Visual design checks prioritized aesthetic completeness over factual data provenance.
- **Detection Rule:** Cross-reference all ratings, reviews, social proof, and logos against official Elevate project CSVs and PA-API data.
- **Prevention Rule:** Absolute prohibition on fake scarcity, fake urgency, fake reviews, synthetic human endorsers, or unverified logo walls.
- **Regression Test:** Commercial data provenance scanner checking for unverified rating/review strings.

---

### Pattern FP-014: Performance Passed Claims Without Empirical Measurement
- **Symptom:** Report states "performance passed" or "zero layout shift", but live page experiences heavy Cumulative Layout Shift (CLS) or low LCP.
- **Root Cause:** Agent assumed performance success based on code structure without taking empirical browser performance measurements.
- **Why Previous QA Missed It:** QA reporting converted "unmeasured" into "passed".
- **Detection Rule:** Reject any report claiming performance pass without numerical LCP, CLS, and asset payload measurements.
- **Prevention Rule:** Never report "performance passed" unless empirically measured via browser performance APIs or Lighthouse.
- **Regression Test:** Deployment Gate assertion blocking release if performance metrics are unverified or missing numerical data.

---

### Pattern FP-015: Theme Specificity Override & Unusable CTA Contrast
- **Symptom:** Gold CTA button text renders gold on gold background (`color: #E8C97A` on `background: #E8C97A`), resulting in 1:1 contrast ratio (unreadable text).
- **Root Cause:** A high-specificity theme selector `[data-theme] a` in `theme-skins.css` (specificity `0,1,1`) overridden page-level single-class button rules like `.p-btn`, `.btn`, `.cta-btn` (specificity `0,1,0`).
- **Why Previous QA Missed It:** Static HTML/CSS inspection verified presence of `color: #0D0D0D` in page CSS without measuring actual browser-rendered computed styles or WCAG contrast.
- **Detection Rule:** Run real browser `window.getComputedStyle(button)` across default, hover, focus, active, and visited states. Assert WCAG contrast $\ge 4.5:1$ (or $\ge 7:1$ AAA).
- **Prevention Rule:** CSS Specificity Regression Gate: Always inspect winning computed selectors before writing CSS fixes. Scope button selectors with `[data-theme]` prefix (e.g. `[data-theme] .btn`) to ensure proper specificity hierarchy.
- **Regression Test:** Automated computed style contrast audit testing `getComputedStyle` text color vs background color across all 4 interaction states (`:hover`, `:focus`, `:active`, `:visited`).

---

### Pattern FP-017: Pinterest Intent Disconnect
- **Symptom:** Pinterest visitor lands on an article whose first viewport does not clearly match the visual/topic expectation that brought them there (e.g. Pin featured warm lamp glow, but page opens with generic un-styled intro or unrelated text).
- **Root Cause:** Page header or hero prioritized generic brand styling over immediate visual/topic confirmation of the specific Pinterest entry pin.
- **Why Previous QA Missed It:** QA audited SEO title and meta description independently without testing Pin-to-page visual continuity or first-viewport intent confirmation.
- **Detection Rule:** Assert page title, H1, hero image, and 2-sentence intro hook establish visual/topic confirmation within the first 600px of vertical space.
- **Prevention Rule:** Pin-to-Page Continuity Gate: Require immediate visual/topic confirmation matching incoming acquisition context in the first viewport.
- **Regression Test:** First-viewport visual confirmation audit checking title, H1, hero image, and introductory hook above 600px fold.

---

### Pattern FP-018: Hover-Only Pinterest Mobile Trap
- **Symptom:** Interactive decor previews, product state switchers, or image callouts rely exclusively on desktop `:hover` triggers, rendering them unusable or locked on mobile touchscreens.
- **Root Cause:** Interactive JS handlers listened only to `mouseenter`/`mouseleave` events without attaching tap/click handlers or touch-friendly fallbacks.
- **Why Previous QA Missed It:** Testing was performed exclusively on desktop viewports with mouse pointer events.
- **Detection Rule:** Test interactive UI elements on simulated mobile touch viewports (320px–480px); assert tap/click state activation parity.
- **Prevention Rule:** Mobile Touch Parity Gate: Require tap/click alternatives for 100% of hover interactions and minimum 44x44px touch targets.
- **Regression Test:** Mobile touch-interaction audit testing tap state transitions and touch target dimensions across 320px–480px viewports.

---

### Pattern FP-019: Product Relevance Disconnect
- **Symptom:** Selected Amazon affiliate products clash visually or stylistically with article theme (e.g. cheap neon plastic desk lamps on a Dark Academia pillar page).
- **Root Cause:** Product selection was based purely on generic search queries or affiliate commission potential without evaluating aesthetic compatibility, color palette harmony, texture, or cluster theme alignment.
- **Why Previous QA Missed It:** QA audited link mechanics (`href`, tag, tracking) without visual art direction validation of product photography against article cluster aesthetic.
- **Detection Rule:** Evaluate candidate product imagery against cluster theme palette and material palette before adding to Shop The Look or product cards.
- **Prevention Rule:** Editorial Purpose & Aesthetic Compatibility Gate: Require 100% style, material, and contextual relevance alignment between product selection and room design concept.
- **Regression Test:** Visual-editorial theme compatibility audit prior to product matrix approval.

---

### Pattern FP-020: Product Data Provenance Failure
- **Symptom:** Anchor link, tracking payload, JSON-LD schema, or product card metadata specify conflicting ASINs, titles, or seller identities for the same product card.
- **Root Cause:** Product data was manually updated in HTML without syncing JSON-LD script, tracking handler URL, or verification matrix.
- **Why Previous QA Missed It:** Single-field checks passed without verifying cross-field equality across HTML DOM, JSON-LD, script parameters, and product matrix.
- **Detection Rule:** Assert equality across `anchor.href` ASIN, `trackAffiliate` ASIN, JSON-LD `product.sku`/`gtin`, and product matrix ASIN.
- **Prevention Rule:** Single Source-of-Truth Product Identity Protocol: Create and verify a single product identity matrix before code implementation.
- **Regression Test:** Commercial data provenance scanner validating 4-way ASIN and URL parity across HTML, JS, JSON-LD, and matrix.

---

### Pattern FP-021: Affiliate Product Stuffing
- **Symptom:** Article is cluttered with dense lists of low-value, repetitive affiliate links, destroying reading flow and degrading brand trust.
- **Root Cause:** Product recommendations were added to maximize link density rather than providing genuine curation or editorial value.
- **Why Previous QA Missed It:** Link health audits checked for 200 OK HTTP responses without evaluating link density, narrative balance, or user experience.
- **Detection Rule:** Assert product recommendations serve an explicit editorial purpose and follow the 7-stage narrative structure (`DISCOVER -> UNDERSTAND -> DESIRE -> EXPLORE -> COMPARE -> SHOP`).
- **Prevention Rule:** Curation over Quantity Gate: Product placement must be contextual, editorial, and bounded by visual hierarchy; strictly prohibit link stuffing.
- **Regression Test:** Product link density and narrative integration audit per 500 words of content.

---

### Pattern FP-022: Product Portfolio Repetition
- **Symptom:** Every article in a cluster recommends the exact same 3–4 products, creating a repetitive, low-authority catalog experience across the site.
- **Root Cause:** Product selection reused historical ASINs without surveying broader catalog candidates or balancing sub-category distribution across articles.
- **Why Previous QA Missed It:** Article-level QA audited each file in isolation without cross-article portfolio audit across the cluster.
- **Detection Rule:** Check ASIN distribution across cluster articles; assert balanced price-tier representation and sub-category coverage.
- **Prevention Rule:** Portfolio Diversity & Tier Balance Protocol: Balance product selection across anchor pieces, supporting items, budget picks, investment pieces, and accents.
- **Regression Test:** Cluster-wide product catalog uniqueness and balance audit across cluster articles.

---

### Pattern FP-023: Trend Without Evidence
- **Symptom:** Editorial copy claims a product or decor style is "trending #1 on Pinterest in 2026" or "searched 50,000 times monthly" without verifiable data.
- **Root Cause:** Copywriter generated synthetic trend/demand claims to create manufactured social proof or hype.
- **Why Previous QA Missed It:** Editorial QA checked for engaging tone without verifying statistical or trend claims against authoritative data sources.
- **Detection Rule:** Scan editorial copy for quantitative trend, volume, or popularity claims; assert presence of verifiable source provenance or reframe as qualitative design reasoning.
- **Prevention Rule:** Zero Manufactured Trend Claims Gate: Never invent quantitative search volumes, trend rankings, or statistical popularity; restrict copy to truthful editorial design rationale.
- **Regression Test:** Empirical claim scanner asserting 0 unverified quantitative trend or volume metrics.

---

### Pattern FP-024: Metric Threshold Bias
- **Symptom:** The system rejects relevant niche products simply because they do not meet arbitrary rating or review-count thresholds (e.g. `rating >= 4.0` or `reviews >= 50`).
- **Root Cause:** Product research rules enforced rigid universal numerical pass/fail gates instead of evaluating complete contextual evidence (article intent, problem solved, visual/editorial fit, verified commercial identity).
- **Why Previous QA Missed It:** Qualification checks evaluated raw metrics in isolation without considering niche context, limited review depth on specialized decor items, or overall editorial value.
- **Detection Rule:** Detect candidate rejection primarily caused by fixed numerical thresholds despite high style relevance, verified identity, and clear problem-solving value.
- **Prevention Rule:** Evidence Context over Threshold Gate: Evaluate product signals as contextual evidence across the 12-step evaluation hierarchy; strictly prohibit rejecting products based on fixed numeric thresholds.
- **Regression Test:** Product qualification audit verifying evidence-based classification and zero threshold-only rejections.

---

### Pattern FP-025: Scrape Permission Violation
- **Symptom:** Automated crawler requests data from a domain where collection is prohibited by `robots.txt`, access controls, or terms of service.
- **Root Cause:** Crawler script executed without running the 5-step permission audit or checking robots.txt rules.
- **Why Previous QA Missed It:** Extraction script executed directly without a pre-crawl permission audit step.
- **Detection Rule:** Assert domain permission audit execution and `SOURCE_ACCESS_STATUS != UNCLEAR` prior to launching requests.
- **Prevention Rule:** Scrape Permission Gate: Check domain `robots.txt`, terms of service, and access controls before automated collection.
- **Regression Test:** Pre-crawl permission verification check blocking automated access when status is UNCLEAR or disallowed.

---

### Pattern FP-026: Extraction Equals Verification Error
- **Symptom:** Scraped product data (price, rating, availability) is marked as `VERIFIED` merely because the parser successfully extracted a string from HTML.
- **Root Cause:** System conflated successful string parsing with factual truth verification.
- **Why Previous QA Missed It:** Data pipeline assigned `VERIFIED` status based on non-null parse output.
- **Detection Rule:** Assert distinction between raw `EXTRACTED_UNVERIFIED` data and authoritative source verification.
- **Prevention Rule:** Extraction vs Verification Decoupling Protocol: Treat extracted scraped data as `UNVERIFIED` until verified against authoritative program mechanisms or APIs.
- **Regression Test:** Candidate record status audit asserting `EXTRACTED_UNVERIFIED` on unconfirmed scraped data.

---

### Pattern FP-027: Product Identity & ASIN Inference
- **Symptom:** System assigns an Amazon ASIN to a candidate product based on title similarity, image matching, or search engine URL fragments.
- **Root Cause:** Discovery module attempted to guess product identity from indirect visual or text signals.
- **Why Previous QA Missed It:** Fuzzy matching heuristic auto-populated the ASIN field without authoritative verification.
- **Detection Rule:** Assert ASIN matches authoritative Amazon API/feed source or set to `IDENTITY_UNVERIFIED`.
- **Prevention Rule:** Product Identity Non-Inference Gate: ASIN must never be inferred from title similarity, search rankings, or non-authoritative URL fragments.
- **Regression Test:** Identity provenance scanner flagging ASIN assignments derived from fuzzy text or image similarity.

---

### Pattern FP-028: Duplicate Product Fragmentation
- **Symptom:** The same physical decor item discovered across 3 retailer URLs is treated as 3 separate candidates, creating duplicate evaluation overhead and portfolio clutter.
- **Root Cause:** Scraper treated each URL as a unique candidate record without URL normalization and cross-source deduplication.
- **Why Previous QA Missed It:** Candidate ingestion checked URL uniqueness rather than physical product identity.
- **Detection Rule:** Run canonical URL normalization and product identity deduplication across candidate discovery sets.
- **Prevention Rule:** Duplicate Candidate Consolidation Protocol: Consolidate duplicate products across sources into a single candidate record referencing multiple source URLs.
- **Regression Test:** Discovery pipeline deduplication test verifying multi-source candidate consolidation.

---

### Pattern FP-029: Public Image Licensing Assumption
- **Symptom:** Third-party web image extracted by scraper is committed to the Elevate repository under the assumption that public accessibility implies commercial reuse rights.
- **Root Cause:** Agent equated public web availability with copyright license authorization.
- **Why Previous QA Missed It:** Image pipeline checked file availability (200 OK) without auditing Asset Provenance Class license metadata.
- **Detection Rule:** Assert Asset Provenance Class (A–F) and explicit usage license before downloading or committing images.
- **Prevention Rule:** Image Provenance & Licensing Gate: Public accessibility does not imply reuse rights. Never commit third-party web images without verified provenance.
- **Regression Test:** Image repository audit verifying Asset Provenance Class metadata on all image assets.

---

### Pattern FP-030: Unbounded Crawl & Rate Limit Failure
- **Symptom:** Web scraper makes hundreds of rapid requests, triggering HTTP 429 rate limits, IP blocks, or server memory spikes.
- **Root Cause:** Scraper script lacked explicit page limits, depth bounds, delay intervals, or timeout safety controls.
- **Why Previous QA Missed It:** Small test crawls passed without testing queue expansion limits or delay timers.
- **Detection Rule:** Assert crawl bounds (max 3 domains, max 20 pages, min 1.0s delay, max 10s timeout) on all discovery runs.
- **Prevention Rule:** Bounded Crawl & Rate Limiting Gate: Enforce strict safety bounds and delay intervals on every automated collection session.
- **Regression Test:** Crawler configuration audit verifying page limits, depth bounds, and delay timers.

---

### Pattern FP-031: Trend Signal Without Evidence
- **Symptom:** Copy or report asserts a decor style or product is "trending" or "in high demand" without citing a verified source dataset, timestamp, or observation record.
- **Root Cause:** Copywriter generated unsupported trend hype to make content feel current.
- **Why Previous QA Missed It:** QA evaluated tone engagingness without checking source provenance for trend assertions.
- **Detection Rule:** Assert presence of `SOURCE`, `OBSERVED_AT`, and `CONFIDENCE` metadata for all trend statements.
- **Prevention Rule:** Trend Evidence Gate: Every trend claim requires a verified source, timestamp, and confidence rating; strictly prohibit unevidenced trend hype.
- **Regression Test:** Trend provenance audit scanner asserting 0 unevidenced trend claims.

---

### Pattern FP-032: Trend Equals Demand Conflation
- **Symptom:** Agent assumes that because a decor style is trending on social/visual media, consumers are actively searching to buy specific products in that category.
- **Root Cause:** Conflated visual aesthetic trend interest with commercial purchase intent.
- **Why Previous QA Missed It:** Trend analysis did not separate visual search trajectory from commercial search intent.
- **Detection Rule:** Assert separate evaluation of `TREND_DIRECTION` and `COMMERCIAL_DEMAND_INTENT`.
- **Prevention Rule:** Trend vs Demand Decoupling Protocol: Evaluate style trends and purchase demand as distinct dimensions; never assume trending equals high purchase intent.
- **Regression Test:** Intent classification audit verifying independent trend and demand ratings.

---

### Pattern FP-033: Stale Trend Presented as Current
- **Symptom:** Historical trend data from 2023 or 2024 is presented as a current 2026 design trend without updated observation recency.
- **Root Cause:** Agent reused legacy research without checking observation timestamps or time windows.
- **Why Previous QA Missed It:** Keyword matching validated trend topic presence without checking `OBSERVED_AT` recency.
- **Detection Rule:** Check `OBSERVED_AT` timestamp against current date; flag records older than 90 days as `STALE`.
- **Prevention Rule:** Trend Recency Gate: Current trend claims cannot rely on stale data; flag un-refreshed observations as `TIME-SENSITIVE`.
- **Regression Test:** Recency scanner blocking stale trend data from current editorial output.

---

### Pattern FP-034: Single-Source Trend Overconfidence
- **Symptom:** A single social media post or individual blog mention is treated as definitive proof of a major market-wide trend, assigning `CONFIDENCE: HIGH`.
- **Root Cause:** Evaluator assigned high confidence to an isolated observation without seeking multi-source corroboration.
- **Why Previous QA Missed It:** Source presence check passed without verifying source hierarchy or corroboration count.
- **Detection Rule:** Require multi-source corroboration across independent channels before assigning `CONFIDENCE: HIGH`.
- **Prevention Rule:** Multi-Source Corroboration Gate: Single-source observations must be assigned `CONFIDENCE: LOW` until corroborated across independent channels.
- **Regression Test:** Confidence rating audit validating multi-source corroboration on high-confidence trends.

---

### Pattern FP-035: General Trend Niche Mismatch
- **Symptom:** A massive general trend (e.g. suburban rustic barn doors or massive outdoor pergolas) is pitched as an Elevate topic despite clashing with apartment living and Dark Academia pillars.
- **Root Cause:** Trend analysis prioritized raw search volume over Elevate target audience relevance.
- **Why Previous QA Missed It:** Keyword volume checks passed without running the Elevate Niche Filter.
- **Detection Rule:** Evaluate candidate trends against Elevate core pillars (apartment living, Dark Academia, lighting, small space) before approving content opportunities.
- **Prevention Rule:** Elevate Niche Relevance Gate: General trends must pass Elevate niche filtering before becoming content opportunities.
- **Regression Test:** Niche relevance audit blocking off-brand general trends.

---

### Pattern FP-036: Seasonal Timing Lead-Time Miss
- **Symptom:** A seasonal decor topic (e.g. Fall Cozy Decor) is identified and published during or after peak seasonal interest, missing the reader discovery window.
- **Root Cause:** Trend intelligence failed to evaluate publishing lead time (`NOW`, `UPCOMING`, `FUTURE OPPORTUNITY`, `PASSED`) relative to current date.
- **Why Previous QA Missed It:** Seasonality was evaluated as a static tag without checking calendar lead time.
- **Detection Rule:** Calculate publishing lead time against target seasonal peak; flag opportunities as `PASSED` if lead time is insufficient.
- **Prevention Rule:** Seasonal Lead-Time Execution Protocol: Upcoming seasonal opportunities must account for publishing lead time to launch before peak interest.
- **Regression Test:** Seasonal lead-time audit verifying publishing window alignment.

---

### Pattern FP-037: Niche Context Mismatch
- **Symptom:** Recommended product clashes with article room setting, audience persona, or primary topic (e.g. bathroom storage caddy recommended in a luxury living room guide).
- **Root Cause:** Product selection was made without evaluating the 18 core matching dimensions across article intent, room context, and user problem.
- **Why Previous QA Missed It:** Qualification checked product category presence without auditing room context compatibility.
- **Detection Rule:** Evaluate candidate product against article room setting and core dilemma; assert `MATCH_CLASSIFICATION != REJECT`.
- **Prevention Rule:** Article Context Matching Gate: Every selected product must have an explicit, explainable contextual relationship to the article room, audience, and problem.
- **Regression Test:** Niche context compatibility scanner asserting zero room/topic mismatches.

---

### Pattern FP-038: Style Label Overreach
- **Symptom:** Product is classified as "Dark Academia" or "Quiet Luxury" solely because a retailer marketing title contains those buzzwords, despite contradicting actual aesthetic materials.
- **Root Cause:** Evaluator relied blindly on retailer promotional titles instead of evaluating visual and material evidence.
- **Why Previous QA Missed It:** Keyword matching validated style string presence without inspecting material/finish fit.
- **Detection Rule:** Cross-reference extracted product materials and silhouette against Elevate Style Taxonomy standards.
- **Prevention Rule:** Style Evidence Gate: Style compatibility cannot rely solely on retailer promotional labels; verify visual and material evidence.
- **Regression Test:** Style evidence audit validating material harmony for tagged styles.

---

### Pattern FP-039: Problem / Product Disconnect
- **Symptom:** Product recommended in a problem-solving guide fails to solve the stated decorating dilemma (e.g. recommending a floor lamp in an article about bare wall decor).
- **Root Cause:** Product placement prioritized affiliate link availability over tangible problem-solving utility.
- **Why Previous QA Missed It:** QA audited product availability and affiliate tags without verifying problem-solving alignment.
- **Detection Rule:** Assert direct alignment between candidate product function and stated user problem.
- **Prevention Rule:** Problem/Solution Relevance Gate: Problem-solving articles require direct, tangible alignment between product category function and stated decorating dilemma.
- **Regression Test:** Problem-solving alignment scanner asserting direct category-to-problem fit.

---

### Pattern FP-040: Visual / Product Identity Confusion
- **Symptom:** A visually similar product is swapped into a product card or Shop The Look composition under a different ASIN without verifying physical product identity.
- **Root Cause:** Evaluator assumed visual resemblance justified ASIN replacement.
- **Why Previous QA Missed It:** Visual resemblance check passed without verifying 9-field product identity parity.
- **Detection Rule:** Assert 100% identity agreement across ASIN, image provenance, title, and URL; flag discrepancies as `SOURCE_CONFLICT`.
- **Prevention Rule:** Product Identity Preservation & Source Conflict Gate: Visually similar products MUST NOT be treated as identical; halt decisions on `SOURCE_CONFLICT`.
- **Regression Test:** ASIN-to-image identity scanner flagging unverified visual swaps.

---

### Pattern FP-041: Portfolio Repetition & Category Clutter
- **Symptom:** Article contains 5 variations of essentially the same product (e.g. 5 identical brass table lamps), creating category clutter and destroying reading experience.
- **Root Cause:** Candidate selection lacked portfolio role classification (Primary, Secondary, Accent, Detail, Alternative).
- **Why Previous QA Missed It:** Article-level checks audited link integrity without verifying category diversity across product roles.
- **Detection Rule:** Check product category distribution and role assignments across article recommendations.
- **Prevention Rule:** Product Portfolio Diversity Gate: Related products must serve distinct portfolio roles and provide differentiated editorial value.
- **Regression Test:** Portfolio diversity audit asserting multi-category representation across product roles.

---

### Pattern FP-042: Small-Space Scale Blindness
- **Symptom:** Over-sized furniture or bulky decor items recommended for small-space or rental guides without evaluating physical dimensions or footprint.
- **Root Cause:** Product selection ignored scale/space fit dimensions (`footprint`, `height`, `width`, `depth`, `visual bulk`).
- **Why Previous QA Missed It:** Selection evaluated aesthetic style without checking physical dimension specifications.
- **Detection Rule:** Check physical dimensions for small-space articles; set `SCALE_UNVERIFIED` if missing or reject if footprint exceeds spatial limits.
- **Prevention Rule:** Small-Space Scale & Footprint Gate: Small-space recommendations must evaluate physical dimensions against compact living constraints.
- **Regression Test:** Small-space dimension scanner validating scale compatibility.

---

### Pattern FP-043: Symptom / Root-Cause Confusion
- **Symptom:** Agent treats a visible decor symptom (e.g. "room looks cheap") as the verified root cause, recommending superficial accessories instead of addressing structural lighting or scale issues.
- **Root Cause:** Failed to decompose user dilemma into symptom vs root cause.
- **Why Previous QA Missed It:** QA evaluated product presence without checking root-cause decomposition.
- **Detection Rule:** Assert decomposition of visible symptom into potential root causes before solution category mapping.
- **Prevention Rule:** Symptom vs Root-Cause Decoupling Protocol: Separate visible symptoms from underlying root causes before selecting solution mechanisms.
- **Regression Test:** Root-cause decomposition scanner validating symptom/cause separation.

---

### Pattern FP-044: Product-First Recommendation
- **Symptom:** Content creation begins by compiling product ASINs and working backward to invent article copy.
- **Root Cause:** Workflow prioritized commercial affiliate link placement over problem solving.
- **Why Previous QA Missed It:** Qualification checks evaluated product link health without auditing problem-first workflow execution.
- **Detection Rule:** Assert Problem Decomposition Record creation prior to product candidate search.
- **Prevention Rule:** Product-First Prevention Gate: Problem decomposition and solution mechanisms MUST precede product candidate selection.
- **Regression Test:** Problem-first workflow audit verifying problem decomposition precedes product research.

---

### Pattern FP-045: Solution-Category Overreach
- **Symptom:** Recommended product categories have no logical mechanism for solving the stated decorating dilemma (e.g. recommending area rugs to solve a lack of closet storage).
- **Root Cause:** Product categories were selected based on affiliate availability rather than functional solution mapping.
- **Why Previous QA Missed It:** Category check validated category existence without verifying problem-solving mechanism.
- **Detection Rule:** Assert direct mapping between product category function and solution mechanism.
- **Prevention Rule:** Solution Mechanism Mapping Gate: Every product category MUST map to an explainable solution mechanism addressing the user dilemma.
- **Regression Test:** Solution mechanism scanner asserting category-to-problem functional alignment.

---

### Pattern FP-046: Constraint Blindness
- **Symptom:** Recommending heavy wall-mounted cabinets requiring stud drilling in a rental-friendly guide.
- **Root Cause:** Failed to evaluate known room, renter, or installation constraints prior to category handoff.
- **Why Previous QA Missed It:** Product evaluation checked aesthetic style without auditing installation constraints.
- **Detection Rule:** Check candidate product installation requirements against recorded rental/space constraints.
- **Prevention Rule:** Constraint Compatibility Gate: Recommending solutions without accounting for known room, renter, or scale constraints is strictly prohibited.
- **Regression Test:** Constraint auditor checking rental and physical footprint compatibility.

---

### Pattern FP-047: Productification Bias
- **Symptom:** Treating a problem that is best solved by decluttering, furniture repositioning, or lighting placement as requiring a purchasable product.
- **Root Cause:** Bias toward commercial product recommendations, ignoring non-product design solutions.
- **Why Previous QA Missed It:** Article checks audited product recommendations without verifying non-product solution inclusion.
- **Detection Rule:** Assert evaluation of non-product solutions (layout, decluttering, styling) alongside product categories.
- **Prevention Rule:** Non-Product Solution Preservation Gate: System MUST evaluate non-product design solutions before or alongside product categories.
- **Regression Test:** Non-product solution audit verifying inclusion of layout/styling guidance.

---

### Pattern FP-048: Multi-Problem Collapse
- **Symptom:** An article addressing small space, poor lighting, and rental storage collapses all solutions into one undifferentiated product list.
- **Root Cause:** Failed to maintain distinct problem-solution paths for multi-problem guides.
- **Why Previous QA Missed It:** Article check validated total link count without auditing section-level problem alignment.
- **Detection Rule:** Assert separate problem-solution sections for multi-problem articles.
- **Prevention Rule:** Multi-Problem Separation Gate: Distinct user dilemmas MUST retain separate problem-solution paths and clear section headers.
- **Regression Test:** Multi-problem structure scanner verifying section-level problem decomposition.

---

### Pattern FP-049: Seasonality Assumption
- **Symptom:** Content or recommendation treats a product or category as seasonal without explicit evidence or data basis.
- **Root Cause:** Relied on retailer seasonal promotional tags or subjective assumptions without verifying signal evidence.
- **Why Previous QA Missed It:** QA validated product category text without verifying seasonal signal classification.
- **Detection Rule:** Assert presence of `CALENDAR_BASED`, `WEATHER_BASED`, `SEARCH`, or `TREND` evidence for seasonal claims.
- **Prevention Rule:** Seasonal Evidence Gate: Seasonal classification requires an explainable, multi-signal evidence basis.
- **Regression Test:** Seasonal evidence auditor verifying signal provenance on seasonal claims.

---

### Pattern FP-050: Calendar-Only Timing
- **Symptom:** Content preparation or publishing is scheduled based on fixed calendar dates without assessing actual lead-time interest emergence.
- **Root Cause:** Assumed a universal calendar window instead of measuring search & Pinterest lead-time curves.
- **Why Previous QA Missed It:** Calendar date was assumed valid without checking preparation vs publishing lead time.
- **Detection Rule:** Assert explicit separation of `PREPARATION_WINDOW`, `PUBLISHING_WINDOW`, and `PEAK_INTEREST_WINDOW`.
- **Prevention Rule:** Lead-Time Gate: Seasonal content planning must distinguish preparation, publishing, and peak windows.
- **Regression Test:** Lead-time timeline auditor verifying distinct preparation and publishing horizons.

---

### Pattern FP-051: Seasonal Demand Conflation
- **Symptom:** System treats seasonal browsing or visual interest as proof of immediate consumer purchase demand.
- **Root Cause:** Conflated seasonal inspiration interest with active purchase intent.
- **Why Previous QA Missed It:** High visual search traffic was interpreted as direct affiliate purchase readiness.
- **Detection Rule:** Assert decoupling of seasonal visual interest from purchase demand intent.
- **Prevention Rule:** Seasonal vs Demand Separation Gate: Seasonal relevance MUST NOT be presented as purchase demand.
- **Regression Test:** Demand intent scanner flagging unevidenced purchase demand assertions on seasonal topics.

---

### Pattern FP-052: Geographic Seasonality Mismatch
- **Symptom:** Applying US Fall or Christmas seasonal timing to Southern Hemisphere or non-US markets without explicit geography tags.
- **Root Cause:** Failed to evaluate geographic applicability, assuming US timing is universal.
- **Why Previous QA Missed It:** Timing check evaluated seasonal labels without auditing geographic market context.
- **Detection Rule:** Assert explicit geographic tag (`US`, `INDIA`, `GLOBAL`, `GEOGRAPHY_UNKNOWN`) on seasonal opportunities.
- **Prevention Rule:** Geography Gate: Seasonal conclusions MUST preserve geographic market context.
- **Regression Test:** Geographic market auditor flagging untagged or mismatched seasonal recommendations.

---

### Pattern FP-053: Stale Seasonal Recommendation
- **Symptom:** Reusing previous year's seasonal product recommendations or availability claims without re-verification.
- **Root Cause:** Carried forward historical seasonal data without inspecting current stock or relevance status.
- **Why Previous QA Missed It:** Previous year's verified status was accepted as permanently valid.
- **Detection Rule:** Check `LAST_VERIFIED` timestamp; set status to `STALE` if older than 12 months.
- **Prevention Rule:** Seasonal Freshness Gate: Time-sensitive seasonal product claims require verification within 12 months.
- **Regression Test:** Seasonal freshness scanner flagging outdated seasonal records.

---

### Pattern FP-054: Seasonal Sale Fabrication
- **Symptom:** Content claims "Limited-time holiday discount", "Labor Day price drop", or "Selling out for Christmas".
- **Root Cause:** Invented commercial urgency and pricing promotions to drive affiliate conversions.
- **Why Previous QA Missed It:** Copy check evaluated promotional tone without auditing live price/stock API feeds.
- **Detection Rule:** Assert live API feed verification for any pricing, discount, stock, or shipping claims.
- **Prevention Rule:** Seasonal Commercial Claim Gate: Prohibit unsupported pricing, sale, stock urgency, or shipping claims.
- **Regression Test:** Commercial claim scanner asserting 0 unevidenced discount or urgency statements.

---

### Pattern FP-055: Commercial Identity Drift
- **Symptom:** Commercial data (price, rating, image, URL) extracted for Product A becomes associated with a different ASIN or product candidate.
- **Root Cause:** Ingestion pipeline failed to maintain strict identity parity across candidate fields.
- **Why Previous QA Missed It:** QA evaluated text content without verifying ASIN-to-field parity across the record.
- **Detection Rule:** Assert 100% identity parity across `PRODUCT NAME`, `ASIN`, `MARKETPLACE`, `DESTINATION URL`, `IMAGE`, and `VARIANT`.
- **Prevention Rule:** Commercial Identity Parity Gate: All candidate commercial fields MUST remain strictly bound to the verified ASIN.
- **Regression Test:** Commercial identity scanner asserting field-level parity on candidate records.

---

### Pattern FP-056: Marketplace Substitution
- **Symptom:** Amazon US and Amazon India product candidate data, Associate tags, or marketplace URLs are silently mixed or substituted.
- **Root Cause:** Pipeline failed to enforce marketplace isolation tags (`AMAZON_US` vs `AMAZON_IN`).
- **Why Previous QA Missed It:** Link check verified presence of `amazon.` URL without checking TLD or Associate tag matching.
- **Detection Rule:** Assert marketplace tag matching expected target market (`AMAZON_US` with `elevateliv05f-20`; `AMAZON_IN` with `elevatelivi08-21`).
- **Prevention Rule:** Marketplace Isolation Gate: US and India commercial records MUST NEVER be silently mixed or substituted.
- **Regression Test:** Marketplace isolation auditor flagging mismatched TLDs or Associate tags.

---

### Pattern FP-057: Stale Price Presentation
- **Symptom:** Outdated price data is presented as current verified pricing in downstream content.
- **Root Cause:** Content generator extracted price from historical observation without checking `PRICE_OBSERVED_AT` timestamp.
- **Why Previous QA Missed It:** Price value was validated as non-null without evaluating timestamp freshness.
- **Detection Rule:** Assert `PRICE_OBSERVED_AT` timestamp freshness or mark as `PRICE_UNVERIFIED`.
- **Prevention Rule:** Price Verification Gate: Unverified or stale prices MUST NEVER be presented as current verified prices.
- **Regression Test:** Price freshness scanner flagging outdated price assertions.

---

### Pattern FP-058: Availability Overclaim
- **Symptom:** Historical availability observation is presented as current live stock status (e.g. "In Stock Now").
- **Root Cause:** Conflated a past HTTP response or scrape observation with real-time inventory verification.
- **Why Previous QA Missed It:** Candidate status check evaluated non-null availability text without auditing verification age.
- **Detection Rule:** Assert `AVAILABILITY_VERIFIED_AT` timestamp or set status to `UNKNOWN`/`STALE`.
- **Prevention Rule:** Availability Verification Gate: Availability claims require current supporting evidence.
- **Regression Test:** Availability timestamp auditor checking stock claim recency.

---

### Pattern FP-059: Variant Contamination
- **Symptom:** Images, dimensions, or price of one product variant (e.g. Walnut Finish, Large) are assigned to another variant (e.g. Oak Finish, Small).
- **Root Cause:** Failed to track variant-level specifications during candidate data ingestion.
- **Why Previous QA Missed It:** Candidate record validated main product identity without checking variant-level consistency.
- **Detection Rule:** Assert variant identity match across candidate image, ASIN, and specification fields.
- **Prevention Rule:** Variant Consistency Gate: Variant-specific data MUST remain associated strictly with the verified variant.
- **Regression Test:** Variant parity scanner flagging cross-variant specification mismatches.

---

### Pattern FP-060: Image Identity vs Licensing Conflation
- **Symptom:** System assumes that confirming an image depicts the correct product candidate (`IMAGE_IDENTITY_STATUS: VERIFIED`) implies legal commercial reuse authorization (`IMAGE_RIGHTS_STATUS: AUTHORIZED`).
- **Root Cause:** Conflated visual product verification with copyright license verification.
- **Why Previous QA Missed It:** QA verified image-product visual match without checking license provenance class.
- **Detection Rule:** Assert separate tracking for `IMAGE_IDENTITY_STATUS` and `IMAGE_RIGHTS_STATUS`.
- **Prevention Rule:** Image Rights Separation Gate: Image product identity and image licensing status MUST be tracked separately.
- **Regression Test:** Image provenance auditor asserting explicit licensing metadata alongside visual identity.

---

### Pattern FP-061: HTTP-200 Identity Assumption
- **Symptom:** Successful HTTP 200 response from a destination URL is treated as proof that the URL points to the correct candidate product and ASIN.
- **Root Cause:** Equated server reachability (200 OK) with factual product identity parity.
- **Why Previous QA Missed It:** Automated link checker validated HTTP status code without parsing destination ASIN or page title.
- **Detection Rule:** Assert destination page ASIN/title parity beyond HTTP status code validation.
- **Prevention Rule:** Destination Verification Protocol: HTTP 200 alone is NOT proof of product identity parity.
- **Regression Test:** Destination identity scanner parsing target page ASINs to confirm link parity.

---

### Pattern FP-062: Promotion Persistence
- **Symptom:** Expired deal, coupon, or sale banner data remains in downstream content as an active promotional offer.
- **Root Cause:** Failed to attach or check expiration timestamps on promotional data (`PROMOTION_OBSERVED_AT`).
- **Why Previous QA Missed It:** Content check validated deal text presence without auditing promotion expiration status.
- **Detection Rule:** Assert `PROMOTION_OBSERVED_AT` freshness or set to `PROMOTION_EXPIRED`.
- **Prevention Rule:** Promotion Freshness Gate: Expired or unverified promotions MUST NOT be presented as active commercial offers.
- **Regression Test:** Promotion freshness auditor flagging unverified or expired promotional claims.

---

### Pattern FP-063: Opaque Opportunity Score
- **Symptom:** System outputs an opportunity priority score without exposing underlying dimensional evidence or weighting components.
- **Root Cause:** Prioritization model hid calculation logic behind a single black-box numerical score.
- **Why Previous QA Missed It:** QA validated score presence without checking dimension-level breakdown.
- **Detection Rule:** Assert exposure of raw scores, dimension weights, component contributions, and unknown fields.
- **Prevention Rule:** Explainable Opportunity Assessment Gate: Every priority assessment MUST expose its underlying dimensions and evidence sources.
- **Regression Test:** Opportunity score auditor verifying component breakdown exposure.

---

### Pattern FP-064: False Precision
- **Symptom:** Presenting a pseudo-scientific score (e.g. `87.42/100` or `94.18%`) that implies precision beyond what empirical evidence supports.
- **Root Cause:** Generated floating-point scores from qualitative or sparse signal inputs.
- **Why Previous QA Missed It:** QA evaluated numerical output format without auditing evidence precision justification.
- **Detection Rule:** Assert rounding of scores to broad bands (e.g. 85 / 100) and explicit confidence ratings.
- **Prevention Rule:** False Precision Prevention Gate: Numerical scores MUST NOT imply unsupported certainty.
- **Regression Test:** Score precision scanner flagging unsupported decimal precision on qualitative scores.

---

### Pattern FP-065: Unknown-as-Zero Bias
- **Symptom:** Missing or unverified optional signals (e.g. unverified brand seller or missing keyword difficulty) are automatically treated as zero points, penalizing viable opportunities.
- **Root Cause:** Algorithm converted `UNKNOWN` fields to zero in scoring calculations.
- **Why Previous QA Missed It:** Missing optional fields caused overall score drop without flagging `UNKNOWN` status.
- **Detection Rule:** Assert preservation of `UNKNOWN` status; exclude unverified optional fields from zero penalty.
- **Prevention Rule:** Unknown Preservation Gate: Missing evidence MUST remain `UNKNOWN` and MUST NOT be converted to zero.
- **Regression Test:** Score calculator test verifying `UNKNOWN` signal neutral handling.

---

### Pattern FP-066: Trend/Demand Score Conflation
- **Symptom:** Social trend momentum and search demand intent are collapsed into a single metric, obscuring difference between visual interest and purchase intent.
- **Root Cause:** Conflated trend trajectory with search demand volume.
- **Why Previous QA Missed It:** Scoring model evaluated combined trend/demand metric without checking separate dimensions.
- **Detection Rule:** Assert explicit separation of `TREND_MOMENTUM` and `DEMAND_EVIDENCE` dimensions.
- **Prevention Rule:** Trend/Demand Separation Gate: Trend trajectory and search demand MUST remain separate dimensions.
- **Regression Test:** Scoring dimension scanner asserting decoupled trend and demand values.

---

### Pattern FP-067: Commercial Dominance Bias
- **Symptom:** A product topic with high affiliate payout but weak editorial value or poor niche fit is assigned `HIGH PRIORITY`.
- **Root Cause:** Prioritization logic weighted commercial affiliate validity above editorial retention and niche standards.
- **Why Previous QA Missed It:** Prioritization check evaluated commercial validity without auditing editorial suitability.
- **Detection Rule:** Assert that commercial validity cannot independently elevate low-editorial-value topics to `HIGH PRIORITY`.
- **Prevention Rule:** Commercial/Editorial Separation Gate: Commercial validity MUST NOT independently dictate editorial priority.
- **Regression Test:** Opportunity auditor checking editorial value and niche fit gates on high-priority topics.

---

### Pattern FP-068: Content/Product Opportunity Conflation
- **Symptom:** High product category search interest is treated as automatic proof that a new standalone article should be created.
- **Root Cause:** Conflated commercial product demand with necessity for a standalone editorial page.
- **Why Previous QA Missed It:** System recommended new page creation for every high-demand product category without checking existing site coverage or editorial depth.
- **Detection Rule:** Assert separation of `CONTENT_OPPORTUNITY` and `PRODUCT_OPPORTUNITY` classifications.
- **Prevention Rule:** Content vs Product Opportunity Decoupling: Product category demand must be evaluated against existing site coverage before recommending new page creation.
- **Regression Test:** Handoff auditor verifying existing site coverage checks before new article recommendation.

---

### Pattern FP-069: Repetition Blindness
- **Symptom:** The exact same product candidate or category is repeatedly recommended across multiple articles without visibility or tracking.
- **Root Cause:** Ingestion and recommendation pipeline lacked cross-article portfolio repetition tracking.
- **Why Previous QA Missed It:** QA evaluated single-article quality without auditing site-wide or cluster-wide ASIN concentration.
- **Detection Rule:** Assert portfolio tracking of candidate ASINs across articles and clusters.
- **Prevention Rule:** Portfolio Identity Preservation Gate: Portfolio records MUST track product identity and repetition across articles.
- **Regression Test:** Repetition scanner flagging unacknowledged multi-article ASIN repetition.

---

### Pattern FP-070: Artificial Diversity
- **Symptom:** Unrelated, visually clashing, or functionally inappropriate products are introduced to an article solely to satisfy a rigid category count or diversity metric.
- **Root Cause:** System prioritized artificial category counts over room composition coherence or niche style fit.
- **Why Previous QA Missed It:** Diversity audit checked category count without verifying aesthetic or functional room coherence.
- **Detection Rule:** Assert room and style coherence before introducing alternative product categories.
- **Prevention Rule:** Artificial Diversity Prevention Gate: Unrelated products MUST NOT be introduced solely to increase category counts.
- **Regression Test:** Room composition auditor checking style and room coherence on diverse product sets.

---

### Pattern FP-071: Contextual Reuse Misclassification
- **Symptom:** A valid product recommendation (e.g. versatile tension rod or classic task lamp) is rejected as duplicate solely because it appeared in an earlier article with a different intent.
- **Root Cause:** Failed to evaluate article intent, room context, and editorial purpose when auditing product reuse.
- **Why Previous QA Missed It:** Over-strict repetition rule penalized ASIN reuse without checking contextual differentiation.
- **Detection Rule:** Assert evaluation of article intent, room context, and problem class during reuse audit.
- **Prevention Rule:** Contextual Reuse Gate: Previously recommended products MUST NOT be rejected solely because they were used before.
- **Regression Test:** Reuse classifier test verifying `CONTEXTUAL REUSE` validation across distinct contexts.

---

### Pattern FP-072: Category Concentration Blindness
- **Symptom:** General multi-category guide becomes dominated by one product category (e.g. 8 lamps in a general living room refresh guide) without detection.
- **Root Cause:** Failed to evaluate category concentration relative to article intent.
- **Why Previous QA Missed It:** Selection evaluated individual product quality without auditing total category distribution.
- **Detection Rule:** Assert category concentration tracking across multi-category guides.
- **Prevention Rule:** Category Concentration Detection Gate: Repeated product categories MUST be visible at article and cluster levels.
- **Regression Test:** Category distribution scanner flagging overconcentrated categories in general guides.

---

### Pattern FP-073: Brand Concentration Blindness
- **Symptom:** Single commercial brand or seller dominates >50% of an article's recommendations without explicit editorial justification.
- **Root Cause:** Recommendation pipeline selected candidates from single-brand feeds without auditing brand concentration.
- **Why Previous QA Missed It:** Article check validated individual ASIN integrity without checking overall brand distribution.
- **Detection Rule:** Assert brand concentration tracking; flag heavy concentration (>50%) for review.
- **Prevention Rule:** Brand Concentration Detection Gate: Repeated brand placements MUST be surfaced where evidence indicates heavy concentration.
- **Regression Test:** Brand concentration auditor flagging unacknowledged brand dominance in multi-item guides.

---

### Pattern FP-074: Shop-The-Look Diversity Failure
- **Symptom:** Shop The Look recommendations collapse into functionally redundant items (e.g. 5 decorative objects and zero seating/lighting anchors).
- **Root Cause:** Failed to audit product role balance (Primary Anchor vs Supporting Accents) in room compositions.
- **Why Previous QA Missed It:** Module check verified 5 product links without auditing compositional role balance.
- **Detection Rule:** Assert balanced product role distribution (`PRIMARY`, `SECONDARY`, `SUPPORTING`) in Shop The Look compositions.
- **Prevention Rule:** Shop-The-Look Composition Gate: Shop The Look MUST maintain realistic room coherence and balanced product roles.
- **Regression Test:** Composition role auditor verifying functional anchor presence in Shop The Look modules.

---

### Pattern FP-075: Cluster Cannibalization
- **Symptom:** Multiple articles within a content cluster target identical search keywords and recommend identical product sets without contextual differentiation.
- **Root Cause:** Cluster content creation duplicated existing article scope without establishing unique search or problem intent.
- **Why Previous QA Missed It:** Article checks audited pages independently without checking cluster-level cannibalization.
- **Detection Rule:** Assert cluster overlap tracking across intent, problem, room, and product sets.
- **Prevention Rule:** Cluster Differentiation Gate: Cluster articles sharing candidate products MUST maintain distinct search or problem intent.
- **Regression Test:** Cluster cannibalization scanner flagging un-differentiated cluster articles.

---

### Pattern FP-076: Age Equals Obsolescence
- **Symptom:** A high-quality, fully available, timeless product recommendation is flagged for replacement solely because it was added >12 months ago.
- **Root Cause:** Freshness evaluator treated calendar age as proof of product obsolescence.
- **Why Previous QA Missed It:** System checked `creation_date` age threshold without validating current product availability, physical identity, rating, or aesthetic fit.
- **Detection Rule:** Assert that publication age alone cannot trigger `REPLACE` status when item remains active, available, and highly rated.
- **Prevention Rule:** Age Is Not Obsolescence Gate: Product age alone MUST NOT trigger product replacement or removal.
- **Regression Test:** Freshness scanner verifying retention of high-performing evergreen products regardless of listing age.

---

### Pattern FP-077: Stale Data Equals Bad Product
- **Symptom:** A valid product recommendation is removed from an article because an automated check encountered a stale price timestamp or temporary API timeout.
- **Root Cause:** Conflated unverified data status (`STALE`/`UNKNOWN`) with confirmed product invalidity or unavailability.
- **Why Previous QA Missed It:** Evaluator assigned `REMOVE` or `REPLACE` state to unverified records instead of routing to `REVERIFY`.
- **Detection Rule:** Assert routing of stale or missing timestamp records to `REVERIFY` rather than direct replacement or deletion.
- **Prevention Rule:** Reverification Before Replacement Gate: Stale or missing commercial data MUST trigger reverification before initiating replacement.
- **Regression Test:** Freshness router verifying `REVERIFY` action state on stale timestamp records.

---

### Pattern FP-078: Silent Product Substitution
- **Symptom:** A product recommendation link or ASIN is silently replaced with a different item without auditing whether the replacement matches the original article's context, room style, or functional problem role.
- **Root Cause:** Replaced out-of-stock ASIN with arbitrary alternative without establishing baseline role and contextual suitability.
- **Why Previous QA Missed It:** QA verified link functionality without checking whether replacement product fit original article copy and aesthetic intent.
- **Detection Rule:** Assert baseline role matching (`replacement_baseline`) before executing ASIN replacement in published articles.
- **Prevention Rule:** No Silent Substitution Gate: ASIN replacements MUST preserve full baseline requirements and log explicit migration rationale.
- **Regression Test:** Replacement auditor flagging unverified ASIN swaps lacking baseline role equivalence.

---

### Pattern FP-079: Seasonal Premature Removal
- **Symptom:** A seasonal product guide item (e.g. holiday throw blanket) is completely removed from an article during off-season months, breaking article layout and internal references.
- **Root Cause:** Evaluator treated off-season timing as product invalidity rather than temporary seasonal cycle.
- **Why Previous QA Missed It:** Freshness check evaluated active season alignment without preserving evergreen content structure.
- **Detection Rule:** Assert `SEASONAL_PAUSE` classification instead of `REMOVE` for valid off-season items in evergreen articles.
- **Prevention Rule:** Seasonal Retention Gate: Off-season products MUST NOT be removed if seasonally evergreen; mark `SEASONAL_PAUSE` instead.
- **Regression Test:** Seasonal freshness scanner verifying `SEASONAL_PAUSE` state for off-season products in evergreen guides.

---

### Pattern FP-080: Trend Expiration Misclassification
- **Symptom:** A functional product (e.g. minimalist task lamp) is marked for immediate removal because social trend momentum for its aesthetic sub-category declined slightly.
- **Root Cause:** Equated social trend phase decline (`DECLINING`) with loss of core problem-solving utility.
- **Why Previous QA Missed It:** Freshness check prioritized trend decay over problem/solution utility retention.
- **Detection Rule:** Assert separation of trend phase decay from problem-solving utility retention.
- **Prevention Rule:** Trend/Obsolescence Separation Gate: A declining trend signal MUST NOT cause instant product removal if problem-solving utility remains high.
- **Regression Test:** Utility auditor checking retention of problem-solving products despite trend phase changes.

---

### Pattern FP-081: Editorial Staleness Blindness
- **Symptom:** Product price or features changed significantly on retailer page, but surrounding article text still references old price points ("Under $25") or outdated feature claims.
- **Root Cause:** Updated product link/data without auditing surrounding editorial copy for factual parity.
- **Why Previous QA Missed It:** Commercial validation updated link/price without triggering editorial prose review.
- **Detection Rule:** Assert editorial prose check (`ARTICLE_CONTEXT_FRESHNESS`) when product price bracket or specification changes.
- **Prevention Rule:** Editorial Context Freshness Gate: Price or spec updates MUST verify that surrounding article prose remains factually true.
- **Regression Test:** Contextual text auditor flagging price-bracket mismatches in article prose.

---

### Pattern FP-082: Alternative Without Baseline
- **Symptom:** Product replacement search returns candidates that match generic search keywords but fail to fulfill the specific product role (e.g. replacing a Primary Seating Anchor with an Accent Pillow).
- **Root Cause:** Dispatched alternative search to product research without passing the original product's baseline role, price bracket, and room function.
- **Why Previous QA Missed It:** Research subagent searched for generic replacements without baseline constraint enforcement.
- **Detection Rule:** Assert `replacement_baseline` requirements (`product_role`, `style_tag`, `price_bracket`, `key_problem_solved`) on alternative research tasks.
- **Prevention Rule:** Alternative Baseline Preservation Gate: Replacement candidates MUST be evaluated against the original product's defined baseline role and context.
- **Regression Test:** Alternative candidate auditor checking role parity against baseline parameters.

---

### Pattern FP-083: Product-First Editorial Flow
- **Symptom:** Commercial products are introduced at the start of an article or section before explaining the reader's problem, principles, or solution context.
- **Root Cause:** Editorial layout placed affiliate product blocks prematurely to maximize above-the-fold commercial visibility.
- **Why Previous QA Missed It:** QA verified product link functionality without auditing narrative flow sequence.
- **Detection Rule:** Assert that problem context and solution principles precede commercial product presentations in explanatory guides.
- **Prevention Rule:** Problem-Before-Product Gate: Relevant problem/context MUST precede commercial product presentation where article intent requires explanation.
- **Regression Test:** Flow auditor flagging commercial product blocks preceding problem explanation.

---

### Pattern FP-084: Affiliate Catalogization
- **Symptom:** An editorial article degenerates into a repetitive sequence of commercial product blocks with minimal narrative prose or educational value.
- **Root Cause:** Product integration pipeline inserted product cards into every section without section purpose justification.
- **Why Previous QA Missed It:** System checked product quality and link compliance without auditing overall article prose-to-product balance.
- **Detection Rule:** Assert section purpose justification before placing commercial product blocks; enforce zero-product option for explanatory sections.
- **Prevention Rule:** Editorial Purpose Gate: Every integrated product MUST have an explicit editorial purpose contributing to reader understanding.
- **Regression Test:** Catalogization scanner flagging articles with high product block concentration lacking explanatory prose.

---

### Pattern FP-085: Contextless Product Card
- **Symptom:** A product card is rendered with title, image, and CTA, but lacks any contextual explanation of why it fits the section or what problem it solves.
- **Root Cause:** Failed to enforce required product explanation fields (`PROBLEM SOLVED`, `WHY IT FITS`, `TRADEOFF`) during integration.
- **Why Previous QA Missed It:** Link check verified ASIN and target URL without auditing surrounding contextual copy.
- **Detection Rule:** Assert presence of explicit contextual rationale (`WHY IT FITS`) on commercial product cards.
- **Prevention Rule:** Contextual Explanation Gate: Commercial product blocks MUST include explicit contextual rationale explaining why the item fits the section.
- **Regression Test:** Product card auditor flagging contextless product widgets lacking explanatory prose.

---

### Pattern FP-086: CTA Overdensity
- **Symptom:** Multiple commercial CTAs ("View Product", "Shop Now", "Check Price") clutter a single short section or paragraph, interrupting reading rhythm.
- **Root Cause:** Placed commercial CTAs on both inline text links, image overlays, and product cards within a small viewport area.
- **Why Previous QA Missed It:** Link check verified individual link validity without checking section CTA concentration.
- **Detection Rule:** Assert max 1 primary commercial CTA per product integration block; prevent CTA clutter.
- **Prevention Rule:** CTA Context Gate: CTAs MUST follow meaningful product context and maintain visual breathing room.
- **Regression Test:** CTA density scanner flagging redundant CTAs within single section viewports.

---

### Pattern FP-087: Role Inflation
- **Symptom:** Every product recommended in an article is classified and formatted as a "Primary Solution" hero block.
- **Root Cause:** Failed to apply product role taxonomy (`PRIMARY`, `SECONDARY`, `SUPPORTING`, `ACCENT`, `ALTERNATIVE`, `EXAMPLE`).
- **Why Previous QA Missed It:** Selection logic assigned default primary styling to all candidate products.
- **Detection Rule:** Assert role diversity; enforce max 1 `PRIMARY_SOLUTION` per section.
- **Prevention Rule:** Product Role Gate: Product role MUST correspond strictly to the section purpose and maintain realistic role hierarchy.
- **Regression Test:** Role hierarchy auditor flagging articles with inflated primary product roles.

---

### Pattern FP-088: Product Sequence Bias
- **Symptom:** Products within a multi-item guide are ordered by price, affiliate commission tier, or popularity rather than editorial logic.
- **Root Cause:** Recommendation pipeline sorted product output by commercial metrics rather than problem/solution sequence.
- **Why Previous QA Missed It:** Compliance check verified product validity without checking sequence justification.
- **Detection Rule:** Assert editorial sequence rationale (`PRIMARY` $\rightarrow$ `SUPPORTING` $\rightarrow$ `ALTERNATIVE`) over commercial metric ordering.
- **Prevention Rule:** Editorial Sequence Gate: Product sequencing MUST reflect editorial logic rather than commercial commission or price sorting.
- **Regression Test:** Sequence auditor verifying editorial logic rationale in product lists.

---

### Pattern FP-089: Editorial/Commercial Blending
- **Symptom:** Commercial affiliate CTAs or purchase links are visually formatted to look like neutral informational cross-links or references.
- **Root Cause:** Mislabeled commercial action buttons as editorial reading links.
- **Why Previous QA Missed It:** Link validator checked URL parameters without auditing visual presentation parity.
- **Detection Rule:** Assert clear visual separation between neutral editorial prose and commercial CTAs.
- **Prevention Rule:** Commercial/Editorial Separation Gate: Commercial actions MUST remain visually and textually distinguishable from neutral editorial explanation.
- **Regression Test:** Blending scanner flagging ambiguous commercial CTA presentation.

---

### Pattern FP-090: Mobile Product Information Loss
- **Symptom:** Key product context, tradeoffs, or scale notes visible on desktop product cards are hidden or truncated on mobile screens.
- **Root Cause:** Responsive layout CSS hid secondary product details on small viewports without mobile accordion/fallback.
- **Why Previous QA Missed It:** QA verified desktop card layout without inspecting mobile breakpoint context rendering.
- **Detection Rule:** Assert 100% product information parity between desktop and mobile viewports.
- **Prevention Rule:** Mobile Information Parity Gate: Essential product context, scale notes, and tradeoffs MUST remain accessible on mobile viewports.
- **Regression Test:** Mobile context auditor verifying full text accessibility at 375px viewport.

---

### Pattern FP-099: Click Equals Conversion
- **Symptom:** Outbound affiliate clicks are reported or treated as confirmed purchases or revenue.
- **Root Cause:** Conflated top-of-funnel interaction telemetry (`PRODUCT_INTERACTION`) with actual commercial transaction reports (`COMMERCIAL_OUTCOME`).
- **Why Previous QA Missed It:** Analytics reporter evaluated click counts without checking Amazon Associates order verification data.
- **Detection Rule:** Assert clear separation between outbound clicks and verified orders/revenue.
- **Prevention Rule:** Commercial Outcome Verification Gate: Affiliate clicks MUST NOT be presented or reported as confirmed orders or revenue without verified commercial data.
- **Regression Test:** Telemetry auditor flagging unverified conversion claims based solely on click counts.

---

### Pattern FP-100: Small Sample Overconfidence
- **Symptom:** Broad editorial or product decisions are made based on tiny observation samples (e.g. 5 clicks or 50 sessions).
- **Root Cause:** Applied performance classification models to insufficient sample sizes without sample adequacy gates.
- **Why Previous QA Missed It:** Evaluator checked percentage rates without validating sample size thresholds.
- **Detection Rule:** Assert `SAMPLE_SIZE` evaluation; assign `INSUFFICIENT_EVIDENCE` state to small sample datasets.
- **Prevention Rule:** Sample Adequacy Gate: Low sample sizes MUST remain classified as `INSUFFICIENT_EVIDENCE` and MUST NOT trigger global editorial changes.
- **Regression Test:** Sample size validator flagging conclusions drawn from small session/click samples.

---

### Pattern FP-101: Correlation Equals Causation
- **Symptom:** An observed performance shift (e.g. higher clicks after layout update) is presented as proven proof that the layout change caused the improvement.
- **Root Cause:** Ignored external confounding variables (seasonality, Pinterest traffic spikes, search ranking changes).
- **Why Previous QA Missed It:** Evaluator logged single-variable cause without tracking external traffic/seasonality context.
- **Detection Rule:** Assert hypothesis labeling (`HYPOTHESIZED`) for unverified causal explanations.
- **Prevention Rule:** Observation/Inference Separation Gate: Observed metrics and causal explanations MUST remain strictly separated into explicit evidence states.
- **Regression Test:** Causality auditor flagging unverified causal claims in performance reports.

---

### Pattern FP-102: Raw Count Comparison
- **Symptom:** Products or articles are declared "top performers" based on raw click counts without accounting for traffic exposure differences.
- **Root Cause:** Compared absolute click numbers between a high-traffic guide (10k sessions) and a niche article (500 sessions).
- **Why Previous QA Missed It:** System sorted performance lists by raw click volume instead of traffic-normalized click rates (CTR).
- **Detection Rule:** Assert traffic normalization (`CTR`/`INTERACTION_RATE`) and contextual traffic volume preservation during comparisons.
- **Prevention Rule:** Contextual Comparison Gate: Performance comparisons MUST preserve traffic volume, search intent, timeframe, placement, and device context.
- **Regression Test:** Comparison auditor flagging un-normalized raw count comparisons across disparate traffic levels.

---

### Pattern FP-103: Metric Conflation
- **Symptom:** Traffic, engagement, product interaction, and commercial outcomes are combined into a single composite score, masking root-cause performance signals.
- **Root Cause:** Created arbitrary composite performance scores that blended unrelated telemetry dimensions.
- **Why Previous QA Missed It:** Evaluator checked single composite score without auditing individual metric family states.
- **Detection Rule:** Assert independent reporting of the 4 metric families (`TRAFFIC`, `ENGAGEMENT`, `PRODUCT_INTERACTION`, `COMMERCIAL`).
- **Prevention Rule:** Metric Separation Gate: Traffic, engagement, product interaction, and commercial outcomes MUST remain separate evaluation dimensions.
- **Regression Test:** Metric family auditor flagging blended composite scores lacking dimension breakdown.

---

### Pattern FP-104: Historical Data Misuse
- **Symptom:** Outdated performance telemetry (e.g. clicks from 12 months ago) is treated as proof of current user behavior.
- **Root Cause:** Evaluated performance logs without validating timestamp recency or observation window boundaries.
- **Why Previous QA Missed It:** System checked performance logs without enforcing freshness window bounds (`OBSERVED_AT`).
- **Detection Rule:** Assert timestamp freshness check (`OBSERVATION_WINDOW`); flag stale telemetry as `STALE`.
- **Prevention Rule:** Performance Freshness Gate: Historical observations MUST include an explicit observation window and freshness state.
- **Regression Test:** Telemetry recency auditor flagging outdated performance logs used for current decisions.

---

### Pattern FP-105: Single-Article Generalization
- **Symptom:** A performance pattern observed on a single article (e.g. Shop The Look clicks on a Pinterest guide) is applied as a universal rule across all site content.
- **Root Cause:** Extrapolated single-article findings into global system rules without cross-article corroboration.
- **Why Previous QA Missed It:** Rule engine adopted single-test learnings without cross-intent verification.
- **Detection Rule:** Assert cross-article corroboration before generalizing performance learnings to global skill rules.
- **Prevention Rule:** Generalization Gate: Single-article or single-product performance observations MUST NOT become universal rules without corroborating evidence across multiple articles.
- **Regression Test:** Rule evolution auditor flagging global rule proposals derived from single-article tests.

---

### Pattern FP-106: Performance Equals Product Quality
- **Symptom:** A product receiving high click volume is automatically assumed to be superior in physical quality or aesthetic craftsmanship.
- **Root Cause:** Equated top-of-funnel user interest/curiosity with physical product quality validation.
- **Why Previous QA Missed It:** Recommendation system elevated candidate quality rating based solely on click telemetry.
- **Detection Rule:** Assert separation of `OBSERVED_INTEREST_SIGNAL` from physical product quality evidence (`elevate-product-research-intelligence`).
- **Prevention Rule:** Product Quality Separation Gate: Observed interaction MUST NOT be interpreted as proof of physical product quality or customer satisfaction.
- **Regression Test:** Quality research auditor flagging quality rating increases based solely on click volume.

---

### Pattern FP-107: Analytics-Driven Productification
- **Symptom:** Products are inserted into educational, non-commercial article sections purely because analytics indicate high overall page click activity.
- **Root Cause:** Allowed performance feedback to override section purpose guidelines and zero-product permissions.
- **Why Previous QA Missed It:** Optimization tool recommended product cards for zero-product sections based on site-wide CTR trends.
- **Detection Rule:** Assert section purpose and zero-product section preservation during performance updates.
- **Prevention Rule:** Editorial Value Preservation Gate: Analytics optimization MUST NOT force commercial product insertion into useful non-commercial sections.
- **Regression Test:** Zero-product auditor flagging commercial product insertions into educational sections driven by analytics.

---

### Pattern FP-108: Experiment Without Isolation
- **Symptom:** An editorial experiment alters copy, layout, imagery, and CTAs simultaneously, making it impossible to identify which variable caused the observed outcome.
- **Root Cause:** Executed multi-variable design overhauls under the label of A/B experimentation.
- **Why Previous QA Missed It:** Test runner logged experiment results without auditing variable isolation.
- **Detection Rule:** Assert single-variable isolation in controlled editorial experiments.
- **Prevention Rule:** Experiment Isolation Gate: Editorial experiments MUST define a single tested variable, explicit control baseline, and observation window.
- **Regression Test:** Experiment auditor flagging multi-variable test treatments lacking isolation controls.


---

### Pattern FP-091: Article/Product Disconnect
- **Symptom:** Selected products across an article collectively fail to address the article's core problem, intent, or target audience.
- **Root Cause:** Product selection was performed on isolated keywords without evaluating whole-article problem coherence.
- **Why Previous QA Missed It:** QA validated individual product quality without auditing article-level problem/solution alignment.
- **Detection Rule:** Assert that whole-article product ensemble directly supports primary reader problem and editorial intent.
- **Prevention Rule:** Article/Product Coherence Gate: The complete product set MUST support the article's primary editorial intent and documented reader problems.
- **Regression Test:** Article coherence auditor flagging product sets disconnected from primary article intent.

---

### Pattern FP-092: Product Coverage Gap
- **Symptom:** Major solution mechanisms described in an article remain unsupported by products where high-quality product recommendations would add genuine reader value.
- **Root Cause:** Failed to perform problem coverage audit across all article sections.
- **Why Previous QA Missed It:** QA checked existing product blocks without auditing uncovered solution opportunities.
- **Detection Rule:** Assert problem coverage check (`COVERED`/`UNCOVERED`) across all solution sections.
- **Prevention Rule:** Problem Coverage Gate: Meaningful product-supported solutions MUST correspond to documented reader problems where products add genuine value.
- **Regression Test:** Coverage gap scanner flagging uncovered solution mechanisms in product-friendly guides.

---

### Pattern FP-093: Commercial Density Imbalance
- **Symptom:** Affiliate elements (product cards, CTAs, Shop The Look, comparison tables) overwhelm or severely under-support an article relative to its intent.
- **Root Cause:** Applied static product placement rules without evaluating article length, intent, and visual rhythm.
- **Why Previous QA Missed It:** System verified individual product compliance without auditing total commercial element density.
- **Detection Rule:** Assert commercial density evaluation (`LOW`/`BALANCED`/`HIGH`/`OVERLOADED`) based on article intent and length.
- **Prevention Rule:** Commercial Density Context Gate: Commercial density MUST be evaluated relative to article intent and total editorial prose value.
- **Regression Test:** Density balance scanner flagging `OVERLOADED` or `COMMERCIAL_HEAVY` articles lacking intent justification.

---

### Pattern FP-094: Product Flow Interruption
- **Symptom:** Commercial product blocks interrupt explanatory prose or break reader comprehension rhythm.
- **Root Cause:** Inserted product cards in the middle of complex educational explanations rather than after solution principles.
- **Why Previous QA Missed It:** Section check verified product presence without auditing narrative sequence continuity.
- **Detection Rule:** Assert problem/principle explanation precedes product placement; enforce narrative continuity.
- **Prevention Rule:** Product Flow Continuity Gate: Product placement MUST NOT interrupt necessary explanatory context or educational narrative flow.
- **Regression Test:** Narrative flow auditor flagging product blocks interrupting multi-paragraph explanations.

---

### Pattern FP-095: Shop-The-Look Drift
- **Symptom:** Shop The Look module features products that are visually, stylistically, or functionally disconnected from the article's actual recommendations.
- **Root Cause:** Populated Shop The Look from generic category feeds rather than deriving it directly from article advice.
- **Why Previous QA Missed It:** Module check verified product link validity without auditing cross-reference coherence with article text.
- **Detection Rule:** Assert Shop The Look products originate from or directly complement article recommendations.
- **Prevention Rule:** Shop-The-Look Source Gate: Shop The Look products MUST originate from or clearly support the article's editorial system.
- **Regression Test:** Shop The Look coherence auditor flagging products absent from or unsupported by article prose.

---

### Pattern FP-096: Repeated Purpose Product
- **Symptom:** The exact same product ASIN appears multiple times across an article without serving a materially different purpose or section context.
- **Root Cause:** Multi-section recommendation generator selected top candidate repeatedly without repetition tracking.
- **Why Previous QA Missed It:** Section check verified ASIN validity independently for each block.
- **Detection Rule:** Assert unique section purpose for repeated product appearances (`JUSTIFIED` vs `REDUNDANT`).
- **Prevention Rule:** Repeated Purpose Gate: Repeated products REQUIRE distinct, documented editorial justification for each placement.
- **Regression Test:** Repetition auditor flagging un-justified multi-section ASIN repetition.

---

### Pattern FP-097: Article-Level CTA Saturation
- **Symptom:** Page contains excessive commercial CTAs, creating visual fatigue and high commercial friction even when individual product blocks are valid.
- **Root Cause:** Added CTAs to every image wrap, card, inline link, and summary box across the page.
- **Why Previous QA Missed It:** Compliance check verified individual CTA button syntax without auditing page-wide CTA count.
- **Detection Rule:** Assert page-wide CTA distribution check; prevent CTA saturation.
- **Prevention Rule:** Article CTA Distribution Gate: CTA placement MUST remain contextual and balanced across the full article page.
- **Regression Test:** CTA distribution scanner flagging excessive CTA frequency across published articles.

---

### Pattern FP-098: Desktop-Only Product Context
- **Symptom:** Critical product context, scale notes, or tradeoffs displayed in desktop multi-column cards are hidden or stripped on mobile screens.
- **Root Cause:** Mobile responsive CSS collapsed card details into simple images with buttons, discarding editorial rationale.
- **Why Previous QA Missed It:** Inspection verified desktop layout without auditing mobile responsive context preservation.
- **Detection Rule:** Assert 100% product explanation parity between desktop and 375px mobile viewports.
- **Prevention Rule:** Mobile Product Parity Gate: Essential product context, scale notes, and tradeoffs MUST remain accessible on mobile viewports.
- **Regression Test:** Mobile context auditor verifying full text accessibility at 375px viewport.

---

### Pattern FP-109: Age Equals Content Decay
- **Symptom:** A high-performing, accurate, and evergreen article is flagged for complete rewriting or removal solely because its original publication date is >2 years old.
- **Root Cause:** Content freshness evaluator treated publication timestamp as proof of content decay without checking information accuracy, link validity, or aesthetic fit.
- **Why Previous QA Missed It:** System checked `published_at` age threshold without validating the 20 content freshness dimensions.
- **Detection Rule:** Assert that publication age alone cannot trigger `DECAYING`, `MAJOR_REFRESH`, `CONSOLIDATE`, or `REDIRECT` actions.
- **Prevention Rule:** Age/Decay Separation Gate: Publication age alone MUST NOT trigger content decay classification or major editorial rewrites.
- **Regression Test:** Freshness auditor verifying `CURRENT` or `EVERGREEN` status on aged articles with 100% valid dimensions.

---

### Pattern FP-110: Traffic Decline Equals Content Failure
- **Symptom:** An article experiencing a temporary search impression drop is flagged for immediate deletion or consolidation without evaluating external search algorithm or seasonal factors.
- **Root Cause:** Equated search traffic decline directly with content quality failure or narrative decay.
- **Why Previous QA Missed It:** Evaluator checked single search traffic trajectory without cross-auditing seasonal windows, trend momentum, or competitor movements.
- **Detection Rule:** Assert multi-signal evaluation (`SEARCH_DECAY` + `INTENT_DECAY` + `EDITORIAL_DECAY`) before declaring content failure.
- **Prevention Rule:** Multi-Signal Freshness Gate: Traffic drops alone MUST NOT trigger article consolidation or archiving without corroborating decay signals across dimensions.
- **Regression Test:** Traffic decline auditor verifying multi-dimensional decay verification before action dispatch.

---

### Pattern FP-111: Product Decay Equals Article Decay
- **Symptom:** An entire editorial article is marked as `DECAYING` and scheduled for complete rewriting because embedded product links became stale or out of stock.
- **Root Cause:** Conflated single product listing staleness (`PRODUCT_DECAY`) with entire article prose/narrative obsolescence.
- **Why Previous QA Missed It:** Freshness evaluator assigned `MAJOR_REFRESH` state to articles containing out-of-stock ASINs instead of routing products to `elevate-product-freshness-intelligence`.
- **Detection Rule:** Assert separation of product staleness from prose narrative validity; route product fixes to product freshness skill.
- **Prevention Rule:** Product/Article Decoupling Gate: Product staleness MUST NOT automatically invalidate the surrounding editorial prose or trigger full page rewrites.
- **Regression Test:** Product decay router verifying product replacement routing while preserving article prose state.

---

### Pattern FP-112: Trend Decline Equals Article Removal
- **Symptom:** An educational home design guide (e.g. "Small Bedroom Storage Principles") is deleted because a featured sub-trend (e.g. warm minimalism) lost social search momentum.
- **Root Cause:** Evaluator treated trend phase decline as proof of total article irrelevance rather than localized aesthetic evolution.
- **Why Previous QA Missed It:** Freshness check prioritized trend decay over timeless problem-solving utility.
- **Detection Rule:** Assert preservation of timeless core principles (`EVERGREEN_PROBLEM`) when sub-aesthetic trends shift.
- **Prevention Rule:** Trend/Evergreen Separation Gate: Declining trend momentum MUST NOT cause article removal if core educational problem-solving utility remains valid.
- **Regression Test:** Trend freshness auditor verifying retention of core problem-solving guides despite trend shifts.

---

### Pattern FP-113: Refresh Identity Drift
- **Symptom:** An article refresh operation alters the page URL, deletes original affiliate tracking tags, or shifts primary search intent, destroying existing rankings and attribution.
- **Root Cause:** Executed content refresh without enforcing protected article identity constraints.
- **Why Previous QA Missed It:** Refresh tool updated article text without checking canonical URL, search intent, or ASIN parameter preservation.
- **Detection Rule:** Assert compliance with Protected Article Identity Manifest before committing content refresh changes.
- **Prevention Rule:** Article Identity Preservation Gate: Content refresh operations MUST preserve canonical URLs, target search intent, and affiliate tracking tag parameters.
- **Regression Test:** Identity auditor flagging URL slug or tracking tag mutations during content refresh execution.

---

### Pattern FP-114: Duplicate Consolidation Overreach
- **Symptom:** Two distinct articles with complementary sub-intents (e.g. "Studio Apartment Storage" vs "Small One-Bedroom Storage") are forcibly merged, diluting targeted search rankings.
- **Root Cause:** Consolidation logic flagged keyword overlap without evaluating distinct reader problem contexts and room constraints.
- **Why Previous QA Missed It:** Overlap scanner evaluated headline keyword similarity without auditing contextual intent separation.
- **Detection Rule:** Assert detailed intent and problem differentiation audit before executing 301 consolidation redirects.
- **Prevention Rule:** Consolidation Evidence Gate: Content consolidation MUST require verified intent overlap and cannibalization evidence rather than simple keyword similarity.
- **Regression Test:** Consolidation auditor verifying intent overlap proof prior to merge approval.

---

### Pattern FP-115: Stale Source Persistence
- **Symptom:** An article continues to cite broken external research links (404 errors) or outdated safety standards because prose text was not audited during routine updates.
- **Root Cause:** Performed minor price and product updates without auditing external citation integrity.
- **Why Previous QA Missed It:** Minor refresh pipeline updated product cards without validating embedded external source URLs.
- **Detection Rule:** Assert source link verification (`SOURCE_FRESHNESS`) during article freshness audits.
- **Prevention Rule:** Source Freshness Gate: Articles citing broken external sources or outdated standards MUST trigger `SOURCE_DECAY` and route to `elevate-source-integrity`.
- **Regression Test:** Source auditor flagging dead external citation links during article freshness checks.

---

### Pattern FP-116: Freshness Without Evidence
- **Symptom:** An article timestamp or "Last Updated" metadata tag is bumped to present date without making any substantive editorial, product, or source improvements.
- **Root Cause:** System executed timestamp-bumping routine to spoof search engine freshness signals without actual content work.
- **Why Previous QA Missed It:** QA verified date change without checking content diff or editorial log evidence.
- **Detection Rule:** Assert substantive content diff or verified dimension update before allowing `LAST_EDITORIAL_REVIEW` metadata updates.
- **Prevention Rule:** Evidence-Based Decay Gate: Article metadata freshness dates MUST NOT be updated without documented, evidence-based content improvements.
- **Regression Test:** Freshness metadata validator flagging date updates lacking underlying content modifications.

---

### Pattern FP-117: Fragmented Internal Link Architecture
- **Symptom:** Supporting guides within a cluster exist in isolation without bidirectional internal links connecting them to the cluster pillar or related sub-pages.
- **Root Cause:** Created supporting articles independently without building a strategic internal link graph.
- **Why Previous QA Missed It:** QA audited individual page link syntax without evaluating cluster-level graph completeness.
- **Detection Rule:** Assert bidirectional linking between pillar and supporting guides (`INTERNAL_LINK_STATUS`).
- **Prevention Rule:** Strategic Internal Link Gate: Supporting cluster guides MUST maintain contextual bidirectional links with their pillar page.
- **Regression Test:** Cluster graph auditor flagging unlinked or orphan supporting articles.

---

### Pattern FP-118: Orphan Supporting Article
- **Symptom:** A published cluster article receives zero inbound internal links from the cluster pillar or sibling guides.
- **Root Cause:** Published new subtopic page without updating parent pillar or related guide prose to link to the new asset.
- **Why Previous QA Missed It:** Single-page QA verified outbound link validity without auditing site-wide inbound graph.
- **Detection Rule:** Assert min 2 inbound internal links from relevant cluster pages for every published article.
- **Prevention Rule:** Orphan Prevention Gate: New cluster pages MUST NOT be published without establishing minimum inbound internal links.
- **Regression Test:** Orphan page scanner flagging published articles with zero inbound internal links.

---

### Pattern FP-119: Keyword-Only Cluster Design
- **Symptom:** A content cluster is designed by grouping similar search keywords together into separate pages without evaluating user intent or problem-solving coherence.
- **Root Cause:** Treated keyword lists as automatic blueprints for separate articles.
- **Why Previous QA Missed It:** Evaluated keyword difficulty and search volume without auditing user problem and intent differentiation.
- **Detection Rule:** Assert user intent and problem differentiation before authorizing cluster page expansion.
- **Prevention Rule:** Intent-Based Cluster Gate: Cluster relationships MUST be based on meaningful user intent rather than keyword similarity alone.
- **Regression Test:** Cluster design auditor flagging keyword-driven page creation proposals lacking intent distinction.

---

### Pattern FP-120: Content Gap Inflation
- **Symptom:** Every uncovered keyword or search phrase is declared a "content gap" requiring a brand new standalone article.
- **Root Cause:** Equated missing keyword targets with legitimate reader information needs.
- **Why Previous QA Missed It:** Opportunity scanner flagged missing search queries without checking whether existing pages already satisfied reader intent.
- **Detection Rule:** Assert evidence of an unsatisfied user information need before declaring a content gap.
- **Prevention Rule:** Content Gap Evidence Gate: New article opportunities MUST have verified evidence of a meaningful unsatisfied user information need.
- **Regression Test:** Content gap auditor rejecting missing-keyword proposals satisfied by existing guides.

---

### Pattern FP-121: Pillar Without Supporting Depth
- **Symptom:** A broad pillar page is published that promises a comprehensive guide, but no supporting guides exist to provide deep problem-solving details.
- **Root Cause:** Created a high-level overview page without planning or linking to supporting subtopic content.
- **Why Previous QA Missed It:** Article check verified pillar copy length without auditing cluster graph depth.
- **Detection Rule:** Assert supporting guide mapping (`SUPPORTING_GUIDE`) for foundational pillar topics.
- **Prevention Rule:** Pillar/Support Coherence Gate: Pillar articles MUST maintain clear, active structural relationships with supporting guides.
- **Regression Test:** Pillar auditor flagging overview pillars lacking supporting subtopic guides.

---

### Pattern FP-122: Duplicate Article Creation
- **Symptom:** A new article is created for a topic (e.g. "Small Apartment Living Room Ideas") when an existing article ("Studio Apartment Layout Tips") already satisfies the exact intent.
- **Root Cause:** Failed to evaluate existing site coverage before launching a new article creation task.
- **Why Previous QA Missed It:** Topic intake checked target keyword freshness without searching existing site content graph.
- **Detection Rule:** Assert site-wide coverage evaluation (`EXISTING_COVERAGE_CHECK`) before creating any new page.
- **Prevention Rule:** Existing Coverage Gate: Existing articles MUST be audited for refresh or expansion before recommending a new standalone article.
- **Regression Test:** Duplicate page scanner flagging proposed articles matching existing page intent.

---

### Pattern FP-123: Internal Link Stuffing
- **Symptom:** Paragraphs are cluttered with repetitive internal links forced into sentences without editorial context or user benefit.
- **Root Cause:** Inserted links blindly to satisfy arbitrary internal-link count quotas.
- **Why Previous QA Missed It:** Link checker validated target URL HTTP status without evaluating contextual prose naturalness.
- **Detection Rule:** Assert explicit editorial purpose (`DISCOVERY`, `DEEPENING`, `REFERENCE`, `NEXT_STEP`) for every internal link.
- **Prevention Rule:** Internal Link Purpose Gate: Strategic internal links MUST have an explicit editorial purpose and natural prose placement.
- **Regression Test:** Link density auditor flagging forced or repetitive internal links in body text.

---

### Pattern FP-124: False Cannibalization
- **Symptom:** Two articles sharing a high-level topic (e.g. "Living Room Rugs" and "How to Scale a Rug") are declared as search cannibalization and forcibly merged.
- **Root Cause:** Treated title and keyword overlap as proof of search engine cannibalization without checking intent separation or search telemetry.
- **Why Previous QA Missed It:** Overlap scanner evaluated headline string similarity without auditing distinct search intents.
- **Detection Rule:** Assert empirical search telemetry or distinct intent proof before classifying search cannibalization.
- **Prevention Rule:** Cannibalization Evidence Gate: Overlap and cannibalization classifications MUST be supported by search intent and content evidence.
- **Regression Test:** Overlap auditor verifying intent differentiation before approving consolidation merges.

---

### Pattern FP-125: Product-First Cluster Expansion
- **Symptom:** New cluster articles are proposed primarily to provide additional placement blocks for affiliate product ASINs.
- **Root Cause:** Allowed commercial product availability to dictate editorial content architecture.
- **Why Previous QA Missed It:** Opportunity evaluator approved page creation based on high affiliate commission potential.
- **Detection Rule:** Assert reader problem utility and intent differentiation over product affiliate opportunity during cluster expansion.
- **Prevention Rule:** Product-Neutral Cluster Gate: Cluster expansion MUST NOT be driven primarily by affiliate product placement opportunities.
- **Regression Test:** Cluster expansion auditor flagging product-driven article creation proposals lacking editorial utility.

---

### Pattern FP-126: Seasonal Cluster Duplication
- **Symptom:** A brand new article (e.g. "Fall Decor Ideas 2026") is published every year, creating a graveyard of near-identical outdated seasonal pages.
- **Root Cause:** Created new URL paths for annual seasonal updates instead of refreshing the evergreen seasonal pillar.
- **Why Previous QA Missed It:** Calendar triggers launched new page creation without checking existing seasonal pillar URLs.
- **Detection Rule:** Assert evergreen seasonal URL structure (`SEASONAL_PAUSE` / `REFRESH_EXISTING`) for recurring annual topics.
- **Prevention Rule:** Seasonal Duplication Gate: Recurring seasonal content MUST NOT be duplicated across multiple URLs without distinct information needs.
- **Regression Test:** Seasonal cluster auditor flagging annual duplicate URL creation for recurring seasonal topics.

---

### Pattern FP-127: Commission-First Opportunity Selection
- **Symptom:** Selecting product opportunities primarily because of high affiliate commission rates rather than reader problem utility or niche fit.
- **Root Cause:** Prioritized commercial affiliate payout over editorial relevance and reader utility.
- **Why Previous QA Missed It:** System checked affiliate availability without auditing problem-solving relevance or editorial context.
- **Detection Rule:** Assert user problem utility and niche fit before evaluating commercial affiliate priority.
- **Prevention Rule:** Commission Neutrality Gate: Affiliate commission rates MUST NOT independently dictate product opportunity priority or topic creation.
- **Regression Test:** Opportunity auditor flagging high-commission opportunities lacking user problem utility.

---

### Pattern FP-128: Trend-Only Opportunity
- **Symptom:** Treating a social trend spike as sufficient justification for launching product research or standalone article creation.
- **Root Cause:** Conflated transient social media trend momentum with genuine purchase demand or lasting editorial value.
- **Why Previous QA Missed It:** Evaluated trend trajectory signal without auditing user problem severity, search demand, or niche style fit.
- **Detection Rule:** Assert multi-dimension evaluation (`USER_PROBLEM` + `NICHE_FIT` + `EDITORIAL_VALUE`) alongside trend momentum.
- **Prevention Rule:** Trend Is Not Opportunity Gate: A rising trend signal MUST NOT independently trigger product opportunity selection without problem utility and niche fit.
- **Regression Test:** Trend auditor rejecting trend-only opportunity proposals lacking problem-solving utility.

---

### Pattern FP-129: Product-Category/Product Confusion
- **Symptom:** Declaring a specific Amazon product item as valid solely because the broader product category opportunity is strong.
- **Root Cause:** Conflated macro category demand with micro product quality and identity validation.
- **Why Previous QA Missed It:** Opportunity evaluator approved ASIN selection based on category-level demand signals without executing product research.
- **Detection Rule:** Assert separate classification of category opportunity (`PRODUCT_CATEGORY`) from specific candidate validation.
- **Prevention Rule:** Category/Product Separation Gate: Category opportunities MUST remain separate from specific product candidate validation.
- **Regression Test:** Pipeline auditor flagging ASIN selection lacking individual product research evidence.

---

### Pattern FP-130: Opportunity Without User Problem
- **Symptom:** Selecting a product opportunity that lacks any identifiable reader dilemma, room constraint, or functional problem.
- **Root Cause:** Approved product concepts based solely on visual novelty or seller promotions.
- **Why Previous QA Missed It:** Opportunity intake checked product availability without verifying reader problem mechanism.
- **Detection Rule:** Assert documented user problem (`USER_PROBLEM`) for every product opportunity profile.
- **Prevention Rule:** User Problem Gate: Product opportunities MUST connect to an identifiable user problem or legitimate editorial purpose.
- **Regression Test:** Problem auditor flagging product opportunities lacking documented user friction.

---

### Pattern FP-131: Portfolio Saturation Blindness
- **Symptom:** Continuing to prioritize product opportunities in a category or style that is already heavily overconcentrated across site articles.
- **Root Cause:** Evaluated opportunities in isolation without auditing site-wide product portfolio concentration.
- **Why Previous QA Missed It:** Single-opportunity check verified individual category appeal without checking macro portfolio balance.
- **Detection Rule:** Assert portfolio concentration check (`elevate-product-portfolio-intelligence`) before approving opportunity priority.
- **Prevention Rule:** Portfolio Diversity Gate: Opportunity selection MUST account for existing site-wide category and style concentration.
- **Regression Test:** Portfolio auditor flagging category expansion in overconcentrated product categories.

---

### Pattern FP-132: Evidence-State Collapse
- **Symptom:** Treating `UNKNOWN` or `UNVERIFIED` evidence states as positive evidence or converting missing fields into zero penalties.
- **Root Cause:** Opportunity scoring pipeline replaced missing values with default positive scores or zero penalty points.
- **Why Previous QA Missed It:** Evaluator checked total score without auditing explicit evidence state flags for each dimension.
- **Detection Rule:** Assert explicit evidence state preservation (`VERIFIED`, `UNVERIFIED`, `UNKNOWN`, `STALE`); reject silent state conversion.
- **Prevention Rule:** Unknown-State Preservation Gate: UNKNOWN and UNVERIFIED evidence states MUST NOT be converted into positive evidence or zero-penalty points.
- **Regression Test:** Evidence auditor flagging score calculations that convert missing data to positive values.

---

### Pattern FP-133: Performance-Driven Productification
- **Symptom:** Automatically creating new product opportunities and inserting commercial cards into articles solely because telemetry observed high page click activity.
- **Root Cause:** Allowed top-of-funnel click analytics to override section purpose guidelines and zero-product permissions.
- **Why Previous QA Missed It:** Optimization tool recommended product cards for non-commercial sections based on page CTR.
- **Detection Rule:** Assert section purpose justification and problem relevance before advancing performance-driven product opportunities.
- **Prevention Rule:** Performance Context Gate: Observed site performance MUST remain one contextual input among several and MUST NOT force product insertion into non-commercial sections.
- **Regression Test:** Performance auditor flagging product card additions driven solely by page click counts.

---

### Pattern FP-134: Seasonal Timing Failure
- **Symptom:** Researching or prioritizing a seasonal product opportunity after the useful publishing lead-time window has already passed.
- **Root Cause:** Triggered seasonal product research based on current calendar date rather than required lead-time horizon.
- **Why Previous QA Missed It:** Intake checked active seasonal interest without auditing publishing lead-time requirements.
- **Detection Rule:** Assert lead-time window evaluation (`PREPARATION_WINDOW` / `PUBLISHING_WINDOW`) for seasonal opportunities.
- **Prevention Rule:** Seasonal Timing Gate: Seasonal opportunities MUST account for publishing lead time and MUST NOT be dispatched after the useful window has passed.
- **Regression Test:** Seasonal timing auditor rejecting post-peak seasonal opportunity proposals.

---

### Pattern FP-135: Queue Without Evidence
- **Symptom:** Dispatching an opportunity to a research queue without documenting its current evidence state or missing evidence requirements.
- **Root Cause:** Enqueued opportunity ideas as generic task titles without conducting an evidence audit.
- **Why Previous QA Missed It:** Queue checker verified task title presence without auditing normalized evidence fields.
- **Detection Rule:** Assert normalized evidence profile (`CURRENT_EVIDENCE_STATE`, `MISSING_EVIDENCE`) before queue entry.
- **Prevention Rule:** Queue Evidence Gate: Every queue item MUST expose explicit evidence states and missing evidence requirements.
- **Regression Test:** Queue auditor rejecting un-audited opportunity titles lacking evidence profiles.

---

### Pattern FP-136: Premature Skill Dispatch
- **Symptom:** Dispatching web discovery or product research for an opportunity that lacks a defined user problem or solution mechanism.
- **Root Cause:** Sent vague keywords or product names into expensive discovery tools before defining reader utility.
- **Why Previous QA Missed It:** Intake tool triggered scraping based on category keyword alone.
- **Detection Rule:** Assert user problem and solution mechanism readiness (`READY_TO_RESEARCH`) prior to skill dispatch.
- **Prevention Rule:** Premature Dispatch Gate: Downstream research skills MUST NOT be dispatched if user problem or solution mechanism is UNKNOWN.
- **Regression Test:** Dispatch auditor halting discovery tasks for opportunities lacking defined user problems.

---

### Pattern FP-137: Missing Dependency Bypass
- **Symptom:** Dispatching commercial validation or article integration while upstream product identity or category dependencies remain unresolved.
- **Root Cause:** Bypassed required sequence steps in the research dependency graph.
- **Why Previous QA Missed It:** Task runner executed validation tools out of sequential dependency order.
- **Detection Rule:** Assert resolution of upstream dependencies (`DEPENDENCY_GRAPH_CHECK`) before dispatching downstream tasks.
- **Prevention Rule:** Dependency Graph Gate: Downstream research tasks MUST NOT be dispatched if required upstream dependencies are unresolved.
- **Regression Test:** Dependency auditor flagging commercial validation tasks dispatched prior to source identity verification.

---

### Pattern FP-138: Duplicate Opportunity Queue
- **Symptom:** Creating multiple active research queue items for the exact same product opportunity or category.
- **Root Cause:** Failed to check existing queue records or site portfolio coverage before enqueueing a new opportunity.
- **Why Previous QA Missed It:** Intake scanner processed new opportunity triggers without auditing active research queues.
- **Detection Rule:** Assert duplicate control check (`DISTINCT` / `COMPLEMENTARY` / `DUPLICATE`) prior to queue entry.
- **Prevention Rule:** Duplicate Queue Control Gate: Duplicate opportunities MUST NOT create redundant research queue items.
- **Regression Test:** Queue scanner suppressing duplicate research proposals for active queue items.

---

### Pattern FP-139: Seasonal Queue Timing Failure
- **Symptom:** Prioritizing a seasonal opportunity for immediate research after the useful publishing lead-time window has already passed.
- **Root Cause:** Evaluated seasonal queue priority based on active season date rather than preparation lead-time horizon.
- **Why Previous QA Missed It:** Queue engine checked current month interest without auditing research and publishing lead time.
- **Detection Rule:** Assert seasonal lead-time evaluation (`GOOD_RESEARCH_WINDOW`) for seasonal queue prioritization.
- **Prevention Rule:** Seasonal Queue Lead-Time Gate: Seasonal research queue items MUST respect lead-time preparation windows and suppress post-peak items.
- **Regression Test:** Seasonal queue auditor rejecting post-peak seasonal research dispatches.

---

### Pattern FP-140: Portfolio-Blind Prioritization
- **Symptom:** Assigning high research queue priority to an opportunity in a product category that is already heavily overconcentrated across the site.
- **Root Cause:** Prioritized opportunities in isolation without evaluating site-wide product portfolio gaps.
- **Why Previous QA Missed It:** Queue prioritizer evaluated category search demand without checking macro portfolio balance.
- **Detection Rule:** Assert portfolio concentration check (`elevate-product-portfolio-intelligence`) during queue prioritization.
- **Prevention Rule:** Portfolio Awareness Queue Gate: Queue prioritization MUST account for existing site-wide category and style concentration.
- **Regression Test:** Portfolio auditor de-prioritizing research queue items in overconcentrated categories.

---

### Pattern FP-141: Research Scope Explosion
- **Symptom:** A web discovery or research dispatch crawls hundreds of pages or candidates without enforcing resource boundaries or stop conditions.
- **Root Cause:** Dispatched open-ended research tasks without defining resource budgets or explicit halt triggers.
- **Why Previous QA Missed It:** Task runner executed discovery loop without auditing candidate count bounds.
- **Detection Rule:** Assert explicit resource budget (`RESOURCE_BUDGET`) and stop conditions in handoff contracts.
- **Prevention Rule:** Research Boundary Gate: Research dispatches MUST define explicit resource budgets and stop conditions.
- **Regression Test:** Handoff contract auditor rejecting dispatches lacking candidate bounds or stop conditions.

---

### Pattern FP-142: Handoff Context Loss
- **Symptom:** A specialized skill receives a vague task prompt without knowing the opportunity ID, reader problem, or missing evidence required.
- **Root Cause:** Dispatched sub-tasks as generic text instructions rather than structured handoff contracts.
- **Why Previous QA Missed It:** Subagent prompt verified task dispatch without auditing context completeness.
- **Detection Rule:** Assert structured Research Handoff Contract compliance prior to skill dispatch.
- **Prevention Rule:** Skill Dispatch Contract Gate: Research skill dispatches MUST supply a complete Research Handoff Contract.
- **Regression Test:** Handoff auditor flagging skill invocations lacking structured contract fields.

---

### Pattern FP-143: Unknown-State Promotion
- **Symptom:** Converting `UNKNOWN` or `UNVERIFIED` signals into `VERIFIED` status during queue orchestration or handoff returns.
- **Root Cause:** System automatically promoted unverified research results to valid status without empirical proof.
- **Why Previous QA Missed It:** Result receiver accepted status updates without verifying underlying proof provenance.
- **Detection Rule:** Assert proof provenance check before updating evidence states in opportunity records.
- **Prevention Rule:** Unknown State Non-Promotion Gate: Orchestration MUST NOT convert UNKNOWN or UNVERIFIED states into positive evidence.
- **Regression Test:** State auditor flagging un-evidenced status promotions in result return contracts.

---

### Pattern FP-144: Queue Priority Without Rationale
- **Symptom:** Assigning a queue priority class (e.g. `IMMEDIATE_RESEARCH`) without exposing an explicit written evidence rationale.
- **Root Cause:** Prioritization model assigned priority labels based on opaque internal heuristics or commission rates.
- **Why Previous QA Missed It:** Queue reporter checked priority label presence without auditing written rationale proof.
- **Detection Rule:** Assert explicit written rationale (`RATIONALE`) referencing evidence, timing, and portfolio fit.
- **Prevention Rule:** Priority Rationale Requirement Gate: Every prioritized research queue item MUST expose a written evidence rationale.
- **Regression Test:** Priority auditor flagging queue items lacking written rationale text.

---

### Pattern FP-145: Invalid State Transition
- **Symptom:** Skipping intermediate state validation or jumping across valid state graph boundaries (e.g. `DISCOVERED` directly to `INTEGRATION_READY`).
- **Root Cause:** Workflow runner bypassed prerequisite state gates and dispatches.
- **Why Previous QA Missed It:** Status updater accepted state change requests without checking the valid transition graph.
- **Detection Rule:** Assert transition graph validation (`REQUESTED_TRANSITION` in `NEXT_ALLOWED_STATE`) before updating workflow state.
- **Prevention Rule:** Valid State Transition Gate: Workflow state updates MUST follow the explicit directed transition graph without skipping gates.
- **Regression Test:** Transition auditor flagging non-sequential state updates.

---

### Pattern FP-146: Tool Invocation Mistaken for Success
- **Symptom:** Automatically advancing a workflow state to `COMPLETED` or `VALIDATED` merely because a specialist skill tool was invoked.
- **Root Cause:** Conflated tool call dispatch with result verification.
- **Why Previous QA Missed It:** Runner updated state upon tool execution without checking returned result payload criteria.
- **Detection Rule:** Assert explicit success criteria validation on returned specialist payload before advancing workflow state.
- **Prevention Rule:** Transition Gate Enforcement Gate: Workflow state advancement MUST require explicit result payload validation satisfying defined gate criteria.
- **Regression Test:** State auditor halting workflow advancement when tool returns partial or unverified outputs.

---

### Pattern FP-147: Duplicate Workflow Execution
- **Symptom:** Re-running expensive research or validation steps for a workflow instance that has already completed successfully.
- **Root Cause:** Failed to check existing workflow execution logs and evidence versions before triggering tasks.
- **Why Previous QA Missed It:** Task dispatcher triggered research workflows based on trigger text without checking active `WORKFLOW_ID` status.
- **Detection Rule:** Assert idempotency check (`WORKFLOW_ID` + `TRANSITION` + `INPUT_EVIDENCE_VERSION`) prior to execution.
- **Prevention Rule:** Workflow Idempotency Gate: Identical workflow transition requests with existing valid results MUST be suppressed or returned from cache.
- **Regression Test:** Idempotency auditor blocking duplicate research dispatches for active workflow IDs.

---

### Pattern FP-148: Unbounded Retry Loop
- **Symptom:** Retrying a failing research task infinitely or retrying hard Policy/TOS blockers.
- **Root Cause:** Retry handler re-queued failing tasks without enforcing `MAX_RETRIES` or checking hard blocker conditions.
- **Why Previous QA Missed It:** Error handler automatically retried failed tasks without checking failure category or retry counts.
- **Detection Rule:** Assert retry boundary check (`RETRY_COUNT` < `MAX_RETRIES` and failure is non-policy) before re-queuing.
- **Prevention Rule:** Bounded Retry Gate: Task retries MUST be strictly bounded (`MAX_RETRIES` = 2) and MUST NOT retry hard policy, TOS, or identity blockers.
- **Regression Test:** Retry auditor halting execution when retry count exceeds threshold or when blocker is active.

---

### Pattern FP-149: Historical Evidence Overwrite
- **Symptom:** Overwriting historical research results or past verification timestamps when new evidence arrives.
- **Root Cause:** Replaced evidence records in place rather than creating versioned evidence updates.
- **Why Previous QA Missed It:** Record updater performed destructive field overwrites.
- **Detection Rule:** Assert versioned evidence tracking (`EVIDENCE_VERSION`, `SUPERSEDES_VERSION`, `is_current`) on all updates.
- **Prevention Rule:** Evidence Versioning Gate: Historical evidence trails MUST be preserved and versioned; destructive overwrites are prohibited.
- **Regression Test:** Evidence auditor flagging destructive record updates that lack version tracking.

---

### Pattern FP-150: Specialist Boundary Violation
- **Symptom:** The workflow orchestrator attempts to perform scraping, product quality scoring, or article writing itself.
- **Root Cause:** Orchestration layer mixed lifecycle tracking with specialist domain logic.
- **Why Previous QA Missed It:** Orchestrator prompt contained direct data collection or content generation instructions.
- **Detection Rule:** Assert specialist delegation for all domain decisions; restrict orchestrator to state machine tracking.
- **Prevention Rule:** Specialist Boundary Gate: The workflow orchestrator MUST NOT perform domain research, scraping, or writing directly.
- **Regression Test:** Boundary auditor rejecting direct scraping or scoring calls originating from the workflow orchestrator.

---

### Pattern FP-151: Queue/Workflow State Confusion
- **Symptom:** Conflating research queue priority (`IMMEDIATE_RESEARCH`) with workflow lifecycle state (`RESEARCHING`).
- **Root Cause:** Treated queue prioritization and lifecycle state management as a single unified status field.
- **Why Previous QA Missed It:** Data model used a single `STATUS` field for both queue priority and lifecycle progress.
- **Detection Rule:** Assert explicit separation of `PRIORITY_STATE` (queue) and `CURRENT_STATE` (workflow).
- **Prevention Rule:** Queue/Workflow State Separation Gate: Research queue priority and workflow lifecycle state MUST remain distinct evaluation fields.
- **Regression Test:** Schema auditor flagging merged priority/lifecycle status fields.

---

### Pattern FP-152: Blocker State Loss
- **Symptom:** Clearing an active `SOURCE_CONFLICT` or `IDENTITY_CONFLICT` state without documenting a resolution.
- **Root Cause:** Status updater reset blocker flags during routine retry or re-evaluation passes.
- **Why Previous QA Missed It:** Re-evaluation loop reset workflow state to initial without preserving historical blocker flags.
- **Detection Rule:** Assert blocker resolution verification (`REQUIRED_RESOLUTION` satisfied) before clearing blocker states.
- **Prevention Rule:** Blocker Preservation Gate: Active blocker states (`SOURCE_CONFLICT`, `IDENTITY_CONFLICT`) MUST persist until explicitly resolved.
- **Regression Test:** Blocker auditor halting state transitions when un-resolved blockers are cleared.

---

### Pattern FP-153: Partial Result Promotion
- **Symptom:** Promoting a `PARTIAL_SUCCESS` research output directly to `PRODUCT_VALIDATED` status.
- **Root Cause:** Treated incomplete specialist returns as full successful validations.
- **Why Previous QA Missed It:** Result receiver evaluated payload presence without checking missing evidence fields.
- **Detection Rule:** Assert full `SUCCESS` payload verification before advancing to validated state clusters.
- **Prevention Rule:** Partial Result Handling Gate: `PARTIAL_SUCCESS` outputs MUST NOT be promoted to validated states; missing items MUST be re-queued.
- **Regression Test:** Result auditor rejecting state advancement for partial returns.

---

### Pattern FP-154: Production Boundary Bypass
- **Symptom:** Automatically modifying production HTML/CSS/JS files when a workflow reaches `INTEGRATION_READY`.
- **Root Cause:** Workflow engine triggered file system writers upon reaching max intelligence state.
- **Why Previous QA Missed It:** Intelligence pipeline directly invoked production release scripts.
- **Detection Rule:** Assert explicit production deployment gate separation (`INTEGRATION_READY` is max intelligence state).
- **Prevention Rule:** Production Boundary Protection Gate: Intelligence workflows MUST HALT at `INTEGRATION_READY`; production edits require explicit deployment skill invocation.
- **Regression Test:** Boundary auditor halting workflows that attempt automatic production file edits.

---

### Pattern FP-155: Case Created Without Objective
- **Symptom:** Opening a product research case with a vague title or missing explicit objective (e.g. "Find products").
- **Root Cause:** Case manager allowed case initialization without validating objective fields.
- **Why Previous QA Missed It:** System checked case creation API response without auditing user/problem/context specification in objective.
- **Detection Rule:** Assert explicit objective validation (User + Problem + Context + Expected Decision) prior to case creation.
- **Prevention Rule:** Case Objective Requirement Gate: Every case MUST state an explicit objective specifying user, problem, context, and expected decision.
- **Regression Test:** Case auditor rejecting cases created with vague or missing objectives.

---

### Pattern FP-156: Case/Workflow Identity Confusion
- **Symptom:** Passing a `WORKFLOW_ID` or `OPPORTUNITY_ID` as a `CASE_ID` or merging durable case records with transient execution logs.
- **Root Cause:** Conflated durable case tracking with single workflow execution tracking.
- **Why Previous QA Missed It:** Data model used a single identifier field across case and workflow objects.
- **Detection Rule:** Assert explicit identifier hierarchy separation (`CASE_ID` $\rightarrow$ `WORKFLOW_ID` $\rightarrow$ `OPPORTUNITY_ID`).
- **Prevention Rule:** Case Identity Integrity Gate: `CASE_ID`, `WORKFLOW_ID`, `OPPORTUNITY_ID`, and `PRODUCT_CANDIDATE_ID` MUST remain distinct identifiers.
- **Regression Test:** Schema auditor flagging reused or substituted case/workflow identifiers.

---

### Pattern FP-157: Case State Drift
- **Symptom:** Case status drifts out of alignment with underlying workflow execution states or missing blocker flags.
- **Root Cause:** Updated workflow execution state without updating managing case status record.
- **Why Previous QA Missed It:** Workflow engine updated execution state without calling case manager status sync.
- **Detection Rule:** Assert case/workflow status synchronization check during state transitions.
- **Prevention Rule:** Case State Sync Gate: Case status (`CASE_STATUS`) MUST remain synchronized with current workflow execution state (`WORKFLOW_STATE`).
- **Regression Test:** Case auditor flagging desynchronized case and workflow statuses.

---

### Pattern FP-158: Evidence Ledger Desynchronization
- **Symptom:** Evidence items in a case record are overwritten destructively or lose source provenance timestamps.
- **Root Cause:** Evidence log performed in-place overwrites instead of appending versioned evidence items.
- **Why Previous QA Missed It:** Evidence updater saved new records over existing field values.
- **Detection Rule:** Assert non-destructive evidence ledger append (`is_current`, `supersedes`) on all evidence updates.
- **Prevention Rule:** Evidence Ledger Integrity Gate: Evidence items MUST be logged in a non-destructive, versioned ledger with explicit provenance.
- **Regression Test:** Evidence auditor flagging destructive overwrites in case ledgers.

---

### Pattern FP-159: Decision Without Evidence
- **Symptom:** Recording a case decision (`PROCEED`, `REJECT`, `INTEGRATE`) without citing supporting evidence ledger IDs.
- **Root Cause:** Decision logger accepted decision entries without auditing cited evidence references.
- **Why Previous QA Missed It:** Decision logger checked decision title presence without verifying evidence provenance links.
- **Detection Rule:** Assert evidence citation verification (`EVIDENCE_USED` referencing valid ledger IDs) for all decisions.
- **Prevention Rule:** Decision Traceability Gate: Every case decision MUST cite verified evidence ledger items and state explicit rationale.
- **Regression Test:** Decision auditor rejecting decisions lacking evidence citations.

---

### Pattern FP-160: Closed Case Restarted Without Reassessment
- **Symptom:** Restarting execution on a closed case without evaluating whether underlying evidence has changed.
- **Root Cause:** Direct workflow invocation on closed case IDs without routing through re-evaluation.
- **Why Previous QA Missed It:** Task runner accepted execution requests on closed cases.
- **Detection Rule:** Assert case status check (`CASE_STATUS` != `CLOSED` or explicit reopening event) prior to workflow dispatch.
- **Prevention Rule:** Case Reopening History Preservation Gate: Reopening a closed case MUST route through reassessment and log a reopening event without erasing closure history.
- **Regression Test:** Reopening auditor halting direct workflow dispatch on closed cases.

---

### Pattern FP-161: Duplicate Active Case
- **Symptom:** Opening a new investigation case for a problem/category that is already actively being investigated in an existing case.
- **Root Cause:** Failed to run case deduplication checks before case creation.
- **Why Previous QA Missed It:** Case creator initialized new records without auditing active case portfolio inventory.
- **Detection Rule:** Assert case deduplication audit (`USER_PROBLEM`, `SOLUTION_MECHANISM`, `PRODUCT_CATEGORY`, `ROOM_CONTEXT`) before case creation.
- **Prevention Rule:** Case Deduplication Gate: Duplicate active cases MUST NOT be created; related investigations MUST be linked or merged.
- **Regression Test:** Deduplication scanner suppressing duplicate case proposals.

---

### Pattern FP-162: Case Closure Without Final Decision
- **Symptom:** Marking a case as `CLOSED` without logging a definitive decision type, evidence summary, or unresolved unknowns list.
- **Root Cause:** Case status set to `CLOSED` upon completion of a single sub-task.
- **Why Previous QA Missed It:** Closure handler updated status flag without validating closure record completeness.
- **Detection Rule:** Assert closure criteria verification (`FINAL_STATUS`, `FINAL_DECISION`, evidence summary) before case closure.
- **Prevention Rule:** Case Closure Criteria Gate: Case closure MUST require a definitive decision classification and evidence summary.
- **Regression Test:** Closure auditor rejecting incomplete case closure requests.

---

### Pattern FP-163: Historical Decision Loss
- **Symptom:** Overwriting or truncating previous decision logs when a case is reassessed or reopened.
- **Root Cause:** Decision history stored as a single text field instead of a chronological decision array.
- **Why Previous QA Missed It:** Reassessment pass overwrote the decision field with new reassessment notes.
- **Detection Rule:** Assert chronological decision log preservation on all case updates.
- **Prevention Rule:** Decision History Preservation Gate: Historical decision logs MUST be preserved chronologically across reassessments.
- **Regression Test:** Log auditor flagging decision array truncations.

---

### Pattern FP-164: Case Context Dump / Irrelevant Handoff
- **Symptom:** Dumping the entire 21-section case record into a sub-task prompt, causing context overflow and sub-agent confusion.
- **Root Cause:** Dispatched sub-agent prompts with full raw case records instead of minimized handoff contracts.
- **Why Previous QA Missed It:** Handoff script serialized complete case object into task input.
- **Detection Rule:** Assert Minimized Case Handoff Contract compliance for all sub-task dispatches.
- **Prevention Rule:** Case Handoff Minimization Gate: Sub-task dispatches MUST include only relevant problem, opportunity, and evidence context.
- **Regression Test:** Handoff auditor rejecting un-filtered case context dumps.

---

### Pattern FP-165: Source Access Confused with Evidence Interpretation
- **Symptom:** Source acquisition adapter attempts to score product quality or assess niche suitability directly during raw evidence collection.
- **Root Cause:** Failed to decouple raw source collection from downstream evidence evaluation skills.
- **Why Previous QA Missed It:** Single script executed fetching and scoring in a single step.
- **Detection Rule:** Assert source adapter output contains raw evidence fields and provenance without decision classifications.
- **Prevention Rule:** Source/Interpretation Separation Gate: Source adapters MUST ONLY collect, normalize, and record raw evidence.
- **Regression Test:** Adapter auditor flagging decision scoring inside raw source collection tools.

---

### Pattern FP-166: API Access Claimed on Web Search Output
- **Symptom:** Evidence payload labels `ACCESS_METHOD` as `API` when the data was retrieved via search engine scraping or web browsing.
- **Root Cause:** Data pipeline defaulted `ACCESS_METHOD` to `API` without inspecting the underlying retrieval mechanism.
- **Why Previous QA Missed It:** Contract checker verified presence of string without checking value validity.
- **Detection Rule:** Assert `ACCESS_METHOD` accurately matches the physical execution path (`WEB_SEARCH`, `DIRECT_HTTP`, `LOCAL_REPOSITORY`, `API`).
- **Prevention Rule:** Access Method Provenance Gate: The recorded `ACCESS_METHOD` MUST reflect the exact retrieval mechanism used.
- **Regression Test:** Provenance scanner flagging inaccurate access method tags.

---

### Pattern FP-167: Inferred Signal Promoted to Observed
- **Symptom:** Inferred user problems or trend hypotheses are recorded as `OBSERVED` facts in evidence ledgers.
- **Root Cause:** System converted derived claims into direct observations during normalization.
- **Why Previous QA Missed It:** Schema mapper assigned `EVIDENCE_STATE = OBSERVED` to all non-null fields.
- **Detection Rule:** Assert observation level checks (`OBSERVED` vs `INFERRED` vs `HYPOTHESIZED`) on normalized evidence records.
- **Prevention Rule:** Observation Level Preservation Gate: `INFERRED` and `HYPOTHESIZED` states MUST NOT be converted to `OBSERVED`.
- **Regression Test:** Evidence auditor flagging status promotion of inferred signals.

---

### Pattern FP-168: Anti-Bot Bypass Execution
- **Symptom:** Automated scraper attempts to solve CAPTCHAs, bypass Cloudflare/anti-bot protection, or imitate authenticated session headers.
- **Root Cause:** Scraper script lacked permission checking and fallback handling upon receiving HTTP 403/429/CAPTCHA responses.
- **Why Previous QA Missed It:** Local unit test executed against mock endpoints without auditing anti-bot retry loops.
- **Detection Rule:** Detect CAPTCHA solving scripts, proxy rotation hacks, or header spoofing in scraper dispatches.
- **Prevention Rule:** Anti-Bot Bypass Prohibition Gate: Automated requests MUST respect `robots.txt` and MUST NOT bypass CAPTCHAs or access controls.
- **Regression Test:** Security scanner halting dispatches with anti-bot bypass mechanisms.

---

### Pattern FP-169: Missing Credential Silent Fallback Failure
- **Symptom:** Missing API keys cause system to return synthetic/mock data marked as `VERIFIED`.
- **Root Cause:** Exception handler caught missing credentials and returned dummy fallback objects.
- **Why Previous QA Missed It:** Pipeline checked for non-null output without checking validity of credential state.
- **Detection Rule:** Assert `MANUAL_ACTION_REQUIRED = TRUE` and `EVIDENCE_STATE = UNVERIFIED` when API credentials are absent.
- **Prevention Rule:** Explicit Missing Credential Gate: Missing API credentials MUST result in `MANUAL_ACTION_REQUIRED` and `UNVERIFIED` state.
- **Regression Test:** Credential auditor verifying halt/manual action flag on missing API keys.

---

### Pattern FP-170: Visual Trend Conflated with Purchase Demand
- **Symptom:** Recommending a product primarily because its aesthetic style is pinned frequently on Pinterest, assuming high commercial buying intent.
- **Root Cause:** Conflated visual inspiration interest with commercial purchase demand.
- **Why Previous QA Missed It:** Trend analyzer scored Pinterest saves directly into buying intent metrics.
- **Detection Rule:** Assert separation of visual trend evidence from commercial purchase demand signals.
- **Prevention Rule:** Trend vs Demand Decoupling Gate: Visual trend interest from Pinterest MUST NOT be used as proof of commercial buying demand.
- **Regression Test:** Trend auditor halting demand promotion based solely on visual pin saves.

---

### Pattern FP-171: Unobserved Field Fabrication
- **Symptom:** Filling missing price, review rating, or availability fields with default values or estimated numbers.
- **Root Cause:** Normalizer populated missing fields with synthetic defaults to satisfy schema validation.
- **Why Previous QA Missed It:** Schema validator required non-null numeric fields.
- **Detection Rule:** Assert `UNKNOWN` or `UNVERIFIED` preservation on missing source attributes.
- **Prevention Rule:** Unobserved Field Preservation Gate: Unobserved product fields MUST remain `UNKNOWN` or `UNVERIFIED`.
- **Regression Test:** Data integrity auditor rejecting synthetic default numbers in candidate records.

---

### Pattern FP-172: Direct Production File Modification During Sourcing
- **Symptom:** Source acquisition task edits HTML articles or production CSV files directly during research collection.
- **Root Cause:** Research task executed file edits in production directories instead of working in temporary memory or learning ledgers.
- **Why Previous QA Missed It:** Task execution lacked pre-write path restrictions.
- **Detection Rule:** Assert zero production file edits (`/public/`, `*.html`, `*.css`, `*.js`) during research operations.
- **Prevention Rule:** Source Production Isolation Gate: Source acquisition operations MUST NOT modify production website files.
- **Regression Test:** File boundary scanner asserting 0 production edits during research tasks.

---

### Pattern FP-173: Secret Leakage in Source Artifacts
- **Symptom:** Storing API keys, OAuth tokens, or secret credentials inside skill files, logs, or evidence ledger artifacts.
- **Root Cause:** Hardcoded test credentials directly into source configuration strings.
- **Why Previous QA Missed It:** Static analyzer checked payload execution without scanning for API key string patterns.
- **Detection Rule:** Scan for API key patterns (`AKIA...`, `sk_live_...`, Bearer tokens) in workspace files and logs.
- **Prevention Rule:** Secret Protection Gate: API keys, access tokens, and secrets MUST NOT be logged in chat responses, skill specifications, or evidence ledgers.
- **Regression Test:** Secret scanner auditing workspace files for plaintext credential strings.

---

### Pattern FP-174: Destructive Evidence Ledger Overwrite
- **Symptom:** Overwriting an existing evidence item when new data is fetched, destroying the historical research trail.
- **Root Cause:** Evidence logger used key-value overwrite instead of append-only versioning.
- **Why Previous QA Missed It:** Single-record retrieval checked latest values without auditing historical array length.
- **Detection Rule:** Assert `EVIDENCE_VERSION` increment and append-only ledger entries on research updates.
- **Prevention Rule:** Versioned Evidence Append Gate: Updated research results MUST create a new versioned entry (`EVIDENCE_VERSION`).
- **Regression Test:** Ledger auditor verifying append-only versioning on evidence updates.

---

### Pattern FP-175: Affiliate Tag Mistaken for Commercial Validation
- **Symptom:** Candidate product marked `COMMERCIALLY_VALIDATED` merely because an ASIN, catalog entry, or Associate tracking tag exists.
- **Root Cause:** Conflated affiliate tag presence with live price and real-time stock availability verification.
- **Why Previous QA Missed It:** Qualification checker validated Associate tag presence without asserting live API or scraped price verification.
- **Detection Rule:** Assert separation of `AFFILIATE_LINKABILITY` from `LIVE_PRICE` and `LIVE_AVAILABILITY`.
- **Prevention Rule:** Commercial Verification Identity Separation Gate: Associate tag presence MUST NOT be treated as proof of live price or stock availability.
- **Regression Test:** Commercial validator downgrading candidate status when live pricing remains `UNKNOWN`.

---

### Pattern FP-176: Accessory Product Mistaken for Parent Category
- **Symptom:** Representing a decorative cushion cover or pillowcase as an entryway storage bench.
- **Root Cause:** Candidate product title contained key search terms ("bench cushion") and was mapped to parent furniture category without schema inspection.
- **Why Previous QA Missed It:** Title string search matched "bench" without verifying product category type in catalog metadata.
- **Detection Rule:** Assert product category and specification parity between candidate item and opportunity solution mechanism.
- **Prevention Rule:** Candidate Category Parity Gate: Product candidates MUST match the exact physical category of the intended solution mechanism.
- **Regression Test:** Niche matching auditor flagging category mismatches between accessories and furniture.

---

### Pattern FP-177: Unsupported Ranking Language Promoted to Evidence
- **Symptom:** Evidence ledger contains manufactured comparative rankings such as "#1 recommendation" or "#1 clutter trigger" without statistical proof.
- **Root Cause:** Qualitative community sentiment converted into quantitative rank claims.
- **Why Previous QA Missed It:** Summary generator formatted frequent mentions as numerical rankings.
- **Detection Rule:** Scan evidence ledgers for unverified numerical rank claims (`#1`, `top-ranked`, `100% preferred`).
- **Prevention Rule:** Unsupported Comparative Claim Prohibition Gate: Qualitative community feedback MUST be recorded as descriptive observations without manufactured rankings.
- **Regression Test:** Claim scanner flagging unverified comparative rankings.

---

### Pattern FP-178: Third-Party Trend Source Represented as First-Party Platform Evidence
- **Symptom:** Logging a third-party interior design blog post as `PINTEREST_FIRST_PARTY` evidence.
- **Root Cause:** Conflated editorial commentary about Pinterest trends with official Pinterest API/platform data.
- **Why Previous QA Missed It:** Provenance recorder assigned platform source tag based on article title keywords.
- **Detection Rule:** Assert domain provenance matching (`site:pinterest.com` vs third-party domain) for first-party platform claims.
- **Prevention Rule:** First-Party vs Third-Party Provenance Gate: Third-party trend analysis MUST be attributed to the third-party domain, not the platform being discussed.
- **Regression Test:** Provenance auditor reclassifying third-party trend references.

---

### Pattern FP-179: Credential Presence Conflated with Article Readiness
- **Symptom:** PA-API credential availability is treated as automatic authorization for article authoring or production publishing.
- **Root Cause:** Conflated credential access/provisioning with empirical commercial evidence validation and downstream readiness gate approval.
- **Why Previous QA Missed It:** Workflow trigger passed credential check without requiring executed verification, recorded evidence, and explicit readiness gate re-evaluation.
- **Detection Rule:** Assert that credential presence only enables commercial verification skill execution and does NOT satisfy candidate validation or article readiness gates.
- **Prevention Rule:** Credential Presence Separation Gate: PA-API credential availability ONLY enables commercial verification execution. It DOES NOT establish commercial evidence and DOES NOT authorize article authoring, production modification, publication, git commit, or git push.
- **Regression Test:** Readiness gate auditor asserting multi-step verification pipeline execution after credential provisioning.



