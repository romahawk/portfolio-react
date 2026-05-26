import React from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  Layers,
  ShieldCheck,
  Users,
  Workflow,
} from "lucide-react";

const IMPLEMENTATION_AREAS = [
  "Operating room surgical lights and video integration",
  "OR video/audio routing, recording, and surgical workflow support",
  "Medical gas pendants for OR and ICU environments",
  "Hyperbaric chamber implementation",
  "Surgical collaboration and education workflows",
  "Medical equipment delivery, installation, training, support, and handover",
  "Coordination between hospitals, vendors, technical teams, and decision-makers",
];

const EXPERIENCE_GIVES = [
  "Practical understanding of how hospital workflows break",
  "Sensitivity to documentation, ownership, handover, and visibility gaps",
  "Ability to translate operational complexity into product requirements",
  "Better judgment about where AI can help and where human review must remain",
  "Credibility in MedTech, HealthTech, implementation, product, and workflow roles",
];

const FOCUS_CARDS = [
  {
    title: "Product & workflow systems",
    text:
      "Turning operational complexity into product concepts, requirements, dashboards, SOPs, and handover-ready systems.",
  },
  {
    title: "AI-assisted delivery",
    text:
      "Using AI to accelerate discovery, prototyping, documentation, and implementation support without replacing human judgment.",
  },
  {
    title: "MedTech and regulated operations",
    text:
      "Applying workflow-first thinking to HealthTech, MedTech, pharma logistics, clinical operations, and implementation-heavy B2B environments.",
  },
];

const HIRING_ROLES = [
  "AI Product Manager",
  "Technical Product Manager",
  "Product Operations Lead",
  "MedTech / HealthTech Product Manager",
  "Implementation / Solutions Product roles",
];

const PROBLEM_SPACES = [
  "MedTech implementation workflows",
  "OR / hospital workflow systems",
  "Documentation and handover systems",
  "Operational dashboards",
  "Compliance-aware workflow automation",
];

const COMPANY_PATHS = [
  "AI Workflow Audit",
  "Product Discovery Sprint",
  "Workflow Prototype Support",
  "SOP / documentation systems",
  "Operator-in-residence support",
];

const MEDTECH_MILESTONES = [
  "First EP lab implementation support in Ukraine",
  "Surgical lights and OR video integration projects",
  "Hyperbaric chamber implementation",
  "Medical gas pendant implementations for OR/ICU",
  "Integrated OR video/audio systems",
  "Surgical education and collaboration workflow concepts",
  "Hospital equipment handover and training projects",
];

function CheckList({ items }) {
  return (
    <ul className="about__check-list">
      {items.map((item) => (
        <li key={item}>
          <CheckCircle2 size={15} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function About() {
  return (
    <section id="about" className="section container about">
      <div className="about__container about__container--systems">
        <div className="about__row about__row--two-columns reveal reveal--delay-1">
          <div className="about__photo">
            <img
              src="/images/profile.jpg"
              alt="Roman Mazuryk profile"
              className="about__photo-img"
              loading="lazy"
              decoding="async"
              width="320"
              height="320"
            />
          </div>

          <div className="about__section-card">
            <div className="about__eyebrow">Background</div>
            <h3 className="about__heading">
              <Layers size={18} className="icon about__icon" />
              A practical operator foundation
            </h3>
            <p className="about__text">
              My work sits between implementation reality and product structure: understanding
              how teams actually coordinate work, then shaping clearer systems around that reality.
            </p>
          </div>
        </div>

        <div className="about__row reveal">
          <div className="about__section-card about__section-card--implementation">
            <div className="about__eyebrow">Domain credibility</div>
            <h3 className="about__heading">
              <ClipboardCheck size={18} className="icon about__icon" />
              Real-world MedTech implementation experience
            </h3>
            <p className="about__text">
              Before moving into product systems and AI-assisted workflows, I spent more than a
              decade working close to real MedTech implementation: hospital environments, operating
              rooms, medical equipment projects, stakeholder coordination, training, support, and
              handover.
            </p>

            <div className="about__implementation-grid">
              <div>
                <h4>Selected implementation areas</h4>
                <CheckList items={IMPLEMENTATION_AREAS} />
              </div>
              <div>
                <h4>What this experience gives me</h4>
                <CheckList items={EXPERIENCE_GIVES} />
              </div>
            </div>
          </div>
        </div>

        <div className="about__row reveal">
          <div className="about__section-card about__section-card--cool">
            <div className="about__eyebrow">Operating philosophy</div>
            <h3 className="about__heading">
              <Workflow size={18} className="icon about__icon" />
              Operator-first, AI-assisted
            </h3>
            <p className="about__text about__text--large">
              I do not start from what AI can do. I start from where the workflow breaks,
              where risk appears, and what system should exist.
            </p>
            <p className="about__text">
              AI is the acceleration layer: useful for discovery, prototyping, documentation, and
              delivery, but the workflow logic, ownership, and review model must stay clear.
            </p>
          </div>
        </div>

        <div className="about__row reveal">
          <div className="about__section-card">
            <div className="about__eyebrow">Current focus</div>
            <h3 className="about__heading">
              <BriefcaseBusiness size={18} className="icon about__icon" />
              Where this experience translates today
            </h3>
            <div className="about__focus-grid">
              {FOCUS_CARDS.map((card) => (
                <article className="about__value-card" key={card.title}>
                  <h4>{card.title}</h4>
                  <p className="about__text">{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="about__row reveal">
          <div className="about__section-card about__section-card--warm">
            <div className="about__eyebrow">Role fit</div>
            <h3 className="about__heading">
              <ShieldCheck size={18} className="icon about__icon" />
              Where this background creates value
            </h3>
            <p className="about__text">
              My strongest fit is at the intersection of MedTech domain experience,
              product/system thinking, and AI-assisted execution.
            </p>
            <div className="about__role-grid">
              <article className="about__role-card">
                <h4>For product and operations teams</h4>
                <CheckList items={HIRING_ROLES} />
                <a href="/proof-of-work" className="btn btn--primary">
                  View Proof of Work <ArrowRight size={15} className="icon ml-1" />
                </a>
              </article>

              <article className="about__role-card">
                <h4>Best-fit problem spaces</h4>
                <CheckList items={PROBLEM_SPACES} />
                <a href="/ai-workflow" className="btn btn--ghost">
                  Explore AI Workflows
                </a>
              </article>

              <article className="about__role-card">
                <h4>For companies</h4>
                <CheckList items={COMPANY_PATHS} />
                <a href="/collaborate" className="btn btn--ghost">
                  Work With Me
                </a>
              </article>
            </div>
          </div>
        </div>

        <div className="about__row reveal">
          <details className="about__timeline">
            <summary>Selected MedTech implementation milestones</summary>
            <ol>
              {MEDTECH_MILESTONES.map((milestone) => (
                <li key={milestone}>{milestone}</li>
              ))}
            </ol>
          </details>
        </div>

        <div className="about__row reveal">
          <div className="about__cta">
            <div>
              <div className="about__eyebrow">Next step</div>
              <h3>Talk roles, workflows, or one system worth fixing</h3>
            </div>
            <div className="about__cta-actions">
              <a href="/contact" className="btn btn--primary">
                Contact <Users size={15} className="icon ml-1" />
              </a>
              <a href="/proof-of-work" className="btn btn--ghost">
                View Proof of Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
