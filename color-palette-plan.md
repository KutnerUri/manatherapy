# Color Palette Plan — Current Inventory + Planned Schema

## TODO (Implementation Checklist)
- [ ] Add palette tokens (light + dark) to global styles:
  - [ ] `--bg`, `--bg-strong`, `--bg-flat`, `--bg-gradient`
  - [ ] `--text`, `--text-ghost`, `--fg`, `--fill`, `--fill-ghost`
  - [ ] `--border-subtle`, `--border-strong`
  - [ ] `--shadow-*` scale
  - [ ] `--favicon-fill-full`
  - [ ] Accent palettes: `--water-*`, `--plant-*`, `--fire-*`, `--stone-*`, `--metal-*`
- [ ] Map existing colors to tokens across components/pages
- [ ] Replace slide backgrounds with tokenized gradients
- [ ] Remove deck background overlays
- [ ] Wire `prefers-color-scheme` + optional `.dark-mode` override
- [ ] Verify metal (black.astro) remains accent, not dark mode
- [ ] Audit remaining hard-coded colors and update plan if needed

This file has three parts:
- **Planned Schema**: the naming system we will use going forward.
- **Draft Values**: proposed light/dark values mapped to the schema.
- **Current Inventory**: the colors we already have in the codebase.

No code changes are made here. It is a reference + plan.

## Planned Schema (Draft)

Format:
`--[target]-[accent]-[part]-[weight]`

Notes:
- `target` is optional and only used for narrow, component-specific needs
  (e.g. `menu`, `button`, `card`).
- `accent` can be empty (primary color) or one of the defined accents below.
- `part` indicates usage (bg/fg/text/fill/shadow).
- `weight` is optional and corresponds to opacity/strength.

### Accent Keys
- *(empty)* → primary color
- `accent` → abstract accent (can be overridden, e.g. `--accent-bg: var(--water-bg)`)
- `water` → blue
- `plant` → green
- `fire` → red
- `metal` → black / purple
- `stone` → yellow (brown in dark mode)

### Part Keys
- `bg`
- `fg`
- `text`
- `fill`
- `shadow` (typically no accent)

### Weight Scale (Opacity/Strength)
- `Trace` — 6%
- `Whisper` — 9%
- `Ghost` — 15%
- `Faint` — 24%
- `Subtle` — 38%
- `Normal` — 62%
- `Strong` — 76%
- `Sharp` — 85%
- `Dense` — 91%
- `Full` — 100%

### Gradient Policy (TBD)
- Gradients are still under review.
- We can reduce the number of gradients and map them to fewer palette tokens.

### IMPORTANT
- Before introducing any new colors, pause and ask questions. No new colors
  should be added without explicit approval.

---

## Draft Values — Light Mode (Existing)

This section maps the planned tokens to **existing** light-mode colors only.
Each token is marked as **[existing]** if the value already exists in the
codebase. If a token needs a new value, it is marked **[new]** (with `TBD`).

