import React from "react";
import { skillsPillars } from "../data/skillsCards.js";
import {
  Layers, Users, Stethoscope, Sparkles, Code2,
  Network, Zap, Database, ShieldCheck, BriefcaseBusiness,
} from "lucide-react";
import { useTranslation } from "../context/LangContext.jsx";

const ICONS = {
  Layers, Users, Stethoscope, Sparkles, Code2,
  Network, Zap, Database, ShieldCheck, BriefcaseBusiness,
};

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="section container">
      <h2 className="section__title reveal">&gt; {t("skills.title")}</h2>

      {skillsPillars.map((pillar) => {
        const PillarIcon = ICONS[pillar.icon] || Layers;
        const pillarTitle = t(`skills.pillars.${pillar.id}.title`) || pillar.title;
        const translatedCards = t(`skills.pillars.${pillar.id}.cards`);

        return (
          <div key={pillar.id} className="skills__pillar reveal">
            <h3 className="skills__pillar-title">
              <PillarIcon size={18} className="skills__pillar-icon" aria-hidden="true" />
              {pillarTitle}
            </h3>

            <div className="skills__grid">
              {pillar.cards.map((card, cIdx) => {
                const CardIcon = ICONS[card.icon] || Layers;
                const delay = cIdx < 3 ? ` reveal--delay-${cIdx + 1}` : "";
                const tc = Array.isArray(translatedCards) ? translatedCards[cIdx] : null;
                const cardTitle = tc?.title || card.title;
                const cardItems = Array.isArray(tc?.items) ? tc.items : card.items;

                return (
                  <div key={`${pillar.id}-${cIdx}`} className={`skill-card reveal${delay}`}>
                    <h4 className="skill-card__title">
                      <CardIcon size={16} className="skill-card__icon" aria-hidden="true" />
                      {cardTitle}
                    </h4>
                    <ul className="skill-card__list">
                      {cardItems.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      <p className="skills__statement reveal">
        {t("skills.statement")}{" "}
        <span className="skills__statement-em">{t("skills.statementEm")}</span>
      </p>
    </section>
  );
};

export default Skills;
