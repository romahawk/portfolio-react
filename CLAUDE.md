# CLAUDE.md — Project Context for Claude Code Sessions

This file is read automatically at the start of every Claude Code session.
It gives you the project state, conventions, and current sprint so you can orient in < 60 seconds.

---

## What This Project Is

Personal portfolio + proof-of-work site for Roman Mazuryk (Technical PM / Founder-Operator).
Live: https://roman-mazuryk.vercel.app/

**Not a client site. Not a blog. Not a CMS project.**
It is a static SPA that proves product leadership through case studies and build discipline.

---

## Stack at a Glance

- **Framework:** React 19 + Vite 7 (no router, no state manager)
- **Styling:** Pure CSS with custom properties — 16 files in `src/assets/css/`
- **Data:** Static JS files in `src/data/` — no API calls
- **Deploy:** Vercel, auto-deploy on push to `main`
- **Analytics:** Vercel Analytics (`<Analytics />` in `App.jsx`)

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
```

Present tense. No period. Max 72 chars on first line.
Always update `CHANGELOG.md` under `[Unreleased]` in the same commit.

---

## Architecture Rules — Do Not Violate Without an ADR

1. No `import * as X from "lucide-react"` — kills tree-shaking. Use named imports + static lookup map.
2. Case study components must be `React.lazy()` — they are modal-only, never needed on first load.
3. New data-driven icons must be added to the consuming component's lookup map.
4. No new dependencies without a documented reason.
5. No TypeScript migration mid-sprint (it's planned for Week 9–10 per ROADMAP).

---

## Freeze List — Do Not Touch

- CSS → Tailwind migration
- React Router introduction
- CMS / backend / database
- Redux / Zustand
- Blog section

See `docs/ROADMAP.md` for full freeze list with rationale.

---

## Current Lighthouse Scores (last verified 2026-02-26)

| Category | Score |
|----------|-------|
| Performance | 99 |
| Accessibility | 100 |
| Best Practices | 96 |
| SEO | 100 |

Protect these. Run Lighthouse before merging any change that touches CSS, images, or JS imports.

---

## How to Orient at Session Start (60 seconds)

**Step 1 — Check what was last shipped:**
```bash
git log --oneline -5
```

**Step 2 — Check what's in progress:**
```bash
git branch -a | grep -v remotes
```
Any branch that isn't `main` or `master` is work in progress.

**Step 3 — Read the open GitHub issue or the last issue comment.**
The issue comment is the "parking note" — it says exactly where the last session ended and what the next action is.

**Step 4 — If no issue exists, check `docs/ROADMAP.md`:**
Find the current week. The first unchecked item is your next issue to create.

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

The last step (PARK) is what makes the next ORIENT instant.

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
| Design tokens | `src/assets/css/main.css` (:root block) |
