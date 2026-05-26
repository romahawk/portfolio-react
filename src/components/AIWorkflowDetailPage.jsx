import React from "react";
import {
  ArrowLeft,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  Hospital,
  LayoutDashboard,
  ListChecks,
  Network,
  PackageCheck,
  ShieldCheck,
  Video,
  Wrench,
} from "lucide-react";
import { getWorkflowBySlug } from "../data/aiWorkflows.js";
import StatusBadge from "./StatusBadge.jsx";
import PageHero from "./common/PageHero.jsx";

const AUDIT_HREF = "mailto:romazuryk@proton.me?subject=AI%20Workflow%20Audit%20Request";

const ICONS = {
  ClipboardCheck,
  FileSearch,
  Hospital,
  LayoutDashboard,
  ListChecks,
  Network,
  PackageCheck,
  ShieldCheck,
  Video,
  Wrench,
};

function ListCard({ title, items }) {
  return (
    <article className="ai-workflow-detail__list-card">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <CheckCircle2 size={14} aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function DetailBlock({ title, children }) {
  return (
    <section className="section container ai-workflow-detail__section">
      <div className="ai-workflow-detail__section-head reveal">
        <p className="ai-workflow-page__kicker">Workflow detail</p>
        <h2><span className="about__chev">&gt;</span> {title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function AIWorkflowDetailPage({ slug }) {
  const workflow = getWorkflowBySlug(slug);

  if (!workflow) {
    return (
      <section className="section container ai-workflow-detail ai-workflow-detail--missing">
        <div className="ai-workflow-detail__panel reveal">
          <p className="ai-workflow-page__kicker">Workflow not found</p>
          <h1>That workflow example is not available yet.</h1>
          <p>
            The AI Workflow Library is data-driven, so new examples can be added as structured records.
          </p>
          <a href="/ai-workflow" className="btn btn--primary">
            <ArrowLeft size={15} className="icon mr-1" /> Back to AI Workflow Library
          </a>
        </div>
      </section>
    );
  }

  const Icon = ICONS[workflow.icon] || LayoutDashboard;

  return (
    <div className="ai-workflow-detail">
      <PageHero
        eyebrow="WORKFLOW DETAIL"
        title={workflow.title}
        subtitle={workflow.summary}
        primaryCta={{ label: "Request AI Workflow Audit", href: AUDIT_HREF }}
        secondaryCta={{ label: "Back to AI Workflow Library", href: "/ai-workflow", icon: <ArrowLeft size={15} className="icon ml-1" aria-hidden="true" /> }}
        visualType="workflow-detail"
        variant="compact"
        scrollTargetId="workflow-problem"
      >
        <div className="ai-workflow-detail__meta">
          <span className="ai-workflow-detail__hero-icon" aria-hidden="true"><Icon size={18} /></span>
          <StatusBadge status={workflow.status} />
          <span>{workflow.domain}</span>
        </div>
      </PageHero>

      <div id="workflow-problem" />
      <DetailBlock title="Workflow Problem">
        <div className="ai-workflow-detail__problem-grid reveal">
          <article>
            <h3>What the workflow is</h3>
            <p>{workflow.audience.join(", ")} are the primary audience for this workflow.</p>
          </article>
          <article>
            <h3>Why it breaks</h3>
            <p>{workflow.currentWorkflow.bottlenecks.join(", ")} create repeated friction when the workflow is not structured.</p>
          </article>
          <article>
            <h3>Risk or inefficiency</h3>
            <p>{workflow.problem}</p>
          </article>
        </div>
      </DetailBlock>

      <DetailBlock title="Current Workflow">
        <div className="ai-workflow-detail__current reveal">
          <ListCard title="Manual steps" items={workflow.currentWorkflow.steps} />
          <ListCard title="Tools involved" items={workflow.currentWorkflow.tools} />
          <ListCard title="Bottlenecks" items={workflow.currentWorkflow.bottlenecks} />
          <ListCard title="Ownership gaps" items={workflow.currentWorkflow.ownershipGaps} />
          <ListCard title="Documentation gaps" items={workflow.currentWorkflow.documentationGaps} />
        </div>
      </DetailBlock>

      <DetailBlock title="AI-Assisted Workflow">
        <div className="ai-workflow-detail__flow reveal" aria-label={`${workflow.title} AI-assisted workflow`}>
          {workflow.aiAssistedWorkflow.steps.map((step, index) => (
            <div className="ai-workflow-detail__flow-step" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
        <div className="ai-workflow-detail__triple reveal reveal--delay-1">
          <ListCard title="Where AI assists" items={workflow.aiAssistedWorkflow.aiAssists} />
          <ListCard title="What gets automated" items={workflow.aiAssistedWorkflow.automatedParts} />
          <ListCard title="What remains controlled manually" items={workflow.aiAssistedWorkflow.manualControls} />
        </div>
      </DetailBlock>

      <DetailBlock title="System Components">
        <div className="ai-workflow-detail__component-grid reveal">
          {workflow.systemComponents.map((component) => (
            <article className="ai-workflow-detail__component" key={component}>
              <span>{component}</span>
            </article>
          ))}
        </div>
      </DetailBlock>

      <DetailBlock title="Auditability Layer">
        <div className="ai-workflow-detail__audit reveal">
          <p>
            This concept keeps AI assistance inside a controlled workflow. It is not positioned as
            certified medical software and does not make black-box regulatory decisions.
          </p>
          <div className="ai-workflow-detail__component-grid">
            {workflow.auditabilityFeatures.map((feature) => (
              <article className="ai-workflow-detail__component" key={feature}>
                <span>{feature}</span>
              </article>
            ))}
          </div>
        </div>
      </DetailBlock>

      <DetailBlock title="Expected Business Value">
        <div className="ai-workflow-detail__value-grid reveal">
          {workflow.expectedBusinessValue.map((value) => (
            <article key={value}>
              <CheckCircle2 size={16} aria-hidden="true" />
              <span>{value}</span>
            </article>
          ))}
        </div>
      </DetailBlock>

      <DetailBlock title="Prototype / Artifact Placeholder">
        <div className="ai-workflow-detail__artifact-grid reveal">
          {workflow.artifactPlaceholders.map((artifact) => (
            <article className="ai-workflow-detail__artifact" key={artifact}>
              <span>{artifact}</span>
              <div aria-hidden="true" />
            </article>
          ))}
        </div>
      </DetailBlock>

      <section className="section container ai-workflow-detail__final">
        <div className="ai-workflow-page__final-inner reveal">
          <p className="ai-workflow-page__kicker">Next step</p>
          <h2>Want to map this type of workflow in your organization?</h2>
          <p>
            Start with one workflow, make the current process visible, then design the AI assistance,
            human review, traceability, and handover layer around it.
          </p>
          <div className="ai-workflow-page__actions">
            <a href={AUDIT_HREF} className="btn btn--primary">Request AI Workflow Audit</a>
            <a href="/ai-workflow" className="btn btn--ghost">Back to Library</a>
          </div>
        </div>
      </section>
    </div>
  );
}
