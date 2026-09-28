---
name: elevate-pinterest-qa
description: Automated pre-scheduling Quality Assurance audit for ElevateLivingCo Pinterest campaigns. Validates visual parity, keyword cannibalization, affiliate compliance, and mobile readability.
version: 1.0
scope: pinterest-campaign-qa-validation
risk: low
---

# Elevate Pinterest QA Skill (V1.0)

## 1. PURPOSE
Provides an automated, strict 23-point Quality Assurance audit for all Pinterest assets, metadata, destination links, and scheduling plans prior to user approval or publication.

---

## 2. THE 23 PRE-SCHEDULING QA CHECKS

Before any Pin is scheduled or submitted for user approval, Antigravity MUST evaluate all 23 items:

| # | Audit Item | Validation Requirement | Status |
| :-: | :--- | :--- | :-: |
| 1 | **Primary Keyword vs Visual** | Primary keyword matches key visual topic shown in the Pin image | [ ] PASS / [ ] FAIL |
| 2 | **Primary Keyword vs Article** | Primary keyword matches topic and content of target destination article | [ ] PASS / [ ] FAIL |
| 3 | **Title vs Visual** | Pin Title accurately reflects visual elements and text overlay | [ ] PASS / [ ] FAIL |
| 4 | **Description vs Visual** | Pin Description accurately describes visual features and listicle promise | [ ] PASS / [ ] FAIL |
| 5 | **Description vs Article** | Pin Description matches actual content present in the destination article | [ ] PASS / [ ] FAIL |
| 6 | **Alt Text Accuracy** | Alt Text objectively describes image composition, panel structure, and text | [ ] PASS / [ ] FAIL |
| 7 | **Destination URL Existence** | Destination URL is live and returns HTTP status code `200 OK` | [ ] PASS / [ ] FAIL |
| 8 | **Pin-to-Page Parity** | Destination page directly fulfills the exact promise made in the Pin headline | [ ] PASS / [ ] FAIL |
| 9 | **No Unsupported Claims** | Zero fabricated traffic, income, or miraculous product claims | [ ] PASS / [ ] FAIL |
| 10 | **No Fake Search Volume** | Zero fabricated numeric Pinterest search volumes in documentation | [ ] PASS / [ ] FAIL |
| 11 | **No Keyword Stuffing** | Title and Description use rich, natural English without repetitive keyword blocks | [ ] PASS / [ ] FAIL |
| 12 | **No Duplicate Primary Keyword** | No two Pins in the same campaign share the same Primary Keyword | [ ] PASS / [ ] FAIL |
| 13 | **Board Relevance** | Target Pinterest Board title and description align with Pin Primary Keyword | [ ] PASS / [ ] FAIL |
| 14 | **Tagged Topics Relevance** | Tagged Pinterest topics match specific category and niche | [ ] PASS / [ ] FAIL |
| 15 | **US Audience Language** | Natural American English spelling, terms, and phrasing used throughout | [ ] PASS / [ ] FAIL |
| 16 | **Seasonal Claims Currency** | Seasonal timing claims align with current season / lead-time window | [ ] PASS / [ ] FAIL |
| 17 | **Affiliate Claims Accuracy** | Product recommendations strictly match verified Amazon Associate catalog | [ ] PASS / [ ] FAIL |
| 18 | **Price Claims Verification** | Prices carry observed dates or are omitted if variable | [ ] PASS / [ ] FAIL |
| 19 | **Amazon Claims Verification** | ASINs and product details strictly match verified research | [ ] PASS / [ ] FAIL |
| 20 | **No Duplicate Creative** | Pin visual asset is distinct and non-identical to existing active Pins | [ ] PASS / [ ] FAIL |
| 21 | **Schedule Spacing** | Pins targeting the same destination URL are spaced by $\ge 72$ hours | [ ] PASS / [ ] FAIL |
| 22 | **Aspect Ratio (2:3)** | Creative asset adheres strictly to 2:3 vertical aspect ratio (1000x1500px) | [ ] PASS / [ ] FAIL |
| 23 | **Mobile Readability** | Text overlay typography is legible on mobile screens at 375px width | [ ] PASS / [ ] FAIL |

---

## 3. AUDIT RESULT REPORTING SCHEMA

The QA audit MUST return an explicit summary output:

```markdown
### Pinterest Campaign QA Audit Report

- **Campaign ID:** [ID]
- **Target URL:** [URL]
- **Pins Audited:** [Count]
- **Overall Status:** [PASS / FAIL]

#### Failed Checks (if any):
1. Check #[X]: [Reason for failure]

#### Decision:
[APPROVED FOR SCHEDULING / BLOCKED — CORRECTION REQUIRED]
```

If ANY item fails, the campaign is strictly **BLOCKED** from scheduling until corrected.
