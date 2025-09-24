import React from "react";
import {
  HeartPulse,
  Rocket,
  Target,
  Users,
  Dot,
} from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section container about">
      <h2 className="about__title">
        <span className="about__chev">&gt;</span> About Me
      </h2>

      <div className="about__container">
        {/* Row 1: Photo + Journey */}
        <div className="about__row about__row--two-columns">
          <div className="about__photo">
            {/* Replace with your real photo path if available */}
            <img
              src="/assets/img/profile.jpg"
              alt="Roman Mazuryk profile"
              className="about__photo-img"
            />
            <span className="about__photo-caption">Profile Image</span>
          </div>

          <div className="about__panel">
            <h3 className="about__heading">
              <HeartPulse size={18} className="icon about__icon" />
              My MedTech Journey
            </h3>
            <p className="about__text">
              For over a decade, I’ve been immersed in the MedTech industry:
              driving sales for advanced equipment, streamlining B2B/B2C supply,
              supporting surgeons in the OR, and prototyping solutions for startups.
              That work taught me to solve real problems with precision and empathy—and
              sparked a new passion: technology.
            </p>
          </div>
        </div>

        {/* Row 2: Pivot */}
        <div className="about__row">
          <h3 className="about__heading">
            <Rocket size={18} className="icon about__icon" />
            Why I’m Pivoting to Tech
          </h3>
          <p className="about__text">
            I’m moving deeper into software to bridge MedTech expertise with code.
            I’m building in React (JS/TS), Python, and data analytics—aiming for
            practical, high-impact products with clean UX and measurable value.
          </p>
        </div>

        {/* Row 3: Values */}
        <div className="about__row">
          <h3 className="about__heading">
            <Target size={18} className="icon about__icon" />
            My Values &amp; Vision
          </h3>
          <p className="about__text">
            Innovation, education, and continuous growth guide everything I do.
            I want to combine MedTech insight, engineering, and a startup mindset
            to create impactful, data-driven healthcare solutions.
          </p>
        </div>

        {/* Row 4: Collaborate */}
        <div className="about__row">
          <h3 className="about__heading">
            <Users size={18} className="icon about__icon" />
            Let’s Collaborate
          </h3>
          <p className="about__text">
            I’m open to collaboration—whether you’re in MedTech, tech, or both.
            Let’s connect and build something meaningful.
          </p>
        </div>

        {/* Row 5: Interests */}
        <div className="about__row">
          <h3 className="about__heading">Beyond Tech: What Drives Me</h3>

          <ul className="about__list">
            <li className="about__list-item">
              <Dot size={16} className="icon about__bullet-icon" />
              <strong>Basketball</strong> — player, coach, student of the game.
            </li>
            <li className="about__list-item">
              <Dot size={16} className="icon about__bullet-icon" />
              <strong>Beach Volleyball</strong> — sand, sun, and strategy.
            </li>
            <li className="about__list-item">
              <Dot size={16} className="icon about__bullet-icon" />
              <strong>Hiking</strong> — trails and staying grounded.
            </li>
            <li className="about__list-item">
              <Dot size={16} className="icon about__bullet-icon" />
              <strong>Travel</strong> — curious about new cultures, food, and ideas.
            </li>
            <li className="about__list-item">
              <Dot size={16} className="icon about__bullet-icon" />
              <strong>Lifelong Learner</strong> — always improving and growing.
            </li>
          </ul>

          <blockquote className="about__quote">
            <em>
              “Basketball taught me teamwork, strategy, and discipline—qualities
              I now apply to building projects and collaborating in tech.”
            </em>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;
