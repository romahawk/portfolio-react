# Product Requirements Document (PRD)
## Roman Mazuryk — Portfolio & Proof-of-Work Site

**Version:** 1.0
**Last Updated:** 2026-02-26
**Status:** Active
**Owner:** Roman Mazuryk

---

## Problem

Talented solo founders and career-transitioners are routinely filtered out of senior IC and PM roles because their online presence reads as "impressive background, unclear current capability." Recruiters and CTOs evaluating candidates need to see *how* someone thinks and ships — not just *what* they built.

Roman Mazuryk has 10+ years of real operator and delivery experience in regulated MedTech and B2B environments, including system integrations, product launches, and platform architecture. That experience is not legible from a standard resume or LinkedIn profile. The gap is a credibility artifact that proves technical product leadership at depth.

---

## Target User

**Primary:** Technical recruiter or CTO/VP of Product evaluating Roman for a remote-first Tech PM, Senior PM, or Founding PM role at a B2B SaaS or regulated-industry company.

**Secondary:** Fellow founders or collaborators assessing Roman as a potential co-founder, advisor, or technical partner.

**Not targeted:** Clients, freelancers, or mass consumer audiences.

---

## Core Loop

1. **Land** — Hero section delivers a 10-second pitch that establishes credentials and differentiation (MedTech operator → Technical PM)
2. **Signal** — AI-Augmented SDLC section shows systems thinking and methodology (not just a list of tools)
3. **Validate** — Case studies prove depth: problem definition → solution design → stack choices → measurable results
4. **Anchor** — Skills + Timeline sections establish progression arc and capability breadth
5. **Convert** — Contact section enables low-friction outreach (email copy, LinkedIn, location context)

---

## Killer Feature

A live-deployed, discipline-documented portfolio that proves technical product leadership through case studies, an AI-augmented SDLC framework, and a traceable build history — not just a visually polished site, but evidence of how Roman thinks and ships.

---

## MVP Scope

### In scope:
- [ ] Hero section with clear positioning statement and CTA
- [ ] About section with professional narrative
- [ ] AI-Augmented SDLC framework visualization
- [ ] Career timeline (summary + full, toggling)
- [ ] Skills taxonomy (PM, systems, tech stack, soft, leverage)
- [ ] Project grid with category filters and case study modals (6 tech + 11 MedTech)
- [ ] Certifications section
- [ ] Contact section with email copy and social links
- [ ] Responsive design (mobile + desktop)
- [ ] Accessibility (WCAG AA: keyboard nav, screen reader, reduced motion)
- [ ] SEO metadata (title, description, Open Graph, Twitter Card)
- [ ] Live Vercel deployment with custom domain

### Production-grade additions (this sprint):
- [ ] `sitemap.xml` and `robots.txt` in `/public/`
- [ ] `docs/` folder with PRD, Architecture, Roadmap, Decisions Log
- [ ] `CHANGELOG.md` tracking visible changes
- [ ] GitHub issue and PR templates
- [ ] Absolute OG image URL (critical for LinkedIn previews)

---

## Non-Goals

- No CMS or backend content management (data stays in `/src/data/`)
- No user auth, database, or server-side logic
- No blog, commenting system, or newsletter
- No client acquisition funnel or pricing page
- No TypeScript migration (deferred to a future sprint)
- No design system / component library extraction

---

## Acceptance Criteria for MVP

| # | Criterion | How to Verify |
|---|-----------|---------------|
| 1 | Site loads in < 2s on mobile 4G | Lighthouse Performance ≥ 90 |
| 2 | All 6 case study modals open and render correctly | Manual QA on Chrome + Firefox + Safari |
| 3 | Contact email copy button works on mobile | Manual QA on iOS Safari |
| 4 | No console errors in production build | `npm run build && npm run preview` |
| 5 | All nav links scroll to correct sections | Manual QA |
| 6 | OG image renders on LinkedIn link preview | Use LinkedIn Post Inspector |
| 7 | Site is keyboard-navigable end-to-end | Tab through all interactive elements |
| 8 | Passes ESLint with no errors | `npm run lint` exits 0 |
| 9 | `sitemap.xml` is accessible at `/sitemap.xml` | Visit in browser |
| 10 | README accurately describes setup and deploy | Follow README steps in fresh clone |

---

## Risks

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Case study content gets stale | High | Medium | Add "Last updated" dates to each case study component |
| OG image not rendering on LinkedIn (relative URL) | High | High | Use absolute URL in `index.html` meta tag |
| No analytics = no feedback loop | High | Medium | Add Plausible or Vercel Analytics in Week 3 |
| Mobile nav regression after style changes | Medium | Medium | Add visual regression test or manual QA checklist |
| Scope creep into blog/CMS features | Medium | High | Enforce non-goals list; route new ideas to backlog |
| Vercel cold start on free tier | Low | Low | Static site — no cold start risk |
