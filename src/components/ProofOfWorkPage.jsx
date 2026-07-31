import React, { useState } from "react";
import { ArrowRight, Boxes, ChevronDown, ExternalLink, FileText, Presentation } from "lucide-react";
import { aiWorkflowExamples, getWorkflowBySlug } from "../data/aiWorkflows.js";
import { useTranslation } from "../context/LangContext.jsx";
import StatusBadge from "./StatusBadge.jsx";
import PageHero from "./common/PageHero.jsx";
import TypewriterTitle from "./common/TypewriterTitle.jsx";

const AI_WORKFLOW_SLUGS = [
  "medtech-implementation-handoff-assistant",
  "regulated-sop-assistant",
  "or-workflow-optimization",
  "surgical-recording-indexing",
];

const LIVESURGERY_ARCHIVE_LINKS = [
  { label: "View", href: "https://livesurgery-landing.vercel.app/" },
  { label: "Pitch deck", href: "https://livesurgery-pitch-deck.vercel.app/", icon: "pitch" },
];

const TITLE_OVERRIDES = {
  "or-workflow-optimization": "OR Workflow Optimization Dashboard",
  "biomedical-maintenance-workflow": "Biomedical Maintenance Workflow System",
};

const OR_INTEGRATION_PROOF = {
  title: "OR Integration & Surgical Workflow Systems",
  status: "Real MedTech Implementation Experience",
  domain: "Operating rooms / surgical infrastructure / medical equipment integration",
  summary:
    "Real-world experience with operating room integration and surgical infrastructure projects, including surgical lighting, OR video/audio workflows, medical equipment coordination, implementation handover, and hospital stakeholder alignment.",
  problem:
    "Operating rooms are complex environments where equipment, video signals, patient data, lighting, documentation, and clinical workflows must work together reliably. Poor integration creates friction, delays, weak visibility, and handover risk.",
  system:
    "Experience across implementation planning, equipment coordination, installation support, clinical handover, stakeholder communication, and workflow understanding around integrated OR environments.",
  proves:
    "Real MedTech domain exposure, OR and hospital workflow understanding, implementation and handover reality, multi-stakeholder coordination, and the ability to translate clinical-operational complexity into product and workflow systems.",
  href: "/proof-of-work/or-integration",
};

const PRIMARY_MEDTECH_IMPLEMENTATION = [
  {
    title: "SURGIMEDIA Integrated OR Systems",
    status: "Real MedTech Implementation Experience",
    domain: "Integrated operating rooms / surgical video workflows",
    involved:
      "OR visualization, routing, recording, documentation workflows, multi-vendor coordination, clinical alignment, and implementation handover.",
    proves:
      "Understanding of OR workflow complexity, stakeholder coordination, and the operational foundation for future AI-assisted surgical workflow systems.",
    tags: ["OR Workflow", "Multi-vendor", "Surgical Video", "Implementation Handover"],
  },
  {
    title: "SURGIRIS LED Surgical Lights",
    status: "Real MedTech Implementation Experience",
    domain: "Operating room infrastructure / surgical lighting",
    involved:
      "Multi-site OR lighting delivery and implementation involving clinical workflow requirements, installation coordination, training, and lifecycle reliability.",
    proves:
      "Experience translating clinical environment constraints into structured implementation requirements and handover.",
    tags: ["OR Infrastructure", "Clinical Workflow", "Installation", "Training"],
  },
  {
    title: "Medical Gas & Equipment Pendants",
    status: "Real MedTech Implementation Experience",
    domain: "OR / ICU infrastructure",
    involved:
      "ICU and operating room pendant system deployment involving safety, ergonomics, technical requirements, clinical usage, and facility constraints.",
    proves:
      "Understanding of how infrastructure, usability, safety, and clinical operations intersect inside regulated environments.",
    tags: ["OR / ICU", "Safety", "Ergonomics", "Deployment"],
  },
  {
    title: "Hyperbaric Therapy Deployment",
    status: "Real MedTech Implementation Experience",
    domain: "Turnkey medical equipment deployment",
    involved:
      "Turnkey hyperbaric therapy deployment involving import controls, safety compliance, site readiness, clinical onboarding, and lifecycle maintenance processes.",
    proves:
      "Ability to coordinate complex MedTech implementation across logistics, safety, training, operations, and long-term support.",
    tags: ["Turnkey Delivery", "Safety", "Clinical Onboarding", "Lifecycle Support"],
  },
];

