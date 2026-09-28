# ElevateLivingCo — Image Generation System Research Report

**Date:** 2026-09-29  
**Target:** Native, High-Realism Pinterest Pin Asset Generation for ElevateLivingCo  

---

## 1. RESEARCH & EVALUATION OF EXTERNAL REPOSITORIES

### A. `vedang/pi-antigravity-image-gen`
- **Repository:** `https://github.com/vedang/pi-antigravity-image-gen`
- **Skill Name:** `pi-antigravity-image-gen` / `generate_image`
- **Purpose:** Adds a native `generate_image` tool interface into the agentic environment backed by Google Antigravity / Vertex AI image models.
- **Compatibility:** **Native Compatibility.** Antigravity has the eager native tool `generate_image(Prompt, ImageName, AspectRatio, ImagePaths)`.
- **Installation Method:** Built into the Google Antigravity agentic runtime. No third-party NPM package or external API wrapper required.
- **Risks:** Uncontrolled prompts without architectural/photography parameters produce generic CGI or distorted AI interiors.
- **Elevate Decision:** **USE NATIVELY.** Leverage the native `generate_image` tool with custom specialized home-decor prompting frameworks (`elevate-home-decor-pinterest-creative`).

---

### B. `sickn33/agentic-awesome-skills`
- **Repository:** `https://github.com/sickn33/agentic-awesome-skills`
- **Skills Evaluated:** `modellix`, `image-generation-prompts`, `visual-qa`, `photography-composition`.
- **Purpose:** Large community repository containing skill wrappers for external APIs (e.g. Modellix CLI, Midjourney wrappers, Replicate wrappers).
- **Compatibility:** Partial / External API dependency.
- **Installation Method:** Requires cloning full repo or running `gh skill install`.
- **Risks:** Bloated dependencies, unmaintained external API keys required (e.g., `MODELLIX_API_KEY`), external network latency, non-deterministic API charges.
- **Elevate Decision:** **DO NOT INSTALL WHOLE REPO.** Adapt the relevant architectural prompting principles (photography lens vocabulary, lighting falloff physics, visual QA gates) directly into native Elevate skills without introducing external CLI dependencies or third-party API keys.

---

## 2. NATIVE IMAGE GENERATION ARCHITECTURE FOR ELEVATE

ElevateLivingCo utilizes Google Antigravity's native `generate_image` tool coupled with a specialized, decoupled prompting and QA architecture:

$$\text{Article Context} \rightarrow \text{Style Profile} \rightarrow \text{Realism System} \rightarrow \text{Photography Engine} \rightarrow \text{2:3 Vertical Composition} \rightarrow \text{Text Safe Zone} \rightarrow \text{Negative Prompts} \rightarrow \text{generate\_image} \rightarrow \text{Visual QA}$$

- **Native Tool Signature:** `generate_image(Prompt="...", ImageName="...", AspectRatio="2:3")`
- **Output Storage:** `assets/pinterest/[cluster]/[filename].png`
- **Quality Assurance:** `elevate-pinterest-image-qa` (16-point audit gate with 9/10 scorecard threshold).
