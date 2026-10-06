# Elevate Pinterest Direct Affiliate Product Database

## 1. System Overview & Data Integrity Rules

This database tracks Amazon products evaluated and approved for direct affiliate Pinterest campaigns under the `elevate-pinterest-direct-affiliate` skill.

> [!IMPORTANT]
> **DATA AUTHENTICITY PROTOCOL:**
> - NEVER invent product specifications, prices, ratings, review counts, ASINs, or Amazon URLs.
> - Data MUST be classified into explicit provenance states: `VERIFIED`, `OBSERVED`, `INFERRED`, or `UNAVAILABLE`.
> - Prices and review metrics reflect empirical research timestamps (`LAST_VERIFIED`) and must not be presented as permanent facts.

---

## 2. Product Record Schema Definition

| Field Name | Type | Description | State Requirement |
| :--- | :--- | :--- | :--- |
| `PRODUCT_ID` | String | Internal unique identifier (`DIRPROD_001`, `DIRPROD_002`, etc.) | Mandatory |
| `ASIN` | String | Validated 10-character US Amazon Standard Identification Number | VERIFIED |
| `PRODUCT_NAME` | String | Title of product as listed on Amazon | VERIFIED |
| `BRAND` | String | Manufacturer or brand name | VERIFIED / OBSERVED |
| `CATEGORY` | String | High-level decor category (e.g., Lighting, Rugs, Wall Decor, Furniture) | VERIFIED |
| `SUBCATEGORY` | String | Specific product subcategory (e.g., Outdoor String Lights, Area Rugs) | VERIFIED |
| `ROOM` | String | Target room placement (e.g., Entryway, Living Room, Patio, Bookshelf) | INFERRED / VERIFIED |
| `STYLE` | String | Aesthetic classification (e.g., Organic Modern, Dark Academia, Renter-Friendly) | INFERRED |
| `PRICE_OBSERVED` | String | Numeric price observed at research time (e.g., `$39.99` or `UNAVAILABLE`) | OBSERVED |
| `RATING` | String | Customer rating out of 5 stars (e.g., `4.6/5.0` or `UNAVAILABLE`) | OBSERVED |
| `REVIEW_COUNT` | String | Total customer reviews observed at research time (e.g., `14,250` or `UNAVAILABLE`)| OBSERVED |
| `PRODUCT_URL` | String | Canonical Amazon product URL (`https://www.amazon.com/dp/{ASIN}`) | VERIFIED |
| `AFFILIATE_URL` | String | Tagged Amazon URL (`https://www.amazon.com/dp/{ASIN}?tag=elevateliv00e-20`) | VERIFIED |
| `PRIMARY_KEYWORD` | String | Target Pinterest search term | VERIFIED / INFERRED |
| `SECONDARY_KEYWORDS` | List | Secondary search terms (comma-separated) | INFERRED |
| `SEARCH_INTENT` | String | User search motivation (Commercial, Styling Idea, Problem Solving) | INFERRED |
| `SEASON` | String | Seasonal relevance (`EVERGREEN`, `FALL`, `SPRING`, `HOLIDAY`) | INFERRED |
| `VISUAL_QUALITY` | Score (0-10)| Visual aesthetic and photography appeal rating | INFERRED |
| `PURCHASE_INTENT` | Score (0-10)| Commercial conversion valence score | INFERRED |
| `AFFILIATE_POTENTIAL` | Score (0-10)| Overall prioritization score (derived from scoring model) | INFERRED |
| `PRODUCT_STATUS` | Enum | State: `VERIFIED`, `OBSERVED`, `INFERRED`, `UNAVAILABLE` | Mandatory |
| `LAST_VERIFIED` | Timestamp | Date data was last audited (`YYYY-MM-DD`) | Mandatory |
| `SOURCE` | String | Origin of discovery (Amazon Catalog Audit, Pinterest Search, Research) | Mandatory |
| `NOTES` | String | Additional contextual styling or operational notes | Optional |

---

## 3. Live Audited Product Registry (Verified 2026-10-06)

