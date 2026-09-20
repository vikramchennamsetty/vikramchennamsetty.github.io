# Elevate Skill System Version Changelog

Master version tracking manifest for `.agents/skills/`.

---

## Active Skill Version Manifest (V4.4 Master Release)

| Skill Name | Version | Release Date | Type | Primary Scope | Status |
|---|---|---|---|---|---|
| `elevate-research-source-orchestration` | **v1.2** | 2026-09-20 | Core Upgraded | Provider-agnostic Amazon layer (Creators API, OmkarCloud, Oxylabs, Public Web, Local Catalog), 19 normalized fields | ACTIVE |
| `elevate-design-intelligence` | **v4.5** | 2026-09-20 | Core Upgraded | Design style governance, canonical selection pipeline, advisory status gate | ACTIVE |
| `elevate-neumorphism` | **v1.0** | 2026-09-20 | New Capability | Extruded surface tokens, dual shadows, WCAG AA contrast, reduced motion | ACTIVE |
| `elevate-claymorphism` | **v1.0** | 2026-09-20 | New Capability | Soft rounded 3D clay callout cards, inner highlights, 2-layer shadow limit | ACTIVE |
| `elevate-bento-layout` | **v1.0** | 2026-09-20 | New Capability | Asymmetric 12-column modular grid, content hierarchy, mobile single-column collapse | ACTIVE |
| `elevate-glassmorphism` | **v1.0** | 2026-09-20 | New Capability | Translucent frosted glass, backdrop blur, @supports solid fallback | ACTIVE |
| `elevate-editorial-retention` | **v4.4** | 2026-09-20 | Core Upgraded | Pinterest Experience Optimization Framework, Pin-to-page continuity, visual-first entry | ACTIVE |
| `elevate-skill-evolution` | **v4.4** | 2026-09-20 | Core Upgraded | Phase 17 learning loop, V4.4 Pinterest release learning, FP-017 & FP-018 cataloging | ACTIVE |
| `elevate-design-intelligence` | **v4.3** | 2026-09-19 | Core Upgraded | Art direction, CSS specificity regression gate, computed contrast gate, 16 validation gates | ACTIVE |
| `elevate-regression-prevention` | **v4.3** | 2026-09-19 | Core Upgraded | Surgical production-fix rules, deployment-state tracking protocol (4 states), consumer inventory | ACTIVE |
| `elevate-affiliate-compliance` | **v4.3** | 2026-09-19 | Core Upgraded | Dual CTA validation (rendering + navigation), tag parity `elevateliv05f-20`, zero dead links | ACTIVE |
| `elevate-visual-assets` | **v4.2** | 2026-09-19 | Core Upgraded | Asset provenance A–F, real-people photography ethics, icon system, Stitch pipeline | ACTIVE |
| `elevate-3d-web-experience` | **v4.2** | 2026-09-19 | Core Upgraded | Three.js decision framework, GLTF compression CLI, OrbitControls touch fix, GPU disposal | ACTIVE |
| `elevate-immersive-motion` | **v4.2** | 2026-09-19 | Core Upgraded | 7-level motion ladder, GSAP choreography, Lenis/Locomotive gate, visibility/blur overrides | ACTIVE |
| `elevate-svg-experience` | **v4.1** | 2026-09-19 | Core Upgraded | Vector SVG graphics, room floor plans, stroke animation, functional illustration rules | ACTIVE |
| `elevate-design-system` | **v4.1** | 2026-09-19 | Core Upgraded | Tokens, grid, component contracts, typography system, accessible split-text animation | ACTIVE |
| `elevate-human-psychology` | **v4.1** | 2026-09-19 | Core Upgraded | Ethical human psychology, cognitive ease, progressive disclosure, DISCOVER-to-SHOP sequence | ACTIVE |
| `elevate-source-integrity` | **v4.1** | 2026-09-19 | Core Upgraded | Visual reference subordination, Phase 19 Hard Stop triggers, Amazon ASIN/tag integrity | ACTIVE |
| `elevate-systematic-debugging` | **v4.0** | 2026-09-19 | Core Upgraded | 9-step debugging sequence, NO FIX WITHOUT REPRODUCTION, lesson linkage | ACTIVE |
| `elevate-cluster-qa` | **v3.1** | 2026-09-18 | Core Upgraded | 4-cluster theme mapping, 3-way benchmark, GA4 taxonomy, visual QA | ACTIVE |
| `elevate-seo-performance` | **v4.0** | 2026-09-19 | Core Upgraded | Animation & media performance budgets, SVG complexity limits, CWV stability | ACTIVE |
| `elevate-browser-uat` | **v4.0** | 2026-09-19 | Core Upgraded | 8-viewport matrix, URL parameter tests (?utm_source=...), 3-state reporting | ACTIVE |

---

## Detailed Version History

