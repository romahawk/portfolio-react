import React from "react";
import {
  Scale,
  GitPullRequestArrow,
  ShieldCheck,
  Gauge,
  Bug,
  BarChart3,
  Globe,
  FileCheck,
  ExternalLink,
} from "lucide-react";

const AIAugmentedSDLC = () => (
  <section id="ai-sdlc" className="section container ai-sdlc">
    <h2 className="section__title reveal">
      <span className="about__chev">&gt;</span> AI-Augmented SDLC
    </h2>
    <p className="about__text reveal">
      The Systems-First SDLC for production-grade delivery. Trade-offs stay explicit,
      decisions stay visible, scope stays constrained to what can ship. Built for
      Remote-First Agile Environments targeting EU/Global B2B SaaS and regulated industries.
    </p>

    <div className="ai-sdlc__badges reveal">
      <span className="ai-sdlc__badge">
        <Globe size={13} /> Remote-First Architecture
      </span>
      <span className="ai-sdlc__badge">
        <FileCheck size={13} /> MedTech / Pharma Auditability
      </span>
      <span className="ai-sdlc__badge">
        <ShieldCheck size={13} /> EU / Global Market Ready
      </span>
    </div>

    <div className="ai-sdlc__cta reveal">
      <a
        href="https://ai-workflow-woad.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn--primary"
      >
        See the workflow in action <ExternalLink size={14} />
      </a>
    </div>

    {/*
    <div className="ai-sdlc__diagram reveal">
      <img
        src="/images/ai-workflow-diagram.png"
        alt="AI-Augmented SDLC workflow diagram"
        className="ai-sdlc__diagram-img"
        loading="lazy"
        decoding="async"
      />
    </div>
    */}

    <article className="ai-sdlc__panel reveal reveal--delay-1">
      <h3 className="about__heading">
        <Scale size={18} className="icon about__icon" />
        Strategy &amp; Governance
      </h3>
      <p className="about__text">
        <strong>Operating Rules:</strong> max 3 active projects, one outcome per week,
        and a strict &ldquo;No refactor without shipping impact&rdquo; policy. Scope is
        a decision, not a backlog.
      </p>
      <p className="about__text">
        <strong>Decision Logs</strong> capture trade-off rationale, accepted risk, and system
        implications to compound long-term leverage across releases. Every architectural
        decision has a record - no institutional knowledge locked in Slack threads.
      </p>
      <p className="about__text">
        <strong>Compliance Edge:</strong> In regulated MedTech/Pharma environments, explicit
        Operating Rules and Decision Logs satisfy audit requirements without adding delivery
        overhead. Governance is built into the workflow, not bolted on.
      </p>
    </article>

    <article className="ai-sdlc__panel reveal reveal--delay-2">
      <h3 className="about__heading">
        <GitPullRequestArrow size={18} className="icon about__icon" />
        The Daily Build Loop
      </h3>
      <p className="about__text">
        <strong>Micro-Scope execution:</strong> select a GitHub issue, define acceptance
        criteria and data schemas before touching code, then implement through small
        daily PRs. Scope is locked at issue-open - protecting scope integrity and predictable velocity.
      </p>
      <p className="about__text">
        <strong>Architectural Gate &amp; Risk Assessment</strong> is a hard gate before every implementation:
        architecture logic, state transitions, and edge cases are validated by the architect.
        AI assists - the architect decides.
      </p>
      <p className="about__text">
        <strong>Auditability in regulated contexts:</strong> Micro-Scope plus explicit
        acceptance criteria provides a traceable paper trail for MedTech/Pharma delivery
        without slowing cadence. Each PR maps directly to a scoped requirement.
      </p>
    </article>

    <article className="ai-sdlc__panel reveal reveal--delay-3">
      <h3 className="about__heading">
        <ShieldCheck size={18} className="icon about__icon" />
        The Production Hardening Stack
      </h3>
      <div className="ai-sdlc__stack">
        <p className="about__text ai-sdlc__stack-item">
          <Gauge size={16} className="icon about__icon" />
          <span><strong>Lighthouse</strong> - performance baselines and release gating.
          Score regression blocks merge.</span>
        </p>
        <p className="about__text ai-sdlc__stack-item">
          <Bug size={16} className="icon about__icon" />
          <span><strong>Sentry</strong> - runtime error visibility and failure triage
          with environment-scoped alerting.</span>
        </p>
        <p className="about__text ai-sdlc__stack-item">
          <BarChart3 size={16} className="icon about__icon" />
          <span><strong>PostHog</strong> - usage analytics and post-release signal
          tracking to validate delivery impact.</span>
        </p>
      </div>
      <p className="about__text">
        <strong>AI code reviews</strong> are a standard implementation gate before merge,
        alongside human approval on architecture-critical changes. Every PR passes
        automated quality checks before it reaches the architect review layer.
      </p>
    </article>
  </section>
);

export default AIAugmentedSDLC;
