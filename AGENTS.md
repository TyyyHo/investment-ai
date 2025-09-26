# Repository Guidelines

## Development Principles

- Always discuss with me before making any changes to the code.
- Always explain the reason the impact of the change when making a big or complex chang
- Never modify the part of the code that is not related to the current task, if you think it is necessary, please discuss with me.

## Project Structure & Module Organization

- App router in `app/` (pages, layouts, styles like `app/globals.css`).
- Static assets in `public/`.
- Build artifacts in `.next/` (ignored). Node modules in `node_modules/`.
- Config: `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `.prettierrc.json`.
- Use path alias `@/*` (maps to repo root) for imports, e.g. `import Foo from '@/components/Foo'`.
- Never modify file in `.next/` or `node_modules/` folder.

## Build, Test, and Development Commands

- `pnpm dev` — Run Next.js dev server with Turbopack at `http://localhost:3000`.
- `pnpm build` — Production build with Turbopack.
- `pnpm start` — Start the production server (after build).
- `pnpm lint` / `pnpm lint:check` — ESLint (zero warnings allowed in CI-style check).
- `pnpm format` / `pnpm format:check` — Prettier write/check.
- `pnpm type-check` — TypeScript type checking (no emit).
- Pre-commit: Husky runs `pnpm type-check` then `pnpm lint:check`.

## Coding Style & Naming Conventions

- Language: TypeScript (strict mode). React 19 + Next.js App Router.
- Formatting: Prettier (2 spaces, semicolons, single quotes, width 80, `arrowParens: "avoid"`).
- Linting: ESLint extending `next/core-web-vitals` and `next/typescript`.
- Files: components/hooks `PascalCase.tsx/ts`; routes and folders kebab-case (e.g., `app/investments/page.tsx`).
- Tailwind CSS v4 utilities permitted in JSX className strings.
- Use React-hook-form and zod for form validation.
- Use react-query for data fetching.
- Use redux for global state management, however, we should avoid using it as much as possible.

## Testing Guidelines

- No test runner is configured yet. When adding tests:
  - Co-locate unit tests as `*.test.ts(x)` or use `__tests__/` next to source.
  - Prefer Vitest + React Testing Library for components; Playwright for E2E.
  - Aim for meaningful coverage on modules with logic (forms, data transforms).

## Commit & Pull Request Guidelines

- Use Conventional Commits (e.g., `feat: add portfolio card`, `fix: correct ROI calc`).
- Keep commits focused; include rationale in body when non-trivial.
- PRs must:
  - Describe changes and motivation; link issues (e.g., `Closes #123`).
  - Include screenshots/GIFs for UI changes.
  - Pass `pnpm type-check`, `pnpm lint:check`, and build locally.
  - Note any config/env changes in the description.

## Security & Configuration Tips

- Store secrets in `.env.local` (never commit). Public values must be prefixed `NEXT_PUBLIC_`.
- Example: `NEXT_PUBLIC_API_BASE=/api` in `.env.local`.
- Review `.prettierignore`/`.gitignore` before adding large assets.

## Architecture Overview

- Next.js App Router with server-first defaults; colocate UI, styles, and server actions under route folders in `app/`.
- Use `@/` imports for shared utilities and components to avoid long relative paths.
