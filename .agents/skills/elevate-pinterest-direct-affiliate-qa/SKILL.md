# Elevate Pinterest Direct Affiliate QA — Skill Specification (V1.0)

## 1. System Purpose & Operational Scope

The `elevate-pinterest-direct-affiliate-qa` skill establishes a mandatory pre-publication quality assurance gate for all direct-to-Amazon affiliate Pinterest Pins created under the `elevate-pinterest-direct-affiliate` workflow.

No direct affiliate Pin may be scheduled, exported, or published without achieving a **100% PASS** verdict across all 18 verification checkpoints.

---

## 2. Critical Failure & Immediate Halt Condition

> [!CAUTION]
> **CRITICAL PUBLICATION HALT CONDITION:**
> If the physical product represented in the Pin creative (image, graphic overlay, or visual features) does **NOT** match the exact physical product listed on the destination Amazon product page (`ASIN`), publication is **IMMEDIATELY HALTED**.
> - Zero tolerance for visual product substitutions.
> - Zero tolerance for incorrect ASIN links.
> - Publication MUST NOT proceed until the discrepancy is completely resolved.

---

## 3. Mandatory 18-Point Verification Checklist

| # | Checkpoint Category | Verification Gate Requirement | Pass Criteria | Status |
|---|---|---|---|---|
| **1** | **Product Existence** | Amazon listing actively exists and product is available. | Product page accessible; not deleted or 404. | `PASS` / `FAIL` |
| **2** | **ASIN Parity** | 10-character US ASIN is verified and accurate. | Valid ASIN string matches candidate database. | `PASS` / `FAIL` |
| **3** | **URL Resolution** | Destination URL resolves cleanly with HTTP 200 OK. | Resolves directly without redirect loops or errors. | `PASS` / `FAIL` |
| **4** | **Affiliate Tag** | Destination URL contains `tag=elevateliv00e-20`. | Verified tag present in query string. | `PASS` / `FAIL` |
| **5** | **Creative Matching** | Product in image matches destination Amazon product. | **CRITICAL:** Visual identity match confirmed. | `PASS` / `FAIL` |
| **6** | **Supported Claims** | All technical specs on Pin are verified from listing. | Specs backed by Amazon listing data. | `PASS` / `FAIL` |
| **7** | **Price Observation** | Price clearly disclaimed as observed at research time. | Explicit timestamp/observation disclaimer. | `PASS` / `FAIL` |
| **8** | **Authentic Ratings** | Rating and review count match observed data; not fabricated. | Rating matches empirical record. | `PASS` / `FAIL` |
| **9** | **No Fake Discounts** | No misleading or unverified strike-through pricing. | Zero manufactured discount percentages. | `PASS` / `FAIL` |
| **10**| **No Fake Urgency** | No manufactured countdowns ("Offer ends in 2 hours"). | Zero false scarcity or countdown timers. | `PASS` / `FAIL` |
| **11**| **No Unsupported Claims**| No unverified "Best Product on Earth" or "#1" claims. | Objective, truthful feature descriptions. | `PASS` / `FAIL` |
| **12**| **No Fake Scarcity** | No unverified inventory panic ("Only 1 left in stock!").| Truthful inventory status representation. | `PASS` / `FAIL` |
| **13**| **Title Alignment** | Pin title accurately reflects product search intent. | Concise title matching search query. | `PASS` / `FAIL` |
| **14**| **Description Parity** | Pin description accurately describes product details. | Natural language text matching product. | `PASS` / `FAIL` |
| **15**| **Mobile Legibility** | Typography overlay legible on 5-inch smartphone screens. | High visual contrast (WCAG AA) at 375px. | `PASS` / `FAIL` |
| **16**| **Clear CTA** | Call-to-action clearly indicates Amazon destination. | Clear CTA ("Check price on Amazon"). | `PASS` / `FAIL` |
| **17**| **FTC Disclosure** | Required affiliate disclosure present and clear. | FTC / Amazon disclosure statement present. | `PASS` / `FAIL` |
| **18**| **No Article Leakage** | Target destination URL does NOT point to a site article. | **MUST** be direct Amazon URL, not `.html`. | `PASS` / `FAIL` |

---

## 4. Execution Workflow & Audit Log Schema

When executing QA, generate a structured audit report following this format:

```markdown
### Direct Affiliate Pin QA Report
- **Pin ID:** DIRPIN-2026-001
- **Product ID:** DIRPROD_002
- **ASIN:** B0C68DRR9P
- **Evaluated Destination URL:** https://www.amazon.com/dp/B0C68DRR9P?tag=elevateliv00e-20
- **Evaluated Image Asset:** assets/pinterest/direct_affiliate/dirpin_002.png
- **Verification Summary:**
  - 18 / 18 Checkpoints PASSED
  - Product Identity Matching: PASSED (addlon 48ft string lights verified)
  - Affiliate Tag Validation: PASSED (`tag=elevateliv00e-20`)
  - Destination Type Isolation: PASSED (Direct Amazon link; zero article leakage)
- **Final Verdict:** APPROVED FOR PUBLICATION
```

---

## 5. Failure Protocol

If ANY checkpoint fails during QA:
1. Mark Pin status as `QA_FAILED` in campaign tracker.
2. Record exact failed checkpoint index and description in audit notes.
3. Block automated publishing or export.
4. Route to correction workflow (re-verify URL, adjust copy, or regenerate creative).
