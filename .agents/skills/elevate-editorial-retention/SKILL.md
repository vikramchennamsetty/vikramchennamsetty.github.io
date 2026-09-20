---
name: elevate-editorial-retention
description: >-
  Guides editorial structure, reader retention, Pinterest experience optimization, scroll progression, section rhythm, 
  skimmability, and information density for ElevateLivingCo luxury design guides.
version: 4.4
triggers:
  - Writing, structuring, or editing article content and guide layouts.
  - Designing Pinterest landing pages, first-viewport entries, or visual discovery flows.
  - Structuring section flow, intro hooks, visual breakdowns, or product integration.
  - Optimizing bounce rate, dwell time, scroll depth, and reading comprehension.
scope: editorial-retention-and-pinterest-experience
risk: medium
source:
  type: native-master
  version: 4.4
---

# Elevate Editorial Retention & Pinterest Experience Skill (V4.4)

## Purpose
Optimizes editorial engagement, reader retention, Pinterest visitor conversion, and scroll depth for ElevateLivingCo. Ensures every article balances luxury interior design depth, clear narrative progression, skimmable structure, mobile-first touch UX, and ethical product integration—converting high-intent visual search traffic into engaged readers and confident shoppers.

---

## 1. Preferred Editorial Narrative Blueprint

Every ElevateLivingCo article MUST follow this 7-stage narrative structure:

```
[1. HOOK] ──> [2. PROBLEM] ──> [3. TENSION] ──> [4. INSIGHT] ──> [5. VISUAL EXPLANATION] ──> [6. SOLUTION & PRODUCT APPLICATION] ──> [7. DECISION]
```

### Stage Breakdown:
1. **HOOK:** A bold visual or spatial observation that instantly captures interest above the fold.
2. **PROBLEM:** Clear articulation of the common aesthetic or functional mistake (e.g. "Why small living rooms feel cluttered even with minimal furniture").
3. **TENSION:** Why standard advice fails (e.g. "Buying smaller furniture often makes small spaces look even smaller").
4. **INSIGHT:** The non-obvious interior design rule (e.g. "Scale and sightlines matter more than square footage").
5. **VISUAL EXPLANATION:** Spatial breakdown using diagrams, SVGs, high-contrast imagery, or step-by-step room rules.
6. **SOLUTION & PRODUCT APPLICATION:** Curated, contextually relevant product recommendations that directly apply the insight.
7. **DECISION:** Clear summary matrix or Shop-The-Look takeaway enabling effortless reader choice.

---

## 2. Pinterest Experience Optimization Framework (V4.4)

Enforces the complete Pinterest visitor journey:
$$\text{Pinterest Pin} \rightarrow \text{Visual Expectation} \rightarrow \text{Landing Confirmation} \rightarrow \text{Visual Interest} \rightarrow \text{Editorial Content} \rightarrow \text{Progressive Discovery} \rightarrow \text{Contextual Interaction} \rightarrow \text{Internal Exploration} \rightarrow \text{Commercial CTA}$$

### Rule 1: Pin-to-Page Continuity & Intent Parity
- **Immediate Promise Match:** The landing page MUST immediately confirm the visual/topic promise of the incoming Pinterest Pin (title, H1, hero image, aesthetic theme) within the first screen.
- **Zero Clickbait / Zero Deception:** Never use misleading titles, unverified imagery, exaggerated claims, or mismatched thumbnails to attract clicks.

### Rule 2: Visual-First Entry
- **Early Visual & Topical Confirmation:** Pinterest-oriented pages should provide strong visual and topical confirmation early in the first viewport. Use approximately 600px only as a diagnostic guideline, not a fixed layout requirement. Adapt to viewport size, hero composition, content hierarchy, and device.
- **Evaluation Criteria:** Evaluate topic confirmation, visual confirmation, title/H1 alignment, first-screen comprehension, and responsive composition. Do not force content into 600px merely to satisfy a rule.
- **High-Relevance Hero Asset:** Feature high-quality, topic-aligned imagery in the first viewport.
- **Scannable First Viewport:** Ensure a visitor understands the page subject instantly without being forced to read long introductory text blocks.
- **Editorial Identity Protection:** Preserve site visual branding (Cormorant Garamond / Cinzel typography, dark ambient aesthetic); avoid generic template heroes.

### Rule 3: Saveable Content Structure
Incorporate high-value content patterns that naturally provide bookmark/save value for visual readers:
- **Numbered Design Ideas & Styling Formulas:** (e.g. *The 40-20-20-10-10 Bookshelf Formula*).
- **Truthful Before/After Transformations:** Document real before-and-after results without exaggerating results.
- **Scannable Checklists & Color Palettes:** Visual swatches, material hierarchies, and quick-start checklists.
- **Concise Visual Rules & Room Setup Guides:** Step-by-step room breakdowns.
- **Zero Manufactured Claims:** Strictly forbid fake "save this", fabricated viral statistics, or artificial urgency.

### Rule 4: Progressive Discovery & Section Rhythm
- **Natural Section Rhythm & Visual Anchors:** Use visual anchors (high-res imagery, SVG diagrams, interactive product cards) and meaningful subheadings at natural comprehension and section boundaries. Avoid fixed word-count quotas; prioritize content meaning, visual rhythm, reader intent, and information hierarchy.
- **Contextual Internal Exploration:** Guide readers to related articles within the same content cluster (e.g., bookshelf styling, moody entryway, quiet luxury).
- **Zero Forced Mechanics:** Prohibit artificial suspense, forced scrolling, hidden content, or deceptive interaction.

