import React from "react";
import CaseStudyLinks from "../CaseStudyLinks.jsx";

const sprints = [
  {
    id: 1,
    title: "Sprint 1 - Setup & Core Layout",
    goals: [
      "App scaffold and navigation structure",
      "Dashboard information architecture (key views and flows)",
      "Agile artifacts: backlog, definition of done, release notes",
    ],
    outcome: "Working skeleton with clear UX structure and delivery cadence.",
    retro: "Front-loaded information architecture to reduce churn later.",
  },
  {
    id: 2,
    title: "Sprint 2 - Data Model & Upload",
    goals: [
      "Define trade schema and data validation rules",
      "CSV import flow with guardrails",
      "Interactive table view aligned with analytics needs",
    ],
    outcome: "Validated upload and table view that prevents corrupt inputs.",
    retro: "Validation rules prevented downstream analytics errors.",
  },
  {
    id: 3,
    title: "Sprint 3 - Analytics Dashboard",
    goals: [
      "Core metrics: equity curve, drawdown, win rate, expectancy proxies",
      "Chart rendering and interactions",
      "Consistent linking between table selections and charts",
    ],
    outcome: "Usable analytics dashboard for review and decision support.",
    retro: "Modular chart logic keeps future metrics additions cheap.",
  },
  {
    id: 4,
    title: "Sprint 4 - Multi-Strategy View",
    goals: [
      "Strategy tabs and comparison model",
      "Consistent metric definitions across strategies",
      "UX polish for fast scanning",
    ],
    outcome: "Switchable strategy views with comparable metrics.",
    retro: "Need a stricter metric glossary to avoid ambiguity.",
  },
  {
    id: 5,
    title: "Sprint 5 - Auth & Roles",
    goals: ["Auth baseline", "Roles: Trader/Analyst/Admin", "Role-gated actions"],
    outcome: "Secure access model that supports multi-user workflows.",
    retro: "Early permissions work reduced risk of later rework.",
  },
  {
    id: 6,
    title: "Sprint 6 - Live vs Backtest",
    goals: ["Sync model for live vs backtest", "Auto-refresh patterns", "Read efficiency"],
    outcome: "Comparable live vs backtest views for honest performance review.",
    retro: "Optimize reads/writes to keep costs predictable.",
  },
  {
    id: 7,
    title: "Sprint 7 - Deploy & Demo",
    goals: ["Deploy", "Demo script and seeded data", "Case study artifacts"],
    outcome: "Shareable MVP with clear walkthrough and documentation.",
    retro: "Add onboarding hints and loading states for first-time users.",
  },
];

