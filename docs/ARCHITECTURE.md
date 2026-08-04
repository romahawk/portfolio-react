# Architecture Document
## mazuryk.dev - AI Consulting and Proof-of-Work Platform

**Version:** 2.0
**Last Updated:** 2026-08-04
**Status:** Active

---

## High-Level Overview

`mazuryk.dev` is a static React/Vite website deployed on Vercel. It presents Roman Mazuryk's AI consulting positioning, productized offers, workflow examples, regulated-operations proof, and full-stack implementation evidence.

The architecture is intentionally lightweight:

- no application backend
- no user accounts
- no database
- no CMS
- no runtime API dependency for core content

The site is mostly static content rendered by React components and backed by version-controlled JavaScript data files. This keeps the system easy to inspect, fast to deploy, and useful as public proof of product and engineering discipline.

```text
Browser
  -> Vercel CDN
    -> route-specific static HTML entry
      -> Vite React bundle
        -> route resolver in App.jsx
          -> market page / proof page / workflow page component
            -> static data modules + localized copy
```

---

## Strategic Architecture Role

The site is not only a portfolio. It is the public product surface for the current business direction:

> AI Systems Consultant for operations-heavy SMEs and regulated industries.

The page hierarchy supports three proof layers:

1. **AI consulting** - primary commercial path and calls to action.
2. **MedTech and regulated operations** - authority proof from high-friction implementation environments.
3. **Full-stack delivery** - implementation proof for prototypes, dashboards, internal tools, and workflow systems.

---

## Runtime Model

### Entry Chain

```text
index.html or route-specific index.html
  -> src/main.jsx
    -> App.jsx
      -> LangProvider
      -> AppInner
        -> useTheme
        -> useScrollReveal
        -> useOgMeta
        -> route resolver
        -> selected page component
        -> Footer + BackToTop + Vercel Analytics
```

### Route Resolution

The app uses lightweight path inspection in `App.jsx` rather than a routing library. Vite emits separate static HTML entries for major routes so social crawlers and preview tools receive route-specific metadata where needed.

Major routes:

| Route | Component / Role |
|-------|------------------|
| `/` | `HomePage` - homepage positioning and proof routing |
| `/ai` | `AIPage` - productized AI consulting offers |
| `/services` | `AIPage` compatibility route for service positioning |
| `/collaborate` | `AIPage` compatibility route for collaboration entry |
| `/medtech` | `MedTechPage` - regulated operations authority proof |
| `/fullstack` | `FullStackPage` - implementation proof |
| `/about` | `AboutPage` - background, principles, fit |
| `/contact` | `ContactPage` - workflow discussion and collaboration entry |
| `/ai-workflow` | `AIWorkflowLibrary` - workflow pattern library |
| `/ai-workflow/:slug` | `AIWorkflowDetailPage` - individual workflow reference |
| `/proof-of-work/or-integration` | `ORIntegrationProofPage` - detailed regulated proof |
| `/medtech-ai-systems/clinical-evidence-workflow` | `ClinicalEvidenceWorkflowPage` - concept workflow proof |

---

## Build Entries

`vite.config.js` defines multiple static HTML entries:

```text
index.html
ai/index.html
medtech/index.html
fullstack/index.html
services/index.html
collaborate/index.html
ai-workflow/index.html
proof-of-work/or-integration/index.html
medtech-ai-systems/clinical-evidence-workflow/index.html
```

This gives the site static route entry points without moving to a heavier framework.

---

## Content Architecture

Most content lives in either React components or static data modules.

| Area | Source |
|------|--------|
| Market pages and offer copy | `src/components/MarketPages.jsx` |
| AI workflow examples | `src/data/aiWorkflows.js` |
| Project/proof items | `src/data/projects.js` and proof components |
| Career/journey data | `src/data/timeline.js`, `src/data/journey.js`, `src/data/milestones.js` |
| Skills | `src/data/skillsCards.js` |
| English/German copy | `src/locales/en.js`, `src/locales/de.js` |
| Route metadata | `src/hooks/useOgMeta.js` plus route HTML entries |

This structure is intentionally simple for a solo-founder site. Content changes are versioned, reviewed, built, and deployed with the same discipline as code changes.

---

## Page/Component Map

