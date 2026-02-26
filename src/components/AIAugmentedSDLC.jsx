import React from "react";
import {
  Scale,
  GitPullRequestArrow,
  ShieldCheck,
  Gauge,
  Bug,
  BarChart3,
} from "lucide-react";

const AIAugmentedSDLC = () => (
  <section id="ai-sdlc" className="section container ai-sdlc">
    <h2 className="section__title reveal">
      <span className="about__chev">&gt;</span> AI-Augmented SDLC
    </h2>
    <p className="about__text reveal">
      Proprietary AI-Leverage Framework for production-grade delivery: trade-offs stay explicit,
      decisions stay visible, and scope stays constrained to what can ship.
    </p>

    <article className="ai-sdlc__panel reveal reveal--delay-1">
      <h3 className="about__heading">
        <Scale size={18} className="icon about__icon" />
        Strategy & Governance
      </h3>
      <p className="about__text">
        Operating Rules: max 3 active projects, one outcome per week, and no refactor without
        shipping impact.
      </p>
      <p className="about__text">
        Decision Logs capture trade-off rationale, accepted risk, and system implications to
        compound long-term leverage across releases.
      </p>
    </article>

    <article className="ai-sdlc__panel reveal reveal--delay-2">
      <h3 className="about__heading">
        <GitPullRequestArrow size={18} className="icon about__icon" />
        The Daily Build Loop
      </h3>
      <p className="about__text">
        Micro-Scope execution: select GitHub issues, define acceptance criteria and data schemas,
        then implement through small daily PRs.
      </p>
      <p className="about__text">
        The Manual Reasoning Pass is a hard gate: architecture logic, state transitions, and edge
        cases are validated by the architect before implementation.
      </p>
      <p className="about__text">
        In regulated MedTech/Pharma contexts, Micro-Scope plus explicit acceptance criteria
        provides auditability without slowing delivery.
      </p>
    </article>

    <article className="ai-sdlc__panel reveal reveal--delay-3">
      <h3 className="about__heading">
        <ShieldCheck size={18} className="icon about__icon" />
        The Production Hardening Stack
      </h3>
      <div className="ai-sdlc__stack">
        <p className="about__text ai-sdlc__stack-item">
          <Gauge size={16} className="icon about__icon" /> Lighthouse for performance baselines
          and release gating.
        </p>
        <p className="about__text ai-sdlc__stack-item">
          <Bug size={16} className="icon about__icon" /> Sentry for runtime error visibility and
          failure triage.
        </p>
        <p className="about__text ai-sdlc__stack-item">
          <BarChart3 size={16} className="icon about__icon" /> PostHog for usage analytics and
          post-release signal tracking.
        </p>
      </div>
      <p className="about__text">
        AI code reviews are a standard implementation gate before merge, alongside human approval
        on architecture-critical changes.
      </p>
    </article>
  </section>
);

export default AIAugmentedSDLC;
