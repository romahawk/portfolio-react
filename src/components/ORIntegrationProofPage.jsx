import React from "react";
import { ArrowRight } from "lucide-react";
import PageHero from "./common/PageHero.jsx";
import StatusBadge from "./StatusBadge.jsx";

const complexityElements = [
  "Surgical lighting",
  "OR video/audio signals",
  "Medical displays",
  "Imaging / DICOM / PACS context where relevant",
  "Medical gas / room infrastructure where relevant",
  "Recording and streaming workflows",
  "Hospital IT / technical teams",
  "Surgeons and clinical users",
  "Implementation and handover documentation",
];

const proofCards = [
  {
    title: "Domain understanding",
    text: "Exposure to operating room environments, surgical infrastructure, equipment implementation, and hospital workflow constraints.",
  },
  {
    title: "Workflow/system thinking",
    text: "Ability to see how equipment, people, documentation, signals, room readiness, and handover states interact as one operational system.",
  },
  {
    title: "Stakeholder coordination",
    text: "Experience communicating across hospitals, vendors, technical teams, clinical users, and decision-makers during implementation work.",
  },
  {
    title: "Implementation reality",
    text: "Understanding of delivery, installation coordination, training, support, documentation, acceptance, and practical handover friction.",
  },
  {
    title: "Foundation for AI-assisted workflow systems",
    text: "A grounded base for mapping workflow risk, traceability, auditability, documentation gaps, and operational visibility opportunities.",
  },
];

const futureOpportunities = [
  "OR utilization optimization",
  "Surgical recording indexing",
  "AI documentation and handover",
  "Equipment readiness workflows",
  "Biomedical maintenance systems",
  "Surgical collaboration systems",
];

const contextImages = [
  {
    src: "/images/or-integration.jpg",
    alt: "Operating room integration environment with surgical equipment and visualization systems",
  },
  {
    src: "/images/system-alignment.png",
    alt: "System alignment diagram for connected medical equipment and workflow coordination",
  },
  {
    src: "/images/kyiv-1_2.jpg",
    alt: "Hospital implementation environment showing medical equipment and room infrastructure",
  },
];

