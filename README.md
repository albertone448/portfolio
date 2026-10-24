# Alberto Núñez Trejos — Portfolio

Personal portfolio of Alberto Núñez Trejos, Systems Engineer working across
software engineering, QA automation and data analysis.

Live: https://nuneztrejos.vercel.app
Repository: https://github.com/albertone448/portfolio

## Overview

A single-page, project-forward portfolio built to be read in under a minute
by a recruiter and in a few minutes by an engineering manager. Four
case studies carry most of the weight, alternating data analysis and
software so the portfolio doesn't read as one track: a completed
statistical analysis, a production app, another completed statistical
analysis, and a .NET web app still in development (Batazo), placed last so
finished work is read first. Everything else (experience, toolkit, about,
contact) supports those projects rather than competing with them for
attention.

Design direction: dark, editorial, restrained. One accent color for the
site, with each project allowed its own accent strictly inside its own case
study page. No stock illustrations, no skill percentage bars, no particle
effects, no typewriter animations.

## Tech stack

- **React 19** + **TypeScript**, built with **Vite**
- **React Router** (`react-router-dom`) for client-side routing across the
  home page and the four project case studies
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
│   │                    ProjectShowcase, BulletList, QuoteBlock, RoleGrid, StatsTable,
│   │                    NextProjectNav, StatusNote, ProgressBoard)
│   └── media/          ProjectBanner, ProjectPreviewFrame, Carousel, DashboardTabs,
│                        TableauShowcase, ArchitectureDiagram, BatazoBannerArt
├── pages/              Home, ProjectStoreCredit, ProjectAlwaysBarca, ProjectMessiOutlier, ProjectBatazo, NotFound
├── data/               Structural project/experience/toolkit data (no narrative copy)
├── i18n/                react-i18next setup + en.json / es.json dictionaries
├── hooks/               useDocumentMeta, useResumeUrl, useScrollToHash
├── styles/              tokens.css (design tokens), global.css (reset + utilities)
└── types/               Shared TypeScript types (Project, etc.)
```

**Content architecture.** All narrative copy lives in
`src/i18n/locales/{en,es}.json`. Structural data (slugs, status, stack,
dashboard paths, screenshot filenames, real URLs) lives in `src/data/`.
Nothing user-facing is hardcoded in a single language inside a `.tsx` file.

**Project order.** `data/projects.ts` lists projects in the order they
render everywhere: Messi: Outlier, Store Credit Management System, Always
Barça, alternating data analysis / software / data analysis. The
next-project navigation at the bottom of each case study follows the same
cycle.

**Case study structure.** Each project page is intentionally compact, not a
mirror of its GitHub README: a short hero, the core question, a condensed
methodology, one consolidated findings section (not one section per
research phase), the dashboards, limitations where relevant, a conclusion,
stack, and links. The full methodological detail lives in each project's
own repository, linked from the hero.

**Banners.** `components/media/ProjectBanner.tsx` renders a fixed-height
(clamp between ~130–220px), full-width, `object-fit: cover` banner so
Messi's and Always Barça's hero images share one compact visual system
regardless of their native aspect ratios. Store Credit's hero still uses
`ProjectPreviewFrame`, which locks to the screenshot's real aspect ratio
instead, since that image is a UI capture where cropping would lose
information.

**Store Credit gallery.** `components/media/Carousel.tsx` shows one
screenshot at a time with previous/next buttons, position indicators, a
caption, and left/right arrow key support, instead of a stacked list of
full-size images.

**Dashboards.** `components/media/DashboardTabs.tsx` renders one dashboard
at a time behind a row of tabs (used by both Always Barça's four
dashboards and Messi's three), instead of stacking every `TableauShowcase`
vertically. `TableauShowcase` itself only mounts the `<iframe>` on click,
inside an `aspect-ratio`-locked container, so there's no horizontal
overflow and no forced page weight on load.

**Header navigation.** Header links point to `/#work`, `/#experience`,
`/#about` (always with the leading `/`) so they work from any route, not
just Home. `hooks/useScrollToHash.ts` watches the router's location and
scrolls to the target section (or back to top, if there's no hash) once
the route has rendered, since React Router doesn't do this automatically
the way a full page load would. `scroll-margin-top` on the section ids
(see `global.css`) keeps the sticky header from covering the heading.

**Home showcases.** `components/projects/ProjectShowcase.tsx` is a single
editorial row per project (category, status, stack, title, description,
highlights, link) with no screenshot or chart, so every Home entry shares
one visual system instead of mixing a real app screenshot with decorative
bar charts. `SelectedWork` maps over `data/projects.ts`, so adding a project
only needs its data entry and its copy under `work.items.<camelCaseSlug>`.

**Projects in progress.** A project with `status: 'in-progress'` opens its
case study with `StatusNote`, marks unbuilt steps in `ArchitectureDiagram`
as planned, and replaces the outcome and screenshots sections with
`ProgressBoard` (what works today next to the build order). Nothing on the
page should describe a feature that doesn't exist yet as if it did.

## Project structure

See the tree above.

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

- **Messi: Outlier** — completed statistical analysis comparing Messi's
  World Cup profile against the full population of 5,636 historical
  outfield players (not a hand-picked comparison set). Content, including
  the closing personal note about Messi's August 2026 retirement, comes
  directly from the finished project's own README. The 3-part dashboard
  links to the real Tableau Public workbook paths.
- **Store Credit Management System** — production app, in active use.
  Content sourced from the real CV and the existing app; the five carousel
  screenshots are the real ones supplied, with customer names/phones/photos
  already blurred. Its project accent is the actual purple used by the
  app's own brand ("Minisúper El Puente / Fiado"), sampled directly from a
  screenshot.
- **Always Barça** — completed statistical analysis (33 LaLiga seasons,
  five variables: net spending, coaching, academy usage, squad value,
  presidency). Findings, exact r/p values, and the final variance-explained
  summary table are taken directly from the project's own README and
  methodology notes, not paraphrased from memory. The four dashboards link
  to the real Tableau Public workbook paths.

## Résumé by language

The "Download résumé" links (header, hero, experience section) resolve to
`Alberto_Nunez_Trejos_Resume.pdf` (English) or
`Alberto_Nunez_Trejos_Resume_ES.pdf` (Spanish) based on the active UI
language, via `hooks/useResumeUrl.ts`. Both PDFs live in `public/resume/`.

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
