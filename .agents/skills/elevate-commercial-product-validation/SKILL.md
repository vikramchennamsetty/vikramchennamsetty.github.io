---
name: elevate-commercial-product-validation
description: >-
  Audits and validates the commercial facts, identity relationships, marketplace alignment, associate tags, 
  variant consistency, field-level freshness, price/availability states, image rights, and source provenance 
  of discovered candidate products—sitting between product research and downstream editorial/affiliate use.
version: 1.0
triggers:
  - "verify Amazon product"
  - "validate Amazon product"
  - "check product ASIN"
  - "check Amazon link"
  - "verify product price"
  - "verify availability"
  - "validate product data"
  - "check product variant"
  - "verify commercial product information"
  - "check whether product can be used"
  - "validate product candidates"
  - "verify affiliate destination"
scope: commercial-product-fact-and-readiness-validation
risk: critical
source:
  type: native-specialized
  version: 1.0
---

# Elevate Commercial Product Validation Skill (V1.0)

## Purpose
Establishes the specialized commercial fact-checking and readiness validation layer for ElevateLivingCo. Audits product candidates between research/discovery and downstream editorial/affiliate publication—verifying product identity parity, marketplace isolation, destination URLs, associate tags, variant consistency, field-level freshness timestamps, price/availability verification states, and image rights without replacing editorial quality, problem suitability, trend, or affiliate compliance decision engines.

---

## 1. Core Evaluation Principle & Skill Position

### Core Question:
> **"Can this product's commercial information be safely used downstream, based on current evidence?"**

```
┌────────────────────────────────────────────────────────┐
│     PRODUCT RESEARCH / WEB SCRAPING DISCOVERY          │
│    (Discovers candidate items & quality evidence)      │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│        COMMERCIAL PRODUCT VALIDATION (THIS SKILL)       │
│  (Audits commercial facts, ASIN, URL, tags & freshness)│
└───────────────────────────┬────────────────────────────┘
                            │
            ┌───────────────┴───────────────┐
            ▼                               ▼
┌───────────────────────┐       ┌───────────────────────┐
│ NICHE PRODUCT MATCHING│       │ AFFILIATE COMPLIANCE  │
│(Style/Room/Context Fit)│       │ (FTC, Tags & Contracts│
└───────────────────────┘       └───────────────────────┘
```

### Commercial vs Editorial Separation:
Commercial validation does **NOT** determine whether a product is aesthetically superior, solves the decorating dilemma, is trending, or should rank first editorially. It solely determines whether commercial facts are sufficiently verified and consistent for downstream usage.

---

## 2. The 14 Commercial Evaluation Dimensions

Every discovered candidate product MUST be audited across these 14 commercial dimensions:

### 1. Product Identity Parity
The core identity relationships MUST remain 100% consistent across all fields:
`PRODUCT NAME ↔ ASIN ↔ MARKETPLACE ↔ DESTINATION URL ↔ PRODUCT IMAGE ↔ VARIANT`
Discrepancies across these fields immediately set status to `IDENTITY_CONFLICT` or `SOURCE_CONFLICT`.

### 2. Strict ASIN Non-Inference
ASIN MUST be verified directly from an authoritative product source or API feed.
- **NEVER** infer ASIN from product title similarity.
- **NEVER** infer ASIN from image similarity or search engine snippets.
- **NEVER** infer ASIN from URL fragments of similar products.
- If ASIN identity cannot be authoritatively verified, set `ASIN_STATUS: UNVERIFIED`.

### 3. Marketplace Isolation & Compliance
Explicitly distinguish target markets:
- **`AMAZON_US`:** Default expected marketplace for Elevate Amazon.com content.
- **`AMAZON_IN`:** Dedicated marketplace for Amazon.in content (`elevatelivi08-21`).
- **`OTHER`:** Non-Amazon commercial sources.
- **Rule:** Never silently substitute or mix US and India product records. A marketplace discrepancy sets `MARKETPLACE_CONFLICT`.

### 4. Destination URL Audit
Validates that the destination link is syntactically sound and commercially safe:
- `DESTINATION_VERIFIED`: URL exists, points to target product page, contains proper Associate tag, and passes syntax check.
- `DESTINATION_UNVERIFIED`: URL unconfirmed against live page.
- `DESTINATION_CONFLICT`: URL points to an unrelated item, placeholder, anchor `#`, or `javascript:void`.
- **Note:** HTTP 200 (OK) alone is NOT proof of product identity parity.

