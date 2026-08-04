# Product Requirements Document (PRD)
## mazuryk.dev - AI Workflow Consulting & Proof-of-Work Platform

**Version:** 2.0
**Last Updated:** 2026-08-04
**Status:** Active
**Owner:** Roman Mazuryk

---

## Product Thesis

Operations-heavy SMEs and regulated teams are interested in AI, but many do not know which workflow is worth automating first. They often have scattered documentation, manual handovers, spreadsheet-based tracking, slow intake processes, and unclear ownership across tools and people.

`mazuryk.dev` exists to make Roman's current positioning legible:

> AI Systems Consultant for operations-heavy SMEs and regulated industries.

The site must show that Roman can identify a workflow problem, structure the opportunity, assess risk, define a useful pilot, and support implementation with product and full-stack delivery capability.

---

## Target Users

### Primary: SME and regulated-operations buyers

Examples:

- owner-managed SMEs
- operations leaders
- technical service companies
- MedTech, HealthTech, logistics, and B2B service teams
- founders or managers with manual workflows and unclear AI opportunities

They need to answer:

- What kind of workflow problem can Roman help with?
- Is the first step small, practical, and low-risk?
- Can he understand real operational constraints?
- Can this lead to a useful prototype or implementation?

### Secondary: AI/product employers and collaborators

Examples:

- startup and scaleup founders
- AI product teams
- product leaders in mid-market or corporate environments
- hiring managers for AI Product Manager, Technical Product Manager, AI Implementation, or Product Operations roles

They need to answer:

- Can Roman connect business workflows with AI system design?
- Does he have implementation credibility, not only strategy language?
- Does his MedTech and regulated-operations experience transfer to complex product environments?
- Is there public proof of how he thinks and ships?

---

## Positioning Hierarchy

1. **AI consulting is the primary commercial pillar.**
   The site should lead with workflow audits, AI-assisted systems, prototypes, internal tools, SOP systems, and dashboards.

2. **MedTech and regulated operations are the authority layer.**
   They prove judgment in high-friction environments where documentation, handover, stakeholders, review points, and risk boundaries matter.

3. **Full-stack delivery is the implementation proof.**
   It shows that the consulting work can become concrete prototypes, dashboards, automations, and deployed systems.

---

## Core Offers

| Offer | User Problem | Expected Output |
|-------|--------------|-----------------|
| AI Workflow Opportunity Audit | The team knows work is slow or fragmented, but does not know which AI use case is worth building | Workflow review, bottleneck map, opportunity matrix, feasibility/risk notes, recommended pilot, roadmap |
| Prototype Sprint | The team has selected an opportunity but needs a tangible pilot | Internal assistant, automation, workflow dashboard, decision-support prototype, or reviewable proof-of-concept |
| Knowledge & SOP System | Knowledge is scattered across documents, people, emails, and procedures | Structured SOPs, onboarding material, guidance flows, reusable documentation logic |
| Dashboard & Internal Tool | Work is tracked in spreadsheets, emails, or disconnected systems | Shared workflow visibility, status tracking, ownership, reporting, and operational state |

---

## Core Visitor Journey

1. **Land** - Understand in 10 seconds that Roman helps SMEs and regulated teams with practical AI workflow systems.
2. **Select path** - Choose AI consulting, workflow examples, regulated proof, full-stack proof, about, or contact.
3. **Understand offer** - See the audit-first approach and the four productized offers.
4. **Validate trust** - Review MedTech/regulatory proof and implementation-heavy project examples.
5. **Inspect build capability** - See full-stack and AI-assisted delivery evidence.
6. **Convert** - Discuss one workflow, book an audit, or start a relevant role/collaboration conversation.

---

## Success Criteria

### Commercial clarity

- Homepage and `/ai` clearly communicate the AI Workflow Opportunity Audit.
- CTAs consistently invite a workflow discussion, audit request, or prototype sprint conversation.
- MedTech proof supports the AI consulting offer instead of replacing it.
- Full-stack proof demonstrates implementation capability.

### Career credibility

- Hiring managers can understand Roman's fit for AI product, technical product, implementation, and product operations roles.
- The site shows systems thinking, not only visual portfolio polish.
- Repository documentation supports the public positioning.

### Technical quality

- Site builds and deploys reliably.
- Core routes have correct metadata and Open Graph previews.
- Mobile and desktop layouts remain clean.
- Documentation stays current with the live positioning.

---

## In Scope

- Multi-route public website for positioning, proof, and conversion.
- AI consulting offer page.
- AI workflow example library.
- Regulated and MedTech proof section.
- Full-stack implementation proof section.
- About/contact pages supporting both consultancy and AI-related employment tracks.
- English/German content where useful for Germany-based opportunities.
- Documentation that explains product intent, architecture, roadmap, and decisions.

---

## Non-Goals

- No paid checkout or automated booking flow until offer validation justifies it.
- No full CMS until content update frequency becomes a real pain.
- No generic blog/content hub inside this repo unless it directly supports the consulting offer.
- No complex backend unless an interactive productized audit tool becomes a validated requirement.
- No broad SaaS build before consulting demand and repeated workflow problems are validated.

---

## Acceptance Criteria

| # | Criterion | How to Verify |
|---|-----------|---------------|
| 1 | Homepage communicates AI Systems Consultant positioning | Manual review in desktop and mobile |
| 2 | `/ai` explains the four offers and audit-first approach | Manual review |
| 3 | `/ai-workflow` shows practical SME and regulated workflow patterns | Manual review |
| 4 | `/proof-of-work` frames MedTech as authority proof | Manual review |
| 5 | `/fullstack` frames technical projects as implementation proof | Manual review |
| 6 | Contact CTAs support workflow discussion and audit/prototype interest | Manual review |
| 7 | Metadata and social previews match the AI consulting positioning | Inspect page source / social preview tools |
| 8 | Build succeeds | `npm run build` |
| 9 | Lint succeeds | `npm run lint` |
| 10 | README and docs match the live positioning | Manual docs review |

---

## Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| Site becomes too broad across AI, MedTech, full-stack, and roles | Diluted positioning | Keep AI as primary, MedTech as authority, full-stack as proof |
| MedTech proof dominates and excludes general SMEs | Lower consulting relevance | Use MedTech as credibility, not the headline identity |
| Offers remain abstract without public examples | Weak conversion | Publish SME workflow patterns and Medintegro-inspired case material |
| Documentation drifts from live site | GitHub proof weakens | Update README/PRD/Roadmap during each positioning shift |
| Building starts before offer validation | Wasted effort | Use audit-first approach and validate with real conversations |
