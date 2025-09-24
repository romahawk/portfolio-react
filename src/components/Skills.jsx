import React from "react";
import { hardSkills, pmSkills, softSkills } from "../data/skillsCards.js";
import {
  Atom, Server, Wrench, Star, Code2, MessageSquare, Users, Lightbulb,
} from "lucide-react";

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

const SkillsSection = ({ title, data }) => (
  <div className="skills__group">
    <h3 className="skills__subtitle">{title}</h3>
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
    <SkillsSection title="🛠 Hard Skills (React / Full-Stack Developer Path)" data={hardSkills} />
    <SkillsSection title="📊 IT Project Manager Path" data={pmSkills} />
    <SkillsSection title="🤝 Soft Skills (Professional)" data={softSkills} />
    <div className="skills__group">
      <h3 className="skills__subtitle">🏥 MedTech Expertise</h3>
      <p>10+ years in MedTech: equipment sales, installation, OR workflows, and clinician training.</p>
    </div>
    <div className="skills__group">
      <h3 className="skills__subtitle">📦 Product Management</h3>
      <p>Lifecycle management from ideation to launch; introduced innovative products like SURGIRIS lights.</p>
    </div>
  </section>
);

export default Skills;
