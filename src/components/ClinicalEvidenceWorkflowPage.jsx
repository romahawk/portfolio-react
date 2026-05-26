import React from "react";
import {
  ArrowRight,
  ClipboardCheck,
  FileArchive,
  FileSearch,
  GitBranch,
  ListChecks,
  ShieldCheck,
  TableProperties,
  UserCheck,
} from "lucide-react";

const AUDIT_HREF = "mailto:romazuryk@proton.me?subject=AI%20Workflow%20Audit%20Request";
const CONTACT_HREF = "mailto:romazuryk@proton.me?subject=Clinical%20Evidence%20Workflow%20Inquiry";

const WORKFLOW_STEPS = [
  "Source collection",
  "Evidence extraction",
  "Claim mapping",
  "Gap detection",
  "Human review",
  "Versioning",
  "Export / handover",
];

const AI_ROLES = [
  "Summarization",
  "Classification",
  "Claim-evidence matching",
  "Gap detection",
  "Draft generation",
  "Review preparation",
];

const COMPLIANCE_POINTS = [
  "Human-in-the-loop review",
  "Source traceability",
  "Audit trail",
  "Version history",
  "Review ownership",
  "No black-box regulatory decisions",
];

const EVIDENCE_BLOCKS = [
  { title: "Workflow map", icon: GitBranch, text: "States, handoffs, review gates, and ownership from source intake to handover." },
  { title: "Dashboard mockup", icon: ClipboardCheck, text: "Queue health, unmapped claims, review status, evidence gaps, and export readiness." },
  { title: "Evidence table", icon: TableProperties, text: "Source, study type, indication, claim support, reviewer notes, and confidence markers." },
  { title: "Claim mapping view", icon: FileSearch, text: "Product claims connected to source passages, gaps, review status, and rationale." },
  { title: "SOP / handover output", icon: FileArchive, text: "Reusable operating notes, acceptance criteria, and reviewer-ready export package." },
];

export default function ClinicalEvidenceWorkflowPage() {
  return (
    <div className="clinical-page">
      <section className="clinical-page__hero">
        <div className="container clinical-page__hero-inner">
          <div className="clinical-page__hero-copy reveal">
            <p className="hero__eyebrow">MEDTECH AI WORKFLOW SYSTEM</p>
            <h1>AI-Assisted Clinical Evidence Workflow for MedTech Teams</h1>
            <p>
              A compliance-aware workflow concept for turning scattered clinical evidence,
              product claims, PDFs, studies, and internal knowledge into a structured,
              traceable review system.
            </p>
            <div className="clinical-page__actions">
              <a href={AUDIT_HREF} className="btn btn--primary">Request AI Workflow Audit</a>
              <a href="/ai-workflow/clinical-evidence-workflow" className="btn btn--ghost">
                View Reference Workflow <ArrowRight size={15} className="icon ml-1" />
              </a>
              <a href={CONTACT_HREF} className="btn btn--ghost">Contact</a>
            </div>
          </div>

          <aside className="clinical-page__hero-panel reveal reveal--delay-1" aria-label="Concept boundaries">
            <ShieldCheck size={22} className="clinical-page__icon" aria-hidden="true" />
            <h2>Concept boundary</h2>
            <p>
              This page describes a workflow concept and product-system direction.
              It does not claim to be certified medical software, a regulatory approval tool,
              or a substitute for qualified clinical, regulatory, or legal review.
            </p>
          </aside>
        </div>
      </section>

      <section className="section container clinical-page__section">
        <div className="clinical-page__section-head reveal">
          <p className="clinical-page__kicker">Problem</p>
          <h2><span className="about__chev">&gt;</span> Evidence review breaks when the sources stay scattered</h2>
        </div>
        <div className="clinical-page__two-col">
          <article className="clinical-page__card reveal">
            <h3>Scattered source reality</h3>
            <p>
              Clinical evidence can live across PDFs, studies, spreadsheets, internal documents,
              product notes, meeting decisions, and reviewer comments. Teams often know the material
              exists, but cannot quickly see what supports which claim.
            </p>
          </article>
          <article className="clinical-page__card reveal reveal--delay-1">
            <h3>Operational risk</h3>
            <p>
              Manual review creates delays, duplicated work, weak traceability, and decision risk.
              The hidden cost is not only time; it is the lack of a shared evidence-to-claim system.
            </p>
          </article>
        </div>
      </section>

      <section className="section container clinical-page__section">
        <div className="clinical-page__section-head reveal">
          <p className="clinical-page__kicker">Workflow System</p>
          <h2><span className="about__chev">&gt;</span> From evidence intake to handover</h2>
        </div>
        <ol className="clinical-page__workflow">
          {WORKFLOW_STEPS.map((step, index) => (
            <li className="clinical-page__workflow-step reveal" key={step}>
              <span>0{index + 1}</span>
              <strong>{step}</strong>
            </li>
          ))}
        </ol>
      </section>

      <section className="section container clinical-page__section clinical-page__band">
        <div className="clinical-page__section-head reveal">
          <p className="clinical-page__kicker">AI Role</p>
          <h2><span className="about__chev">&gt;</span> AI assists the review workflow, not the final decision</h2>
          <p>
            AI is positioned as a leverage layer for preparing, organizing, comparing,
            and drafting review material. Human reviewers keep ownership of interpretation,
            acceptance, and regulated decisions.
          </p>
        </div>
        <div className="clinical-page__grid">
          {AI_ROLES.map((role, index) => (
            <article className={`clinical-page__mini reveal reveal--delay-${Math.min(index + 1, 3)}`} key={role}>
              <ListChecks size={17} className="clinical-page__icon" aria-hidden="true" />
              <h3>{role}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section container clinical-page__section">
        <div className="clinical-page__section-head reveal">
          <p className="clinical-page__kicker">Compliance-Aware Design</p>
          <h2><span className="about__chev">&gt;</span> Built around reviewability and traceability</h2>
        </div>
        <div className="clinical-page__grid clinical-page__grid--three">
          {COMPLIANCE_POINTS.map((point, index) => (
            <article className={`clinical-page__mini reveal reveal--delay-${Math.min(index + 1, 3)}`} key={point}>
              <UserCheck size={17} className="clinical-page__icon" aria-hidden="true" />
              <h3>{point}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section container clinical-page__section">
        <div className="clinical-page__section-head reveal">
          <p className="clinical-page__kicker">Prototype / System Evidence</p>
          <h2><span className="about__chev">&gt;</span> What the concept would make visible</h2>
        </div>
        <div className="clinical-page__evidence-grid">
          {EVIDENCE_BLOCKS.map(({ title, icon, text }, index) => (
            <article className={`clinical-page__evidence-card reveal reveal--delay-${Math.min(index + 1, 3)}`} key={title}>
              {React.createElement(icon, { size: 20, className: "clinical-page__icon", "aria-hidden": "true" })}
              <h3>{title}</h3>
              <p>{text}</p>
              <div className="clinical-page__placeholder" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section container clinical-page__final">
        <div className="clinical-page__final-inner reveal">
          <p className="clinical-page__kicker">Next step</p>
          <h2>Turn one evidence workflow into an auditable system concept</h2>
          <p>
            Start with a narrow review problem: one product area, evidence set, claim family,
            or handover bottleneck. The goal is a practical workflow model before any heavy build.
          </p>
          <div className="clinical-page__actions">
            <a href={AUDIT_HREF} className="btn btn--primary">Request AI Workflow Audit</a>
            <a href={CONTACT_HREF} className="btn btn--ghost">Contact</a>
          </div>
        </div>
      </section>
    </div>
  );
}
