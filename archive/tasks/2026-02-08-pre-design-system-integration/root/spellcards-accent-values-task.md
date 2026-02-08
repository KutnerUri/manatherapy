# Spellcards — Accent Values Task (Phase 1: Light Mode)

We are making a Trading Cards game (website) with 5 elemental accents:
- **Earth** (light yellow)
- **Water** (blue)
- **Plant** (green)
- **Fire** (**plasma** material vibe + red theme for identification)
- **Metal** (dark purple)

Additionally, there is a **Colorless** accent (white/gray in light mode).

Later (phase 2) we will create **dark mode**:
- Earth becomes more yellow.
- Metal becomes darker.

## **Problem (Motivation)**:

Picking colors for a cohesive color system is hard, especially as we want it to feel like a premium physical TCG. Colors didn't work well together, and might be difficult to differentiate.

## **Goals**:

create a robust, multi-accent color palette.

- each accent should have a distinct feel and prominence
- each accent should be easy to identify
- accents should look good together and harmonize
- the colors need to highlight the upper levels (near-white background, more prominent card, highlight header, strong cost). this can be subtle.
- tokens should be minimized (we already use a gradient layer and shadows to make subtle distinctions)

## **Ideal**:

a Flat Design system with hints of Skeuomorphism giving a premium and exciting collectible cards design.
players could easily identify card type and cost in a glance, and the cards are visually appealing and aesthetic.

## **Constraints / Decisions (Phase 1)**

- **Light mode contrast strategy:** backgrounds are bright; foreground surfaces are slightly darker; text is **near-black** (or similar). we’d like to avoid inverted text, but it’s allowed if absolutely necessary.
- **No text-shadow reliance:** we can use existing shadows/gradients for depth, but we should not need text-shadow for readability.
- **Accent application:** we can apply a utility class to set the accent context (e.g. blue slide, red card, etc.) by assigning CSS variables.
- **Theme meaning:** accents are “material properties + color theme for identification”, not literal physics.

## **Scope: ONLY 5 Tokens (Phase 1)**

We are defining per-accent values for exactly these 5 tokens (the 5 layers):

- `--app-bg` — wallpaper / slide background (behind cards)
- `--card-bg` — card outer background
- `--card-content-bg` — main card content / textarea background
- `--card-header-bg` — header background (name + focus)
- `--mana-bg` — indicator dot fill (mana cost), sits on top of the header

Out of scope for phase 1 (unless we fail goals without it):
- accent-specific gradients can add more character (can be phase 2)
- dark mode values (phase 2)

## **Accessibility + Consistency Requirements (Phase 1)**

We want “text is legible” to mean:
- body text on `--card-content-bg` should meet **WCAG AA** contrast (target 4.5:1 with the chosen near-black text).
- header text on `--card-header-bg` should also meet **WCAG AA**.
- mana cost text/icon on `--mana-bg` should remain readable (target 4.5:1).
- the colors should remain visually separable in all accents (no “everything is the same tint”).

Notes:
- if an accent requires inversion to preserve the vibe (most likely Metal), we keep that exception tightly scoped and documented.
- for validation we’ll use a single “ink” reference (the near-black used for light mode text). if the ink changes later, re-run contrast checks.

## **Layer Ladder (Phase 1) — Draft Spec (No Final Values Yet)**

We lock a consistent “prominence ladder” across accents:
- **Higher layers = more prominent** via (1) slightly lower lightness and/or (2) higher chroma.
- **Readable layers stay light-mode-friendly** (default: dark text on light backgrounds).
- **Accent signal lives at the top:** `--mana-bg` (primary), then `--card-header-bg` (secondary), while `--card-content-bg` stays close to paper.

### Default hierarchy (most accents)

- `--app-bg`: very light, subtle wash; should not compete with cards.
- `--card-bg`: slightly darker and more tinted than `--app-bg` (card silhouette).
- `--card-content-bg`: near-paper and low-chroma (most neutral surface).
- `--card-header-bg`: clearer accent tint + a bit darker than content (header focus).
- `--mana-bg`: strongest accent identifier (highest chroma), still readable with the chosen dark ink.

### Target ranges (OKLCH, guideline only)

These ranges are starting points to keep iteration constrained:
- `--app-bg`: **L 0.97–0.99**, **C 0.01–0.05**
- `--card-bg`: **L 0.94–0.97**, **C 0.02–0.06**
- `--card-content-bg`: **L 0.98–1.00**, **C 0.00–0.02**
- `--card-header-bg`: **L 0.90–0.95**, **C 0.04–0.09**
- `--mana-bg`: **L 0.80–0.90**, **C 0.08–0.16** (clamp to AA contrast with ink)

Notes:
- if a value falls out of the sRGB gamut, we reduce **C** first, then adjust **L**, then tweak **h**.
- Colorless should keep **C ~ 0** (neutral grays) across all 5 tokens.
- Metal may need a special-case (see below).

## **Execution Plan (Abstract → Concrete, WCAG-checked)**

Status key: `[x]` drafted/locked, `[ ]` pending.

