# Architecture Document
## Roman Mazuryk — Portfolio & Proof-of-Work Site

**Version:** 1.0
**Last Updated:** 2026-02-26
**Status:** Active

---

## High-Level Overview

This is a **static single-page application (SPA)** with no backend. All content is hardcoded in static data files and React components. The site is deployed as a pre-built static bundle on Vercel's CDN.

```
Browser
  └── Vercel CDN (static files)
        └── index.html
              └── React SPA (Vite bundle)
                    ├── Navbar (scroll-spy)
                    ├── Sections (Hero → Contact)
                    └── CaseStudyModal (overlay)
```

**No server, no database, no API calls, no auth.** Intentional: eliminates operational complexity, cold starts, and attack surface for a static portfolio.

---

## Key Components

### Entry Chain
```
index.html
  └── src/main.jsx          — createRoot, mounts App
        └── src/App.jsx     — composes all sections, runs useScrollReveal()
```

### Section Components (`src/components/`)
| Component | Role | State |
|-----------|------|-------|
| `Navbar` | Fixed header, scroll-spy active section, mobile menu | `useState` (activeSection, menuOpen) |
| `Hero` | Landing pitch, CTA buttons, scroll hint | None |
| `About` | Multi-panel narrative with profile photo | None |
| `AIAugmentedSDLC` | Framework cards explaining methodology | None |
| `TimelineSwitch` | Toggle between 3-card summary and full timeline | `useState` + `localStorage` |
| `Milestones` | 3 key milestone cards | None |
| `JourneyFull` | 11-entry horizontal scrollable timeline | `useState` (sort, filter) |
| `Skills` | 5-category skill grid | None |
| `Projects` | Project grid with filters + case study modal | `useState` (filter, activeModal) |
| `Certifications` | Certificate cards with status badges | None |
| `Contact` | Email copy, socials, location | `useState` (copied, status) |
| `Footer` | Links, socials, availability CTA | None |
| `BackToTop` | Appears after 400px scroll | `useState` (visible) |
| `CaseStudyModal` | Accessible modal wrapper (focus trap, Escape) | None (controlled externally) |

### Case Study Components (`src/components/case-studies/`)
Six self-contained JSX components, each rendering a detailed case study:
- `LivesurgeryCaseStudy` — Real-time surgical collaboration platform
- `SmartShooterCaseStudy` — Training analytics and shooting log
- `FlowLogixCaseStudy` — Supply chain visibility platform
- `AlphorythmCaseStudy` — Strategy analytics system
- `PortfolioCaseStudy` — This portfolio (meta)
- `MedintegroCaseStudy` — B2B MedTech platform rebuild

### Data Layer (`src/data/`)
All content is imported from static JS modules. No network calls.

| File | Contents |
|------|----------|
| `projects.js` | 6 tech projects + 11 MedTech projects (id, title, summary, stack, tags, link, caseStudy flag) |
| `skillsCards.js` | 5 skill category arrays (hardSkills, pmSkills, softSkills, leverageSkills, techStack) |
| `timeline.js` | Full career timeline entries (year, title, role, company, tags, summary, highlights, icon) |
| `milestones.js` | 3 milestone summary cards |
| `journey.js` | 11-entry journey array for JourneyFull horizontal scroller |

### Hooks (`src/hooks/`)
| Hook | Purpose |
|------|---------|
| `useScrollReveal` | IntersectionObserver that adds `.reveal--visible` class to `.reveal` elements; fires once per element; respects `prefers-reduced-motion` |

---

## Data Flow

```
Static data files (src/data/*.js)
        ↓ imported by
Section components (props or direct import)
        ↓ render
DOM elements with .reveal class
        ↓ observed by
useScrollReveal (IntersectionObserver)
        ↓ triggers
CSS animation classes (.reveal--visible)
```

**Navigation flow:**
```
User clicks nav link → anchor href="#section-id"
        → browser smooth-scrolls to section
        → Navbar scroll listener updates activeSection
        → active nav item highlights
```

**Case study modal flow:**
```
User clicks "Case Study" on ProjectCard
        → Projects sets activeModal = project.id
        → CaseStudyModal renders with correct case study component
        → focus trapped inside modal
        → Escape / backdrop click → closes modal, returns focus
```

---

## Storage / Auth Choices

**No authentication.** Public portfolio — no user accounts needed.

