import React, { useState } from "react";
import {
  ArrowRight,
  Bot,
  CalendarCheck,
  ClipboardCheck,
  FileSearch,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import PageHero from "./common/PageHero.jsx";

const AUDIT_HREF = "mailto:romazuryk@proton.me?subject=AI%20Workflow%20Audit%20Request";

const WHO_FOR = [
  "MedTech / HealthTech startups scaling operations",
  "Pharma logistics and regulated operations teams",
  "Implementation-heavy B2B teams",
  "Teams with scattered documentation, manual coordination, weak handovers, or AI interest without workflow clarity",
];

const SERVICES = [
  {
    id: "ai-workflow-audit",
    title: "AI Workflow Audit",
    icon: ClipboardCheck,
    problem: "A complex workflow is slow, manual, or unclear, but the team does not yet know where AI can safely help.",
    description: "A focused remote audit to map one workflow, identify bottlenecks, assess risk, and define the first practical system path.",
    deliverables: [
      "workflow map",
      "bottleneck analysis",
      "AI opportunity matrix",
      "risk/control analysis",
      "implementation recommendations",
      "roadmap",
    ],
    outcome: "A clear, auditable starting point for one workflow improvement.",
  },
  {
    id: "ai-product-discovery-sprint",
    title: "AI Product Discovery Sprint",
    icon: FileSearch,
    problem: "The team has an AI or workflow product idea, but the use case, users, data, risks, and scope are still fuzzy.",
    description: "Discovery sprint for teams exploring AI products, internal tools, or workflow automation opportunities.",
    deliverables: [
      "problem framing",
      "user and workflow analysis",
      "product concept",
      "feature prioritization",
      "prototype direction",
      "build/no-build recommendation",
    ],
    outcome: "A sharper product direction before engineering spend.",
  },
  {
    id: "workflow-prototype-sprint",
    title: "Workflow Prototype Sprint",
    icon: Bot,
    problem: "The workflow is understood, but the team needs a tangible interface or prototype to validate the system model.",
    description: "A focused sprint to turn one selected workflow into a testable prototype or internal operating model.",
    deliverables: [
      "workflow specification",
      "prototype",
      "dashboard or structured interface",
      "review checkpoints",
      "implementation roadmap",
    ],
    outcome: "A prototype that makes the workflow visible enough to test, discuss, and refine.",
  },
  {
    id: "sop-documentation-system",
    title: "SOP / Documentation System",
    icon: ClipboardCheck,
    problem: "Process knowledge is scattered across notes, files, calls, and individual memory.",
    description: "Structure documentation, SOP support, handover artifacts, and review-ready operating records.",
    deliverables: [
      "documentation map",
      "SOP draft structure",
      "handover checklist",
      "review checkpoints",
      "source traceability model",
    ],
    outcome: "Cleaner operational memory and easier handover.",
  },
  {
    id: "medtech-ai-operator-in-residence",
    title: "MedTech AI Operator-in-Residence",
    icon: Stethoscope,
    problem: "The team needs operator-level workflow thinking alongside product, AI, and implementation coordination.",
    description: "Part-time embedded support for AI discovery, product specs, workflow modeling, and implementation coordination.",
    deliverables: [
      "workflow discovery",
      "process documentation",
      "product requirements",
      "AI use-case mapping",
      "coordination support",
      "prioritization support",
    ],
    outcome: "More structured product and workflow decisions with operator context.",
  },
  {
    id: "compliance-aware-automation-setup",
    title: "Compliance-Aware Automation Setup",
    icon: ShieldCheck,
    problem: "Automation ideas stall because ownership, review, traceability, and exception paths are unclear.",
    description: "Design automation workflows with human review, source traceability, checkpoints, and version history.",
    deliverables: [
      "automation map",
      "human-in-the-loop review model",
      "audit trail structure",
      "SOP support",
      "implementation backlog",
    ],
    outcome: "A safer automation model that keeps human review and auditability explicit.",
  },
];

const METHOD_STEPS = [
  "Map the workflow",
  "Identify bottlenecks and risks",
  "Define the system model",
  "Add AI assistance where useful",
  "Design review and traceability checkpoints",
  "Prototype, document, and hand over",
];

const PROOF_LINKS = [
  { title: "Proof of Work", href: "/proof-of-work" },
  { title: "AI Workflow Library", href: "/ai-workflow" },
];

export default function ServicesPage() {
  const [selectedServiceId, setSelectedServiceId] = useState(SERVICES[0].id);
  const selectedService = SERVICES.find((service) => service.id === selectedServiceId) || SERVICES[0];
  const SelectedIcon = selectedService.icon;

  return (
    <div className="services-page">
      <PageHero
        id="services"
        eyebrow="WORK WITH ME"
        title="AI-Assisted Workflow Collaboration for MedTech Teams"
        subtitle="I work with MedTech, HealthTech, and regulated operations teams to map complex workflows, identify bottlenecks, prototype better systems, and create implementation-ready documentation."
        primaryCta={{ label: "Start With a Workflow Audit", href: AUDIT_HREF, icon: <CalendarCheck size={16} className="icon ml-1" aria-hidden="true" /> }}
        secondaryCta={{ label: "View AI Workflow Examples", href: "/ai-workflow", icon: <ArrowRight size={15} className="icon ml-1" aria-hidden="true" /> }}
        visualType="services"
        scrollTargetId="services-overview"
      >
        <p className="services-page__hero-microcopy">
          Concepts and prototypes are scoped with human review, traceability, and clear ownership.
          No claim of certified medical software or automated regulatory decisions.
        </p>
      </PageHero>

      <section className="section container services-page__section">
        <div className="services-page__section-head reveal">
          <p className="services-page__kicker">Who this is for</p>
          <h2 className="section__title">
            <span className="about__chev">&gt;</span> Teams with operational complexity and AI pressure
          </h2>
        </div>
        <div className="services-page__fit-grid">
          {WHO_FOR.map((item) => (
            <article className="services-page__fit-card reveal" key={item}>
              {item}
            </article>
          ))}
        </div>
      </section>

      <section id="services-overview" className="section container services-page__section">
        <div className="services-page__section-head reveal">
          <p className="services-page__kicker">Collaboration offers</p>
          <h2 className="section__title">
            <span className="about__chev">&gt;</span> Commercial support for one workflow at a time
          </h2>
          <p>
            Each engagement starts from operational reality: what people do today, where the
            process fails, what AI can safely assist, and what must remain under human control.
          </p>
        </div>

        <div className="services-page__selector-tabs ux-tabs" role="tablist" aria-label="Service selector">
          {SERVICES.map((service) => (
            <button
              type="button"
              className={`ux-tab ${selectedService.id === service.id ? "ux-tab--active" : ""}`}
              onClick={() => setSelectedServiceId(service.id)}
              key={service.id}
            >
              {service.title}
            </button>
          ))}
        </div>
        <article id={selectedService.id} className="services-page__selected-service reveal">
          <div className="services-page__detail-title">
            <SelectedIcon size={18} className="services-page__icon" aria-hidden="true" />
            <h3>{selectedService.title}</h3>
          </div>
          <dl className="services-page__service-proof">
            <div>
              <dt>Problem solved</dt>
              <dd>{selectedService.problem}</dd>
            </div>
          </dl>
          <p className="services-page__service-description">{selectedService.description}</p>
          <div className="services-page__deliverables">
            <span>Deliverables</span>
            <ul>
              {selectedService.deliverables.slice(0, 6).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="services-page__expected">
            <span>Typical outcome</span>
            <strong>{selectedService.outcome}</strong>
          </div>
          <a href={AUDIT_HREF} className="btn btn--primary">Start With a Workflow Audit</a>
        </article>
      </section>

      <section id="how-it-works" className="section container services-page__section">
        <div className="services-page__method reveal">
          <Sparkles size={20} className="services-page__icon" aria-hidden="true" />
          <div>
            <p className="services-page__kicker">Method</p>
            <h2>Operator-first, AI-assisted</h2>
            <p>
              I do not start from what AI can do. I start from where the workflow breaks,
              where risk appears, and what system should exist.
            </p>
            <div className="services-page__method-steps" aria-label="Method steps">
              {METHOD_STEPS.map((step, index) => (
                <span key={step}>
                  <strong>{String(index + 1).padStart(2, "0")}</strong>
                  {step}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="proof" className="section container services-page__section">
        <div className="services-page__section-head reveal">
          <p className="services-page__kicker">Proof</p>
          <h2 className="section__title">
            <span className="about__chev">&gt;</span> See practical workflow examples
          </h2>
          <p>
            The workflow library shows transparent concept workflows, reference systems,
            prototype concepts, and proof-of-work artifacts with explicit maturity labels.
          </p>
        </div>
        <div className="services-page__proof-links">
          {PROOF_LINKS.slice(0, 4).map((proof) => (
            <a href={proof.href} className="services-page__proof-link" key={proof.href}>
              {proof.title} <ArrowRight size={14} aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      <section id="book-call" className="section container services-page__final">
        <div className="services-page__final-inner reveal">
          <p className="services-page__kicker">Next step</p>
          <h2>Start with one workflow</h2>
          <p>
            Bring one fragmented workflow, implementation bottleneck, or AI idea. I will help
            map the current process, identify safe AI assistance points, and define the first
            auditable system path.
          </p>
          <div className="services-page__actions">
            <a href={AUDIT_HREF} className="btn btn--primary">
              <CalendarCheck size={16} className="icon mr-1" />
              Start With a Workflow Audit
            </a>
            <a href="/ai-workflow" className="btn btn--ghost">
              View AI Workflow Examples
            </a>
          </div>
        </div>
      </section>

      <a href={AUDIT_HREF} className="services-page__sticky-cta">
        <CalendarCheck size={16} aria-hidden="true" />
        Start With a Workflow Audit
      </a>
    </div>
  );
}
