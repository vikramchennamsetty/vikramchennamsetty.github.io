# Google Product Review & Recommendation Quality Standards
## ElevateLivingCo Operational Guide for Affiliate & Decor Recommendations

---

### Google's 11 Best Practices for Product Reviews Applied to Interior Decor

Google Search Central provides an explicit framework for creating helpful, authoritative product reviews and recommendation roundups. For ElevateLivingCo, every featured product must adhere to these 11 rules:

---

#### 1. Evaluate from a User's Perspective
* **Requirement:** Discuss how the furniture or decor piece actually performs in daily living conditions.
* **Application:** Mention practical ease of cleaning (e.g., wipeable tempered glass vs fingerprint-sensitive mirrors), pet-friendliness, assembly time, and stability on apartment flooring.

#### 2. Demonstrate Subject Expertise & Evidence
* **Requirement:** Show deep familiarity with the category rather than generic enthusiasm.
* **Application:** Detail specific joinery, frame gauge, textile composition (e.g. 100% linen weave vs polyester blend), or powder-coated finish resilience.

#### 3. Share Quantitative Measurements
* **Requirement:** Provide tangible numerical metrics that help readers visualize the item in their specific space.
* **Application:**
  - Exact overall dimensions (Length $\times$ Width $\times$ Height).
  - Ground clearance height (e.g. 6.2 inches clearance for robot vacuums and sightlines).
  - Weight capacity per shelf or seating surface.
  - Footprint square footage.

#### 4. Explain What Sets the Product Apart
* **Requirement:** Highlight the specific unique design choice that makes this piece superior to typical alternatives.
* **Application:** *"Unlike standard utility carts with industrial steel wire shelves, the BON AUGURE bar cart pairs matte gold geometric frames with marbleized composite tiers, elevating it from a utility trolley into a permanent architectural accent."*

#### 5. Cover Comparable Alternatives & Trade-Offs
* **Requirement:** Candidly address who this product is *not* suitable for.
* **Application:** *"If your living room has heavy foot traffic from toddlers or pets, an open-tier glass cart poses safety concerns; in that scenario, opt for a solid wood credenza with enclosed soft-close cabinetry."*

#### 6. Describe Evolution and Context
* **Requirement:** Note how this product improves upon older iterations or historical design pain points.
* **Application:** *"Earlier mid-century replicas often used hollow screw-in legs that wobbled under heavy sectionals; this model utilizes reinforced steel mounting plates with threaded brass caps."*

#### 7. Focus on Key Decision-Making Criteria
* **Requirement:** For small-space decor, identify the #1 deciding factor for the category.
* **Application:**
  - *Coffee tables:* Rounded edges to prevent shin bruises in tight walkways.
  - *Bar carts:* 360-degree locking casters for effortless repositioning when entertaining.
  - *Floor lamps:* Heavy base with offset arc to illuminate seating without taking up floor surface.

#### 8. Go Beyond Manufacturer Descriptions
* **Requirement:** Never copy or lightly paraphrase Amazon bullet points.
* **Application:** Transform *"Made of durable metal and engineered wood"* into *"The rigid dual-rail steel structure prevents rack wobble, while the textured melamine laminate resists condensation rings from glassware."*

#### 9. Provide Clear Resource & Verification Links
* **Requirement:** Allow readers to easily inspect current pricing, customer photos, and variant options.
* **Application:** Direct, clean link: `https://www.amazon.com/dp/[ASIN]?tag=elevateliv05f-20` with transparent CTA button text (e.g. *"Check Current Price on Amazon"*).

#### 10. Justify Top Picks and Category Labels
* **Requirement:** Never slap an arbitrary "Editor's Choice" badge without explaining why.
* **Application:** *"We designated this our Best Compact Investment because its 16-inch depth fits flush behind narrow apartment entryways while offering full stemware and bottle storage across three tiers."*

#### 11. Affiliate Disclosure & Technical Attributes
* **Requirement:** Clear FTC disclosure and valid link rel attributes.
* **Standard HTML Implementation:**
  ```html
  <a href="https://www.amazon.com/dp/B0FCFG2W47?tag=elevateliv05f-20" 
     target="_blank" 
     rel="sponsored nofollow" 
     class="btn-amazon" 
     onclick="trackAffiliate(this.href, 'bon-augure-bar-cart')">
     Check Price on Amazon
  </a>
  ```
  ```html
  <p class="disclosure">Disclosure: As an Amazon Associate, we earn from qualifying purchases at no extra cost to you.</p>
  ```

