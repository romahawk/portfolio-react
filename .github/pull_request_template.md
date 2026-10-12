## What and why

<!-- One or two sentences: what changed, and why it matters for a visitor (recruiter, client). -->

Closes #

## Changes

<!-- The changes a reviewer should know about, grouped by area: copy, layout, routing, CSS, data, docs. -->

-

## Verification

<!-- CI runs lint, the consistency check, build and Lighthouse on every PR to main.
     Tick only what you actually ran. Strike through (~~ ~~) what does not apply. -->

- [ ] `npm run lint` exits 0
- [ ] `npm run build` exits 0 (this runs `scripts/check-consistency.mjs` first)
- [ ] CI green on this PR (CI + Lighthouse CI)
- [ ] Vercel preview opened and checked, not just localhost

## How to test

<!-- Steps on the Vercel preview that someone unfamiliar can follow. Name the pages and anchors. -->

1. Open the Vercel preview from the checks below
2.
3.

**Core loop:** home → Work → a proof link → Contact (email copy, CV download) still works.

**Not tested:** <!-- Say what you did NOT check: a browser, a viewport, a language, a redirect. -->

## Quality gates

- [ ] Mobile checked (iOS Safari or Android Chrome, or a 375px viewport)
- [ ] No console errors in the preview
- [ ] Accessibility kept: landmarks, `aria-label` on icon-only controls, focus rings, `prefers-reduced-motion`
- [ ] No new npm dependency, or the reason is given in Notes
- [ ] Lucide icons use named imports and are registered in the component's `ICONS` map
- [ ] Redirects in `vercel.json` checked if a route was added, moved or removed

## Docs

- [ ] `CHANGELOG.md` updated under `[Unreleased]`
- [ ] `docs/` / `CLAUDE.md` updated if architecture, routing or scope changed

## Screenshots

<!-- Before and after for any visible change, desktop and mobile. "n/a: docs/chore only" otherwise. -->

## Notes for review

<!-- Trade-offs, assumptions, follow-up work, anything you are unsure about. -->
