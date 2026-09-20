---
name: elevate-skill-evolution
description: >-
  Manages the self-improving agent architecture, Phase 17 learning loop, mandatory post-task learning gates, 
  regression rule updates, and version changelogs under `.agents/skills/_learning/`.
version: 4.4
triggers:
  - Completing any production-impacting coding, refactoring, or QA task.
  - Analyzing a production failure, bug fix, or visual regression.
  - Updating or creating skills within `.agents/skills/`.
scope: skill-evolution-and-learning-loop
risk: critical
source:
  type: internal-upgraded
  version: 4.4
---

# Elevate Skill Evolution & Self-Improvement Skill (V4.4)

## Purpose
Establishes a continuous self-improving feedback loop for the Antigravity agent architecture, ensuring that every production failure, visual bug, and architectural evolution permanently improves relevant skills, updates regression rules, and tracks version milestones.

---

## 1. System Evolution Milestones

```markdown
### V4.4 Master Release — Case Management, Content Cluster Architecture, Content Freshness, Editorial Decay, Product Performance, Article Optimization, Editorial Integration, Freshness, Portfolio, Opportunity Scoring, Research Queue Orchestration, Workflow Orchestration, Commercial Validation, Seasonal, Problem, Niche Matching, Trend, Web Scraping & Product Research Release (2026-09-20)
- **Root Motivation:** Upgrade Elevate Agent Skill System from V4.3 to V4.4 Master Release by establishing `elevate-product-case-management` (v1.0), `elevate-product-workflow-orchestration` (v1.0), `elevate-product-research-queue-orchestration` (v1.0), `elevate-content-cluster-intelligence` (v1.0), `elevate-content-freshness-intelligence` (v1.0), `elevate-product-performance-intelligence` (v1.0), `elevate-product-article-optimization` (v1.0), `elevate-editorial-product-integration` (v1.0), `elevate-product-freshness-intelligence` (v1.0), `elevate-product-portfolio-intelligence` (v1.0), `elevate-product-opportunity-scoring` (v1.0), `elevate-commercial-product-validation` (v1.0), `elevate-seasonal-product-intelligence` (v1.0), `elevate-problem-product-intelligence` (v1.0), `elevate-niche-product-matching` (v1.0), `elevate-trend-demand-intelligence` (v1.0), `elevate-web-scraping-product-discovery` (v1.0), merging Pinterest Experience Optimization into `elevate-editorial-retention` (v4.4), and establishing `elevate-product-research-intelligence` (v1.1) without skill duplication or website modifications.
- **Capabilities & Gates Added:**
  1. **Product Intelligence Workflow Orchestration Framework (`elevate-product-workflow-orchestration` v1.0):** Specialized workflow state machine orchestration layer managing product lifecycle states across 8 canonical state clusters, `WORKFLOW_ID` isolation, explicit directed state transition graph, 9 transition gates, State Transition Contract schema, bounded retry policy (`MAX_RETRIES` = 2, policy blocker prohibitions), workflow idempotency, versioned evidence tracking (`EVIDENCE_VERSION`), 12 hard blocking conditions, 13-field status record schema, specialist return result classification (`SUCCESS`, `PARTIAL_SUCCESS`, `FAILED`, `BLOCKED`, `CONFLICTED`, `UNKNOWN`), decoupled queue vs workflow separation, opportunity re-evaluation loop, and production boundary protection (`INTEGRATION_READY` max state).
  2. **Product Opportunity → Research Queue Orchestration Framework (`elevate-product-research-queue-orchestration` v1.0):** Specialized orchestration layer converting evaluated product opportunities into a structured, evidence-aware research queue across 27 normalization fields, 7 readiness states (`READY_TO_RESEARCH`, `RESEARCH_REQUIRED`, `VERIFY_FIRST`, `BLOCKED`, `MONITOR`, `NO_ACTION`, `UNKNOWN`), 14 missing-evidence types, 13 skill dispatch mappings, research dependency graph (`USER_PROBLEM` $\rightarrow$ `SOLUTION` $\rightarrow$ `CATEGORY` $\rightarrow$ `TREND/DEMAND` $\rightarrow$ `DISCOVERY` $\rightarrow$ `RESEARCH` $\rightarrow$ `SOURCE` $\rightarrow$ `NICHE` $\rightarrow$ `COMMERCIAL` $\rightarrow$ `EDITORIAL`), upstream halt rules, 6 queue priority classes, seasonal lead-time logic, duplicate control, resource cost bounds, research batching rules, 16-field Research Handoff Contract, 9 strict stop conditions, and 13-field Result Return Contract.
  3. **Content Cluster & Topical Architecture Framework (`elevate-content-cluster-intelligence` v1.0):** Strategic content architecture layer evaluating cluster design, topical coverage (`COVERED`, `PARTIALLY_COVERED`, `UNCOVERED`, `OVERLAPPING`, `UNKNOWN`), 10 contextual cluster types (`STYLE`, `ROOM`, `PROBLEM`, `PRODUCT CATEGORY`, `LIFESTYLE`, `SEASONAL`, `DESIGN PRINCIPLE`, `HOW-TO`, `COMPARISON`, `MIXED`), 12 article taxonomy roles (`PILLAR`, `SUPPORTING_GUIDE`, `HOW_TO`, `PROBLEM_SOLUTION`, `STYLE_GUIDE`, `PRODUCT_DISCOVERY`, `COMPARISON`, `SEASONAL_SUPPORT`, `INSPIRATION`, `REFERENCE`, `MIXED`, `UNKNOWN`), 9-dimension overlap analysis (`DISTINCT`, `COMPLEMENTARY`, `PARTIAL_OVERLAP`, `HIGH_OVERLAP`, `DUPLICATIVE`, `UNKNOWN`), cannibalization risk states (`LOW_RISK`, `MONITOR`, `POTENTIAL_OVERLAP`, `HIGH_OVERLAP`, `UNKNOWN`), internal link purpose architecture (`DISCOVERY`, `DEEPENING`, `REFERENCE`, `NEXT_STEP`, `RELATED_TOPIC`, `SUPPORTING_EVIDENCE`), cluster graph node classification (`CENTRAL_ARTICLE`, `BRIDGE_ARTICLE`, `LEAF_ARTICLE`, `ORPHAN_ARTICLE`, `OVERLAPPING_ARTICLE`), 8-action content opportunity decision taxonomy (`CREATE_NEW`, `REFRESH_EXISTING`, `EXPAND_EXISTING`, `MERGE_EXISTING`, `LINK_EXISTING`, `MONITOR`, `NO_ACTION`, `UNKNOWN`), 9-step New Article Gate, seasonal cluster cycles, Pinterest retention mapping, SEO integration, 8 descriptive cluster health states (`COHERENT`, `DEVELOPING`, `UNDER_COVERED`, `OVERLAPPING`, `FRAGMENTED`, `STALE`, `MIXED`, `UNKNOWN`), standardized audit outputs (Cluster Architecture Record, Content Map, Content Gap Report, Overlap Report, Strategic Link Plan), and decision-support handoffs.
  4. **Content Freshness & Editorial Decay Framework (`elevate-content-freshness-intelligence` v1.0):** Content-level longitudinal intelligence layer evaluating article currency, utility, narrative coherence, and strategic relevance across 20 content freshness dimensions, 14 decay types (`TREND_DECAY`, `SEASONAL_DECAY`, `PRODUCT_DECAY`, `COMMERCIAL_DECAY`, `SEARCH_DECAY`, `EDITORIAL_DECAY`, `SOURCE_DECAY`, `LINK_DECAY`, `MEDIA_DECAY`, `STRUCTURED_DATA_DECAY`, `INTENT_DECAY`, `DUPLICATION_DECAY`, `MIXED_DECAY`, `UNKNOWN`), 8 article freshness statuses (`CURRENT`, `AGING`, `STALE`, `DECAYING`, `CONFLICTED`, `SEASONAL`, `EVERGREEN`, `UNKNOWN`), 11 refresh actions (`CURRENT`, `MONITOR`, `MINOR_REFRESH`, `MAJOR_REFRESH`, `EXPAND`, `RESTRUCTURE`, `CONSOLIDATE`, `REDIRECT`, `ARCHIVE`, `BLOCK`, `UNKNOWN`), protected article identity manifest (canonical URL, search intent, ASIN tracking tags, brand voice), site and cluster audit protocols, and decision-support handoffs.
  5. **Product Performance & Learning Framework (`elevate-product-performance-intelligence` v1.0):** Post-publication performance feedback and learning layer enforcing observation vs inference separation (`OBSERVED`, `INFERRED`, `HYPOTHESIZED`, `UNKNOWN`), metric family separation (`TRAFFIC`, `ENGAGEMENT`, `PRODUCT_INTERACTION`, `COMMERCIAL`), product and article performance schemas, click vs order decoupling, controlled experimentation framework, statistical sample adequacy gates, aggregated privacy protection, zero sales guarantees, and decision-support handoffs.
  6. **Product-to-Article Optimization Framework (`elevate-product-article-optimization` v1.0):** Whole-article product system optimization layer evaluating article intent, reader problems, section purpose, solution mechanisms, product coverage (`COVERED`, `PARTIALLY COVERED`, `UNCOVERED`, `NON-PRODUCT SOLUTION`, `UNKNOWN`), product sequence, commercial density (`LOW`, `BALANCED`, `HIGH`, `OVERLOADED`), Shop The Look coherence, whole-page discovery flow, CTA distribution, mobile parity, zero-product section preservation, article product optimization audits (`OPTIMIZED`, `NEEDS_REFINEMENT`, `OVERLOADED`, `UNDER-SUPPORTED`, `CONFLICTED`, `INSUFFICIENT_EVIDENCE`), editorial vs commercial balance (`EDITORIAL_DOMINANT`, `BALANCED`, `COMMERCIAL_HEAVY`, `COMMERCIAL_OVERLOADED`), product gap analysis, and decision-support handoffs.
  7. **Editorial Product Integration Framework (`elevate-editorial-product-integration` v1.0):** Product-to-editorial placement and contextualization layer mapping article intent (14 intent types), user problems, section purpose, 6 product roles (`PRIMARY`, `SECONDARY`, `SUPPORTING`, `ACCENT`, `ALTERNATIVE`, `EXAMPLE`), 8 reusable product block patterns, contextual explanation schema with explicit tradeoffs, non-manipulative CTAs, intent-specific protocols (`SMALL_SPACE`, `RENTAL`, `BUDGET`, `LUXURY`), zero-product section permissions, article product integration plans, article product audits (`KEEP`, `MOVE`, `REFRAME`, `REDUCE`, `REMOVE`, `REVERIFY`, `REPLACE`, `BLOCK`), and decision-support handoffs.
  8. **Product Freshness & Replacement Intelligence Framework (`elevate-product-freshness-intelligence` v1.0):** Longitudinal product freshness, decay tracking, and replacement decision-support layer evaluating 20 freshness dimensions, 8 action states (`RETAIN`, `REVERIFY`, `REFRESH`, `RESEARCH ALTERNATIVE`, `REPLACE`, `REMOVE`, `BLOCK`, `REQUIRES CONTEXT`), 8 status classifications, longitudinal product record schema with baseline preservation (`replacement_baseline`), bulk article and cluster audit protocols, and decision-support handoffs.
  9. **Product Portfolio & Diversity Intelligence Framework (`elevate-product-portfolio-intelligence` v1.0):** Macro portfolio diversity and coverage layer auditing 18 portfolio dimensions, 5 product reuse classifications (`APPROPRIATE REUSE`, `CONTEXTUAL REUSE`, `HIGH REPETITION`, `DUPLICATE USE`, `UNKNOWN`), category concentration, brand concentration, room/style/problem coverage gaps, visual/functional role distribution, Shop The Look room composition intelligence, cluster cannibalization, candidate portfolio value tagging, contextual diversity assessments, preservation of unknown signals, and decision-support handoffs.
  10. **Product Opportunity Scoring & Prioritization Framework (`elevate-product-opportunity-scoring` v1.0):** Cross-signal decision-support layer synthesizing 10 input signals, 15 opportunity dimensions, 6 priority classifications (`HIGH PRIORITY`, `MEDIUM PRIORITY`, `WATCH`, `LOW PRIORITY`, `BLOCKED`, `INSUFFICIENT EVIDENCE`), hard blocking conditions (`SOURCE_CONFLICT`, `IDENTITY_CONFLICT`, `MARKETPLACE_CONFLICT`), decoupled evidence confidence model, 5 article-type weighting models (`HOW_TO`, `PRODUCT_DISCOVERY`, `SEASONAL`, `PINTEREST`, `SMALL_SPACE`), trend vs demand decoupling, content vs product opportunity decoupling, non-false-precision scoring, standardized Prioritization Matrix, and ethical decision support.
  11. **Commercial Product Validation Framework (`elevate-commercial-product-validation` v1.0):** Fact-checking and readiness validation layer auditing 14 commercial dimensions, 9 candidate validation statuses, and 4 downstream permission decisions.
  12. **Seasonal Product Intelligence Framework (`elevate-seasonal-product-intelligence` v1.0):** Timing & context intelligence layer supporting 10 evaluation questions, 5 seasonal taxonomy dimensions, 10 seasonal signal types, 9-stage seasonal state model, 5-horizon lead-time model, geographic market tagging, problem-solution timing integration, trend/demand matrix decoupling, product research handoffs, content refresh vs creation logic, 12-month freshness tracking, and commercial claim gates.
  13. **Problem → Product Intelligence Framework (`elevate-problem-product-intelligence` v1.0):** 27 decor problem classes, Problem Decomposition Record, symptom vs root-cause decoupling, non-product solution evaluation, 6-tier solution category priority matrix, small-space & rental-friendly constraint logic, multi-problem guide decomposition architecture.
  14. **Niche Product Matching Framework (`elevate-niche-product-matching` v1.0):** 18 core matching dimensions, 14-intent article taxonomy, Elevate decor style taxonomy, problem-to-product functional category mapping, 8-tier product role classification, 6-tier match classification matrix, Shop The Look room composition coherence rules, Pinterest visual coherence, ethical decision-friction psychology, and `SOURCE_CONFLICT` halt protocols.
  15. **Trend & Demand Intelligence Framework (`elevate-trend-demand-intelligence` v1.0):** 15 signal categories, trend vs demand decoupling, 7-tier trajectory classification, seasonal lead-time matrix, Elevate Niche Filter, content opportunity handoffs, 5-tier source quality hierarchy, zero manufactured metrics claims gate, and timestamped recency provenance.
  16. **Web Scraping & Product Discovery Pipeline (`elevate-web-scraping-product-discovery` v1.0):** 10 discovery sources, 5-step permission audit (`robots.txt` & TOS check), strict Amazon access-control prohibition compliance, lightweight-first technology selection ladder, `PRODUCT_CANDIDATE` schema, field-level provenance tracking, duplicate candidate consolidation, and rate-limiting bounds.
  17. **Pinterest Experience Optimization Framework (`elevate-editorial-retention` v4.4):** 10-stage Pin-to-page journey, Pin-to-page continuity, visual-first entry confirmation, section-boundary visual anchors, saveable content structures, visual-first commercial flow, and mobile-first touch parity.
  18. **Product Research Intelligence Framework (`elevate-product-research-intelligence` v1.1):** Evidence-based contextual evaluation framework (`EVIDENCE -> CONTEXTUAL EVALUATION -> CLASSIFICATION`), 12-step evaluation hierarchy, zero numeric threshold cutoffs, explicit signal verification states, `PRICE_UNVERIFIED` & `AVAILABILITY_VERIFIED_AT` protocols, explainable non-mandatory scoring, and written rationale requirements.
  19. **Product Intelligence Case Management Framework (`elevate-product-case-management` v1.0):** Specialized case-management layer establishing durable persistent investigation records (`CASE_ID`), identifier hierarchy isolation (`CASE_ID` $\rightarrow$ `WORKFLOW_ID` $\rightarrow$ `OPPORTUNITY_ID` $\rightarrow$ `RESEARCH_TASK_ID(s)` / `PRODUCT_CANDIDATE_ID(s)` / `ARTICLE_ID`), 16 case record fields, 11 case taxonomy types, 11 case statuses, 21-section case record structure, non-destructive versioned evidence ledger, tri-partite data separation (Observation vs Interpretation vs Decision), Candidate Register (13 candidate statuses), decision log, pending actions register, timeline events, Case Snapshot API, Minimized Case Handoff Contract, resume/reassessment protocols, closure/reopening criteria, deduplication logic, portfolio-level views, and zero direct execution of scraping, research, fact checking, writing, or deployment.
  20. **Research Source Orchestration Framework (`elevate-research-source-orchestration` v1.0):** Standardized research source acquisition layer coordinating legitimate access across 10 canonical source types, 8-method access taxonomy, 7 source states, 8 access tracking flags, Standard Evidence Object schema, 5 observation levels, 9 source adapters (`WEB_SEARCH`, `WEB_PAGE`, `REDDIT`, `PINTEREST`, `BRAND_SITE`, `RETAILER`, `AMAZON`, `TREND_SOURCE`, `ELEVATE_INTERNAL`), source routing matrix, fallback chains, explicit credential/manual action audit matrix, anti-bot bypass prohibition, zero secret leakage, and versioned evidence append protocols.
  21. **Patterns FP-017 through FP-174:** Cataloged failure patterns including FP-165 through FP-174 covering Source Access Confused with Evidence Interpretation, API Access Claimed on Web Search Output, Inferred Signal Promoted to Observed, Anti-Bot Bypass Execution, Missing Credential Silent Fallback Failure, Visual Trend Conflated with Purchase Demand, Unobserved Field Fabrication, Direct Production File Modification During Sourcing, Secret Leakage in Source Artifacts, and Destructive Evidence Ledger Overwrite.
  22. **Rules RULE-015 through RULE-179:** Enforced Source/Interpretation Separation Gate, Access Method Provenance Gate, Observation Level Preservation Gate, Anti-Bot Bypass Prohibition Gate, Explicit Missing Credential Gate, Trend vs Demand Decoupling Gate, Unobserved Field Preservation Gate, Source Production Isolation Gate, Secret Protection Gate, and Versioned Evidence Append Gate.

```
### V4.3 Release — Production Pilot Learning, Specificity & Deployment Tracking (2026-09-19)
- **Root Motivation:** Incorporate live production pilot learnings from `7-dark-bookshelf-styling-ideas.html` ("The Private Library" Dark Academia experience) and the surgical CTA text contrast fix.
- **Capabilities & Gates Added:**
  1. **CSS Specificity Regression Gate:** Reproduce visual bugs in browser; inspect `window.getComputedStyle` before editing CSS. Identify winning selectors and scope fixes with equal/higher specificity.
  2. **Pattern FP-015 (Theme Specificity Override):** Added pattern cataloging how broad selectors like `[data-theme] a` can override component button styles.
  3. **Visual Contrast Gate:** Measure actual rendered text/background contrast across default, `:hover`, `:focus`, `:active`, and `:visited` states.
  4. **Surgical Production-Fix Protocol:** Scope visual corrections on compliant production pages to target-page CSS only.
  5. **Dual Affiliate CTA Validation:** Validate visual contrast/rendering AND navigation attributes (`tag=elevateliv05f-20`, `target="_blank"`, `rel="sponsored nofollow"`, zero `href="#"`, zero `return false`).
  6. **Deployment-State Tracking Protocol:** Track 4 distinct deployment states (*Local Working Tree* $\rightarrow$ *Local Commit* $\rightarrow$ *Origin/Main* $\rightarrow$ *Live Production*).
