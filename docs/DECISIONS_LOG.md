# Architectural Decisions Log
## mazuryk.dev - AI Consulting and Proof-of-Work Platform

**Format:** Lightweight ADR (Architecture Decision Record)
**Last Updated:** 2026-08-04
**Status:** Active

---

## ADR-001: Lightweight Routing Without a Routing Library

**Date:** 2025-11, revised 2026-08-04
**Status:** Accepted
**Decider:** Roman Mazuryk

### Context
The original portfolio began as a single-page proof-of-work site. It later evolved into a multi-route consulting and proof platform with `/ai`, `/ai-workflow`, `/proof-of-work`, `/fullstack`, `/about`, and `/contact` routes.

The question is whether to introduce React Router or a heavier framework.

### Decision
Keep a lightweight path resolver in `App.jsx` and generate static HTML entries for major routes through Vite.

### Consequences
- Keeps the architecture simple and understandable.
- Avoids adding routing dependency and migration work before it is necessary.
- Supports current route-specific page rendering and social preview needs.
- Requires manual care when adding a new major route.
- If route complexity grows, React Router or a static/SSR framework can be reconsidered.

---

## ADR-002: Static Content First, No CMS Yet

**Date:** 2025-11, revised 2026-08-04
**Status:** Accepted
**Decider:** Roman Mazuryk

### Context
The site needs frequent positioning and proof updates, but it is still a solo-founder site. A CMS would make editing easier but would add operational overhead and another dependency.

### Decision
Keep content in React components, locale files, and static data modules such as `src/data/aiWorkflows.js`.

### Consequences
- Content is version-controlled and reviewable.
- Changes produce visible GitHub proof of iteration.
- No CMS cost, login, schema, or API dependency.
- Non-technical editing is not optimized.
- A CMS or MDX layer can be added later if publishing volume justifies it.

---

## ADR-003: Pure CSS With Custom Properties

**Date:** 2025-11
**Status:** Accepted
**Decider:** Roman Mazuryk

### Context
The site needs a distinctive portfolio/consulting visual system, responsive layouts, dark UI, cards, proof sections, and precise control over typography and spacing.

### Decision
Use plain CSS organized by concern, with custom properties for shared design tokens.

### Consequences
- No styling framework dependency.
- CSS is transparent and easy to inspect in GitHub.
- Design can remain highly tailored to the consulting/proof experience.
- Requires discipline to prevent CSS sprawl.
- A design-system extraction is deferred until repetition becomes painful.

---

## ADR-004: Component-Level State And Small Contexts Only

**Date:** 2025-11, revised 2026-08-04
**Status:** Accepted
**Decider:** Roman Mazuryk

### Context
The site has limited UI state: page resolution, nav state, theme, language, scroll reveal behavior, and metadata updates.

### Decision
Use local component state plus focused hooks/contexts (`LangProvider`, `useTheme`, `useScrollReveal`, `useOgMeta`). Do not add Redux, Zustand, or a broad app store.

### Consequences
- State remains close to the UI that owns it.
- The app remains easy to reason about.
- No global state dependency or boilerplate.
- If future product features add logged-in users or editable data, this decision should be revisited.

---

## ADR-005: Documentation As Public Proof Of Work

**Date:** 2026-02-26, revised 2026-08-04
**Status:** Accepted
**Decider:** Roman Mazuryk

### Context
The repository is not only a codebase. It is part of the trust layer for AI consulting clients and AI/product employers. Stale or missing documentation weakens that proof.

### Decision
Maintain a small documentation set:

- `README.md` for public repo positioning
- `docs/PRD.md` for product intent and audiences
- `docs/ARCHITECTURE.md` for system structure and trade-offs
- `docs/ROADMAP.md` for business-aligned evolution
- `docs/DECISIONS_LOG.md` for key decisions

### Consequences
- GitHub becomes evidence of thinking, not only source code.
- The docs support both consulting entrepreneurship and AI-related employment roles.
- Documentation must be updated when positioning changes.
- Over-documentation should be avoided; each doc must have a clear job.

---

## ADR-006: Vite Over Next.js For Current Phase

**Date:** 2025-11, revised 2026-08-04
**Status:** Accepted
**Decider:** Roman Mazuryk

