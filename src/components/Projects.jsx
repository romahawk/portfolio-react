import React, { Suspense, useEffect, useMemo, useState } from "react";
import { techProjects } from "../data/projects.js";
import {
  ArrowRight, ClipboardList, FileText, Boxes,
  Lightbulb, MonitorCog, Wrench, SearchCheck, Camera,
  Rocket, TrendingUp, Waves, Circle,
} from "lucide-react";
import CaseStudyModal from "./CaseStudyModal.jsx";
import { useTranslation } from "../context/LangContext.jsx";
import StatusBadge from "./StatusBadge.jsx";

const CARD_ICONS = {
  Boxes,
  ClipboardList,
  FileText,
  Lightbulb,
  MonitorCog,
  Wrench,
  SearchCheck,
  Camera,
  Rocket,
  TrendingUp,
  Waves,
  Circle,
};

const ClinicalEvidenceCaseStudy = React.lazy(() => import("./case-studies/ClinicalEvidenceCaseStudy.jsx"));
const LivesurgeryCaseStudy = React.lazy(() => import("./case-studies/LivesurgeryCaseStudy.jsx"));
const FlowLogixCaseStudy = React.lazy(() => import("./case-studies/FlowLogixCaseStudy.jsx"));
const VendorFreeSupplyCaseStudy = React.lazy(() => import("./case-studies/VendorFreeSupplyCaseStudy.jsx"));
const AlphorythmCaseStudy = React.lazy(() => import("./case-studies/AlphorythmCaseStudy.jsx"));
const JobSprintCaseStudy = React.lazy(() => import("./case-studies/JobSprintCaseStudy.jsx"));

const CASE_STUDY_COMPONENTS = {
  "clinical-evidence-workflow": ClinicalEvidenceCaseStudy,
  livesurgery: LivesurgeryCaseStudy,
  flowlogics: FlowLogixCaseStudy,
  "vendor-free-supply-tracker": VendorFreeSupplyCaseStudy,
  alphorythm: AlphorythmCaseStudy,
  jobsprint: JobSprintCaseStudy,
};

const CASE_STUDY_SECTION_IDS = [
  "founder-lens",
  "problem-context",
  "constraints",
  "product-decisions",
  "architecture",
  "roadmap",
  "outcomes",
  "gtm",
];
const LEGACY_SUPPLY_TRACKER_SLUG = ["pharma", "logis-supply-tracker"].join("");

const FEATURED_PROOF = [
  {
    id: "or-integration-surgical-workflow-systems",
    title: "OR Integration & Surgical Workflow Systems",
    summary:
      "Real-world experience with operating room integration and surgical infrastructure projects, including surgical lighting, OR video/audio workflows, medical equipment coordination, implementation handover, and hospital stakeholder alignment.",
    proof: {
      problem: "Operating rooms are complex environments where equipment, video signals, patient data, lighting, documentation, and clinical workflows must work together reliably. Poor integration creates friction, delays, weak visibility, and handover risk.",
      system: "Experience across implementation planning, equipment coordination, installation support, clinical handover, stakeholder communication, and workflow understanding around integrated OR environments.",
      value: "MedTech domain expertise, OR workflow understanding, implementation reality, and the ability to translate clinical-operational complexity into structured product and workflow systems.",
      evidence: "Real MedTech implementation exposure across OR environments, medical equipment integration, clinical handover, and hospital stakeholder coordination.",
    },
    stack: ["OR workflow", "Surgical infrastructure", "Medical equipment coordination", "Clinical handover"],
    tags: ["Workflow Systems", "MedTech"],
    status: "Real MedTech Implementation Experience",
    icon: "MonitorCog",
    caseStudy: "or-integration",
    caseStudyUrl: "/proof-of-work/or-integration",
  },
  {
    ...techProjects.find((project) => project.id === "medtech-implementation-handoff-assistant"),
    id: "medtech-handoff-assistant",
    title: "MedTech Implementation Handoff Assistant",
    summary:
      "Handoff-ready reference workflow for turning implementation context into structured requirements, risks, ownership, and next actions.",
    proof: {
      problem: "Implementation knowledge can sit across site notes, vendor details, user constraints, and informal stakeholder conversations.",
      system: "AI-assisted handoff assistant that structures workflow context, open risks, acceptance criteria, responsible owners, and rollout notes.",
      value: "Improves continuity between operator discovery, product planning, engineering scope, and post-implementation support.",
      evidence: "MedTech implementation lens, workflow mapping, handover templates, role/state logic, and product requirement structure.",
    },
    stack: ["Workflow discovery", "Implementation handover", "Requirements", "Risk mapping"],
    tags: ["Workflow Systems", "MedTech", "AI-Assisted"],
    status: "Reference System",
    icon: "ClipboardList",
  },
].filter(Boolean);

