---
name: elevate-content-cluster-intelligence
description: Strategic content architecture skill for designing, evaluating, and evolving Elevate content clusters, defining pillar/supporting relationships, topical coverage, internal link graphs, and content cannibalization risk without creating unnecessary duplicate pages.
version: 1.0
domain: content-cluster-and-topical-architecture-intelligence
ownership: strategic-cluster-design-and-topical-architecture
depends_on:
  - elevate-cluster-qa
  - elevate-seo-performance
  - elevate-content-freshness-intelligence
  - elevate-editorial-retention
  - elevate-trend-demand-intelligence
  - elevate-problem-product-intelligence
  - elevate-product-portfolio-intelligence
  - elevate-product-opportunity-scoring
  - elevate-niche-product-matching
  - elevate-seasonal-product-intelligence
  - elevate-source-integrity
---

# Elevate Content Cluster & Topical Architecture Intelligence

## 1. Overview & Core Philosophy

`elevate-content-cluster-intelligence` owns the strategic design, topical coverage, internal link architecture, and structural evolution of Elevate's content clusters.

### Core Question
> **"How should individual articles work together to comprehensively serve a decor topic, while minimizing unnecessary duplication and maximizing useful topical coverage?"**

### Ownership Separation
- **`elevate-cluster-qa`**: Validates post-implementation technical quality (HTML hierarchy, schema syntax, link health).
- **`elevate-content-cluster-intelligence`** (THIS SKILL): Owns strategic cluster design, pillar identification, supporting guide role mapping, content gap analysis, internal link purpose planning, overlap/cannibalization auditing, and cluster evolution.

### Core Principles
1. **User Intent Over Keyword Count:** Clusters represent coherent user-information systems, not random collections of keyword-targeted pages. Keyword volume alone MUST NOT trigger cluster creation or new article generation.
2. **Improve Before Creating:** Existing articles MUST be evaluated for refresh, expansion, or restructuring before recommending a new standalone article (`REFRESH_EXISTING` / `EXPAND_EXISTING` > `CREATE_NEW`).
3. **Pillar Coherence:** A pillar article provides broad foundational value; supporting guides provide deep, specific problem-solving utility. Pillars are created only when foundational synthesis is required.
4. **Editorial Link Purpose:** Internal links must serve clear user navigation and editorial discovery (`DISCOVERY`, `DEEPENING`, `REFERENCE`, `NEXT_STEP`). Link stuffing is strictly prohibited.
5. **Product-Neutral Expansion:** Clusters exist to solve reader problems and build topical authority. Affiliate product opportunities MUST NOT independently drive cluster expansion.

---

## 2. Core Architecture Pipeline

```
TOPIC
  ↓
CORE USER PROBLEMS (`elevate-problem-product-intelligence`)
  ↓
PILLAR ARTICLE (Foundational Overview)
  ↓
SUPPORTING ARTICLES (Deep Problem/Style Guides)
  ↓
SUBTOPICS (Targeted Technical/Room Details)
  ↓
INTERNAL LINKS (Strategic Editorial Graph)
  ↓
PRODUCT ECOSYSTEM (`elevate-product-portfolio-intelligence`)
  ↓
FRESHNESS LOOP (`elevate-content-freshness-intelligence`)
```

---

## 3. Contextual Cluster Types

Elevate supports 10 contextual cluster types based on primary reader focus:

1. `STYLE`: Defined aesthetic (e.g. *Dark Academia*, *Warm Minimalism*, *Japandi*).
2. `ROOM`: Specific spatial environment (e.g. *Small Living Room*, *Patio*, *Kitchen*).
3. `PROBLEM`: Functional challenge (e.g. *Lighting Deficits*, *Clutter Control*, *Awkward Corners*).
4. `PRODUCT CATEGORY`: Specialized furniture/decor category (e.g. *Modular Sofas*, *Task Lighting*).
5. `LIFESTYLE`: Living situation (e.g. *Rental Living*, *Pet-Friendly Home*, *First Apartment*).
6. `SEASONAL`: Time-bound seasonal guides (e.g. *Fall Living Room Refresh*, *Outdoor Summer Patio*).
7. `DESIGN PRINCIPLE`: Core interior design concepts (e.g. *Color Theory*, *Scale & Ratio*, *Layered Lighting*).
8. `HOW-TO`: Instructional execution guides (e.g. *How to Measure a Rug*, *How to Hang Gallery Walls*).
9. `COMPARISON`: Decision-support guides (e.g. *Linen vs Velvet*, *Tension Rods vs Drill Mounts*).
10. `MIXED`: Multi-dimensional hybrid clusters combining style, room, and lifestyle constraints.

