# Changelog

All notable changes to this project will be documented here.

Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
Versioning: [Semantic Versioning](https://semver.org/spec/v2.0.0.html)

---

## [Unreleased]

### Added
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
