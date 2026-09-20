---
name: elevate-problem-product-intelligence
description: >-
  Decomposes user decorating dilemmas into primary/secondary problems, root causes, constraints, and desired 
  outcomes—mapping solution mechanisms to valid product categories and non-product solutions before 
  handing targets off to product research and niche matching.
version: 1.0
triggers:
  - "what solves this décor problem"
  - "products for a specific problem"
  - "how to fix this room"
  - "what should I buy to fix this"
  - "products for small-space problems"
  - "products for rental problems"
  - "what products solve clutter"
  - "what products solve poor lighting"
  - "what products solve empty walls"
  - "what products solve awkward corners"
  - "product categories for a décor problem"
  - "solution ideas for a room problem"
scope: problem-product-intelligence
risk: medium
source:
  type: native-specialized
  version: 1.0
---

# Elevate Problem → Product Intelligence Skill (V1.0)

## Purpose
Establishes the problem-decomposition and solution-architecture layer for ElevateLivingCo guides. Evaluates what decorating dilemma the reader actually needs solved BEFORE determining product categories or candidates—decoupling symptoms from root causes, preserving non-product solutions, enforcing constraint compatibility, and preventing product-first affiliate clutter.

---

## 1. System Architecture & Workflow Pipeline

$$\text{USER PROBLEM} \longrightarrow \text{PROBLEM TAXONOMY} \longrightarrow \text{ROOT CAUSE \& CONSTRAINTS} \longrightarrow \text{DESIRED OUTCOME} \longrightarrow \text{SOLUTION MECHANISM} \longrightarrow \text{PRODUCT CATEGORY MAPPING} \longrightarrow \text{RESEARCH HANDOFF}$$

### Core Philosophy:
Always answer **"What does the user actually need solved?"** before asking **"What product should we recommend?"** Never begin an editorial workflow with products.

### Integration Pipeline:
1. **`elevate-problem-product-intelligence` (THIS SKILL):** Decomposes the user dilemma, isolates root causes and constraints, identifies solution mechanisms, and outputs target product categories or non-product recommendations.
2. **`elevate-niche-product-matching`:** Validates candidate categories and candidates against article intent, room setting, decor style taxonomy, and Shop The Look composition.
3. **`elevate-product-research-intelligence`:** Evaluates specific candidate product ASINs through the 12-step contextual hierarchy and 5-tier classification matrix.
4. **`elevate-source-integrity` & `elevate-affiliate-compliance`:** Validates 9-field product identity parity, Associate tags (`elevateliv05f-20`), FTC disclosures, and protected link contracts.

---

## 2. Decor Problem Taxonomy (27 Problem Classes)

Every article or user request MUST be classified into one or more of these 27 problem classes—**never force a multi-problem dilemma into a single category**:

- `SMALL_SPACE`: Compact floor plan, limited square footage.
- `CLUTTER`: Visual chaos, unorganized everyday items.
- `STORAGE`: Insufficient capacity for clothing, books, or living items.
- `LIGHTING`: Low ambient light, harsh overhead glare, lack of atmosphere.
- `PRIVACY`: Window exposure, lack of room division.
- `WINDOW_TREATMENT`: Unfinished windows, poor light control.
- `EMPTY_WALL`: Bare, unstyled wall expanse.
- `EMPTY_CORNER`: Awkward, unutilized room corner.
- `AWKWARD_LAYOUT`: Challenging architectural footprint or door/window placement.
- `VISUAL_BALANCE`: Off-center weight, lopsided room composition.
- `COLOR`: Bland monochrome palette, clashing accent colors.
- `TEXTURE`: Flat surfaces, lack of tactile depth or warmth.
- `SCALE`: Furniture too large or small for room proportions.
- `PROPORTION`: Mismatched heights, unaligned horizontal planes.
- `LOW_LIGHT`: Windowless or north-facing rental space.
- `RENTAL_RESTRICTION`: Prohibition on drilling, painting, or electrical wiring.
- `BUDGET`: Need for high-impact, accessible design solutions.
- `ORGANIZATION`: Functional system breakdown for daily essentials.
- `SEASONAL_REFRESH`: Transitioning decor across spring/summer/fall/winter.
- `OUTDATED_LOOK`: Tired styling, dated finishes.
- `LACK_OF_COHESION`: Disconnected furniture styles or mismatched decor items.
- `LACK_OF_WARMTH`: Cold, sterile, or uninviting atmosphere.
- `LACK_OF_PERSONALITY`: Generic, cookie-cutter builder apartment.
- `ENTERTAINING`: Hosting capacity, seating/beverage setup.
- `COMFORT`: Poor ergonomics, uncomfortable seating/bedding.
- `FUNCTIONALITY`: Inefficient daily movement or workflow.
- `DECORATIVE_FINISHING`: Missing final styling layers and vignettes.