### Palette: Primary / Light (base)
- `--bg`: warm parchment (#f8f2e8) **[existing]** [Layout surface]
- `--bg-strong`: warm beige (#efe7d8) **[existing]** [Layout surface-alt]
- `--bg-flat`: paper white (#ffffff) **[existing]** [index slide-card]
- `--bg-gradient`: linear-gradient(140deg, #f7f1eb 0%, #efe2d2 60%, #f2d9d3) **[existing]** [index intro]
- `--text`: near-black (#141414) **[existing]** [Layout text]
- `--fg`: near-black (#141414) **[existing]** [same as text]
- `--fill`: warm off-white (#f1efe6) **[existing]** [Layout invert]
- `--text-ghost`: muted warm gray (rgba(42, 42, 36, 0.6)) **[existing]** [SpellCard white text-muted]
- `--fill-ghost`: soft white (rgba(255, 255, 255, 0.22)) **[existing]** [PentagonMana inset]
- `--border-subtle`: translucent black (rgba(0, 0, 0, 0.08)) **[existing]** [card/header borders]
- `--border-strong`: translucent black (rgba(0, 0, 0, 0.12)) **[existing]** [mana cost border]

### Palette: Water (blue)
- `--water-bg`: mist blue (#e6f0fb) **[existing]** [ManaSlide blue base]
- `--water-bg-strong`: soft steel blue (#c7d7ec) **[existing]** [ManaSlide blue mid]
- `--water-fill`: pale sky (#d7e6f4) **[existing]** [PentagonMana base]
- `--water-fill-strong`: steel blue (#9fb8d6) **[existing]** [PentagonMana deep]
- `--water-text`: deep navy (#08192a) **[existing]** [PentagonMana text]
- `--water-fg`: ink blue (#1b2738) **[existing]** [SpellCard blue text]
- `--water-shadow`: blue glow (rgba(159, 184, 214, 0.4)) **[existing]** [PentagonMana glow]
- `--water-border`: mist frame (#d2e1f6) **[existing]** [SpellCard blue frame]

### Palette: Plant (green)
- `--plant-bg`: pale herb (#e7f1e2) **[existing]** [ManaSlide green base]
- `--plant-bg-strong`: soft moss (#cfe3cc) **[existing]** [ManaSlide green mid]
- `--plant-fill`: mint leaf (#dfeedd) **[existing]** [PentagonMana base]
- `--plant-fill-strong`: muted leaf (#9fbf98) **[existing]** [PentagonMana deep]
- `--plant-text`: deep forest (#0d2b17) **[existing]** [PentagonMana text]
- `--plant-fg`: deep forest (#0d2b17) **[existing]** [same as text]
- `--plant-shadow`: green glow (rgba(159, 191, 152, 0.4)) **[existing]** [PentagonMana glow]
- `--plant-border`: soft moss (#b7d0b3) **[existing]** [ManaSlide green deep]

### Palette: Fire (red)
- `--fire-bg`: warm clay (#f0b4a6) **[existing]** [ManaSlide red base]
- `--fire-bg-strong`: ember red (#d47264) **[existing]** [ManaSlide red mid]
- `--fire-fill`: rose ember (#f5c6bb) **[existing]** [PentagonMana base]
- `--fire-fill-strong`: ember core (#f08d7b) **[existing]** [PentagonMana deep]
- `--fire-text`: deep ember (#3b0f0a) **[existing]** [PentagonMana text]
- `--fire-fg`: deep ember (#3b0f0a) **[existing]** [same as text]
- `--fire-shadow`: red glow (rgba(240, 141, 123, 0.4)) **[existing]** [PentagonMana glow]
- `--fire-border`: soft ember (#dfab9f) **[existing]** [SpellCard red frame-strong]

### Palette: Stone (yellow)
- `--stone-bg`: pale wheat (#fff9ef) **[existing]** [ManaSlide yellow base]
- `--stone-bg-strong`: warm sand (#f7eed2) **[existing]** [ManaSlide yellow mid]
- `--stone-fill`: buttercream (#faedc5) **[existing]** [PentagonMana base]
- `--stone-fill-strong`: golden ochre (#f2c85f) **[existing]** [PentagonMana deep]
- `--stone-text`: deep umber (#4a3512) **[existing]** [PentagonMana text]
- `--stone-fg`: deep umber (#4a3512) **[existing]** [same as text]
- `--stone-shadow`: golden glow (rgba(242, 200, 95, 0.4)) **[existing]** [PentagonMana glow]
- `--stone-border`: warm sand (#f1db9b) **[existing]** [ManaSlide yellow deep]

### Palette: Metal (black / purple)
- `--metal-bg`: midnight plum (#240a34) **[existing]** [ManaSlide black base]
- `--metal-bg-strong`: deep void (#120012) **[existing]** [ManaSlide black mid]
- `--metal-fill`: graphite (#3a3f4a) **[existing]** [PentagonMana base]
- `--metal-fill-strong`: deep steel (#16181f) **[existing]** [PentagonMana deep]
- `--metal-text`: warm off-white (#f1efe6) **[existing]** [PentagonMana text]
- `--metal-fg`: warm off-white (#f1efe6) **[existing]** [same as text]
- `--metal-shadow`: cold glow (rgba(22, 24, 31, 0.35)) **[existing]** [PentagonMana glow]
- `--metal-border`: violet ink (#3b2a4a) **[existing]** [SpellCard black frame-strong]

### Abstract Accent (alias)
- `--accent-*` should point at one of the accent palettes above.
  Example: `--accent-bg: var(--water-bg)` **[existing]** (value is a reference, not a new color).

### Shadow Scale (Existing Values Only)
These are candidate shadow tokens using only existing alpha values:
- `--shadow-ghost`: rgba(0, 0, 0, 0.08) **[existing]**
- `--shadow-faint`: rgba(0, 0, 0, 0.12) **[existing]**
- `--shadow-subtle`: rgba(0, 0, 0, 0.18) **[existing]**
- `--shadow-strong`: rgba(0, 0, 0, 0.28) **[existing]**
- `--shadow-dense`: rgba(0, 0, 0, 0.35) **[existing]**
- `--shadow-sharp`: rgba(0, 0, 0, 0.45) **[existing]**
- `--shadow-full`: rgba(0, 0, 0, 0.5) **[existing]**

### Favicon
- `--favicon-fill-full`: #424242 **[existing]**

## Draft Values — Dark Mode (Proposed)

This section proposes dark-mode values. Any values not already in the codebase
are marked **[new]**.

Note:
- `black.astro` represents the **metal (respect)** accent page, not dark mode.
  Its colors should not be treated as the global dark-mode base palette.

### Palette: Primary / Dark (base)
- `--bg`: deep charcoal (#121316) **[new]**
- `--bg-strong`: dark graphite (#191b20) **[new]**
- `--bg-flat`: near-black (#0b0c0f) **[new]**
- `--bg-gradient`: radial-gradient(circle at top, #1d2026, #0b0c0f) **[new]**
- `--text`: warm off-white (#f3f1ea) **[new]**
- `--fg`: warm off-white (#f3f1ea) **[new]**
- `--fill`: slate (#2a2d35) **[new]**
- `--text-ghost`: soft off-white (rgba(243, 241, 234, 0.65)) **[new]**
- `--fill-ghost`: soft white (rgba(255, 255, 255, 0.22)) **[existing]** [PentagonMana inset]
- `--border-subtle`: translucent white (rgba(255, 255, 255, 0.08)) **[existing]**
- `--border-strong`: translucent white (rgba(255, 255, 255, 0.16)) **[existing]**

### Palette: Water (blue) — dark mode
- `--water-bg`: deep ocean (#0e1d2f) **[new]**
- `--water-bg-strong`: midnight slate (#132a41) **[new]**
- `--water-fill`: dark sea (#1b2f46) **[new]**
- `--water-fill-strong`: abyss (#0b1624) **[new]**
- `--water-text`: ice mist (#d7e7f7) **[new]**
- `--water-fg`: ice mist (#d7e7f7) **[new]**
- `--water-shadow`: blue glow (rgba(73, 126, 171, 0.35)) **[new]**
- `--water-border`: muted steel (#2b4360) **[new]**

### Palette: Plant (green) — dark mode
- `--plant-bg`: deep forest (#122017) **[new]**
- `--plant-bg-strong`: shadow moss (#1b2d22) **[new]**
- `--plant-fill`: dark leaf (#243a2a) **[new]**
- `--plant-fill-strong`: pine bark (#0f1a13) **[new]**
- `--plant-text`: pale mint (#dff2e5) **[new]**
- `--plant-fg`: pale mint (#dff2e5) **[new]**
- `--plant-shadow`: green glow (rgba(86, 140, 110, 0.35)) **[new]**
- `--plant-border`: muted pine (#2f4a36) **[new]**

### Palette: Fire (red) — dark mode
- `--fire-bg`: ember ash (#2b0f10) **[new]**
- `--fire-bg-strong`: deep ember (#3a1414) **[new]**
- `--fire-fill`: coal red (#4a1b1a) **[new]**
- `--fire-fill-strong`: soot red (#1f0a0a) **[new]**
- `--fire-text`: pale peach (#f6d7cf) **[new]**
- `--fire-fg`: pale peach (#f6d7cf) **[new]**
- `--fire-shadow`: ember glow (rgba(201, 96, 79, 0.35)) **[new]**
- `--fire-border`: deep clay (#5a2722) **[new]**

### Palette: Stone (yellow) — dark mode
- `--stone-bg`: dark ochre (#2a2114) **[new]**
- `--stone-bg-strong`: deep sand (#3a2e1a) **[new]**
- `--stone-fill`: earthen brown (#4a3a24) **[new]**
- `--stone-fill-strong`: soot brown (#1f160b) **[new]**
- `--stone-text`: pale sand (#f2e4c9) **[new]**
- `--stone-fg`: pale sand (#f2e4c9) **[new]**
- `--stone-shadow`: warm glow (rgba(183, 144, 79, 0.35)) **[new]**
- `--stone-border`: dry earth (#604528) **[new]**

### Palette: Metal (respect) — dark mode
- `--metal-bg`: near-black (#0b0b10) **[new]**
- `--metal-bg-strong`: obsidian (#12131a) **[new]**
- `--metal-fill`: gunmetal (#1d1f27) **[new]**
- `--metal-fill-strong`: black steel (#07080c) **[new]**
- `--metal-text`: warm off-white (#f1efe6) **[existing]**
- `--metal-fg`: warm off-white (#f1efe6) **[existing]**
- `--metal-shadow`: cold shadow (rgba(30, 34, 46, 0.4)) **[new]**
- `--metal-border`: deep violet-charcoal (#2b2a36) **[new]**

---

## Gradient + Effect Plan (Guidance)

These notes reflect the desired simplifications:

- **Hero slide gradient**: can be removed (no special gradient needed).
- **Homepage background**: pick *one* readable gradient for the whole home page.
  (TBD; should come from the primary palette.)
- **Color slides**: gradients should come from the element palettes
  (water/plant/fire/stone/metal).
- **Multi‑radial finale**: use element palette values for each radial.
- **Deck overlays**: should be removed (no deck background; slides + page body
  handle backgrounds).
- **Effect colors** (shine/glow): allowed as primary palette tokens.
- **PentagonMana label shadows**: use appropriate element palette values.
- **Favicon**: tokenized; no further work needed.

---

## Remaining Usage Mapping (Plan)

This maps existing usages to schema tokens so we can replace hard‑coded values
later. If a token is missing, it should be added and marked **[new]**.

### Layout + Core
- Body background gradient:
  - Use `--bg-gradient`.
- Slide overlays:
  - Light overlay → `--shadow-ghost` (or `--shadow-faint` if needed)
  - Dark overlay → `--shadow-faint` (or `--shadow-subtle`)
- Deck overlays:
  - Remove deck background entirely.

### Home Page (index)
- Hero slide:
  - Remove special gradient; rely on image + base bg tokens.
- Intro / Spell / Colors slides:
  - Use `--bg-gradient`.
- Finale multi‑radial:
  - Each radial uses its element accent:
    - water → `--water-fill` (or `--water-shadow` for soft glow)
    - plant → `--plant-fill`
    - fire → `--fire-fill`
    - stone → `--stone-fill`
    - metal → `--metal-fill`
  - Base layer uses `--bg` / `--bg-strong`.

### ManaSlide (color decks)
- Background gradients should be composed from that element’s tokens:
  - Use `--[accent]-bg`, `--[accent]-bg-strong`, and `--[accent]-shadow`.
- Text:
  - Use `--[accent]-text` (or `--text` when accent is empty).

### PentagonMana
- Circle fills:
  - `--[accent]-fill` and `--[accent]-fill-strong`
- Label text:
  - `--[accent]-text`
- Label shadow:
  - `--[accent]-shadow` (fallback to `--shadow-subtle`)
- Shine:
  - Use primary palette white with weight (e.g. `--fill-ghost`) **[existing]**

### SpellCard
- Card surface:
  - `--[accent]-bg` and `--[accent]-bg-strong`
- Card frame:
  - `--[accent]-border` (or `--border-subtle` if accent is empty)
- Card text:
  - `--[accent]-text` with weight tokens for muted text (`--text-ghost`) **[existing]**
- Card body:
  - Use `--bg` in both modes (simple, readable)
- Mana chips:
  - Use `--[accent]-fill` + `--[accent]-text`

### Hamburger Menu
- Backgrounds:
  - `--bg` and `--bg-strong`
- Borders:
  - `--border-subtle`
- Lines + text:
  - `--text`

### Favicon
- Use `--favicon-fill-full`
---

## Utility Class Plan (Draft)

Goal: provide simple alias variables for runtime overrides while keeping the
schema tokens as the source of truth.

Example structure (not final naming):

```
:root {
  --text-color: var(--text);
  --bg-color: var(--bg);
  --accent-text: var(--accent-text, var(--text));
}

.water-accent {
  --accent-bg: var(--water-bg);
  --accent-text: var(--water-text);
}

@media (prefers-color-scheme: dark) {
  :root {
    --text-color: var(--text);
    --bg-color: var(--bg);
  }

  .water-accent {
    --accent-bg: var(--water-bg);
    --accent-text: var(--water-text);
  }
}

.dark-mode {
  /* same overrides as dark mode */
}
```

Notes:
- Use alias variables (`--text-color`, `--accent-*`) only for convenience.
- Actual palette values should remain in schema tokens.
- Dark mode activation:
  - Use `@media (prefers-color-scheme: dark)` as the default.
  - Allow an override class (e.g. `.dark-mode`) for a user toggle, persisted
    via localStorage.

## Current Inventory (Existing Colors in Code)

## Global / Layout

File: `src/layouts/Layout.astro`
- `--color-text`: #141414
- `--color-surface`: #f8f2e8
- `--color-surface-alt`: #efe7d8
- `--color-overlay-light`: rgba(255, 255, 255, 0.6)
- `--color-overlay-dark`: rgba(0, 0, 0, 0.08)
- `--color-invert`: #f1efe6
- Body background gradient:
  - radial-gradient(circle at top, var(--color-surface), var(--color-surface-alt))

File: `src/components/Slide.astro`
- Slide background overlay gradients (uses vars + transparent):
  - radial-gradient(circle at 20% 20%, var(--color-overlay-light), transparent 60%)
  - radial-gradient(circle at 80% 70%, var(--color-overlay-dark), transparent 60%)

File: `src/components/Slideshow.astro`
- `.deck` background: linear-gradient(120deg, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.04))
- `.deck-black` background: linear-gradient(120deg, rgba(255, 255, 255, 0.06), rgba(0, 0, 0, 0.35))

## Home Page (index)

File: `src/pages/index.astro`
- Title text-shadow:
  - rgba(255, 255, 255, 0.85)
  - rgba(255, 255, 255, 0.65)
- Hero slide gradient:
  - linear-gradient(130deg, #f8f0e2 15%, #e8d8bf 60%, #e9c7b0)
- Intro slide gradient:
  - linear-gradient(140deg, #f7f1eb 0%, #efe2d2 60%, #f2d9d3)
- Spell slide gradient:
  - linear-gradient(145deg, #efe7d8 0%, #f3e6d8 65%, #f5dccf)
- Colors slide gradient:
  - linear-gradient(150deg, #ede5d1 0%, #efe0c9 60%, #f2d6b8)
- Finale slide background (multi-layer):
  - radial-gradient(circle at 50% 14%, rgba(244, 166, 151, 0.45), transparent 55%)
  - radial-gradient(circle at 18% 33%, rgba(175, 206, 166, 0.4), transparent 55%)
  - radial-gradient(circle at 82% 33%, rgba(250, 221, 150, 0.4), transparent 55%)
  - radial-gradient(circle at 25% 78%, rgba(160, 188, 219, 0.35), transparent 60%)
  - radial-gradient(circle at 75% 78%, rgba(40, 46, 56, 0.35), transparent 60%)
  - linear-gradient(130deg, #f5e6cf 0%, #f0d7b8 55%, #e9c7b0)
- `.slide-card` background: #ffffff
- `.slide-combo` background: #f7f9fd
- `.combo-equals` color: rgba(0, 0, 0, 0.5)

## Black Page

File: `src/pages/black.astro`
- Theme variables:
  - `--color-text`: #f1efe6
  - `--color-surface`: #120012
  - `--color-surface-alt`: #1a0d24
  - `--color-overlay-light`: rgba(255, 255, 255, 0.08)
  - `--color-overlay-dark`: rgba(0, 0, 0, 0.5)
  - `--color-invert`: #f1efe6
  - `--color-bg`: rgba(255, 255, 255, 0.08)
  - `--color-bg-strong`: rgba(255, 255, 255, 0.12)
  - `--color-border`: rgba(230, 200, 255, 0.25)
- Page background:
  - radial-gradient(circle at top, #1b0a24, #0c0612)
- Slide backgrounds:
  - `.slide-black-intro`:
    - radial-gradient(circle at 20% 25%, rgba(120, 60, 160, 0.18), transparent 55%)
    - radial-gradient(circle at 80% 70%, rgba(30, 10, 40, 0.7), transparent 60%)
    - linear-gradient(150deg, #2a0c3a 0%, #120012 65%, #080008 100%)
  - `.slide-black-worldview`:
    - radial-gradient(circle at 25% 20%, rgba(70, 20, 100, 0.35), transparent 55%)
    - radial-gradient(circle at 70% 80%, rgba(0, 0, 0, 0.7), transparent 60%)
    - linear-gradient(150deg, #1f0b2c 0%, #0f0716 60%, #07040b 100%)
  - `.slide-black-why`:
    - radial-gradient(circle at 15% 30%, rgba(120, 60, 160, 0.25), transparent 55%)
    - radial-gradient(circle at 80% 70%, rgba(0, 0, 0, 0.65), transparent 60%)
    - linear-gradient(150deg, #240b34 0%, #120012 60%, #07040b 100%)
  - `.slide-black-allows`:
    - radial-gradient(circle at 20% 30%, rgba(90, 50, 130, 0.28), transparent 55%)
    - radial-gradient(circle at 75% 75%, rgba(0, 0, 0, 0.6), transparent 60%)
    - linear-gradient(150deg, #240b34 0%, #0f0617 60%, #06030a 100%)
  - `.slide-black-creation`:
    - radial-gradient(circle at 18% 20%, rgba(140, 70, 190, 0.22), transparent 55%)
    - radial-gradient(circle at 80% 70%, rgba(0, 0, 0, 0.65), transparent 60%)
    - linear-gradient(150deg, #1e0a2a 0%, #0d0613 60%, #05020a 100%)
  - `.slide-black-development`:
    - radial-gradient(circle at 20% 20%, rgba(120, 80, 170, 0.2), transparent 55%)
    - radial-gradient(circle at 80% 75%, rgba(0, 0, 0, 0.65), transparent 60%)
    - linear-gradient(150deg, #1b0a28 0%, #0d0614 60%, #05020a 100%)
- Card blocks:
  - `.creation-card` background: rgba(10, 6, 16, 0.55)
  - `.creation-card` shadow: rgba(0, 0, 0, 0.35)
  - `.creation-card` inset border: rgba(255, 255, 255, 0.08)
  - `.development-card` background: rgba(10, 6, 16, 0.55)
  - `.development-card` shadow: rgba(0, 0, 0, 0.35)
  - `.development-card` inset border: rgba(255, 255, 255, 0.08)

## Mana Slides (Color Decks)

File: `src/components/ManaSlide.astro`
- Blue slide:
  - linear-gradient(to bottom, rgba(232, 243, 255, 0.28) 0%, transparent 15%, transparent 85%, rgba(191, 245, 240, 0.3) 100%)
  - radial-gradient(circle at 85% 85%, rgba(168, 209, 175, 0.24), transparent 55%)
  - linear-gradient(160deg, #e6f0fb 0%, #c7d7ec 55%, #b3c8e2 100%)
- Green slide:
  - linear-gradient(to bottom, rgba(191, 245, 240, 0.3) 0%, transparent 15%, transparent 85%, rgba(255, 242, 178, 0.32) 100%)
  - radial-gradient(circle at 85% 85%, rgba(234, 146, 130, 0.2), transparent 55%)
  - linear-gradient(160deg, #e7f1e2 0%, #cfe3cc 55%, #b7d0b3 100%)
- Red slide:
  - linear-gradient(to bottom, rgba(255, 242, 178, 0.32) 0%, transparent 15%, transparent 85%, rgba(255, 213, 166, 0.34) 100%)
  - radial-gradient(circle at 85% 85%, rgba(245, 228, 160, 0.24), transparent 55%)
  - linear-gradient(160deg, #f0b4a6 0%, #d47264 55%, #c95752 100%)
- Yellow slide:
  - linear-gradient(to bottom, rgba(255, 213, 166, 0.34) 0%, transparent 15%, transparent 85%, rgba(255, 250, 240, 0.36) 100%)
  - radial-gradient(circle at 85% 85%, rgba(120, 104, 164, 0.2), transparent 60%)
  - linear-gradient(160deg, #fff9ef 0%, #f7eed2 55%, #f1db9b 100%)
- Black slide:
  - linear-gradient(to bottom, rgba(40, 24, 56, 0.18) 0%, transparent 15%)
  - radial-gradient(circle at 50% 50%, #080008 0%, rgba(8, 0, 8, 0.92) 40%, transparent 100%)
  - radial-gradient(circle at 50% 50%, rgba(78, 38, 112, 0.32) 0%, rgba(78, 38, 112, 0.12) 55%, transparent 75%)
  - linear-gradient(160deg, #240a34 0%, #120012 55%, #080008 100%)
- Black slide text:
  - `.slide-color.black` color: var(--color-invert)
  - `.slide-color.black .color-sub`: rgba(241, 239, 230, 0.8)

## Pentagon Mana

File: `src/components/PentagonMana.astro`
- Mana circle base gradients:
  - radial-gradient(circle at 30% 20%, rgba(255, 255, 255, var(--shine-opacity)), transparent 60%)
  - radial-gradient(circle at 30% 20%, var(--mana-base), var(--mana-deep) 70%)
- Mana circle shadows:
  - rgba(0, 0, 0, var(--shadow-alpha, 0.16))
  - rgba(0, 0, 0, 0.12) (default `--mana-glow`)
  - rgba(255, 255, 255, 0.22) (inset)
- Mana label shadows:
  - rgba(0, 0, 0, 0.45)
  - rgba(255, 255, 255, 0.35) (for red/green/blue labels)
- Active shadow: rgba(0, 0, 0, 0.2)
- Blue mana:
  - `--mana-base`: #d7e6f4
  - `--mana-deep`: #9fb8d6
  - `--mana-glow`: rgba(159, 184, 214, 0.4)
  - `--mana-text`: #08192a
- Green mana:
  - `--mana-base`: #dfeedd
  - `--mana-deep`: #9fbf98
  - `--mana-glow`: rgba(159, 191, 152, 0.4)
  - `--mana-text`: #0d2b17
- Red mana:
  - `--mana-base`: #f5c6bb
  - `--mana-deep`: #f08d7b
  - `--mana-glow`: rgba(240, 141, 123, 0.4)
  - `--mana-text`: #3b0f0a
- Yellow mana:
  - `--mana-base`: #faedc5
  - `--mana-deep`: #f2c85f
  - `--mana-glow`: rgba(242, 200, 95, 0.4)
  - `--mana-text`: #4a3512
- Black mana:
  - `--mana-base`: #3a3f4a
  - `--mana-deep`: #16181f
  - `--mana-glow`: rgba(22, 24, 31, 0.35)
  - `--mana-text`: #f1efe6

## Spell Cards

File: `src/components/SpellCard.astro`
- Base card:
  - Background: var(--card-surface, #f2f4f8)
  - Border: rgba(255, 255, 255, 0.85)
  - Shadow: rgba(0, 0, 0, 0.18)
  - Inset highlights: rgba(255, 255, 255, 0.9), rgba(0, 0, 0, 0.06)
  - Surface gradient: linear-gradient(160deg, var(--card-surface-soft, #f8f9fc), var(--card-surface, #f2f4f8))
  - Card body: #ffffff
  - Card body border: rgba(0, 0, 0, 0.08)
  - Card body shadow: rgba(255, 255, 255, 0.75)
- White card vars:
  - `--card-surface`: #f7f7f3
  - `--card-frame`: #ebeae4
  - `--card-frame-strong`: #d7d4cc
  - `--card-surface-soft`: #fbfbf8
  - `--card-text`: #2a2a24
  - `--card-text-muted`: rgba(42, 42, 36, 0.6)
- Red card vars:
  - `--card-surface`: #f6e1dc
  - `--card-frame`: #edc9c0
  - `--card-frame-strong`: #dfab9f
  - `--card-surface-soft`: #fbeee9
  - `--card-text`: #3a1f1c
  - `--card-text-muted`: rgba(58, 31, 28, 0.6)
- Black card vars:
  - `--card-surface`: #1a121f
  - `--card-frame`: #2a1d34
  - `--card-frame-strong`: #3b2a4a
  - `--card-surface-soft`: #231926
  - `--card-text`: #f1efe6
  - `--card-text-muted`: rgba(241, 239, 230, 0.65)
  - `--card-body`: #33243f
  - `--card-body-border`: rgba(255, 255, 255, 0.14)
- Blue card vars:
  - `--card-surface`: #e6efff
  - `--card-frame`: #d2e1f6
  - `--card-frame-strong`: #b7c9e5
  - `--card-surface-soft`: #f4f8ff
  - `--card-text`: #1b2738
  - `--card-text-muted`: rgba(27, 39, 56, 0.6)
- Result card vars:
  - `--card-surface`: #f1d8cf
  - `--card-frame`: hsl(62, 35%, 90%)
  - `--card-frame-strong`: hsl(23, 38%, 76%)
  - `--card-surface-soft`: #fbfbf4
  - `--card-text`: #2b2622
  - `--card-text-muted`: rgba(43, 38, 34, 0.6)
- Card header gradient:
  - linear-gradient(180deg, var(--card-frame, #d8e0ee), var(--card-frame-strong, #c1cadd))
  - Header border: rgba(0, 0, 0, 0.08)
  - Header inset highlight: rgba(255, 255, 255, 0.8)
- Mana cost chip (default):
  - Text: #1b2738
  - Background: radial-gradient(circle at top, #f1f4fb, #d0d7e6 70%)
  - Shadow: rgba(255, 255, 255, 0.7), rgba(0, 0, 0, 0.22)
  - Border: rgba(0, 0, 0, 0.12)
- Mana cost chip (white):
  - Text: #3a3a3a
  - Background: radial-gradient(circle at top, #ffffff, #d9d9d3 70%)
- Mana cost chip (red):
  - Text: #6b1e1e
  - Background: radial-gradient(circle at top, #f7d8d1, #e59f93 70%)
- Mana cost chip (black):
  - Text: #f1efe6
  - Background: radial-gradient(circle at top, #3a3f4a, #16181f 70%)
  - Border: rgba(255, 255, 255, 0.16)
  - Shadow: rgba(255, 255, 255, 0.12), rgba(0, 0, 0, 0.45)
- Card image:
  - Image border: rgba(255, 255, 255, 0.16)
  - Placeholder border: rgba(255, 255, 255, 0.12)
  - Placeholder background: linear-gradient(150deg, var(--card-frame, #d8e0ee), var(--card-surface-soft, #f8f9fc))
- Card body quote color:
  - var(--card-text-muted, rgba(27, 39, 56, 0.6))

## Hamburger Menu

File: `src/components/HamburgerMenu.astro`
- Menu variables (defaults):
  - `--menu-bg`: rgba(255, 255, 255, 0.4)
  - `--menu-bg-strong`: rgba(255, 255, 255, 0.6)
  - `--menu-border`: rgba(255, 255, 255, 0.25)
- Toggle shadow: rgba(0, 0, 0, 0.2)
- Panel shadow: rgba(0, 0, 0, 0.28)
- Lines: currentColor

## Other

File: `src/favicon.svg`
- Icon fill: #424242
