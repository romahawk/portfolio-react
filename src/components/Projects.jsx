import React, { Suspense, useEffect, useMemo, useState } from "react";
import { techProjects, medtechProjects } from "../data/projects.js";
import {
  Cpu, Shield, FileText, Boxes, Stethoscope, BriefcaseBusiness,
  Lightbulb, MonitorCog, Wrench, SearchCheck, Camera,
  Rocket, TrendingUp, Waves, Circle,
} from "lucide-react";
import CaseStudyModal from "./CaseStudyModal.jsx";

const CARD_ICONS = { Lightbulb, MonitorCog, Wrench, SearchCheck, Camera, Rocket, TrendingUp, Waves, Circle };

const LivesurgeryCaseStudy = React.lazy(() => import("./case-studies/LivesurgeryCaseStudy.jsx"));
const FlowLogixCaseStudy = React.lazy(() => import("./case-studies/FlowLogixCaseStudy.jsx"));
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

const CASE_STUDY_CONFIG = {
  livesurgery: {
    title: "LiveSurgery - Case Study",
    Component: LivesurgeryCaseStudy,
    sections: [
      { id: "founder-lens", label: "Founder Lens" },
      { id: "problem-context", label: "Problem & Context" },
      { id: "constraints", label: "Constraints" },
      { id: "product-decisions", label: "Key Decisions" },
      { id: "architecture", label: "Architecture" },
      { id: "roadmap", label: "Roadmap" },
      { id: "outcomes", label: "Outcomes" },
      { id: "gtm", label: "Business Model" },
    ],
  },
  flowlogics: {
    title: "Flowlogics - Case Study",
    Component: FlowLogixCaseStudy,
    sections: [
      { id: "founder-lens", label: "Founder Lens" },
      { id: "problem-context", label: "Problem & Context" },
      { id: "constraints", label: "Constraints" },
      { id: "product-decisions", label: "Key Decisions" },
      { id: "architecture", label: "Architecture" },
      { id: "roadmap", label: "Roadmap" },
      { id: "outcomes", label: "Outcomes" },
      { id: "gtm", label: "Business Model" },
    ],
  },
  jobsprint: {
    title: "JobSprint - Case Study",
    Component: JobSprintCaseStudy,
    sections: [
      { id: "founder-lens", label: "Founder Lens" },
      { id: "problem-context", label: "Problem & Context" },
      { id: "constraints", label: "Constraints" },
      { id: "product-decisions", label: "Key Decisions" },
      { id: "architecture", label: "Architecture" },
      { id: "roadmap", label: "Roadmap" },
      { id: "outcomes", label: "Outcomes" },
      { id: "gtm", label: "Business Model" },
    ],
  },
};

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

