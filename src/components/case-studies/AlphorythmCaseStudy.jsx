import React from "react";

const sprints = [
  {
    id: 1,
    title: "Sprint 1 — Setup & Core Layout",
    goals: [
      "React + Tailwind + Flask + Firebase scaffold",
      "Routing & Dashboard structure",
      "GitHub/Trello Agile setup",
    ],
    outcome: "Working skeleton app with login and dashboard shell.",
    retro: "Early CI setup reduced friction later.",
  },
  {
    id: 2,
    title: "Sprint 2 — Data Model & Upload",
    goals: [
      "Define trade schema (SQLite/Firebase)",
      "CSV upload + parsing validation",
      "Interactive table component",
    ],
    outcome: "Uploaded trades render in synchronized table view.",
    retro: "Added validation layer to avoid corrupt imports.",
  },
  {
    id: 3,
    title: "Sprint 3 — Analytics Dashboard",
    goals: [
      "PnL %, Equity curve, Drawdown, Win rate",
      "Chart.js integration",
      "Dynamic data linking",
    ],
    outcome: "Full analytics dashboard with interactive charts.",
    retro: "Modularize chart logic for scalability.",
  },
  {
    id: 4,
    title: "Sprint 4 — Multi-Strategy View",
    goals: [
      "Tabs for Strategy 1–3",
      "Parallel performance comparison",
      "Color-coded metrics",
    ],
    outcome: "Switchable strategies with synced data and visuals.",
    retro: "Improve UX on mobile and light theme.",
  },
  {
    id: 5,
    title: "Sprint 5 — Auth & Roles",
    goals: ["Firebase Auth", "Roles: Trader/Analyst/Admin", "Role-gated actions"],
    outcome: "Multi-user access with secure CRUD.",
    retro: "Early permissions logic prevented later bugs.",
  },
  {
    id: 6,
    title: "Sprint 6 — Live vs Backtest",
    goals: ["Firestore sync", "Real-time strategy updates", "Performance auto-refresh"],
    outcome: "Simulated live feed comparing real vs backtest data.",
    retro: "Refactor for efficient Firestore reads.",
  },
  {
    id: 7,
    title: "Sprint 7 — Deploy & Demo",
    goals: ["Deploy to Vercel/Render", "Demo scripts + docs", "Portfolio screenshots"],
    outcome: "Shareable MVP with investor/demo-ready URL.",
    retro: "Add UX onboarding and loading states.",
  },
];

export default function AlphorythmCaseStudy() {
  return (
    <section className="cs">
      <header className="cs__hero">
        <span className="cs__badge">Case Study • FinTech (Simulated MVP)</span>
        <h1 className="cs__title">Alphorythm — Strategy Analytics Platform</h1>
        <p className="cs__lead">
          Hybrid trading analytics app combining backtest and live tracking in one dashboard —
          showcasing both full-stack engineering and Agile product management skills.
        </p>
      </header>

      <div className="cs__grid cs__grid--two">
        <div className="cs__card">
          <h2 className="cs__h2">Problem</h2>
          <p className="cs__p">
            Traders and analysts struggle to unify backtested data and live performance insights
            across multiple strategies. Tracking metrics manually leads to bias and errors.
          </p>
        </div>
        <div className="cs__card">
          <h2 className="cs__h2">Vision</h2>
          <p className="cs__p">
            A single, interactive dashboard where traders visualize, compare, and refine strategies
            in real time — bridging manual journals and quantitative analytics.
          </p>
        </div>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Personas (Simulated)</h2>
        <ul className="cs__personas">
          <li>
            <div className="cs__persona-name">Alex Rivera</div>
            <div className="cs__persona-role">Active Trader</div>
            <p className="cs__p">
              Logs trades, uploads backtests, and tracks live equity curve vs historical results.
            </p>
          </li>
          <li>
            <div className="cs__persona-name">Maya Singh</div>
            <div className="cs__persona-role">Quant Analyst</div>
            <p className="cs__p">
              Analyzes performance metrics, correlation between strategies, and optimization ideas.
            </p>
          </li>
          <li>
            <div className="cs__persona-name">Admin</div>
            <div className="cs__persona-role">Product Owner / Developer</div>
            <p className="cs__p">Oversees architecture, UX, data pipelines, and sprint delivery.</p>
          </li>
        </ul>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Architecture (MVP)</h2>
        <ul className="cs__list">
          <li>Frontend: React + Tailwind + Chart.js</li>
          <li>Backend: Flask + SQLite + REST API</li>
          <li>Auth & Data: Firebase Auth + Firestore</li>
          <li>Deployment: Vercel (Frontend) + Render (Backend)</li>
          <li>PM Tools: Trello, GitHub Projects, Notion Docs</li>
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
            <li>Unified dashboard for live and backtested data</li>
            <li>Role-based Firebase Auth</li>
            <li>Responsive charts and analytics</li>
            <li>Deployed MVP with demo scripts and screenshots</li>
          </ul>
        </div>
        <div className="cs__card">
          <h2 className="cs__h2">My Role</h2>
          <p className="cs__p">
            Full-stack Developer • Product Owner • PM — defined vision, roadmap, and iterative
            delivery, leading technical execution and Agile process end-to-end.
          </p>
        </div>
      </div>
    </section>
  );
}
