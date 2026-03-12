import React from "react";
import { Layers, Target, Users, Dot, ArrowRight, Cpu, GitBranch, Rocket } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section container about">
      <h2 className="about__title reveal">
        <span className="about__chev">&gt;</span> About
      </h2>

      <div className="about__container">
        <div className="about__row about__row--two-columns reveal reveal--delay-1">
          <div className="about__photo">
            <img
              src="/images/profile.jpg"
              alt="Roman Mazuryk profile"
              className="about__photo-img"
              loading="lazy"
              decoding="async"
              width="320"
              height="320"
            />
          </div>

          <div className="about__panel">
            <div className="about__eyebrow">Operator profile</div>
            <h3 className="about__heading">
              <Layers size={18} className="icon about__icon" />
              Technical Product Manager | Systems & Delivery
            </h3>

            <p className="about__text">
              With 10+ years in MedTech and regulated B2B delivery, I operate at the intersection
              of Product Strategy, System Architecture, and Operational Excellence. I specialize
              in turning ambiguous, high-compliance constraints into predictable, high-uptime systems.
            </p>
            <p className="about__text">
              My operating model is decision compression. I reduce organizational drag by translating
              complex operational needs into lean system primitives. I do not just manage backlogs;
              I architect the logic that ensures delivery is predictable, compliant, and impactful.
            </p>
          </div>
        </div>

        <div className="about__row reveal">
          <div className="about__pillars">
            <div className="about__pillar">
              <Cpu size={22} className="about__pillar-icon" />
              <h4 className="about__pillar-title">Strategy</h4>
              <p className="about__pillar-text">
                Max 3 active workstreams. Focused on outcome-velocity over feature-volume.
              </p>
            </div>
            <div className="about__pillar">
              <GitBranch size={22} className="about__pillar-icon" />
              <h4 className="about__pillar-title">Architecture</h4>
              <p className="about__pillar-text">
                Rigorous system validation before a single line of code is committed.
              </p>
            </div>
            <div className="about__pillar">
              <Rocket size={22} className="about__pillar-icon" />
              <h4 className="about__pillar-title">Execution</h4>
              <p className="about__pillar-text">
                Small, daily deployments. If it isn&apos;t in production, it hasn&apos;t solved the problem yet.
              </p>
            </div>
          </div>
        </div>

        <div className="about__row reveal">
          <div className="about__section-card">
            <div className="about__eyebrow">Operating model</div>
            <h3 className="about__heading">
              <Target size={18} className="icon about__icon" />
              My Operating Model: Decision Compression
            </h3>
            <p className="about__text">
              I reduce organizational drag by translating complex operational needs into lean system
              primitives. I do not just manage backlogs; I architect the logic that ensures delivery
              is predictable, compliant, and impactful.
            </p>
            <ul className="about__principles">
              <li>
                <strong>Strategy:</strong> Max 3 active workstreams. Focused on outcome-velocity over feature-volume.
              </li>
              <li>
                <strong>Architecture:</strong> Rigorous system validation before a single line of code is committed.
              </li>
              <li>
                <strong>Execution:</strong> Small, daily deployments. If it is not in production, it has not solved the problem yet.
              </li>
            </ul>
            <a href="#ai-sdlc" className="btn btn--primary about__framework-cta">
              View Full System Architecture <ArrowRight size={16} className="icon ml-1" />
            </a>
          </div>
        </div>

        <div className="about__row reveal">
          <div className="about__section-card about__section-card--cool">
            <div className="about__eyebrow">Best-fit environment</div>
            <h3 className="about__heading">
              <Users size={18} className="icon about__icon" />
              Where I Operate Best
            </h3>
            <p className="about__text">
              Designed for remote-first agile environments. This workflow performs best in
              compliance-heavy systems, multi-stakeholder delivery, and zero-to-one platform work -
              particularly in EU and global B2B SaaS, internal tools, and regulated industries.
            </p>
            <p className="about__text">
              I collaborate directly with engineering on architecture while aligning leadership on
              the trade-offs that drive speed, reliability, and long-term leverage. In regulated
              MedTech and Pharma contexts, Micro-Scope and explicit acceptance criteria provide
              auditability without slowing delivery.
            </p>
            <p className="about__text">
              Systems ownership end-to-end: from ambiguity to shipped operational impact.
            </p>
          </div>
        </div>

        <div className="about__row reveal">
          <div className="about__section-card about__section-card--warm">
            <div className="about__eyebrow">Outside the platform</div>
            <h3 className="about__heading">Outside the Platform</h3>

            <ul className="about__list">
              <li className="about__list-item">
                <Dot size={16} className="icon about__bullet-icon" />
                <strong>Basketball</strong> - systems thinking applied to team dynamics.
              </li>
              <li className="about__list-item">
                <Dot size={16} className="icon about__bullet-icon" />
                <strong>Training &amp; discipline</strong> - feedback loops compound over time.
              </li>
              <li className="about__list-item">
                <Dot size={16} className="icon about__bullet-icon" />
                <strong>Travel</strong> - pattern recognition across environments.
              </li>
            </ul>

            <blockquote className="about__quote">
              <em>
                &ldquo;Some people want it to happen, some wish it would happen, others make it happen.&rdquo;
              </em>
              <div className="about__quote-attribution">- Michael Jordan</div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
