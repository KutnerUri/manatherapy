# Colors

This project uses a small set of semantic color tokens. The goal is to keep
naming consistent and to make intent obvious.

## Base Tokens

- `--color-text`
  - Primary text color (example: near-black on light pages, warm off-white on
    black pages).
- `--color-bg`
  - Translucent UI background tint.
  - Default (if not overridden): soft white at 40% opacity.
- `--color-bg-strong`
  - More opaque UI background for hover or emphasis (still translucent).
  - Default (if not overridden): soft white at 60% opacity.
- `--color-bg-flat`
  - Opaque UI background (modals, solid panels).
- `--color-border`
  - Subtle UI border color.
  - Default (if not overridden): soft white at 25% opacity.

Notes:
- When a solid foreground is needed (e.g. a strong red), we should use an
  `--color-accent-*` token (e.g. `--color-accent`, `--color-accent-text`).
- If we ever need a dedicated foreground color separate from `--color-text`,
  we can introduce `--color-fg` and `--color-fg-text`.

## Menu Tokens (derived from base tokens)

Defined in `src/components/HamburgerMenu.astro`:

- `--menu-bg` = `var(--color-bg, soft white at 40% opacity)`
- `--menu-bg-strong` = `var(--color-bg-strong, soft white at 60% opacity)`
- `--menu-border` = `var(--color-border, soft white at 25% opacity)`

The hamburger lines use `currentColor` (so they follow the page text color).

## Black Page Overrides

Defined in `src/pages/black.astro` (`.theme-black`):

- `--color-bg`: white at 8% opacity (very subtle haze)
- `--color-bg-strong`: white at 12% opacity (slightly stronger hover)
- `--color-border`: pale lavender at 25% opacity

These values keep the menu readable on the dark background without introducing
heavy glow or high-contrast borders.
