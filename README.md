# Roman Mazuryk — Portfolio & Proof-of-Work Site

> Technical Product Manager and Founder-Operator with 10+ years in MedTech and regulated B2B environments. This portfolio proves product leadership through documented case studies, an AI-augmented SDLC framework, and a disciplined build history.

**Live:** [roman-mazuryk.vercel.app](https://roman-mazuryk.vercel.app)

---

## What This Is

A single-page proof-of-work portfolio that demonstrates:

- **6 in-depth case studies** — problem → solution → stack → results
- **AI-Augmented SDLC framework** — how I use AI to accelerate product delivery without losing discipline
- **Career timeline** — MedTech operator (2012) → Technical PM / Founder-Operator (2025)
- **Skills taxonomy** — PM, systems, tech stack, soft skills, leverage patterns
- **Certifications** and contact

---

## Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | React 19 + Vite 7 | Fast builds, modern React, no CRA bloat |
| Styling | Pure CSS + custom properties | Full control, no class noise, great browser support |
| State | React `useState` + localStorage | No shared cross-component state needed |
| Routing | Hash-based anchor links | Single scrollable page, no router bundle |
| Deploy | Vercel | Zero config, instant CDN, auto-deploy on push |

---

## Getting Started

**Prerequisites:** Node.js ≥ 18

```bash
# Clone the repo
git clone https://github.com/romahawk/portfolio-react.git
cd portfolio-react

# Install dependencies
npm install

# Start dev server (localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint
npm run lint
```

---

## Project Structure

```
src/
├── components/          # All React components
│   ├── case-studies/    # 6 detailed case study components
│   └── ...              # Section components (Hero, About, Skills, etc.)
├── data/                # Static content (projects, skills, timeline)
├── hooks/               # Custom React hooks
└── assets/css/          # 16 component-scoped CSS files

docs/
├── PRD.md               # Product requirements and acceptance criteria
├── ARCHITECTURE.md      # System design and key trade-offs
├── ROADMAP.md           # 12-week outcome-based roadmap
└── DECISIONS_LOG.md     # Architectural decision records (ADRs)

public/
├── images/              # Profile photo and certificates
└── livesurgery/         # Standalone LiveSurgery demo page
```

---

## Documentation

| Doc | Purpose |
|-----|---------|
| [PRD](docs/PRD.md) | Problem, target user, MVP scope, acceptance criteria |
| [Architecture](docs/ARCHITECTURE.md) | System design, components, data flow, trade-offs |
| [Roadmap](docs/ROADMAP.md) | 12-week plan with weekly outcomes and DoD |
| [Decisions Log](docs/DECISIONS_LOG.md) | ADRs explaining every major technical choice |
| [Changelog](CHANGELOG.md) | Visible history of all shipped improvements |

---

## Contributing / Workflow

All changes follow Issue → PR → Deploy discipline. See [CONTRIBUTING.md](CONTRIBUTING.md) for branch naming, commit rules, and PR checklist.

---

## Deployment

Auto-deploys to Vercel on push to `main`. No manual steps required.

Build command: `npm run build`
Output directory: `dist/`
Node version: 18+

---

## Roadmap

See [docs/ROADMAP.md](docs/ROADMAP.md) for the full 12-week plan.

**Current sprint (Week 1–2):** Production-grade scaffolding — docs, workflow templates, SEO fixes, OG image fix.
