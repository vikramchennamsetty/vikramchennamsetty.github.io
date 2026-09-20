# External Skill Research & License Provenance Gate (V3)

**Date:** 2026-09-18  
**Gate Status:** PASSED — All selected external sources reviewed, license-verified, and adapted independently.  

---

## 1. External Source Provenance Table

| Target Domain | Source Repository | Evaluated Skill / Module | Repository License | Source URL | Adopted Concepts | Adaptation Strategy |
|---|---|---|---|---|---|---|
| **Reliability & Debugging** | `sickn33/agentic-awesome-skills` | `systematic-debugging` | MIT License | `https://github.com/sickn33/agentic-awesome-skills/tree/main/skills/systematic-debugging` | 9-step debugging methodology, root-cause isolation before fixing, no symptom patching. | Independently rewritten in Elevate terms & merged into `elevate-systematic-debugging`. |
| **Verification & QA** | `sickn33/agentic-awesome-skills` | `verification-before-completion` | MIT License | `https://github.com/sickn33/agentic-awesome-skills/tree/main/skills/verification-before-completion` | Hard stop condition: static checks alone are invalid when browser behavior matters. | Adapted into `elevate-browser-uat` & `elevate-regression-prevention`. |
| **Browser & Automation** | `sickn33/agentic-awesome-skills` | `playwright-skill`, `e2e-testing-patterns` | MIT License | `https://github.com/sickn33/agentic-awesome-skills/tree/main/skills/playwright-skill` | 8-viewport testing matrix, console log inspection, non-JS fallback verification. | Adapted into `elevate-browser-uat`. |
| **Accessibility** | `sickn33/agentic-awesome-skills` | `ui-a11y`, `accessibility-audit` | MIT License | `https://github.com/sickn33/agentic-awesome-skills/tree/main/skills/ui-a11y` | Keyboard navigation, focus-visible contrast, reduced-motion overrides. | Integrated into `elevate-design-system` & `elevate-browser-uat`. |
| **SEO & Drift** | `sickn33/agentic-awesome-skills` | `seo-drift`, `seo-structure-architect` | MIT License | `https://github.com/sickn33/agentic-awesome-skills/tree/main/skills/seo-drift` | Canonical path drift, schema/content parity, metadata preservation. | Merged into `elevate-seo-performance`. |
| **3D & WebGL** | `alton47/threejs-skills` | Three.js Core, Materials, Shaders, Camera | MIT License | `https://github.com/alton47/threejs-skills` | Renderer/scene/camera lifecycle, PBR materials, shaders, draw-call budgets, WebGL failure fallbacks. | Adapted into `elevate-3d-web-experience`. |
| **3D Optimization** | `SoftwareInFocus/threejs-skills` | Asset & Texture Optimization | MIT License | `https://github.com/SoftwareInFocus/threejs-skills` | DRACO/KTX2 compression, LOD, instancing, frustum culling. | Adapted into `elevate-3d-web-experience`. |
| **Skill Authoring** | `sickn33/agentic-awesome-skills` | `skill-creator`, `writing-skills` | MIT License | `https://github.com/sickn33/agentic-awesome-skills/tree/main/skills/skill-creator` | Progressive disclosure, standardized frontmatter, explicit guardrails, references subdirectories. | Adopted across all 12 Elevate V3 skills. |

---

## 2. Licensing Compliance & Anti-Bloat Governance

1. **License Verification:** All primary sources operate under permissive **MIT Licenses**.
2. **Zero Blind Copying:** No external `SKILL.md` or code was copied verbatim. Every concept was restructured, streamlined, and rewritten using ElevateLivingCo domain terminology, brand contracts, and performance constraints.
3. **Context-Window Protection:** Instead of importing 2,000+ external micro-skills into `.agents/skills/`, the Elevate V3 architecture maintains a concise, high-signal surface of **12 domain-specific skills**, avoiding context-window overload while maximizing operational rigor.
