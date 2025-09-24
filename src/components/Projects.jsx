import React, { useMemo, useState } from "react";
import { techProjects, medtechProjects } from "../data/projects.js";
import { Cpu, HeartPulse, ExternalLink } from "lucide-react";

const CATEGORY = { TECH: "tech", MED: "medtech" };

const collectTags = (list) => {
  const set = new Set();
  list.forEach(p => (p.tags || []).forEach(t => set.add(t)));
  return ["All", ...Array.from(set)];
};

const ProjectCard = ({ p, variant }) => (
  <article className={`project-card ${variant ? `project-card--${variant}` : ""}`}>
    <header className="project-card__head">
      <h4 className="project-card__title">{p.title}</h4>
      {p.icon ? <span className="project-card__icon" aria-hidden>{p.icon}</span> : null}
    </header>

    <p className="project-card__summary">{p.summary}</p>

    {p.stack?.length ? (
      <ul className="project-card__stack">
        {p.stack.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
    ) : null}

    {p.tags?.length ? (
      <div className="project-card__tags">
        {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
      </div>
    ) : null}

    {p.link ? (
      <a className="project-card__link" href={p.link} target="_blank" rel="noreferrer">
        View Project <ExternalLink size={14} className="icon ml-1" />
      </a>
    ) : null}
  </article>
);

const Projects = () => {
  const [cat, setCat] = useState(CATEGORY.TECH);
  const data = cat === CATEGORY.TECH ? techProjects : medtechProjects;

  const tags = useMemo(() => (cat === CATEGORY.TECH ? collectTags(data) : []), [cat, data]);
  const [tag, setTag] = useState("All");

  const visibleTech = useMemo(() => {
    if (tag === "All") return techProjects;
    return techProjects.filter(p => (p.tags || []).includes(tag));
  }, [tag]);

  const medIntegration = useMemo(
    () => medtechProjects.filter(p => p.segment !== "management"),
    []
  );
  const medManagement = useMemo(
    () => medtechProjects.filter(p => p.segment === "management"),
    []
  );

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
            {visibleTech.map((p) => <ProjectCard key={p.id} p={p} />)}
          </div>
        </>
      ) : (
        <>
          <h3 className="projects__section-title">💙 MedTech — Integration & Innovation</h3>
          <p className="projects__intro">OR integrations, visualization, devices.</p>
          <div className="projects__grid">
            {medIntegration.map((p) => (
              <ProjectCard key={p.id} p={p} variant="med" />
            ))}
          </div>

          {medManagement.length ? (
            <>
              <h3 className="projects__section-title">💼 MedTech — Sales & Project Management</h3>
              <p className="projects__intro">Rollouts, tenders, vendor coordination, training.</p>
              <div className="projects__grid">
                {medManagement.map((p) => (
                  <ProjectCard key={p.id} p={p} variant="mgmt" />
                ))}
              </div>
            </>
          ) : null}
        </>
      )}
    </section>
  );
};

export default Projects;
