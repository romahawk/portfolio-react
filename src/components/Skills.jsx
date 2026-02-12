import React from "react";
import {
  hardSkills,
  pmSkills,
  softSkills,
  leverageSkills,
  techStack,
} from "../data/skillsCards.js";
import {
  Layers,
  Workflow,
  Users,
  Stethoscope,
  Package,
  Sparkles,
  Code2,
} from "lucide-react";

/* Pick an icon for each inner skill-card by its title */
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
  return Layers;
};

const SectionTitle = ({ Icon, children }) => (
  <h3 className="skills__subtitle" style={{ display: "flex", alignItems: "center", gap: 8 }}>
    {Icon ? <Icon size={18} className="about__icon" /> : null}
    {children}
  </h3>
);

const SkillsGroup = ({ title, sectionIcon: SectionIcon, data }) => (
  <div className="skills__group">
    <SectionTitle Icon={SectionIcon}>{title}</SectionTitle>
    <div className="skills__grid">
      {data.map((card) => {
        const Ico = iconFor(card.title);
        return (
          <div key={card.title} className="skill-card">
            <h4 className="skill-card__title">
              <Ico size={18} className="icon skill-card__icon" />
              {card.title}
            </h4>
            <ul className="skill-card__list">
              {card.items.map((item, idx) => (
                <li key={idx}>{item}</li>
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
    <h2 className="section__title">&gt; Skills & Leverage</h2>

    {/* Product leadership first */}
    <SkillsGroup title="Product Leadership" sectionIcon={Users} data={pmSkills} />

    {/* Systems capability */}
    <SkillsGroup title="Systems & Platform Capability" sectionIcon={Layers} data={hardSkills} />

    {/* Strategic leverage */}
    <SkillsGroup title="Strategic Leverage" sectionIcon={Sparkles} data={leverageSkills} />

    {/* Implementation stack */}
    <SkillsGroup title="Implementation Stack" sectionIcon={Code2} data={techStack} />
    <p className="about__text">
      I use code as a leverage tool — to validate system boundaries, clarify trade-offs,
      and accelerate delivery — not as an end in itself.
    </p>

    {/* Collaboration */}
    <SkillsGroup title="Collaboration" sectionIcon={Workflow} data={softSkills} />

    {/* Domain proof */}
    <div className="skills__group">
      <SectionTitle Icon={Stethoscope}>Regulated Domain Advantage</SectionTitle>
      <p className="about__text">
        MedTech and Pharma experience is an execution advantage: I build for environments where
        uptime, auditability, and safety are not optional. That context improves product decisions,
        architecture quality, and delivery discipline.
      </p>
    </div>

    {/* Product ownership */}
    <div className="skills__group">
      <SectionTitle Icon={Package}>Ownership</SectionTitle>
      <p className="about__text">
        I own outcomes end-to-end: framing the problem, defining system boundaries, aligning
        stakeholders, making trade-offs explicit, and driving delivery through to operational impact.
      </p>
    </div>
  </section>
);

export default Skills;