### 5. Associate Tag Parity
Audits destination URLs for correct affiliate tracking IDs:
- Elevate Amazon.com Expected Tag: `elevateliv05f-20`
- Elevate Amazon.in Expected Tag: `elevatelivi08-21`
- Tag States: `VERIFIED`, `MISSING`, `MISMATCH`, `UNVERIFIED`.
- **Rule:** Never invent or guess an Associate tag. If mismatched, set `TAG_STATUS: MISMATCH`.

### 6. Variant Consistency
Ensures size, color, pack size, material, or configuration options match the evaluated item:
- **NEVER** combine `PRODUCT A IMAGE + PRODUCT B VARIANT + PRODUCT C ASIN`.
- If variant identity cannot be confirmed, set `VARIANT_STATUS: VARIANT_UNVERIFIED`.

### 7. Availability Verification State
Availability is highly time-sensitive.
- Record: `AVAILABILITY_VERIFIED_AT` (ISO 8601 Timestamp).
- States: `AVAILABLE`, `UNAVAILABLE`, `UNKNOWN`, `STALE`.
- **Rule:** Never state "In Stock" without timestamped evidence. Do NOT present historical availability observations as current stock status.

### 8. Price Verification & Non-Fabrication Protocol
- **NEVER** estimate, fabricate, or guess an Amazon price.
- Record: `PRICE_OBSERVED_AT` (ISO 8601 Timestamp).
- States: `PRICE_VERIFIED`, `PRICE_UNVERIFIED`, `PRICE_STALE`, `PRICE_UNAVAILABLE`.
- **Downstream Rule:** An unverified price does NOT invalidate a candidate product unless the specific editorial task explicitly requires verified pricing. When price is unverified, downstream content MUST omit numerical pricing or present it as `PRICE_UNVERIFIED`.

### 9. Time-Sensitive Promotion Audit
Coupons, deals, Prime pricing, limited-time offers, and sale banners decay rapidly.
- Record: `PROMOTION_OBSERVED_AT` (ISO 8601 Timestamp).
- States: `PROMOTION_VERIFIED`, `PROMOTION_UNVERIFIED`, `PROMOTION_EXPIRED`, `NO_PROMOTION_CLAIM`.
- **Rule:** Never present expired or unverified promotional data as active offers.

### 10. Decoupled Image Identity & Licensing Rights
Image validation MUST separate physical item identity from commercial licensing authorization:

| Image Dimension | Possible Verification States | Description |
|---|---|---|
| **`IMAGE_IDENTITY_STATUS`** | `VERIFIED`, `UNVERIFIED`, `CONFLICT` | Verifies that image depicts the exact ASIN/variant. |
| **`IMAGE_RIGHTS_STATUS`** | `AUTHORIZED`, `USER_PROVIDED`, `LICENSED`, `SOURCE_UNVERIFIED`, `UNKNOWN` | Verifies legal copyright/commercial reuse authorization. |

> [!WARNING]
> Public web accessibility does NOT imply licensing authorization. Never assume an image is licensed for commercial reuse merely because it is accessible via URL.

### 11. Brand & Seller Provenance
- Record: `BRAND`, `SELLER`, `SOURCE`, `OBSERVED_AT`.
- If unconfirmed by authoritative product data, mark as `UNVERIFIED`.
- **Rule:** Never invent brand warranties, official manufacturer claims, or authorized reseller designations.

### 12. Field-Level Freshness Model
Different commercial facts decay at different rates. Every time-sensitive field MUST preserve its own `OBSERVED_AT` timestamp:

```markdown
- PRICE_OBSERVED_AT: 2026-09-20T09:30:00Z  -> Status: CURRENT
- AVAILABILITY_VERIFIED_AT: 2025-11-12T00:00:00Z -> Status: STALE (>120 days)
- PROMOTION_OBSERVED_AT: 2026-09-19T14:00:00Z -> Status: PROMOTION_EXPIRED
```

### 13. Source Provenance Record
Every commercial fact MUST track its field-level provenance:

