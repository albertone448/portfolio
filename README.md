# Alberto Núñez Trejos — Portfolio

Personal portfolio of Alberto Núñez Trejos, Systems Engineer working across
software engineering, QA automation and data analysis.

Live: https://nuneztrejos.vercel.app
Repository: https://github.com/albertone448/portfolio

## Overview

A single-page, project-forward portfolio built to be read in under a minute
by a recruiter and in a few minutes by an engineering manager. Three case
studies carry most of the weight: a production app, a completed data
analysis project with published Tableau dashboards, and a data analysis
project that is honestly presented as still in progress. Everything else
(experience, toolkit, about, contact) supports those three projects rather
than competing with them for attention.

Design direction: dark, editorial, restrained. One accent color for the
site, with each project allowed its own accent strictly inside its own case
study page. No stock illustrations, no skill percentage bars, no particle
effects, no typewriter animations.

## Tech stack

- **React 19** + **TypeScript**, built with **Vite**
- **React Router** (`react-router-dom`) for client-side routing across the
  home page and the three project case studies
- **react-i18next** + `i18next-browser-languagedetector` for the ES/EN
  bilingual system, with language persisted to `localStorage`
- **lucide-react** for generic icons; GitHub/LinkedIn are hand-drawn SVGs
  (`components/common/BrandIcons.tsx`) since those brand marks were dropped
  from recent `lucide-react` releases
- Plain CSS with **CSS Modules** per component, built on a small set of
  design tokens (`styles/tokens.css`) — no CSS framework, no Tailwind, no
  styled-components
- **oxlint** for linting, native `tsc` for type checking
- No backend, no database, no CMS, no state management library

## Architecture

```
src/
├── components/
│   ├── common/       Button, LanguageSwitch, BrandIcons
│   ├── layout/        Header, Footer
│   ├── sections/       Home page sections (Hero, SelectedWork, Experience, Toolkit, About, Contact)
│   ├── projects/       Case-study building blocks (ProjectHero, CaseStudySection,
│   │                    ProjectShowcase, BulletList, QuoteBlock, RoleGrid, StatusNote,
│   │                    NextProjectNav, DataVisual)
│   └── media/          ProjectPreviewFrame, Gallery (with lightbox), TableauShowcase,
│                        ArchitectureDiagram
├── pages/              Home, ProjectStoreCredit, ProjectAlwaysBarca, ProjectMessiOutlier, NotFound
├── data/               Structural project/experience/toolkit data (no narrative copy)
├── i18n/                react-i18next setup + en.json / es.json dictionaries
├── hooks/               useDocumentMeta (per-page <title>/<meta description>)
├── styles/              tokens.css (design tokens), global.css (reset + utilities)
└── types/               Shared TypeScript types (Project, etc.)
```

**Content architecture.** All narrative copy — headlines, descriptions,
findings, captions, experience bullets — lives in
`src/i18n/locales/{en,es}.json`. Structural data (slugs, status, stack,
dashboard paths, screenshot filenames, real URLs) lives in `src/data/`.
Components read both and render language-appropriate output; nothing
user-facing is hardcoded in a single language inside a `.tsx` file.

**Why the project pages aren't one generic template.** Store Credit is a
shipped product, so its case study reads like an engineering write-up:
architecture diagram, feature list, real (privacy-blurred) screenshots,
deployment notes. Always Barça is a finished analysis, so its case study
reads like a research write-up: question, scope, data sources, methodology,
findings, limitations, and the four Tableau dashboards embedded inline.
Messi is unfinished, so its page is explicit about that — a status banner up
top, the research outline, and no dashboard, no findings, no invented
numbers anywhere on the page.

## Project structure

See the tree above. A few structural decisions worth noting:

- `data/projects.ts` is the single source of truth for each project's slug,
  status, stack, accent color, GitHub/Tableau URLs, and gallery/dashboard
  references. The home page and the case study pages both read from it, so a
  project's status or links only need to be updated in one place.
- `TableauShowcase` renders each dashboard inside an `aspect-ratio`-locked
  container and only mounts the `<iframe>` after the person clicks
  "Open interactive dashboard." This avoids the horizontal-scrollbar problem
  the previous implementation had (a `min-width: 1180px` iframe), keeps
  initial page weight down, and always offers a direct link to the
  dashboard on Tableau Public as a fallback.
- `Gallery` renders a responsive mosaic (not a fixed-width carousel) and
  opens a keyboard-accessible lightbox (`Escape`, click-outside, and focus
  management) on click. Image aspect ratios are read from the real image
  dimensions, not assumed, so `object-fit` never crops meaningful content.

## Local development

```bash
npm install
npm run dev
```

Vite serves the app at `http://localhost:5173` by default.

## Available scripts

| Script              | What it does                                     |
| -------------------- | ------------------------------------------------- |
| `npm run dev`        | Start the Vite dev server with HMR                |
| `npm run build`      | Type-check (`tsc -b`) then build for production   |
| `npm run preview`    | Serve the production build locally                |
| `npm run lint`       | Run `oxlint` across the project                   |
| `npm run typecheck`  | Run `tsc -b --noEmit` (no build output)            |

All four were run against this exact codebase before delivery.

## Internationalization

- Languages: English (`en`, default/fallback) and Spanish (`es`)
- Switching is done with the textual `EN / ES` control in the header (no
  flags, since Spanish isn't tied to one country)
- Preference persists in `localStorage` under `alberto-portfolio-lang`, and
  falls back to the browser's language on first visit
- `<html lang>` updates reactively when the language changes
- All copy — including small UI strings like "Skip to content," experience
  metric badges, and the abstract data-visual labels on the home page — is
  routed through `react-i18next`. Nothing user-facing is hardcoded in one
  language inside a component.

## Project content

- **Store Credit Management System** — production app, in active use.
  Content sourced from the real CV and the existing app; the five gallery
  screenshots are the real ones supplied, with customer names/phones/photos
  already blurred.
- **Always Barça** — completed statistical analysis (33 LaLiga seasons,
  Pearson correlation + ANOVA). Findings and methodology are taken directly
  from the CV and prior project notes; the four dashboards link to the real
  Tableau Public workbook paths.
- **Messi: the statistically unrepeatable at World Cups** — explicitly
  `in-progress`. No dataset, dashboard, or finding exists yet, so the page
  shows the research outline and a visible status note instead of
  fabricated results. When the analysis is done, replace the `dashboards`
  array in `data/projects.ts` and add the findings/dashboard copy to
  `projectDetail.messiOutlier` in both locale files — no component changes
  needed.

## Deployment

The project deploys to **Vercel**, building with the default Vite settings:

- Build command: `npm run build`
- Output directory: `dist`
- `vercel.json` rewrites all paths to `/index.html` so client-side routes
  (`/projects/store-credit`, etc.) work correctly on a hard refresh or a
  direct link, not just on in-app navigation.

Vercel is expected to auto-detect the Vite framework; the `vercel.json`
rewrite is the only manual config required.

## Replacing the existing repository version

This project is meant to replace the contents of the existing
`albertone448/portfolio` repository while keeping that repository's `.git`
history and its connected Vercel project intact. See the delivery message
that accompanies this codebase for the exact command sequence (backup
branch, working-tree replacement, verification, commit, push).