---

## 4. Article Roles (12 Taxonomy Roles)

Every page within a cluster MUST be assigned an explicit role with documented contextual rationale:

1. `PILLAR`: Broad, foundational guide covering the complete topic scope and linking to supporting guides.
2. `SUPPORTING_GUIDE`: In-depth exploration of a major subtopic within the cluster.
3. `HOW_TO`: Step-by-step instructional guide focused on execution mechanics.
4. `PROBLEM_SOLUTION`: Specialized guide solving a specific functional room/decor challenge.
5. `STYLE_GUIDE`: Aesthetic-focused breakdown of visual rules, palettes, and styling principles.
6. `PRODUCT_DISCOVERY`: Curated, highly contextual product discovery guide.
7. `COMPARISON`: Evaluates trade-offs between two or more design choices or materials.
8. `SEASONAL_SUPPORT`: Time-sensitive seasonal satellite page supporting an evergreen pillar.
9. `INSPIRATION`: Visual-first moodboard and design inspiration showcase.
10. `REFERENCE`: Technical scale, dimension, or material reference guide.
11. `MIXED`: Hybrid article serving multiple complementary roles.
12. `UNKNOWN`: Unclassified role requiring editorial definition.

---

## 5. Topical Coverage & Content Gap Analysis

### Topical Coverage Classifications
For every subtopic, problem, and room question within a cluster:
- `COVERED`: Thoroughly addressed in existing cluster articles.
- `PARTIALLY_COVERED`: Mentioned briefly; lacks dedicated depth or practical breakdown.
- `UNCOVERED`: Completely missing from existing cluster content.
- `OVERLAPPING`: Addressed redundantly across multiple articles without contextual distinction.
- `UNKNOWN`: Insufficient evidence to determine coverage level.

### Legitimate Content Gaps
New content opportunities are recognized ONLY when a genuine user-need gap is proven:
- Missing core foundational explanation.
- Missing specific problem-solving breakdown.
- Missing practical how-to execution guide.
- Missing comparison between key material/layout options.
- Missing room-specific application (e.g., Applying Dark Academia to a Small Bedroom).
- Missing small-space or rental-friendly variant.
- Missing seasonal application for an evergreen concept.
- Missing product category breakdown where products add genuine value.

---

## 6. Article Overlap & Cannibalization Evaluation

### Overlap Audit Dimensions (9 Dimensions)
When comparing two articles, audit across:
1. `SEARCH_INTENT`: Primary query intent category.
2. `USER_PROBLEM`: Specific reader problem addressed.
3. `ROOM_CONTEXT`: Target room or spatial constraints.
4. `STYLE_CONTEXT`: Aesthetic theme or decor style.
5. `AUDIENCE`: Target lifestyle or skill level (e.g. Renter vs Homeowner).
6. `EDITORIAL_PURPOSE`: Core goal of the prose narrative.
7. `INFORMATION_DEPTH`: Overview vs detailed step-by-step breakdown.
8. `PRODUCT_PURPOSE`: Functional role of embedded product recommendations.
9. `SEASONAL_CONTEXT`: Time horizon or evergreen nature.

### Overlap Taxonomy
- `DISTINCT`: Clear separation of intent, audience, and content; no overlap.
- `COMPLEMENTARY`: Shared topic, but complementary angles (e.g. Overview vs Deep How-To).
- `PARTIAL_OVERLAP`: Minor section overlap; fixable via internal cross-linking or minor edits.
- `HIGH_OVERLAP`: Substantial overlap requiring differential expansion or structural revision.
- `DUPLICATIVE`: Identical intent and content; candidate for 301 consolidation (`MERGE_EXISTING`).
- `UNKNOWN`: Telemetry or content diff incomplete.

### Cannibalization Risk States
- `LOW_RISK`: Distinct search intents and unique primary queries.
- `MONITOR`: Minor query overlap observed; monitor ranking trajectories.
- `POTENTIAL_OVERLAP`: Shared search intent detected without confirmed ranking conflict.
- `HIGH_OVERLAP`: Confirmed ranking instability or query cannibalization across cluster pages.
- `UNKNOWN`: Search telemetry unverified.

> [!IMPORTANT]
> **Use `CONTENT_OVERLAP` when only content similarity is established.** Do NOT claim search-engine cannibalization without empirical search analytics evidence (`elevate-seo-performance`).

---

## 7. Strategic Internal Link Architecture

### Structure Model
```
PILLAR
  ↕ (High-Level Context & Deepening Links)
SUPPORTING ARTICLE
  ↕ (Related Subtopic & Next Step Links)
RELATED ARTICLE / LEAF
```