```markdown
- FIELD: PRICE
- VALUE: $34.99
- SOURCE: Amazon Product Advertising API
- OBSERVED_AT: 2026-09-20T09:30:00Z
- STATUS: VERIFIED
```

### 14. Amazon Access Controls & Safety Limits
- Strictly observe Amazon access controls, robots.txt, rate limits, terms of service, and API guidelines.
- Prefer approved/authorized product data sources and official API feeds.
- **NEVER** scrape private customer data, personal reviews, or restricted customer pages.

---

## 3. Commercial Validation Candidate Statuses

Every evaluated product candidate is assigned one of 9 final commercial validation statuses:

1. **`COMMERCIALLY_VALID`:** All required identity, URL, tag, marketplace, and core commercial fields verified.
2. **`VALID_WITH_UNVERIFIED_FIELDS`:** Product identity, ASIN, URL, and tag verified, but secondary fields (e.g. price or promotion) are unverified. Safe for downstream use with field restrictions.
3. **`REQUIRES_VERIFICATION`:** Core identity or URL details require verification prior to publication.
4. **`STALE`:** Key commercial facts (e.g. availability or price) are older than freshness limits.
5. **`SOURCE_CONFLICT`:** Discrepancy between ASIN, image, title, or destination identity.
6. **`MARKETPLACE_CONFLICT`:** US and India marketplace data mixed or mismatched.
7. **`IDENTITY_CONFLICT`:** Candidate title/variant does not match destination product.
8. **`COMMERCIAL_DATA_INSUFFICIENT`:** Lacks minimum required fields (missing ASIN, URL, or name).
9. **`REJECT`:** Fails core commercial safety gates (e.g. invalid URL, restricted source).

---

## 4. Downstream Permission Model

Commercial validation outputs one of 4 downstream permission decisions:

- **`ALLOW`:** Product candidate is fully verified and cleared for unrestricted downstream editorial & affiliate use.
- **`ALLOW_WITH_FIELD_RESTRICTIONS`:** Product is cleared for editorial listing, but unverified fields (e.g. unverified price or expired promotion) MUST NOT be presented as live facts.
- **`REQUIRES_VERIFICATION`:** Product usage is blocked until unverified identity/URL fields are confirmed.
- **`BLOCK`:** Hard conflict (`SOURCE_CONFLICT`, `MARKETPLACE_CONFLICT`, `IDENTITY_CONFLICT`, `REJECT`) detected. Usage is strictly halted.

---

## 5. Inter-Skill Integration Workflows