---

## 3. Problem Decomposition & Root Cause Model

### Decomposition Framework:
For every article or user dilemma, construct a structured **Problem Decomposition Record**:

```markdown
### Problem Decomposition Record

- **PRIMARY_PROBLEM:** [e.g. Small living room floor area]
- **SECONDARY_PROBLEMS:** [Visual clutter, lack of hidden storage, room feels cramped]
- **CONSTRAINTS:** [Apartment rental, limited footprint, no wall drilling]
- **DESIRED_OUTCOME:** [Room feels larger, organized, visually open, and intentional]
- **CONTEXT:** [Urban rental apartment living room]
```

### Symptom vs Root Cause Analysis:
Distinguish visible symptoms from underlying structural root causes:

| Visible Symptom | Potential Underlying Root Cause | Root-Cause Confidence |
|---|---|---|
| *"The room looks cheap."* | Inconsistent materials, harsh overhead light, poor scale, excessive visual clutter. | `MEDIUM` |
| *"The apartment feels dark."* | Harsh single overhead bulb, dark window drapes blocking natural light, lack of reflective surfaces. | `HIGH` |
| *"The space feels messy."* | Lack of concealed drop-zone storage, surface clutter overload, inefficient layout. | `HIGH` |

*Confidence Ratings:* `HIGH` / `MEDIUM` / `LOW` / `UNKNOWN`. *Never assume a root cause without supporting contextual evidence.*

---

## 4. Solution Mechanisms & Non-Product Solutions

Identify the underlying **Solution Mechanism** before evaluating product categories.

### Non-Product Solutions (Mandatory Consideration):
Not every decor problem requires a purchasable product. Always evaluate non-product solutions first or alongside product categories:

$$\text{PROBLEM} \Longrightarrow \text{NON-PRODUCT SOLUTION} \quad \text{or} \quad \text{PRODUCT CATEGORY MAPPING}$$

- **Layout & Furniture Repositioning:** Angle sofa away from entryway, pull furniture off walls.
- **Decluttering & Editing:** Remove 30% of surface items to create visual breathing room.
- **Natural Light Optimization:** Open drapes fully, reposition tall bookcases away from windows.
- **Styling & Vignettes:** Group objects in odd numbers (rule of three), vary height and texture.
- **Maintenance & Cleaning:** Polish aged brass, clean glass light fixtures, smooth rug creases.

---

## 5. Product Category Mapping & Priority System

Map valid solution mechanisms to specific product categories, assigning one of 6 priority roles:

```markdown
### Solution Category Priority Matrix

PROBLEM: Empty Dark Living Room Corner
DESIRED OUTCOME: Create a warm, functional, and visually balanced reading nook.

1. **Floor Lamp / Task Light:** `DIRECT SOLUTION` — Provides warm ambient and task illumination.
2. **Accent Armchair:** `COMPLEMENTARY SOLUTION` — Establishes functional seating anchor.
3. **Narrow Side Table:** `SUPPORTING DETAIL` — Holds books and cup/lamp surface.
4. **Smoked Glass Votive:** `ENHANCEMENT` — Adds atmospheric candlelight glow.
5. **Reposition Existing Chair:** `NON-PRODUCT SOLUTION` — Utilizes existing apartment furniture.
6. **Large Storage Trunk:** `LOW RELEVANCE` — Overly bulky for a compact corner nook.
```

---

## 6. Specialized Contextual Logic Modules

### A. Small-Space Logic Module
For compact living guides ($\le 750\text{ sq ft}$), prioritize solution mechanisms that optimize space:
- **Vertical Storage:** Wall-mounted ledges, tall narrow shelving, over-door storage.
- **Concealed Storage:** Storage ottomans, lift-top coffee tables, under-bed drawers.
- **Visual Lightness:** Leggy furniture silhouettes, glass/acrylic surfaces, open-frame metal.
- **Multifunctionality:** Daybeds, drop-leaf tables, nesting side tables.
- **Scale Safety:** Check footprint and clearance. Set `SCALE_UNVERIFIED` if physical dimensions are unconfirmed.

