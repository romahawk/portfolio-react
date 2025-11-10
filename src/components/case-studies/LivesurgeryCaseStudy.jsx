import React from "react";

const sprints = [
  {
    id: 1,
    title: "Sprint 1 — Project Setup & Core UI",
    goals: [
      "React + Vite scaffold; base design tokens",
      "Routing structure (Dashboard, Live, Archive)",
      "Core layout and reusable components",
    ],
    outcome: "Clickable skeleton app with consistent UI foundation.",
    retro: "Define tokens early → fewer UI inconsistencies later.",
  },
  {
    id: 2,
    title: "Sprint 2 — Multi-Stream OR Panel",
    goals: [
      "WebRTC multi-stream (mock sources)",
      "Draggable/resizable panels",
      "Sidebar for source selection",
    ],
    outcome: "Endoscope + microscope + PTZ mock streams arranged in UI.",
    retro: "WebRTC complexity → spike tasks + trace logs.",
  },
  {
    id: 3,
    title: "Sprint 3 — Collaboration Layer",
    goals: ["Live chat (role-tagged)", "Annotation overlay", "Presence notifications"],
    outcome: "Real-time chat + annotations over active stream.",
    retro: "Improve chat readability on dark backgrounds.",
  },
  {
    id: 4,
    title: "Sprint 4 — Recording & Archive",
    goals: [
      "Record start/stop (stubbed writer)",
      "Archive list & details",
      "Playback timeline (stub)",
    ],
    outcome: "Archive view with entries and placeholder playback.",
    retro: "Plan compression & lifecycle policies.",
  },
  {
    id: 5,
    title: "Sprint 5 — Auth & Roles",
    goals: ["Firebase Auth", "Roles: Admin/Surgeon/Observer", "Role-gated UI actions"],
    outcome: "Observers cannot start/stop or annotate; secure login.",
    retro: "Early rules prevented future leaks.",
  },
  {
    id: 6,
    title: "Sprint 6 — Deploy & Demo",
    goals: ["Vercel deploy + CI docs", "Simulated user demo", "Feedback & backlog refine"],
    outcome: "Shareable PoC URL + demo script with personas.",
    retro: "Simplify surgeon workflow; document pipelines.",
  },
];

export default function LivesurgeryCaseStudy() {
  return (
    <section className="cs">
      <header className="cs__hero">
        <span className="cs__badge">Case Study • MedTech (Simulated PoC)</span>
        <h1 className="cs__title">Livesurgery — Surgical Collaboration PoC (Simulated)</h1>
        <p className="cs__lead">
          Multi-source OR video + real-time collaboration, built as a simulated Proof of Concept to
          demonstrate product vision, full-stack execution, and Agile delivery.
        </p>
      </header>

      <div className="cs__grid cs__grid--two">
        <div className="cs__card">
          <h2 className="cs__h2">Problem</h2>
          <p className="cs__p">
            OR devices and education are siloed; remote collaboration is clunky. Teams need a
            simple, secure way to share multiple video sources and collaborate live.
          </p>
        </div>
        <div className="cs__card">
          <h2 className="cs__h2">Vision</h2>
          <p className="cs__p">
            A browser-based hub for multi-source OR video, chat/annotations, and archiving, with
            role-based access and a path to compliance (GDPR/HIPAA) in later phases.
          </p>
        </div>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Personas (Simulated)</h2>
        <ul className="cs__personas">
          <li>
            <div className="cs__persona-name">Dr. Anna Müller</div>
            <div className="cs__persona-role">Surgeon</div>
            <p className="cs__p">Starts sessions, shares streams, annotates key steps.</p>
          </li>
          <li>
            <div className="cs__persona-name">Dr. Ivan Shevchenko</div>
            <div className="cs__persona-role">Observer</div>
            <p className="cs__p">Low-latency viewing, questions in chat, reviews archive.</p>
          </li>
          <li>
            <div className="cs__persona-name">Admin</div>
            <div className="cs__persona-role">Platform Admin</div>
            <p className="cs__p">Manages users, roles, and session archives.</p>
          </li>
        </ul>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Architecture (PoC)</h2>
        <ul className="cs__list">
          <li>UI: React + custom CSS</li>
          <li>Live: WebRTC (mock sources) + Node/Express signaling</li>
          <li>Auth & Data: Firebase Auth + Firestore (roles, archive metadata)</li>
          <li>Storage: object storage for recordings (stubbed writer)</li>
          <li>Deploy: Vercel (docs for CI/CD and environment)</li>
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
          <h2 className="cs__h2">Outcomes (PoC)</h2>
          <ul className="cs__list">
            <li>Working multi-panel UI with mock streams + role-based UX</li>
            <li>Live chat + overlay annotations</li>
            <li>Archive list + playback stub</li>
            <li>Deployed demo + documented pipeline</li>
          </ul>
        </div>
        <div className="cs__card">
          <h2 className="cs__h2">What I Did</h2>
          <p className="cs__p">
            Product Owner, PM, Full-stack dev — turned requirements into a roadmap and delivered a
            demonstrable PoC with sprint notes and deployment docs.
          </p>
        </div>
      </div>
    </section>
  );
}