### Contextual Link Purposes
Every strategic internal link MUST serve one of these 6 explicit editorial purposes:
1. `DISCOVERY`: Introduces reader to broader cluster concepts.
2. `DEEPENING`: Directs reader from overview prose to an in-depth supporting guide.
3. `REFERENCE`: Links to technical scale, measurement, or material specs.
4. `NEXT_STEP`: Guides reader to logical next sequential action in a design workflow.
5. `RELATED_TOPIC`: Connects complementary topics across distinct clusters (bridge links).
6. `SUPPORTING_EVIDENCE`: Links to authoritative supporting research or detailed guides.

### Prohibited Link Patterns
- `LINK_STUFFING`: Excessive links crammed into paragraphs without editorial flow.
- `IRRELEVANT_LINK`: Links connecting unrelated topics solely for PageRank passing.
- `REPETITIVE_LINK`: Multiple identical destination links within the same section.
- `FORCED_LINK`: Links interrupting reading rhythm or misusing anchor text context.

---

## 8. Cluster Graph Node Classifications

Every page in a cluster graph is categorized by its structural position:
- `CENTRAL_ARTICLE`: Primary pillar page anchoring the cluster topic graph.
- `BRIDGE_ARTICLE`: Connects two distinct clusters (e.g. *Small Space Living* $\leftrightarrow$ *Dark Academia*).
- `LEAF_ARTICLE`: Highly specific supporting page with deep focus and no downstream cluster subpages.
- `ORPHAN_ARTICLE`: Page lacking inbound internal links from cluster pillar or supporting guides.
- `OVERLAPPING_ARTICLE`: Page duplicating intent of another node in the cluster graph.
- `UNKNOWN`: Unmapped structural node.

---

## 9. Content Opportunity Decision Taxonomy

For any proposed content change or new topic idea, classify into one of 8 actions:

1. `CREATE_NEW`: Create a new standalone page ONLY when all 9 New Article Gates pass.
2. `REFRESH_EXISTING`: Update outdated facts, links, or media on an existing page.
3. `EXPAND_EXISTING`: Add new subtopic sections or solutions to an existing guide.
4. `MERGE_EXISTING`: Consolidate duplicative articles into a stronger parent guide.
5. `LINK_EXISTING`: Add internal links between existing pages to resolve coverage gaps.
6. `MONITOR`: Keep cluster structure as-is; re-evaluate in next audit cycle.
7. `NO_ACTION`: Topic idea rejected; existing coverage is sufficient.
8. `UNKNOWN`: Insufficient evidence to decide.

---

## 10. The 9-Step New Article Gate

A new article recommendation MUST pass ALL 9 gates cleanly before being proposed:

1. **User Need Gate:** Verified evidence of a genuine reader information or problem-solving need.
2. **Distinct Intent Gate:** Search and editorial intent is distinct from all existing site pages.
3. **Existing Coverage Gate:** Confirmed that no existing page can be expanded to satisfy the need.
4. **Cluster Fit Gate:** The cluster graph has an explicit structural node for the page.
5. **Information Value Gate:** Page will provide substantive, non-derivative editorial value.
6. **No-Overlap Gate:** Page will not create content overlap or cannibalization with cluster pages.
7. **Linkability Gate:** Minimum 2 logical inbound internal links can immediately be established.
8. **Product Neutrality Gate:** Creation is driven by reader utility, NOT affiliate product placement.
9. **Evidence Gate:** Proposal is supported by trend, search, or problem evidence.

---

## 11. Cluster Health States (8 Descriptives)

Elevate rejects black-box numeric cluster scores. Cluster health is classified into broad descriptive states with explicit written rationale:

- `COHERENT`: Well-structured pillar, distinct supporting guides, robust internal links, zero overlap.
- `DEVELOPING`: Core pillar present with some supporting guides; active expansion in progress.
- `UNDER_COVERED`: Pillar or major supporting guides missing; significant user problem gaps.
- `OVERLAPPING`: Multiple cluster articles share intent or duplicate content.
- `FRAGMENTED`: Supporting articles exist but lack internal links or clear pillar relationship.
- `STALE`: Cluster pages or internal link graphs contain outdated information or dead links.
- `MIXED`: Mixed health signals (e.g. high pillar traffic but fragmented supporting links).
- `UNKNOWN`: Telemetry or cluster graph mapping incomplete.

---

## 12. Standardized Audit Outputs

### 12.1 Cluster Architecture Record

