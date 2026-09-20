---
name: elevate-source-integrity
description: >-
  Establishes source-of-truth protocols, mandatory source conflict stop gates, Phase 19 Hard Stop triggers, 
  data provenance recording, visual-reference subordination rules, and normalized identity testing.
version: 4.1
triggers:
  - Handling product data, ASIN assignments, Amazon affiliate URLs, images, or schema metadata.
  - Referencing visual examples, reels, screenshots, or external design references.
  - Resolving conflicting specifications or metadata discrepancies across project files.
scope: source-integrity-and-truth-verification
risk: high
source:
  type: internal-upgraded
  version: 4.1
---

# Elevate Source Integrity & Truth Verification Skill (V4.1)

## Purpose
Enforces absolute source-of-truth integrity across all data, product facts, Amazon URLs, schema metadata, external library APIs, and adapted skills, preventing silent guesswork, data hallucination, or un-investigated metadata conflicts.

---

## 1. Subordination of Visual Sophistication to Source Integrity (HARD RULE)

All new visual sophistication, art direction, and reference inspiration remain strictly subordinate to Elevate source-integrity rules:

> [!CAUTION]
> **NEVER INVENT OR FABRICATE DATA FROM VISUAL REFERENCES:**
> Even if a visual reference (screenshot, video, reel, website) suggests or displays compelling data, Antigravity MUST NEVER invent or reproduce unsupported:
> - Live prices or discount claims
> - Ratings or review counts
> - Product badges or awards
> - Scarcity, urgency, or stock availability
> - Historical product claims or provenance
> - Dimensions, materials, or technical specifications
> - Expert credentials or corporate partnerships
> - Fake customer proof or fake testimonials

If a visual reference suggests information that is not verified by official Elevate project sources: **DO NOT REPRODUCE THE CLAIM.**

---

## 2. Mandatory Amazon Affiliate Source Integrity

For all Amazon product recommendations:
- Preserve exact verified ASINs.
- Preserve exact verified destination URLs.
- Preserve correct Amazon Associate tag (`elevateliv05f-20` for US, `elevatelivi08-21` for IN).
- Preserve `target="_blank"` and `rel="sponsored nofollow"`.
- Preserve affiliate tracking handlers (`trackAffiliate(...)`).

---

## 3. Mandatory Phase 19 Hard Stop Triggers

Antigravity MUST STOP IMMEDIATELY RATHER THAN GUESS OR PROCEED WHEN ANY OF THE FOLLOWING OCCUR:
1. **HISTORICAL VERSION UNCLEAR:** Commit baseline cannot be determined with 100% certainty.
2. **IMAGE REPLACEMENT UNVERIFIED:** Local image asset or replacement cannot be verified.
3. **ASIN MISMATCH:** Mismatch between anchor `href`, `trackAffiliate`, image wrap, title, or schema.
4. **DESTINATION CHANGED UNEXPECTEDLY:** Commercial destination URL changes unexpectedly.
5. **SEO METADATA CHANGED UNEXPECTEDLY:** Meta title, description, canonical, or schema changes without instruction.
6. **PROTECTED FILE ALTERED:** A protected core file (`index.html`, `404.html`, `sitemap.xml`, etc.) is targeted without explicit instruction.
7. **HOMEPAGE ALTERED UNEXPECTEDLY:** Homepage layout changes during an article task.
8. **PRODUCT IDENTITY AMBIGUOUS:** Ambiguity exists regarding physical item identity.
9. **ASSET LICENSE UNCLEAR:** Rights or license of visual asset cannot be verified.
10. **SOURCE INFORMATION CONFLICTS:** Conflicting data across project CSVs, HTML DOM, or docs.
11. **BROWSER DIVERGENCE:** Headless browser state differs unexpectedly from static analysis.

---

## Related Skills
- `elevate-affiliate-compliance`: Commercial link structure and tag compliance.
- `elevate-design-intelligence`: Reference evidence extraction rules (principles over reproduction).
- `elevate-regression-prevention`: Release precheck gates and protected surfaces.
