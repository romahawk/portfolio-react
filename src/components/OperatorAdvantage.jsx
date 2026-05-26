import React from "react";
import { ArrowRight, ClipboardList, Hospital, Route } from "lucide-react";
import { useTranslation } from "../context/LangContext.jsx";

const CREDIBILITY_CARDS = [
  {
    title: "OR & hospital workflows",
    text:
      "Hands-on exposure to operating room environments, surgical equipment implementation, clinical handovers, and coordination with hospital teams.",
    icon: Hospital,
  },
  {
    title: "Implementation complexity",
    text:
      "Experience across equipment delivery, installation, training, support, documentation, stakeholder alignment, and project handover.",
    icon: ClipboardList,
  },
  {
    title: "Workflow-to-system thinking",
    text:
      "Practical understanding of where operational workflows break: missing ownership, scattered documentation, manual coordination, and weak visibility.",
    icon: Route,
  },
];

export default function OperatorAdvantage() {
  const { t } = useTranslation();
  const cardsValue = t("site.home.credibility.cards");
  const cards = Array.isArray(cardsValue) ? cardsValue : CREDIBILITY_CARDS;

  return (
    <section id="operator-advantage" className="section container operator-advantage">
      <div className="operator-advantage__panel reveal">
        <div className="operator-advantage__top">
          <div className="operator-advantage__content">
            <div className="operator-advantage__intro">
              <p className="operator-advantage__kicker">{t("site.home.credibility.eyebrow")}</p>
              <h2 className="section__title">
                <span className="about__chev">&gt;</span> {t("site.home.credibility.title")}
              </h2>
              <p>{t("site.home.credibility.text")}</p>
            </div>
          </div>

          <figure className="operator-advantage__media">
            <img
              src="/images/project-OR.jpg"
              alt="Operating room equipment and surgical workflow environment"
              loading="lazy"
            />
          </figure>
        </div>

        <div className="operator-advantage__cards">
          {CREDIBILITY_CARDS.map(({ icon }, index) => (
            cards[index] ? (
            <article className="operator-advantage__card" key={cards[index].title}>
              {React.createElement(icon, { size: 18, "aria-hidden": "true" })}
              <h3>{cards[index].title}</h3>
              <p>{cards[index].text}</p>
            </article>
            ) : null
          ))}
        </div>

        <p className="operator-advantage__compact-line">
          {t("site.home.credibility.compact")}
        </p>

        <div className="operator-advantage__actions">
          <a href="/proof-of-work" className="btn btn--primary">
            {t("site.cta.viewProof")} <ArrowRight size={15} className="icon ml-1" />
          </a>
          <a href="/ai-workflow" className="btn btn--ghost">
            {t("site.cta.exploreAiWorkflows")}
          </a>
        </div>
      </div>
    </section>
  );
}
