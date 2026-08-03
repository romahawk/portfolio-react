import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  ClipboardCheck,
  FileSearch,
  Hospital,
  LayoutDashboard,
  ListChecks,
  Network,
  PackageCheck,
  Video,
  Wrench,
  ShieldCheck,
} from "lucide-react";
import { aiWorkflowExamples, workflowCategories } from "../data/aiWorkflows.js";
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

const statusSlug = (status = "") =>
  status.toLowerCase().replace(/&/g, "and").replace(/\//g, " ").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function getWorkflowText(t, workflow, field) {
  const value = t(`site.workflows.${workflow.slug}.${field}`);
  return value === `site.workflows.${workflow.slug}.${field}` ? workflow[field] : value;
}

function getWorkflowArray(t, workflow, field, fallback) {
  const value = t(`site.workflows.${workflow.slug}.${field}`);
  return Array.isArray(value) ? value : fallback;
}

function WorkflowCard({ workflow }) {
  const { t } = useTranslation();
  const Icon = ICONS[workflow.icon] || LayoutDashboard;
  const title = getWorkflowText(t, workflow, "title");
  const domain = getWorkflowText(t, workflow, "domain");
  const problem = getWorkflowText(t, workflow, "problem");
  const summary = getWorkflowText(t, workflow, "summary");
  const systemComponents = getWorkflowArray(t, workflow, "systemComponents", workflow.systemComponents);
  const humanReviewPoints = getWorkflowArray(t, workflow, "humanReviewPoints", workflow.humanReviewPoints);
  const auditabilityFeatures = getWorkflowArray(t, workflow, "auditabilityFeatures", workflow.auditabilityFeatures);
  const expectedBusinessValue = getWorkflowArray(t, workflow, "expectedBusinessValue", workflow.expectedBusinessValue);
  const bottlenecks = getWorkflowArray(t, workflow, "bottlenecks", workflow.currentWorkflow.bottlenecks);

  return (
    <article
      id={workflow.slug}
      className="ai-workflow-card"
    >
      <header className="ai-workflow-card__header">
        <div className="ai-workflow-card__title-row">
          <span className="ai-workflow-card__icon" aria-hidden="true">
            <Icon size={19} />
          </span>
          <div>
            <h3>{title}</h3>
            <p>{domain}</p>
          </div>
        </div>
        <StatusBadge status={workflow.status} />
      </header>

      <div className="ai-workflow-card__map" aria-label={`${title} ${t("site.aiWorkflow.processMap")}`}>
        {t("site.workflowSteps").map((step, index) => (
          <span key={step} style={{ "--step-index": index }}>
            {step}
          </span>
        ))}
      </div>

      <dl className="ai-workflow-card__details">
        <div>
          <dt>{t("site.aiWorkflow.labels.problem")}</dt>
          <dd>{problem}</dd>
        </div>
        <div>
          <dt>{t("site.aiWorkflow.labels.pain")}</dt>
          <dd>{bottlenecks.join(", ")}.</dd>
        </div>
        <div>
          <dt>{t("site.aiWorkflow.labels.concept")}</dt>
          <dd>{summary}</dd>
        </div>
      </dl>

      <div className="ai-workflow-card__systems">
        <div>
          <h4>{t("site.aiWorkflow.labels.components")}</h4>
          <ul>
            {systemComponents.slice(0, 5).map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div>
          <h4>{t("site.aiWorkflow.labels.review")}</h4>
          <ul>
            {humanReviewPoints.slice(0, 4).map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>

      <div className="ai-workflow-card__trace">
        <div>
          <span>{t("site.aiWorkflow.labels.traceability")}</span>
          <p>{auditabilityFeatures.slice(0, 4).join(", ")}.</p>
        </div>
        <div>
          <span>{t("site.aiWorkflow.labels.value")}</span>
          <p>{expectedBusinessValue.slice(0, 4).join(", ")}.</p>
        </div>
      </div>

      <a href={`/ai-workflow/${workflow.slug}`} className="project-card__link project-card__link--ghost">
        {t("site.cta.viewWorkflow")} <ArrowRight size={14} aria-hidden="true" />
      </a>
    </article>
  );
}

export default function AIWorkflowLibrary() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState(workflowCategories[0]?.title || "");
  const [domainFilter, setDomainFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [problemFilter, setProblemFilter] = useState("All");
  const selectedCategory = workflowCategories.find((category) => category.title === activeCategory) || workflowCategories[0];
  const featuredWorkflow = selectedCategory?.workflows[0];
  const otherWorkflows = selectedCategory?.workflows.slice(1) || [];
  const domains = useMemo(() => ["All", ...new Set(aiWorkflowExamples.map((workflow) => workflow.category))], []);
  const statuses = useMemo(() => ["All", ...new Set(aiWorkflowExamples.map((workflow) => workflow.status))], []);
  const problemTypes = ["All", "Traceability", "Handover", "Coordination", "Documentation", "Automation"];
  const filteredWorkflows = aiWorkflowExamples
    .filter((workflow) => domainFilter === "All" || workflow.category === domainFilter)
    .filter((workflow) => statusFilter === "All" || workflow.status === statusFilter)
    .filter((workflow) => {
      if (problemFilter === "All") return true;
      const haystack = `${workflow.problem} ${workflow.summary} ${workflow.currentWorkflow.bottlenecks.join(" ")}`.toLowerCase();
      return haystack.includes(problemFilter.toLowerCase());
    })
    .slice(0, 4);
  const heroTitle = t("site.aiWorkflow.hero.title");

  return (
    <div className="ai-workflow-page">
      <PageHero
        eyebrow={t("site.aiWorkflow.hero.eyebrow")}
        title={<TypewriterTitle text={heroTitle} />}
        subtitle={t("site.aiWorkflow.hero.subtitle")}
        primaryCta={{ label: t("site.aiWorkflow.hero.primary"), href: "#medtech-clinical-or-workflows", icon: <ArrowRight size={15} className="icon ml-1" aria-hidden="true" /> }}
        secondaryCta={{ label: t("site.cta.startAudit"), href: AUDIT_HREF }}
        visualType="workflow"
        scrollTargetId="medtech-clinical-or-workflows"
      />

      <section id="medtech-clinical-or-workflows" className="section container ai-workflow-page__section">
        <div className="ai-workflow-page__explain reveal">
          <p className="ai-workflow-page__kicker">{t("site.aiWorkflow.reference.eyebrow")}</p>
          <h2><span className="about__chev">&gt;</span> {t("site.aiWorkflow.reference.title")}</h2>
          <p>{t("site.aiWorkflow.reference.text")}</p>
          <p className="ai-workflow-page__trust-note">
            {t("site.aiWorkflow.reference.trust")}
          </p>
          <div className="ai-workflow-page__status-row" aria-label="Workflow status labels">
            {["Built System", "Prototype", "Reference System", "Concept Workflow", "Proof-of-Work Artifact", "Case Simulation", "Archived Experiment"].map((status) => (
              <StatusBadge status={status} key={status} />
            ))}
          </div>
        </div>
      </section>

      <section className="section container ai-workflow-page__section">
        <div className="ai-workflow-page__section-head reveal">
          <p className="ai-workflow-page__kicker">{t("site.aiWorkflow.featured.eyebrow")}</p>
          <h2><span className="about__chev">&gt;</span> {t("site.aiWorkflow.featured.title")}</h2>
          <p>{t("site.aiWorkflow.featured.text")}</p>
        </div>
        <div className="ux-tabs" role="tablist" aria-label="Workflow categories">
          {workflowCategories.map((category) => (
            <button
              type="button"
              className={`ux-tab ${category.title === activeCategory ? "ux-tab--active" : ""}`}
              onClick={() => setActiveCategory(category.title)}
              key={category.title}
            >
              {t(`site.aiWorkflow.categories.${category.title}`) === `site.aiWorkflow.categories.${category.title}`
                ? category.title.replace("MedTech / Clinical / OR Workflows", "MedTech / Clinical / OR")
                : t(`site.aiWorkflow.categories.${category.title}`)}
            </button>
          ))}
        </div>
        {featuredWorkflow ? (
          <div className="ai-workflow-page__featured">
            <WorkflowCard workflow={featuredWorkflow} />
            <aside className="ai-workflow-page__other-list">
              <p className="ai-workflow-page__kicker">{t("site.aiWorkflow.other")}</p>
              {otherWorkflows.map((workflow) => (
                <a href={`/ai-workflow/${workflow.slug}`} key={workflow.slug}>
                  <span>{getWorkflowText(t, workflow, "title")}</span>
                  <StatusBadge status={workflow.status} />
                </a>
              ))}
            </aside>
          </div>
        ) : null}
      </section>

      <section className="section container ai-workflow-page__section">
        <div className="ai-workflow-page__section-head reveal">
          <p className="ai-workflow-page__kicker">{t("site.aiWorkflow.explorer.eyebrow")}</p>
          <h2><span className="about__chev">&gt;</span> {t("site.aiWorkflow.explorer.title")}</h2>
          <p>{t("site.aiWorkflow.explorer.text")}</p>
        </div>
        <div className="ai-workflow-page__filters">
          <label>{t("site.aiWorkflow.filters.domain")}
            <select value={domainFilter} onChange={(event) => setDomainFilter(event.target.value)}>
              {domains.map((domain) => <option key={domain} value={domain}>{domain === "All" ? t("site.filters.all") : (t(`site.aiWorkflow.categories.${domain}`) === `site.aiWorkflow.categories.${domain}` ? domain : t(`site.aiWorkflow.categories.${domain}`))}</option>)}
            </select>
          </label>
          <label>{t("site.aiWorkflow.filters.status")}
            <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
              {statuses.map((status) => <option key={status} value={status}>{status === "All" ? t("site.filters.all") : (t(`site.status.${statusSlug(status)}`) === `site.status.${statusSlug(status)}` ? status : t(`site.status.${statusSlug(status)}`))}</option>)}
            </select>
          </label>
          <label>{t("site.aiWorkflow.filters.problem")}
            <select value={problemFilter} onChange={(event) => setProblemFilter(event.target.value)}>
              {problemTypes.map((problem) => <option key={problem} value={problem}>{t(`site.aiWorkflow.problemTypes.${problem}`) === `site.aiWorkflow.problemTypes.${problem}` ? problem : t(`site.aiWorkflow.problemTypes.${problem}`)}</option>)}
            </select>
          </label>
        </div>
        <div className="ai-workflow-page__compact-results">
          {filteredWorkflows.map((workflow) => (
            <a href={`/ai-workflow/${workflow.slug}`} className="ai-workflow-page__compact-result" key={workflow.slug}>
              <div>
                <strong>{getWorkflowText(t, workflow, "title")}</strong>
                <span>{getWorkflowText(t, workflow, "problem")}</span>
              </div>
              <StatusBadge status={workflow.status} />
            </a>
          ))}
        </div>
      </section>

      <section className="section container ai-workflow-page__final">
        <div className="ai-workflow-page__final-inner reveal">
          <p className="ai-workflow-page__kicker">{t("site.nextStep")}</p>
          <h2>{t("site.aiWorkflow.final.title")}</h2>
          <p>{t("site.aiWorkflow.final.text")}</p>
          <div className="ai-workflow-page__actions">
            <a href={AUDIT_HREF} className="btn btn--primary">{t("site.cta.startAudit")}</a>
            <a href="/collaborate" className="btn btn--ghost">{t("site.cta.workWithMe")}</a>
            <a href="/fullstack" className="btn btn--ghost">{t("site.cta.viewProof")}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
