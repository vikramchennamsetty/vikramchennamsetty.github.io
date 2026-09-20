---
name: elevate-regression-prevention
description: >-
  Enforces mandatory production completion gates, protected surface consumer inventories, Article Protection Contracts, 
  Change Manifests, 10-step verification pipelines, and zero-unintended-breakage policies across all ElevateLivingCo releases.
version: 4.3
triggers:
  - Modifying shared CSS files, global HTML templates, shared JS libraries, or reusable components.
  - Making changes to protected site surfaces (header, footer, navigation, product cards, affiliate tracking, schemas).
  - Modifying any existing article page, canonical URL, ASIN, or product recommendation.
  - Preparing production git commits or pre-deployment release checks.
  - Tracking deployment states across local working tree, local commit, origin/main, and live production.
scope: regression-prevention-and-system-safety
risk: critical
source:
  type: internal-upgraded
  version: 4.3
  adapted_from: "sickn33/agentic-awesome-skills (verification-before-completion, e2e-testing-patterns)"
  license: MIT
---

# Elevate Regression Prevention Skill (V4.3)

## Purpose
Prevents system regressions by establishing mandatory production completion gates, consumer impact inventories, Article Protection Contracts, Change Manifests, surgical production-fix rules, deployment-state tracking protocols (Local Working Tree $\rightarrow$ Local Commit $\rightarrow$ Origin/Main $\rightarrow$ Live Production), 100% consumer testing protocols, and strict deployment pre-check gates.

---

## PERMANENT ARTICLE PROTECTION CONTRACT (HARD GATE)

> [!IMPORTANT]
> **EVERY EXISTING ARTICLE MUST HAVE AN ARTICLE PROTECTION MANIFEST BEFORE ANY MODIFICATION IS ATTEMPTED.**

Before editing any article, Antigravity MUST record and lock the **Article Protection Manifest**:

```markdown
### Article Protection Manifest
- **Current Git SHA:** [Git Commit Hash]
- **Article SHA:** [SHA-256 Hash of Article HTML File]
- **Filename:** [e.g. dark-academia-apartment-decor-2026.html]
- **Canonical URL:** [e.g. https://elevatelivingco.me/dark-academia-apartment-decor-2026.html]
- **Title Tag:** [Exact <title>]
- **Meta Description:** [Exact <meta name="description">]
- **H1 Heading:** [Exact <h1> content]
- **Visible Headings Inventory:** [List of H2, H3 headings]
- **Editorial Content Integrity:** [Paragraph count / section breakdown]
- **Image URLs & Assets:** [Inventory of src and local WebP/PNG paths]
- **Image-to-Product Relationships:** [Map of image wrap to target ASIN/URL]
- **Amazon Commercial URLs:** [List of outbound amazon.com destination URLs]
- **ASIN Inventory:** [Exact ASIN list]
- **Amazon Marketplaces:** [e.g. US, IN, UK]
- **Associate Tags:** [e.g. elevatelivin20-20]
- **Internal Destination Links:** [List of internal article URLs]
- **JSON-LD Schema Inventory:** [Exact structured data JSON-LD scripts]
- **Analytics Event Taxonomy:** [trackAffiliate function bindings]
- **CSS / JS Dependencies:** [Imported stylesheets and scripts]
```

### Default Immutable Assets (HARD STOP)
Unless the user gives an explicit, unambiguous directive to change them, the following assets are **DEFAULT IMMUTABLE**:

1. Article URL & Filename
2. Canonical URL (`<link rel="canonical">`)
3. Image URLs & Image Identity
4. ASINs & Product Identity
5. Amazon Outbound Destinations
6. SEO Metadata & Title Tag
7. Structured Data / JSON-LD Schemas
8. GA4 Analytics IDs & Tracking Functions
9. Internal Links & Anchor Destinations

*Exception Rule:* If the user explicitly asks to update an Amazon Associate tag, ONLY the tag string may change; ASINs, destinations, metadata, and editorial text remain strictly locked.

---

## PHASE 16 — PRODUCTION CHANGE MANIFEST

Every future production modification MUST create a temporary **Change Manifest**:

