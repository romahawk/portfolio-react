import React from "react";

const sprints = [
  {
    id: 1,
    title: "Sprint 1 — Project Initialization & Auth",
    goals: [
      "Flask scaffold with Blueprint structure",
      "SQLite + SQLAlchemy models (User, Order, WarehouseEntry, DeliveredEntry)",
      "Auth with Flask-Login; basic RBAC (admin, user, viewer)",
      "Environment config + initial deploy (Render/Railway) & .env secrets",
    ],
    outcome:
      "Users can sign in and reach a protected dashboard; DB migrations seeded.",
    retro:
      "Auth + RBAC baseline solid; next sprint focuses on Orders CRUD and table UX.",
  },
  {
    id: 2,
    title: "Sprint 2 — Orders CRUD & Dashboard Table",
    goals: [
      "Orders create/edit/delete + details drawer",
      "Paginated table (cursor/offset) with key columns",
      "Search & basic filters (company, status, incoterms, date)",
      "Server-side validation + flash/toast feedback",
    ],
    outcome:
      "End-to-end Orders CRUD working with pagination and search on the dashboard.",
    retro:
      "Table performance OK; plan richer filters and timeline analytics next.",
  },
  {
    id: 3,
    title: "Sprint 3 — Timeline & Analytics",
    goals: [
      "Chart.js timeline: ETD → ETA per order (+ status color)",
      "Helpers for date normalization & shipping leg computation",
      "KPI widgets (open orders, near-ETA, delayed)",
      "Dashboard integration + responsive layout",
    ],
    outcome:
      "Managers can visualize pipeline timing and spot risk via timeline and KPIs.",
    retro:
      "Great visibility boost; document data assumptions for ETD/ETA fallbacks.",
  },
  {
    id: 4,
    title: "Sprint 4 — Warehouse & Delivered Tabs",
    goals: [
      "Warehouse tab: intake records + stock positions",
      "Delivered tab: proof-of-delivery fields & history",
      "Actions: move order → Warehouse/Delivered with permissions",
      "CSV export of filtered results",
    ],
    outcome:
      "Operations can transition orders across lifecycle and export filtered views.",
    retro:
      "Add guards for edge cases (double moves); queue heavy exports if needed.",
  },
  {
    id: 5,
    title: "Sprint 5 — UI Polish, Dark Mode & UX States",
    goals: [
      "Tailwind UI pass; consistent spacing, typography, cards",
      "Dark mode (class-based) with legible tables & timeline",
      "Loading skeletons, spinners, empty/error states",
      "Form validation hints + toast notifications (success/error)",
    ],
    outcome:
      "A clean, responsive UI with clear feedback across slow/empty/error states.",
    retro:
      "Great UX uplift; standardize form components to reduce duplication.",
  },
  {
    id: 6,
    title: "Sprint 6 — Stockreport & Role Controls",
    goals: [
      "Stockreport modal with 3 tabs (Arrived • Stocked • Delivered)",
      "Full cargo tracking fields + totals per tab",
      "Refined RBAC: can_edit vs can_view_all; company scoping",
      "Demo mode (read-only) toggle for public portfolio",
    ],
    outcome:
      "Deep operational visibility via Stockreport; safe demoable instance for portfolio.",
    retro:
      "RBAC rules clarified; add audit log & soft-delete in a hardening sprint.",
  },
  {
    id: 7,
    title: "Sprint 7 — Performance, Admin & Case Study Artifacts",
    goals: [
      "Query optimization (indexes, n+1 checks) + pagination hardening",
      "Admin tools: user roles, demo seeding, CSV import helper",
      "Error boundaries & 404/500 pages",
      "Create screenshots, data seeds, and case study materials",
    ],
    outcome:
      "Stable MVP with predictable performance and polished portfolio artifacts.",
    retro:
      "Ready for PostgreSQL migration & public beta feedback loop.",
  },
];

export default function FlowLogixCaseStudy() {
  return (
    <section className="cs">
      <header className="cs__hero">
        <span className="cs__badge">Case Study • Logistics (MVP • Mixed Users)</span>
        <h1 className="cs__title">FlowLogix — Logistic Tracker Dashboard (MVP)</h1>
        <p className="cs__lead">
          Flask-based dashboard that centralizes order management, warehouse intake, and delivery
          tracking. Built with Flask, SQLite/SQLAlchemy, Tailwind, and Chart.js, featuring RBAC,
          CSV export, and a timeline view from ETD to ETA. Demo-mode enabled for portfolio use.
        </p>
      </header>

      <div className="cs__grid cs__grid--two">
        <div className="cs__card">
          <h2 className="cs__h2">Problem</h2>
          <p className="cs__p">
            Teams were juggling spreadsheets and ad-hoc updates. Status drift and delayed
            communication caused missed ETAs and manual reconciliation.
          </p>
        </div>
        <div className="cs__card">
          <h2 className="cs__h2">Vision</h2>
          <p className="cs__p">
            Provide a single source of truth for orders: live status, role-based workflows,
            and visual timelines so operations can anticipate issues—not react to them.
          </p>
        </div>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Personas (Simulated + Early Real)</h2>
        <ul className="cs__personas">
          <li>
            <div className="cs__persona-name">Olivia</div>
            <div className="cs__persona-role">Operations Manager</div>
            <p className="cs__p">Needs KPIs and a quick view of delays and near-ETA shipments.</p>
          </li>
          <li>
            <div className="cs__persona-name">Mark</div>
            <div className="cs__persona-role">Warehouse Lead</div>
            <p className="cs__p">Wants fast intake, stock tracking, and delivery confirmations.</p>
          </li>
          <li>
            <div className="cs__persona-name">Ivy</div>
            <div className="cs__persona-role">Account Manager</div>
            <p className="cs__p">Requires filtered exports and read-only access across companies.</p>
          </li>
        </ul>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Architecture (MVP)</h2>
        <ul className="cs__list">
          <li>Backend: Flask + SQLite + SQLAlchemy (migrations, seeds)</li>
          <li>Auth/RBAC: Flask-Login, role checks (admin/user/viewer), company scoping</li>
          <li>UI: Tailwind (cards, tables, dark mode, responsive)</li>
          <li>Visualization: Chart.js timeline + KPI widgets</li>
          <li>Features: Orders CRUD, Warehouse/Delivered tabs, CSV export</li>
          <li>Deploy: Render/Railway + env-based config; demo mode toggle</li>
        </ul>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Agile Sprints</h2>
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
            <li>Unified dashboard for orders with timeline & KPIs</li>
            <li>Warehouse and Delivered tabs with role-based transitions</li>
            <li>CSV export of filtered results for external reporting</li>
            <li>Dark-mode responsive UI with robust empty/error states</li>
            <li>Demo mode for portfolio + safe public walkthroughs</li>
          </ul>
        </div>
        <div className="cs__card">
          <h2 className="cs__h2">What I Did</h2>
          <p className="cs__p">
            Product Owner, PM, and Full-stack developer. Drove roadmap, implemented backend models
            and RBAC, built Tailwind UI, timeline visualizations, and shipped a stable MVP with
            artifacts and demo data for case-study use.
          </p>
        </div>
      </div>
    </section>
  );
}