```markdown
### Cluster Architecture Record

CLUSTER: [Cluster Name, e.g. Dark Academia Living Room]
CLUSTER_TYPE: [STYLE / ROOM / PROBLEM / etc.]
PRIMARY_AUDIENCE: [e.g., Renters / Small Space Owners]
PRIMARY_PROBLEMS: [List of primary reader problems]
PILLAR: [URL / Title of Pillar Page]
SUPPORTING_ARTICLES: [List of supporting guides]
TOPIC_COVERAGE: [COVERED / PARTIALLY_COVERED / UNCOVERED / etc.]
PROBLEM_COVERAGE: [PROBLEM_COVERED / PROBLEM_PARTIAL / etc.]
ARTICLE_ROLES: [Summary of role distribution]
INTERNAL_LINK_STATUS: [COHERENT / FRAGMENTED / ORPHAN_DETECTED / etc.]
OVERLAP_STATUS: [DISTINCT / PARTIAL_OVERLAP / HIGH_OVERLAP / etc.]
PRODUCT_ECOSYSTEM: [COHERENT / REPETITIVE / PRODUCT_NEUTRAL / etc.]
TREND_STATUS: [RISING / STABLE / SEASONAL / DECLINING]
FRESHNESS_STATUS: [CURRENT / AGING / STALE / DECAYING]
PINTEREST_STATUS: [OPTIMIZED / NEEDS_VISUAL_ANCHORS / etc.]
SEO_STATUS: [INDEXED / CANONICAL_OK / LINK_HEALTH_PASS]
CLUSTER_STATE: [COHERENT / DEVELOPING / UNDER_COVERED / OVERLAPPING / FRAGMENTED / STALE / MIXED / UNKNOWN]
CONFIDENCE: [HIGH / MEDIUM / LOW / UNKNOWN]
```

### 12.2 Content Map Table

| Article Path / Title | Role | Primary Intent | Problem Addressed | Related Cluster Pages | Internal Link Purpose | Action State |
|---|---|---|---|---|---|---|
| `/dark-academia-living-room` | `PILLAR` | Overview & Style Rules | Mood & Decor Palette | `/dark-academia-bookshelf`, `/dark-academia-lighting` | `DEEPENING` | `CURRENT` |
| `/dark-academia-bookshelf` | `SUPPORTING_GUIDE` | Shelf Styling | Storage & Visual Layering | `/dark-academia-living-room` | `REFERENCE` | `EXPAND_EXISTING` |

### 12.3 Content Gap Report

```markdown
### Supported Content Opportunities

1. **Topic:** [Subtopic Name]
   - **User Need:** [Explicit user information or problem need]
   - **Evidence Source:** [`elevate-problem-product-intelligence` / `elevate-trend-demand-intelligence`]
   - **Existing Coverage:** [Why existing pages do not satisfy this need]
   - **Recommended Action:** [`CREATE_NEW` / `EXPAND_EXISTING` / `REFRESH_EXISTING`]
   - **Confidence:** [`HIGH` / `MEDIUM` / `LOW`]
```

### 12.4 Article Overlap & Relationship Audit

```markdown
### Article Relationship Audit

ARTICLE A: [URL / Title A]
ARTICLE B: [URL / Title B]
RELATIONSHIP: [DISTINCT / COMPLEMENTARY / PARTIAL_OVERLAP / HIGH_OVERLAP / DUPLICATIVE / UNKNOWN]
EVIDENCE: [Intent, problem, room, style, and content comparisons]
RECOMMENDED ACTION: [KEEP_SEPARATE / LINK_EXISTING / EXPAND_DIFFERENTIALLY / MERGE_EXISTING / UNKNOWN]
```

### 12.5 Strategic Internal Link Plan

```markdown
### Strategic Internal Link Plan

SOURCE ARTICLE: [URL A]
DESTINATION ARTICLE: [URL B]
LINK PURPOSE: [DISCOVERY / DEEPENING / REFERENCE / NEXT_STEP / RELATED_TOPIC / SUPPORTING_EVIDENCE]
WHY RELEVANT: [Editorial rationale explaining value to reader]
PRIORITY: [HIGH / MEDIUM / LOW]
```

---

## 13. Inter-Skill Handoffs

- **Implementation QA:** Hand off to `elevate-cluster-qa` for HTML/schema validation.
- **Problem Mapping:** Query `elevate-problem-product-intelligence` for problem taxonomy.
- **Product Ecosystem:** Query `elevate-product-portfolio-intelligence` for portfolio diversity.
- **Trend Signals:** Query `elevate-trend-demand-intelligence` for emerging subtopics.
- **Freshness Audits:** Query `elevate-content-freshness-intelligence` for page decay states.
- **Pinterest Journeys:** Query `elevate-editorial-retention` for pin-to-page visual continuity.
- **Search Telemetry:** Query `elevate-seo-performance` for technical indexing and search intent evidence.
