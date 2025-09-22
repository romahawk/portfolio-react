import React, { useMemo, useState } from "react";
import { techProjects, medtechProjects } from "../data/projects.js";

const CATEGORY = { TECH: "tech", MED: "medtech" };

const collectTags = (list) => {
  const set = new Set();
  list.forEach(p => (p.tags || []).forEach(t => set.add(t)));
  return ["All", ...Array.from(set)];
};

const ProjectCard = ({ p }) => (
  <article className="project-card">
    <h4 className="project-card__title">{p.title}</h4>
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
        View Project
      </a>
    ) : null}
  </article>
);

const Projects = () => {
  const [cat, setCat] = useState(CATEGORY.TECH);
  const data = cat === CATEGORY.TECH ? techProjects : medtechProjects;

  // Tags only for Tech (MedTech cards rarely need filtering)
  const tags = useMemo(() => (cat === CATEGORY.TECH ? collectTags(data) : []), [cat, data]);
  const [tag, setTag] = useState("All");

  const visible = useMemo(() => {
    if (cat !== CATEGORY.TECH || tag === "All") return data;
    return data.filter(p => (p.tags || []).includes(tag));
  }, [cat, tag, data]);

  return (
    <section id="projects" className="section container">
      <h2 className="section__title">&gt; Projects</h2>

      {/* Category toggle */}
      <div className="projects__toolbar">
        <div className="projects__tabs" role="tablist" aria-label="Project categories">
          <button
            role="tab"
            aria-selected={cat === CATEGORY.TECH}
            className={`tab ${cat === CATEGORY.TECH ? "tab--active" : ""}`}
            onClick={() => setCat(CATEGORY.TECH)}
          >
            Tech
          </button>
          <button
            role="tab"
            aria-selected={cat === CATEGORY.MED}
            className={`tab ${cat === CATEGORY.MED ? "tab--active" : ""}`}
            onClick={() => setCat(CATEGORY.MED)}
          >
            MedTech
          </button>
        </div>

        {/* Tech-only tags */}
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

      {/* Label line */}
      <h3 className="projects__section-title">
        {cat === CATEGORY.TECH ? "💻 Tech Projects" : "💙 MedTech Projects"}
      </h3>
      <p className="projects__intro">
        {cat === CATEGORY.TECH
          ? "Recent software projects (React, Python, data)."
          : "Selected work from 10+ years in MedTech."}
      </p>

      <div className="projects__grid">
        {visible.map((p) => <ProjectCard key={p.id} p={p} />)}
      </div>
    </section>
  );
};

export default Projects;
