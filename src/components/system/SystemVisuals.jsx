import React from "react";
import { ArrowRight } from "lucide-react";
import PageHero from "../common/PageHero.jsx";
import StatusBadge from "../StatusBadge.jsx";

function getAccentClass(accent = "ai") {
  return `system-accent--${accent}`;
}

export { PageHero, StatusBadge };

export function SectionHeader({ eyebrow, title, text, align = "left", headingAccent }) {
  return (
    <div className={`section-header section-header--${align} reveal`}>
      {eyebrow ? <p className="section-header__eyebrow">{eyebrow}</p> : null}
      <h2 className={headingAccent ? `heading-accent--${headingAccent}` : undefined}>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export function FeaturePill({ children, accent = "ai" }) {
  return (
    <span className={`feature-pill ${getAccentClass(accent)}`}>
      <span className="feature-pill__dot" aria-hidden="true" />
      {children}
    </span>
  );
}

export function RouteCard({ title, text, cta, href, icon, accent = "ai" }) {
  return (
    <a href={href} className={`route-card ${getAccentClass(accent)} reveal`}>
      <div className="route-card__top">
        <span className="route-card__icon" aria-hidden="true">
          {icon ? React.createElement(icon, { size: 20 }) : null}
        </span>
        <span className="route-card__vector">{accent}</span>
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
      <span className="route-card__cta">
        {cta} <ArrowRight size={14} aria-hidden="true" />
      </span>
    </a>
  );
}

export function WorkflowNode({ label, detail, index, accent = "ai", style }) {
  return (
    <div className={`workflow-node ${getAccentClass(accent)}`} style={style}>
      <span className="workflow-node__index">{index}</span>
      <div>
        <strong>{label}</strong>
        {detail ? <span>{detail}</span> : null}
      </div>
    </div>
  );
}

export function WorkflowConnector({ vertical = false, accent = "ai" }) {
  return <span className={`workflow-connector ${vertical ? "workflow-connector--vertical" : ""} ${getAccentClass(accent)}`} aria-hidden="true" />;
}

export function WorkflowMap({ items, accent = "ai", title = "Workflow map" }) {
  return (
    <div className={`workflow-map ${getAccentClass(accent)} reveal`} aria-label={title}>
      <div className="workflow-map__grid" aria-hidden="true" />
      {items.map((item, index) => {
        const itemAccent = item.accent || accent;
        return (
          <React.Fragment key={item.label}>
            <WorkflowNode
              label={item.label}
              detail={item.detail}
              index={String(index + 1).padStart(2, "0")}
              accent={itemAccent}
              style={{ "--workflow-step-index": index }}
            />
            {index < items.length - 1 ? <WorkflowConnector accent={itemAccent} /> : null}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export function ArtifactMap({ title, inputLabel, outputLabel, inputs = [], outputs = [], accent = "ai" }) {
  return (
    <div className={`artifact-map ${getAccentClass(accent)} reveal`} aria-label={title}>
      <div className="artifact-map__rail" aria-hidden="true" />
      <div className="artifact-map__group">
        <span className="artifact-map__label">{inputLabel}</span>
        <div className="artifact-map__nodes">
          {inputs.map((item, index) => {
            const label = typeof item === "string" ? item : item.label;
            const itemAccent = typeof item === "string" ? accent : item.accent || accent;
            return (
            <span className={`artifact-map__node ${getAccentClass(itemAccent)}`} key={label}>
              <span className="artifact-map__index">{String(index + 1).padStart(2, "0")}</span>
              {label}
            </span>
            );
          })}
        </div>
      </div>
      <div className="artifact-map__transform" aria-hidden="true">
        <span />
        <ArrowRight size={18} />
        <span />
      </div>
      <div className="artifact-map__group artifact-map__group--output">
        <span className="artifact-map__label">{outputLabel}</span>
        <div className="artifact-map__nodes">
          {outputs.map((item, index) => {
            const label = typeof item === "string" ? item : item.label;
            const itemAccent = typeof item === "string" ? accent : item.accent || accent;
            return (
            <span className={`artifact-map__node artifact-map__node--output ${getAccentClass(itemAccent)}`} key={label}>
              <span className="artifact-map__index">{String(index + 1).padStart(2, "0")}</span>
              {label}
            </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function SystemCard({ title, problem, system, proof, cta, icon, accent = "ai" }) {
  const Icon = icon;

  return (
    <article className={`system-card ${getAccentClass(accent)} reveal`}>
      <header className="system-card__header">
        <span className="system-card__icon" aria-hidden="true">
          {Icon ? <Icon size={18} /> : null}
        </span>
        <h3>{title}</h3>
      </header>
      <dl className="system-card__logic">
        <div>
          <dt>Problem</dt>
          <dd>{problem}</dd>
        </div>
        <div>
          <dt>System</dt>
          <dd>{system}</dd>
        </div>
        <div>
          <dt>Proof</dt>
          <dd>{proof}</dd>
        </div>
      </dl>
      {cta ? (
        <a href={cta.href} className="system-card__cta">
          {cta.label} <ArrowRight size={14} aria-hidden="true" />
        </a>
      ) : null}
    </article>
  );
}

export function ProofCard({ project, accent = "ai" }) {
  const links = project.links || [];
  const stateLabels = [
    project.status,
    ...links.map((link) => link.label),
  ].filter(Boolean).slice(0, 4);

  return (
    <article className={`proof-card ${getAccentClass(accent)} reveal`}>
      <header className="proof-card__header">
        <div>
          <p className="proof-card__relevance">{project.relevance}</p>
          <h3>{project.title}</h3>
        </div>
      </header>
      {stateLabels.length ? (
        <div className="proof-card__states" aria-label="Workflow states">
          {stateLabels.map((state) => <StatusBadge status={state} key={state} />)}
        </div>
      ) : null}
      <p className="proof-card__summary">{project.summary}</p>
      <dl className="proof-card__logic">
        <div>
          <dt>Problem</dt>
          <dd>{project.problem}</dd>
        </div>
        <div>
          <dt>System</dt>
          <dd>{project.solution}</dd>
        </div>
        <div>
          <dt>Proof</dt>
          <dd>{project.proof}</dd>
        </div>
      </dl>
      <div className="proof-card__stack">
        {project.stack.slice(0, 6).map((item) => <FeaturePill accent={accent} key={item}>{item}</FeaturePill>)}
      </div>
      {links.length ? (
        <div className="proof-card__actions">
          {links.map((link) => {
            const external = link.href.startsWith("http");
            return (
              <a href={link.href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="system-card__cta" key={link.href}>
                {link.label} <ArrowRight size={14} aria-hidden="true" />
              </a>
            );
          })}
        </div>
      ) : null}
    </article>
  );
}

export function CTAStrip({ eyebrow, title, text, primary, secondary, accent = "ai" }) {
  return (
    <div className={`cta-strip ${getAccentClass(accent)} reveal`}>
      <div className="cta-strip__node" aria-hidden="true" />
      <div>
        {eyebrow ? <p className="section-header__eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        {text ? <p>{text}</p> : null}
      </div>
      <div className="cta-strip__actions">
        {primary ? <a href={primary.href} className="btn btn--primary">{primary.label}</a> : null}
        {secondary ? <a href={secondary.href} className="btn btn--ghost">{secondary.label}</a> : null}
      </div>
    </div>
  );
}
