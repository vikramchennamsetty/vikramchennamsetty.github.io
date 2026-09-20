---
name: elevate-search-visibility
description: >-
  Provides SEO, GEO (Generative Engine Optimization), and AEO (Answer Engine Optimization) audit intelligence, 
  search-intent analysis, entity clarity evaluation, schema recommendations, and citation readiness for Elevate.
version: 4.6
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
scope: search-visibility-audit-and-intelligence
risk: low
---

# Elevate Search Visibility Skill (V4.6 — SEO / GEO / AEO Intelligence Layer)

## 1. PURPOSE
Establishes a normalized audit and intelligence layer for **Search Engine Optimization (SEO)**, **Generative Engine Optimization (GEO)** (for AI search platforms like Perplexity, ChatGPT Search, and Gemini), and **Answer Engine Optimization (AEO)** (for Google Featured Snippets and voice answers).

> [!IMPORTANT]
> **ARCHITECTURE BOUNDARY:**
> - `elevate-seo-performance` is the **authoritative execution and performance controller** (modifies HTML meta, title tags, canonicals, and site speed).
> - `elevate-search-visibility` is the **audit, intent, entity, and search-visibility intelligence layer** (evaluates search readiness, constructs AEO Q&A blocks, plans schema, and audits GEO citation readiness).

---

## 2. CANONICAL EVIDENCE STATES & FINDING CATEGORIES

### Canonical Evidence States (Replaces arbitrary 1-10 numerical scoring)
All search visibility findings and audits MUST be evaluated using evidence-backed states:
- `VERIFIED`: Confirmed via static inspection or DOM parsing.
- `SUPPORTED`: Backed by explicit structural evidence.
- `PARTIAL`: Incompletely implemented.
- `MISSING`: Confirmed absent after complete DOM inspection.
- `UNVERIFIED`: Observed without authoritative verification.
- `UNKNOWN`: Insufficient evidence to evaluate.
- `STALE`: Outdated evidence requiring re-audit.
- `CONFLICTED`: Contradictory metadata or schema definitions.
- `NOT_APPLICABLE`: Dimension not relevant to content type.

### Explicit Finding Categories
Audit findings MUST be classified under one of 12 explicit categories:
1. `SEO_TECHNICAL`: Title tag length, meta descriptions, canonical tags, indexability, viewport.
2. `SEO_CONTENT`: Heading hierarchy, word count density, semantic keyword coverage, scannability.
3. `SEO_INFORMATION_ARCHITECTURE`: Site navigation, URL structures, internal link topology.
4. `SEO_SCHEMA`: Structured data syntax, JSON-LD validity, schema graph completeness.
5. `GEO_ENTITY`: Clear entity definitions, brand authority, author credentials, E-E-A-T signals.
6. `GEO_TRUST`: Contact info, privacy transparency, verified merchant/publisher data.
7. `GEO_CITATION`: Fact density, statistical grounding, external authoritative references.
8. `GEO_CONTENT_SYNTHESIS`: Plain-language core claims, summary boxes for AI synthesis.
9. `AEO_DIRECT_ANSWER`: Concise 40–50 word direct answers formatted for featured snippets.
10. `AEO_QUESTION_COVERAGE`: Target user Q&A alignment and H2/H3 question headers.
11. `AEO_STRUCTURED_FORMAT`: Bulleted lists, numbered step-by-step procedures, comparison tables.
12. `AEO_VOICE_READINESS`: Conversational speech pattern clarity and SpeakableSpecification schema.

---

## 3. CORE INTELLIGENCE DIMENSIONS

### 1. Traditional SEO Audit Intelligence
- **Title Tag Alignment**: 50–60 characters, primary keyword front-loaded, click-compelling.
- **Meta Description Alignment**: 150–160 characters, explicit call-to-action, semantic modifiers.
- **Heading Hierarchy**: Singular H1, logical H2/H3 flow, zero heading-stuffing.
- **Canonical & Robots Alignment**: Self-referencing canonical, `index, follow` directives.
- **Open Graph / Social Metadata**: `og:title`, `og:description`, `og:image` completeness.

### 2. Generative Engine Optimization (GEO — AI Search Readiness)
- **Entity Clarity**: Clearly names and defines the core subject entity (e.g. *Small Apartment Entryway Organization*).
- **Factual Density**: High ratio of specific dimensions, materials, and actionable room constraints.
- **Author & E-E-A-T Signals**: Named author profiles, publisher credentials, and verified editorial guidelines.
- **AI Citation Readiness**: Stated core claims near top of sections to allow AI search tools (ChatGPT, Perplexity) to extract and cite Elevate as the authoritative source.

### 3. Answer Engine Optimization (AEO — Snippets & Q&A)
- **Direct Answer Block**: 40–50 word summary paragraph immediately following a question-based H2 heading.
- **Structured List Patterns**: Ordered `<ol>` for step-by-step assembly/organization guides; unordered `<ul>` for feature comparisons.
- **FAQ Schema Plan**: FAQPage JSON-LD schema wrapping key user questions and direct answers.

---

## 4. CROSS-SKILL CONTRACTS & HANDOFFS

```
                               ┌─────────────────────────────────────────┐
                               │        elevate-search-visibility        │
                               │    (Audit & Search-Visibility Layer)    │
                               └────────────────────┬────────────────────┘
                                                    │
        ┌───────────────────┬───────────────────────┼───────────────────────┬───────────────────┐
        ▼                   ▼                       ▼                       ▼                   ▼
┌───────────────┐   ┌───────────────┐       ┌───────────────┐       ┌───────────────┐   ┌───────────────┐
│ elevate-seo-  │   │ elevate-      │       │ elevate-      │       │ elevate-      │   │ elevate-      │
│ performance   │   │ source-       │       │ content-      │       │ content-      │   │ product-      │
│ (Execution &  │   │ integrity     │       │ freshness-    │       │ cluster-      │   │ article-      │
│ Technical     │   │ (Evidence &   │       │ intelligence  │       │ intelligence  │   │ optimization  │
│ Controller)   │   │ Authority)    │       │ (Lifecycle)   │       │ (Topology)    │   │ (Commercial)  │
└───────────────┘   └───────────────┘       └───────────────┘       └───────────────┘   └───────────────┘
```

- **Handoff to `elevate-seo-performance`**: Provides the Search Specification; `elevate-seo-performance` executes HTML meta, title, and performance edits.
- **Handoff to `elevate-source-integrity`**: Passes citations and claims to `elevate-source-integrity` for source verification before marking GEO citation readiness as `VERIFIED`.
- **Handoff to `elevate-content-freshness-intelligence`**: Receives decay signals to update search specifications.
- **Handoff to `elevate-content-cluster-intelligence`**: Receives internal link topology for `INTERNAL_LINK_TARGETS`.

---

## 5. STRICT PROHIBITION PROTOCOLS
- **NO INVENTED METRICS**: Never invent keyword search volume, CPC, keyword difficulty scores, or ranking positions.
- **NO FABRICATED AI VISIBILITY**: Never fabricate ChatGPT/Perplexity citation ranks or Gemini visibility metrics.
- **NO SCORE MODEL OVERRIDE**: Never use 1–10 numerical scoring as the canonical decision model.

---

## 6. QA CHECKLIST
- [ ] Primary search intent and entity clearly defined.
- [ ] Canonical URL self-referencing and verified.
- [ ] AEO direct answer block ($\le 50$ words) included for key questions.
- [ ] GEO entity and E-E-A-T signals documented.
- [ ] Handoff to `elevate-seo-performance` defined.
