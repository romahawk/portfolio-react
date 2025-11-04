import React from "react";
import { hardSkills, pmSkills, softSkills } from "../data/skillsCards.js";
import {
  Laptop, ClipboardList, Users, Stethoscope, Package,
  Atom, Server, Wrench, Star, Code2, MessageSquare, Lightbulb
} from "lucide-react";

/* Pick an icon for each inner skill-card by its title */
const iconFor = (title) => {
  const t = title.toLowerCase();
  if (t.includes("react") || t.includes("frontend")) return Atom;
  if (t.includes("backend")) return Server;
  if (t.includes("devops") || t.includes("tools")) return Wrench;
  if (t.includes("extras")) return Star;
  if (t.includes("tech understanding")) return Code2;
  if (t.includes("communication")) return MessageSquare;
  if (t.includes("leadership")) return Users;
  if (t.includes("problem")) return Lightbulb;
  return Code2;
};

const SectionTitle = ({ Icon, children }) => (
  <h3 className="skills__subtitle" style={{ display: "flex", alignItems: "center", gap: 8 }}>
    {Icon ? <Icon size={18} className="about__icon" /> : null}
    {children}
  </h3>
);

const SkillsGroup = ({ title, sectionIcon: SectionIcon, data }) => (
  <div className="skills__group ">
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
  <section id="skills" className="section section-gradient">
    <div className="container">
      <h2 className="section__title">&gt; Skills</h2>
      {/* Hard Skills */}
      <SkillsGroup
        title="Hard Skills (React / Full-Stack Developer Path)"
        sectionIcon={Laptop}
        data={hardSkills}
      />
      {/* IT Project Manager Path */}
      <SkillsGroup
        title="IT Project Manager Path"
        sectionIcon={ClipboardList}
        data={pmSkills}
      />
      {/* Soft Skills */}
      <SkillsGroup
        title="Soft Skills (Professional)"
        sectionIcon={Users}
        data={softSkills}
      />
      {/* MedTech Expertise */}
      <div className="skills__group">
        <SectionTitle Icon={Stethoscope}>MedTech Expertise</SectionTitle>
        <p className="about__text">
          10+ years in MedTech: equipment sales, installation, OR workflows, and clinician training.
        </p>
      </div>
      {/* Product Management */}
      <div className="skills__group">
        <SectionTitle Icon={Package}>Product Management</SectionTitle>
        <p className="about__text">
          Lifecycle management from ideation to launch; introduced innovative products like SURGIRIS lights.
        </p>
      </div>
    </div>
  </section>
);

export default Skills;
