import React from "react";
import {
  Layers,
  Target,
  Users,
  Dot,
} from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section container about">
      <h2 className="about__title reveal">
        <span className="about__chev">&gt;</span> About
      </h2>

      <div className="about__container">
        {/* Row 1: Photo + Identity — reveal as a unit */}
        <div className="about__row about__row--two-columns reveal reveal--delay-1">
          <div className="about__photo">
            <img
              src="/images/profile.jpg"
              alt="Roman Mazuryk profile"
              className="about__photo-img"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="about__panel">
            <h3 className="about__heading">
              <Layers size={18} className="icon about__icon" />
              Founder-Operator Building Product Systems
            </h3>

            <p className="about__text">
              With 10+ years across MedTech and regulated B2B environments, I've led complex
              initiatives where compliance, uptime, and operational integrity are non-negotiable.
              My work sits between executive decision-making and hands-on system architecture —
              turning operational complexity into scalable digital platforms.
            </p>
            <p className="about__text">
              I don't just manage backlogs. I design systems, define boundaries, and drive
              execution.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="about__row reveal">
          <h3 className="about__heading">
            <Target size={18} className="icon about__icon" />
            How I Build
          </h3>
          <p className="about__text">
            I specialize in transforming messy, high-stakes environments into structured product
            systems: clear ownership, clean state models, defined interfaces, and measurable
            outcomes.
          </p>
          <p className="about__text">
            My approach is operator-driven: Start with real workflow constraints. Translate them
            into system primitives (roles, states, data flows). De-risk architecture through fast
            prototyping. Ship in disciplined increments.
          </p>
          <p className="about__text">
            The objective is not features — it's leverage. Reduce coordination overhead. Improve
            decision velocity. Make complexity manageable.
          </p>
        </div>

        {/* Row 3 */}
        <div className="about__row reveal">
          <h3 className="about__heading">
            <Users size={18} className="icon about__icon" />
            Where I Operate Best
          </h3>
          <p className="about__text">
            I do my best work in regulated or compliance-heavy environments, multi-stakeholder
            ecosystems, internal tools and operational platforms, and zero-to-one product
            foundations.
          </p>
          <p className="about__text">
            I am comfortable working directly with engineers on architecture decisions while
            aligning with leadership on trade-offs and long-term system evolution.
          </p>
          <p className="about__text">
            This is product ownership end-to-end — from ambiguity to delivery.
          </p>
        </div>

        {/* Row 4 */}
        <div className="about__row reveal">
          <h3 className="about__heading">Outside the Platform</h3>

          <ul className="about__list">
            <li className="about__list-item">
              <Dot size={16} className="icon about__bullet-icon" />
              <strong>Basketball</strong> — systems thinking applied to team dynamics.
            </li>
            <li className="about__list-item">
              <Dot size={16} className="icon about__bullet-icon" />
              <strong>Training & discipline</strong> — feedback loops compound over time.
            </li>
            <li className="about__list-item">
              <Dot size={16} className="icon about__bullet-icon" />
              <strong>Travel</strong> — pattern recognition across environments.
            </li>
          </ul>

          <blockquote className="about__quote">
            <em>
              "Strong products are not built by adding features — they're built by removing
              friction from complex systems."
            </em>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;
