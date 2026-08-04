# Roman Mazuryk - AI Workflow Consulting & Proof-of-Work Platform

> AI Systems Consultant for operations-heavy SMEs and regulated teams. This site presents practical AI workflow offers, public proof of work, MedTech/regulatory authority, and full-stack implementation evidence.

**Live:** [mazuryk.dev](https://www.mazuryk.dev)

---

## What This Repository Is

This repository powers `mazuryk.dev`: a public consulting and proof-of-work platform built around one commercial thesis:

> Start with a workflow audit, then build the right AI-assisted pilot.

The site supports two audiences:

- **SME and regulated-operations clients** who need practical help finding, scoping, and implementing useful AI workflows.
- **AI/product employers and collaborators** who need evidence of product judgment, systems thinking, and hands-on implementation ability.

---

## Positioning

I help operations-heavy SMEs and regulated teams turn fragmented workflows into practical AI-assisted systems: audits, prototypes, internal tools, SOP systems, dashboards, and implementation roadmaps.

The portfolio hierarchy is intentional:

1. **AI consulting** - the primary commercial pillar.
2. **MedTech and regulated operations** - authority proof from real implementation-heavy environments.
3. **Full-stack product delivery** - implementation proof that the ideas can become working systems.

---

## Productized Offers Represented

| Offer | Purpose | Site entry point |
|-------|---------|------------------|
| AI Workflow Opportunity Audit | Identify the right AI use case before building | [AI Consulting](https://www.mazuryk.dev/ai) |
| Prototype Sprint | Turn the selected workflow into a tangible pilot | [AI Consulting](https://www.mazuryk.dev/ai) |
| Knowledge & SOP System | Structure scattered knowledge, procedures, onboarding, and guidance | [AI Workflow Library](https://www.mazuryk.dev/ai-workflow) |
| Dashboard & Internal Tool | Improve visibility, ownership, reporting, and workflow state | [Build Proof](https://www.mazuryk.dev/fullstack) |

---

## What This Repository Proves

- AI consulting positioning translated into a live public website.
- A clear offer system for SME workflow discovery, prototyping, and implementation.
- MedTech and regulated-operations background used as credibility, not as a limiting niche.
- Full-stack implementation proof through React, Vite, structured content, deployment, and documentation.
- AI-assisted delivery discipline through PRD, architecture notes, roadmap, decisions log, changelog, and Git workflow.

---

## Main Routes

| Route | Role |
|-------|------|
| [`/ai`](https://www.mazuryk.dev/ai) | Productized AI consulting offers and first CTA |
| [`/ai-workflow`](https://www.mazuryk.dev/ai-workflow) | Practical workflow examples and reusable AI system patterns |
| [`/proof-of-work`](https://www.mazuryk.dev/proof-of-work) | Regulated and MedTech domain proof |
| [`/fullstack`](https://www.mazuryk.dev/fullstack) | Implementation proof: prototypes, dashboards, internal tools, and build capability |
| [`/about`](https://www.mazuryk.dev/about) | Background, operating principles, and role fit |
| [`/contact`](https://www.mazuryk.dev/contact) | Workflow discussion and collaboration entry point |

---

## Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | React 19 + Vite 7 | Fast builds, modern React, simple deployment |
| Styling | CSS modules by concern + custom properties | Precise control over a portfolio/consulting UI |
| Icons | lucide-react | Consistent product-style iconography |
| Analytics | Vercel Analytics | Lightweight feedback loop |
| Deployment | Vercel | Automatic deploys, CDN hosting, preview URLs |
| Documentation | Markdown in `/docs` | Public evidence of product and engineering discipline |

---

## Getting Started

**Prerequisites:** Node.js >= 18

```bash
git clone https://github.com/romahawk/portfolio-react.git
cd portfolio-react
npm install
npm run dev
npm run build
npm run lint
```

---

## Project Structure

```text
src/
  components/          React page and section components
  components/case-studies/
                       Detailed project and proof components
  data/                Static content and workflow examples
  hooks/               Metadata, language, and UI hooks
  locales/             English and German copy
  assets/css/          Component-scoped CSS

docs/
  PRD.md               Product requirements and target audiences
  ARCHITECTURE.md      System design and key trade-offs
  ROADMAP.md           Consulting-first site roadmap
  DECISIONS_LOG.md     Architectural and product decisions

public/
  images/              Profile, proof, and Open Graph assets
```

---

## Documentation

| Doc | Purpose |
|-----|---------|
| [PRD](docs/PRD.md) | Why the site exists, who it serves, and what it must prove |
| [Architecture](docs/ARCHITECTURE.md) | Static site architecture, content structure, and trade-offs |
| [Roadmap](docs/ROADMAP.md) | Current consulting-first improvement plan |
| [Decisions Log](docs/DECISIONS_LOG.md) | Decision history and implementation rationale |
| [Changelog](CHANGELOG.md) | Visible history of shipped improvements |

---

## Workflow

All meaningful changes should follow:

```text
Issue or task -> branch -> focused change -> build/lint -> PR -> deploy
```

The repository is not only a codebase. It is part of the proof: it should show how I think, document, build, and iterate.

---

## Next Improvements

- Add README screenshots for the homepage, AI offer section, AI workflow library, and proof-of-work pages.
- Update GitHub repository topics around AI consulting, workflow automation, internal tools, MedTech, and regulated operations.
- Keep documentation aligned with the current commercial positioning as the offers evolve.
