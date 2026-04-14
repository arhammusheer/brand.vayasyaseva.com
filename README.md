# Vayasya Seva Brand Handbook

Internal brand handbook and visual reference for **Vayasya Seva**, built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS**.

The site serves two audiences:

- The handbook root (`/`) gives employees safe defaults for daily brand use across identity, writing, documents, meetings, and release checks.
- The visual reference (`/visual`) gives design, product, marketing, and engineering teams deeper implementation guidance for logo usage, color, typography, and imagery.

## What This App Includes

- A long-form, content-driven brand handbook with structured navigation and chapter grouping.
- Specialist visual reference pages for logo usage, color palette, typography, and imagery.
- On-demand ZIP generation for brand asset downloads:
  - `GET /api/brand/font-pack`
  - `GET /api/brand/logo-pack?profile=svg`
  - `GET /api/brand/logo-pack?profile=png`
  - `GET /api/brand/logo-pack?profile=media`
- Production metadata and canonical URLs configured for `https://brand.vayasyaseva.com`.
- Typed content models so handbook edits stay consistent across routes and components.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS
- Radix UI primitives
- `fflate` for ZIP generation
- `sharp` for SVG-to-PNG logo exports

## Getting Started

### Install

This repo uses `npm` and includes a `package-lock.json`.

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm run start
```

### Type checking

```bash
npm run typecheck
```

`npm run lint` currently runs the same TypeScript no-emit check.

## Primary Routes

| Route | Purpose |
| --- | --- |
| `/` | Main handbook with foundation, visual, communication, application, and appendix sections |
| `/visual` | Specialist hub for deeper visual-system guidance |
| `/visual/logo-usage` | Approved logo downloads, variants, and misuse checks |
| `/visual/color-palette` | Copy-ready swatch wall for approved color tokens |
| `/visual/typography` | Font pack, family roles, hierarchy, and surface guidance |
| `/visual/imagery` | Imagery sourcing, proof-first usage, and review guidance |
| `/api/brand/font-pack` | Dynamic ZIP endpoint for the approved font pack |
| `/api/brand/logo-pack` | Dynamic ZIP endpoint for logo packs; defaults to `profile=media` |

## Project Structure

```text
.
├── assets/brand-font-pack/           # Raw font files packaged by the font-pack API
├── public/brand/logos/               # Source SVG logo assets used by the UI and logo-pack API
├── src/app/
│   ├── page.tsx                      # Main handbook route
│   ├── visual/                       # Specialist visual reference routes
│   └── api/brand/                    # Dynamic download endpoints
├── src/components/brand/             # Handbook and visual-reference presentation components
├── src/content/brand/
│   ├── sections/                     # Typed handbook section content
│   ├── fundamentals.ts               # Brand tokens, stacks, and foundational constants
│   ├── navigation.ts                 # Handbook navigation and grouping
│   └── visual-reference.ts           # Specialist route metadata
├── src/lib/server/                   # Server-side asset packaging logic
└── src/lib/types/brand.ts            # Shared handbook content types
```

## Content Model

This project is primarily **content-driven**.

- `src/content/brand/sections/*` defines the handbook sections rendered on the root page.
- `src/content/brand/navigation.ts` controls section ordering, labels, anchors, and chapter grouping.
- `src/content/brand/index.ts` assembles the handbook payload consumed by the app.
- `src/content/brand/visual-reference.ts` defines the visual-reference hub and specialist page metadata.
- `src/content/brand/sections/footer-versioning.ts` controls the surfaced handbook version, effective date, and owner metadata.

If you need to update wording, rules, or defaults, start in the content files before changing UI components.

## Asset Download System

### Font pack

`GET /api/brand/font-pack` packages the files stored in `assets/brand-font-pack/`.

The endpoint validates that the required font files exist before building the ZIP. If any required files are missing, it returns a `500` response with the missing file list.

Raw source notes for this pack live in [`assets/brand-font-pack/README.md`](assets/brand-font-pack/README.md).

### Logo packs

`GET /api/brand/logo-pack` supports three profiles:

- `svg`: source SVG files for design and print workflows
- `png`: generated transparent PNG exports in standard widths
- `media`: full kit with SVG, PNG, favicon, Apple touch, Android, and manifest assets

Logo source files are read from `public/brand/logos/`. PNG exports are generated on demand with `sharp`.

If required logo files are missing, the endpoint returns a `500` response with the missing file list. If an invalid profile is requested, it returns `400` with the allowed profiles.

## Editing Guide

### Add or update handbook copy

Edit the relevant file in `src/content/brand/sections/`.

### Reorder or relabel handbook navigation

Edit `src/content/brand/navigation.ts`.

### Change versioning metadata shown in the UI

Edit `src/content/brand/sections/footer-versioning.ts`.

### Update downloadable font assets

Replace or add files under `assets/brand-font-pack/`, keeping the required filenames intact.

### Update logo source assets

Replace the SVG files under `public/brand/logos/`. The logo-pack API will reuse them automatically.

## Notes For Maintainers

- No environment variables are currently required for local development.
- The UI loads Google fonts through `next/font/google`, while the downloadable internal font pack is served separately from `assets/brand-font-pack/`.
- The main site is optimized around typed content objects rather than a CMS or database.
- The repository currently includes the local Next.js build output directory `.next/`; treat it as generated state, not source of truth.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Build the production app |
| `npm run start` | Run the production build locally |
| `npm run typecheck` | Run TypeScript in no-emit mode |
| `npm run lint` | Alias for the current typecheck step |
