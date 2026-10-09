# Changelog

All notable changes to this project will be documented here.

Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
Versioning: [Semantic Versioning](https://semver.org/spec/v2.0.0.html)

---

## [Unreleased]

### Changed (two-page site)
- Site collapsed to two pages: `/` (portfolio landing for recruiters: hero, facts, Work, Delivery, About, Contact) and `/services` (AI workflow offer: problem, 3 offers, process, proof links, fit, contact). `/kb` and `/proof-of-work/or-integration` stay as detail pages with the shared header and footer
- Single content source: `src/content/site.js` holds identity, facts, cases, other builds, delivery, about, experience, education, languages, location, contact, services copy and SEO. New `components/site/HomePage.jsx` and `components/site/ServicesPage.jsx` hold no copy
- Identity is now the CV headline: "Technical Project Manager, system implementation in regulated environments". Contact email is romazuryk@gmail.com everywhere on the live pages
- Navbar: Work, Delivery, About, Contact (anchors, `/#id` from other pages), Services, theme toggle. Language switcher and "Work with me" CTA removed. Footer: tagline, same nav, LinkedIn, GitHub, email, CV
- German removed: no language switcher, English-only rendering; a stored `lang=de` is ignored. `de.js` and `germanCopy.js` are no longer imported and are deleted in the cleanup PR
- `en.js` is no longer in the main bundle (only the OR page reads it). Main JS: 109.5 kB to 66.2 kB gzip
- OR page: CTAs point to `/#work`, the CV and email instead of retired routes; the "bridge" and closing copy no longer present an AI-consulting identity
- `main.css` no longer imports the stylesheets of retired pages (16 files, kept on disk for the cleanup PR). CSS: 219 kB to 126 kB (34.4 kB to 20.5 kB gzip); `/`, `/services`, `/kb` and the OR page are pixel-identical at 390/1366 in both themes
- Light-theme footer text and accent colours darkened to meet WCAG AA
- Sitemap reduced to `/`, `/services`, `/kb`, `/proof-of-work/or-integration`; home and services meta (title, description, OG, Twitter) come from `site.js`

### Added (two-page site)
- Permanent redirects in `vercel.json`: `/ai`, `/ai-workflow`, `/collaborate`, `/medtech-ai-systems/*`, `/services/*` to `/services`; `/medtech`, `/fullstack` to `/#work`; `/about` to `/#about`; `/contact` to `/#contact`. Retired Vite inputs removed (their HTML files and components are deleted in the cleanup PR)
- `scripts/check-consistency.mjs`, run as `prebuild`: fails the build on retired role labels, "10+ years" / "13+ years", "proton.me", or an em dash in `site.js`. Files awaiting deletion are listed in the script and skipped until the cleanup PR

### Changed (recruiter-first homepage)
- Homepage rebuilt for hiring teams: static H1 (no typewriter) "AI & Software Implementation in MedTech and Regulated Environments", Technical PM eyebrow, Download CV / Email me CTAs, LinkedIn and GitHub links, 4-fact credibility strip, "Selected delivery work" (Medintegro, PharmaLogis with the FlowLogix demo, AI Field Guide), "How I run delivery" with a `/kb` link, and a hiring CTA with a small link to services
- New `common/ProofCaseCard.jsx` (Problem / My role / What I did / Outcome), reusing the `medtech-proof-card` styles and `StatusBadge`
- `/ai` (also `/services`, `/collaborate`): now holds the AI Workflow Audit section, the "Client journey" map and the "Proof connected to offers" cards moved from the homepage, above its existing closing CTA. Nothing was deleted
- `/about`: static title "Technical PM. 20+ years in regulated industries.", new body copy and a facts block (education, languages, location). Hero CTAs are now Download CV / Email me. "10+ years" pills replaced with the CV facts
- Identity: footer headline, tagline and copyright line, home meta (`useOgMeta.js`, `index.html`) and DE equivalents now read "Technical PM, AI & Software Implementation". The nav and footer label for `/ai` is now "Services" ("Leistungen" in DE)
- Facts aligned with the CV: "10+ years" changed to "12+ years" across MedTech copy; degree is now "M.Sc. Computer Science (Specialization in Software Engineering)"
- German copy: 22 new entries in `germanCopy.js` for the homepage hero, facts, card titles and CTAs

### Added
- `/kb` — AI Field Guide: five pillars (Harness, Skills, Memory, Tools, Cost) with definitions, best practices, pitfalls, per-project applications (status-labelled In use / In build; plans are not listed until built), tool verdicts (Use / Try / Skip), a project × pillar matrix and a searchable glossary
- Content lives in `src/data/aiKnowledgeBase.js` (single source; matrix and glossary are generated from it). No new dependencies
- New entry `kb/index.html`, Vite input, Vercel rewrite, sitemap entry, OG meta and footer link. Not added to the header nav (it already wraps at 1366px); page copy is English-only

### Changed
- `/ai` fit section: replaced the "Projects requiring regulatory compliance certification (HIPAA, MDR, ISO 13485)" exclusion with a scope statement ("Teams needing regulatory certification or sign-off rather than workflow implementation"); good-fit list now reads "MedTech, HealthTech, and regulated operations teams"
- `/medtech`: "Best-fit roles" group moved to `/about` — the trust page is buyer-facing, the role list is for hiring teams. Section 2 is now "Environment fit" / "Best-fit environments"
- `/about`: new Role Fit section after the About block, rendering the relocated role list
- `/medtech` proof: split into "Delivered work and implementation proof" (OR Integration, LiveSurgery) and a new, visually demoted "Concepts and directions" section (Handoff Assistant, Workflow OS) so unbuilt designs no longer read at the same weight as delivered work
- `/fullstack` and `/medtech` copy: removed "concept" / "prototype direction" hedges from items that are deployed and linked (LiveSurgery, Medintegro, AlphaRhythm)
- `RoleFitSection` moved from `MarketPages.jsx` into `system/SystemVisuals.jsx` so `/about` can use it without pulling in the MarketPages chunk
- `.medtech-role-grid` switched to `auto-fit` columns; new `.medtech-proof-grid--concepts` modifier (dashed border, muted accent, tighter padding)
- German copy: 25 new entries in `germanCopy.js` for the strings above
- `/ai` page: rewrote hero title/subtitle and secondary CTA copy, moved the "I do not sell broad AI experiments" claim from the hero into the workflow-intelligence section, renamed "Process" section to "How a workflow engagement works", trimmed redundant section subtext, split proof-of-work into its own "07 / Proof" section
- `/ai` fit section: good/not-ideal list items now show a check/x icon (`CheckCircle2`/`XCircle`) instead of a plain bullet
- `market-page__claim` blockquote restyled (accent left border, italic, larger max-width-constrained text)

### Fixed
- `/kb` — removed all 11 `Planned` project applications and the MedTech Recruiter Intelligence API project entry; the page now lists only work that exists. Matrix hides projects with no listed application (data kept in `kbProjects`). `kbMeta.lastReviewed` → 30 Sep 2026. Light-mode "In use" / "Use" pill green darkened (`--kb-memory` #1a8a42 → #167a3a) to pass WCAG AA contrast (4.37 → 5.4:1)
- Footer — nav labels now use the same `nav.*` keys as the header (incl. `nav.kb`), fixing labels that did not match their links (e.g. `/ai` showed "Proof of Work"). Removed the index-matched `site.footer.navLinks` arrays from EN/DE
- `.gitattributes` — `*.sh` and `.githooks/*` pinned to LF so the commit-msg hook runs in Linux/macOS shells
- `ai/index.html`, `medtech/index.html`, `fullstack/index.html`, `services/index.html`, `collaborate/index.html`, `ai-workflow/index.html`, `proof-of-work/or-integration/index.html`, `medtech-ai-systems/clinical-evidence-workflow/index.html` — these 8 route entry files had no Google Fonts `<link>`, no `.app-shell-header` skeleton, and no scroll-restoration script at all (only the root `index.html` had them). In production, a direct/fresh visit to any page other than home rendered in fallback system fonts permanently. In local dev this was invisible because client-side navigation stays on whichever single `index.html` first loaded. All 8 entries now match root's `<head>`/`<body>` font-loading and app-shell markup.
- `src/App.jsx` — `Footer`/`BackToTop` now render inside the same `Suspense` boundary as the lazy-loaded page content instead of next to it. Previously they mounted immediately while the page's JS chunk was still loading, so the footer painted right below the navbar and then jumped ~5000px once the real content arrived — the actual cause of the flaky footer CLS (up to 0.93) in Lighthouse CI. Verified locally: CLS is now 0 across 5 consecutive runs (was 0/0.84/0.93, non-deterministic).
- `index.html` — Google Fonts (Space Grotesk / Inter) now load with `display=optional` instead of `display=swap` as a secondary safeguard against webfont-swap reflow.

### Changed
- Background: dot grid now renders in dark mode too (`--grid-dot` token no longer transparent by default); added SVG fractal-noise grain overlay on `body::after` with theme-aware blend modes, hidden under `prefers-reduced-motion`
- Light mode: enabled subtle 42px dot grid background (`--grid-line` / `--grid-dot` tokens)
- Cards: gradient border treatment using padding-box/border-box technique (`market-pages.css`)
- Three-column proof cards: differentiated accent colors per track (AI/MedTech/Fullstack)
- Entry offer grid: CTA card elevated with deeper gradient border and shadow
- Homepage hero: eyebrow shortened, reduced from 3 CTAs to 2, keyword tag chips removed
- System Map section: replaced with client journey steps
- Homepage sections: tag chip rows removed from section footers
- Footer: social icon size increased to 18px
- Typography upgraded to Space Grotesk (headings) + Inter (body) from system font stack
- Hero title lead now renders with cyan-blue gradient text treatment
- Project and milestone cards use gradient border (padding-box/border-box technique)
- Hero background aurora animates with slow CSS keyframe drift (14s loop, GPU-composited)
- Added `.heading-accent--ai/medtech/fullstack` utility classes for 3-track section differentiation
- Card hover micro-interactions standardized: translateY(-2px) + glow shadow
- All gradient text and animations include prefers-reduced-motion fallbacks
- Light theme overrides added for all new visual treatments

### Fixed
- `ServicesPage.jsx` — situation selector cards now always visible; removed `reveal` class that was being reset on language-switch re-renders, making cards disappear
- `modal.css` — case study "On this page" chips now wrap to multiple rows instead of overflowing off-screen; replaced horizontal scroll with `flex-wrap: wrap`

### Added
- `public/images/og-services.png` — OG image for `/services` route

### Changed
- `src/hooks/useOgMeta.js` — `/services` route now uses `og-services.png` and services-specific title/description; `applyMeta()` extended to update `og:image:width`, `og:image:height`, `og:image:alt`, `twitter:url`, and `link[rel="canonical"]` (previously only 8 of 13 meta tags were updated on route change)
- `services/index.html` + `vite.config.js` — added as a second Vite build entry so `dist/services/index.html` is emitted with services-specific OG/Twitter meta baked into static HTML; social crawlers (which don't run JS) now receive the correct preview image and copy for `/services`
- `vercel.json` — replaced `/services` SPA fallback rewrites with a `/services/(.*)` catch-all pointing to `dist/services/index.html`

### Changed
- `index.html` — updated page `<title>` and all meta descriptions to "Technical Product Manager | Systems & AI Automation" brand positioning; removed duplicate OG/Twitter tag blocks; consolidated to single canonical set; added `twitter:domain` + `twitter:url` properties
- `public/images/og-home.png` — updated OG image to match revised headline/branding

### Removed
- `public/images/og-home.svg` — replaced by PNG; all references updated to `og-home.png`

### Added
- **i18n: English + German language support** — EN/DE switcher in navbar (desktop) and mobile menu; language persists via `localStorage`; `document.lang` updated reactively per locale
- `src/locales/en.js` + `src/locales/de.js` — all user-facing strings centralised; German copy written for Germany-based recruiters
- `src/context/LangContext.jsx` — lightweight `LangProvider` + `useTranslation()` hook; dot-notation key resolver with EN fallback; no external i18n framework
- `src/components/LanguageSwitcher.jsx` — EN/DE pill toggle; `aria-pressed` state; visible on desktop header and inside mobile nav
- `navigation.css` — `.lang-switcher` and `.nav__end` styles; mobile breakpoint hides desktop switcher, shows it inside slide-out menu instead
- `src/hooks/useOgMeta.js` — fix pre-existing duplicate `image` key

### Changed
- All section components (`Hero`, `About`, `AIAugmentedSDLC`, `Skills`, `Projects`, `Certifications`, `Contact`, `Footer`, `CaseStudyModal`, `TimelineSwitch`, `BackToTop`) updated to consume `useTranslation()` — all visible strings now resolve from locale files
- `Navbar.jsx` — nav labels driven by locale keys; `nav__toggle` moved inside `nav__end` wrapper alongside the language switcher
- `App.jsx` — wraps `AppInner` with `LangProvider`; inner component pattern preserves hook call order

### Added (prior)
- `docs/ROADMAP.md` — mark `vercel.json`, Lighthouse CI, and "Last updated" case study timestamps as complete; update domain references from `roman-mazuryk.vercel.app` to `www.mazuryk.dev`; version history entry v1.1

### Changed
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
- "Last updated: Feb 2026" footer added to all 6 case study modals (AlphaRhythm, Flowlogics, LiveSurgery, Medintegro, Portfolio, SmartShooter)

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
- 6 case study components: LiveSurgery, SmartShooter, Flowlogics, Alphorythm, Portfolio, Medintegro
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
