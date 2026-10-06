# Elevate Pinterest Direct Affiliate — Skill Specification (V1.0)

## 1. Executive Purpose & Architecture Overview

The `elevate-pinterest-direct-affiliate` skill establishes a standalone, direct-to-Amazon affiliate Pin workflow for ElevateLivingCo. Unlike the core content pipeline—where Pinterest traffic is routed to ElevateLivingCo editorial articles—this workflow creates high-converting, value-first Pinterest Pins whose destination URL points **directly** to an Amazon product page with ElevateLivingCo's verified Amazon Associates affiliate tracking tag (`elevateliv00e-20`).

An intermediate article is **NOT required**. Products may be discovered, researched, scored, styled visually, and published directly to Pinterest.

---

## 2. When to Use vs When NOT to Use

### Use This Skill When:
- Target destination is directly an Amazon product page (`https://www.amazon.com/dp/{ASIN}?tag=elevateliv00e-20`).
- ElevateLivingCo has no existing article covering the product, or the user specifically requests a direct affiliate Pin campaign.
- A high-demand, visually appealing home-decor product is discovered independently via Amazon trends, Pinterest search intent, seasonal opportunities, room problem-solving, or price/value opportunities.
- Creating product-focused Pin concepts (e.g., Product + 4 Useful Features, Styling Ideas, Room Placement, Size Guides).

### Do NOT Use This Skill When:
- Target destination is an ElevateLivingCo website article (e.g., `https://elevatelivingco.me/10-dark-academia-essentials.html`). Use `elevate-article-pinterest-generation` and related article skills instead.
- The destination is a non-Amazon retailer or unverified affiliate network.
- An educational multi-product buyer guide requiring long-form editorial breakdown is explicitly requested.

---

## 3. Strict System Boundaries & Independence Protection

> [!IMPORTANT]
> **ZERO CROSS-CONTAMINATION RULE:**
> This system is strictly decoupled from the existing article Pinterest system.
> - DO NOT modify, replace, weaken, or alter existing article Pins.
> - DO NOT alter the Dark Academia campaign or existing article-link schedules.
> - DO NOT force direct-affiliate products into site articles.
> - DO NOT mix article performance data with direct-affiliate performance data in analytics.

---

## 4. End-to-End Operational Workflow

```
Product Discovery
  └─► Product Research & Provenance Recording
        └─► Amazon Product Verification (ASIN, Tag, Price, Stock)
              └─► Pinterest Keyword & Search-Intent Analysis
                    └─► Product Opportunity Scoring (10-Factor Matrix)
                          └─► Useful Pin Concept Selection (Formats A–L)
                                └─► Photorealistic Creative Generation & Art Direction
                                      └─► Value-First Product Copy & Information Overlay
                                            └─► Pinterest SEO Metadata Generation
                                                  └─► Amazon Affiliate URL Construction
                                                        └─► 18-Point Affiliate & Compliance QA Gate
                                                              └─► Image & Visual QA Gate
                                                                    └─► Publication & Schedule
                                                                          └─► Isolated Tracking & Analytics
                                                                                └─► Performance Learning Loop
```

---

## 5. Product Research Requirements

Every product evaluated for direct affiliate Pins must undergo strict provenance tracking recorded in `.agents/data/pinterest-affiliate-products.md`:

1. **ASIN Verification:** Must be a valid 10-character US ASIN (`amazon.com`).
2. **Canonical & Affiliate URLs:** Store canonical (`https://www.amazon.com/dp/{ASIN}`) separately from the affiliate URL (`https://www.amazon.com/dp/{ASIN}?tag=elevateliv00e-20`).
3. **Data Authenticity:** Price, rating, and review count must be recorded as **observed** at a specific timestamp (`LAST_VERIFIED`). Never invent or estimate product specifications.
4. **Data Classification:** Every attribute must be explicitly categorized:
   - `VERIFIED`: Confirmed directly from Amazon product listing or official documentation.
   - `OBSERVED`: Empirical measurement at research timestamp.
   - `INFERRED`: Analytical synthesis (e.g., styling fit derived from visual listing photos).
   - `UNAVAILABLE`: Data point missing; explicitly recorded as such without dummy defaults.

---

## 6. Pinterest SEO Requirements

Direct affiliate Pins require robust Pinterest search engine optimization to capture organic visual search intent:

