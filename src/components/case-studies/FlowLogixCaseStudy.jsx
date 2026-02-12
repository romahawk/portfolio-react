import React from "react";
import CaseStudyLinks from "../CaseStudyLinks.jsx";

const sprints = [
  {
    id: 1,
    title: "Sprint 1 — Project Initialization & Access Control",
    goals: [
      "App skeleton + baseline navigation",
      "Core data model (orders + lifecycle entities)",
      "Authentication and role-based access (admin/user/viewer)",
      "Environment config + deploy baseline",
    ],
    outcome: "Secure foundation: users can sign in and access a protected dashboard.",
    retro: "Early RBAC reduced later risk and rework.",
  },
  {
    id: 2,
    title: "Sprint 2 — Orders Workflow & Table UX",
    goals: [
      "Orders CRUD aligned with operational workflow",
      "Paginated table with key columns",
      "Search + basic filters (company, status, dates)",
      "Validation + feedback states",
    ],
    outcome: "End-to-end order workflow working with search and stable table UX.",
    retro: "Table baseline is strong; deeper filters can come later.",
  },
  {
    id: 3,
    title: "Sprint 3 — Timeline & Risk Visibility",
    goals: [
      "ETD→ETA timeline visualization",
      "Date normalization and fallback rules",
      "KPI widgets: open, near-ETA, delayed",
      "Responsive integration",
    ],
    outcome: "Operations can spot risk and timing drift early via timeline + KPIs.",
    retro: "Document assumptions (ETD/ETA fallbacks) to avoid confusion.",
  },
  {
    id: 4,
    title: "Sprint 4 — Warehouse & Delivered Lifecycle Tabs",
    goals: [
      "Warehouse intake records + stock positions",
      "Delivered tab + history",
      "Role-gated transitions across lifecycle",
      "CSV export of filtered results",
    ],
    outcome: "Lifecycle transitions are controlled and trackable end-to-end.",
    retro: "Add guardrails for edge cases (double moves).",
  },
  {
    id: 5,
    title: "Sprint 5 — UX Polish & Reliability States",
    goals: [
      "UI consistency pass (spacing, typography, cards)",
      "Dark mode legibility for tables/timeline",
      "Loading / empty / error states",
      "Form validation hints",
    ],
    outcome: "Clear, resilient UI that behaves well under slow/empty/error conditions.",
    retro: "Standardize shared UI components to reduce duplication.",
  },
  {
    id: 6,
    title: "Sprint 6 — Stockreport & Role Controls",
    goals: [
      "Stockreport modal: Arrived / Stocked / Delivered",
      "Cargo tracking fields + totals",
      "Refined RBAC: can_edit vs can_view_all; company scoping",
      "Demo mode (read-only) for portfolio",
    ],
    outcome: "Deeper operational visibility + safe public demo workflow.",
    retro: "Next hardening: audit log + soft delete.",
  },
  {
    id: 7,
    title: "Sprint 7 — Performance & Admin Hardening",
    goals: [
      "Query optimization and pagination hardening",
      "Admin tools: user roles, seeding, imports",
      "Error boundaries and 404/500 pages",
      "Screenshots + case study assets",
    ],
    outcome: "Stable MVP with predictable performance and portfolio-ready artifacts.",
    retro: "Ready for PostgreSQL migration and beta feedback loop.",
  },
];