### Rule 5: Visual $\rightarrow$ Editorial $\rightarrow$ Commercial Flow
Where affiliate products exist, strictly enforce the visual-first commercial flow:
$$\text{VISUAL INSPIRATION} \rightarrow \text{EDITORIAL EXPLANATION} \rightarrow \text{PRODUCT CONTEXT} \rightarrow \text{WHY IT WORKS} \rightarrow \text{COMMERCIAL CTA}$$
- **Never Product-First:** Editorial advice and spatial intelligence must always lead. Product cards enter naturally only after spatial context and design rationale are established.

### Rule 6: Mobile-First Pinterest Traffic UX
- **Zero Horizontal Overflow:** Enforce `scrollWidth === clientWidth` at all mobile viewports (320px–480px).
- **Touch Target Minimums:** All interactive buttons, tabs, links, and accordions MUST be $\ge 44\times 44\text{px}$.
- **Touch-Friendly Interactions:** Provide full tap/click alternatives for 100% of hover effects. Hover-only locks are strictly prohibited.
- **Zero Layout Shift:** Explicit `width`, `height`, and `aspect-ratio` on all images to guarantee $0.00$ CLS.

### Rule 7: Image System & Asset Provenance
- **Deliberate Aspect Ratios:** Standardized image ratios ($16:9$, $4:3$, $1:1$) aligned with layout containers.
- **Descriptive Alt Text:** Every image MUST specify descriptive, keyword-rich alt text detailing its visual design role.
- **Authorized Imagery Only:** Use only verified production image assets. Never use unauthorized or unverified commercial imagery.

### Rule 8: Performance Budget & Tech Constraints
- **Lightweight Tech Ladder:** Prefer CSS $\rightarrow$ Optimized WebP/JPEG Imagery $\rightarrow$ Vanilla JS $\rightarrow$ GSAP (only where choreography is justified). No WebGL/Three.js unless spatial 3D exploration is required.
- **Measured Metrics Only:** Never state performance "passed" or "improved" without empirical measurement (LCP $\le 1.8\text{s}$, INP $< 100\text{ms}$, CLS $< 0.1$).

### Rule 9: SEO Preservation
- **SEO Protection:** Pinterest optimizations must preserve canonical tags, meta titles, descriptions, semantic H1–H3 hierarchy, JSON-LD schemas, and indexability.
- **No Keyword Stuffing:** Maintain natural editorial language.

### Rule 10: Ethical Psychology & Prohibited Claims Gate
- **Allowed Cognitive Principles:** Curiosity through useful information, progressive disclosure, visual anchoring, cognitive chunking, choice architecture.
- **Prohibited Patterns:** 0 fake scarcity, 0 fake urgency, 0 fake social proof, 0 fake reviews, 0 synthetic human endorsers, 0 dark patterns.
- **Pinterest Claims Prohibition Gate:** ABSOLUTE PROHIBITION on stating an article, image, or design "will go viral", "will rank on Pinterest", "will get saves", or "will increase traffic" unless supported by actual measured empirical evidence. Treat as internal design objectives, not promises or guarantees.

---

## 3. Editorial Anti-Pattern Rules (STRICT PROHIBITION)

> [!WARNING]
> **PROHIBITED EDITORIAL & PINTEREST PATTERNS:**
> - **NO Generic AI Openings:** Never start articles with "In today's fast-paced world...", "When it comes to decorating...", or "Interior design is an art form...".
> - **NO Filler Padding:** Never artificially inflate word count. Concise, dense, high-value advice always wins.
> - **NO Product-First Aggression:** Never display commercial product grids before establishing editorial authority and spatial rationale.
> - **NO Hover-Only Mobile Traps:** Never lock visual information or interactive triggers behind desktop `:hover` states without mobile tap handlers.
> - **NO Unmeasured Performance Claims:** Never report performance improvements without numerical browser measurement.
> - **NO Unsubstantiated Viral Guarantees:** Never claim layout changes guarantee Pinterest traffic, saves, or viral reach.

---

## 4. Readability & Pinterest Flow Checklist

- [ ] Does the article first viewport immediately confirm the visual/topic promise of incoming traffic early in the first screen (using ~600px as a diagnostic guideline)?
- [ ] Is the narrative structured sequentially (Hook $\rightarrow$ Problem $\rightarrow$ Tension $\rightarrow$ Insight $\rightarrow$ Visual Explanation $\rightarrow$ Solution $\rightarrow$ Decision)?
- [ ] Are headings scannable and punctuated at natural section boundaries (without rigid word-count quotas)?
- [ ] Are visual elements (imagery, swatches, diagrams) positioned at natural comprehension boundaries to maintain visual rhythm?
- [ ] Does the commercial sequence follow `VISUAL -> EDITORIAL -> CONTEXT -> WHY IT WORKS -> CTA`?
- [ ] Are all touch targets $\ge 44\times 44\text{px}$ with tap handlers for mobile?
- [ ] Are images configured with explicit dimensions for 0 layout shift?
- [ ] Are all generic AI intro phrases, repetitive summary boilerplate, fixed word-count quotas, and unsubstantiated viral claims completely removed?
