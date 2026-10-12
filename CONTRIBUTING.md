# Contributing

This repo follows **AI Production OS v1** workflow discipline: every change goes through Issue → PR → Deploy.

---

## Branch Naming

```
feature/<short-description>      # new capability
fix/<short-description>          # bug fix
chore/<short-description>        # tooling, docs, config
refactor/<short-description>     # internal restructure, no behavior change
```

Examples:
```
feature/add-vercel-analytics
fix/og-image-absolute-url
chore/add-docs-folder
refactor/case-study-data-layer
```

---

## Commit Message Rules

Format: `<type>: <short summary in present tense>`

Types: `feat`, `fix`, `chore`, `refactor`, `docs`, `style`, `test`

```bash
# Good
feat: add Vercel Analytics integration
fix: use absolute URL for OG image meta tag
chore: add GitHub issue and PR templates
docs: add PRD, Architecture, Roadmap, Decisions Log
refactor: extract case study content to data files

# Bad
update stuff
WIP
fixed it
```

Rules:
- Present tense ("add" not "added")
- No period at end
- Max 72 characters on the summary line
- Add body paragraph if the why is not obvious

---

## Pull Request Process

1. **Create an issue first** — no PR without a linked issue
2. **Branch from `main`** — always `git checkout -b <type>/<description> main`
3. **Open one PR, straight into `main`** — there is no `dev` branch. Use `gh pr create --base main --body-file <file>` with the template filled in (never `--fill`), or the GitHub UI with `main` as the base
4. **Fill the PR template** — every section, including "How to test" steps on the Vercel preview and what was **not** tested
5. **Run before submitting:**
   ```bash
   npm run lint    # must exit 0
   npm run build   # must exit 0
   ```
6. **Test on mobile** — at minimum, check on iOS Safari or Android Chrome
7. **Update CHANGELOG.md** — add entry under `[Unreleased]`
8. **Update docs if needed** — if you changed architecture or scope, update `docs/`
9. **Add a demo artifact** — screenshot or "n/a — chore only"
10. **Merge to `main` when CI and Lighthouse CI are green** — squash merge, then delete the branch. Never push more work to a branch whose PR already merged

---

## Labels

| Label | Use for |
|-------|---------|
| `feature` | New capability or visible improvement |
| `bug` | Broken behavior or regression |
| `chore` | Tooling, config, documentation, dependency updates |
| `refactor` | Internal restructure with no behavior change |
| `docs` | Documentation-only changes |
| `accessibility` | A11y improvements |
| `performance` | Speed or build size improvements |
| `seo` | SEO, meta tags, sitemap changes |

---

## Release Process

1. Collect all `[Unreleased]` CHANGELOG entries
2. Create a new version section: `## [X.Y.Z] — YYYY-MM-DD`
3. Merge to `main`
4. Vercel auto-deploys
5. Tag the release: `git tag vX.Y.Z && git push --tags`

**Versioning rules:**
- `MAJOR` — complete redesign or breaking architecture change
- `MINOR` — new section, new case study, significant new feature
- `PATCH` — bug fix, copy update, style tweak, chore

---

## Scope Discipline

Before starting work, ask:
1. Is this in the current sprint? (Check `docs/ROADMAP.md`)
2. Is this in the freeze list? (If yes — stop, create a future roadmap issue instead)
3. Can this be done in < 4 hours? (If no — break it into smaller issues)
4. Does it have a clear Definition of Done? (If no — define it before starting)