### A. Product Research Intelligence Handoff
Receives evaluated candidates from [`elevate-product-research-intelligence`](file:///d:/A_Elevate_Living_Co/vikramchennamsetty.github.io/.agents/skills/elevate-product-research-intelligence/SKILL.md) and returns the completed Commercial Validation Report.

### B. Source Integrity Escalation
If `SOURCE_CONFLICT`, `MARKETPLACE_CONFLICT`, or `IDENTITY_CONFLICT` occurs, hand off immediately to [`elevate-source-integrity`](file:///d:/A_Elevate_Living_Co/vikramchennamsetty.github.io/.agents/skills/elevate-source-integrity/SKILL.md) for identity resolution.

### C. Affiliate Compliance Handoff
When commercial facts are validated (`ALLOW` or `ALLOW_WITH_FIELD_RESTRICTIONS`), hand off to [`elevate-affiliate-compliance`](file:///d:/A_Elevate_Living_Co/vikramchennamsetty.github.io/.agents/skills/elevate-affiliate-compliance/SKILL.md) for FTC disclosure placement, link contract attributes (`rel="sponsored nofollow"`), and tag injection.

---

## 6. Standardized Output Format

Every Commercial Product Validation evaluation MUST present its audit using this standardized format:

```markdown
### Commercial Validation

- **PRODUCT:** [Candidate Product Name]
- **ASIN:** [Verified ASIN, e.g. B08N5WRWNW]
- **MARKETPLACE:** [AMAZON_US / AMAZON_IN / OTHER]
- **DESTINATION:** [DESTINATION_VERIFIED / DESTINATION_UNVERIFIED / DESTINATION_CONFLICT]
- **ASSOCIATE_TAG:** [VERIFIED / MISSING / MISMATCH / UNVERIFIED — Tag: elevateliv05f-20]
- **VARIANT:** [Verified variant or VARIANT_UNVERIFIED]
- **AVAILABILITY:** [AVAILABLE / UNAVAILABLE / UNKNOWN / STALE — Verified At: timestamp]
- **PRICE:** [PRICE_VERIFIED / PRICE_UNVERIFIED / PRICE_STALE / PRICE_UNAVAILABLE — Observed At: timestamp]
- **PROMOTION:** [PROMOTION_VERIFIED / PROMOTION_UNVERIFIED / PROMOTION_EXPIRED / NO_PROMOTION_CLAIM]
- **IMAGE_IDENTITY:** [VERIFIED / UNVERIFIED / CONFLICT]
- **IMAGE_RIGHTS:** [AUTHORIZED / USER_PROVIDED / LICENSED / SOURCE_UNVERIFIED / UNKNOWN]
- **BRAND:** [Verified Brand or UNVERIFIED]
- **SELLER:** [Verified Seller or UNVERIFIED]
- **FRESHNESS:** [CURRENT / STALE / UNKNOWN]
- **PROVENANCE:** [Authoritative API / Manual Verification / Scraped Unverified]
- **FINAL_STATUS:** [COMMERCIALLY_VALID / VALID_WITH_UNVERIFIED_FIELDS / REQUIRES_VERIFICATION / STALE / SOURCE_CONFLICT / MARKETPLACE_CONFLICT / IDENTITY_CONFLICT / COMMERCIAL_DATA_INSUFFICIENT / REJECT]

### Unverified Fields
- [List any unverified fields, e.g. PRICE: UNVERIFIED, SELLER: UNVERIFIED]

### Conflicts
- [List any detected conflicts or NONE]

### Downstream Permission
- **DECISION:** [ALLOW / ALLOW_WITH_FIELD_RESTRICTIONS / REQUIRES_VERIFICATION / BLOCK]
- **RATIONALE:** [Written rationale grounding the permission decision in commercial facts and safety rules.]
```

---

## 7. Cataloged Failure Patterns & Active Regression Rules

### Cataloged Failure Patterns ([`FAILURE-PATTERNS.md`](file:///d:/A_Elevate_Living_Co/vikramchennamsetty.github.io/.agents/skills/_learning/FAILURE-PATTERNS.md)):
- **`FP-055` (Commercial Identity Drift):** Commercial data becomes associated with a different product or ASIN.
- **`FP-056` (Marketplace Substitution):** US and India marketplace data are silently mixed or substituted.
- **`FP-057` (Stale Price Presentation):** Outdated price data is presented as current verified pricing.
- **`FP-058` (Availability Overclaim):** Historical availability data is presented as current live stock.
- **`FP-059` (Variant Contamination):** Data or imagery from one variant is associated with another variant.
- **`FP-060` (Image Identity vs Licensing Conflation):** Conflating image product identity verification with commercial licensing authorization.
- **`FP-061` (HTTP-200 Identity Assumption):** Successful HTTP 200 response is incorrectly treated as proof of product identity parity.
- **`FP-062` (Promotion Persistence):** Expired promotional claims remain in downstream content.

### Active Regression Rules ([`REGRESSION-RULES.md`](file:///d:/A_Elevate_Living_Co/vikramchennamsetty.github.io/.agents/skills/_learning/REGRESSION-RULES.md)):
- **`RULE-053` (Commercial Identity Parity Gate):** Product, ASIN, destination URL, marketplace, and variant identity MUST remain 100% consistent.
- **`RULE-054` (Marketplace Isolation Gate):** US and India commercial records MUST NEVER be silently mixed or substituted.
- **`RULE-055` (Field-Level Freshness Gate):** Time-sensitive commercial fields require field-specific `OBSERVED_AT` timestamps.
- **`RULE-056` (Price Verification Gate):** Unverified prices MUST NEVER be presented as current verified prices.
- **`RULE-057` (Availability Verification Gate):** Availability claims require current supporting evidence.
- **`RULE-058` (Variant Consistency Gate):** Variant-specific data MUST remain associated strictly with the verified variant.
- **`RULE-059` (Image Rights Separation Gate):** Image product identity and image licensing status MUST be tracked separately.
- **`RULE-060` (Promotion Freshness Gate):** Expired or unverified promotions MUST NOT be presented as active commercial offers.