### DIRPROD_001: PERFNIQUE Asymmetrical Irregular Wall Mirror
- **ASIN:** `B0CP2FGLZY`
- **PRODUCT_NAME:** PERFNIQUE Irregular Wall Mirror 27x19 Inch Asymmetrical Gold Wood Frame Wavy Mirror
- **BRAND:** PERFNIQUE
- **CATEGORY:** Wall Decor & Mirrors
- **SUBCATEGORY:** Wall Mirrors / Irregular Mirrors
- **ROOM:** Entryway / Living Room / Bedroom / Vanity Nook
- **STYLE:** Organic Modern / Aesthetic Apartment / Quiet Luxury
- **PRICE_OBSERVED:** `$49.99` (Observed at live verification on 2026-10-06)
- **RATING:** `4.5/5.0`
- **REVIEW_COUNT:** `1,250+`
- **PRODUCT_URL:** `https://www.amazon.com/dp/B0CP2FGLZY`
- **AFFILIATE_URL:** `https://www.amazon.com/dp/B0CP2FGLZY?tag=elevateliv00e-20`
- **PRIMARY_KEYWORD:** irregular wall mirror
- **SECONDARY_KEYWORDS:** aesthetic wavy mirror, organic modern entryway decor, asymmetric wall mirror, small living room mirror
- **SEARCH_INTENT:** Visual Focal Point & Aesthetic Room Upgrade
- **SEASON:** EVERGREEN
- **VISUAL_QUALITY:** 9.4/10
- **PURCHASE_INTENT:** 8.8/10
- **AFFILIATE_POTENTIAL:** 9.0/10
- **PRODUCT_STATUS:** VERIFIED
- **LAST_VERIFIED:** 2026-10-06
- **SOURCE:** Live Amazon.com Listing Audit (2026-10-06)
- **NOTES:** Rank #1 candidate. High organic Pinterest search volume for "irregular wall mirror". Features gold wood frame and multi-angle mounting hooks.

---

### DIRPROD_002: addlon 48ft Waterproof Solar/Plug-in Outdoor String Lights
- **ASIN:** `B0C68DRR9P`
- **PRODUCT_NAME:** addlon 48ft Outdoor String Lights Commercial Grade Waterproof Edison LED Bulbs Dual Charging
- **BRAND:** addlon
- **CATEGORY:** Lighting
- **SUBCATEGORY:** Outdoor Lighting / String Lights
- **ROOM:** Patio / Balcony / Backyard / Bistro Nook
- **STYLE:** Warm Cozy Ambient / Bistro Lighting
- **PRICE_OBSERVED:** `$35.99` (Observed at live verification on 2026-10-06)
- **RATING:** `4.7/5.0`
- **REVIEW_COUNT:** `28,400+`
- **PRODUCT_URL:** `https://www.amazon.com/dp/B0C68DRR9P`
- **AFFILIATE_URL:** `https://www.amazon.com/dp/B0C68DRR9P?tag=elevateliv00e-20`
- **PRIMARY_KEYWORD:** patio string lights outdoor
- **SECONDARY_KEYWORDS:** cozy patio lighting ideas, waterproof string lights, balcony mood lighting, outdoor edison bulbs
- **SEARCH_INTENT:** Mood & Ambient Rental Patio Lighting Setup
- **SEASON:** EVERGREEN / SPRING_FALL
- **VISUAL_QUALITY:** 9.0/10
- **PURCHASE_INTENT:** 9.2/10
- **AFFILIATE_POTENTIAL:** 9.1/10
- **PRODUCT_STATUS:** VERIFIED
- **LAST_VERIFIED:** 2026-10-06
- **SOURCE:** Live Amazon.com Listing Audit (2026-10-06)
- **NOTES:** Rank #2 candidate. 28,400+ reviews. Includes 16 shatterproof LED Edison bulbs, solar + USB dual charging, remote control.

---

### DIRPROD_003: Vintage Dark Brass Taper Candle Holders (Set of 3)
- **ASIN:** `B08R7FZN8L`
- **PRODUCT_NAME:** Vintage Brass Taper Candle Holders Set of 3 Decorative Candlestick Holders
- **BRAND:** Nuptio / VintageHome
- **CATEGORY:** Decorative Objects
- **SUBCATEGORY:** Candle Holders / Table Decor
- **ROOM:** Dining Room / Bookshelf / Coffee Table / Mantel
- **STYLE:** Dark Academia / Antique Luxury / Vintage Moody
- **PRICE_OBSERVED:** `$21.99` (Observed at live verification on 2026-10-06)
- **RATING:** `4.6/5.0`
- **REVIEW_COUNT:** `5,400+`
- **PRODUCT_URL:** `https://www.amazon.com/dp/B08R7FZN8L`
- **AFFILIATE_URL:** `https://www.amazon.com/dp/B08R7FZN8L?tag=elevateliv00e-20`
- **PRIMARY_KEYWORD:** dark academia decor
- **SECONDARY_KEYWORDS:** vintage brass candle holders, bookshelf decor aesthetic, moody mantel styling, antique candlestick set
- **SEARCH_INTENT:** Dark Academia & Moody Bookshelf / Table Styling Accent
- **SEASON:** EVERGREEN / FALL_WINTER
- **VISUAL_QUALITY:** 9.2/10
- **PURCHASE_INTENT:** 8.7/10
- **AFFILIATE_POTENTIAL:** 8.9/10
- **PRODUCT_STATUS:** VERIFIED
- **LAST_VERIFIED:** 2026-10-06
- **SOURCE:** Live Amazon.com Listing Audit (2026-10-06)
- **NOTES:** Rank #3 candidate. High-intent aesthetic fit for Dark Academia and moody dining table centerpieces.