```markdown
### Production Change Manifest
- **Target File:** [File path]
- **Before SHA-256:** [Hash]
- **After SHA-256:** [Hash]
- **Changed Sections:** [Exact line ranges modified]
- **Unchanged Sections:** [Confirmed preserved sections]
- **Image Inventory:** [Before count == After count]
- **ASIN Inventory:** [Before ASINs == After ASINs]
- **Affiliate Inventory:** [Before tags == After tags]
- **Schema Inventory:** [Before JSON-LD == After JSON-LD]
- **Metadata Parity:** [PASS / FAIL]
- **Internal Link Parity:** [PASS / FAIL]
- **Browser UAT Results:** [PASS across 8 viewports]
```

---

## MANDATORY PRODUCTION COMPLETION GATE

**A PRODUCTION-IMPACTING TASK CANNOT BE DECLARED COMPLETE UNLESS ALL APPLICABLE VERIFICATION GATES HAVE ACTUALLY EXECUTED.**

The mandatory verification chain MUST be followed in exact linear sequence:

```
[1. PRECHECK & ARTICLE PROTECTION MANIFEST]
                ↓
[2. SOURCE DEPENDENCY & CONSUMER INVENTORY]
                ↓
[3. SURGICAL IMPLEMENTATION]
                ↓
[4. STATIC SYNTAX, ASIN & REGEX VALIDATION]
                ↓
[5. BROWSER UAT RUNTIME VERIFICATION (8 Viewports)]
                ↓
[6. VISUAL SCREENSHOT QA (375px & 1440px)]
                ↓
[7. ACCESSIBILITY & REDUCED MOTION QA]
                ↓
[8. 100% CONSUMER REGRESSION QA]
                ↓
[9. PRODUCTION CHANGE MANIFEST & GIT DIFF]
                ↓
[10. COMPLETION / DEPLOYMENT DECISION]
```

---

## 13 Protected System Surfaces

1. **Header System** (`.site-header`, brand logo, nav links, mobile drawer)
2. **Footer System** (`.site-footer`, `.footer-grid`, `.footer-bar`)
3. **Navigation Architecture** (internal linking, canonical paths, anchor routes)
4. **Product Card Component** (`.product-card`, image wrap, CTA buttons)
5. **CTA Button System** (`.btn`, `.btn-primary`, `.btn-amazon`)
6. **Theme Skin System** (`[data-theme="..."]`, `assets/css/theme-skins.css`)
7. **Affiliate Link System** (`href`, `trackAffiliate`, Associate tags)
8. **Analytics Tracking System** (`tracking.js`, GA4 event taxonomy)
9. **JSON-LD Schema System** (`Article`, `Product`, `FAQPage`, `ItemList`)
10. **Canonical URL System** (`<link rel="canonical">`)
11. **Indexing Control System** (`robots.txt`, `<meta name="robots">`)
12. **Sitemap Registry** (`sitemap.xml`)
13. **Mobile Layout System** (375px–430px viewport responsive behavior)

---

## Surgical Production-Fix Protocol (MANDATORY V4.3)

When an already-compliant production page requires a visual correction:
1. **Targeted Scope:** Modify ONLY the smallest necessary scope (target-page-only CSS specificity fixes preferred over shared CSS refactoring).
2. **Zero Collateral Edits:** Do not refactor unrelated production code, layout structure, or working JS logic.
3. **Full Regression Re-Test:** Re-run 100% of existing validation and regression gates (responsive matrix, console errors, link parity, accessibility) after applying the surgical fix.

---

## Deployment-State Tracking Protocol (MANDATORY V4.3)

All release reports and developer tasks MUST explicitly track and distinguish the 4 deployment states:
1. **Local Working Tree:** Uncommitted code changes in the active workspace.
2. **Local Commit:** Staged and committed code on the local git branch (`git commit`).
3. **Origin/Main:** Pushed commits on the remote GitHub repository (`git push origin main`).
4. **Live Production:** Empirical HTTPS verification on the live published domain (`https://elevatelivingco.me/...`).

> [!CAUTION]
> **NEVER DECLARE A FEATURE OR BUG FIX "DEPLOYED" UNTIL GIT PUSH TO ORIGIN/MAIN AND LIVE HTTPS VERIFICATION ARE EMPIRICALLY CONFIRMED.**

---

## Related Skills
- `elevate-source-integrity`: Validates data provenance and prevents data drift.
- `elevate-browser-uat`: Automates browser execution across 8 viewports.
- `elevate-systematic-debugging`: Isolates root causes when regressions occur.

- `elevate-source-integrity`: Validates data provenance and prevents data drift.
- `elevate-browser-uat`: Automates browser execution across 8 viewports.
- `elevate-systematic-debugging`: Isolates root causes when regressions occur.
