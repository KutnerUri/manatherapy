# Color System

This file is the current source of truth for color token usage in the app.

## Goals

- Keep all public color tokens in the `--color-*` namespace.
- Keep accent changes scoped to accent tokens only.
- Keep component-internal tokens private (`card`/`mana` internals).

## Token Layers

### 1) Palette primitives (internal palette source)

Defined in `src/layouts/Layout.astro`:

- `--token-colorless-*`
- `--token-earth-*`
- `--token-water-*`
- `--token-plant-*`
- `--token-fire-*`
- `--token-metal-*`

These are palette source values. They are not the public usage contract.

### 2) Public runtime color tokens

Use these in pages/components:

- `--color-wallpaper`
- `--color-accent-wallpaper`
- `--color-accent-surface`
- `--color-content-surface`
- `--color-accent-highlight`
- `--color-accent-full`
- `--ink`

Default behavior:

- `--color-wallpaper: var(--color-accent-wallpaper)`
- Initial/default `--color-accent-wallpaper` is colorless, so the default
  `--color-wallpaper` is colorless.

### 3) Component-internal derived tokens

These stay component-scoped:

- `--color-card-surface`
- `--color-card-highlight`
- `--color-card-content-surface`
- `--color-mana-surface`

Do not override these from layout, accent selectors, or pages.

## Accent Contract

Accent selectors (`[data-accent="..."]`, `.accent-*`) may override only:

- `--color-accent-wallpaper`
- `--color-accent-surface`
- `--color-content-surface`
- `--color-accent-highlight`
- `--color-accent-full`

They must not override `--color-card-*` or `--color-mana-*`.

## Usage Rules

- Public color tokens should start with `--color-`.
- `--fx-*` tokens are visual effects/chrome and are outside this pass.
- `--token-*` tokens are palette primitives and are outside this pass.

## Removed Legacy Aliases

Do not introduce these again:

- `--wallpaper`
- `--surface`
- `--content-surface`
- `--highlight`
- `--full`
- `--app-bg`
- `--card-bg`
- `--card-content-bg`
- `--card-header-bg`
- `--mana-bg`

## Page Guidance

- App/page backgrounds should use `--color-wallpaper`.
- Accent-specific surfaces should use `--color-accent-*` / `--color-content-surface`.
- Test pages (like `src/pages/_accents.astro`) should set the new color tokens directly, not legacy aliases.

## Current Work Notes

- `src/pages/palette.astro` was removed.
- `_accents` is a test page and should remain aligned to this token contract.
- Phase 2 canonicalization of accent utility aliases (`.accent-blue`, `.accent-green`, etc.) is tracked separately.
