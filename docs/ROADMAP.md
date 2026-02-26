# Roadmap
## Roman Mazuryk — Portfolio & Proof-of-Work Site

**Version:** 1.0
**Last Updated:** 2026-02-26
**Horizon:** 12 weeks (3 months)

---

## Guiding Principles

1. **Ship visible improvements** — every week must produce a diff a recruiter can see
2. **Proof-of-work discipline** — every change must follow Issue → PR → Deploy
3. **Minimum viable everything** — prefer a shipped simple thing over a planned perfect thing
4. **Freeze the refactor itch** — no TypeScript migration, no Tailwind rewrite during active sprint

---

## Week 1–2: Stabilize + Production-Grade Scaffolding

**Outcome:** The repo looks and behaves like a professionally maintained production project. Documentation exists. Workflow infrastructure is in place. Regressions are caught before they ship.

### Issues
- [ ] `[CHORE]` Add `/docs/` folder with PRD, Architecture, Roadmap, Decisions Log
- [ ] `[CHORE]` Add GitHub issue templates (feature + bug) and PR template
- [ ] `[CHORE]` Add `CHANGELOG.md` and `CONTRIBUTING.md`
- [ ] `[BUG]` Fix OG image URL — change from relative `/images/profile.jpg` to absolute `https://roman-mazuryk.vercel.app/images/profile.jpg` in `index.html`
- [ ] `[CHORE]` Add `public/sitemap.xml` and `public/robots.txt`
- [ ] `[CHORE]` Update `README.md` with setup steps, deploy link, stack, screenshots
- [ ] `[CHORE]` Add `vercel.json` for explicit build configuration and headers

### Definition of Done
- [ ] `docs/` folder has all 4 files with substantive content
- [ ] GitHub repo has issue + PR templates visible when creating new issues
- [ ] `CHANGELOG.md` exists and has at least one entry
- [ ] OG image renders on LinkedIn Post Inspector
- [ ] `sitemap.xml` is accessible at `https://roman-mazuryk.vercel.app/sitemap.xml`
- [ ] `npm run build` exits 0, `npm run lint` exits 0
- [ ] README has a screenshot and a "Getting Started" section

### Demo Artifact Required
Screenshot of LinkedIn post preview showing OG image rendering correctly.

---

## Week 3–4: Signal Feature — Analytics + Performance Hardening

**Outcome:** You have a feedback loop. You know who visits, what they look at, and how long they stay. Site passes Lighthouse 90+ on all metrics.

### Issues
- [ ] `[FEATURE]` Add Vercel Analytics (zero-config, privacy-respecting, free tier)
- [ ] `[FEATURE]` Add Lighthouse CI to verify no regressions on build
- [ ] `[BUG]` Audit and fix any Lighthouse score < 90 (Performance, Accessibility, Best Practices, SEO)
- [ ] `[CHORE]` Add `<link rel="preload">` for profile image and above-the-fold fonts
- [ ] `[CHORE]` Verify all case study modals work on mobile (iOS Safari + Android Chrome)
- [ ] `[FEATURE]` Add "Last updated" timestamp to each case study component (visible in footer of modal)

### Definition of Done
- [ ] Vercel Analytics dashboard shows real visitor data
- [ ] Lighthouse score ≥ 90 on Performance, Accessibility, Best Practices, SEO
- [ ] All 6 case study modals tested on mobile — no layout breaks
- [ ] Profile image preloaded — no layout shift
- [ ] Each case study footer shows "Last updated: [Month YYYY]"

### Demo Artifact Required
Loom or screenshot: Lighthouse report showing 4x 90+ scores.

---

## Month 2 (Weeks 5–8): Capability Expansion

**Outcome:** Portfolio is feature-complete for senior PM job search. New case study added. Content is easier to update.

### Week 5–6: New Case Study + Content Refresh

**Outcome:** Add one new project or case study that is directly relevant to current job search focus (B2B SaaS / internal tools / regulated industry).

