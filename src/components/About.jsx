import React from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  ClipboardCheck,
  Layers,
  ShieldCheck,
  Users,
  Workflow,
} from "lucide-react";

const IMPLEMENTATION_AREAS = [
  "OR and clinical workflow environments",
  "Medical equipment implementation and handover",
  "Stakeholder coordination across hospitals, vendors, and technical teams",
  "Documentation, training, support, and visibility gaps",
  "Judgment about where human review must remain",
];

const EXPERIENCE_GIVES = [
  "Understands where workflows break",
  "Designs for ownership, review, and handover",
  "Translates messy operational context into system requirements",
  "Avoids over-automating high-risk workflows",
];

const FOCUS_CARDS = [
  {
    title: "AI-assisted delivery",
    text:
      "Using AI to accelerate workflow discovery, prototyping, documentation, and implementation support while keeping human judgment visible.",
  },
  {
    title: "Product & workflow systems",
    text:
      "Turning operational complexity into product concepts, requirements, dashboards, SOPs, and handover-ready systems.",
  },
  {
    title: "Regulated operations proof",
    text:
      "Using MedTech and regulated-operations experience as trust proof for high-friction workflows, not as the primary commercial identity.",
  },
];

const PROBLEM_SPACES = [
  "AI Workflow Opportunity Audit",
  "Prototype Sprint",
  "Internal Assistant / SOP System",
  "Dashboard or workflow tool",
];

const EMPLOYMENT_ROLES = [
  "AI Product Manager",
  "Technical Product Manager",
  "Product Operations Lead",
  "MedTech / HealthTech Product Manager",
];

const PROOF_AREAS = [
  "Documentation and handover systems",
  "Operational dashboards",
  "Compliance-aware workflow automation",
  "MedTech implementation workflows",
  "OR / hospital workflow systems",
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

const TECH_FOUNDATION = [
  "Master's in Software Development",
  "Applied AI automation and workflow systems",
  "AI-assisted development",
  "Full-stack product implementation",
  "Continuous learning through practical demos, prototypes, and documentation",
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
  const implementationAreas = IMPLEMENTATION_AREAS;
  const experienceGives = EXPERIENCE_GIVES;
  const focusCards = FOCUS_CARDS;
  const roleCards = [
    { title: "For consulting clients", items: PROBLEM_SPACES },
    { title: "For product and employment roles", items: EMPLOYMENT_ROLES },
    { title: "Where regulated proof helps", items: PROOF_AREAS },
  ];
  const milestones = MEDTECH_MILESTONES;

  return (
    <section id="about" className="section container about">
      <div className="about__container about__container--systems">
        <div className="about__row about__row--two-columns reveal reveal--delay-1">
          <div className="about__photo">
            <img
              src="/images/profile.jpg"
              alt="Roman Mazuryk portrait"
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
            <p className="about__text">My work sits between operational reality and product structure: understanding where workflows break, then designing AI-assisted systems that make the work clearer, reviewable, and easier to execute.</p>
          </div>
        </div>

        <div className="about__row reveal">
          <div className="about__section-card about__section-card--foundation">
            <div className="about__eyebrow">Technical foundation</div>
            <h3 className="about__heading">
              <Code2 size={18} className="icon about__icon" />
              Technical Foundation & Continuous AI Learning
            </h3>
            <p className="about__text">
              Alongside hands-on product and implementation work, I'm completing a Master's in Software Development and continuously deepening my applied AI skills across automation, AI-assisted development, workflow systems, and practical deployment.
            </p>
            <div className="about__foundation-list" aria-label="Technical foundation and AI learning areas">
              {TECH_FOUNDATION.map((item) => (
                <span className="about__foundation-item" key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="about__row reveal">
          <div className="about__section-card about__section-card--implementation">
            <div className="about__eyebrow">Regulated operations proof</div>
            <h3 className="about__heading">
              <ClipboardCheck size={18} className="icon about__icon" />
              Regulated operations experience that improves AI system design
            </h3>
            <p className="about__text">This experience matters because AI workflow systems fail when they ignore real constraints: handovers, ownership, documentation, training, exceptions, and review points.</p>

            <div className="about__implementation-grid">
              <div>
                <h4>Strongest proof points</h4>
                <CheckList items={implementationAreas} />
              </div>
              <div>
                <h4>How it improves AI workflow design</h4>
                <CheckList items={experienceGives} />
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
              I do not start from what AI can do. I start from where the workflow breaks, where risk appears, and what system should exist.
            </p>
            <p className="about__text">AI is the acceleration layer: useful for discovery, prototyping, documentation, and delivery, but the workflow logic, ownership, and review model must stay clear.</p>
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
              {focusCards.map((card, index) => (
                <article className={`about__value-card about__value-card--${index + 1}`} key={card.title}>
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
            <p className="about__text">My strongest fit is AI workflow systems for operations-heavy teams, backed by product judgment, regulated-operations credibility, and implementation proof.</p>
            <div className="about__role-grid">
              <article className="about__role-card">
                <h4>{roleCards[0].title}</h4>
                <CheckList items={roleCards[0].items} />
                <a href="/contact" className="btn btn--primary">
                  Discuss a Workflow <ArrowRight size={15} className="icon ml-1" />
                </a>
              </article>

              <article className="about__role-card">
                <h4>{roleCards[1].title}</h4>
                <CheckList items={roleCards[1].items} />
                <a href="/proof-of-work" className="btn btn--ghost">
                  View Proof of Work
                </a>
              </article>

              <article className="about__role-card">
                <h4>{roleCards[2].title}</h4>
                <CheckList items={roleCards[2].items} />
                <a href="/medtech" className="btn btn--ghost">
                  View Trust Proof
                </a>
              </article>
            </div>
          </div>
        </div>

        <div className="about__row reveal">
          <details className="about__timeline">
            <summary>Selected regulated-operations milestones</summary>
            <ol>
              {milestones.map((milestone) => (
                <li key={milestone}>{milestone}</li>
              ))}
            </ol>
          </details>
        </div>

        <div className="about__row reveal">
          <div className="about__cta">
            <div>
              <div className="about__eyebrow">Next step</div>
              <h3>Discuss one workflow worth fixing</h3>
            </div>
            <div className="about__cta-actions">
              <a href="/contact" className="btn btn--primary">
                Discuss a Workflow <Users size={15} className="icon ml-1" />
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
