import React, { useState } from "react";
import CaseStudyLinks from "../CaseStudyLinks.jsx";

const sprints = [
  {
    id: 1,
    title: "Sprint 1 - API v1 Hardening",
    goals: [
      "Read-only API for orders and current-user bootstrap",
      "Strict query validation and deterministic sorting",
      "RBAC-scoped payloads with stable pagination",
      "JSON-native error handling for frontend consumers",
    ],
    outcome:
      "FlowLogix gained a reliable application contract instead of coupling the UI directly to template-side data plumbing.",
    retro:
      "API discipline paid off early: later UI work moved faster because the payload shape stopped drifting.",
  },
  {
    id: 2,
    title: "Sprint 2 - Legacy Dashboard Modernization",
    goals: [
      "Server-aligned orders table with fixed pagination",
      "Search and sort UX built around operational scans",
      "Timeline visualization for ETD to ETA / ATA tracking",
      "KPI cards for transit, warehouse, delivered, and delay state",
    ],
    outcome:
      "Operations users got one screen for triage, not a spreadsheet plus chat-message workflow.",
    retro:
      "Timeline and table had to stay operationally deterministic; cosmetic polish only worked once the data behavior was stable.",
  },
  {
    id: 3,
    title: "Sprint 3 - Demo Safety and Environment Reliability",
    goals: [
      "Auto-seeded demo dataset with current dates",
      "Readonly demo protections across write-capable routes",
      "Auto-login entry flow and safer public landing behavior",
      "Health endpoint and startup race hardening for deployment",
    ],
    outcome:
      "The app became portfolio-safe and shareable without turning into a fake static prototype.",
    retro:
      "Demo mode had to behave like a real product, not a disconnected showcase.",
  },
  {
    id: 4,
    title: "Sprint 4 - Lifecycle Workflow Depth",
    goals: [
      "Warehouse intake records and stock positions",
      "Delivered tab and history",
      "Role-gated transitions across lifecycle",
      "Stockreport and operational audit visibility",
    ],
    outcome: "Lifecycle transitions are controlled and trackable end-to-end.",
    retro:
      "Guardrails around transitions matter more than raw CRUD volume in ops software.",
  },
  {
    id: 5,
    title: "Sprint 5 - Responsive UX Refinement",
    goals: [
      "Desktop-preserving responsive behavior for tablet and mobile",
      "No horizontal scroll in orders and timeline workflows",
      "Single-row mobile/tablet navbar with compact primary actions",
      "Adaptive timeline scale labels and improved onboarding tour layout",
    ],
    outcome:
      "The same operational dashboard now works across desktop, tablet, and mobile without collapsing into cramped overflow states.",
    retro:
      "Responsive work had to preserve desktop density while making mobile intentional, not merely smaller.",
  },
];

