# Sabr Labs - AI Agent Instructions

## Applicability (MANDATORY)

This document applies to ALL AI coding agents (Copilot, Claude, Codex, Cursor, etc.).
Agents MUST read and follow this file in full before making changes.

## 1. Purpose

Prevent duplicate functionality, preserve established patterns, and keep the site consistent.

## 2. Mandatory Repo Scan Before Changes

Before implementing new functionality, agents MUST:

- Search the codebase for existing related logic or components.
- Reuse or extend existing patterns instead of creating duplicates.
- Read relevant files in `src/pages`, `src/layouts`, and `src/components` to match conventions.

If something similar already exists, extend it and document why a new component is required.

## 3. Project Context

- **Framework**: Astro 5.x with React integration
- **Language**: TypeScript
- **UI**: React components inside Astro pages/layouts
- **Styling**: Tailwind CSS + DaisyUI
- **Package Manager**: npm
- **Brand Colors**: See `tailwind.config.mjs` for `brand-*` colors and DaisyUI theme.

## 4. Structure and Conventions

- Pages: `src/pages/*.astro`
- Layouts: `src/layouts/*.astro`
- Components: `src/components/*.tsx`
- Public assets: `public/` (use `import.meta.env.BASE_URL` for image paths)

### Naming

- Components: `PascalCase.tsx`
- Astro files: `PascalCase.astro` for layouts, `kebab-case.astro` for pages if added
- Folders: `kebab-case`

### Styling

- Prefer Tailwind utility classes; use DaisyUI only when it matches existing patterns.
- Use `brand-*` colors and existing typography; do not introduce new fonts or color systems.
- Keep spacing, button styles, and typography consistent with existing sections.

### Accessibility

- Provide `alt` text for images and `aria-label` for icon-only or interactive elements.
- Preserve semantic structure: headings should remain in descending order.

## 5. Content and Links

- External links must include `rel="noopener noreferrer"` with `target="_blank"`.
- Use `import.meta.env.BASE_URL` for internal links and asset paths.
- Keep project descriptions short and consistent with current tone.

## 6. Coding Rules

- Prefer reusing existing components and patterns over introducing new ones.
- Keep changes minimal and scoped to the requested feature/fix.
- Avoid `any`; use inferred types or explicit types for public APIs.
- Add comments only for non-obvious decisions.
- Do NOT create new markdown files to document changes or summarize work unless specifically requested by the user.

## 7. Scripts (Reference)

- `npm run build` (includes `astro check`)
- `npm run dev`
- `npm run preview`
- `npm run typecheck`
- `npm run lint`
- `npm run lint:fix`
- `npm run format`
- `npm run sort:package`

## 8. Mandatory Checks

Agents MUST run these checks after code changes and before considering work complete:

- `npm run typecheck`
- `npm run lint:fix`
- `npm run format`
- `npm run sort:package`
- `npm run test --if-present`

Agents MUST ensure the working tree is clean after checks (`git diff --quiet`).
Agents MUST use scripts that exist in `package.json` and MUST NOT invent ad-hoc verification commands.

## 9. Testing

This repo does not currently define tests. Only add tests if explicitly requested.

## 10. Safety

Do not introduce new dependencies without explicit user approval.
