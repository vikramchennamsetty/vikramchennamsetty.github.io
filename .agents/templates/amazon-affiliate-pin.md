# Amazon Direct Affiliate Pin Metadata & URL Construction Template

## 1. System Overview & URL Architecture

This document specifies the metadata structure, Amazon affiliate URL construction protocol, tag validation rules, and tracking definitions for direct-to-Amazon Pinterest Pins under the `elevate-pinterest-direct-affiliate` skill.

---

## 2. URL Construction & Validation Standards

### Verified Amazon Associates Tag:
`tag=elevateliv00e-20`

### Canonical Product URL Standard:
`https://www.amazon.com/dp/{ASIN}`

### Verified Direct Affiliate URL Standard:
`https://www.amazon.com/dp/{ASIN}?tag=elevateliv00e-20`

### Optional Extended Tracking Parameters (When Supported):
`https://www.amazon.com/dp/{ASIN}?tag=elevateliv00e-20&linkCode=ll2&ref_=as_li_ss_tl`

> [!CAUTION]
> **STRICT URL INTEGRITY RULES:**
> 1. **Never invent an ASIN.** Must be a 10-character validated US Amazon ASIN.
> 2. **Never invent an Amazon product URL.**
> 3. **Never alter or omit the affiliate tag.** Tag must strictly match `elevateliv00e-20`.
> 4. **Never substitute products silently.** If product A is featured in the Pin, the link MUST resolve directly to product A on Amazon.
> 5. **Never use broken or redirected URLs.** Always verify HTTP status 200 before publication.

---

## 3. Direct Affiliate Pin Metadata Structure

```markdown
# Direct Amazon Affiliate Pin Manifest

## Product Identification
- **Product ID:** DIRPROD_002
- **ASIN:** B0C68DRR9P
- **Product Title:** addlon 48ft Outdoor String Lights Commercial Grade Waterproof
- **Observed Price:** $35.99 (Observed at research time)
- **Rating / Reviews:** 4.7 / 5.0 (28,400+ reviews)
- **Canonical URL:** https://www.amazon.com/dp/B0C68DRR9P
- **Direct Affiliate Destination URL:** https://www.amazon.com/dp/B0C68DRR9P?tag=elevateliv00e-20

## Pinterest Metadata & SEO
- **Pin Title:** Cozy Patio String Lights 48ft Waterproof Outdoor Edison Bulbs ($35.99)
- **Primary Keyword:** patio string lights outdoor
- **Secondary Keywords:** cozy patio lighting ideas, waterproof string lights, balcony mood lighting, outdoor edison bulbs
- **Target Pinterest Board:** Outdoor Patio Decor & Lighting Ideas
- **Pin Format:** Format A (Product + 4 Useful Features)
- **Visual Concept:** Evening Patio Vignette with Glowing Ambient Lights

## Pin Description
Transform your outdoor balcony or patio into a cozy evening bistro with these 48ft commercial-grade waterproof string lights. Features shatterproof vintage Edison bulbs, end-to-end connectability, weather-resistant insulation, and soft 2700K warm ambient glow. Perfect for small apartments, backyards, and budget outdoor updates. Observed price: $35.99 on Amazon. As an Amazon Associate I earn from qualifying purchases. #ad #patio lighting #outdoordecor #cozypatio #budgetdecor

## Image Alt Text
Photorealistic evening patio scene featuring addlon 48ft waterproof outdoor string lights glowing warmly above outdoor seating.

## FTC / Amazon Compliance Checklist
- [x] Destination URL contains tag `tag=elevateliv00e-20`
- [x] Product in Pin matches ASIN B0C68DRR9P
- [x] Price presented as observed at research timestamp
- [x] Required affiliate disclosure included ("As an Amazon Associate I earn from qualifying purchases. #ad")
- [x] Zero fake discount or countdown urgency claims
```

---

## 4. Pre-Publication URL Verification Protocol

Before writing any destination URL into a scheduled Pin record:

1. **Syntax Check:** Regex test for format `^https://www\.amazon\.com/dp/[A-Z0-9]{10}\?tag=elevateliv00e-20`.
2. **HTTP Resolution Test:** Perform HEAD or GET request to verify `200 OK` status without redirect loops or 404 errors.
3. **Product Parity Confirmation:** Verify product title returned from HTTP request matches the candidate product name.
4. **Tag Presence Audit:** Confirm `tag=elevateliv00e-20` is explicitly present in the query string.