**localStorage:**
- `timeline:view` — persists the user's choice of "summary" vs "full" timeline view across page reloads
- No other persistent state

**No cookies, no session storage, no IndexedDB.**

---

## Styling Architecture

**Pure CSS with custom properties.** 16 CSS files, 1,735 lines total.

```
src/assets/css/main.css         — imports all other CSS files, defines :root tokens
  ├── animations.css            — scroll reveal, hero entrance, stagger delays
  ├── navigation.css            — navbar, mobile menu, active states
  ├── hero.css                  — hero typography and scroll hint
  ├── about.css                 — about section layout
  ├── ai-sdlc.css               — AI SDLC section
  ├── timeline.css              — timeline track and cards
  ├── skills.css                — skills grid and cards
  ├── projects.css              — project grid, filters, modal
  ├── modal.css                 — case study modal overlay
  ├── certifications.css        — cert card grid
  ├── contact.css               — contact form layout
  ├── footer.css                — footer grid and socials
  ├── header.css                — fixed header positioning
  ├── layout.css                — container and section padding
  └── utilities.css             — buttons, back-to-top, focus rings
```

**Design tokens (CSS custom properties):**
```css
:root {
  --bg: #0b0d12;       /* dark background */
  --panel: #10141c;    /* card/panel background */
  --text: #e7ebf3;     /* primary text */
  --muted: #9aa4b2;    /* secondary text */
  --brand: #00ddeb;    /* cyan accent */
  --brand-2: #5b9dff;  /* blue accent */
  --border: #1b2130;   /* border color */
  --radius: 14px;      /* standard border radius */
  --shadow: 0 10px 30px rgba(0,0,0,0.35);
}
```

---

## Build & Deploy

**Build tool:** Vite 7 (`npm run build` → `/dist/`)

**Deploy platform:** Vercel (auto-deploy on push to `main`)

**Deploy pipeline:**
```
git push origin main
  → Vercel detects push
  → runs: npm run build
  → deploys /dist/ to CDN
  → live at https://roman-mazuryk.vercel.app/
```

**No environment variables required** for current feature set.

---

## Key Trade-offs

| Decision | Chose | Alternatives | Reason |
|----------|-------|--------------|--------|
| Routing | Hash-based anchors | React Router | SPA with no separate pages; anchor links are simpler and SEO-safe |
| State | Component `useState` | Redux, Zustand | No shared cross-component state; local state is sufficient |
| Styling | Pure CSS + custom properties | Tailwind, CSS-in-JS | Full control, no class noise in JSX, easy to audit |
| Content | Static JS data files | Contentful, Sanity, MDX | No CMS cost, no build complexity, fast iteration |
| TypeScript | JavaScript | TypeScript | Prototyped quickly; TS migration is a planned future sprint |
| Testing | None (current) | Vitest + RTL | Deferred; priority is documentation and CI/CD first |
| Analytics | None (current) | Plausible, Vercel Analytics | Planned for Week 3 sprint |

---

## Accessibility Architecture

- Semantic HTML5 landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`)
- ARIA labels on all interactive elements without visible text
- Focus rings preserved (not removed in CSS resets)
- Modal focus trap (Tab cycles within modal, Shift+Tab reverses)
- Escape key closes modals and restores focus to trigger element
- `prefers-reduced-motion: reduce` — all animations disabled at CSS and JS level
- Color contrast: all text meets WCAG AA (4.5:1 for normal, 3:1 for large)
- Keyboard navigation: all interactive elements reachable and operable via keyboard

---

## Future Scaling Notes

| Feature | Trigger | Approach |
|---------|---------|----------|
| More case studies | > 8 case studies | Extract case study content to JSON/MDX data files; render dynamically |
| Multilingual | International roles | `i18next` + JSON translation files; no architecture change needed |
| Blog/writing | Content publishing | Add `/blog` route with React Router; static MDX rendering via Vite plugin |
| TypeScript | Next major refactor sprint | Rename `.jsx` → `.tsx`; add `tsconfig.json`; start with data files and hooks |
| Analytics | After deploy stabilizes | Plausible (privacy-first) or Vercel Analytics (zero config) |
| CMS | Frequent content updates | Contentful or Sanity; update data layer to fetch from API; no component changes |
| E2E testing | Before major version | Playwright; test core loop (land → case study → contact) |