```
### V4.2 Release — Integrated External Design & 3D Intelligence (2026-09-19)
- **Root Motivation:** Synthesize the downloaded external Antigravity Skills (`3d-web-experience`, `uiux-designer`) with ElevateLivingCo's V4.1 Art Direction layer into a single, cohesive V4.2 architecture without creating skill fragmentation.
- **Capabilities Merged:**
  1. `3d-web-experience`: GLTF compression CLI (`gltf-transform`), Draco/WebP texture optimization, OrbitControls mobile touch-scroll fixes, DPR limits ($\le 1.5$), WebGL context-loss disposal.
  2. `uiux-designer`: 44x44px touch target minimums, stable non-thrashing hover transitions, cursor-pointer rules, z-index scale discipline, line measure limits (65–75 chars).
  3. Real-People Photography Ethics: Prohibited representing synthetic/AI generated images as authentic customers or endorsers.
  4. Stitch Workflow Pipeline: Defined $\text{STITCH DESIGN REFERENCE} \rightarrow \text{AGENT DECISION} \rightarrow \text{CONTROLLED IMPLEMENTATION}$.
- **Mandatory Regression Tests:**
  1. Creative Direction Brief & 16 Validation Gates verified before handoff.
  2. Asset Provenance documented across Classes A–F.
  3. 44x44px minimum touch targets enforced on mobile controls.
  4. Zero layout-thrashing scale transforms on hover states.
  5. Single smooth-scroll engine initialized (Lenis vs Locomotive vs Native).
  6. Three.js GPU resource disposal verified on canvas unmount.
  7. 0 invented prices, ratings, reviews, or scarcity claims.
  8. Amazon affiliate Associate tag and ASIN integrity 100% verified.
  9. Measured performance thresholds verified before reporting "passed".
  10. Zero production website files modified during skill system updates.
```

