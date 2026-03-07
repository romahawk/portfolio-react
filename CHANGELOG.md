# Changelog

All notable changes to this project will be documented here.

Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
Versioning: [Semantic Versioning](https://semver.org/spec/v2.0.0.html)

---

## [Unreleased]

### Added
- `App.jsx` + `utilities.css` — skip-to-main link (`.skip-link`): visually hidden until focused, appears at top for keyboard users (WCAG 2.4.1)
- `Navbar.jsx` — mobile menu keyboard fix: `aria-hidden` + `inert` on `nav__list` when closed on mobile; Escape key closes open menu
- `Projects.jsx` — empty state with "Clear filter" when tag filter yields zero results
- `Projects.jsx` + `modal.css` — case study lazy-load spinner (`.cs-loading__spinner`) replaces plain text fallback
- `utilities.css` — `@media (hover: none)` `:active` fallbacks for cards and interactive elements

### Changed
- `timeline.css` — scroll buttons repositioned to `4px` inside on viewports ≤ 900px (was `-48px`, clipped off-screen)
- `modal.css` — close button enlarged 36→44px (WCAG 2.5.5); hover + focus-visible styles added; backdrop 0.55→0.72 opacity, blur 2→4px
- `projects.css` — category tabs redesigned as segmented control to distinguish from tag filter chips; empty state style added
- `hero.css` — CTA hierarchy: primary button larger with glow; email link de-emphasised
- `Contact.jsx` — copy confirmation extended to 2.5s with `aria-live="polite"`
- `main.css` — section padding `48px 0` on ≤ 640px
- `About.jsx` — profile image explicit `width/height` to prevent CLS
- `ai-sdlc.css`, `skills.css`, `certifications.css`, `about.css`, `projects.css`, `contact.css`, `timeline.css`, `modal.css` — `border-radius: 14px` → `var(--radius)` token

- `Hero.jsx`, `Footer.jsx` — replace dead-end `#contact` anchor CTAs with direct `mailto:romazuryk@proton.me` links; Hero "Get in touch" becomes one-click email open with visible address and Mail icon; Footer "Get in touch" becomes "Send an email" mailto
- `index.html` — add `<link rel="canonical" href="https://www.mazuryk.dev/" />` so search engines consolidate authority on the custom domain
- `Hero.jsx` — replace external LinkedIn ghost CTA with on-site `#contact` anchor ("Get in touch"); keeps conversion loop on-site
- `public/robots.txt`, `public/sitemap.xml`, `index.html` (og:url, og:image, twitter:image) — update all canonical URLs from `roman-mazuryk.vercel.app` to `www.mazuryk.dev`
- `vercel.json` — explicit build config + security headers (`X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`); immutable cache headers for `/assets/`
- `.github/workflows/lighthouse.yml` — Lighthouse CI on every push/PR to `main`; fails build if any category drops below 90
- `.lighthouserc.json` — Lighthouse CI thresholds: Performance ≥ 90, Accessibility ≥ 90, Best Practices ≥ 90, SEO ≥ 90
- "Last updated: Feb 2026" footer added to all 6 case study modals (AlphaRhythm, FlowLogix, LiveSurgery, Medintegro, Portfolio, SmartShooter)

### Fixed
- `Footer.jsx` — replace `icon: Icon` destructuring alias (invisible to ESLint `no-unused-vars`) with direct `icon` + `React.createElement(icon, ...)` pattern
- `Contact.jsx` — add `/* clipboard unavailable */` comment to empty `catch {}` block to satisfy `no-empty` rule
- `AlphorythmCaseStudy.jsx`, `FlowLogixCaseStudy.jsx` — replace literal `->` arrows in JSX text with Unicode `→` to fix parser error

### Performance
- Replace all `import * as Lucide` wildcard imports with named imports + static lookup maps in `Projects.jsx`, `Milestones.jsx`, `JourneyFull.jsx` — enables tree-shaking, removes ~800 kB of unused icon code from bundle
- Lazy-load all 6 case study components with `React.lazy` + `Suspense` — they are modal-only and never needed on initial page load
- Add `manualChunks` to `vite.config.js` to split `react-vendor` into a separate cacheable chunk
- Add `<link rel="preload">` for `/images/profile.jpg` with `fetchpriority="high"` — fixes LCP delay
- Result: initial JS bundle (gzip) reduced from **242 kB → 78 kB** (68% reduction); Lighthouse Performance **38 → 99**

### Added
- Vercel Analytics (`@vercel/analytics`) — privacy-respecting visitor tracking via `<Analytics />` in `App.jsx`
- `docs/PRD.md` — product requirements, target user, MVP scope, acceptance criteria, risks
- `docs/ARCHITECTURE.md` — system design, component map, data flow, key trade-offs, scaling notes
- `docs/ROADMAP.md` — 12-week outcome-based roadmap with weekly DoD and demo artifacts
- `docs/DECISIONS_LOG.md` — 6 architectural decision records (ADRs) covering routing, CSS, state, data, OS adoption, and build tooling
- `CHANGELOG.md` — this file; tracks all shipped changes going forward
- `CONTRIBUTING.md` — branch naming conventions, commit rules, PR discipline, release process
- `.github/ISSUE_TEMPLATE/feature.md` — feature request template with acceptance criteria
- `.github/ISSUE_TEMPLATE/bug.md` — bug report template with severity and reproduction steps
- `.github/pull_request_template.md` — PR checklist with lint/build/mobile/docs/changelog gates
- `README.md` — rewritten with 30-second pitch, setup steps, project structure, stack table, docs index

---

## [0.3.0] — 2025-11

### Added
- AI-Augmented SDLC section (`AIAugmentedSDLC.jsx`) explaining methodology
- `TimelineSwitch` component — toggle between 3-milestone summary and full 11-entry timeline
- `JourneyFull` component — horizontal scrollable timeline with sort and tag filter
- `CaseStudyModal` — accessible modal with focus trap, Escape key support, hash-based routing
- 6 case study components: LiveSurgery, SmartShooter, FlowLogix, Alphorythm, Portfolio, Medintegro
- `BackToTop` button — appears after 400px scroll
- `useScrollReveal` hook — IntersectionObserver scroll reveal with `prefers-reduced-motion` support
- Open Graph and Twitter Card meta tags in `index.html`
- PWA manifest (`site.webmanifest`) and full favicon set

### Changed
- CSS reorganized into 16 component-scoped files with master import in `main.css`
- All CSS custom properties centralized in `:root` block

---

## [0.2.0] — 2025-10

### Added
- Projects section with category filter tabs (Tech / MedTech)
- Tag-based filtering on project grid
- Skills section with 5 category groups (PM, Systems, Leverage, Tech Stack, Soft)
- Certifications section with status badges
- Contact section with email copy-to-clipboard and 4s confirmation state
- Footer with socials and availability CTA

### Changed
- Navbar upgraded with scroll-spy active section tracking using IntersectionObserver
- Mobile hamburger menu with auto-close on nav link click

---

## [0.1.0] — 2025-09

### Added
- Initial React + Vite project scaffold
- Hero section with positioning statement and CTA buttons
- About section with multi-panel narrative and profile photo
- Basic Navbar with anchor links
- Core CSS design system (dark theme, CSS custom properties, responsive layout)
- Vercel deployment configured
