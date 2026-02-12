import React from "react";
import CaseStudyLinks from "../CaseStudyLinks.jsx";

const sprints = [
  {
    id: 1,
    title: "Sprint 1 — Initialization & Access",
    goals: [
      "React + Firebase setup",
      "Authentication + route protection",
      "Deploy baseline with a simple dashboard shell",
    ],
    outcome: "Users can sign in and access a protected dashboard.",
    retro: "Stable access model enabled faster iteration later.",
  },
  {
    id: 2,
    title: "Sprint 2 — Training Log Workflow",
    goals: [
      "Create session",
      "Add rounds with zones",
      "Edit/delete session",
      "List sessions in dashboard",
    ],
    outcome: "End-to-end session logging workflow implemented.",
    retro: "CRUD baseline solid; next step was turning data into insights.",
  },
  {
    id: 3,
    title: "Sprint 3 — Analytics & Visualization",
    goals: [
      "Zone heatmap",
      "Accuracy trend over time",
      "Attempts vs made by training type",
      "Filtering sessions + KPIs",
    ],
    outcome: "Actionable analytics: heatmaps, trends, and KPI widgets.",
    retro: "Prepare query optimization for larger datasets.",
  },
  {
    id: 4,
    title: "Sprint 4 — Table Enhancements & Export",
    goals: [
      "Paginated training log table",
      "Sorting + filtering controls",
      "Edit/delete actions",
      "CSV export of filtered results",
    ],
    outcome: "Stable table UX with export for coach/player workflows.",
    retro: "Reduce reads and improve performance at scale.",
  },
  {
    id: 5,
    title: "Sprint 5 — UI Polish, Responsiveness & States",
    goals: [
      "Mobile-first responsiveness",
      "Toasts and validation hints",
      "Loading/empty/error states",
      "Light/Dark mode consistency",
    ],
    outcome: "Polished UI with consistent theming and accessible feedback.",
    retro: "UX coherence improved adoption potential.",
  },
  {
    id: 6,
    title: "Sprint 6 — Engagement Mechanics",
    goals: [
      "XP + Level system",
      "Badges (milestones)",
      "Player profile summary",
      "Sync progression across views",
    ],
    outcome: "Engagement loop implemented (progression + rewards).",
    retro: "Engagement improves retention; next is challenge design refinement.",
  },
  {
    id: 7,
    title: "Sprint 7 — Challenges & Final Polish",
    goals: [
      "Weekly/monthly challenges",
      "Streak tracking heatmap",
      "Visual polish for charts/cards",
      "Seeded demo flows",
    ],
    outcome: "Shareable MVP with challenges and streaks for habit formation.",
    retro: "Stable MVP ready for user feedback and iteration.",
  },
];

export default function SmartShooterCaseStudy() {
  return (
    <section className="cs">
      <header className="cs__hero">
        <span className="cs__badge">Case Study • SportsTech (MVP)</span>
        <h1 className="cs__title">SmartShooter — Training Log & Shooting Analytics</h1>
        <p className="cs__lead">
          A product for players and coaches to log training sessions quickly, visualize accuracy by
          zone, and build consistency through feedback loops (analytics, streaks, challenges).
        </p>
      </header>

      <div className="cs__grid cs__grid--two">
        <div className="cs__card">
          <h2 className="cs__h2">Problem & Context</h2>
          <p className="cs__p">
            Most players train without structured feedback. Logging shots is tedious, and it’s hard
            to track accuracy by zone, progress over time, and consistency. Coaches lack a simple,
            repeatable way to review training quality.
          </p>
        </div>
        <div className="cs__card">
          <h2 className="cs__h2">Users / Stakeholders</h2>
          <ul className="cs__personas">
            <li>
              <div className="cs__persona-name">Player</div>
              <div className="cs__persona-role">Daily training</div>
              <p className="cs__p">Wants fast logging, visible progress, and simple goals.</p>
            </li>
            <li>
              <div className="cs__persona-name">Coach</div>
              <div className="cs__persona-role">Review & feedback</div>
              <p className="cs__p">Needs trends, accuracy by zone, and volume consistency.</p>
            </li>
            <li>
              <div className="cs__persona-name">Parent</div>
              <div className="cs__persona-role">Support</div>
              <p className="cs__p">Wants clarity on progress and habit formation.</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Constraints</h2>
        <ul className="cs__list">
          <li><strong>Low friction</strong>: logging must be fast or users won’t stick.</li>
          <li><strong>Meaningful metrics</strong>: insights must be coach-friendly and explainable.</li>
          <li><strong>Data integrity</strong>: edits/reschedules should preserve consistency.</li>
          <li><strong>Performance</strong>: Firestore queries must scale predictably.</li>
        </ul>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Key Product Decisions I Owned</h2>
        <ul className="cs__list">
          <li>Used <strong>round-based + zone-based</strong> tracking to match real training structure.</li>
          <li>Prioritized <strong>analytics that inform behavior</strong> (heatmap, trends) over “AI” claims.</li>
          <li>Added <strong>streaks and challenges</strong> to support habit formation and retention.</li>
          <li>Designed table + export for <strong>coach workflows</strong>, not just app screenshots.</li>
        </ul>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Architecture (MVP, Supporting)</h2>
        <ul className="cs__list">
          <li>UI: React + Tailwind (responsive, dark mode)</li>
          <li>Data: Firebase Auth + Firestore (users, sessions, rounds, challenges)</li>
          <li>Analytics: Chart.js trend lines, zone heatmap, streak tracking</li>
          <li>Deploy: Vercel; environment-based config; seeded demo profile</li>
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
            <li>Complete training log workflow with edits and history</li>
            <li>Analytics: zone heatmap, trends, volume/accuracy KPIs</li>
            <li>Engagement loop: XP/levels, badges, streaks, challenges</li>
            <li>Responsive UI and portfolio-ready demo flow</li>
          </ul>
        </div>
        <div className="cs__card">
          <h2 className="cs__h2">My Role</h2>
          <p className="cs__p">
            Technical Product Manager: defined the workflow, metrics, and engagement mechanics,
            prioritized features, and validated UX through prototyping. Hands-on implementation was
            used to test assumptions quickly and keep iteration cycles short.
          </p>
        </div>
      </div>

      <CaseStudyLinks />
    </section>
  );
}