### V4.4 Pinterest Experience Optimization & Intent Parity Release — 2026-09-20
- **Pinterest Experience Optimization Framework (`elevate-editorial-retention` v4.4):** Enforces 10-stage Pin-to-page visual journey, Pin-to-page continuity, 600px first-viewport visual confirmation, saveable content structures (formulas, checklists, palettes, room transformations), visual-first commercial flow (`VISUAL -> EDITORIAL -> CONTEXT -> WHY IT WORKS -> CTA`), mobile-first touch parity ($\ge 44\text{px}$ targets, zero hover traps), and explicit prohibition on unsubstantiated viral/traffic claims.
- **Pattern FP-017 (Pinterest Intent Disconnect):** Cataloged failure pattern where landing page first viewport fails to confirm the visual/topic promise of incoming Pinterest context.
- **Pattern FP-018 (Hover-Only Pinterest Mobile Trap):** Cataloged failure pattern where interactive previews rely exclusively on desktop hover without mobile tap handlers.
- **Rule RULE-015 (Pinterest Experience & Intent Parity Gate):** Enforced first-viewport visual confirmation, saveable content units, 44x44px touch targets, zero hover traps, visual-first commercial sequence, and prohibition on unverified viral/traffic guarantees.
- **Routing Matrix Update (`SKILL-ROUTER.md` v4.4):** Added Pinterest Experience Optimization invocation triggers and skill routing rules.

### V4.3 Production Pilot Learning & CSS Specificity Release — 2026-09-19
- **CSS Specificity Regression Gate (`elevate-design-intelligence` v4.3):** Mandatory browser computed-style inspection (`window.getComputedStyle`) before writing CSS fixes. Identifies winning selectors and source specificity hierarchy.
- **Pattern FP-015 & Bookshelf CTA Learning (`FAILURE-PATTERNS.md`):** Cataloged FP-015 (Theme Specificity Override) and the `7-dark-bookshelf-styling-ideas.html` CTA contrast fix (`[data-theme] a` specificity override).
- **Visual Contrast Gate (`elevate-design-intelligence` v4.3):** Rendered text/background contrast measured across default, `:hover`, `:focus`, `:active`, and `:visited` states.
- **Surgical Production-Fix Protocol (`elevate-regression-prevention` v4.3):** Limits visual corrections on compliant pages to target-page CSS only without refactoring unrelated production code.
- **Dual Affiliate CTA Validation (`elevate-affiliate-compliance` v4.3):** Validates visual contrast and navigation mechanics simultaneously.
- **Deployment-State Tracking Protocol (`elevate-regression-prevention` v4.3):** Explicitly tracks 4 deployment states (*Local Working Tree* $\rightarrow$ *Local Commit* $\rightarrow$ *Origin/Main* $\rightarrow$ *Live Production*).


### V4.2 Integrated External Design & 3D Intelligence Release — 2026-09-19
- **Design Intelligence & Touch UX (v4.2):** Merged high-end UI/UX rules (44x44px minimum touch target size, layout-stable hover transitions, cursor-pointer rules, z-index scale, 65-75 char line measure).
- **Visual Assets & Photography Ethics (v4.2):** Added Real-People Photography & Endorsement Ethics (prohibiting synthetic people as authentic endorsers) and codified Stitch integration pipeline ($\text{STITCH REFERENCE} \rightarrow \text{DECISION} \rightarrow \text{IMPLEMENTATION}$).
- **3D & WebGL Pipeline (v4.2):** Integrated GLTF compression CLI (`gltf-transform optimize`), mobile DPR caps ($\le 1.5$), OrbitControls mobile scroll-blocking fix (`enableZoom: false`), and GPU context loss cleanup.
- **Immersive Motion & Visibility (v4.2):** Added window blur listener, document visibility change handler, and coarse pointer event safety.
- **Skill Evolution & Router (v4.2):** Updated `SKILL-ROUTER.md` to V4.2 and added V4.2 Release milestone tracking to `elevate-skill-evolution`.

---

### V4.1 Art Direction + Cohesive Experience Layer — 2026-09-19
- **Art Direction & Design Intelligence (v4.1):** Added 10-point Creative Direction Brief, Reference Evidence Rule, internal Awwwards-quality acceptance bar (15 criteria), rejection of 15 generic design patterns, 16 validation gates, and required reporting schema.
- **Visual Assets & Provenance (v4.1):** Added Asset Provenance System (Classes A–F), Media Art Direction, Icon System standards, Stitch exploration integration, and Aura.build usage guidelines.
- **SVG Experience (v4.1):** Added Section 5 Illustration Rule (prohibiting decorative model-authored SVG artwork while preserving functional/documentary SVG).
- **Design System & Accessibility (v4.1):** Added Typography as a System, Icon System standardization, and Accessible Split-Text Animation hard rule (preserving DOM screen reader text).
- **Immersive Motion & GSAP (v4.1):** Added GSAP-First policy, Hero Intro Motion sequence, Smooth-Scroll Decision Gate (Lenis vs Locomotive vs Native), and strict Reduced Motion overrides.
- **3D & WebGL Experience (v4.1):** Added Three.js/WebGL Decision Framework, full GPU resource disposal, and Static-First Progressive Enhancement architecture.
- **Human Psychology & Conversion (v4.1):** Added Section 20 Ethical Psychology Framework and Section 21 Conversion Sequence.
- **Source Integrity & Truth (v4.1):** Subordinated visual reference sophistication to source integrity; prohibited inventing facts from visual references.