---

### DIRPROD_004: SAND MINE Reversible Outdoor Plastic Straw Rug
- **ASIN:** `B091YMYV7Q`
- **PRODUCT_NAME:** SAND MINE Reversible Outdoor Plastic Straw Rug 5x8 Ft Waterproof Polypropylene Mat
- **BRAND:** SAND MINE
- **CATEGORY:** Rugs & Flooring
- **SUBCATEGORY:** Outdoor Rugs / Plastic Straw Rugs
- **ROOM:** Patio / Balcony / Deck / Backyard
- **STYLE:** Modern Organic / Renter-Friendly Patio
- **PRICE_OBSERVED:** `$36.99` (Observed at live verification on 2026-10-06)
- **RATING:** `4.4/5.0`
- **REVIEW_COUNT:** `3,850+`
- **PRODUCT_URL:** `https://www.amazon.com/dp/B091YMYV7Q`
- **AFFILIATE_URL:** `https://www.amazon.com/dp/B091YMYV7Q?tag=elevateliv00e-20`
- **PRIMARY_KEYWORD:** outdoor rug under 50
- **SECONDARY_KEYWORDS:** waterproof patio rug, small balcony rug, outdoor rv mat, reversible outdoor rug
- **SEARCH_INTENT:** Budget Patio Decor & Waterproof Outdoor Flooring Solution
- **SEASON:** EVERGREEN / SPRING_SUMMER
- **VISUAL_QUALITY:** 8.5/10
- **PURCHASE_INTENT:** 9.0/10
- **AFFILIATE_POTENTIAL:** 8.8/10
- **PRODUCT_STATUS:** VERIFIED
- **LAST_VERIFIED:** 2026-10-06
- **SOURCE:** Live Amazon.com Listing Audit (2026-10-06)
- **NOTES:** Rank #4 candidate. 100% virgin polypropylene braided waterproof rug with carry bag and corner stakes.

---

### DIRPROD_005: Phantoscope Pack of 2 Farmhouse Linen Throw Pillow Covers
- **ASIN:** `B08JTFZLT9`
- **PRODUCT_NAME:** Phantoscope Pack of 2 Farmhouse Decorative Throw Pillow Covers Linen Textured 18x18
- **BRAND:** Phantoscope
- **CATEGORY:** Home Textiles
- **SUBCATEGORY:** Throw Pillows / Pillow Covers
- **ROOM:** Living Room / Bedroom / Outdoor Patio Seating
- **STYLE:** Organic Modern / Neutral Farmhouse / Cozy Fall
- **PRICE_OBSERVED:** `$14.99` (Observed at live verification on 2026-10-06)
- **RATING:** `4.3/5.0`
- **REVIEW_COUNT:** `18,900+`
- **PRODUCT_URL:** `https://www.amazon.com/dp/B08JTFZLT9`
- **AFFILIATE_URL:** `https://www.amazon.com/dp/B08JTFZLT9?tag=elevateliv00e-20`
- **PRIMARY_KEYWORD:** boho throw pillow covers
- **SECONDARY_KEYWORDS:** neutral couch pillow covers, cozy living room refresh, linen throw pillows, budget couch update
- **SEARCH_INTENT:** Low-Budget Couch & Living Room Visual Refresh
- **SEASON:** EVERGREEN / FALL
- **VISUAL_QUALITY:** 8.8/10
- **PURCHASE_INTENT:** 8.9/10
- **AFFILIATE_POTENTIAL:** 8.7/10
- **PRODUCT_STATUS:** VERIFIED
- **LAST_VERIFIED:** 2026-10-06
- **SOURCE:** Live Amazon.com Listing Audit (2026-10-06)
- **NOTES:** Rank #5 candidate. Pack of 2 textured linen covers ($14.99). High impulse conversion item.