const SECONDARY_MEDTECH_IMPLEMENTATION = [
  {
    title: "Diagnostic & Therapeutic Systems",
    status: "Real MedTech Delivery Experience",
    domain: "Diagnostic / therapeutic equipment launch and deployment",
    involved:
      "Product launch and deployment support across stakeholder onboarding, clinical adoption, training, and lifecycle readiness.",
    proves:
      "Ability to connect product positioning, implementation reality, and operational adoption in MedTech environments.",
    tags: ["Clinical Adoption", "Training", "Lifecycle Readiness"],
  },
  {
    title: "Surgical Monitors & Recorders",
    status: "Real MedTech Implementation Experience",
    domain: "Imaging workflow / surgical visualization",
    involved:
      "Displays and recorders for real-time imaging and HD/4K routing, with vendor coordination, installation readiness, and clinician onboarding.",
    proves:
      "Understanding of imaging workflow constraints, supportability, and handover needs around surgical visualization systems.",
    tags: ["Imaging Workflow", "Integration", "Supportability"],
  },
  {
    title: "National Product Launches",
    status: "Real MedTech Delivery Experience",
    domain: "MedTech go-to-market / adoption programs",
    involved:
      "Nationwide product launch work involving positioning, demonstrations, KOL engagement, training, and early adoption support.",
    proves:
      "Experience aligning manufacturer goals with hospital realities, stakeholder expectations, and adoption readiness.",
    tags: ["Adoption", "Stakeholder Alignment", "Training"],
  },
  {
    title: "OR Lighting Upgrade Program",
    status: "Real MedTech Delivery Experience",
    domain: "Multi-hospital OR infrastructure rollout",
    involved:
      "OR lighting rollout support across budgeting, tenders, scheduling, vendor orchestration, installation standards, and clinician onboarding.",
    proves:
      "Program-level understanding of procurement, rollout sequencing, clinical environment constraints, and implementation handover.",
    tags: ["Program Delivery", "Procurement", "Rollout"],
  },
];

const ARCHIVE_ITEMS = [
  {
    title: "FlowLogix",
    status: "Built System",
    note: "Operations visibility dashboard for status, handoffs, ETA risk, and accountability.",
    proves: "Dashboard architecture, operational state modeling, and decision-support UX.",
    href: "https://flowlogics.app/",
  },
  {
    title: "LiveSurgery",
    status: "Prototype",
    note: "Real-time OR collaboration and surgical education workspace.",
    proves: "Multi-source session design, role-based collaboration, and surgical workflow intelligence.",
    links: LIVESURGERY_ARCHIVE_LINKS,
  },
];

const ARCHIVE_LINK_ICONS = {
  caseStudy: FileText,
  pitch: Presentation,
};

function normalizeArchiveLinks(item) {
  if (item.title === "LiveSurgery") {
    return { ...item, href: undefined, links: item.links || LIVESURGERY_ARCHIVE_LINKS };
  }
  return item;
}

function WorkflowProofCard({ workflow }) {
  const { t } = useTranslation();
  if (!workflow) return null;
  const translatedTitle = t(`site.workflows.${workflow.slug}.title`);
  const translatedDomain = t(`site.workflows.${workflow.slug}.domain`);
  const translatedProblem = t(`site.workflows.${workflow.slug}.problem`);
  const translatedSummary = t(`site.workflows.${workflow.slug}.summary`);
  const translatedValue = t(`site.workflows.${workflow.slug}.expectedBusinessValue`);
  const title = translatedTitle === `site.workflows.${workflow.slug}.title` ? (TITLE_OVERRIDES[workflow.slug] || workflow.title) : translatedTitle;
  const domain = translatedDomain === `site.workflows.${workflow.slug}.domain` ? workflow.domain : translatedDomain;
  const problem = translatedProblem === `site.workflows.${workflow.slug}.problem` ? workflow.problem : translatedProblem;
  const summary = translatedSummary === `site.workflows.${workflow.slug}.summary` ? workflow.summary : translatedSummary;
  const value = Array.isArray(translatedValue) ? translatedValue : workflow.expectedBusinessValue;

  return (
    <article className="proof-page__card">
      <header className="proof-page__card-head">
        <div>
          <h3>{title}</h3>
          <p>{domain}</p>
        </div>
        <StatusBadge status={workflow.status} />
      </header>

      <dl className="proof-page__card-proof">
        <div>
          <dt>{t("site.proof.labels.problem")}</dt>
          <dd>{problem}</dd>
        </div>
        <div>
          <dt>{t("site.proof.labels.systemConcept")}</dt>
          <dd>{summary}</dd>
        </div>
        <div>
          <dt>{t("site.proof.labels.value")}</dt>
          <dd>{value.slice(0, 4).join(", ")}.</dd>
        </div>
      </dl>

      <a href={`/ai-workflow/${workflow.slug}`} className="project-card__link project-card__link--ghost">
        {t("site.cta.viewWorkflow")} <ArrowRight size={14} aria-hidden="true" />
      </a>
    </article>
  );
}

