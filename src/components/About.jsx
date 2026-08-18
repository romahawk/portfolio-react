import React from "react";
import {
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  ClipboardCheck,
  Layers,
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
  "Practical learning via prototypes and demos",
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
              {deText("Master's in Software Development, applied to AI workflow delivery", lang)}
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
            <div className="about__eyebrow">{deText("MedTech background", lang)}</div>
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
          <div className="about__section-card about__section-card--milestones">
            <div className="about__eyebrow">{deText("Selected milestones", lang)}</div>
            <h3 className="about__heading">
              <BriefcaseBusiness size={18} className="icon about__icon" />
              {deText("MedTech implementation record", lang)}
            </h3>
            <ol className="about__milestone-list">
              {milestones.map((milestone, i) => (
                <li key={milestone}>
                  <span className="about__milestone-num">{String(i + 1).padStart(2, "0")}</span>
                  <span>{milestone}</span>
                </li>
              ))}
            </ol>
          </div>
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
              <a href="/ai" className="btn btn--ghost">
                {deText("Explore AI Consulting", lang)}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
