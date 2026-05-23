# ElevateLivingCo: Domain Migration SEO Recovery Plan

**Date Completed:** May 23, 2026  
**Primary Goal:** Consolidate all SEO authority to `https://elevatelivingco.me`  
**Root Cause:** Dual-domain indexing with GitHub Pages authority taking precedence  

---

## ROOT CAUSE SUMMARY

Google Search Console shows:
- ✅ "Crawled – currently not indexed"
- ✅ "Duplicate, Google chose different canonical"
- ✅ "Validation failed after indexing request"

**Why this happened:**
1. Old `vikramchennamsetty.github.io` domain has established authority
2. New `.me` domain has zero backlinks/history
3. No explicit 301 redirects from old to new domain
4. Google crawls both sites, sees duplicate content, trusts the older domain
5. New domain pages get crawled but not indexed (duplicate suppression)

---

## TECHNICAL FIXES COMPLETED ✅

### 1. `_config.yml` Updated
- ✅ Verified `url: "https://elevatelivingco.me"`
- ✅ Added sitemap auto-generation config
- ✅ Confirmed all Jekyll plugins active
- ✅ Removed any old github.io references

### 2. `robots.txt` Consolidated
- ✅ Single `User-agent: *` rule pointing to `.me` domain
- ✅ Sitemap points to `https://elevatelivingco.me/sitemap.xml`
- ✅ No harmful disallows on content pages

### 3. All HTML Pages Verified
- ✅ Every page has self-referencing canonical to `.me` domain
- ✅ All `og:url` properties point to `.me` domain
- ✅ All schema.org URLs point to `.me` domain
- ✅ No internal github.io references found in code

### 4. Sitemap Audit
- ✅ `sitemap.xml` contains only `.me` URLs (11 total)
- ✅ No github.io URLs in sitemap
- ✅ All URLs properly formatted with ISO 8601 dates
- ✅ Auto-generation enabled to prevent future manual sync issues

### 5. Jekyll Configuration
- ✅ `jekyll-sitemap` plugin enabled
- ✅ `jekyll-seo-tag` plugin enabled
- ✅ Auto-sitemap path configured
- ✅ baseurl set to empty string (no subdirectory)

---

## MANUAL STEPS REQUIRED (PRIORITY ORDER)

### PHASE 1: IMMEDIATE (Today - Day 1)

#### Step 1: Verify GitHub Pages HTTPS Enforcement
```
1. Go to: https://github.com/vikramchennamsetty/vikramchennamsetty.github.io
2. Click: Settings > Pages
3. Look for: "Enforce HTTPS"
4. Action: ✅ Check if enabled (should be automatic for custom domains)
5. If unchecked: Check and save
```

**Why:** HTTPS is critical for Google crawl credibility. GitHub Pages enforces this automatically for custom domains, but verify.

---

#### Step 2: Add Old Domain to Google Search Console
```
1. Go to: https://search.google.com/search-console
2. Click: "+" (Add Property)
3. Select: "URL prefix"
4. Enter: https://vikramchennamsetty.github.io
5. Verify: 
   - Option A: GitHub repo ownership (fastest)
   - Option B: Upload HTML verification file to repo
6. Confirm verification complete
```

**Timeline:** Verification instant to 5 minutes  
**Why:** Must claim old domain before requesting removals

---

#### Step 3: Check Current Indexing Status (Baseline)
```
1. In GSC for vikramchennamsetty.github.io:
   - Go to: Coverage
   - Note: Current "Indexed" count
   - Note: Current "Crawled – Not Indexed" count
   - Export data if possible (for post-migration comparison)
2. Document these numbers — you'll compare to post-migration
```

**Timeline:** 5 minutes  
**Why:** Establishes baseline for recovery tracking

---

### PHASE 2: REMOVE OLD DOMAIN (Days 1-3)

#### Step 4: Request URL Removals with Redirects
```
1. In GSC for vikramchennamsetty.github.io:
   - Go to: Settings (left menu) > Remove URLs
2. For EACH indexed page, click "New request"
3. For each removal:
   a. URL: /index.html (or path)
   b. Select: "Remove this URL and direct crawlers to an alternative"
   c. Alternative: https://elevatelivingco.me/index.html
   d. Click: "Request removal"
4. Repeat for all content pages:
   - /
   - /index.html
   - /about.html
   - /contact.html
   - /disclosure.html
   - /privacy.html
   - /5-patio-mistakes-that-make-your-space-look-cheap-fix-under-50.html
   - /5-antique-bar-carts-2026.html
   - /5-moody-entryway-ideas-luxury-on-budget.html
   - /7-dark-bookshelf-styling-ideas.html
   - /dark-luxury-kitchen-accessories-2026.html
   - /small-living-room-decor-ideas.html
   - /cheap-patio-setup-under-50.html
   - /best-waterproof-outdoor-rug-patio-under-50.html
```

