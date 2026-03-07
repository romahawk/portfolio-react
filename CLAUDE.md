# CLAUDE.md — Project Context for Claude Code Sessions

This file is read automatically at the start of every Claude Code session.
It gives you the project state, conventions, and current sprint so you can orient in < 60 seconds.

---

## What This Project Is

Personal portfolio + proof-of-work site for Roman Mazuryk (Technical PM / Founder-Operator).
Live: https://www.mazuryk.dev/ (canonical domain; previously roman-mazuryk.vercel.app)

**Not a client site. Not a blog. Not a CMS project.**
It is a static SPA that proves product leadership through case studies and build discipline.

---

## Stack at a Glance

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + Vite 7 (no router, no state manager) |
| Styling | Pure CSS with custom properties — 16 files in `src/assets/css/` |
| Icons | `lucide-react` ^0.544.0 — named imports only (no wildcard) |
| Data | Static JS files in `src/data/` — no API calls |
| Analytics | Vercel Analytics (`<Analytics />` in `App.jsx`) |
| Deploy | Vercel, auto-deploy on push to `main` |
| Lint | ESLint 9 flat config (`eslint.config.js`) |

---

## Key Commands

```bash
npm run dev       # dev server → localhost:5173
npm run build     # production build → dist/
npm run lint      # ESLint — must pass before any commit
npm run preview   # preview production build locally
```

**Both `lint` and `build` must exit 0 before committing.**

---

## Page Structure (render order in App.jsx)

```
<Navbar />
<main>
  <Hero />
  <About />
  <AIAugmentedSDLC />
  <TimelineSwitch />     ← renders either <Milestones /> or <JourneyFull />
  <Skills />
  <Projects />           ← lazy-loads case study components on demand
  <Certifications />
  <Contact />
</main>
<Footer />
<BackToTop />
<Analytics />
```

---

## Component Map (`src/components/`)

| Component | Role | Local State |
|-----------|------|-------------|
| `Navbar` | Fixed header, scroll-spy active section, mobile menu | `useState` (activeSection, menuOpen) |
| `Hero` | Landing pitch, CTA buttons | None |
| `About` | Multi-panel narrative with profile photo | None |
| `AIAugmentedSDLC` | Methodology cards (Strategy, Build Loop, Hardening Stack) | None |
| `TimelineSwitch` | Toggle summary/full timeline; persists to `localStorage` | `useState` (full) |
| `Milestones` | 3 key milestone cards | None |
| `JourneyFull` | 11-entry horizontal scrollable timeline with sort/filter | `useState` (sort, filter) |
| `Skills` | 3-pillar skill layout rendered from `skillsPillars` data | None |
| `Projects` | Category tabs + tag filters + hash-based case study modal | `useState` (cat, tag, caseId) |
| `Certifications` | Certificate cards with status badges | None |
| `Contact` | Email copy-to-clipboard (4s confirmation), socials | `useState` (copied, status) |
| `Footer` | Links, socials, availability CTA | None |
| `BackToTop` | Appears after 400px scroll | `useState` (visible) |
| `CaseStudyModal` | Accessible modal: focus trap, Escape key, hash deep-link | None (controlled by Projects) |

### Case Study Components (`src/components/case-studies/`)

All 6 are loaded via `React.lazy()` + `<Suspense>` — never in the initial bundle.

| File | Subject |
|------|---------|
| `LivesurgeryCaseStudy.jsx` | Real-time surgical collaboration platform |
| `SmartShooterCaseStudy.jsx` | Training analytics and shooting log |
| `FlowLogixCaseStudy.jsx` | Supply chain visibility platform |
| `AlphorythmCaseStudy.jsx` | Strategy analytics system |
| `PortfolioCaseStudy.jsx` | This portfolio (meta) |
| `MedintegroCaseStudy.jsx` | B2B MedTech platform rebuild |

**Case study modal URL pattern:** `#projects/<slug>` (e.g. `#projects/livesurgery`)

---

## Data Layer (`src/data/`)

All content lives here — no network calls.

| File | Exports | Shape |
|------|---------|-------|
| `projects.js` | `techProjects`, `medtechProjects` | `{ id, title, summary, stack, tags, link, caseStudy, icon, inDevelopment, segment }` |
| `skillsCards.js` | `skillsPillars` | 3 pillars × 2–3 cards; each card: `{ title, icon, items[] }` where `icon` is a string key into the `ICONS` map in `Skills.jsx` |
| `timeline.js` | timeline entries array | Full career entries with year, title, role, company, tags, summary, highlights, icon |
| `milestones.js` | milestones array | 3 summary milestone cards |
| `journey.js` | journey array | 11-entry journey for `JourneyFull` horizontal scroller |

---

## Hooks (`src/hooks/`)

