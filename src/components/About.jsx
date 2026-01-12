import React from "react";
import {
  HeartPulse,
  Layers,
  Target,
  Users,
  Dot,
} from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section container about">
      <h2 className="about__title">
        <span className="about__chev">&gt;</span> About
      </h2>

      <div className="about__container">
        {/* Row 1: Photo + Identity */}
        <div className="about__row about__row--two-columns">
          <div className="about__photo">
            <img
              src="/images/profile.jpg"
              alt="Roman Mazuryk profile"
              className="about__photo-img"
            />
          </div>

          <div className="about__panel">
            <h3 className="about__heading">
              <Layers size={18} className="icon about__icon" />
              Product Leadership Across Complex Systems
            </h3>
            <p className="about__text">
              I am a <strong>Technical Product Manager</strong> with over 10 years of experience
              in MedTech and regulated B2B environments. I’ve owned complex product initiatives
              involving clinical users, engineers, vendors, and business stakeholders — where
              quality, safety, and coordination are non-negotiable.
            </p>
          </div>
        </div>

        {/* Row 2: How you work */}
        <div className="about__row">
          <h3 className="about__heading">
            <Target size={18} className="icon about__icon" />
            How I Work
          </h3>
          <p className="about__text">
            I specialize in turning ambiguous problems into clear product direction.
            My work spans discovery, requirements, prioritization, and delivery — balancing
            technical feasibility, regulatory constraints, and business outcomes.
          </p>
          <p className="about__text">
            I use hands-on technical prototyping when needed to de-risk decisions,
            clarify system behavior, and collaborate effectively with engineering teams.
            The goal is always better product outcomes, not technology for its own sake.
          </p>
        </div>

        {/* Row 3: Stakeholders */}
        <div className="about__row">
          <h3 className="about__heading">
            <Users size={18} className="icon about__icon" />
            Users & Stakeholders
          </h3>
          <p className="about__text">
            I’ve worked closely with surgeons, clinical staff, operations, logistics,
            engineers, and leadership teams. I’m comfortable operating at the intersection
            of domain expertise and technical execution — translating real-world needs into
            scalable product solutions.
          </p>
        </div>

        {/* Row 4: Personal but grounded */}
        <div className="about__row">
          <h3 className="about__heading">Beyond Work</h3>

          <ul className="about__list">
            <li className="about__list-item">
              <Dot size={16} className="icon about__bullet-icon" />
              <strong>Basketball</strong> — player, coach, systems thinker.
            </li>
            <li className="about__list-item">
              <Dot size={16} className="icon about__bullet-icon" />
              <strong>Sport & fitness</strong> — discipline, feedback loops, consistency.
            </li>
            <li className="about__list-item">
              <Dot size={16} className="icon about__bullet-icon" />
              <strong>Travel</strong> — perspective, adaptability, curiosity.
            </li>
          </ul>

          <blockquote className="about__quote">
            <em>
              “Complex products are like team sports: success comes from clarity of roles,
              trust, and disciplined execution.”
            </em>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;