**Timeline:** 24-72 hours for Google to process  
**Why:** Forces Google to stop crawling old domain and trust new one  
**Expected Result:** Old domain indexing drops to 0 within 3 days

---

### PHASE 3: RESUBMIT NEW DOMAIN (Days 3-5)

#### Step 5: Add New Domain to Google Search Console
```
1. Go to: https://search.google.com/search-console
2. Click: "+" (Add Property)
3. Select: "URL prefix"
4. Enter: https://elevatelivingco.me
5. Verify using one of:
   - HTML file (recommended): 
     a. Download HTML verification file from GSC
     b. Commit to repo: https://elevatelivingco.me/google[verification-code].html
     c. Push to main branch
     d. GSC verifies automatically in 1-2 minutes
   - DNS TXT record (fastest if you own domain):
     a. Go to domain registrar (domain.me)
     b. Add DNS TXT record provided by GSC
     c. GSC verifies in 1-5 minutes
   - Google Analytics (if property linked)
6. Confirm verification complete
```

**Timeline:** 1-5 minutes (DNS) or 1-2 minutes (HTML file)  
**Why:** Establishes ownership of new domain in GSC

---

#### Step 6: Submit Sitemap
```
1. In GSC for elevatelivingco.me:
   - Go to: Sitemaps (left menu)
   - Click: "New Sitemap"
   - Enter: https://elevatelivingco.me/sitemap.xml
   - Click: "Submit"
2. Wait for status: "Sitemaps found" or "Success"
3. Check:
   - URLs submitted (should match sitemap count ~11)
   - Any errors or issues
```

**Timeline:** 5-30 seconds for submission processing  
**Why:** Tells Google exactly which pages to index on new domain

---

#### Step 7: Request Indexing for Key Pages
```
1. In GSC for elevatelivingco.me:
   - Go to: URL Inspection (top search bar)

2. For each high-priority page, enter URL and click "Request indexing":
   - https://elevatelivingco.me/
   - https://elevatelivingco.me/5-patio-mistakes-that-make-your-space-look-cheap-fix-under-50.html
   - https://elevatelivingco.me/cheap-patio-setup-under-50.html
   - https://elevatelivingco.me/best-waterproof-outdoor-rug-patio-under-50.html

3. Status changes to "Requested indexing"
```

**Timeline:** Indexed within 1-7 days after request  
**Why:** Accelerates indexing after domain removals completed

---

### PHASE 4: SET UP REDIRECT (Days 5-7)

#### Step 8a: Option A - Cloudflare Redirect (Recommended)

**If you have Cloudflare account or willing to create:**

```
1. Go to: https://dash.cloudflare.com
2. Sign up free (if no account)
3. Add domain: vikramchennamsetty.github.io
   (Note: This is the GitHub Pages domain, not your custom domain)
4. Go to: Routing > URL Forwarding (or Redirects)
5. Create redirect rule:
   - Source: vikramchennamsetty.github.io/*
   - Target: https://elevatelivingco.me/$1
   - Status Code: 301 (Permanent Redirect)
   - Flatten redirect: ON (if available)
6. Save and deploy
7. Test:
   - Visit: https://vikramchennamsetty.github.io/about.html
   - Should 301 redirect to: https://elevatelivingco.me/about.html
```

**Timeline:** 5-15 minutes setup  
**Why:** Creates proper 301 redirects (best SEO signal)

**Verify:**
```bash
curl -I https://vikramchennamsetty.github.io/
# Should show: HTTP/1.1 301 Moved Permanently
# Location: https://elevatelivingco.me/
```

---

#### Step 8b: Option B - GitHub Pages Meta Refresh (Fallback)

**If Cloudflare not available:**