- **Title:** Actionable, keyword-focused title ($\le 100$ characters) matching product search intent.
- **Description:** Natural language paragraph ($\le 500$ characters) integrating primary and secondary keywords naturally. No keyword stuffing.
- **Keywords:** 1 Primary Keyword, 3–5 Secondary Intent Keywords.
- **Search Volume Handling:** If search volume data is unavailable, set `SEARCH_VOLUME = NOT VERIFIED`. Never fabricate search volumes.
- **Board Mapping:** Map to existing high-relevance boards (e.g., *Small Apartment Decorating Ideas*, *Luxury Home Decor 2026*, *Bookshelf Styling Ideas*). Create new boards only for recurring product clusters ($\ge 5$ products).

---

## 7. Creative & Art Direction Requirements

Visuals must match ElevateLivingCo's premium editorial aesthetic:

- **Aspect Ratio:** Pinterest-native 2:3 vertical aspect ratio ($1000 \times 1500\text{px}$).
- **Interior Quality:** Photorealistic interiors, believable lighting, natural drop shadows, realistic materials, and accurate furniture scale.
- **Visual Hierarchy:** Clear product focus, strong visual focal point, legible overlay typography with WCAG AA contrast.
- **Product Identity Preservation:** When reference images are available, preserve exact product colorways, silhouette, and distinguishing features.
- **Approved Visual Concepts:** Product Hero, Product-in-Room, Styled Vignette, Before/After Upgrade, Room Solution, Seasonal Accent, Product Comparison.

---

## 8. Affiliate Link & Compliance Requirements

- **Tag Enforcement:** Destination URL must contain `tag=elevateliv00e-20`.
- **FTC & Pinterest Disclosure:** Every Pin image or description must contain clear affiliate disclosure (e.g., *“As an Amazon Associate I earn from qualifying purchases. #ad”*).
- **Pricing Disclaimers:** Prices displayed in Pin graphics must include a timestamp disclaimer (e.g., *“Observed price at research time. Subject to change on Amazon.”*).
- **Prohibited Marketing Practices:**
  - ❌ No fake discounts ("50% OFF TODAY ONLY") unless empirically verified.
  - ❌ No fake urgency or countdown timers ("Only 2 left in stock!").
  - ❌ No unsupported superiority claims ("#1 Best Product in the World").
  - ❌ No deceptive product substitutions.

---

## 9. Quality Assurance & Pre-Publish Gates

Before any direct affiliate Pin is scheduled or published, it must pass the 18-point verification matrix defined in `elevate-pinterest-direct-affiliate-qa`:

> [!CAUTION]
> **CRITICAL HALT CONDITION:**
> If the product featured in the Pin image does NOT match the physical product listed on the destination Amazon page, publication is IMMEDIATELY STOPPED.

---

## 10. Tracking & Separate Campaign Analytics

All direct affiliate Pins are tracked exclusively in `.agents/data/pinterest-affiliate-campaign-tracker.csv` with `DESTINATION_TYPE = DIRECT_AFFILIATE`.

### Tracked Performance Metrics:
`PIN_ID`, `PRODUCT_ID`, `ASIN`, `CAMPAIGN`, `PRIMARY_KEYWORD`, `BOARD`, `PIN_FORMAT`, `VISUAL_CONCEPT`, `STYLE`, `ROOM`, `PRICE_AT_RESEARCH`, `PUBLISH_DATE`, `DESTINATION_TYPE`, `AFFILIATE_URL`, `IMPRESSIONS`, `PIN_CLICKS`, `OUTBOUND_CLICKS`, `SAVES`, `ENGAGEMENTS`, `DATA_DATE`, `SOURCE`, `NOTES`

---

## 11. Performance Learning Loop

- Evaluate performance trends by product category, price point, visual format, room type, and keyword cluster.
- Apply minimum data thresholds before drawing conclusions ($\ge 14$ days published, $\ge 1,000$ impressions).
- Never claim revenue or sales conversion without official Amazon Associates reporting data.

---

## 12. Failure Conditions & Hard Stops

The workflow immediately halts under any of the following conditions:
1. **Destination Product Mismatch:** Pin creative shows a different product than the destination ASIN.
2. **Invalid / Broken ASIN:** Amazon link returns 404 or points to an unavailable product.
3. **Missing Tag:** Affiliate tag `tag=elevateliv00e-20` is omitted or malformed.
4. **Data Fabrication:** Unverified price, rating, or review count inserted as fact.
5. **Article Link Leakage:** Target URL mistakenly points to an ElevateLivingCo article instead of Amazon.
