import React from "react";

const sprints = [
  {
    id: 1,
    title: "Sprint 1 — Project Initialization & Auth",
    goals: [
      "Initialize project with React + Firebase setup",
      "Implement Auth (Google + Email/Password)",
      "Add route protection for private pages",
      "Deploy base version to Vercel",
    ],
    outcome: "User can register/login and access a blank dashboard.",
    retro: "Authentication and routing stable; next sprint focuses on session CRUD.",
  },
  {
    id: 2,
    title: "Sprint 2 — Sessions CRUD & Dashboard",
    goals: [
      "User Story 2.1: Create a new session",
      "User Story 2.2: Add rounds with directions & zones",
      "User Story 2.3: Edit & delete session",
      "User Story 2.4: List sessions in dashboard",
    ],
    outcome: "End‑to‑end Sessions CRUD flow implemented successfully.",
    retro: "CRUD performance solid; plan analytics layer next.",
  },
  {
    id: 3,
    title: "Sprint 3 — Analytics & Visualization",
    goals: [
      "User Story 3.1: Heatmap visualization",
      "User Story 3.2: Accuracy trend over time",
      "User Story 3.3: Attempts vs Made per training type",
      "User Story 3.4: Filtering sessions",
      "User Story 3.5: Display key KPIs (best %, average accuracy, volume)",
      "Integrate analytics helpers and dashboard widgets",
    ],
    outcome: "Analytics dashboard delivers visual heatmaps, trends, and KPIs.",
    retro: "Add performance tuning for Firestore queries to handle larger datasets.",
  },
  {
    id: 4,
    title: "Sprint 4 — Table Enhancements & Export",
    goals: [
      "User Story 4.1: Create paginated TrainingLogTable (cursor‑based Firestore query)",
      "User Story 4.2: Display table with key columns",
      "User Story 4.3: Add Edit & Delete actions",
      "User Story 4.4: Add sorting, filtering & pagination controls",
      "User Story 4.5: Add CSV export of filtered results",
    ],
    outcome: "TrainingLogTable stable with full filtering, pagination, and CSV export.",
    retro: "Table UX clear; reduce Firestore reads via query optimization next sprint.",
  },
  {
    id: 5,
    title: "Sprint 5 — UI Polish, Responsiveness & Dark Mode",
    goals: [
      "User Story 5.1: Make UI responsive (mobile‑first)",
      "User Story 5.2: Add toast notifications (success/error)",
      "User Story 5.3: Improve form validation",
      "User Story 5.4: Add loading spinners and skeleton screens",
      "User Story 5.5: Implement Light/Dark mode support",
      "User Story 5.6: Integrate Lucide icons",
      "Enhance court image and Accuracy Trend readability",
    ],
    outcome: "Responsive, polished UI with consistent theming and improved accessibility.",
    retro: "Improved DX and UX; next step — gamification loop and player profile.",
  },
  {
    id: 6,
    title: "Sprint 6 — Gamification & Player Profile",
    goals: [
      "Implement XP calculator and Level system",
      "Add milestone Badges (bronze/silver/gold)",
      "Build Player Profile (avatar, nickname, XP, key stats)",
      "Synchronize XP and Level across dashboard and profile",
    ],
    outcome: "Gamified user progression loop fully operational.",
    retro: "Gamification drives engagement; prepare challenge engine next.",
  },
  {
    id: 7,
    title: "Sprint 7 — Challenges, Streaks & Final Polish",
    goals: [
      "Add Weekly/Monthly Challenges (e.g., 300 shots/week, ≥75% accuracy ×3 sessions)",
      "Implement Calendar Streak heatmap with streak counter",
      "Optimize dark‑mode visuals (calendar cells, charts, cards)",
      "Finalize Vercel deployment with demo data and persona flows",
    ],
    outcome: "Shareable MVP deployed, including challenges and visual streak tracking.",
    retro: "Stable MVP ready for promotion and case study publishing.",
  },
];

export default function SmartShooterCaseStudy() {
  return (
    <section className="cs">
      <header className="cs__hero">
        <span className="cs__badge">Case Study • SportsTech (MVP • Mixed Users)</span>
        <h1 className="cs__title">SmartShooter AI — Basketball Shooting Analytics MVP</h1>
        <p className="cs__lead">
          AI-driven app that supports young basketball athletes with training recommendations and performance tracking. Currently built with React, Tailwind, and Firebase (Firestore + Auth); future roadmap includes Flask backend with ML-powered analytics and extended mobile UI.
        </p>
      </header>

      <div className="cs__grid cs__grid--two">
        <div className="cs__card">
          <h2 className="cs__h2">Problem</h2>
          <p className="cs__p">
            Players often train alone without structured feedback. Tracking volume, accuracy by
            zone, and consistency over time is tedious and fragmented across apps or paper.
          </p>
        </div>
        <div className="cs__card">
          <h2 className="cs__h2">Vision</h2>
          <p className="cs__p">
            Provide a lightweight, data‑driven companion for every practice session: quick logging,
            clear insights, habit‑forming streaks, and gamified goals that keep athletes engaged.
          </p>
        </div>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Personas (Simulated + Early Real)</h2>
        <ul className="cs__personas">
          <li>
            <div className="cs__persona-name">Alex</div>
            <div className="cs__persona-role">Amateur Player</div>
            <p className="cs__p">Wants simple logging, streaks, and visible progress.</p>
          </li>
          <li>
            <div className="cs__persona-name">Coach Jordan</div>
            <div className="cs__persona-role">Coach</div>
            <p className="cs__p">Cares about volume targets and accuracy ≥75% across sessions.</p>
          </li>
          <li>
            <div className="cs__persona-name">Sam</div>
            <div className="cs__persona-role">Data‑Driven Hooper</div>
            <p className="cs__p">Enjoys charts, zone heatmaps, and challenge leaderboards.</p>
          </li>
        </ul>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Architecture (MVP)</h2>
        <ul className="cs__list">
          <li>UI: React + Tailwind (card grid, dark mode, responsive)</li>
          <li>State & Utils: selectors for XP/Level; date/zone aggregations</li>
          <li>Data: Firebase Auth + Firestore (users, sessions, rounds, challenges)</li>
          <li>Storage: optional screenshots/exports; seed data for demos</li>
          <li>Analytics: Chart.js trend lines, zone heatmap, calendar streaks</li>
          <li>Deploy: Vercel; environment‑based config; seeded demo profile</li>
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
            <li>End‑to‑end Sessions CRUD and analytics dashboard</li>
            <li>XP, Levels, and milestone Badges implemented</li>
            <li>Calendar Streaks and Challenges gamification system</li>
            <li>Responsive, themed UI with Lucide icons</li>
            <li>Vercel deployment with seeded demo user</li>
          </ul>
        </div>
        <div className="cs__card">
          <h2 className="cs__h2">What I Did</h2>
          <p className="cs__p">
            Acted as Product Owner, PM, Full‑stack developer, and Designer — transformed a training
            concept into a functional MVP with measurable engagement mechanics, analytics, and UX
            polish, all built iteratively through seven Agile sprints.
          </p>
        </div>
      </div>
    </section>
  );
}