export default function AlphorythmCaseStudy() {
  return (
    <section className="cs">
      <header className="cs__hero">
        <span className="cs__badge">Case Study - FinTech (Decision Support Platform)</span>
        <h1 className="cs__title">AlphaRhythm - Strategy Analytics Platform</h1>
        <p className="cs__lead">
          A decision-support dashboard that unifies backtests and live trading logs into one
          consistent review workflow, built to reduce bias, improve strategy evaluation, and make
          performance metrics actionable.
        </p>
      </header>

      <div className="cs__card">
        <h2 className="cs__h2">Founder Lens</h2>
        <ul className="cs__list">
          <li>
            <strong>Product thesis</strong>: strategy decisions degrade when review workflows are
            fragmented; consistent data and metric definitions improve execution quality.
          </li>
          <li>
            <strong>ICP + buyer/user</strong>: independent traders, small trading teams, and
            strategy analysts; buyer and user are often the same operator.
          </li>
          <li>
            <strong>Wedge + why now</strong>: start with unified import-to-analysis workflow where
            live vs backtest mismatch is most visible and most costly.
          </li>
          <li>
            <strong>Moat</strong>: trustworthy metrics pipeline, strategy-comparison workflow, and
            role-governed collaboration.
          </li>
        </ul>
      </div>

      <div className="cs__grid cs__grid--two">
        <div className="cs__card">
          <h2 className="cs__h2">Problem & Context</h2>
          <p className="cs__p">
            Traders often review performance using fragmented tools (spreadsheets, screenshots,
            separate journals). Metrics drift, definitions vary, and live results are hard to
            compare against backtests, leading to biased decisions and inconsistent execution.
          </p>
        </div>
        <div className="cs__card">
          <h2 className="cs__h2">Users / Stakeholders</h2>
          <ul className="cs__personas">
            <li>
              <div className="cs__persona-name">Active Trader</div>
              <div className="cs__persona-role">Daily performance review</div>
              <p className="cs__p">Needs fast consistency checks and actionable signal on strategy quality.</p>
            </li>
            <li>
              <div className="cs__persona-name">Analyst</div>
              <div className="cs__persona-role">Model and comparison review</div>
              <p className="cs__p">Needs comparable metrics, clean data, and reliable chart interactions.</p>
            </li>
            <li>
              <div className="cs__persona-name">Admin</div>
              <div className="cs__persona-role">Governance</div>
              <p className="cs__p">Needs role controls, data reliability, and predictable access boundaries.</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Constraints</h2>
        <ul className="cs__list">
          <li><strong>Data quality</strong>: imports must be validated to protect analytics trust.</li>
          <li><strong>Metric consistency</strong>: one definition must apply across strategies and views.</li>
          <li><strong>Cost/performance</strong>: avoid inefficient reads and heavy recalculations.</li>
          <li><strong>Security</strong>: role-gated access for multi-user scenarios.</li>
        </ul>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Key Product Decisions I Owned</h2>
        <ul className="cs__list">
          <li>Prioritized a <strong>single review workflow</strong> (import -> table -> metrics) over feature breadth.</li>
          <li>Introduced a <strong>validation layer</strong> early to prevent "garbage in, garbage out".</li>
          <li>Designed strategy comparison as <strong>tabs with shared metric definitions</strong> to reduce ambiguity.</li>
          <li>Planned for roles early (Trader/Analyst/Admin) to avoid hard refactors later.</li>
        </ul>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Architecture & Technical Leverage</h2>
        <ul className="cs__list">
          <li>
            <strong>Frontend</strong>: React + Tailwind + Chart.js for high-density analytics views
            with fast scan behavior.
          </li>
          <li>
            <strong>Service layer</strong>: Flask + SQLite REST API for trade ingestion, validation,
            and analytics payloads.
          </li>
          <li>
            <strong>Identity/data</strong>: Firebase Auth + Firestore for access control and shared
            strategy data.
          </li>
          <li>
            <strong>Comparison layer</strong>: normalized metrics model to keep strategy views
            directly comparable.
          </li>
          <li>
            <strong>Deployment path</strong>: Vercel + Render with seeded demo data and walkthrough script.
          </li>
        </ul>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Execution Roadmap (Agile Sprints)</h2>
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
          <h2 className="cs__h2">Outcomes & Success Criteria</h2>
          <ul className="cs__list">
            <li>Validated unified review workflow for backtest and live performance comparisons.</li>
            <li>Improved trust with import validation and consistent metric definitions.</li>
            <li>Enabled multi-strategy decision support with comparable dashboards.</li>
            <li>Defined next-phase metrics: decision latency, strategy drift detection, and user retention.</li>
          </ul>
        </div>
        <div className="cs__card">
          <h2 className="cs__h2">My Role (Product Owner / Technical PM)</h2>
          <p className="cs__p">
            Technical Product Manager: owned problem framing, workflow design, metric definitions,
            prioritization, and delivery cadence. Used hands-on prototyping to validate UX and data
            assumptions and to collaborate efficiently on technical decisions.
          </p>
        </div>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Business Model & GTM</h2>
        <ul className="cs__list">
          <li>
            <strong>Pricing models</strong>: individual pro tier, team workspace tier, and analyst
            package for shared strategy reviews.
          </li>
          <li>
            <strong>First 5 customers plan</strong>: independent traders and micro-teams with active
            strategy journals and recurring post-trade reviews.
          </li>
          <li>
            <strong>Why they buy</strong>: better decision hygiene, reduced metric ambiguity, and
            clearer live vs backtest accountability.
          </li>
          <li>
            <strong>How to close</strong>: portfolio and founder-led onboarding with sample import,
            metric glossary, and structured weekly review flow.
          </li>
          <li>
            <strong>Sales cycle reality</strong>: trust depends on metric credibility and transparent
            assumptions, so documentation quality is part of the product.
          </li>
        </ul>
      </div>

      <CaseStudyLinks />
    </section>
  );
}
