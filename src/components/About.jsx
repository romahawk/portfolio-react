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
              For over a decade, I’ve been immersed in the MedTech industry — leading sales of advanced equipment, streamlining B2B/B2C logistics, supporting surgeons in the OR, and collaborating with startups. That work shaped my problem-solving mindset and sparked a new passion: technology.
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
            Today, I’m building full-stack solutions with React & TypeScript, Python (Flask/FastAPI), and SQL/NoSQL databases, applying Agile PM practices to move ideas from prototype to product. My focus is on creating clear UX, scalable architecture, and measurable value.
          </p>
        </div>

        {/* Row 3: Values */}
        <div className="about__row">
          <h3 className="about__heading">
            <Target size={18} className="icon about__icon" />
            My Values &amp; Vision
          </h3>
          <p className="about__text">
            Innovation, clarity, and continuous learning drive everything I do. I value teamwork, data-driven decision-making, and delivering solutions that truly help people. My vision is to merge MedTech precision with modern software engineering — o create reliable, intuitive, and scalable digital products across healthcare, SportTech, and FinTech.
          </p>
        </div>

        {/* Row 4: Collaborate */}
        <div className="about__row">
          <h3 className="about__heading">
            <Users size={18} className="icon about__icon" />
            Let’s Collaborate
          </h3>
          <p className="about__text">
            I’m open to collaboration — whether you’re in MedTech, Tech, or both.
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
