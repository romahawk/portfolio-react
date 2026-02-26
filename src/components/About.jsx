import React from "react";
import { Layers, Target, Users, Dot, ArrowRight, Cpu, GitBranch, Rocket } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section container about">
      <h2 className="about__title reveal">
        <span className="about__chev">&gt;</span> About
      </h2>

      <div className="about__container">
        {/* Identity row — photo + intro */}
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
              Systems Architect for Production-Grade Delivery
            </h3>

            <p className="about__text">
              With 10+ years in MedTech and regulated B2B delivery, I operate at the intersection
              of product strategy, architecture, and execution — where compliance, uptime, and
              operational integrity are non-negotiable.
            </p>
            <p className="about__text">
              I design systems that make trade-offs explicit, decisions visible, and delivery
              predictable under real constraints — using a proprietary AI-Leverage Framework
              that powers production-grade solo delivery.
            </p>
          </div>
        </div>

        {/* Three pillars — Strategy · Architecture · Build */}
        <div className="about__row reveal">
          <div className="about__pillars">
            <div className="about__pillar">
              <Cpu size={22} className="about__pillar-icon" />
              <h4 className="about__pillar-title">Strategy</h4>
              <p className="about__pillar-text">
                Max 3 active projects. One outcome per week. Trade-offs logged,
                not assumed.
              </p>
            </div>
            <div className="about__pillar">
              <GitBranch size={22} className="about__pillar-icon" />
              <h4 className="about__pillar-title">Architecture</h4>
              <p className="about__pillar-text">
                Manual Reasoning Pass before every implementation. System logic
                validated by the architect first.
              </p>
            </div>
            <div className="about__pillar">
              <Rocket size={22} className="about__pillar-icon" />
              <h4 className="about__pillar-title">Build</h4>
              <p className="about__pillar-text">
                Small daily PRs. Lighthouse gating. If it isn&apos;t deployed,
                it doesn&apos;t count.
              </p>
            </div>
          </div>
        </div>

        {/* How I Build */}
        <div className="about__row reveal">
          <h3 className="about__heading">
            <Target size={18} className="icon about__icon" />
            How I Build
          </h3>
          <p className="about__text">
            Decision compression is my operating model. I translate complex operational constraints
            into system primitives using a production-grade solo workflow that prioritizes clarity
            and shipping impact over feature volume.
          </p>
          <ul className="about__principles">
            <li>
              <strong>Human-Owned Scope:</strong> AI supports clarity, but the human owns the
              scope and the decision.
            </li>
            <li>
              <strong>Outcome-Driven:</strong> I commit to 1–3 weekly outcomes with strict
              constraints to ensure execution.
            </li>
            <li>
              <strong>Deployment as Truth:</strong> If it is not deployed, it does not count.
            </li>
          </ul>
          <a href="#ai-sdlc" className="btn btn--primary about__framework-cta">
            View Full System Architecture <ArrowRight size={16} className="icon ml-1" />
          </a>
        </div>

        {/* Where I Operate Best */}
        <div className="about__row reveal">
          <h3 className="about__heading">
            <Users size={18} className="icon about__icon" />
            Where I Operate Best
          </h3>
          <p className="about__text">
            Designed for Remote-First Agile Environments. This workflow performs best in
            compliance-heavy systems, multi-stakeholder delivery, and zero-to-one platform work —
            particularly in EU/Global B2B SaaS, Internal Tools, and Regulated Industries.
          </p>
          <p className="about__text">
            I collaborate directly with engineering on architecture while aligning leadership on
            the trade-offs that drive speed, reliability, and long-term leverage. In regulated
            MedTech/Pharma contexts, Micro-Scope and explicit Acceptance Criteria provide
            auditability without slowing delivery.
          </p>
          <p className="about__text">
            Systems ownership end-to-end: from ambiguity to shipped operational impact.
          </p>
        </div>

        {/* Outside the Platform */}
        <div className="about__row reveal">
          <h3 className="about__heading">Outside the Platform</h3>

          <ul className="about__list">
            <li className="about__list-item">
              <Dot size={16} className="icon about__bullet-icon" />
              <strong>Basketball</strong> — systems thinking applied to team dynamics.
            </li>
            <li className="about__list-item">
              <Dot size={16} className="icon about__bullet-icon" />
              <strong>Training &amp; discipline</strong> — feedback loops compound over time.
            </li>
            <li className="about__list-item">
              <Dot size={16} className="icon about__bullet-icon" />
              <strong>Travel</strong> — pattern recognition across environments.
            </li>
          </ul>

          <blockquote className="about__quote">
            <em>
              &ldquo;Senior product leadership is trade-off management under constraint. Systems win
              when those trade-offs stay explicit.&rdquo;
            </em>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;