| Hook | Purpose |
|------|---------|
| `useScrollReveal` | `IntersectionObserver` that adds `.reveal--visible` to `.reveal` elements; fires once per element; respects `prefers-reduced-motion` |

---

## Styling Architecture

**Pure CSS — 16 files — ~1,735 lines total.**

`src/assets/css/main.css` is the master import file and holds the `:root` design tokens.

### Design Tokens (CSS Custom Properties)

```css
:root {
  --bg:      #0b0d12;   /* dark background */
  --panel:   #10141c;   /* card/panel background */
  --text:    #e7ebf3;   /* primary text */
  --muted:   #9aa4b2;   /* secondary text */
  --brand:   #00ddeb;   /* cyan accent */
  --brand-2: #5b9dff;   /* blue accent */
  --border:  #1b2130;   /* border color */
  --radius:  14px;
  --shadow:  0 10px 30px rgba(0,0,0,0.35);
}
```

### CSS File Index

```
src/assets/css/
  main.css            ← master import + :root tokens + reset + layout helpers
  animations.css      ← scroll reveal, hero entrance, stagger delays
  navigation.css      ← navbar, mobile menu, active states
  hero.css
  about.css
  ai-sdlc.css
  timeline.css
  skills.css
  projects.css
  modal.css           ← case study modal overlay
  certifications.css
  contact.css
  footer.css
  header.css
  layout.css          ← .container, .section padding
  utilities.css       ← buttons, back-to-top, focus rings
```

---

## Lucide Icon Pattern (CRITICAL — do not violate)

**Never use `import * as Lucide from "lucide-react"`.** It kills tree-shaking and previously added ~800 kB to the bundle.

Always use named imports + a static lookup map:

```jsx
// Named imports at file top
import { Layers, Users, Zap } from "lucide-react";

// Static map in component file
const ICONS = { Layers, Users, Zap };

// Resolve at render time with a fallback
const Icon = ICONS[item.icon] || Layers;
```

If you add a new icon name to any data file (`skillsCards.js`, `projects.js`, `timeline.js`, etc.), you **must** also:
1. Add its named import to the consuming component
2. Add it to that component's `ICONS` map

---

## ESLint Rules to Know

Config: ESLint 9 flat config (`eslint.config.js`), extends `eslint:recommended` + `react-hooks/recommended-latest` + `react-refresh/vite`.

Key rule: `no-unused-vars: error` — **variables matching `/^[A-Z_]/` are exempted** (covers component variables in JSX maps).

Common pitfalls:
- Empty `catch {}` blocks → add `/* comment */` explaining why it's intentionally empty
- Icon destructuring aliases like `{ icon: Icon }` — ESLint may flag `Icon` as unused; use direct reference + `React.createElement(icon, ...)` pattern instead
- Wildcard lucide imports (see icon pattern above)

---

## Architecture Rules — Do Not Violate Without an ADR

1. **No `import * as X from "lucide-react"`** — use named imports + static lookup map.
2. **Case study components must be `React.lazy()`** — they are modal-only, never needed on first load.
3. **New data-driven icon names must be registered in the consuming component's lookup map.**
4. **No new npm dependencies without a documented reason** — check the freeze list first.
5. **No TypeScript migration mid-sprint** — planned for Week 9–10 per ROADMAP.
6. **No CMS / backend / database** — static site architecture is intentional.
7. **No React Router** — hash-based anchors are the navigation model.

---

## Accessibility Requirements (Lighthouse: 100)

- Semantic HTML5 landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`)
- `aria-label` on all interactive elements without visible text
- Focus rings must not be removed in CSS
- Modal focus trap: Tab cycles within `.cs-modal__panel`; Shift+Tab reverses; Escape closes
- On modal close, focus returns to the trigger element (`previousFocusRef`)
- `prefers-reduced-motion: reduce` — disable all animations at CSS and JS level
- WCAG AA color contrast on all text

---

## Freeze List — Do Not Touch

| Item | Reason |
|------|--------|
| CSS → Tailwind migration | 1,735 lines of clean CSS is working fine |
| React Router | Hash navigation works; no separate pages needed |
| CMS / backend / database | Static site is the right architecture |
| Redux / Zustand | No shared cross-component state needed |
| Dark/light mode toggle | Already dark-only; toggle is scope creep |
| Blog section | Separate product; out of scope for this sprint horizon |
| Multi-page routing | Single scrollable page is the UX model |
| Authentication | Public portfolio, no user accounts |
| TypeScript | Planned Week 9–10; do not start mid-sprint |

See `docs/ROADMAP.md` for full freeze list with rationale.

---

## Build & Deploy

```bash
npm run build
# → Vite bundles to /dist/
# → manualChunks splits react + react-dom into 'react-vendor' chunk
# → git push origin main triggers Vercel auto-deploy
```

**Live:** https://www.mazuryk.dev/
**No environment variables required.**
**Security headers** are configured in `vercel.json` (X-Frame-Options: DENY, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, immutable cache for `/assets/`).

---

## Current Lighthouse Scores (last verified 2026-02-26)

| Category | Score |
|----------|-------|
| Performance | 99 |
| Accessibility | 100 |
| Best Practices | 96 |
| SEO | 100 |

**Protect these.** Run Lighthouse before merging any change that touches CSS, images, or JS imports.
Initial JS bundle (gzip): **78 kB** (reduced from 242 kB via tree-shaking + lazy loading).

---

## Branch Naming

```
feature/<description>    # new capability
fix/<description>        # bug fix
chore/<description>      # tooling, docs, config
refactor/<description>   # internal change, no behavior change
```

Never work directly on `main`. Always branch from `main`.

---

## Commit Format

```
feat: add thing
fix: broken thing
chore: update config
perf: improve speed
docs: update readme
refactor: internal restructure
style: visual-only change
test: add or fix tests
```

Present tense. No period. Max 72 chars on first line.
Always update `CHANGELOG.md` under `[Unreleased]` in the same commit.

---

## How to Orient at Session Start (60 seconds)

```bash
# Step 1 — what was last shipped?
git log --oneline -5