- [ ] `[FEATURE]` Add case study: [new project — to be determined based on active work]
- [ ] `[CHORE]` Refresh Skills section with any new tools/frameworks from active work
- [ ] `[FEATURE]` Add "Open to Work" availability banner (dismissible, toggleable)
- [ ] `[CHORE]` Update Timeline with any 2025–2026 entries

### Definition of Done
- [ ] New case study live in production
- [ ] Skills section reflects current stack
- [ ] Timeline is up-to-date through current month

### Demo Artifact Required
Screenshot of new case study modal with all sections populated.

---

### Week 7–8: Data-Driven Case Studies (Decoupled Content)

**Outcome:** Case study content extracted from JSX into data files, making it possible to update copy without touching component code.

- [ ] `[REFACTOR]` Define `CaseStudy` data schema (title, problem, solution, stack, results, lastUpdated)
- [ ] `[REFACTOR]` Migrate 2–3 case studies to data-driven rendering
- [ ] `[CHORE]` Update `ARCHITECTURE.md` to document new data layer

> **Note:** This is a refactor sprint. No new UI changes. Branch: `refactor/case-study-data-layer`.

### Definition of Done
- [ ] At least 2 case studies render from data files (not hardcoded JSX)
- [ ] Visual output is identical to before (no regression)
- [ ] Architecture doc updated

### Demo Artifact Required
Side-by-side diff showing old JSX component vs new data file + renderer.

---

## Month 3 (Weeks 9–12): Production Hardening + TypeScript Migration

**Outcome:** Repo is fully TypeScript, has E2E tests for the core loop, and is ready to be referenced in job applications as a production-grade example.

### Week 9–10: TypeScript Migration

- [ ] `[CHORE]` Add `tsconfig.json`, update Vite config for TypeScript
- [ ] `[REFACTOR]` Migrate `src/data/*.js` → `src/data/*.ts` with typed interfaces
- [ ] `[REFACTOR]` Migrate `src/hooks/*.js` → `src/hooks/*.ts`
- [ ] `[REFACTOR]` Migrate components in priority order: data-layer → hooks → leaf components → page components

### Definition of Done
- [ ] `npm run build` succeeds with zero TypeScript errors
- [ ] No `any` types in data layer or hooks
- [ ] All existing ESLint rules still pass

---

### Week 11–12: E2E Tests + Final Polish

- [ ] `[CHORE]` Add Playwright for E2E testing
- [ ] `[TEST]` Core loop test: land → open case study → close modal → click contact
- [ ] `[TEST]` Mobile nav test: open menu → click link → menu closes, section activates
- [ ] `[FEATURE]` Add print/PDF stylesheet for resume-style print view
- [ ] `[CHORE]` Record a Loom walkthrough for the README

### Definition of Done
- [ ] Playwright tests pass in CI
- [ ] Print view renders cleanly (optional but high-credibility)
- [ ] README has a Loom video link
- [ ] All CHANGELOG entries are current

---

## Freeze List (What Won't Be Touched)

These are explicitly out of scope for this 12-week roadmap:

| Item | Reason |
|------|--------|
| CMS integration (Contentful, Sanity) | Not needed until content updates become frequent pain |
| Blog / writing section | Separate product; don't conflate with portfolio |
| Dark/light mode toggle | Already dark-only; adding toggle is scope creep |
| React Router | Hash navigation works; no separate pages needed |
| Redux / Zustand | No shared state between sections |
| Tailwind CSS migration | 1,735 lines of clean CSS is working fine |
| Authentication | No user accounts needed |
| Backend / API | Static site is the right architecture |
| Multi-page routing | Single scrollable page is the UX model |
| Comment system | Not a blog |

---

## Version History

| Version | Date | Summary |
|---------|------|---------|
| 1.0 | 2026-02-26 | Initial roadmap created via AI Production OS v1 audit |
