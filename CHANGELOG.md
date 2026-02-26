# Changelog

All notable changes to this project will be documented here.

Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
Versioning: [Semantic Versioning](https://semver.org/spec/v2.0.0.html)

---

## [Unreleased]

### Added
- `AvailabilityBanner` component — dismissible "Open to Work" strip below navbar; green pulse indicator, LinkedIn CTA, dismissed state persisted to `localStorage` (`availability_banner_dismissed_v1`)
- Timeline: new 2026 entry "AI-Augmented Delivery OS — Portfolio Production Hardening" with concrete metrics and methodology highlights
- Skills: updated "AI-Accelerated Product Ops" to describe structured AI delivery loops; updated "Strategic Tools" to reflect Claude Code and GitHub Actions

### Changed
- `skillsCards.js` — replaced GitHub Copilot reference with Claude Code + Claude API; replaced Linear alone with "Linear, Trello, and GitHub Actions" in strategic tools
- `timeline.js` — 2026 entry prepended as most recent; 2025-now entry unchanged

### Added (previous sprint)
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