1. [x] **Lock the layer ladder (lightness relationships)**
   - define a single, shared hierarchy for the 5 layers that works across all accents.
   - decide which layers are allowed to be neutral vs strongly tinted (typically: `--card-content-bg` stays close to paper).

2. [x] **Write a 1–2 line “accent brief” for each element**
   - material + mood adjectives (e.g. “mist / glass / calm” vs “char / void / royal ink”).
   - define the “anchor hue family” for recognition (Earth yellow, Water blue, etc.).
   - define where the strongest accent signal should live (usually `--mana-bg`, secondarily `--card-header-bg`).

3. [x] **Generate first-pass candidates using OKLCH**
   - work in OKLCH so we can control:
     - **L** (layer separation / readability)
     - **C** (saturation budget to keep harmony across accents)
     - **h** (recognition per element)
    - produce at most **2 candidate sets per accent** (to keep review tight).

4. [ ] **Validate**
   - run contrast checks for text on `--card-content-bg`, `--card-header-bg`, and on `--mana-bg`.
   - compare accents side-by-side (deck view + single card) to ensure they feel like one premium set.
   - check that Earth vs Colorless is unambiguous at a glance.

5. [ ] **Iterate with guardrails**
   - keep the layer ladder stable; adjust hue/chroma first.
   - only adjust lightness if we can’t achieve both harmony and legibility.

6. [ ] **Freeze Phase 1**
   - document the final 5-token sets and usage rules.
   - list any “known issues” to revisit in phase 2 (dark mode, per-accent gradients, etc.).

## **Next Decisions (before picking final values)**

- [ ] **Earth vs Colorless:** define the “minimum warmth” Earth must have (especially in `--card-header-bg` + `--mana-bg`) and the “maximum chroma” Colorless is allowed.
- [ ] **Metal in light mode:** choose between (A) no inversion (lavender/gray tints with dark ink) vs (B) minimal inversion limited to `--card-header-bg` and/or `--mana-bg`.
- [x] **Plasma (Fire):** default to **electric / magenta-biased red** (avoid orange so it doesn’t collide with Earth).

## **Accent Briefs (Draft)**

These are guardrails to prevent “pretty but inconsistent” choices later.

- **Earth:** sunlit parchment / sand / chalk; warm, optimistic; avoid neon lemon. Earth must show a warm-yellow bias in `--card-header-bg` + `--mana-bg` so it can’t be mistaken for Colorless.
- **Water:** mist / glacier / glass; calm and clear; avoid cyan neon; keep it “premium cool”, not “tech blue”.
- **Plant:** herb / moss / jade; fresh but grounded; avoid toxic lime; keep saturation controlled.
- **Fire (Plasma):** ion glow / energized core; luminous reds with a plasma edge (likely a magenta bias); avoid “brick/clay” dullness.
- **Metal:** royal ink / amethyst shadow / polished obsidian; should read as purple (not “dark mode”). If we can’t express “dark purple” without breaking light-mode readability, we allow a *minimal inversion exception* limited to `--card-header-bg` and/or `--mana-bg`.
- **Colorless:** bone paper / slate; neutral, quiet, premium; chroma stays near zero.

### Anchor hue ranges (OKLCH h, guideline only)

We use hue as the primary “element identifier” and keep drift controlled:
- `--mana-bg`: keep closest to the anchor hue (small drift).
- `--card-header-bg`: close to the anchor hue (small–medium drift).
- `--card-bg` / `--app-bg`: allowed a bit more drift to improve harmony and “material” feel.
- `--card-content-bg`: near-neutral (h not meaningful at very low chroma).

Draft anchor ranges:
- **Earth:** h **95–110°** (warm yellow)
- **Water:** h **245–270°** (blue)
- **Plant:** h **135–155°** (green)
- **Fire (Plasma):** h **350–20°** (magenta-biased red)
- **Metal:** h **310–330°** (purple)
- **Colorless:** C ~ 0 (no anchor hue)

## **Guardrails for the Hard Cases (Phase 1)**

### Earth vs Colorless

Goal: Earth reads as a distinct element (warm yellow) while Colorless stays neutral.

- **Colorless policy:** keep chroma near zero across all 5 tokens (neutral white/gray). if Colorless “picks up” hue, it stops being a reliable baseline.
- **Earth policy:** Earth must show a visible warm-yellow bias at least in:
  - `--app-bg` (subtle wash),
  - `--card-header-bg` (clearer tint),
  - `--mana-bg` (strongest identifier).
- **Overlap avoidance:** Earth should avoid drifting orange (fire territory) or becoming so pale it reads as Colorless.

### Metal in light mode (two-track evaluation)

We will generate and compare two Metal candidate sets:

- **Metal A (no inversion):** all 5 tokens follow the default ladder (light surfaces, dark ink), with purple carried mainly by hue + chroma (lavender / graphite vibe).
- **Metal B (minimal inversion):** keep `--app-bg` / `--card-bg` / `--card-content-bg` light-mode-friendly, but allow `--card-header-bg` and/or `--mana-bg` to be dark purple (“ink”), which implies local light text for those areas only.