function ORIntegrationProofCard() {
  const { t } = useTranslation();
  const proof = t("site.proof.featured.card");
  const item = typeof proof === "object" ? proof : OR_INTEGRATION_PROOF;
  return (
    <article className="proof-page__card proof-page__card--or-integration">
      <div className="proof-page__or-content">
        <header className="proof-page__card-head">
          <div>
            <h3>{item.title}</h3>
            <p>{item.domain}</p>
          </div>
          <StatusBadge status={OR_INTEGRATION_PROOF.status} />
        </header>

        <p className="proof-page__lead-summary">{item.summary}</p>

        <dl className="proof-page__card-proof">
          <div>
            <dt>{t("site.proof.labels.problem")}</dt>
            <dd>{item.problem}</dd>
          </div>
          <div>
            <dt>{t("site.proof.labels.systemExperience")}</dt>
            <dd>{item.system}</dd>
          </div>
          <div>
            <dt>{t("site.proof.labels.proves")}</dt>
            <dd>{item.proves}</dd>
          </div>
        </dl>

        <a href={OR_INTEGRATION_PROOF.href} className="project-card__link project-card__link--ghost">
          {t("site.proof.featured.cta")} <ArrowRight size={14} aria-hidden="true" />
        </a>
      </div>

      <figure className="proof-page__or-media">
        <img
          src="/images/or-surgimedia.jpg"
          alt="Integrated operating room with surgical video and infrastructure systems"
          loading="lazy"
        />
      </figure>
    </article>
  );
}