const getCardTone = (project) => {
  if (project.tags?.includes("Real-Time Systems")) return "signal";
  if (project.tags?.includes("Workflow Systems")) return "workflow";
  if (project.tags?.includes("Decision Support")) return "insight";
  return "";
};

function ProjectCard({ p, variant, onOpenCase, t }) {
  const inDev = p.inDevelopment;
  const CardIcon = p.icon ? (CARD_ICONS[p.icon] || Circle) : null;
  const tone = getCardTone(p);

  const titleKey = `projects.items.${p.id}.title`;
  const summaryKey = `projects.items.${p.id}.summary`;
  const homeTitleKey = `site.home.proofPreview.items.${p.id}.title`;
  const homeSummaryKey = `site.home.proofPreview.items.${p.id}.summary`;
  const translatedTitle = t(homeTitleKey) !== homeTitleKey ? t(homeTitleKey) : (t(titleKey) === titleKey ? p.title : t(titleKey));
  const translatedSummary = t(homeSummaryKey) !== homeSummaryKey ? t(homeSummaryKey) : (t(summaryKey) === summaryKey ? p.summary : t(summaryKey));
  const translatedProof = t(`site.home.proofPreview.items.${p.id}.proof`);
  const proof = typeof translatedProof === "object" ? translatedProof : p.proof;
  const translatedStack = t(`site.home.proofPreview.items.${p.id}.stack`);
  const stack = Array.isArray(translatedStack) ? translatedStack : p.stack;
  const proofRows = [
    ["problem", t("projects.labels.problem")],
    ["system", t("projects.labels.system")],
    ["value", t("projects.labels.value")],
    ["evidence", t("projects.labels.evidence")],
  ];

  return (
    <article className={`project-card${variant ? ` project-card--${variant}` : ""}${tone ? ` project-card--${tone}` : ""}`}>
      <header className="project-card__head">
        <div className="project-card__title-wrap">
          <h4 className="project-card__title">{translatedTitle}</h4>
          <StatusBadge status={p.status || (p.inDevelopment ? "Prototype" : "Proof-of-Work Artifact")} />
          {tone ? <span className="project-card__tone">{tone.replace("-", " ")}</span> : null}
        </div>
        {CardIcon ? (
          <span className="project-card__icon" aria-hidden>
            <CardIcon size={18} strokeWidth={2} />
          </span>
        ) : null}
      </header>

      <p className="project-card__summary">{translatedSummary}</p>

      {proof ? (
        <dl className="project-card__proof">
          {proofRows.map(([key, label]) => (
            proof[key] ? (
              <div className="project-card__proof-row" key={key}>
                <dt>{label}</dt>
                <dd>{proof[key]}</dd>
              </div>
            ) : null
          ))}
        </dl>
      ) : null}

      {stack?.length ? (
        <ul className="project-card__stack">
          {stack.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      ) : null}

      {p.tags?.length ? (
        <div className="project-card__tags">
          {p.tags.map((tag) => (
            <span key={tag} className="tag">
              {t(`projects.filters.${tag}`) || tag}
            </span>
          ))}
        </div>
      ) : null}

      <div className="project-card__actions">
        <div className="project-card__actions-left">
          {inDev ? (
            <div className="dev-status">
              <span className="dev-status__dot" aria-hidden></span>
              <span>{t("projects.inProgress")}</span>
            </div>
          ) : p.link ? (
            <a className="project-card__link" href={p.link} target="_blank" rel="noreferrer">
              {t("projects.viewLink")}
            </a>
          ) : null}
        </div>

        <div className="project-card__actions-right">
          {p.caseStudy ? (
            <a
              className="project-card__link project-card__link--ghost"
              href={p.caseStudyUrl || `#projects/${p.caseStudy}`}
              onClick={(e) => {
                if (!p.caseStudyUrl) {
                  e.preventDefault();
                  onOpenCase && onOpenCase(p.caseStudy);
                }
              }}
            >
              <FileText size={14} className="icon mr-1" /> {t("projects.viewCaseStudy")}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const { t } = useTranslation();
  const [caseId, setCaseId] = useState(null);
  const visibleTechProjects = useMemo(() => FEATURED_PROOF, []);

  const CASE_HASH_PREFIX = "#projects/";
  const activeCaseStudyIds = useMemo(
    () => new Set(visibleTechProjects.map((project) => project.caseStudy).filter(Boolean)),
    [visibleTechProjects]
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const syncFromHash = () => {
      const hash = window.location.hash || "";
      if (!hash.startsWith(CASE_HASH_PREFIX)) {
        setCaseId(null);
        return;
      }

      const slug = hash.slice(CASE_HASH_PREFIX.length);
      if (slug === "flowlogix") {
        window.location.hash = "projects/flowlogics";
        return;
      }
      if (slug === LEGACY_SUPPLY_TRACKER_SLUG) {
        window.location.hash = "projects/vendor-free-supply-tracker";
        return;
      }
      setCaseId(activeCaseStudyIds.has(slug) ? slug : null);
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [activeCaseStudyIds]);

  const openCase = (id) => {
    if (typeof window !== "undefined" && activeCaseStudyIds.has(id)) {
      window.location.hash = `projects/${id}`;
    }
  };

  const closeCase = () => {
    if (typeof window !== "undefined") {
      const current = window.location.hash || "";
      if (current.startsWith(CASE_HASH_PREFIX)) window.location.hash = "#projects";
      else window.location.hash = "";
    }
  };

  const ActiveCaseComponent = caseId ? CASE_STUDY_COMPONENTS[caseId] : null;

  // Build translated sections and title for the active case study
  const activeCaseStudySections = caseId
    ? CASE_STUDY_SECTION_IDS.map((id) => ({
        id,
        label: t(`projects.caseStudySections.${id}`),
      }))
    : [];
  const activeCaseStudyTitle = caseId
    ? t(`projects.caseStudyTitles.${caseId}`) || `${caseId} - Case Study`
    : "Case Study";

  return (
    <section id="projects" className="section container">
      <h2 className="section__title reveal">&gt; {t("projects.title")}</h2>

      <h3 className="projects__section-title">
        <Boxes size={18} className="icon" /> {t("site.home.proofPreview.title")}
      </h3>
      <p className="projects__intro">
        {t("site.home.proofPreview.text")}
      </p>

      <div className="projects__grid">
        {visibleTechProjects.map((p) => (
          <ProjectCard
            key={p.id}
            p={p}
            onOpenCase={openCase}
            t={t}
          />
        ))}
      </div>

      <div className="projects__actions reveal">
        <a href="/proof-of-work" className="btn btn--primary">
          {t("site.home.proofPreview.cta")} <ArrowRight size={15} className="icon ml-1" />
        </a>
      </div>

      <CaseStudyModal
        open={!!caseId}
        onClose={closeCase}
        slug={caseId}
        title={activeCaseStudyTitle}
        sections={activeCaseStudySections}
      >
        <Suspense fallback={
          <div className="cs-loading" aria-label={t("projects.loadingCaseStudy")}>
            <span className="cs-loading__spinner" aria-hidden="true" />
          </div>
        }>
          {ActiveCaseComponent ? <ActiveCaseComponent /> : <div>{t("projects.comingSoon")}</div>}
        </Suspense>
      </CaseStudyModal>
    </section>
  );
}