Selection criteria:
- feels like “dark purple metal” without reading as global dark mode
- mana dot is unmistakable and readable
- text stays AA legible in all text-bearing areas (content, header, mana)

## **Candidate Set A (Draft)**

These are first-pass values generated from the layer ladder + anchor hues.

Assumptions for validation:
- **Ink (light mode text):** `#141414`
- **Contrast target:** 4.5:1 (AA) for text on `--card-content-bg`, `--card-header-bg`, and on `--mana-bg`

### Colorless — Candidate A (neutral baseline)

| token | OKLCH (L C h) | hex | contrast vs ink |
| --- | --- | --- | --- |
| `--app-bg` | `0.988 0.000 0` | `#fbfbfb` | 17.80 |
| `--card-bg` | `0.962 0.000 0` | `#f2f2f2` | 16.46 |
| `--card-content-bg` | `0.996 0.000 0` | `#fefefe` | 18.27 |
| `--card-header-bg` | `0.935 0.000 0` | `#e9e9e9` | 15.17 |
| `--mana-bg` | `0.880 0.000 0` | `#d7d7d7` | 12.80 |

### Earth — Candidate A (h≈100°)

| token | OKLCH (L C h) | hex | contrast vs ink |
| --- | --- | --- | --- |
| `--app-bg` | `0.985 0.025 100` | `#fefbe8` | 17.70 |
| `--card-bg` | `0.960 0.040 100` | `#f8f3d5` | 16.47 |
| `--card-content-bg` | `0.992 0.008 100` | `#fefdf7` | 18.08 |
| `--card-header-bg` | `0.930 0.070 100` | `#f2eab4` | 15.09 |
| `--mana-bg` | `0.860 0.140 100` | `#e6d35c` | 12.14 |

### Water — Candidate A (h≈258°)

| token | OKLCH (L C h) | hex | contrast vs ink |
| --- | --- | --- | --- |
| `--app-bg` | `0.985 0.007 258` | `#f7faff` | 17.61 |
| `--card-bg` | `0.960 0.019 258` | `#eaf3ff` | 16.46 |
| `--card-content-bg` | `0.992 0.004 258` | `#fbfdff` | 18.07 |
| `--card-header-bg` | `0.930 0.034 258` | `#dae9ff` | 14.98 |
| `--mana-bg` | `0.860 0.069 258` | `#b5d3ff` | 12.04 |

### Plant — Candidate A (h≈145°)

| token | OKLCH (L C h) | hex | contrast vs ink |
| --- | --- | --- | --- |
| `--app-bg` | `0.985 0.025 145` | `#f0fff0` | 17.78 |
| `--card-bg` | `0.960 0.040 145` | `#e2f9e2` | 16.56 |
| `--card-content-bg` | `0.992 0.008 145` | `#f9fef9` | 18.05 |
| `--card-header-bg` | `0.930 0.070 145` | `#ccf5cc` | 15.35 |
| `--mana-bg` | `0.860 0.140 145` | `#94e997` | 12.60 |

### Fire (Plasma) — Candidate A (h≈355°)

| token | OKLCH (L C h) | hex | contrast vs ink |
| --- | --- | --- | --- |
| `--app-bg` | `0.985 0.008 355` | `#fff8fa` | 17.60 |
| `--card-bg` | `0.960 0.022 355` | `#ffecf2` | 16.26 |
| `--card-content-bg` | `0.992 0.004 355` | `#fffbfc` | 17.95 |
| `--card-header-bg` | `0.930 0.040 355` | `#ffdde9` | 14.71 |
| `--mana-bg` | `0.860 0.085 355` | `#ffbad4` | 11.60 |

### Metal — Candidate A (h≈320°; no inversion)

| token | OKLCH (L C h) | hex | contrast vs ink |
| --- | --- | --- | --- |
| `--app-bg` | `0.985 0.011 320` | `#fef8ff` | 17.62 |
| `--card-bg` | `0.960 0.031 320` | `#fbecff` | 16.27 |
| `--card-content-bg` | `0.992 0.006 320` | `#fefbff` | 17.95 |
| `--card-header-bg` | `0.930 0.054 320` | `#f9ddff` | 14.75 |
| `--mana-bg` | `0.860 0.112 320` | `#f2b9ff` | 11.54 |

### What to check (preview notes)

When previewing Candidate Set A in the UI, answer:
- can you identify each accent instantly (especially Water/Fire/Metal vs Colorless)?
- does Fire read as “plasma/fire” (not just “pink”)?
- does Metal feel premium + “dark purple” enough without inversion?
- are the 5 layers clearly separated (wallpaper → card → content → header → mana)?

## **Working Loop**

After this file is up to date, we iterate like this:
1) review this file
2) pick the next most important decision
3) generate candidates + validate
4) update this file with the outcome and proceed

## **Implementation Reference (current wiring)**

- `--app-bg` → `--accent-bg-l1`
- `--card-bg` → `--accent-bg-l3`
- `--card-content-bg` → `--accent-bg-flat`
- `--card-header-bg` → `--accent-bg-l4`
- `--mana-bg` → `--accent-fill`
