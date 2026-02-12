import React from "react";
import CaseStudyLinks from "../CaseStudyLinks.jsx";

const sprints = [
  {
    id: 1,
    title: "Sprint 1 — Setup & Core Layout",
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
    title: "Sprint 2 — Data Model & Upload",
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
    title: "Sprint 3 — Analytics Dashboard",
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
    title: "Sprint 4 — Multi-Strategy View",
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
    title: "Sprint 5 — Auth & Roles",
    goals: ["Auth baseline", "Roles: Trader/Analyst/Admin", "Role-gated actions"],
    outcome: "Secure access model that supports multi-user workflows.",
    retro: "Early permissions work reduced risk of later rework.",
  },
  {
    id: 6,
    title: "Sprint 6 — Live vs Backtest",
    goals: ["Sync model for live vs backtest", "Auto-refresh patterns", "Read efficiency"],
    outcome: "Comparable live vs backtest views for honest performance review.",
    retro: "Optimize reads/writes to keep costs predictable.",
  },
  {
    id: 7,
    title: "Sprint 7 — Deploy & Demo",
    goals: ["Deploy", "Demo script and seeded data", "Case study artifacts"],
    outcome: "Shareable MVP with clear walkthrough and documentation.",
    retro: "Add onboarding hints and loading states for first-time users.",
  },
];

export default function AlphorythmCaseStudy() {
  return (
    <section className="cs">
      <header className="cs__hero">
        <span className="cs__badge">Case Study • FinTech (MVP Concept)</span>
        <h1 className="cs__title">Alphorythm — Strategy Analytics Platform</h1>
        <p className="cs__lead">
          A decision-support dashboard that unifies backtests and live trading logs into one
          consistent review workflow—built to reduce bias, improve strategy evaluation, and
          make performance metrics actionable.
        </p>
      </header>

      <div className="cs__grid cs__grid--two">
        <div className="cs__card">
          <h2 className="cs__h2">Problem & Context</h2>
          <p className="cs__p">
            Traders often review performance using fragmented tools (spreadsheets, screenshots,
            separate journals). Metrics drift, definitions vary, and live results are hard to
            compare against backtests—leading to biased decisions and inconsistent execution.
          </p>
        </div>
        <div className="cs__card">
          <h2 className="cs__h2">Users / Stakeholders</h2>
          <ul className="cs__list">
            <li><strong>Active Trader</strong> — needs fast review and consistency checks.</li>
            <li><strong>Analyst</strong> — needs comparable metrics and clean inputs.</li>
            <li><strong>Admin</strong> — needs role controls and reliable data pipelines.</li>
          </ul>
        </div>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Constraints</h2>
        <ul className="cs__list">
          <li>Data quality: imports must be validated to protect analytics.</li>
          <li>Metric consistency: the same definition must apply across strategies.</li>
          <li>Cost / performance: avoid inefficient reads and heavy recalculations.</li>
          <li>Security: role-gated access for multi-user scenarios.</li>
        </ul>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Key Product Decisions I Owned</h2>
        <ul className="cs__list">
          <li>Prioritized a <strong>single review workflow</strong> (import → table → metrics) over feature breadth.</li>
          <li>Introduced a <strong>validation layer</strong> early to prevent “garbage in, garbage out”.</li>
          <li>Designed strategy comparison as <strong>tabs with shared metric definitions</strong> to reduce ambiguity.</li>
          <li>Planned for roles early (Trader/Analyst/Admin) to avoid a hard refactor later.</li>
        </ul>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Architecture (MVP, Supporting)</h2>
        <ul className="cs__list">
          <li>Frontend: React + Tailwind + Chart.js</li>
          <li>Backend: Flask + SQLite + REST API</li>
          <li>Auth & Data: Firebase Auth + Firestore</li>
          <li>Deployment: Vercel + Render</li>
          <li>Delivery tools: Trello/GitHub/Docs</li>
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
            <li>Unified review workflow for backtest + live performance</li>
            <li>Validated imports and consistent metric calculations</li>
            <li>Multi-strategy views with comparable dashboards</li>
            <li>Shareable demo with seeded data and walkthrough</li>
          </ul>
        </div>
        <div className="cs__card">
          <h2 className="cs__h2">My Role</h2>
          <p className="cs__p">
            Technical Product Manager: owned problem framing, workflow design, metric definitions,
            prioritization, and delivery cadence. Used hands-on prototyping to validate UX and data
            assumptions and to collaborate efficiently on technical decisions.
          </p>
        </div>
      </div>

      <CaseStudyLinks />
    </section>
  );
}