export default function FlowLogixCaseStudy() {
  return (
    <section className="cs">
      <header className="cs__hero">
        <span className="cs__badge">Case Study • Logistics (MVP • Mixed Users)</span>
        <h1 className="cs__title">FlowLogix — Supply Visibility Dashboard (MVP)</h1>
        <p className="cs__lead">
          A decision-support system that centralizes orders, warehouse intake, and deliveries into
          one source of truth. Built to reduce status drift, improve ETA reliability, and enable
          role-based operational workflows.
        </p>
      </header>

      <div className="cs__grid cs__grid--two">
        <div className="cs__card">
          <h2 className="cs__h2">Problem & Context</h2>
          <p className="cs__p">
            Teams were tracking shipments across spreadsheets and ad-hoc messages. Updates drifted,
            ETAs were missed, and managers couldn’t see risk early—creating manual follow-ups and
            firefighting.
          </p>
        </div>
        <div className="cs__card">
          <h2 className="cs__h2">Users / Stakeholders</h2>
          <ul className="cs__personas">
            <li>
              <div className="cs__persona-name">Operations Manager</div>
              <div className="cs__persona-role">Risk & timing visibility</div>
              <p className="cs__p">Needs KPIs and a fast view of delays and near-ETA shipments.</p>
            </li>
            <li>
              <div className="cs__persona-name">Warehouse Lead</div>
              <div className="cs__persona-role">Intake and lifecycle execution</div>
              <p className="cs__p">Wants fast intake, stock tracking, and delivery confirmations.</p>
            </li>
            <li>
              <div className="cs__persona-name">Account Manager</div>
              <div className="cs__persona-role">Reporting</div>
              <p className="cs__p">Requires filtered exports and read-only visibility across accounts.</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Constraints</h2>
        <ul className="cs__list">
          <li><strong>RBAC</strong>: company scoping + role-gated actions (view vs edit).</li>
          <li><strong>Data quality</strong>: date fallbacks and validation to prevent misleading timelines.</li>
          <li><strong>Adoption</strong>: non-technical users need clarity and speed.</li>
          <li><strong>Public demo</strong>: safe portfolio mode without exposing real operational data.</li>
        </ul>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Key Product Decisions I Owned</h2>
        <ul className="cs__list">
          <li>Designed the product around <strong>daily decisions</strong> (risk, near-ETA, delays), not raw data dumps.</li>
          <li>Introduced <strong>role-based transitions</strong> across lifecycle to prevent accidental workflow breaks.</li>
          <li>Built <strong>timeline visualization</strong> as the primary risk signal (ETD→ETA), with clear fallbacks.</li>
          <li>Added <strong>demo mode</strong> so the system is portfolio-safe while keeping functionality realistic.</li>
        </ul>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Architecture (MVP, Supporting)</h2>
        <ul className="cs__list">
          <li>Backend: Flask + SQLite + SQLAlchemy (migrations, seeds)</li>
          <li>Auth/RBAC: Flask-Login; roles + company scoping</li>
          <li>UI: Tailwind (tables, dark mode, responsive)</li>
          <li>Visualization: Chart.js timeline + KPI widgets</li>
          <li>Features: Orders workflow, Warehouse/Delivered tabs, CSV export</li>
          <li>Deploy: Render/Railway; env-based config; demo mode toggle</li>
        </ul>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Delivery (Agile Sprints)</h2>
        <div className="cs__grid cs__grid--two">
          {sprints.map((s) => (
            <article key={s.id} className="cs__sprint">
              <h3 className="cs__h3">{s.title}</h3>
              <div className="cs__sprint-sec">
                <div className="cs__sprint-label">Goals</div>
                <ul className="cs__list cs__list--compact">
                  {s.goals.map((g, i) => (
                    <li key={i}>{g}</li>
                  ))}
                </ul>
              </div>
              <div className="cs__sprint-sec">
                <div className="cs__sprint-label">Outcome</div>
                <p className="cs__p">{s.outcome}</p>
              </div>
              <div className="cs__sprint-retro">Retro: {s.retro}</div>
            </article>
          ))}
        </div>
      </div>

      <div className="cs__grid cs__grid--two">
        <div className="cs__card">
          <h2 className="cs__h2">Outcomes (MVP)</h2>
          <ul className="cs__list">
            <li>Single source of truth for order lifecycle with timeline + KPIs</li>
            <li>Role-based transitions across Orders → Warehouse → Delivered</li>
            <li>CSV export for external reporting workflows</li>
            <li>Robust UX states and dark-mode support for daily use</li>
            <li>Demo mode for safe public walkthroughs</li>
          </ul>
        </div>
        <div className="cs__card">
          <h2 className="cs__h2">My Role</h2>
          <p className="cs__p">
            Technical Product Manager: defined workflow, role model, success criteria, and delivery
            plan. Used hands-on prototyping to validate the UI, data model, and timeline logic, and
            to iterate quickly on stakeholder feedback.
          </p>
        </div>
      </div>

      <CaseStudyLinks />
    </section>
  );
}
