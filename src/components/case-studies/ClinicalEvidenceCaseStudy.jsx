import React from "react";

export default function ClinicalEvidenceCaseStudy() {
  return (
    <article className="cs">
      <header className="cs__hero">
        <p className="cs__eyebrow">Flagship Proof</p>
        <h1 className="cs__title">Clinical Evidence Workflow</h1>
        <p className="cs__subtitle">
          AI-assisted workflow for MedTech evidence review, claim mapping,
          traceability, and handover.
        </p>
      </header>

      <div id="founder-lens" data-cs-section="founder-lens" className="cs__card cs__card--insight">
        <h2>Founder Lens</h2>
        <p>
          The system frames evidence review as an operational workflow, not a
          document task. The goal is to make every claim easier to inspect,
          support, challenge, and hand over.
        </p>
      </div>

      <div id="problem-context" data-cs-section="problem-context" className="cs__card">
        <h2>Problem & Context</h2>
        <p>
          MedTech evidence work often spans PDFs, clinical notes, product
          claims, regulatory expectations, and reviewer comments. Without a
          shared structure, teams lose traceability and repeat manual review.
        </p>
      </div>

      <div id="constraints" data-cs-section="constraints" className="cs__card">
        <h2>Constraints</h2>
        <ul>
          <li>Evidence outputs need clear source references and reviewer control.</li>
          <li>AI can assist extraction and mapping, but human review owns decisions.</li>
          <li>Handover artifacts must be readable by product, regulatory, and commercial teams.</li>
        </ul>
      </div>

      <div id="product-decisions" data-cs-section="product-decisions" className="cs__card cs__card--warm">
        <h2>Key Decisions</h2>
        <ul>
          <li>Model claims, evidence sources, confidence, and review status as first-class workflow objects.</li>
          <li>Use AI for draft extraction, gap surfacing, and structured summaries.</li>
          <li>Keep traceability visible so every mapped claim can be audited back to source material.</li>
        </ul>
      </div>

      <div id="architecture" data-cs-section="architecture" className="cs__card cs__card--cool">
        <h2>Architecture</h2>
        <p>
          The workflow is organized around intake, source parsing, claim mapping,
          review states, traceability matrix output, SOP notes, and handover.
          Each stage has explicit acceptance criteria and review checkpoints.
        </p>
      </div>

      <div id="roadmap" data-cs-section="roadmap" className="cs__card cs__card--interactive">
        <h2>Roadmap</h2>
        <ol>
          <li>Prototype evidence intake and claim mapping schema.</li>
          <li>Validate AI-assisted extraction against reviewer expectations.</li>
          <li>Package SOP, traceability matrix, and handover template.</li>
        </ol>
      </div>

      <div id="outcomes" data-cs-section="outcomes" className="cs__card cs__card--success">
        <h2>Outcomes</h2>
        <p>
          The proof demonstrates regulated workflow thinking: structured inputs,
          explicit review states, source-backed outputs, and a handover model
          suitable for teams that need speed without losing auditability.
        </p>
      </div>

      <div id="gtm" data-cs-section="gtm" className="cs__card cs__card--warm">
        <h2>Business Model</h2>
        <p>
          Best suited as an audit or pilot engagement for MedTech and HealthTech
          teams reviewing clinical evidence, claims, product messaging, or
          regulatory-adjacent documentation workflows.
        </p>
      </div>
    </article>
  );
}
