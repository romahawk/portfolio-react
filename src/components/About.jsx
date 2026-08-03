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
import { useTranslation } from "../context/LangContext.jsx";
import { deText, localizeGermanValue } from "../locales/germanCopy.js";

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
  const { lang } = useTranslation();
  const localizedItems = localizeGermanValue(items, lang);

  return (
    <ul className="about__check-list">
      {localizedItems.map((item) => (
        <li key={item}>
          <CheckCircle2 size={15} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function About() {
  const { lang } = useTranslation();
  const implementationAreas = IMPLEMENTATION_AREAS;
  const experienceGives = EXPERIENCE_GIVES;
  const focusCards = localizeGermanValue(FOCUS_CARDS, lang);
  const roleCards = [
    { title: "For consulting clients", items: PROBLEM_SPACES },
    { title: "For product and employment roles", items: EMPLOYMENT_ROLES },
    { title: "Where regulated proof helps", items: PROOF_AREAS },
  ];
  const localizedRoleCards = localizeGermanValue(roleCards, lang);
  const milestones = localizeGermanValue(MEDTECH_MILESTONES, lang);
  const techFoundation = localizeGermanValue(TECH_FOUNDATION, lang);

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
            <div className="about__eyebrow">{deText("Background", lang)}</div>
            <h3 className="about__heading">
              <Layers size={18} className="icon about__icon" />
              {deText("A practical operator foundation", lang)}
            </h3>
            <p className="about__text">{deText("My work sits between operational reality and product structure: understanding where workflows break, then designing AI-assisted systems that make the work clearer, reviewable, and easier to execute.", lang)}</p>
          </div>
        </div>

        <div className="about__row reveal">
          <div className="about__section-card about__section-card--foundation">
            <div className="about__eyebrow">{deText("Technical foundation", lang)}</div>
            <h3 className="about__heading">
              <Code2 size={18} className="icon about__icon" />
              {deText("Technical Foundation & Continuous AI Learning", lang)}
            </h3>
            <p className="about__text">
              {deText("Alongside hands-on product and implementation work, I'm completing a Master's in Software Development and continuously deepening my applied AI skills across automation, AI-assisted development, workflow systems, and practical deployment.", lang)}
            </p>
            <div className="about__foundation-list" aria-label="Technical foundation and AI learning areas">
              {techFoundation.map((item) => (
                <span className="about__foundation-item" key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="about__row reveal">
          <div className="about__section-card about__section-card--implementation">
            <div className="about__eyebrow">{deText("Regulated operations proof", lang)}</div>
            <h3 className="about__heading">
              <ClipboardCheck size={18} className="icon about__icon" />
              {deText("Regulated operations experience that improves AI system design", lang)}
            </h3>
            <p className="about__text">{deText("This experience matters because AI workflow systems fail when they ignore real constraints: handovers, ownership, documentation, training, exceptions, and review points.", lang)}</p>

            <div className="about__implementation-grid">
              <div>
                <h4>{deText("Strongest proof points", lang)}</h4>
                <CheckList items={implementationAreas} />
              </div>
              <div>
                <h4>{deText("How it improves AI workflow design", lang)}</h4>
                <CheckList items={experienceGives} />
              </div>
            </div>
          </div>
        </div>

        <div className="about__row reveal">
          <div className="about__section-card about__section-card--cool">
            <div className="about__eyebrow">{deText("Operating philosophy", lang)}</div>
            <h3 className="about__heading">
              <Workflow size={18} className="icon about__icon" />
              {deText("Operator-first, AI-assisted", lang)}
            </h3>
            <p className="about__text about__text--large">
              {deText("I do not start from what AI can do. I start from where the workflow breaks, where risk appears, and what system should exist.", lang)}
            </p>
            <p className="about__text">{deText("AI is the acceleration layer: useful for discovery, prototyping, documentation, and delivery, but the workflow logic, ownership, and review model must stay clear.", lang)}</p>
          </div>
        </div>

        <div className="about__row reveal">
          <div className="about__section-card">
            <div className="about__eyebrow">{deText("Current focus", lang)}</div>
            <h3 className="about__heading">
              <BriefcaseBusiness size={18} className="icon about__icon" />
              {deText("Where this experience translates today", lang)}
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
            <div className="about__eyebrow">{deText("Role fit", lang)}</div>
            <h3 className="about__heading">
              <ShieldCheck size={18} className="icon about__icon" />
              {deText("Where this background creates value", lang)}
            </h3>
            <p className="about__text">{deText("My strongest fit is AI workflow systems for operations-heavy teams, backed by product judgment, regulated-operations credibility, and implementation proof.", lang)}</p>
            <div className="about__role-grid">
              <article className="about__role-card">
                <h4>{localizedRoleCards[0].title}</h4>
                <CheckList items={localizedRoleCards[0].items} />
                <a href="/contact" className="btn btn--primary">
                  {deText("Discuss a Workflow", lang)} <ArrowRight size={15} className="icon ml-1" />
                </a>
              </article>

              <article className="about__role-card">
                <h4>{localizedRoleCards[1].title}</h4>
                <CheckList items={localizedRoleCards[1].items} />
                <a href="/proof-of-work" className="btn btn--ghost">
                  {deText("View Proof of Work", lang)}
                </a>
              </article>

              <article className="about__role-card">
                <h4>{localizedRoleCards[2].title}</h4>
                <CheckList items={localizedRoleCards[2].items} />
                <a href="/medtech" className="btn btn--ghost">
                  {deText("View Trust Proof", lang)}
                </a>
              </article>
            </div>
          </div>
        </div>

        <div className="about__row reveal">
          <details className="about__timeline">
            <summary>{deText("Selected regulated-operations milestones", lang)}</summary>
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
              <div className="about__eyebrow">{deText("Next step", lang)}</div>
              <h3>{deText("Discuss one workflow worth fixing", lang)}</h3>
            </div>
            <div className="about__cta-actions">
              <a href="/contact" className="btn btn--primary">
                {deText("Discuss a Workflow", lang)} <Users size={15} className="icon ml-1" />
              </a>
              <a href="/proof-of-work" className="btn btn--ghost">
                {deText("View Proof of Work", lang)}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