```
1. In old repo: vikramchennamsetty/vikramchennamsetty.github.io
2. Create file: index.html with:

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0;URL=https://elevatelivingco.me/">
    <link rel="canonical" href="https://elevatelivingco.me/">
    <title>Redirecting to ElevateLivingCo</title>
</head>
<body>
    <h1>Site Moved</h1>
    <p>This site has moved to <a href="https://elevatelivingco.me/">elevatelivingco.me</a></p>
    <p>You will be redirected in a moment...</p>
</body>
</html>

3. Commit and push
4. Result: Meta refresh (slower than 301, but recognized by Google)
```

**⚠️ Limitation:** GitHub Pages doesn't support .htaccess or server-level 301s  
**Timeline:** Takes effect immediately  
**Why:** Fallback method if Cloudflare unavailable

---

### PHASE 5: MONITORING (Ongoing, Days 5-30)

#### Step 9: Daily Monitoring (First 7 Days)
```
Daily checklist:

1. Check GSC Coverage Report:
   - View: https://search.google.com/search-console
   - Select: elevatelivingco.me property
   - Go to: Coverage (left menu)
   - Monitor:
     * "Indexed" count increasing
     * "Crawled – Not Indexed" count decreasing
     * Any new errors appearing

2. Check Old Domain Coverage (should decrease):
   - View: vikramchennamsetty.github.io property
   - Go to: Coverage
   - Should see indexed pages dropping to 0

3. Document changes:
   - Take screenshots for comparison
   - Track day-over-day progress
```

**Expected Timeline:**
- Day 1-2: "Crawled – Not Indexed" pages stay same
- Day 2-3: Old domain removals process
- Day 3-5: New domain pages start reindexing
- Day 5-7: 60-80% of pages reindex
- Day 7-14: 90%+ of pages reindex

---

#### Step 10: Weekly Monitoring (Days 7-30)
```
Weekly tasks:

1. Check Coverage Report (Friday):
   - Compare week-over-week progress
   - Note any error trends

2. Check Search Performance:
   - Go to: Performance (in GSC)
   - Monitor:
     * Impressions (should be high for existing keywords)
     * Clicks (initial dip normal, recovers by day 7)
     * CTR (should stay stable)
     * Avg Position (should improve as pages reindex)

3. Check for Crawl Errors:
   - Go to: Coverage
   - Look for:
     * Server errors (5xx) — alert if more than 1-2
     * Soft 404s — should be minimal
     * Not found (4xx) — expected for old domain

4. Request Indexing for Remaining Pages:
   - If any pages still "Crawled – Not Indexed" after day 7
   - Use URL Inspection tool to request indexing
   - Prioritize by:
     * High-traffic keyword pages first
     * Recently updated pages
```

**Expected Traffic Impact:**
- Days 0-2: Minimal impact (old domain still indexed)
- Days 2-5: 10-30% traffic dip (transition period)
- Days 5-7: Sharp recovery (new domain indexing)
- Days 7-14: Traffic returns to 90-100% of baseline
- Days 14-30: Traffic exceeds baseline (new domain optimizes)

---

## DOMAIN AUTHORITY RECOVERY PLAN

### Authority Transfer Timeline
- **Days 1-3:** Old domain authority "paused" (removals pending)
- **Days 3-7:** New domain authority builds from 301 redirects
- **Days 7-14:** New domain authority accelerates (reindexing)
- **Days 14-30:** New domain reaches 70-80% of old authority
- **Days 30-60:** New domain authority surpasses old domain
- **Days 60+:** New domain becomes primary authority source

### Acceleration Methods (Optional)

If you want to accelerate authority transfer, do these:

**Method 1: Build Backlinks (Fastest Impact)**
- Get 3-5 high-quality backlinks from relevant sites
- Pinterest link (create brand profile)
- LinkedIn mention (create company page)
- Directory submission (if applicable)
- Result: Authority jumps 10-20 points

**Method 2: Google Business Profile**
- Create GBP for elevatelivingco.me
- Complete all fields
- Add hours, contact, description
- Result: Legitimacy + local authority boost

**Method 3: Brand Search Signal**
- Increase branded searches ("ElevateLivingCo")
- Update personal social media to link new domain
- Change email signature to new domain
- Result: Google recognizes brand consolidation

**Method 4: Content Refresh**
- Update 5 existing pages with new information
- Add 2-3 new high-quality pages
- Link new content internally
- Result: Fresh content signals, faster reindexing

---

## EXPECTED OUTCOMES