### B. Rental-Friendly Logic Module
Evaluate installation restrictions for all candidate solution categories:
- **Zero Drilling:** Command hooks, tension rods, freestanding coat racks, plug-in sconces.
- **Removable Decor:** Peel-and-stick wallpaper, removable tile decals, leaning mirrors.
- **Freestanding Storage:** Freestanding wardrobes, leaning ladder shelves, rolling carts.
- **Installation Evidence Rule:** Never claim a product is "renter-friendly" unless installation requirements explicitly support damage-free use.

### C. Budget Logic Module
- **Contextual Pricing:** Evaluate budget relative to article positioning and reader expectations.
- **Price Verification:** Use `PRICE_VERIFIED` / `PRICE_UNVERIFIED` signal states.
- **No Manufactured Savings:** Never invent fake discounts, crossed-out original prices, or synthetic sale claims.

---

## 7. Multi-Problem Article Decomposition Architecture

For complex guides addressing multiple user dilemmas, **do NOT collapse solutions into one giant product list**:

```markdown
### Multi-Problem Guide Architecture: The Compact Rental Studio

#### SECTION A: Problem 1 — Low Light & Dark Corners
- *Root Cause:* Single overhead fixture, windowless alcove.
- *Non-Product Solution:* Reposition bed away from window wall.
- *Direct Product Category:* Cordless battery-operated brass wall sconces.

#### SECTION B: Problem 2 — Clothes & Linen Overflow
- *Root Cause:* Single small closet footprint.
- *Non-Product Solution:* Edit seasonal wardrobe into vacuum storage.
- *Direct Product Category:* Under-bed rolling storage drawers in smoked oak.

#### SECTION C: Overlapping Multi-Problem Solvers
- *Multi-Problem Category:* Storage Ottoman with Tray Top (Solves Seating + Storage + Table Surface).
```

---

## 8. Handoff Protocol to Product Research & Niche Matching

When problem decomposition is complete, output a **Problem-Solution Target Package**:

```markdown
### Problem-Solution Target Package

**TARGET PROBLEM:** Low ambient light in a small rental reading nook  
**DESIRED OUTCOME:** Warm, glare-free illumination with zero cord clutter  
**CONSTRAINTS:** Rental (no drilling/wiring), compact footprint ($\le 6"\text{ base}$)  
**SOLUTION MECHANISM:** Battery-operated cordless task/ambient lighting  
**TARGET PRODUCT CATEGORY:** Cordless Aged Brass Table Lamp  
**WHY SELECTED:** Solves the dark nook problem without electrical outlets or wall damage  
**VERIFICATION REQUIRED:** Battery life, physical dimensions, ASIN identity  
```

---

## 9. Failure Patterns & Active Regression Rules Integrated

### Failure Patterns ([FAILURE-PATTERNS.md](file:///d:/A_Elevate_Living_Co/vikramchennamsetty.github.io/.agents/skills/_learning/FAILURE-PATTERNS.md)):
- **FP-043 (Symptom / Root-Cause Confusion):** Mistaking visible symptoms for underlying root causes.
- **FP-044 (Product-First Recommendation):** Recommending products before identifying the user's dilemma.
- **FP-045 (Solution-Category Overreach):** Generating product categories that fail to solve the problem.
- **FP-046 (Constraint Blindness):** Recommending solutions that violate room, renter, or scale constraints.
- **FP-047 (Productification Bias):** Treating non-product problems as requiring a purchasable item.
- **FP-048 (Multi-Problem Collapse):** Collapsing distinct user dilemmas into one generic product list.

### Regression Rules ([REGRESSION-RULES.md](file:///d:/A_Elevate_Living_Co/vikramchennamsetty.github.io/.agents/skills/_learning/REGRESSION-RULES.md)):
- **RULE-040 (Problem Decomposition Gate):** Identify primary problem, secondary problems, constraints, and outcome before selection.
- **RULE-041 (Product-First Prevention Gate):** Product research MUST follow problem/solution identification.
- **RULE-042 (Solution Mechanism Mapping Gate):** Product categories MUST map to an explainable solution mechanism.
- **RULE-043 (Constraint Compatibility Gate):** Evaluate room, renter, scale, and electrical constraints prior to handoff.
- **RULE-044 (Non-Product Solution Preservation Gate):** Include non-product solutions where they better address the dilemma.
- **RULE-045 (Multi-Problem Separation Gate):** Multi-problem guides MUST preserve distinct problem-solution paths.
