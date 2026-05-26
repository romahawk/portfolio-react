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
import { useTranslation } from "../context/LangContext.jsx";

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
  const { t } = useTranslation();
  const implementationAreasValue = t("site.about.implementation.areas");
  const experienceGivesValue = t("site.about.implementation.gives");
  const focusCardsValue = t("site.about.focus.cards");
  const roleCardsValue = t("site.about.role.cards");
  const milestonesValue = t("site.about.milestones.items");
  const implementationAreas = Array.isArray(implementationAreasValue) ? implementationAreasValue : IMPLEMENTATION_AREAS;
  const experienceGives = Array.isArray(experienceGivesValue) ? experienceGivesValue : EXPERIENCE_GIVES;
  const focusCards = Array.isArray(focusCardsValue) ? focusCardsValue : FOCUS_CARDS;
  const roleCards = Array.isArray(roleCardsValue) ? roleCardsValue : [];
  const milestones = Array.isArray(milestonesValue) ? milestonesValue : MEDTECH_MILESTONES;

  return (
    <section id="about" className="section container about">
      <div className="about__container about__container--systems">
        <div className="about__row about__row--two-columns reveal reveal--delay-1">
          <div className="about__photo">
            <img
              src="/images/profile.jpg"
              alt={t("about.profileAlt")}
              className="about__photo-img"
              loading="lazy"
              decoding="async"
              width="320"
              height="320"
            />
          </div>

          <div className="about__section-card">
            <div className="about__eyebrow">{t("site.about.background.eyebrow")}</div>
            <h3 className="about__heading">
              <Layers size={18} className="icon about__icon" />
              {t("site.about.background.title")}
            </h3>
            <p className="about__text">{t("site.about.background.text")}</p>
          </div>
        </div>

        <div className="about__row reveal">
          <div className="about__section-card about__section-card--implementation">
            <div className="about__eyebrow">{t("site.about.implementation.eyebrow")}</div>
            <h3 className="about__heading">
              <ClipboardCheck size={18} className="icon about__icon" />
              {t("site.about.implementation.title")}
            </h3>
            <p className="about__text">{t("site.about.implementation.text")}</p>

            <div className="about__implementation-grid">
              <div>
                <h4>{t("site.about.implementation.areasTitle")}</h4>
                <CheckList items={implementationAreas} />
              </div>
              <div>
                <h4>{t("site.about.implementation.givesTitle")}</h4>
                <CheckList items={experienceGives} />
              </div>
            </div>
          </div>
        </div>

        <div className="about__row reveal">
          <div className="about__section-card about__section-card--cool">
            <div className="about__eyebrow">{t("site.about.philosophy.eyebrow")}</div>
            <h3 className="about__heading">
              <Workflow size={18} className="icon about__icon" />
              {t("site.about.philosophy.title")}
            </h3>
            <p className="about__text about__text--large">
              {t("site.about.philosophy.text")}
            </p>
            <p className="about__text">{t("site.about.philosophy.support")}</p>
          </div>
        </div>

        <div className="about__row reveal">
          <div className="about__section-card">
            <div className="about__eyebrow">{t("site.about.focus.eyebrow")}</div>
            <h3 className="about__heading">
              <BriefcaseBusiness size={18} className="icon about__icon" />
              {t("site.about.focus.title")}
            </h3>
            <div className="about__focus-grid">
              {focusCards.map((card) => (
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
            <div className="about__eyebrow">{t("site.about.role.eyebrow")}</div>
            <h3 className="about__heading">
              <ShieldCheck size={18} className="icon about__icon" />
              {t("site.about.role.title")}
            </h3>
            <p className="about__text">{t("site.about.role.intro")}</p>
            <div className="about__role-grid">
              <article className="about__role-card">
                <h4>{roleCards?.[0]?.title || "For product and operations teams"}</h4>
                <CheckList items={roleCards?.[0]?.items || HIRING_ROLES} />
                <a href="/proof-of-work" className="btn btn--primary">
                  {t("site.cta.viewProof")} <ArrowRight size={15} className="icon ml-1" />
                </a>
              </article>

              <article className="about__role-card">
                <h4>{roleCards?.[1]?.title || "Best-fit problem spaces"}</h4>
                <CheckList items={roleCards?.[1]?.items || PROBLEM_SPACES} />
                <a href="/ai-workflow" className="btn btn--ghost">
                  {t("site.cta.exploreAiWorkflows")}
                </a>
              </article>

              <article className="about__role-card">
                <h4>{roleCards?.[2]?.title || "For companies"}</h4>
                <CheckList items={roleCards?.[2]?.items || COMPANY_PATHS} />
                <a href="/collaborate" className="btn btn--ghost">
                  {t("site.cta.workWithMe")}
                </a>
              </article>
            </div>
          </div>
        </div>

        <div className="about__row reveal">
          <details className="about__timeline">
            <summary>{t("site.about.milestones.title")}</summary>
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
              <div className="about__eyebrow">{t("site.nextStep")}</div>
              <h3>{t("site.about.final.title")}</h3>
            </div>
            <div className="about__cta-actions">
              <a href="/contact" className="btn btn--primary">
                {t("site.cta.contact")} <Users size={15} className="icon ml-1" />
              </a>
              <a href="/proof-of-work" className="btn btn--ghost">
                {t("site.cta.viewProof")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