### Context
The site is mostly static, with no authenticated product, backend data, or dynamic server-rendered experience. Next.js would add routing and metadata advantages but also a migration and operational cost.

### Decision
Continue with Vite and static Vercel deployment for the current phase.

### Consequences
- Fast local development and simple deployment.
- Low operational complexity.
- Good enough for positioning, proof, and first-client validation.
- Route metadata requires static entries and explicit maintenance.
- If a productized audit tool emerges, the architecture can be reconsidered.

---

## ADR-007: Named Lucide Imports And Manual Chunking

**Date:** 2026-02-26
**Status:** Accepted
**Decider:** Roman Mazuryk

### Context
Wildcard icon imports and large bundles weakened performance. Case study and proof pages should not slow the first impression.

### Decision
Use named icon imports and Vite manual chunking for React vendor code.

### Consequences
- Better tree-shaking.
- Smaller initial JavaScript payload.
- More explicit icon maintenance when new icons are added.
- Good fit for a static proof site where performance matters for credibility.

---

## ADR-008: Lazy-Load Heavy Proof Components Where Useful

**Date:** 2026-02-26
**Status:** Accepted
**Decider:** Roman Mazuryk

### Context
Detailed proof and case study content is important, but it should not all load before the visitor has chosen to inspect it.

### Decision
Lazy-load modal-only or heavier proof components where appropriate.

### Consequences
- Faster initial load.
- Proof remains available on demand.
- Slight async delay when opening some detailed content.
- New proof components should consider whether they belong in the initial bundle.

---

## ADR-009: Reposition Site Around AI Consulting, Not Recruiter-Only Portfolio

**Date:** 2026-08-04
**Status:** Accepted
**Decider:** Roman Mazuryk

### Context
The original site was optimized for technical PM / senior role credibility. The business direction changed toward AI consulting and implementation for operations-heavy SMEs, with AI-related employment roles as a parallel credibility track.

### Decision
Reframe the site and repository around:

> AI Systems Consultant for operations-heavy SMEs and regulated industries.

Use the hierarchy:

1. AI as primary commercial pillar.
2. MedTech/regulatory experience as authority proof.
3. Full-stack delivery as implementation proof.

### Consequences
- `/ai` and `/ai-workflow` become primary commercial surfaces.
- `/proof-of-work` and MedTech material support authority rather than owning the whole identity.
- `/fullstack` proves ability to build pilots and internal tools.
- README, PRD, roadmap, architecture, and decisions docs must stay aligned with this positioning.

---

## ADR-010: Audit-First Offer Model

**Date:** 2026-08-04
**Status:** Accepted
**Decider:** Roman Mazuryk

### Context
SMEs often want AI but do not know which workflow is worth automating. Jumping directly into implementation risks building the wrong thing.

### Decision
Lead with the AI Workflow Opportunity Audit, then move to Prototype Sprint, Knowledge & SOP System, or Dashboard & Internal Tool depending on the workflow.

### Consequences
- The first conversion path is lower-risk and easier to understand.
- The site can publish workflow examples without overclaiming client outcomes.
- Consulting revenue can fund later product discovery.
- Public proof should show workflow maps, opportunity matrices, pilot scopes, and implementation roadmaps.

---

## ADR-011: Keep CT-T Private Until Permission; Use Medintegro As Public Proof

**Date:** 2026-08-04
**Status:** Accepted
**Decider:** Roman Mazuryk

### Context
CT-T is the first intended validation prospect, but there is no real data or permission to present them publicly as a use case. Public proof should not imply client approval or results that do not exist.

### Decision
Keep CT-T as private validation context. Use Medintegro and Medintegro-inspired patterns as public proof where data boundaries are safe.

### Consequences
- Public messaging stays credible and ethical.
- The site can still show relevant proof without inventing client outcomes.
- CT-T learnings can inform internal templates and future offers until permission exists.

---

## ADR-012: Lightweight English/German Localization

**Date:** 2026-08-04
**Status:** Accepted
**Decider:** Roman Mazuryk

### Context
Roman is Germany-based and wants the site to support both international AI/product opportunities and local/regional prospects. A full i18n framework is not yet necessary.

### Decision
Use a lightweight language context and locale files for English and German.

### Consequences
- German copy can support local credibility.
- English remains the primary international proof language.
- No external i18n dependency is needed.
- Locale maintenance must be part of copy changes.