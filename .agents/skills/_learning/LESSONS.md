# Elevate Living Co — Master Learning Loop & Lessons Registry

This document records post-task evaluations, root-cause analyses, and permanent preventive rules for the Antigravity agent architecture.

---

### Lesson 001 — Shared Footer CSS Detachment in Rebuilt Articles
- **Date:** 2026-09-18
- **Task:** Critical Production Repair & Article System Rebuild
- **Failure:** Footer markup on article pages rendered as raw, unstyled HTML text.
- **Failure Category:** Dependency / Architecture
- **Root Cause:** Footer CSS rules (`.site-footer`, `.footer-grid`) were located inside `assets/css/immersive.css`, but article pages only imported `main.css`, `components.css`, `article.css`, `motion.css`, and `theme-skins.css`.
- **Detection Gap:** Static HTML audit checked for presence of `<footer class="site-footer">` markup but did not verify loaded CSS stylesheets or computed element presentation in the browser.
- **Preventive Rule:** Shared component CSS MUST reside in a primary shared stylesheet (`components.css`) imported by all consumer pages. Modifying shared component CSS requires inspecting and testing computed styling across 100% of consumer pages.
- **Skill Updated:** `elevate-design-system` (v3.0), `elevate-regression-prevention` (v1.0)
- **Regression Test Added:** Automated footer computed style verification across all 13 production articles at 375px and 1440px viewports.

---

### Lesson 002 — Affiliate Anchor Navigation Canceled by `return false;`
- **Date:** 2026-09-18
- **Task:** Critical Production Repair
- **Failure:** Outbound Amazon CTA buttons failed to navigate when clicked by users.
- **Failure Category:** Implementation / Analytics
- **Root Cause:** `onclick` attributes contained `return false;` (e.g. `onclick="trackAffiliate(...); return false;"`), which explicitly canceled native anchor link navigation in the browser.
- **Detection Gap:** Grep checks verified `trackAffiliate` function presence but ignored the trailing `return false;` statement.
- **Preventive Rule:** Analytics tracking MUST observe navigation, never control or block it. Anchors MUST NOT contain `return false;` or `event.preventDefault()` inside `onclick` handlers.
- **Skill Updated:** `elevate-affiliate-compliance` (v3.0)
- **Regression Test Added:** Repo-wide `return false` count audit script enforcing `count == 0` on commercial anchors.

---

### Lesson 003 — Placeholder `href="#"` on Commercial CTAs
- **Date:** 2026-09-18
- **Task:** Modern Coffee Tables Article Audit & Repair
- **Failure:** Quick recommendation CTA buttons contained `href="#"` instead of real Amazon URLs.
- **Failure Category:** Source Integrity / Implementation
- **Root Cause:** Placeholders were used during layout prototyping and not replaced with valid product destinations prior to commit.
- **Detection Gap:** Static checks validated button CSS classes but did not assert `href != "#"`.
- **Preventive Rule:** `href="#"` is strictly PROHIBITED on commercial anchors. Every affiliate CTA must have a valid destination URL matching its `trackAffiliate` URL parameter.
- **Skill Updated:** `elevate-affiliate-compliance` (v3.0), `elevate-source-integrity` (v1.0)
- **Regression Test Added:** Repo-wide `href="#"` scanner enforcing `count == 0`.

---

### Lesson 004 — Image-Level Tracking URL Mismatch (Airkeep Diffuser)
- **Date:** 2026-09-18
- **Task:** Dark Academia Apartment Decor Article Repair
- **Failure:** Clicking the product image for Airkeep Reed Diffuser dispatched analytics for a different ASIN (`B0CMQRVRFF`) than the parent anchor link (`B0F2HVG2WH`).
- **Failure Category:** Source Integrity / Implementation
- **Root Cause:** An inline `onclick="trackAffiliate(...)"` with a legacy long URL was placed directly on the `<img>` tag inside a parent `<a class="product-image-link">` anchor that already had its own `trackAffiliate` handler.
- **Detection Gap:** Link check regex only inspected parent `<a>` tags and missed nested `<img>` inline `onclick` handlers.
- **Preventive Rule:** Parent anchors own navigation and tracking. Images wrapped inside `<a class="product-image-link">` MUST NOT contain conflicting inline `onclick` handlers.
- **Skill Updated:** `elevate-affiliate-compliance` (v3.0), `elevate-source-integrity` (v1.0)
- **Regression Test Added:** Nested `img` `onclick` scanner ensuring zero conflicting handlers inside product image links.
