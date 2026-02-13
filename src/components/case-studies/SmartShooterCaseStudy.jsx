import React from "react";
import CaseStudyLinks from "../CaseStudyLinks.jsx";

const sprints = [
  {
    id: 1,
    title: "Sprint 1 - Initialization & Access",
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
    title: "Sprint 2 - Training Log Workflow",
    goals: ["Create session", "Add rounds with zones", "Edit/delete session", "List sessions in dashboard"],
    outcome: "End-to-end session logging workflow implemented.",
    retro: "CRUD baseline solid; next step was turning data into insights.",
  },
  {
    id: 3,
    title: "Sprint 3 - Analytics & Visualization",
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
    title: "Sprint 4 - Table Enhancements & Export",
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
    title: "Sprint 5 - UI Polish, Responsiveness & States",
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
    title: "Sprint 6 - Engagement Mechanics",
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
    title: "Sprint 7 - Challenges & Final Polish",
    goals: ["Weekly/monthly challenges", "Streak tracking heatmap", "Visual polish for charts/cards", "Seeded demo flows"],
    outcome: "Shareable MVP with challenges and streaks for habit formation.",
    retro: "Stable MVP ready for user feedback and iteration.",
  },
];

export default function SmartShooterCaseStudy() {
  return (
    <section className="cs">
      <header className="cs__hero">
        <span className="cs__badge">Case Study - SportsTech (Player Performance System)</span>
        <h1 className="cs__title">SmartShooter - Training Log and Shooting Analytics</h1>
        <p className="cs__lead">
          A product for players and coaches to log training sessions quickly, visualize accuracy by
          zone, and build consistency through feedback loops (analytics, streaks, challenges).
        </p>
      </header>

      <div className="cs__card">
        <h2 className="cs__h2">Founder Lens</h2>
        <ul className="cs__list">
          <li>
            <strong>Product thesis</strong>: player progress stalls when data collection is
            inconsistent; low-friction logging plus clear feedback loops improves discipline.
          </li>
          <li>
            <strong>ICP + buyer/user</strong>: youth and amateur basketball ecosystems; users are
            players and coaches, buyers can include academies and parents.
          </li>
          <li>
            <strong>Wedge + why now</strong>: start with structured session logging and zone
            analytics that directly support daily training decisions.
          </li>
          <li>
            <strong>Moat</strong>: training-domain data structure (rounds/zones), coach-friendly
            analytics, and habit mechanics that increase retention.
          </li>
        </ul>
      </div>

      <div className="cs__grid cs__grid--two">
        <div className="cs__card">
          <h2 className="cs__h2">Problem & Context</h2>
          <p className="cs__p">
            Most players train without structured feedback. Logging shots is tedious, and it is
            hard to track accuracy by zone, progress over time, and consistency. Coaches lack a
            simple, repeatable way to review training quality.
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
          <li><strong>Low friction</strong>: logging must be fast or users will not stick.</li>
          <li><strong>Meaningful metrics</strong>: insights must be coach-friendly and explainable.</li>
          <li><strong>Data integrity</strong>: edits and reschedules should preserve consistency.</li>
          <li><strong>Performance</strong>: Firestore queries must scale predictably.</li>
        </ul>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Key Product Decisions I Owned</h2>
        <ul className="cs__list">
          <li>Used <strong>round-based + zone-based</strong> tracking to match real training structure.</li>
          <li>Prioritized <strong>analytics that inform behavior</strong> (heatmap, trends) over "AI" claims.</li>
          <li>Added <strong>streaks and challenges</strong> to support habit formation and retention.</li>
          <li>Designed table + export for <strong>coach workflows</strong>, not just app screenshots.</li>
        </ul>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Architecture & Technical Leverage</h2>
        <ul className="cs__list">
          <li>
            <strong>UI layer</strong>: React + Tailwind with responsive views and readable light/dark
            themes for daily use.
          </li>
          <li>
            <strong>Identity/data</strong>: Firebase Auth + Firestore for users, sessions, rounds,
            and progression artifacts.
          </li>
          <li>
            <strong>Decision layer</strong>: chart-driven analytics (trend lines, zone heatmaps,
            KPI widgets) focused on coaching decisions.
          </li>
          <li>
            <strong>Engagement layer</strong>: XP, levels, badges, streaks, and challenges to
            reinforce training consistency.
          </li>
          <li>
            <strong>Deployment path</strong>: Vercel with environment-based config and seeded demo profile.
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
            <li>Validated complete training log workflow with editable session history.</li>
            <li>Delivered coach-relevant analytics: zone heatmap, trends, and volume/accuracy KPIs.</li>
            <li>Implemented retention mechanics (XP, levels, streaks, challenges) for habit loops.</li>
            <li>Established next-phase metrics: weekly active users, session frequency, and challenge completion.</li>
          </ul>
        </div>
        <div className="cs__card">
          <h2 className="cs__h2">My Role (Product Owner / Technical PM)</h2>
          <p className="cs__p">
            Technical Product Manager: defined the workflow, metrics, and engagement mechanics,
            prioritized features, and validated UX through prototyping. Hands-on implementation was
            used to test assumptions quickly and keep iteration cycles short.
          </p>
        </div>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Business Model & GTM</h2>
        <ul className="cs__list">
          <li>
            <strong>Pricing models</strong>: freemium player tier, coach subscription, and academy
            package for team-level analytics.
          </li>
          <li>
            <strong>First 5 customers plan</strong>: pilot with one coach cohort and one academy to
            validate repeat training workflows.
          </li>
          <li>
            <strong>Why they buy</strong>: better training discipline, clearer progress visibility,
            and easier coach feedback loops.
          </li>
          <li>
            <strong>How to close</strong>: run a 4-6 week pilot with baseline and endline metrics on
            consistency and accuracy progression.
          </li>
          <li>
            <strong>Sales cycle reality</strong>: trust is earned through measurable player outcomes
            and coach usability, not feature volume.
          </li>
        </ul>
      </div>

      <CaseStudyLinks />
    </section>
  );
}