export default function ORIntegrationProofPage() {
  return (
    <div className="proof-page or-proof-page">
      <PageHero
        eyebrow="REAL MEDTECH IMPLEMENTATION EXPERIENCE"
        title="OR Integration & Surgical Workflow Systems"
        subtitle="Real-world MedTech implementation experience across operating room infrastructure, surgical equipment integration, video/audio workflows, clinical handover, and hospital stakeholder coordination."
        primaryCta={{ label: "Explore AI Workflows", href: "/ai-workflow", icon: <ArrowRight size={15} className="icon ml-1" aria-hidden="true" /> }}
        secondaryCta={{ label: "Work With Me", href: "/collaborate" }}
        tertiaryCta={{ label: "Contact", href: "/contact" }}
        scrollTargetId="or-context"
      >
        <div className="or-proof__hero-meta">
          <StatusBadge status="Real MedTech Implementation Experience" />
          <span>Operating rooms / surgical infrastructure / medical equipment integration</span>
        </div>
      </PageHero>

      <section id="or-context" className="section container or-proof__section">
        <div className="or-proof__section-head reveal">
          <p className="proof-page__kicker">Context</p>
          <h2>Integrated OR environments are workflow systems</h2>
          <p>
            Integrated OR environments combine surgical infrastructure, medical equipment,
            audio/video routing, visualization, recording, patient data workflows, telemedicine
            possibilities, documentation, and team coordination.
          </p>
        </div>
        <div className="or-proof__image-grid reveal">
          {contextImages.map((image) => (
            <figure className="or-proof__image-card" key={image.src}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      <section className="section container or-proof__section">
        <div className="or-proof__section-head reveal">
          <p className="proof-page__kicker">Workflow complexity</p>
          <h2>Connected elements inside the operating room system</h2>
        </div>
        <div className="or-proof__chip-grid">
          {complexityElements.map((item) => (
            <span className="or-proof__chip" key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section container or-proof__section">
        <div className="or-proof__panel reveal">
          <div>
            <p className="proof-page__kicker">Role / exposure</p>
            <h2>Roman's real-world role and exposure</h2>
          </div>
          <p>
            Experience included business development, project coordination, implementation support,
            equipment delivery/installation coordination, training/handover support, and stakeholder
            communication around MedTech and OR environments.
          </p>
        </div>
      </section>

      <section className="section container or-proof__section">
        <div className="or-proof__section-head reveal">
          <p className="proof-page__kicker">What this proves</p>
          <h2>Credibility for product, workflow, implementation, and solutions roles</h2>
        </div>
        <div className="or-proof__proof-map" aria-label="Hub-and-spoke credibility proof map">
          <svg className="or-proof__data-flow" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
            <path className="or-proof__data-flow-line" d="M50 50 L50 12" />
            <path className="or-proof__data-flow-line or-proof__data-flow-line--delay-1" d="M50 50 L14 36" />
            <path className="or-proof__data-flow-line or-proof__data-flow-line--delay-2" d="M50 50 L86 36" />
            <path className="or-proof__data-flow-line or-proof__data-flow-line--delay-3" d="M50 50 L24 86" />
            <path className="or-proof__data-flow-line or-proof__data-flow-line--delay-4" d="M50 50 L76 86" />
            <circle className="or-proof__data-flow-node or-proof__data-flow-node--center" cx="50" cy="50" r="3.2" />
            <circle className="or-proof__data-flow-node" cx="50" cy="12" r="1.7" />
            <circle className="or-proof__data-flow-node" cx="14" cy="36" r="1.7" />
            <circle className="or-proof__data-flow-node" cx="86" cy="36" r="1.7" />
            <circle className="or-proof__data-flow-node" cx="24" cy="86" r="1.7" />
            <circle className="or-proof__data-flow-node" cx="76" cy="86" r="1.7" />
          </svg>
          <div className="or-proof__hub">
            <span>OR / Hospital</span>
            <strong>Workflow Reality</strong>
          </div>
          {proofCards.map((card, index) => (
            <article className={`or-proof__card or-proof__card--point-${index + 1}`} key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section container or-proof__section">
        <div className="or-proof__bridge reveal">
          <p className="proof-page__kicker">Bridge to current positioning</p>
          <h2>Real implementation background, translated into AI-assisted systems</h2>
          <p>
            This real-world implementation background now informs my work on MedTech Product &
            Workflow Systems, using AI-assisted discovery, prototyping, documentation, and delivery
            where it creates measurable value.
          </p>
        </div>
      </section>

      <section className="section container or-proof__section">
        <div className="or-proof__section-head reveal">
          <p className="proof-page__kicker">Future workflow opportunities</p>
          <h2>Concept workflows this experience can inform</h2>
          <p>
            These are future opportunities and concept workflows, not completed client projects.
          </p>
        </div>
        <div className="or-proof__chip-grid">
          {futureOpportunities.map((item) => (
            <span className="or-proof__chip or-proof__chip--concept" key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section container or-proof__section">
        <div className="or-proof__cta reveal">
          <div>
            <p className="proof-page__kicker">Next</p>
            <h2>From OR workflow exposure to structured systems</h2>
            <p>
              Explore the AI workflow library for reference systems and concept implementations
              built around documentation, handover, operational visibility, and traceability.
            </p>
          </div>
          <div className="or-proof__actions">
            <a href="/ai-workflow" className="btn btn--primary">Explore AI Workflows</a>
            <a href="/collaborate" className="btn btn--ghost">Work With Me</a>
            <a href="/contact" className="btn btn--ghost">Contact</a>
          </div>
        </div>
      </section>
    </div>
  );
}
