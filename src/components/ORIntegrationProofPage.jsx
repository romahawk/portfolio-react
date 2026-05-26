import React from "react";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "../context/LangContext.jsx";
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
  const { t } = useTranslation();
  const complexityValue = t("site.orProof.complexity.items");
  const cardsValue = t("site.orProof.proves.cards");
  const opportunitiesValue = t("site.orProof.opportunities.items");
  const complexity = Array.isArray(complexityValue) ? complexityValue : complexityElements;
  const cards = Array.isArray(cardsValue) ? cardsValue : proofCards;
  const opportunities = Array.isArray(opportunitiesValue) ? opportunitiesValue : futureOpportunities;

  return (
    <div className="proof-page or-proof-page">
      <PageHero
        eyebrow={t("site.orProof.hero.eyebrow")}
        title={t("site.orProof.hero.title")}
        subtitle={t("site.orProof.hero.subtitle")}
        primaryCta={{ label: t("site.cta.exploreAiWorkflows"), href: "/ai-workflow", icon: <ArrowRight size={15} className="icon ml-1" aria-hidden="true" /> }}
        secondaryCta={{ label: t("site.cta.workWithMe"), href: "/collaborate" }}
        tertiaryCta={{ label: t("site.cta.contact"), href: "/contact" }}
        scrollTargetId="or-context"
      >
        <div className="or-proof__hero-meta">
          <StatusBadge status="Real MedTech Implementation Experience" />
          <span>{t("site.orProof.hero.meta")}</span>
        </div>
      </PageHero>

      <section id="or-context" className="section container or-proof__section">
        <div className="or-proof__section-head reveal">
          <p className="proof-page__kicker">{t("site.orProof.context.eyebrow")}</p>
          <h2>{t("site.orProof.context.title")}</h2>
          <p>{t("site.orProof.context.text")}</p>
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
          <p className="proof-page__kicker">{t("site.orProof.complexity.eyebrow")}</p>
          <h2>{t("site.orProof.complexity.title")}</h2>
        </div>
        <div className="or-proof__chip-grid">
          {complexity.map((item) => (
            <span className="or-proof__chip" key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section container or-proof__section">
        <div className="or-proof__panel reveal">
          <div>
            <p className="proof-page__kicker">{t("site.orProof.role.eyebrow")}</p>
            <h2>{t("site.orProof.role.title")}</h2>
          </div>
          <p>{t("site.orProof.role.text")}</p>
        </div>
      </section>

      <section className="section container or-proof__section">
        <div className="or-proof__section-head reveal">
          <p className="proof-page__kicker">{t("site.orProof.proves.eyebrow")}</p>
          <h2>{t("site.orProof.proves.title")}</h2>
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
            <span>{t("site.orProof.proves.hubTop")}</span>
            <strong>{t("site.orProof.proves.hubBottom")}</strong>
          </div>
          {cards.map((card, index) => (
            <article className={`or-proof__card or-proof__card--point-${index + 1}`} key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section container or-proof__section">
        <div className="or-proof__bridge reveal">
          <p className="proof-page__kicker">{t("site.orProof.bridge.eyebrow")}</p>
          <h2>{t("site.orProof.bridge.title")}</h2>
          <p>{t("site.orProof.bridge.text")}</p>
        </div>
      </section>

      <section className="section container or-proof__section">
        <div className="or-proof__section-head reveal">
          <p className="proof-page__kicker">{t("site.orProof.opportunities.eyebrow")}</p>
          <h2>{t("site.orProof.opportunities.title")}</h2>
          <p>{t("site.orProof.opportunities.text")}</p>
        </div>
        <div className="or-proof__chip-grid">
          {opportunities.map((item) => (
            <span className="or-proof__chip or-proof__chip--concept" key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section container or-proof__section">
        <div className="or-proof__cta reveal">
          <div>
            <p className="proof-page__kicker">{t("site.next")}</p>
            <h2>{t("site.orProof.final.title")}</h2>
            <p>{t("site.orProof.final.text")}</p>
          </div>
          <div className="or-proof__actions">
            <a href="/ai-workflow" className="btn btn--primary">{t("site.cta.exploreAiWorkflows")}</a>
            <a href="/collaborate" className="btn btn--ghost">{t("site.cta.workWithMe")}</a>
            <a href="/contact" className="btn btn--ghost">{t("site.cta.contact")}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
