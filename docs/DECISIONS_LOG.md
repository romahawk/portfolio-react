# Architectural Decisions Log
## Roman Mazuryk — Portfolio & Proof-of-Work Site

**Format:** Lightweight ADR (Architecture Decision Record)
**Last Updated:** 2026-02-26 (ADR-007, ADR-008 added)

---

## ADR-001: No Routing Library — Hash-Based Anchor Navigation

**Date:** 2025-11 (retroactive)
**Status:** Accepted
**Decider:** Roman Mazuryk

### Context
Portfolio is a single scrollable page. All "pages" are sections visible within one scroll container. The question was whether to use React Router to enable `/projects`, `/about`, etc. as distinct routes.

### Decision
Use native browser anchor links (`#section-id`) with scroll-spy in the Navbar. No React Router.

### Consequences
- ✅ Zero dependency; no router bundle weight
- ✅ Direct linking to sections works (`/#projects`, `/#contact`)
- ✅ Back/forward browser buttons work naturally
- ✅ No route mismatch on refresh
- ⚠️ Individual case studies not directly linkable as separate pages (mitigated: hash-based modal routing `/#projects/livesurgery` implemented)
- ⚠️ Cannot add a `/blog` route without introducing React Router later (acceptable: blog is in freeze list)

---

## ADR-002: Pure CSS with Custom Properties — No Tailwind or CSS-in-JS

**Date:** 2025-11 (retroactive)
**Status:** Accepted
**Decider:** Roman Mazuryk

### Context
Three styling options were considered: Tailwind CSS utility classes, CSS-in-JS (styled-components or Emotion), or plain CSS with custom properties.

### Decision
Plain CSS organized into 16 component-scoped files, with CSS custom properties for design tokens.

### Consequences
- ✅ No build-time CSS purge/JIT complexity
- ✅ CSS files are readable and auditable by any developer
- ✅ CSS custom properties (variables) provide the theming capability of a design token system without the toolchain
- ✅ `prefers-reduced-motion` and `prefers-color-scheme` are trivial to support in plain CSS
- ✅ No React-specific styling dependency — CSS works if component is extracted
- ⚠️ 1,735 lines of CSS requires discipline to keep organized (mitigated: one file per major section)
- ⚠️ No automatic TypeScript type-checking for class names (acceptable trade-off at current scale)

---

## ADR-003: Static Data Files — No CMS or Backend

**Date:** 2025-11 (retroactive)
**Status:** Accepted
**Decider:** Roman Mazuryk

### Context
Portfolio content (projects, skills, timeline, milestones) needs to be maintained and occasionally updated. Options: headless CMS (Contentful/Sanity), JSON files, hardcoded in JSX, or JS module data files.

### Decision
All content lives in `/src/data/*.js` as exported JavaScript arrays/objects. Case study narratives are in dedicated JSX components under `/src/components/case-studies/`.

### Consequences
- ✅ Zero CMS cost, zero API latency, zero runtime dependency
- ✅ Content changes trigger a build/deploy — forces intentional updates
- ✅ Content is version-controlled with code (full history)
- ✅ No CMS schema to maintain
- ⚠️ Case study text in JSX components is harder to update than data files (planned fix: Week 7–8 roadmap item to extract to data layer)
- ⚠️ Non-developers cannot edit content without code access (acceptable: solo founder, no content collaborators)

---

## ADR-004: Component-Level State Only — No Global State Manager

**Date:** 2025-11 (retroactive)
**Status:** Accepted
**Decider:** Roman Mazuryk

### Context
Portfolio uses several pieces of UI state: active nav section, mobile menu open/closed, timeline view mode, project modal open/closed, email copied status. Question: should this use Redux, Zustand, React Context, or component `useState`?

### Decision
All state is managed with React `useState` in the component that owns it. `localStorage` is used for the one piece of state that needs to persist across page loads (timeline view preference).

### Consequences
- ✅ Zero additional dependency
- ✅ No "prop drilling" needed — state is co-located with the UI that uses it
- ✅ Each component is independently understandable and testable
- ✅ No global store to debug or serialize
- ⚠️ If cross-component state is ever needed (e.g., theme toggle affecting all components), state will need to be lifted or Context introduced (acceptable: not in current scope)

---

## ADR-005: Retroactive OS Adoption — AI Production OS v1 Framework

**Date:** 2026-02-26
**Status:** Accepted
**Decider:** Roman Mazuryk