# Step 2 — what's in progress?
git branch -a | grep -v remotes
# Any branch that isn't main/master is work in progress

# Step 3 — read the open GitHub issue or the last issue comment
# The issue comment is the "parking note" — it says where the last session ended

# Step 4 — if no issue, check docs/ROADMAP.md
# Find the current week. First unchecked item is the next issue to create.
```

---

## Workflow Loop (every session)

```
ORIENT  → git log -5, check open branch, read parking note on issue
SCOPE   → can this be done in one session? if not, split the issue
BRANCH  → git checkout -b <type>/<description> main
BUILD   → make the change, keep scope tight
LINT    → npm run lint (fix all errors)
BUILD   → npm run build (must exit 0)
QA      → test on mobile, click through core loop (hero → case study → contact)
ARTIFACT → screenshot or Loom for every visible change
PR      → fill PR template, update CHANGELOG, link issue
SHIP    → merge to main, verify Vercel deploy, close issue
PARK    → leave comment on next open issue: "Next session starts here: [exact action]"
```

The PARK step is what makes the next ORIENT instant.

---

## Where Things Live

| What | Where |
|------|-------|
| Product scope + AC | `docs/PRD.md` |
| System design | `docs/ARCHITECTURE.md` |
| 12-week plan | `docs/ROADMAP.md` |
| Why decisions were made | `docs/DECISIONS_LOG.md` |
| All shipped changes | `CHANGELOG.md` |
| Branch rules, PR process | `CONTRIBUTING.md` |
| Section components | `src/components/` |
| Case studies (lazy-loaded) | `src/components/case-studies/` |
| Static content | `src/data/` |
| CSS (one file per section) | `src/assets/css/` |
| Design tokens | `src/assets/css/main.css` (`:root` block) |
| Scroll reveal hook | `src/hooks/useScrollReveal.js` |
| CV (PDF) | `public/roman-mazuryk-cv.pdf` |
| Favicon / PWA manifest | `public/` |

---

## localStorage Keys

| Key | Values | Used by |
|-----|--------|---------|
| `timeline:view` | `"summary"` / `"full"` | `TimelineSwitch.jsx` |

No other persistent browser storage is used. No cookies, no session storage, no IndexedDB.

---

## Current Sprint State (as of 2026-03-06)

**Recently completed (in [Unreleased] CHANGELOG):**
- Skills section restructured to 3-pillar layout (from flat card grid)
- Timeline narrative refined for seniority positioning
- Closing statement styled as a branded callout block
- Security headers configured in `vercel.json`
- Lighthouse CI workflow added (`.github/workflows/lighthouse.yml`)
- "Last updated: Feb 2026" footer added to all 6 case study modals
- Vercel Analytics integration active
- Bundle: 242 kB → 78 kB; Lighthouse Performance: 38 → 99
- All docs scaffolding completed (`/docs/`, CHANGELOG, CONTRIBUTING, README, issue/PR templates)
- Canonical domain updated to `www.mazuryk.dev` across all meta tags, sitemap, robots.txt

**Next up (Weeks 5–8 per ROADMAP):**
- [ ] Mobile QA: verify all 6 case study modals on iOS Safari + Android Chrome
- [ ] New case study addition (project TBD based on active work)
- [ ] Skills section content refresh with latest tools/frameworks
- [ ] "Open to Work" dismissible banner
- [ ] Timeline update with 2025–2026 entries
- [ ] Case study content decoupled from JSX into data files (`refactor/case-study-data-layer`)
