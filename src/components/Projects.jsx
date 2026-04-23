import React, { Suspense, useEffect, useMemo, useState } from "react";
import { techProjects, medtechProjects } from "../data/projects.js";
import {
  Cpu, Shield, FileText, Boxes, Stethoscope, BriefcaseBusiness,
  Lightbulb, MonitorCog, Wrench, SearchCheck, Camera,
  Rocket, TrendingUp, Waves, Circle,
} from "lucide-react";
import CaseStudyModal from "./CaseStudyModal.jsx";
import { useTranslation } from "../context/LangContext.jsx";

const CARD_ICONS = { Lightbulb, MonitorCog, Wrench, SearchCheck, Camera, Rocket, TrendingUp, Waves, Circle };

const LivesurgeryCaseStudy = React.lazy(() => import("./case-studies/LivesurgeryCaseStudy.jsx"));
const FlowLogixCaseStudy = React.lazy(() => import("./case-studies/FlowLogixCaseStudy.jsx"));
const AlphorythmCaseStudy = React.lazy(() => import("./case-studies/AlphorythmCaseStudy.jsx"));
const JobSprintCaseStudy = React.lazy(() => import("./case-studies/JobSprintCaseStudy.jsx"));

const CATEGORY = { TECH: "tech", MED: "medtech" };
const TECH_TAG_ORDER = [
  "All",
  "Workflow Systems",
  "Decision Support",
  "Real-Time Systems",
  "Internal Tools",
  "Productivity",
  "B2B",
  "MedTech",
];

const CASE_STUDY_COMPONENTS = {
  livesurgery: LivesurgeryCaseStudy,
  flowlogics: FlowLogixCaseStudy,
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

const normalizeTags = (list) => {
  const present = new Set();
  list.forEach((project) => (project.tags || []).forEach((tag) => present.add(tag)));
  return TECH_TAG_ORDER.filter((tag) => tag === "All" || present.has(tag));
};

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

  const translatedTitle = t(`projects.items.${p.id}.title`) || p.title;
  const translatedSummary = t(`projects.items.${p.id}.summary`) || p.summary;

  return (
    <article className={`project-card${variant ? ` project-card--${variant}` : ""}${tone ? ` project-card--${tone}` : ""}`}>
      <header className="project-card__head">
        <div className="project-card__title-wrap">
          <h4 className="project-card__title">{translatedTitle}</h4>
          {tone ? <span className="project-card__tone">{tone.replace("-", " ")}</span> : null}
        </div>
        {CardIcon ? (
          <span className="project-card__icon" aria-hidden>
            <CardIcon size={18} strokeWidth={2} />
          </span>
        ) : null}
      </header>

      <p className="project-card__summary">{translatedSummary}</p>

      {p.stack?.length ? (
        <ul className="project-card__stack">
          {p.stack.map((s, i) => (
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
              href={`#projects/${p.caseStudy}`}
              onClick={(e) => {
                e.preventDefault();
                onOpenCase && onOpenCase(p.caseStudy);
              }}
            >
              <FileText size={14} className="icon mr-1" /> {t("projects.caseStudy")}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const { t } = useTranslation();
  const [cat, setCat] = useState(CATEGORY.TECH);
  const [caseId, setCaseId] = useState(null);
  const [tag, setTag] = useState("All");
  const visibleTechProjects = useMemo(
    () => techProjects.filter((project) => !project.hiddenFromFrontend),
    []
  );

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

  const data = cat === CATEGORY.TECH ? techProjects : medtechProjects;
  const tags = useMemo(
    () => (cat === CATEGORY.TECH ? normalizeTags(visibleTechProjects) : []),
    [cat, visibleTechProjects]
  );

  useEffect(() => {
    setTag("All");
  }, [cat]);

  const visibleTech = useMemo(() => {
    if (tag === "All") return visibleTechProjects;
    return visibleTechProjects.filter((project) => (project.tags || []).includes(tag));
  }, [tag, visibleTechProjects]);

  const medIntegration = useMemo(
    () => medtechProjects.filter((p) => p.segment !== "management"),
    []
  );
  const medManagement = useMemo(
    () => medtechProjects.filter((p) => p.segment === "management"),
    []
  );

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

      <div className="projects__toolbar reveal reveal--delay-1">
        <div className="projects__tabs" role="tablist" aria-label={t("projects.ariaLabel")}>
          <button
            role="tab"
            aria-selected={cat === CATEGORY.TECH}
            className={`tab ${cat === CATEGORY.TECH ? "tab--active" : ""}`}
            onClick={() => setCat(CATEGORY.TECH)}
          >
            <Cpu size={16} className="icon mr-1" /> {t("projects.tabs.tech")}
          </button>

          <button
            role="tab"
            aria-selected={cat === CATEGORY.MED}
            className={`tab ${cat === CATEGORY.MED ? "tab--active" : ""}`}
            onClick={() => setCat(CATEGORY.MED)}
          >
            <Shield size={16} className="icon mr-1" /> {t("projects.tabs.medtech")}
          </button>
        </div>

        {cat === CATEGORY.TECH && tags.length > 1 && (
          <div className="projects__filters" role="group" aria-label={t("projects.filtersAriaLabel")}>
            {tags.map((tagItem) => (
              <button
                key={tagItem}
                className={`chip ${tag === tagItem ? "chip--active" : ""}`}
                onClick={() => setTag(tagItem)}
                aria-pressed={tag === tagItem}
              >
                {t(`projects.filters.${tagItem}`) || tagItem}
              </button>
            ))}
          </div>
        )}
      </div>

      {cat === CATEGORY.TECH ? (
        <>
          <h3 className="projects__section-title">
            <Boxes size={18} className="icon" /> {t("projects.techSectionTitle")}
          </h3>
          <p className="projects__intro">{t("projects.techIntro")}</p>
          {visibleTech.length === 0 ? (
            <p className="projects__empty">
              {t("projects.empty")}{" "}
              <button className="link-like" onClick={() => setTag("All")}>
                {t("projects.clearFilter")}
              </button>
            </p>
          ) : (
            <div className="projects__grid">
              {visibleTech.map((p) => (
                <ProjectCard key={p.id} p={p} onOpenCase={openCase} t={t} />
              ))}
            </div>
          )}
        </>
      ) : (
        <>
          <h3 className="projects__section-title">
            <Stethoscope size={18} className="icon" /> {t("projects.medSectionTitle")}
          </h3>
          <p className="projects__intro">{t("projects.medIntro")}</p>
          <div className="projects__grid">
            {medIntegration.map((p) => (
              <ProjectCard key={p.id} p={p} variant="med" onOpenCase={openCase} t={t} />
            ))}
          </div>

          {medManagement.length ? (
            <div className="projects__subsection">
              <h3 className="projects__section-title">
                <BriefcaseBusiness size={18} className="icon" /> {t("projects.medMgmtSectionTitle")}
              </h3>
              <p className="projects__intro">{t("projects.medMgmtIntro")}</p>
              <div className="projects__grid">
                {medManagement.map((p) => (
                  <ProjectCard key={p.id} p={p} variant="mgmt" onOpenCase={openCase} t={t} />
                ))}
              </div>
            </div>
          ) : null}
        </>
      )}

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