### Context
The portfolio repo was built prototype-first: code quality and visual design were prioritized over workflow discipline and documentation. At the point of this audit (2026-02-26), the repo had:
- 0 documentation files
- 0 CI/CD configuration
- 0 tests
- 0 issue/PR templates
- Minimal README (6 lines)

As a solo founder using this repo as proof-of-work for senior PM and technical roles, the absence of workflow scaffolding undermines the repo's credibility as a signal of production discipline.

### Decision
Apply AI Production OS v1 framework retroactively: create all missing documentation (PRD, Architecture, Roadmap, Decisions Log), establish GitHub workflow templates, add CHANGELOG, and follow Issue → PR → Deploy discipline for all future changes.

### Consequences
- ✅ Repo now reads as a production-grade project, not a prototype
- ✅ Future contributors (or future self) have clear context for every decision
- ✅ CHANGELOG provides visible proof-of-work over time
- ✅ Issue and PR templates enforce scoped, reviewable changes
- ⚠️ Documentation needs to be kept current — stale docs are worse than no docs (mitigation: add "Update docs" to every PR checklist)
- ⚠️ Does not retroactively add test coverage or CI/CD (addressed in Weeks 3–4 roadmap)

---

## ADR-006: Vite over Create React App

**Date:** 2025-11 (retroactive)
**Status:** Accepted
**Decider:** Roman Mazuryk

### Context
React project initialization choice: Create React App (deprecated), Vite, or Next.js.

### Decision
Use Vite with `@vitejs/plugin-react`. No Next.js.

### Consequences
- ✅ CRA is deprecated; Vite is the current community standard for SPAs
- ✅ Vite build is 10–50x faster than Webpack/CRA
- ✅ HMR (Hot Module Replacement) is near-instant
- ✅ Vite produces a static bundle deployable to any CDN (Vercel, Netlify, GitHub Pages)
- ✅ No server-side rendering needed for a static portfolio
- ⚠️ No SSR/SSG built-in — if SEO becomes critical, Next.js migration would be needed (acceptable: static OG tags + sitemap.xml are sufficient for current SEO goals)

---

## ADR-007: Named Lucide Imports + Static Icon Maps Over Wildcard Import

**Date:** 2026-02-26
**Status:** Accepted
**Decider:** Roman Mazuryk

### Context
Three components (`Projects`, `Milestones`, `JourneyFull`) used `import * as Lucide from "lucide-react"` to resolve icon names stored as strings in data files. This pattern is convenient — no lookup map needed — but wildcard namespace imports prevent Rollup from tree-shaking the lucide-react package, forcing all 1,000+ icons into the bundle (~850 kB).

### Decision
Replace wildcard imports with explicit named imports for only the icons actually referenced in the data files. Build a `const COMPONENT_ICONS = { ... }` static lookup map in each component and use it for dynamic resolution.

### Consequences
- ✅ Rollup can tree-shake lucide-react — only imported icons are bundled
- ✅ Bundle reduction: ~800 kB removed from initial load
- ✅ No runtime behavior change — same dynamic icon resolution via string key
- ⚠️ When adding a new icon to a data file, the named import and the map entry must also be added to the consuming component (acceptable: icons change rarely; easy to spot at PR review)

---

## ADR-008: Lazy-Load Case Study Components (React.lazy + Suspense)

**Date:** 2026-02-26
**Status:** Accepted
**Decider:** Roman Mazuryk

### Context
Six case study components (LiveSurgery, Flowlogics, SmartShooter, Alphorythm, Portfolio, Medintegro) were statically imported in `Projects.jsx`. They are only ever rendered inside a modal that opens on user interaction. Including them in the initial bundle adds ~50 kB of JSX that is never needed until a user explicitly clicks "Case Study".

### Decision
Convert all six case study imports to `React.lazy(() => import(...))` and wrap the modal body in `<Suspense fallback={<div className="cs-loading">Loading…</div>}>`.

### Consequences
- ✅ Case study code is split into 6 separate chunks, loaded on demand
- ✅ Initial bundle reduced; faster first paint and LCP
- ✅ Each case study chunk is small (3–11 kB gzip) — loads in < 100ms on any reasonable connection
- ✅ `<Suspense>` fallback handles the brief loading state gracefully
- ⚠️ First open of a case study has a tiny async delay (imperceptible on broadband; acceptable trade-off)
- ⚠️ New case study components must also use `React.lazy` to stay consistent (documented in CONTRIBUTING)

### Outcome
Lighthouse Performance score: **38 → 99**. Initial JS gzip: **242 kB → 78 kB**.