---

## 2. Phase 17 — The Permanent Learning Loop

```
[FAILURE ENCOUNTERED] ──> [ROOT CAUSE ANALYSIS] ──> [DETECTION GAP IDENTIFIED] ──> [PREVENTION RULE DEFINED] ──> [REGRESSION TEST CREATED] ──> [SKILL SPECIFICATION UPDATED]
```

### Standardized Failure-to-Prevention Pattern:
1. **FAILURE:** Document exact symptom and broken contract.
2. **ROOT CAUSE:** Trace technical, architectural, or process root cause.
3. **DETECTION:** Define automated assertion/detection rule.
4. **PREVENTION:** Formulate strict non-negotiable prevention rule.
5. **REGRESSION TEST:** Create automated static or browser test.
6. **SKILL UPDATE:** Encode rule permanently into target skill and `.agents/skills/_learning/`.

---

## 3. Mandatory Evolution Protocol

After ANY failed production task, bug fix, or un-predicted regression:
1. Classify failure category.
2. Identify true root cause and QA detection gap.
3. Update relevant skill specification in `.agents/skills/`.
4. Add permanent regression rule to `.agents/skills/_learning/REGRESSION-RULES.md`.
5. Append lesson to `.agents/skills/_learning/LESSONS.md`.
6. Add failure pattern entry to `.agents/skills/_learning/FAILURE-PATTERNS.md`.
7. Increment skill version and update `.agents/skills/CHANGELOG.md`.

---

## Related Skills
- `elevate-systematic-debugging`: Provides 9-step root cause analysis for lesson inputs.
- `elevate-regression-prevention`: Incorporates new rules into pre-commit gates.
