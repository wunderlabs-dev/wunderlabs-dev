---
version: alpha
name: Wunderlabs
description: Concise visual design reference for the W/underlabs website.
colors:
  cream-50: "#fffcf5"
  cream-100: "#f4f1eb"
  gray-50: "#ffffff"
  gray-100: "#b5b5b5"
  gray-200: "#6a6a6a"
  gray-250: "#5e5e5e"
  gray-300: "#535353"
  gray-350: "#252525"
  gray-400: "#191919"
  green-50: "#64ffb1"
  orange-50: "#ff6900"
  yellow-50: "#ffc525"
fonts:
  sans: Host Grotesk
  mono: JetBrains Mono
rounded:
  controls: 9999px
  cards: 24px
---

# W/underlabs Design

Visual direction: compact, precise, warm, and engineered. Use cream surfaces,
near-black text, restrained line work, monospaced labels, and real product screenshots.

Live tokens are defined in `src/static/css/globals.css` with Tailwind CSS v4
`@theme inline`. Prefer those tokens over raw values.

## Tokens

| Token                    | Use                                          |
| ------------------------ | -------------------------------------------- |
| `cream-50`               | Page background and cards                    |
| `cream-100`              | Frosted app bar and subtle translucent fills |
| `gray-400`               | Primary text, dark panels, selection fill    |
| `gray-250`               | Secondary body copy and inactive nav         |
| `gray-100/30`            | Structural dividers                          |
| `gray-100/50`            | Visible rules and card borders               |
| `green-50`               | Positive status and reliability accents      |
| `orange-50`, `yellow-50` | Product and highlight accents                |

## Typography

Use `font-sans` for UI and prose, `font-mono` for kickers, status text, endpoint-like
copy, and agent-facing surfaces.

- Display: bold Host Grotesk, `text-3xl` to `lg:text-7xl`.
- Section heads: bold or semibold Host Grotesk.
- Body: `text-base leading-6`.
- Technical labels: JetBrains Mono, `text-sm leading-5`.

Use muted headline spans with `text-gray-200` when a title has two clauses.

## Layout

Use centered containers and large vertical rhythm.

- Page padding: `px-6 lg:px-12`.
- Section padding: `pt-28 lg:pt-48`, compact sections `pt-20 lg:pt-40`.
- Containers: `max-w-2xl`, `max-w-4xl`, `max-w-5xl`, `max-w-7xl`.
- Screenshots: centered, oversized, concrete product imagery.
- Structure: pale borders, center rules, and large outline rings; no heavy shadows.

## Components

- Buttons: pill-shaped, `gap-3`, semibold, `duration-200`, `active:scale-97`.
- Primary button: `gray-350` fill with white text.
- Outlined button: transparent fill, `gray-300` border, `gray-400` text.
- Transparent button: `cream-100/75` with `backdrop-blur-2xl`.
- Cards: `rounded-3xl border border-gray-100/50 bg-cream-50 p-8`.
- Nav: fixed, centered, translucent cream pills; mobile uses a dark Vaul drawer.
- Badges: small pills for project/status metadata.
- Icons: local SVG icons that inherit current text color unless signaling state.

## Motion

Motion should clarify state, not decorate.

- Route enter: 240ms opacity fade.
- Route exit: 160ms opacity fade.
- Scroll reveal: opacity, `y: 18`, blur to clear in 560ms.
- Nav indicator: spring with `stiffness: 150`, `damping: 18`.
- Always honor reduced motion.

## Rules

- Use live Tailwind tokens from `globals.css`; avoid one-off hex values in components.
- Use `cn(...)` for composed classes.
- Default to Server Components; add `"use client"` only for state, effects, motion hooks,
  or browser APIs.
- Keep cards and panels scoped; do not put cards inside cards.
- Use product screenshots or concrete UI imagery; avoid abstract placeholder visuals.
