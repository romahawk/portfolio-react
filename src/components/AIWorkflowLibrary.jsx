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

function WorkflowCard({ workflow }) {
  const Icon = ICONS[workflow.icon] || LayoutDashboard;

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
            <h3>{workflow.title}</h3>
            <p>{workflow.domain}</p>
          </div>
        </div>
        <StatusBadge status={workflow.status} />
      </header>

      <div className="ai-workflow-card__map" aria-label={`${workflow.title} process map`}>
        {["Capture", "Structure", "Assist", "Review", "Handover"].map((step, index) => (
          <span key={step} style={{ "--step-index": index }}>
            {step}
          </span>
        ))}
      </div>

      <dl className="ai-workflow-card__details">
        <div>
          <dt>Workflow problem</dt>
          <dd>{workflow.problem}</dd>
        </div>
        <div>
          <dt>Current workflow pain</dt>
          <dd>{workflow.currentWorkflow.bottlenecks.join(", ")}.</dd>
        </div>
        <div>
          <dt>AI-assisted workflow concept</dt>
          <dd>{workflow.summary}</dd>
        </div>
      </dl>

      <div className="ai-workflow-card__systems">
        <div>
          <h4>System components</h4>
          <ul>
            {workflow.systemComponents.slice(0, 5).map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div>
          <h4>Human review points</h4>
          <ul>
            {workflow.humanReviewPoints.slice(0, 4).map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>

      <div className="ai-workflow-card__trace">
        <div>
          <span>Auditability / traceability layer</span>
          <p>{workflow.auditabilityFeatures.slice(0, 4).join(", ")}.</p>
        </div>
        <div>
          <span>Expected business value</span>
          <p>{workflow.expectedBusinessValue.slice(0, 4).join(", ")}.</p>
        </div>
      </div>

      <a href={`/ai-workflow/${workflow.slug}`} className="project-card__link project-card__link--ghost">
        View Workflow <ArrowRight size={14} aria-hidden="true" />
      </a>
    </article>
  );
}

export default function AIWorkflowLibrary() {
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

  return (
    <div className="ai-workflow-page">
      <PageHero
        eyebrow="PRACTICAL AI WORKFLOW SYSTEMS"
        title="AI Workflow Library"
        subtitle="Practical examples of AI-assisted workflow systems for MedTech, HealthTech, and regulated operations."
        primaryCta={{ label: "View MedTech Workflows", href: "#medtech-clinical-or-workflows", icon: <ArrowRight size={15} className="icon ml-1" aria-hidden="true" /> }}
        secondaryCta={{ label: "Request AI Workflow Audit", href: AUDIT_HREF }}
        visualType="workflow"
        scrollTargetId="medtech-clinical-or-workflows"
      />

      <section id="medtech-clinical-or-workflows" className="section container ai-workflow-page__section">
        <div className="ai-workflow-page__explain reveal">
          <p className="ai-workflow-page__kicker">Reference library</p>
          <h2><span className="about__chev">&gt;</span> Why this library exists</h2>
          <p>
            These examples show how messy, manual, and compliance-heavy workflows can be
            transformed into structured, AI-assisted systems. They are designed as reference
            workflows, prototype concepts, and proof-of-work artifacts with explicit maturity labels.
          </p>
          <p className="ai-workflow-page__trust-note">
            These workflow examples are reference systems and concept implementations informed by
            real MedTech and regulated-operations patterns, including implementation handovers, OR
            workflows, documentation gaps, equipment coordination, and operational visibility
            problems. They remain transparently labeled as concept, reference, prototype, or built
            systems where applicable.
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
          <p className="ai-workflow-page__kicker">Featured workflow</p>
          <h2><span className="about__chev">&gt;</span> Browse by workflow family</h2>
          <p>Choose one category, inspect the featured reference workflow, then open the detail page if it maps to your context.</p>
        </div>
        <div className="ux-tabs" role="tablist" aria-label="Workflow categories">
          {workflowCategories.map((category) => (
            <button
              type="button"
              className={`ux-tab ${category.title === activeCategory ? "ux-tab--active" : ""}`}
              onClick={() => setActiveCategory(category.title)}
              key={category.title}
            >
              {category.title.replace("MedTech / Clinical / OR Workflows", "MedTech / Clinical / OR")}
            </button>
          ))}
        </div>
        {featuredWorkflow ? (
          <div className="ai-workflow-page__featured">
            <WorkflowCard workflow={featuredWorkflow} />
            <aside className="ai-workflow-page__other-list">
              <p className="ai-workflow-page__kicker">Other workflows</p>
              {otherWorkflows.map((workflow) => (
                <a href={`/ai-workflow/${workflow.slug}`} key={workflow.slug}>
                  <span>{workflow.title}</span>
                  <StatusBadge status={workflow.status} />
                </a>
              ))}
            </aside>
          </div>
        ) : null}
      </section>

      <section className="section container ai-workflow-page__section">
        <div className="ai-workflow-page__section-head reveal">
          <p className="ai-workflow-page__kicker">Workflow explorer</p>
          <h2><span className="about__chev">&gt;</span> Filter reference workflows</h2>
          <p>Use a narrow filter set to keep the library scannable.</p>
        </div>
        <div className="ai-workflow-page__filters">
          <label>Domain
            <select value={domainFilter} onChange={(event) => setDomainFilter(event.target.value)}>
              {domains.map((domain) => <option key={domain}>{domain}</option>)}
            </select>
          </label>
          <label>Status
            <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
              {statuses.map((status) => <option key={status}>{status}</option>)}
            </select>
          </label>
          <label>Business problem
            <select value={problemFilter} onChange={(event) => setProblemFilter(event.target.value)}>
              {problemTypes.map((problem) => <option key={problem}>{problem}</option>)}
            </select>
          </label>
        </div>
        <div className="ai-workflow-page__compact-results">
          {filteredWorkflows.map((workflow) => (
            <a href={`/ai-workflow/${workflow.slug}`} className="ai-workflow-page__compact-result" key={workflow.slug}>
              <div>
                <strong>{workflow.title}</strong>
                <span>{workflow.problem}</span>
              </div>
              <StatusBadge status={workflow.status} />
            </a>
          ))}
        </div>
      </section>

      <section className="section container ai-workflow-page__final">
        <div className="ai-workflow-page__final-inner reveal">
          <p className="ai-workflow-page__kicker">Next step</p>
          <h2>Want to map one of your workflows?</h2>
          <p>
            Start with one workflow, define where it breaks, identify what AI can safely assist,
            and design the review, traceability, and handover layer around it.
          </p>
          <div className="ai-workflow-page__actions">
            <a href={AUDIT_HREF} className="btn btn--primary">Request AI Workflow Audit</a>
            <a href="/collaborate" className="btn btn--ghost">Work With Me</a>
            <a href="/proof-of-work#projects" className="btn btn--ghost">View Proof of Work</a>
          </div>
        </div>
      </section>
    </div>
  );
}
