import React from "react";
import CaseStudyLinks from "../CaseStudyLinks.jsx";

const sprints = [
  {
    id: 1,
    title: "Sprint 1 — Project Setup & Core UI",
    goals: [
      "App scaffold; navigation and layout",
      "Core UI components and interaction patterns",
      "Baseline demo flow and personas",
    ],
    outcome: "Clickable PoC with consistent UI foundation and demo narrative.",
    retro: "Defined interaction patterns early to reduce later churn.",
  },
  {
    id: 2,
    title: "Sprint 2 — Multi-Stream OR Panel",
    goals: [
      "Multi-source stream layout (mock sources)",
      "Draggable/resizable panels",
      "Sidebar for source selection",
    ],
    outcome: "Multi-panel OR view that simulates real device workflows.",
    retro: "WebRTC complexity validated the need for spike tasks and instrumentation.",
  },
  {
    id: 3,
    title: "Sprint 3 — Collaboration Layer",
    goals: ["Role-tagged chat", "Annotation overlay", "Presence indicators"],
    outcome: "Real-time collaboration layer on top of active streams.",
    retro: "Improve readability and cognitive load under time pressure.",
  },
  {
    id: 4,
    title: "Sprint 4 — Recording & Archive",
    goals: ["Record start/stop (stub)", "Archive list", "Playback timeline (stub)"],
    outcome: "Archive UX ready for future storage/recording implementation.",
    retro: "Define retention and lifecycle policies early.",
  },
  {
    id: 5,
    title: "Sprint 5 — Auth & Roles",
    goals: ["Auth baseline", "Roles: Admin/Surgeon/Observer", "Role-gated actions"],
    outcome: "Role-based access model aligned with clinical workflows.",
    retro: "Early rules reduced risk of permission leaks later.",
  },
  {
    id: 6,
    title: "Sprint 6 — Deploy & Demo",
    goals: ["Deploy + docs", "Persona-based demo", "Backlog refinement"],
    outcome: "Shareable PoC URL with a clear walkthrough and assumptions.",
    retro: "Simplify surgeon workflow; document integration pipelines.",
  },
];

export default function LivesurgeryCaseStudy() {
  return (
    <section className="cs">
      <header className="cs__hero">
        <span className="cs__badge">Case Study • MedTech (PoC / Concept Validation)</span>
        <h1 className="cs__title">LiveSurgery — Surgical Collaboration PoC</h1>
        <p className="cs__lead">
          Proof of concept exploring multi-source OR video workflows and real-time collaboration
          (chat/annotations/archive). Designed to validate feasibility and product workflow
          assumptions in a high-stakes, regulated environment.
        </p>
      </header>

      <div className="cs__grid cs__grid--two">
        <div className="cs__card">
          <h2 className="cs__h2">Problem & Context</h2>
          <p className="cs__p">
            OR video and education are siloed. Remote collaboration is fragmented, and sharing
            multiple device feeds is operationally complex. Clinicians need a simple workflow for
            live viewing, interaction, and post-session learning—without breaking governance.
          </p>
        </div>
        <div className="cs__card">
          <h2 className="cs__h2">Users / Stakeholders</h2>
          <ul className="cs__personas">
            <li>
              <div className="cs__persona-name">Surgeon</div>
              <div className="cs__persona-role">Session owner</div>
              <p className="cs__p">Starts sessions, selects sources, collaborates with observers.</p>
            </li>
            <li>
              <div className="cs__persona-name">Observer</div>
              <div className="cs__persona-role">Education / remote consult</div>
              <p className="cs__p">Low-friction viewing, questions in chat, archive review.</p>
            </li>
            <li>
              <div className="cs__persona-name">Hospital IT / Compliance</div>
              <div className="cs__persona-role">Governance</div>
              <p className="cs__p">Access controls, auditability, retention, privacy boundaries.</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Constraints</h2>
        <ul className="cs__list">
          <li><strong>Privacy & compliance</strong>: clear path to GDPR/HIPAA governance.</li>
          <li><strong>Interoperability</strong>: multiple device sources and routing complexity.</li>
          <li><strong>Reliability</strong>: low-latency viewing and stable session behavior.</li>
          <li><strong>Role clarity</strong>: surgeon vs observer permissions must be explicit.</li>
        </ul>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Key Product Decisions I Owned</h2>
        <ul className="cs__list">
          <li>Scoped PoC around <strong>workflow validation</strong> (orchestration + collaboration), not full compliance implementation.</li>
          <li>Designed <strong>role-gated actions</strong> early to reflect clinical responsibility boundaries.</li>
          <li>Prioritized <strong>multi-source selection UX</strong> as the core differentiator (real OR reality).</li>
          <li>Introduced archive UX as a foundation for future education and governance requirements.</li>
        </ul>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Architecture (PoC, Supporting)</h2>
        <ul className="cs__list">
          <li>UI: React + custom CSS</li>
          <li>Live: WebRTC (mock sources) + Node/Express signaling</li>
          <li>Auth & Data: Firebase Auth + Firestore (roles, archive metadata)</li>
          <li>Storage: object storage for recordings (stubbed)</li>
          <li>Deploy: Vercel + documented env setup</li>
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
          <h2 className="cs__h2">Outcomes (PoC)</h2>
          <ul className="cs__list">
            <li>Multi-panel UI simulating real multi-device OR workflows</li>
            <li>Role-based UX with chat + annotation overlay</li>
            <li>Archive list and playback stub establishing post-session workflow</li>
            <li>Shareable PoC with documented assumptions and demo flow</li>
          </ul>
        </div>
        <div className="cs__card">
          <h2 className="cs__h2">My Role</h2>
          <p className="cs__p">
            Technical Product Manager: defined problem framing, MVP scope, roles/permissions,
            and delivery plan. Built a prototype to validate workflow assumptions and integration
            complexity, enabling credible discussions with engineers and stakeholders.
          </p>
        </div>
      </div>

      <CaseStudyLinks pitchUrl="https://livesurgery-pitch-deck.vercel.app/" />
    </section>
  );
}
