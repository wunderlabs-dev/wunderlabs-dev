# AGENTS.md

## Project Overview

W/underlabs website built with Next.js App Router, React 19, TypeScript, Tailwind CSS v4, next-intl, oxlint, and oxfmt. The site is statically exported for GitHub Pages.

## Commands

- `npm run dev` - start the development server while iterating.
- `npm run build` - run a production build and static export.
- `npm run lint` - run oxlint.
- `npm run format` - format files with oxfmt.
- `npm run format:check` - check formatting with oxfmt.
- `npm run precommit` - run lint and format checks, matching the Husky pre-commit hook.

Run `npm run precommit` after code changes. Run `npm run build` for routing, config, dependency, or deployment-related changes.

## Project Structure

```text
src/
├── app/          # Next.js App Router pages and layouts
├── copy/         # next-intl translations
├── i18n/         # next-intl request config
└── static/       # Global CSS and static app styling
```

Add new folders only when the app needs them:

- `src/components/` for reusable UI components.
- `src/sections/` for page-level sections.
- `src/lib/` for data fetching or business logic.
- `src/utils/` for shared helpers and constants.

## Code Conventions

### Component Structure

Default to Server Components. Add `"use client"` only for hooks, state, effects, event-heavy UI, or browser APIs.

When reusable components are added, keep each component in its own directory:

```text
src/components/button/
├── button.tsx
├── types.ts
└── index.ts
```

Barrel exports follow this pattern:

```ts
export { default as Button } from "./button";
export * from "./types";
```

### Type Patterns

Use `as const` arrays for variant unions:

```ts
export const ButtonVariants = ["default", "transparent"] as const;
export type ButtonVariant = (typeof ButtonVariants)[number];
export type ButtonVariantMapping = Record<ButtonVariant, string>;
```

Use discriminated unions when a variant changes required props. Prefer `ComponentNameProps`, `ComponentNameVariant`, and `ComponentNameVariantMapping` naming.

### Naming

- Component directories: kebab-case or existing local convention, kept consistent within `src/components`.
- Component implementation files: camelCase or kebab-case matching the directory.
- Utility files: camelCase, such as `helpers.ts` and `const.ts`.
- Variant class maps: `xxxClassNames`, such as `buttonVariantClassNames`.
- Const arrays: plural PascalCase, such as `ButtonVariants`.

### Styling

Use Tailwind CSS v4. Theme tokens, custom colors, and global CSS belong in `src/static/css/globals.css` using `@theme inline`.

Prefer existing design tokens over arbitrary values. Keep class lists readable; extract variant maps when classes branch by prop.

If class merging becomes necessary, use a small shared helper in `src/utils/helpers.ts` built from `classnames` and `tailwind-merge`.

### Import Order

Use the `@/*` path alias for source imports.

1. `"use client"` directive, if needed.
2. React and Next.js imports.
3. External libraries.
4. Type imports from `@/` using `import type`.
5. App, component, section, or lib imports from `@/`.
6. Utility and CSS imports from `@/`.

### i18n

Use `next-intl`. Copy lives in `src/copy/en.json`, and request config lives in `src/i18n/request.ts`.

Use translation keys with dot paths:

```tsx
const t = useTranslations();

return <h1>{t("home.title")}</h1>;
```

For rich text, define renderers inline in the consuming component:

```tsx
{
  t.rich("home.title", {
    strong: (chunks) => <strong>{chunks}</strong>,
  });
}
```

### Comments

Avoid comments for self-evident code. Use a short `// ABOUTME:` comment only for non-obvious implementation choices that future edits need to preserve.

## Workflow

- Keep changes focused and minimal.
- Do not reintroduce ESLint, Prettier, or Biome; this project uses oxlint and oxfmt.
- Do not skip Husky hooks.
- Before pushing, run `npm run precommit` and `npm run build`.
