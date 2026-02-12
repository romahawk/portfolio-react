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
        <span className="cs__badge">Case Study • MedTech (Founder-Led System)</span>
        <h1 className="cs__title">LiveSurgery — Real-Time Surgical Collaboration System</h1>
        <p className="cs__lead">
          Founder-led product initiative to solve fragmented OR collaboration: multi-source video,
          role-based interaction, and session governance in one workflow. Built as a wedge into
          regulated clinical environments where coordination quality directly affects outcomes.
        </p>
      </header>

      <div className="cs__card">
        <h2 className="cs__h2">Founder Lens</h2>
        <ul className="cs__list">
          <li>
            <strong>Product thesis</strong>: surgical collaboration breaks when video, communication,
            and governance are split across tools; a unified workflow system reduces friction and
            decision latency.
          </li>
          <li>
            <strong>ICP + buyer/user</strong>: hospital surgical departments and education centers;
            buyers are clinical leadership/IT, users are surgeons, observers, and support teams.
          </li>
          <li>
            <strong>Wedge + why now</strong>: start with live education and remote consult
            workflows, where demand is immediate and integration burden is manageable.
          </li>
          <li>
            <strong>Moat</strong>: workflow depth + integration layer + compliance-ready governance
            + distribution through clinical education and reference sites.
          </li>
        </ul>
      </div>

      <div className="cs__grid cs__grid--two">
        <div className="cs__card">
          <h2 className="cs__h2">Problem & Context</h2>
          <p className="cs__p">
            OR collaboration is operationally expensive: video sources are fragmented, live
            consultation is ad hoc, and post-session learning is disconnected from real workflows.
            The system challenge is not streaming alone, but orchestrating clinical interaction
            under reliability and governance constraints.
          </p>
        </div>
        <div className="cs__card">
          <h2 className="cs__h2">Users / Stakeholders</h2>
          <ul className="cs__personas">
            <li>
              <div className="cs__persona-name">Surgeon</div>
              <div className="cs__persona-role">Session owner</div>
              <p className="cs__p">Starts sessions, selects critical sources, and controls interaction flow.</p>
            </li>
            <li>
              <div className="cs__persona-name">Observer</div>
              <div className="cs__persona-role">Education / remote consult</div>
              <p className="cs__p">Needs low-friction participation, context-aware chat, and replay access.</p>
            </li>
            <li>
              <div className="cs__persona-name">Hospital IT / Compliance</div>
              <div className="cs__persona-role">Governance</div>
              <p className="cs__p">Owns access controls, auditability, retention, and integration boundaries.</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Constraints</h2>
        <ul className="cs__list">
          <li><strong>Regulatory path</strong>: explicit path to GDPR/HIPAA-aligned controls and policy enforcement.</li>
          <li><strong>Interoperability</strong>: heterogeneous OR devices and source routing must be abstracted cleanly.</li>
          <li><strong>Reliability target</strong>: low-latency interaction with predictable session stability.</li>
          <li><strong>Adoption barrier</strong>: workflow change must be minimal for clinical teams under time pressure.</li>
        </ul>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Key Product Decisions I Owned</h2>
        <ul className="cs__list">
          <li>Scoped MVP around <strong>workflow orchestration</strong> first, not full compliance automation, to validate core behavior quickly.</li>
          <li>Made <strong>role-gated actions</strong> foundational to align responsibility boundaries with clinical reality.</li>
          <li>Prioritized <strong>multi-source selection and control UX</strong> as the wedge feature with highest operational value.</li>
          <li>Designed archive and playback as <strong>governance + education primitives</strong>, not add-ons.</li>
        </ul>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Architecture & Technical Leverage</h2>
        <ul className="cs__list">
          <li><strong>UI layer</strong>: React + custom CSS optimized for quick role-specific interactions.</li>
          <li><strong>Real-time layer</strong>: WebRTC (mocked source model) + Node/Express signaling to validate low-latency coordination patterns.</li>
          <li><strong>Identity/data</strong>: Firebase Auth + Firestore for roles, session metadata, and governance-ready primitives.</li>
          <li><strong>Storage path</strong>: recording pipeline stubbed to define lifecycle and retention boundaries early.</li>
          <li><strong>Interoperability path</strong>: architecture prepared for future source adapters and integration contracts.</li>
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
            <li>Validated multi-source session workflow in a realistic OR interaction model.</li>
            <li>Established role-governed collaboration behaviors (chat + annotation + session control).</li>
            <li>Defined measurable targets for next phase: session setup time, engagement rate, and consult completion quality.</li>
            <li>Produced founder-grade artifacts for partner conversations: roadmap, architecture assumptions, and pilot scope.</li>
          </ul>
        </div>
        <div className="cs__card">
          <h2 className="cs__h2">My Role (Founder-Operator / Product Owner)</h2>
          <p className="cs__p">
            Owned product from thesis to execution: problem framing, ICP definition, wedge strategy,
            roadmap sequencing, delivery governance, and technical trade-offs. I used hands-on
            prototyping as leverage to de-risk architecture decisions, accelerate iteration, and
            keep business and engineering alignment tight.
          </p>
        </div>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Business Model & GTM</h2>
        <ul className="cs__list">
          <li><strong>Pricing models</strong>: pilot package (time-boxed), subscription per site, or per-room/per-session enterprise plan.</li>
          <li><strong>First 5 customers plan</strong>: target innovation-friendly hospitals and surgical education centers with high consult volume and urgent coordination pain.</li>
          <li><strong>Why they buy</strong>: faster consult workflows, better training outcomes, and governance-ready collaboration infrastructure.</li>
          <li><strong>How to close</strong>: founder-led pilot with clear success criteria, then land-and-expand across departments.</li>
          <li><strong>Sales cycle reality</strong>: MedTech procurement and IT/security review are long; proof of workflow ROI and adoption readiness must come early.</li>
        </ul>
      </div>

      <CaseStudyLinks
        pitchUrl="https://livesurgery-pitch-deck.vercel.app/"
        docs={[
          { label: "README", url: "https://github.com/romahawk/livesurgery-poc/blob/main/README.md" },
          { label: "Architecture", url: "https://github.com/romahawk/livesurgery-poc/blob/main/docs/architecture.md" },
          { label: "PRD", url: "https://github.com/romahawk/livesurgery-poc/blob/main/docs/prd.md" },
          { label: "Roadmap", url: "https://github.com/romahawk/livesurgery-poc/blob/main/docs/roadmap.md" },
          { label: "Repository", url: "https://github.com/romahawk/livesurgery-poc" },
          { label: "Demo", url: "https://livesurgery.vercel.app/" },
        ]}
      />
    </section>
  );
}
