# Search Appearance, Title Links & Schema Markup Cheatsheet
## Google Search Central Standards for ElevateLivingCo

---

### 1. Title Links (`<title>` and `<h1>`) Optimization

Google automatically generates title links in search results based on page titles, visible headings, and content signals. To ensure Google uses our intended titles without rewriting them:

#### Best Practices:
1. **Title-to-H1 Alignment:**
   - `<title>`: `Small Apartment Living Room Decor Ideas: 12 Ways to Make Compact Spaces Look Bigger`
   - `<h1>`: `Small Apartment Living Room Decor Ideas: 12 Ways to Make Compact Spaces Feel Expansive`
   - *Why:* Keeping the core subject and keyword intent nearly identical between `<title>` and `<h1>` prevents Google's automated title-rewriting system from substituting alternative headers.
2. **Concise & Descriptive:** Avoid vague titles like *"Living Room Tips"* or *"Ideas"*. Specifically state what kind of room (Apartment), what problem is solved (Make Compact Spaces Look Bigger), and how many techniques are covered (12 Ways).
3. **Avoid Boilerplate & Stuffing:** Never append repetitive tagline fragments to every page (e.g. `| Best Cheap Decor Buy Online Cheap 2026`). Use clean brand appending: `| ElevateLivingCo`.

---

### 2. Meta Descriptions & Snippet Controls

* **Target Length:** 140–160 characters.
* **Goal:** A clear, informative, non-exaggerated summary of what the article provides.
* **Snippet Directives (if needed):**
  - `max-snippet:-1` (allows full descriptive snippets).
  - `max-image-preview:large` (allows high-resolution visual previews in Google Discover and search snippets).
  - `max-video-preview:-1`.

---

### 3. Schema.org JSON-LD Templates (100% On-Page Parity)

Google mandates that structured data must represent content that is **visibly present** on the page. Never include questions, reviews, or prices in schema that cannot be seen by human readers.

#### Complete Multi-Entity Schema Template:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://elevatelivingco.me/article-slug.html#article",
      "headline": "Small Apartment Living Room Decor Ideas: 12 Ways to Make Compact Spaces Look Bigger",
      "description": "Discover 12 designer-approved small living room decor ideas for compact apartments. Actionable techniques covering layout, furniture scale, layered lighting, high curtains, rugs, and vertical storage.",
      "url": "https://elevatelivingco.me/article-slug.html",
      "image": "https://elevatelivingco.me/assets/images/article-hero.webp",
      "datePublished": "2026-10-18T10:00:00+00:00",
      "dateModified": "2026-10-29T13:30:00+00:00",
      "author": {
        "@type": "Person",
        "name": "Vikram Chennamsetty",
        "url": "https://elevatelivingco.me/about.html"
      },
      "publisher": {
        "@type": "Organization",
        "name": "ElevateLivingCo",
        "url": "https://elevatelivingco.me",
        "logo": {
          "@type": "ImageObject",
          "url": "https://elevatelivingco.me/favicon.ico"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://elevatelivingco.me/article-slug.html"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://elevatelivingco.me/article-slug.html#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://elevatelivingco.me/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Living Room Guides",
          "item": "https://elevatelivingco.me/#living-room"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Small Apartment Living Room Ideas",
          "item": "https://elevatelivingco.me/article-slug.html"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://elevatelivingco.me/article-slug.html#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do you make a small living room look bigger with furniture?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Choose seating elevated on slender tapered legs with 5 to 7 inches of floor clearance, allowing light and sightlines to flow under furniture. Use the two-thirds wall ratio as a starting guide for sofa size."
          }
        }
      ]
    }
  ]
}
</script>
```

