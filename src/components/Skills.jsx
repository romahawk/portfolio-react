import React from "react";
import { skillsPillars } from "../data/skillsCards.js";
import {
  Layers, Users, Stethoscope, Sparkles, Code2,
  Network, Zap, Database, ShieldCheck, BriefcaseBusiness,
} from "lucide-react";

const ICONS = {
  Layers, Users, Stethoscope, Sparkles, Code2,
  Network, Zap, Database, ShieldCheck, BriefcaseBusiness,
};

const Skills = () => (
  <section id="skills" className="section container">
    <h2 className="section__title reveal">&gt; Skills & Leverage</h2>

    {skillsPillars.map((pillar) => {
      const PillarIcon = ICONS[pillar.icon] || Layers;
      return (
        <div key={pillar.id} className="skills__pillar reveal">
          <h3 className="skills__pillar-title">
            <PillarIcon size={18} className="skills__pillar-icon" aria-hidden="true" />
            {pillar.title}
          </h3>

          <div className="skills__grid">
            {pillar.cards.map((card, cIdx) => {
              const CardIcon = ICONS[card.icon] || Layers;
              const delay = cIdx < 3 ? ` reveal--delay-${cIdx + 1}` : "";
              return (
                <div key={card.title} className={`skill-card reveal${delay}`}>
                  <h4 className="skill-card__title">
                    <CardIcon size={16} className="skill-card__icon" aria-hidden="true" />
                    {card.title}
                  </h4>
                  <ul className="skill-card__list">
                    {card.items.map((item, i) => (
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
      I use code as a leverage tool to validate system boundaries, clarify trade-offs, and
      accelerate production delivery —{" "}
      <span className="skills__statement-em">not as an end in itself.</span>
    </p>
  </section>
);

export default Skills;