### Conservative Estimate (No Additional Effort)
- **Days 1-3:** Old domain removals process
- **Days 3-5:** New domain sitemap processes
- **Days 5-7:** Homepage reindexes, begins ranking
- **Days 7-14:** 80% of pages reindex
- **Days 14-21:** 95% of pages reindex
- **Days 21-30:** Near 100% recovery, authority building

### Optimistic Estimate (With Acceleration Methods)
- **Days 1-3:** Same
- **Days 3-5:** Faster sitemap processing
- **Days 5-7:** Homepage + top 3 pages reindex
- **Days 7-10:** 90% of pages reindex (accelerated)
- **Days 10-14:** 99% of pages reindex
- **Days 14-30:** New domain authority surpasses old

---

## VERIFICATION COMMANDS

Test that everything is working:

```bash
# 1. Check old domain redirects
curl -I https://vikramchennamsetty.github.io/
# Should see: HTTP/1.1 301 Moved Permanently (after Cloudflare setup)

# 2. Check specific page redirect
curl -I https://vikramchennamsetty.github.io/about.html
# Should see: HTTP/1.1 301 Moved Permanently
# Location: https://elevatelivingco.me/about.html

# 3. Check new domain works
curl -I https://elevatelivingco.me/
# Should see: HTTP/1.1 200 OK

# 4. Check canonical tags
curl https://elevatelivingco.me/ | grep canonical
# Should show: <link rel="canonical" href="https://elevatelivingco.me/">

# 5. Check sitemap
curl https://elevatelivingco.me/sitemap.xml | head -20
# Should show XML with .me URLs only

# 6. Check robots.txt
curl https://elevatelivingco.me/robots.txt
# Should point to elevatelivingco.me sitemap
```

---

## REMAINING RISKS & MITIGATION

### Risk 1: Slow Reindexing
**Symptom:** Pages still "Crawled – Not Indexed" after day 10  
**Cause:** Low crawl budget on new domain  
**Fix:**
- Request indexing for remaining pages manually (3-5 per day)
- Add high-quality backlinks to new domain
- Create new content to signal activity

### Risk 2: Traffic Drop Extends Beyond Day 7
**Symptom:** Organic traffic below 60% at day 7  
**Cause:** Incomplete redirect setup or mixed indexing  
**Fix:**
- Verify 301 redirect is working (curl test)
- Check GSC for errors
- Request indexing for high-traffic pages

### Risk 3: Duplicate Content Still Indexed
**Symptom:** Old and new URLs both indexed after day 14  
**Cause:** Incomplete removal requests or redirect failure  
**Fix:**
- Check Cloudflare redirect rules
- Submit removal requests again
- Contact Google Search Console support

---

## SUMMARY CHECKLIST

### Completed (In Repository)
- [x] `_config.yml` verified and optimized
- [x] `robots.txt` consolidated
- [x] All HTML canonicals verified as `.me`
- [x] All `og:url` properties verified as `.me`
- [x] All schema URLs verified as `.me`
- [x] Sitemap contains only `.me` URLs
- [x] Jekyll plugins active
- [x] No github.io references in code

### Ready for Manual Action
- [ ] Step 1: Verify HTTPS enforcement (5 min)
- [ ] Step 2: Add old domain to GSC (5 min)
- [ ] Step 3: Document baseline indexing (5 min)
- [ ] Step 4: Request URL removals (15-30 min)
- [ ] Step 5: Add new domain to GSC (5 min)
- [ ] Step 6: Submit sitemap (1 min)
- [ ] Step 7: Request indexing for key pages (5 min)
- [ ] Step 8: Set up 301 redirects via Cloudflare (10 min)
- [ ] Step 9: Daily monitoring (days 1-7, 5 min/day)
- [ ] Step 10: Weekly monitoring (days 7-30, 15 min/week)

**Total Time Investment:** ~2 hours setup + 15 min/week monitoring for 4 weeks

---

## SUPPORT REFERENCES

- Google Search Console Help: https://support.google.com/webmasters
- GitHub Pages Domain Setup: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-site
- Cloudflare Page Rules: https://support.cloudflare.com/hc/en-us/categories/200166026
- SEO Migration Best Practices: https://developers.google.com/search/docs/advanced/crawling/5xx-server-error

---

**Document Version:** 1.0  
**Last Updated:** May 23, 2026  
**Prepared for:** vikramchennamsetty/vikramchennamsetty.github.io
