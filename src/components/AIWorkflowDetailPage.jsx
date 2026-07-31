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
import { useTranslation } from "../context/LangContext.jsx";
import StatusBadge from "./StatusBadge.jsx";
import PageHero from "./common/PageHero.jsx";
import TypewriterTitle from "./common/TypewriterTitle.jsx";

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
  const { t } = useTranslation();
  return (
    <section className="section container ai-workflow-detail__section">
      <div className="ai-workflow-detail__section-head reveal">
        <p className="ai-workflow-page__kicker">{t("site.aiWorkflow.detail.eyebrow")}</p>
        <h2><span className="about__chev">&gt;</span> {title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function AIWorkflowDetailPage({ slug }) {
  const { t } = useTranslation();
  const workflow = getWorkflowBySlug(slug);

  if (!workflow) {
    return (
      <section className="section container ai-workflow-detail ai-workflow-detail--missing">
        <div className="ai-workflow-detail__panel reveal">
          <p className="ai-workflow-page__kicker">{t("site.aiWorkflow.detail.notFoundEyebrow")}</p>
          <h1>{t("site.aiWorkflow.detail.notFoundTitle")}</h1>
          <p>{t("site.aiWorkflow.detail.notFoundText")}</p>
          <a href="/ai-workflow" className="btn btn--primary">
            <ArrowLeft size={15} className="icon mr-1" /> {t("site.aiWorkflow.detail.back")}
          </a>
        </div>
      </section>
    );
  }

  const Icon = ICONS[workflow.icon] || LayoutDashboard;
  const title = t(`site.workflows.${workflow.slug}.title`) === `site.workflows.${workflow.slug}.title` ? workflow.title : t(`site.workflows.${workflow.slug}.title`);
  const summary = t(`site.workflows.${workflow.slug}.summary`) === `site.workflows.${workflow.slug}.summary` ? workflow.summary : t(`site.workflows.${workflow.slug}.summary`);
  const domain = t(`site.workflows.${workflow.slug}.domain`) === `site.workflows.${workflow.slug}.domain` ? workflow.domain : t(`site.workflows.${workflow.slug}.domain`);
  const problem = t(`site.workflows.${workflow.slug}.problem`) === `site.workflows.${workflow.slug}.problem` ? workflow.problem : t(`site.workflows.${workflow.slug}.problem`);
  const audience = Array.isArray(t(`site.workflows.${workflow.slug}.audience`)) ? t(`site.workflows.${workflow.slug}.audience`) : workflow.audience;
  const bottlenecks = Array.isArray(t(`site.workflows.${workflow.slug}.bottlenecks`)) ? t(`site.workflows.${workflow.slug}.bottlenecks`) : workflow.currentWorkflow.bottlenecks;
  const currentSteps = Array.isArray(t(`site.workflows.${workflow.slug}.currentSteps`)) ? t(`site.workflows.${workflow.slug}.currentSteps`) : t("site.aiWorkflow.detail.generic.currentSteps");
  const currentTools = Array.isArray(t(`site.workflows.${workflow.slug}.tools`)) ? t(`site.workflows.${workflow.slug}.tools`) : t("site.aiWorkflow.detail.generic.tools");
  const ownershipGaps = Array.isArray(t(`site.workflows.${workflow.slug}.ownershipGaps`)) ? t(`site.workflows.${workflow.slug}.ownershipGaps`) : t("site.aiWorkflow.detail.generic.ownershipGaps");
  const documentationGaps = Array.isArray(t(`site.workflows.${workflow.slug}.documentationGaps`)) ? t(`site.workflows.${workflow.slug}.documentationGaps`) : t("site.aiWorkflow.detail.generic.documentationGaps");
  const aiSteps = Array.isArray(t(`site.workflows.${workflow.slug}.aiSteps`)) ? t(`site.workflows.${workflow.slug}.aiSteps`) : t("site.aiWorkflow.detail.generic.aiSteps");
  const aiAssists = Array.isArray(t(`site.workflows.${workflow.slug}.aiAssists`)) ? t(`site.workflows.${workflow.slug}.aiAssists`) : t("site.aiWorkflow.detail.generic.aiAssists");
  const automatedParts = Array.isArray(t(`site.workflows.${workflow.slug}.automatedParts`)) ? t(`site.workflows.${workflow.slug}.automatedParts`) : t("site.aiWorkflow.detail.generic.automatedParts");
  const manualControls = Array.isArray(t(`site.workflows.${workflow.slug}.manualControls`)) ? t(`site.workflows.${workflow.slug}.manualControls`) : t("site.aiWorkflow.detail.generic.manualControls");
  const components = Array.isArray(t(`site.workflows.${workflow.slug}.systemComponents`)) ? t(`site.workflows.${workflow.slug}.systemComponents`) : workflow.systemComponents;
  const auditability = Array.isArray(t(`site.workflows.${workflow.slug}.auditabilityFeatures`)) ? t(`site.workflows.${workflow.slug}.auditabilityFeatures`) : workflow.auditabilityFeatures;
  const value = Array.isArray(t(`site.workflows.${workflow.slug}.expectedBusinessValue`)) ? t(`site.workflows.${workflow.slug}.expectedBusinessValue`) : workflow.expectedBusinessValue;
  const artifacts = Array.isArray(t(`site.workflows.${workflow.slug}.artifactPlaceholders`)) ? t(`site.workflows.${workflow.slug}.artifactPlaceholders`) : t("site.aiWorkflow.detail.generic.artifacts");

  return (
    <div className="ai-workflow-detail">
      <PageHero
        eyebrow={t("site.aiWorkflow.detail.heroEyebrow")}
        title={<TypewriterTitle text={title} />}
        subtitle={summary}
        primaryCta={{ label: t("site.cta.startAudit"), href: AUDIT_HREF }}
        secondaryCta={{ label: t("site.aiWorkflow.detail.back"), href: "/ai-workflow", icon: <ArrowLeft size={15} className="icon ml-1" aria-hidden="true" /> }}
        visualType="workflow-detail"
        variant="compact"
        scrollTargetId="workflow-problem"
      >
        <div className="ai-workflow-detail__meta">
          <span className="ai-workflow-detail__hero-icon" aria-hidden="true"><Icon size={18} /></span>
          <StatusBadge status={workflow.status} />
          <span>{domain}</span>
        </div>
      </PageHero>

      <div id="workflow-problem" />
      <DetailBlock title={t("site.aiWorkflow.detail.problemTitle")}>
        <div className="ai-workflow-detail__problem-grid reveal">
          <article>
            <h3>{t("site.aiWorkflow.detail.whatWorkflowIs")}</h3>
            <p>{audience.join(", ")} {t("site.aiWorkflow.detail.audienceSuffix")}</p>
          </article>
          <article>
            <h3>{t("site.aiWorkflow.detail.whyBreaks")}</h3>
            <p>{bottlenecks.join(", ")} {t("site.aiWorkflow.detail.breaksSuffix")}</p>
          </article>
          <article>
            <h3>{t("site.aiWorkflow.detail.risk")}</h3>
            <p>{problem}</p>
          </article>
        </div>
      </DetailBlock>

      <DetailBlock title={t("site.aiWorkflow.detail.currentTitle")}>
        <div className="ai-workflow-detail__current reveal">
          <ListCard title={t("site.aiWorkflow.detail.manualSteps")} items={currentSteps} />
          <ListCard title={t("site.aiWorkflow.detail.tools")} items={currentTools} />
          <ListCard title={t("site.aiWorkflow.detail.bottlenecks")} items={bottlenecks} />
          <ListCard title={t("site.aiWorkflow.detail.ownershipGaps")} items={ownershipGaps} />
          <ListCard title={t("site.aiWorkflow.detail.documentationGaps")} items={documentationGaps} />
        </div>
      </DetailBlock>

      <DetailBlock title={t("site.aiWorkflow.detail.aiTitle")}>
        <div className="ai-workflow-detail__flow reveal" aria-label={`${workflow.title} AI-assisted workflow`}>
          {aiSteps.map((step, index) => (
            <div className="ai-workflow-detail__flow-step" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
        <div className="ai-workflow-detail__triple reveal reveal--delay-1">
          <ListCard title={t("site.aiWorkflow.detail.aiAssists")} items={aiAssists} />
          <ListCard title={t("site.aiWorkflow.detail.automated")} items={automatedParts} />
          <ListCard title={t("site.aiWorkflow.detail.manual")} items={manualControls} />
        </div>
      </DetailBlock>

      <DetailBlock title={t("site.aiWorkflow.detail.componentsTitle")}>
        <div className="ai-workflow-detail__component-grid reveal">
          {components.map((component) => (
            <article className="ai-workflow-detail__component" key={component}>
              <span>{component}</span>
            </article>
          ))}
        </div>
      </DetailBlock>

      <DetailBlock title={t("site.aiWorkflow.detail.auditTitle")}>
        <div className="ai-workflow-detail__audit reveal">
          <p>
            {t("site.aiWorkflow.detail.auditText")}
          </p>
          <div className="ai-workflow-detail__component-grid">
            {auditability.map((feature) => (
              <article className="ai-workflow-detail__component" key={feature}>
                <span>{feature}</span>
              </article>
            ))}
          </div>
        </div>
      </DetailBlock>

      <DetailBlock title={t("site.aiWorkflow.detail.valueTitle")}>
        <div className="ai-workflow-detail__value-grid reveal">
          {value.map((item) => (
            <article key={item}>
              <CheckCircle2 size={16} aria-hidden="true" />
              <span>{item}</span>
            </article>
          ))}
        </div>
      </DetailBlock>

      <DetailBlock title={t("site.aiWorkflow.detail.artifactTitle")}>
        <div className="ai-workflow-detail__artifact-grid reveal">
          {artifacts.map((artifact) => (
            <article className="ai-workflow-detail__artifact" key={artifact}>
              <span>{artifact}</span>
              <div aria-hidden="true" />
            </article>
          ))}
        </div>
      </DetailBlock>

      <section className="section container ai-workflow-detail__final">
        <div className="ai-workflow-page__final-inner reveal">
          <p className="ai-workflow-page__kicker">{t("site.nextStep")}</p>
          <h2>{t("site.aiWorkflow.detail.finalTitle")}</h2>
          <p>{t("site.aiWorkflow.detail.finalText")}</p>
          <div className="ai-workflow-page__actions">
            <a href={AUDIT_HREF} className="btn btn--primary">{t("site.cta.startAudit")}</a>
            <a href="/ai-workflow" className="btn btn--ghost">{t("site.aiWorkflow.detail.backShort")}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
