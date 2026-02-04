# Task: Move Colors to YAML Source of Truth

Goal: move all color values into `src/colors.yml`, and generate theme/accent
CSS variables and classes from that data using Astro (no build script).

## Requirements
- Source of truth: `src/colors.yml`.
- No custom build script (Astro should handle it).
- Support both:
  - `@media (prefers-color-scheme: dark)`
  - class/attribute override for explicit theme selection.
- Keep *current* values exactly as-is unless explicitly approved.

## Proposed Output
- Global CSS classes generated from YAML:
  - `.theme-main` (light base)
  - dark mode base via `@media (prefers-color-scheme: dark)`
  - class/attribute override (e.g. `.dark-mode` or `[data-theme="dark"]`)
  - `.accent-water`, `.accent-plant`, `.accent-fire`, `.accent-stone`, `.accent-metal`
- Accent classes set `--color-accent-*` aliases + accent fonts.

## YAML Shape (Draft)
```
base:
  light:
    color-bg: ...
    color-bg-strong: ...
    color-bg-flat: ...
    color-bg-gradient: ...
    color-text: ...
    ...
  dark:
    color-bg: ...
    ...

accent:
  water:
    light:
      color-accent-bg: ...
      color-accent-text: ...
      ...
    dark:
      color-accent-bg: ...
      ...
  plant:
    ...
  fire:
    ...
  stone:
    ...
  metal:
    light:
      ...
      # metal also overrides base (if desired)

fonts:
  accent:
    water: "Arial, Helvetica, sans-serif"
    plant: "Palatino Linotype, Book Antiqua, Palatino, serif"
    fire: "Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif"
    stone: "Times New Roman, Times, Georgia, serif"
    metal: "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif"
```

## Implementation Steps
1. Add `src/colors.yml` with *current* values copied from `Layout.astro` and
   the accent mappings.
2. In `Layout.astro`, import the YAML and generate a `<style is:global>` block
   that defines:
   - `.theme-main` (light base variables)
   - `.accent-*` classes (accent aliases + font-family)
3. Add dark-mode variables:
   - `@media (prefers-color-scheme: dark)` block for base tokens.
   - `.dark-mode` or `[data-theme="dark"]` override class/attribute.
4. Ensure metal page continues using `accent-metal` (no dark-mode confusion).
5. Delete hard-coded variables from `Layout.astro` once YAML generation is in place.

## Open Questions
- Confirm preferred **override selector**: `.dark-mode` or `[data-theme="dark"]`.
- Should the dark override *apply even inside* `accent-metal`, or should
  `accent-metal` remain fixed regardless of dark mode?
- Should component-level overrides be included in YAML now, or later?
