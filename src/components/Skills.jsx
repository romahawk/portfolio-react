import React from "react";
import { hardSkills, pmSkills, softSkills } from "../data/skillsCards.js";
import {
  Layers,
  Workflow,
  Wrench,
  Shield,
  Users,
  Stethoscope,
  Package,
  Code2,
  Lightbulb,
} from "lucide-react";

/* Pick an icon for each inner skill-card by its title */
const iconFor = (title) => {
  const t = title.toLowerCase();
  if (t.includes("product delivery")) return Workflow;
  if (t.includes("technical collaboration")) return Layers;
  if (t.includes("prototyping")) return Code2;
  if (t.includes("tooling")) return Wrench;
  if (t.includes("stakeholder")) return Users;
  if (t.includes("ownership")) return Shield;
  if (t.includes("problem")) return Lightbulb;
  return Layers;
};

const SectionTitle = ({ Icon, children }) => (
  <h3
    className="skills__subtitle"
    style={{ display: "flex", alignItems: "center", gap: 8 }}
  >
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
    <h2 className="section__title">&gt; Skills</h2>

    {/* Product + Technical capabilities */}
    <SkillsGroup
      title="Product & Technical Capabilities"
      sectionIcon={Layers}
      data={hardSkills}
    />

    {/* Product execution toolkit */}
    <SkillsGroup
      title="Product Execution Toolkit"
      sectionIcon={Workflow}
      data={pmSkills}
    />

    {/* Leadership / soft skills */}
    <SkillsGroup
      title="Leadership & Collaboration"
      sectionIcon={Users}
      data={softSkills}
    />

    {/* Domain proof (not limitation) */}
    <div className="skills__group">
      <SectionTitle Icon={Stethoscope}>Domain Experience (Evidence)</SectionTitle>
      <p className="about__text">
        Proven experience in MedTech and regulated B2B environments: clinical workflows,
        multi-stakeholder delivery, training, and operational execution under constraints.
      </p>
    </div>

    {/* Product ownership */}
    <div className="skills__group">
      <SectionTitle Icon={Package}>Product Ownership</SectionTitle>
      <p className="about__text">
        End-to-end ownership from problem discovery to delivery: defining scope, aligning
        stakeholders, making trade-offs, and driving outcomes.
      </p>
    </div>
  </section>
);

export default Skills;
