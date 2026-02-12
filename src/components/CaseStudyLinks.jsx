import React from "react";
import { FileText, Presentation, ExternalLink } from "lucide-react";

export default function CaseStudyLinks({ pitchUrl, docs = [] }) {
  return (
    <div className="cs__card">
      <h2 className="cs__h2">
        <FileText size={18} className="icon mr-1" /> Docs & Pitch
      </h2>

      {pitchUrl ? (
        <p className="cs__p">
          <a className="btn btn--primary" href={pitchUrl} target="_blank" rel="noreferrer">
            <Presentation size={16} className="icon mr-1" /> Pitch deck
            <ExternalLink size={14} className="icon ml-1" />
          </a>
        </p>
      ) : null}

      {docs.length ? (
        <ul className="cs__list">
          {docs.map((d) => (
            <li key={`${d.label}-${d.url}`}>
              <a href={d.url} target="_blank" rel="noreferrer" className="project-card__link">
                {d.label} <ExternalLink size={14} className="icon ml-1" />
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="cs__p">Docs bundle coming next.</p>
      )}
    </div>
  );
}