function ProjectCard({ p, variant, onOpenCase }) {
  const inDev = p.inDevelopment;
  const CardIcon = p.icon ? (CARD_ICONS[p.icon] || Circle) : null;
  const tone = getCardTone(p);

  return (
    <article className={`project-card${variant ? ` project-card--${variant}` : ""}${tone ? ` project-card--${tone}` : ""}`}>
      <header className="project-card__head">
        <div className="project-card__title-wrap">
          <h4 className="project-card__title">{p.title}</h4>
          {tone ? <span className="project-card__tone">{tone.replace("-", " ")}</span> : null}
        </div>
        {CardIcon ? (
          <span className="project-card__icon" aria-hidden>
            <CardIcon size={18} strokeWidth={2} />
          </span>
        ) : null}
      </header>

      <p className="project-card__summary">{p.summary}</p>

      {p.stack?.length ? (
        <ul className="project-card__stack">
          {p.stack.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      ) : null}

      {p.tags?.length ? (
        <div className="project-card__tags">
          {p.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      ) : null}

      <div className="project-card__actions">
        <div className="project-card__actions-left">
          {inDev ? (
            <div className="dev-status">
              <span className="dev-status__dot" aria-hidden></span>
              <span>In progress</span>
            </div>
          ) : p.link ? (
            <a className="project-card__link" href={p.link} target="_blank" rel="noreferrer">
              View
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
              <FileText size={14} className="icon mr-1" /> Case Study
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [cat, setCat] = useState(CATEGORY.TECH);
  const [caseId, setCaseId] = useState(null);
  const [tag, setTag] = useState("All");

  const CASE_HASH_PREFIX = "#projects/";
  const activeCaseStudyIds = useMemo(
    () => new Set(techProjects.map((project) => project.caseStudy).filter(Boolean)),
    []
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
  const tags = useMemo(() => (cat === CATEGORY.TECH ? normalizeTags(data) : []), [cat, data]);

  useEffect(() => {
    setTag("All");
  }, [cat]);

  const visibleTech = useMemo(() => {
    if (tag === "All") return techProjects;
    return techProjects.filter((project) => (project.tags || []).includes(tag));
  }, [tag]);

  const medIntegration = useMemo(
    () => medtechProjects.filter((p) => p.segment !== "management"),
    []
  );
  const medManagement = useMemo(
    () => medtechProjects.filter((p) => p.segment === "management"),
    []
  );

  const activeCaseStudy = caseId ? CASE_STUDY_CONFIG[caseId] : null;
  const ActiveCaseComponent = activeCaseStudy?.Component || null;

  return (
    <section id="projects" className="section container">
      <h2 className="section__title reveal">&gt; Product Systems</h2>

      <div className="projects__toolbar reveal reveal--delay-1">
        <div className="projects__tabs" role="tablist" aria-label="Portfolio categories">
          <button
            role="tab"
            aria-selected={cat === CATEGORY.TECH}
            className={`tab ${cat === CATEGORY.TECH ? "tab--active" : ""}`}
            onClick={() => setCat(CATEGORY.TECH)}
          >
            <Cpu size={16} className="icon mr-1" /> Product Systems
          </button>

          <button
            role="tab"
            aria-selected={cat === CATEGORY.MED}
            className={`tab ${cat === CATEGORY.MED ? "tab--active" : ""}`}
            onClick={() => setCat(CATEGORY.MED)}
          >
            <Shield size={16} className="icon mr-1" /> Regulated Systems Delivery
          </button>
        </div>

        {cat === CATEGORY.TECH && tags.length > 1 && (
          <div className="projects__filters" role="group" aria-label="Filter product system tags">
            {tags.map((t) => (
              <button
                key={t}
                className={`chip ${tag === t ? "chip--active" : ""}`}
                onClick={() => setTag(t)}
                aria-pressed={tag === t}
              >
                {t}
              </button>
            ))}
          </div>
        )}
      </div>

      {cat === CATEGORY.TECH ? (
        <>
          <h3 className="projects__section-title">
            <Boxes size={18} className="icon" /> Product Systems
          </h3>
          <p className="projects__intro">
            Systems I design and ship to convert operational complexity into scalable products -
            from internal tools and data integrity layers to real-time interaction workflows.
          </p>
          {visibleTech.length === 0 ? (
            <p className="projects__empty">No projects match that filter. <button className="link-like" onClick={() => setTag("All")}>Clear filter</button></p>
          ) : (
            <div className="projects__grid">
              {visibleTech.map((p) => (
                <ProjectCard key={p.id} p={p} onOpenCase={openCase} />
              ))}
            </div>
          )}
        </>
      ) : (
        <>
          <h3 className="projects__section-title">
            <Stethoscope size={18} className="icon" /> MedTech - Integration & Delivery
          </h3>
          <p className="projects__intro">
            Regulated delivery across clinical environments: multi-vendor integrations, workflow governance,
            adoption enablement, and lifecycle reliability under real constraints.
          </p>
          <div className="projects__grid">
            {medIntegration.map((p) => (
              <ProjectCard key={p.id} p={p} variant="med" onOpenCase={openCase} />
            ))}
          </div>

          {medManagement.length ? (
            <div className="projects__subsection">
              <h3 className="projects__section-title">
                <BriefcaseBusiness size={18} className="icon" /> MedTech - Programs & Commercial Execution
              </h3>
              <p className="projects__intro">
                Multi-site rollout governance, procurement/tenders, vendor orchestration, and adoption enablement.
              </p>
              <div className="projects__grid">
                {medManagement.map((p) => (
                  <ProjectCard key={p.id} p={p} variant="mgmt" onOpenCase={openCase} />
                ))}
              </div>
            </div>
          ) : null}
        </>
      )}

      <CaseStudyModal
        open={!!activeCaseStudy}
        onClose={closeCase}
        slug={caseId}
        title={activeCaseStudy?.title || "Case Study"}
        sections={activeCaseStudy?.sections || []}
      >
        <Suspense fallback={<div className="cs-loading" aria-label="Loading case study"><span className="cs-loading__spinner" aria-hidden="true" /></div>}>
          {ActiveCaseComponent ? <ActiveCaseComponent /> : <div>Coming soon...</div>}
        </Suspense>
      </CaseStudyModal>
    </section>
  );
}