export default function FlowLogixCaseStudy() {
  const [sprintsOpen, setSprintsOpen] = useState(false);

  return (
    <section className="cs">
      <header className="cs__hero">
        <span className="cs__badge">Case Study - Logistics (Internal Systems)</span>
        <h1 className="cs__title">
          FlowLogix - API-Driven Supply Visibility and Lifecycle Control
        </h1>
        <p className="cs__lead">
          A logistics operations platform that centralizes orders, warehouse intake,
          and delivered transitions into one role-safe system of record. Built to
          reduce status drift, surface ETA risk early, and give teams a deterministic
          dashboard instead of spreadsheet coordination.
        </p>
        <div className="cs__meta" aria-label="Case study highlights">
          <div className="cs__meta-item"><strong>Scope</strong> Operations system with API-first lifecycle control</div>
          <div className="cs__meta-item"><strong>Focus</strong> Risk visibility, demo safety, responsive ops UX</div>
          <div className="cs__meta-item"><strong>Format</strong> Internal tool case study with shipped workflow depth</div>
        </div>
      </header>

      <div id="founder-lens" className="cs__card cs__card--insight">
        <div className="cs__eyebrow">Strategic framing</div>
        <h2 className="cs__h2">Founder Lens</h2>
        <ul className="cs__list">
          <li>
            <strong>Product thesis</strong>: logistics teams lose speed and
            confidence when order lifecycle data is fragmented across tools; one
            operational layer cuts coordination drag and reduces reporting ambiguity.
          </li>
          <li>
            <strong>ICP + buyer/user</strong>: SMB and mid-market import and
            distribution teams; buyers are operations leadership, users are
            operations managers and warehouse leads.
          </li>
          <li>
            <strong>Wedge + why now</strong>: start with shipment risk visibility,
            lifecycle transitions, and public-demo-safe ops tooling where missed ETAs
            immediately impact customer commitments.
          </li>
          <li>
            <strong>Moat</strong>: workflow depth in lifecycle states, strict API
            behavior, and role-gated operational consistency across orders,
            warehouse, and delivered views.
          </li>
        </ul>
      </div>

      <div className="cs__grid cs__grid--two">
        <div id="problem-context" className="cs__card">
          <div className="cs__eyebrow">Problem space</div>
          <h2 className="cs__h2">Problem & Context</h2>
          <p className="cs__p">
            Teams were tracking shipments across spreadsheets and ad-hoc messages.
            Updates drifted, ETAs were missed, and managers could not see risk
            early, creating manual follow-ups and firefighting.
          </p>
        </div>
        <div className="cs__card cs__card--cool">
          <div className="cs__eyebrow">User map</div>
          <h2 className="cs__h2">Users / Stakeholders</h2>
          <ul className="cs__personas">
            <li>
              <div className="cs__persona-name">Operations Manager</div>
              <div className="cs__persona-role">Risk & timing visibility</div>
              <p className="cs__p">
                Needs KPIs and a fast view of delays and near-ETA shipments.
              </p>
            </li>
            <li>
              <div className="cs__persona-name">Warehouse Lead</div>
              <div className="cs__persona-role">Intake and lifecycle execution</div>
              <p className="cs__p">
                Wants fast intake, stock tracking, and delivery confirmations.
              </p>
            </li>
            <li>
              <div className="cs__persona-name">Account Manager</div>
              <div className="cs__persona-role">Reporting</div>
              <p className="cs__p">
                Requires filtered operational views and reliable shared status.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div id="constraints" className="cs__card">
        <div className="cs__eyebrow">Delivery guardrails</div>
        <h2 className="cs__h2">Constraints</h2>
        <ul className="cs__list">
          <li>
            <strong>RBAC</strong>: role-gated actions and readonly demo behavior
            must prevent accidental writes.
          </li>
          <li>
            <strong>Data quality</strong>: strict validation and date normalization
            are required to keep the timeline trustworthy.
          </li>
          <li>
            <strong>Adoption</strong>: non-technical users need clarity, speed, and
            deterministic behavior.
          </li>
          <li>
            <strong>Public demo</strong>: seeded, readonly demo mode must stay
            realistic without exposing real operational data.
          </li>
        </ul>
      </div>

      <div id="product-decisions" className="cs__card cs__card--warm">
        <div className="cs__eyebrow">Product bets</div>
        <h2 className="cs__h2">Key Product Decisions I Owned</h2>
        <ul className="cs__list">
          <li>
            Moved the product to an <strong>API-first contract</strong> so the UI
            could evolve without backend ambiguity.
          </li>
          <li>
            Designed around <strong>daily ops decisions</strong> such as risk,
            overdue shipments, and lifecycle transitions, not raw data dumps.
          </li>
          <li>
            Made <strong>timeline visualization</strong> the core risk surface,
            backed by strict date handling and deterministic sorting.
          </li>
          <li>
            Added <strong>readonly demo mode with seeded data</strong> so the app
            can be shared publicly without faking the workflow.
          </li>
          <li>
            Protected desktop density while driving <strong>responsive UX
            refinement</strong> for tablet and mobile operations use.
          </li>
        </ul>
      </div>

      <div id="architecture" className="cs__card cs__card--cool">
        <div className="cs__eyebrow">System design</div>
        <h2 className="cs__h2">Architecture & Technical Leverage</h2>
        <ul className="cs__list">
          <li>
            <strong>Backend</strong>: Flask + SQLite + SQLAlchemy with migrations,
            demo seeding, health checks, and startup hardening for predictable
            deployment behavior.
          </li>
          <li>
            <strong>Access model</strong>: Flask-Login + RBAC with role-gated
            lifecycle actions and readonly demo protections across write routes.
          </li>
          <li>
            <strong>UI layer</strong>: legacy-first Flask templates plus vanilla JS
            and Tailwind, tuned for high-frequency operational use and recent
            mobile/tablet responsiveness.
          </li>
          <li>
            <strong>Decision layer</strong>: ETD-to-ETA timeline, overdue
            highlighting, KPI widgets, and adaptive scale labels for risk detection
            and prioritization.
          </li>
          <li>
            <strong>API contract</strong>: versioned JSON endpoints for orders and
            auth bootstrap with strict validation and stable response behavior.
          </li>
          <li>
            <strong>Deployment path</strong>: Render/Railway compatible with
            environment-based config and safe public demo mode.
          </li>
        </ul>
      </div>

      <div id="roadmap" className="cs__card cs__card--interactive">
        <button
          className="cs__collapsible-header"
          onClick={() => setSprintsOpen((open) => !open)}
          aria-expanded={sprintsOpen}
        >
          <div className="cs__collapsible-copy">
            <div className="cs__eyebrow">Execution pacing</div>
            <h2 className="cs__h2">Execution Roadmap (Agile Sprints)</h2>
            <div className="cs__collapsible-helper">5 iterations covering API hardening, dashboard modernization, demo safety, lifecycle depth, and responsive UX.</div>
          </div>
          <span className="cs__collapsible-arrow" aria-hidden="true">
            {sprintsOpen ? "Close" : "Open"}
          </span>
        </button>
        {sprintsOpen && (
          <div className="cs__grid cs__grid--two">
            {sprints.map((sprint) => (
              <article key={sprint.id} className="cs__sprint">
                <h3 className="cs__h3">{sprint.title}</h3>
                <div className="cs__sprint-sec">
                  <div className="cs__sprint-label">Goals</div>
                  <ul className="cs__list cs__list--compact">
                    {sprint.goals.map((goal, index) => (
                      <li key={index}>{goal}</li>
                    ))}
                  </ul>
                </div>
                <div className="cs__sprint-sec">
                  <div className="cs__sprint-label">Outcome</div>
                  <p className="cs__p">{sprint.outcome}</p>
                </div>
                <div className="cs__sprint-retro">Retro: {sprint.retro}</div>
              </article>
            ))}
          </div>
        )}
      </div>

      <div className="cs__grid cs__grid--two">
        <div id="outcomes" className="cs__card cs__card--success">
          <div className="cs__eyebrow">Business impact</div>
          <h2 className="cs__h2">Outcomes & Success Criteria</h2>
          <ul className="cs__list">
            <li>
              Unified order lifecycle view with earlier risk detection through
              timeline and KPI signals.
            </li>
            <li>
              Role-governed transitions across Orders to Warehouse to Delivered
              workflows.
            </li>
            <li>
              Public demo can be shared safely without breaking realism or exposing
              write access.
            </li>
            <li>
              Operational UI now behaves predictably across desktop, tablet, and
              mobile viewports.
            </li>
            <li>
              Defined next-phase work around modular JS extraction, broader test
              coverage, and deployment hardening.
            </li>
          </ul>
        </div>
        <div className="cs__card">
          <div className="cs__eyebrow">Ownership</div>
          <h2 className="cs__h2">My Role (Product Owner / Technical PM)</h2>
          <p className="cs__p">
            Technical Product Manager / builder: defined the workflow, API
            behavior, role model, success criteria, and delivery plan. I used
            hands-on implementation to validate the UI, data model, demo mode, and
            responsive behavior, then iterated quickly based on product tradeoffs
            rather than treating engineering as a handoff.
          </p>
        </div>
      </div>

      <div id="gtm" className="cs__card cs__card--warm">
        <div className="cs__eyebrow">Commercial path</div>
        <h2 className="cs__h2">Business Model & GTM</h2>
        <ul className="cs__list">
          <li>
            <strong>Pricing models</strong>: per-site subscription with user tiers,
            plus setup and onboarding package.
          </li>
          <li>
            <strong>First 5 customers plan</strong>: import/distribution teams with
            recurring ETA misses and high manual coordination overhead.
          </li>
          <li>
            <strong>Why they buy</strong>: fewer missed handoffs, faster issue
            escalation, and more reliable reporting.
          </li>
          <li>
            <strong>How to close</strong>: time-boxed pilot on one operational lane
            with pre-agreed KPI targets and weekly reviews.
          </li>
          <li>
            <strong>Sales cycle reality</strong>: adoption depends on workflow
            trust; proving data quality, demo realism, and role clarity is critical
            in the first month.
          </li>
        </ul>
      </div>

      <CaseStudyLinks
        demoUrl="https://flowlogix.koyeb.app/"
        docs={[
          { label: "README", url: "https://github.com/romahawk/flowlogix/blob/main/README.md" },
          { label: "Architecture", url: "https://github.com/romahawk/flowlogix/blob/main/docs/ARCHITECTURE.md" },
          { label: "PRD", url: "https://github.com/romahawk/flowlogix/blob/main/docs/PRD.md" },
          { label: "Roadmap", url: "https://github.com/romahawk/flowlogix/blob/main/docs/ROADMAP.md" },
          { label: "Repository", url: "https://github.com/romahawk/flowlogix" },
        ]}
      />

      <footer className="cs__footer">
        <p className="cs__last-updated">Last updated: Mar 2026</p>
      </footer>
    </section>
  );
}
