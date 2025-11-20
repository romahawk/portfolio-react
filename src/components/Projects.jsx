import React, { useEffect, useMemo, useState } from "react";
import { techProjects, medtechProjects } from "../data/projects.js";
import { Cpu, HeartPulse, ExternalLink, FileText } from "lucide-react";
import CaseStudyModal from "./CaseStudyModal.jsx";
import LivesurgeryCaseStudy from "./case-studies/LivesurgeryCaseStudy.jsx";
import SmartShooterCaseStudy from "./case-studies/SmartShooterCaseStudy.jsx";
import FlowLogixCaseStudy from "./case-studies/FlowLogixCaseStudy.jsx";
import AlphorythmCaseStudy from "./case-studies/AlphorythmCaseStudy.jsx";
import PortfolioCaseStudy from "./case-studies/PortfolioCaseStudy.jsx";
import MedintegroCaseStudy from "./case-studies/MedintegroCaseStudy.jsx";

const CATEGORY = { TECH: "tech", MED: "medtech" };

const collectTags = (list) => {
  const set = new Set();
  list.forEach((p) => (p.tags || []).forEach((t) => set.add(t)));
  return ["All", ...Array.from(set)];
};

function ProjectCard({ p, variant, onOpenCase }) {
  const inDev = p.inDevelopment;

  return (
    <article
      className={`project-card ${variant ? `project-card--${variant}` : ""}`}
    >
      <header className="project-card__head">
        <h4 className="project-card__title">{p.title}</h4>
        {p.icon ? (
          <span className="project-card__icon" aria-hidden>
            {p.icon}
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
              <span>In development</span>
            </div>
          ) : p.link ? (
            <div className="project-card__link-wrap">
              <a
                className="project-card__link"
                href={p.link}
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </a>
              {p.warmupNote ? (
                <p className="project-card__hint">{p.warmupNote}</p>
              ) : null}
            </div>
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
              Case Study
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

  const CASE_HASH_PREFIX = "#projects/";

  useEffect(() => {
    if (typeof window === "undefined") return;

    const syncFromHash = () => {
      const hash = window.location.hash || "";

      if (hash.startsWith(CASE_HASH_PREFIX)) {
        const slug = hash.slice(CASE_HASH_PREFIX.length);
        setCaseId(slug || null);
      } else if (hash === "#projects") {
        setCaseId(null);
      } else {
        setCaseId(null);
      }
    };

    // Initial sync on load
    syncFromHash();
    // Sync on hash changes (back/forward, manual edits, etc.)
    window.addEventListener("hashchange", syncFromHash);

    return () => {
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, []);

  const openCase = (id) => {
    if (typeof window !== "undefined") {
      window.location.hash = `projects/${id}`;
    }
  };

  const closeCase = () => {
    if (typeof window !== "undefined") {
      const current = window.location.hash || "";
      if (current.startsWith(CASE_HASH_PREFIX)) {
        window.location.hash = "#projects";
      } else {
        window.location.hash = "";
      }
    }
  };

  const data = cat === CATEGORY.TECH ? techProjects : medtechProjects;
  const tags = useMemo(() => (cat === CATEGORY.TECH ? collectTags(data) : []), [cat, data]);
  const [tag, setTag] = useState("All");

  const visibleTech = useMemo(() => {
    if (tag === "All") return techProjects;
    return techProjects.filter((p) => (p.tags || []).includes(tag));
  }, [tag]);

  const medIntegration = useMemo(() => medtechProjects.filter((p) => p.segment !== "management"), []);
  const medManagement = useMemo(() => medtechProjects.filter((p) => p.segment === "management"), []);

  return (
    <section id="projects" className="section container">
      <h2 className="section__title">&gt; Projects</h2>

      <div className="projects__toolbar">
        <div className="projects__tabs" role="tablist" aria-label="Project categories">
          <button
            role="tab"
            aria-selected={cat === CATEGORY.TECH}
            className={`tab ${cat === CATEGORY.TECH ? "tab--active" : ""}`}
            onClick={() => setCat(CATEGORY.TECH)}
          >
            <Cpu size={16} className="icon mr-1" /> Tech
          </button>
          <button
            role="tab"
            aria-selected={cat === CATEGORY.MED}
            className={`tab ${cat === CATEGORY.MED ? "tab--active" : ""}`}
            onClick={() => setCat(CATEGORY.MED)}
          >
            <HeartPulse size={16} className="icon mr-1" /> MedTech
          </button>
        </div>

        {cat === CATEGORY.TECH && tags.length > 1 && (
          <div className="projects__filters" role="group" aria-label="Filter tags">
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
          <h3 className="projects__section-title">💻 Tech Projects</h3>
          <p className="projects__intro">Recent software projects (React, Python, data).</p>
          <div className="projects__grid">
            {visibleTech.map((p) => (
              <ProjectCard key={p.id} p={p} onOpenCase={openCase} />
            ))}
          </div>
        </>
      ) : (
        <>
          <h3 className="projects__section-title">💙 MedTech — Integration & Innovation</h3>
          <p className="projects__intro">OR integrations, visualization, devices.</p>
          <div className="projects__grid">
            {medIntegration.map((p) => (
              <ProjectCard key={p.id} p={p} variant="med" onOpenCase={openCase} />
            ))}
          </div>

          {medManagement.length ? (
            <>
              <h3 className="projects__section-title">💼 MedTech — Sales & Project Management</h3>
              <p className="projects__intro">Rollouts, tenders, vendor coordination, training.</p>
              <div className="projects__grid">
                {medManagement.map((p) => (
                  <ProjectCard key={p.id} p={p} variant="mgmt" onOpenCase={openCase} />
                ))}
              </div>
            </>
          ) : null}
        </>
      )}

      <CaseStudyModal
        open={!!caseId}
        onClose={closeCase}
        title={
          caseId === "livesurgery"
            ? "Livesurgery — Case Study"
            : caseId === "smartshooter"
            ? "SmartShooter AI — Case Study"
            : caseId === "flowlogix"
            ? "FlowLogix — Case Study"
            : caseId === "alphorythm"
            ? "Alphorythm — Case Study"
            : caseId === "portfolio"
            ? "Developer Portfolio Website — Case Study"
            : caseId === "medintegro"
            ? "Medintegro Website Rebuild — Case Study"
            : "Case Study"
        }
      >
        {caseId === "livesurgery" ? (
          <LivesurgeryCaseStudy />
        ) : caseId === "smartshooter" ? (
          <SmartShooterCaseStudy />
        ) : caseId === "flowlogix" ? (
          <FlowLogixCaseStudy />
        ) : caseId === "alphorythm" ? (
          <AlphorythmCaseStudy />
        ) : caseId === "portfolio" ? (
          <PortfolioCaseStudy />
        ) : caseId === "medintegro" ? (
          <MedintegroCaseStudy />
        ) : (
          <div>Coming soon…</div>
        )}
      </CaseStudyModal>
    </section>
  );
}
