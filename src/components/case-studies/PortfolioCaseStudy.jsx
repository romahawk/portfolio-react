import React from "react";
import CaseStudyLinks from "../CaseStudyLinks.jsx";

export default function PortfolioCaseStudy() {
  return (
    <div className="cs">
      <header className="cs__hero">
        <span className="cs__badge">Case Study • Personal Product</span>
        <h1 className="cs__title">Technical Product Manager Portfolio</h1>
        <p className="cs__lead">
          A recruiter-first portfolio designed to answer “who is this person?” in 30 seconds:
          product ownership, constraints, decisions, and outcomes — using technical work as supporting evidence.
        </p>
      </header>

      <div className="cs__grid cs__grid--two">
        <div className="cs__card">
          <h2 className="cs__h2">Problem & Context</h2>
          <p className="cs__p">
            Most portfolios optimize for engineers (stack, repos, UI screenshots). For Technical PM roles,
            the decision is different: recruiters want clarity of identity, product ownership, and evidence
            of system thinking and delivery.
          </p>
        </div>
        <div className="cs__card">
          <h2 className="cs__h2">Users / Stakeholders</h2>
          <ul className="cs__list">
            <li><strong>Recruiters</strong> — need fast positioning clarity.</li>
            <li><strong>Hiring managers</strong> — need evidence of decisions and outcomes.</li>
            <li><strong>Engineers</strong> — need proof of technical fluency and collaboration style.</li>
          </ul>
        </div>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Key Product Decisions I Owned</h2>
        <ul className="cs__list">
          <li>Made <strong>systems</strong> the primary unit of value (not project screenshots).</li>
          <li>Separated <strong>Product Systems</strong> vs <strong>Regulated Delivery (MedTech)</strong> to show range without losing coherence.</li>
          <li>Reframed technical details as <strong>supporting proof</strong> rather than identity.</li>
          <li>Optimized copy and structure for a <strong>30-second scan</strong>.</li>
        </ul>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Scope</h2>
        <ul className="cs__list">
          <li>Hero + About framing (Technical PM identity)</li>
          <li>Timeline and milestones (outcome-oriented narrative)</li>
          <li>Case studies (problem → constraints → decisions → outcomes)</li>
          <li>Skills (product capabilities first; tech as supporting)</li>
        </ul>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Stack (Supporting)</h2>
        <p className="cs__p">React + Vite, Tailwind/CSS, lucide-react icons.</p>
      </div>

      <CaseStudyLinks />
    </div>
  );
}
