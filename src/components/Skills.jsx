import React from "react";
import { hardSkills, pmSkills, softSkills } from "../data/skillsCards.js";

const SkillsSection = ({ title, data }) => (
  <div className="skills__group">
    <h3 className="skills__subtitle">{title}</h3>
    <div className="skills__grid">
      {data.map((card) => (
        <div key={card.title} className="skill-card">
          <h4 className="skill-card__title">
            <i className={`${card.icon} skill-card__icon`}></i> {card.title}
          </h4>
          <ul className="skill-card__list">
            {card.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
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
      <p>
        10+ years in MedTech, specializing in medical equipment sales,
        installation, and support. Deep knowledge of healthcare workflows,
        operating rooms, and clinical innovation.
      </p>
    </div>

    <div className="skills__group">
      <h3 className="skills__subtitle">📦 Product Management</h3>
      <p>
        Experienced in product lifecycle management, from ideation to launch.
        Successfully introduced innovative MedTech products like the{" "}
        <strong>SURGIRIS surgical lights</strong>.
      </p>
    </div>
  </section>
);

export default Skills;