| Component | Role |
|-----------|------|
| `Navbar` | Main navigation, route awareness, language/theme controls |
| `MarketPages.jsx` | Home, AI, MedTech, and Full-stack page compositions |
| `AIWorkflowLibrary` | Overview of practical AI workflow patterns |
| `AIWorkflowDetailPage` | Detail page for one workflow pattern |
| `ProofOfWorkPage` | Regulated proof and selected workflow systems |
| `ORIntegrationProofPage` | Detailed OR integration and clinical workflow authority proof |
| `AboutPage` | Positioning narrative and background explanation |
| `ContactPage` | Conversion route for workflow/audit/collaboration discussions |
| `Footer` | Secondary navigation and persistent trust links |
| `BackToTop` | Usability support for long pages |

Legacy case study components remain part of the proof layer where still relevant, but the current commercial surface is the AI workflow/audit path.

---

## Metadata And SEO

The site uses two complementary metadata mechanisms:

1. **Static HTML entries** for route-specific social preview metadata where crawlers may not execute JavaScript.
2. **`useOgMeta` hook** for client-side metadata updates after route changes.

This is a pragmatic compromise: static enough for social previews, lightweight enough to avoid a framework migration.

---

## Internationalization

The site supports English and German through:

- `LangProvider`
- `useTranslation()`
- `src/locales/en.js`
- `src/locales/de.js`
- `LanguageSwitcher`

Language preference persists in browser storage and updates `document.lang` reactively. The German copy supports Germany-based opportunities without creating a separate site.

---

## Theme And UI State

State remains intentionally local and small:

| State | Owner |
|-------|-------|
| Current page | `AppInner` route resolver |
| Theme mode | `useTheme` |
| Language | `LangProvider` |
| Navigation/menu state | `Navbar` |
| Reveal animation lifecycle | `useScrollReveal` |
| Metadata update | `useOgMeta` |

No global state manager is needed.

---

## Analytics

Vercel Analytics is included through `@vercel/analytics/react` and rendered in `App.jsx`.

Purpose:

- understand which pages receive attention
- validate whether AI consulting pages and proof pages are used
- support future offer and content decisions

---

## Build And Deployment

| Concern | Choice |
|---------|--------|
| Framework | React 19 |
| Build tool | Vite 7 |
| Deployment | Vercel |
| Output | Static `/dist` bundle |
| Main command | `npm run build` |
| Quality command | `npm run lint` |
| Analytics | Vercel Analytics |

Vercel builds and deploys the static output on push. No environment variables are required for the current feature set.

---

## Key Trade-Offs

| Decision | Chose | Why |
|----------|-------|-----|
| Routing | Lightweight path resolver + static entries | Supports current routes without React Router or Next.js |
| Content | Static JS data and components | Version-controlled, simple, fast, adequate for solo-founder iteration |
| Framework | React + Vite | Fast static site delivery with low operational complexity |
| Styling | Custom CSS and component-scoped files | High control over positioning-focused UI without framework churn |
| i18n | Local context and locale files | Enough for EN/DE without adding a full i18n framework |
| Metadata | Static entries + `useOgMeta` | Good social preview support without SSR |
| Analytics | Vercel Analytics | Lightweight validation signal with minimal setup |

---

## Accessibility And UX Principles

- semantic landmarks and page structure
- skip link for keyboard users
- focus-visible styles preserved
- reduced-motion support
- clear CTA hierarchy
- responsive layouts for desktop and mobile
- long pages structured with strong section headings and cards

---

## Current Constraints

- No backend means no automated audit intake form yet.
- No CMS means content updates require code changes.
- Static route entries require manual maintenance when adding major routes.
- Client-specific proof must respect permission and confidentiality boundaries.

These constraints are acceptable for the current phase: positioning and first-client validation.

---

## Future Architecture Triggers

| Trigger | Possible Change |
|---------|-----------------|
| Audit intake becomes repeatable | Add a lightweight form backend or automation workflow |
| Content publishing becomes frequent | Introduce MDX or a small CMS |
| Workflow library grows substantially | Move workflow examples into structured content files or MDX |
| Route/metadata complexity increases | Consider React Router or a static/SSR framework |
| Productized audit tool is validated | Add backend, database, authentication, and payment flow |
| Client/project data enters the system | Add privacy, access control, and data-retention design |