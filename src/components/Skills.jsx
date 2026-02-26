import React from "react";
import { hardSkills, pmSkills, softSkills, leverageSkills, techStack } from "../data/skillsCards.js";
import { Layers, Workflow, Users, Stethoscope, Package, Sparkles, Code2 } from "lucide-react";

const iconFor = (title) => {
  const t = title.toLowerCase();
  if (t.includes("systems")) return Layers;
  if (t.includes("internal tools")) return Workflow;
  if (t.includes("trade-offs")) return Layers;
  if (t.includes("leadership")) return Users;
  if (t.includes("delivery")) return Workflow;
  if (t.includes("ai")) return Sparkles;
  if (t.includes("prototyping")) return Code2;
  if (t.includes("implementation")) return Code2;
  if (t.includes("core")) return Code2;
  if (t.includes("strategic")) return Sparkles;
  return Layers;
};

const SectionTitle = ({ Icon, children }) => (
  <h3 className="skills__subtitle" style={{ display: "flex", alignItems: "center", gap: 8 }}>
    {Icon ? <Icon size={18} className="about__icon" /> : null}
    {children}
  </h3>
);

const SkillsGroup = ({ title, sectionIcon: SectionIcon, data }) => (
  <div className="skills__group reveal">
    <SectionTitle Icon={SectionIcon}>{title}</SectionTitle>
    <div className="skills__grid">
      {data.map((card, idx) => {
        const Ico = iconFor(card.title);
        const delay = idx < 5 ? ` reveal--delay-${idx + 1}` : "";
        return (
          <div key={card.title} className={`skill-card reveal${delay}`}>
            <h4 className="skill-card__title">
              <Ico size={18} className="icon skill-card__icon" />
              {card.title}
            </h4>
            <ul className="skill-card__list">
              {card.items.map((item, itemIdx) => (
                <li key={itemIdx}>{item}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  </div>
);

const Skills = () => (
  <section id="skills" className="section container">
    <h2 className="section__title reveal">&gt; Skills & Leverage</h2>

    <SkillsGroup title="Product Leadership" sectionIcon={Users} data={pmSkills} />
    <SkillsGroup title="Systems & Platform Capability" sectionIcon={Layers} data={hardSkills} />
    <SkillsGroup title="Strategic Leverage" sectionIcon={Sparkles} data={leverageSkills} />

    <SkillsGroup title="Core Engine & Implementation Stack" sectionIcon={Code2} data={techStack} />
    <p className="about__text">
      I use code as a leverage tool to validate system boundaries, clarify trade-offs, and
      accelerate production delivery, not as an end in itself.
    </p>

    <SkillsGroup title="Collaboration" sectionIcon={Workflow} data={softSkills} />

    <div className="skills__group reveal">
      <SectionTitle Icon={Stethoscope}>Regulated Domain Advantage</SectionTitle>
      <p className="about__text">
        MedTech and Pharma experience is an execution advantage: I build for environments where
        uptime, auditability, and safety are not optional. Micro-Scope scope control and explicit
        acceptance criteria keep delivery traceable for regulated SDLC requirements.
      </p>
    </div>

    <div className="skills__group reveal">
      <SectionTitle Icon={Package}>Ownership</SectionTitle>
      <p className="about__text">
        I own outcomes end-to-end: framing the problem, defining system boundaries, aligning
        stakeholders, making trade-offs explicit, and driving delivery through to operational
        impact.
      </p>
    </div>
  </section>
);

export default Skills;
