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

const ABOUT_BODY = [
  "I founded and ran Medintegro, a MedTech systems integrator, and delivered 20+ projects for hospitals and clinics with vendors across the EU, US and Asia. Most recently, at PharmaLogis, I built and rolled out internal systems that cut manual coordination by an estimated 30%.",
  "I know APIs and data flows well enough to steer engineering teams, and clinical and operational work well enough to run discovery, workshops and go-live. I also build software myself, including LLM-based workflows.",
  "I'm looking for a permanent TPM or implementation role in Hamburg or remote across the EU.",
];

const ABOUT_FACTS = [
  { label: "Education", value: "M.Sc. Computer Science (Specialization in Software Engineering) · Woolf University / Neoversity · expected 12/2026" },
  { label: "Languages", value: "Ukrainian and Russian (native) · English C1 · German B1, certification exam Dec 2026" },
  { label: "Location", value: "Hamburg area · EU work authorisation · open to remote across the EU" },
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
  const body = localizeGermanValue(ABOUT_BODY, lang);
  const facts = localizeGermanValue(ABOUT_FACTS, lang);

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
            {body.map((paragraph) => <p className="about__text" key={paragraph}>{paragraph}</p>)}
          </div>
        </div>

        <div className="about__row reveal">
          <div className="about__section-card about__section-card--foundation">
            <div className="about__eyebrow">{deText("Facts", lang)}</div>
            <h3 className="about__heading">
              <Code2 size={18} className="icon about__icon" />
              {deText("Education, languages and location", lang)}
            </h3>
            {facts.map((fact) => (
              <p className="about__text" key={fact.label}>
                <strong>{fact.label}:</strong> {fact.value}
              </p>
            ))}
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