function MedTechImplementationCard({ item }) {
  const { t } = useTranslation();
  return (
    <article className="proof-page__card proof-page__card--implementation">
      <header className="proof-page__card-head">
        <div>
          <h3>{item.title}</h3>
          <p>{item.domain}</p>
        </div>
        <StatusBadge status={item.status} />
      </header>

      <dl className="proof-page__card-proof">
        <div>
          <dt>{t("site.proof.labels.involved")}</dt>
          <dd>{item.involved}</dd>
        </div>
        <div>
          <dt>{t("site.proof.labels.proves")}</dt>
          <dd>{item.proves}</dd>
        </div>
      </dl>

      <div className="proof-page__tags" aria-label={`${item.title} tags`}>
        {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
    </article>
  );
}

function ArchiveCard({ item }) {
  const { t } = useTranslation();
  const links = item.links || (item.href ? [{ label: t("site.cta.view"), href: item.href }] : []);

  return (
    <article className="proof-page__archive-card">
      <div className="proof-page__archive-card-head">
        <h3>{item.title}</h3>
        <StatusBadge status={item.status || "Archived Experiment"} />
      </div>
      <p>{item.note}</p>
      <div>
        <span>{t("site.proof.labels.proves")}</span>
        <strong>{item.proves}</strong>
      </div>
      {links.length ? (
        <nav className="proof-page__archive-actions" aria-label={`${item.title} links`}>
          {links.map((link) => {
            const isExternal = link.href.startsWith("http");
            const Icon = ARCHIVE_LINK_ICONS[link.icon];

            return (
              <a
                href={link.href}
                className="project-card__link project-card__link--ghost"
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                key={`${link.label}-${link.href}`}
              >
                {Icon ? <Icon size={13} aria-hidden="true" /> : null}
                {link.label}
                {isExternal ? <ExternalLink size={13} aria-hidden="true" /> : null}
              </a>
            );
          })}
        </nav>
      ) : null}
    </article>
  );
}

export default function ProofOfWorkPage() {
  const { t } = useTranslation();
  const [showMoreMedTech, setShowMoreMedTech] = useState(false);
  const primaryMedTechValue = t("site.proof.medtech.primary");
  const secondaryMedTechValue = t("site.proof.medtech.secondary");
  const archiveValue = t("site.proof.archive.items");
  const primaryMedTech = Array.isArray(primaryMedTechValue) ? primaryMedTechValue : PRIMARY_MEDTECH_IMPLEMENTATION;
  const secondaryMedTech = Array.isArray(secondaryMedTechValue) ? secondaryMedTechValue : SECONDARY_MEDTECH_IMPLEMENTATION;
  const archiveItems = (Array.isArray(archiveValue) ? archiveValue : ARCHIVE_ITEMS).map(normalizeArchiveLinks);
  const primaryWorkflows = AI_WORKFLOW_SLUGS.map(getWorkflowBySlug).filter(Boolean);
  const primarySlugs = new Set(primaryWorkflows.map((workflow) => workflow.slug));
  const secondaryWorkflows = aiWorkflowExamples.filter(
    (workflow) => workflow.visibility === "secondary" && !primarySlugs.has(workflow.slug)
  );
  const heroTitle = t("site.proof.hero.title");

  return (
    <div className="proof-page">
      <PageHero
        eyebrow={t("site.proof.hero.eyebrow")}
        title={<TypewriterTitle text={heroTitle} />}
        subtitle={t("site.proof.hero.subtitle")}
        primaryCta={{ label: t("site.proof.hero.primary"), href: "#featured-domain-proof", icon: <ArrowRight size={15} className="icon ml-1" aria-hidden="true" /> }}
        secondaryCta={{ label: t("site.cta.exploreAiWorkflows"), href: "/ai-workflow" }}
        scrollTargetId="projects"
      >
        <p className="proof-page__trust-note">
          {t("site.proof.hero.trust")}
        </p>
      </PageHero>

      <section id="projects" className="section container proof-page__section">
        <div id="featured-domain-proof" className="proof-page__section-head reveal">
          <p className="proof-page__kicker">{t("site.proof.featured.eyebrow")}</p>
          <h2><span className="about__chev">&gt;</span> {t("site.proof.featured.title")}</h2>
          <p>{t("site.proof.featured.text")}</p>
        </div>
        <ORIntegrationProofCard />
      </section>

      <section id="real-medtech-delivery" className="section container proof-page__section">
        <div className="proof-page__section-head reveal">
          <p className="proof-page__kicker">{t("site.proof.medtech.eyebrow")}</p>
          <h2><span className="about__chev">&gt;</span> {t("site.proof.medtech.title")}</h2>
          <p>{t("site.proof.medtech.text")}</p>
        </div>
        <div className="proof-page__grid proof-page__grid--implementation">
          {primaryMedTech.map((item) => (
            <MedTechImplementationCard item={item} key={item.title} />
          ))}
        </div>

        <details
          className="proof-page__more reveal"
          open={showMoreMedTech}
          onToggle={(event) => setShowMoreMedTech(event.currentTarget.open)}
        >
          <summary>
            <span>{t("site.proof.medtech.more")}</span>
            <ChevronDown size={18} aria-hidden="true" />
          </summary>
          <div className="proof-page__grid proof-page__grid--implementation proof-page__grid--more">
            {secondaryMedTech.map((item) => (
              <MedTechImplementationCard item={item} key={item.title} />
            ))}
          </div>
        </details>
      </section>

      <section id="ai-workflow-systems" className="section container proof-page__section">
        <div className="proof-page__section-head reveal">
          <p className="proof-page__kicker">{t("site.proof.ai.eyebrow")}</p>
          <h2><span className="about__chev">&gt;</span> {t("site.proof.ai.title")}</h2>
          <p>{t("site.proof.ai.text")}</p>
        </div>

        <div className="proof-page__grid proof-page__grid--primary">
          {primaryWorkflows.map((workflow) => <WorkflowProofCard workflow={workflow} key={workflow.slug} />)}
        </div>

        {secondaryWorkflows.length > 0 ? (
          <details className="proof-page__more reveal">
            <summary>
              <span>{t("site.proof.ai.more")} ({secondaryWorkflows.length})</span>
              <ChevronDown size={18} aria-hidden="true" />
            </summary>
            <div className="proof-page__grid proof-page__grid--primary proof-page__grid--more">
              {secondaryWorkflows.map((workflow) => (
                <WorkflowProofCard workflow={workflow} key={workflow.slug} />
              ))}
            </div>
          </details>
        ) : null}
      </section>

      <section className="section container proof-page__section">
        <details className="proof-page__archive reveal">
          <summary>
            <span>
              <Boxes size={18} aria-hidden="true" />
              {t("site.proof.archive.title")}
            </span>
            <ChevronDown size={18} aria-hidden="true" />
          </summary>
          <p className="proof-page__archive-intro">
            {t("site.proof.archive.text")}
          </p>
          <div className="proof-page__archive-grid">
            {archiveItems.map((item) => <ArchiveCard item={item} key={item.title} />)}
          </div>
        </details>
      </section>
    </div>
  );
}
