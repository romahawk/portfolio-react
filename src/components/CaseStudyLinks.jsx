import React from "react";
import {
  FileText, Presentation, ExternalLink, Github,
  BookOpen, Layers, Target, Map, MonitorPlay,
} from "lucide-react";

// Resolve a contextual icon from the link label
const LABEL_ICONS = {
  readme:       BookOpen,
  architecture: Layers,
  prd:          Target,
  roadmap:      Map,
  repository:   Github,
  repo:         Github,
  demo:         MonitorPlay,
  default:      FileText,
};

function docIcon(label) {
  const key = label.toLowerCase().trim();
  return LABEL_ICONS[key] || LABEL_ICONS.default;
}

export default function CaseStudyLinks({ pitchUrl, demoUrl, docs = [] }) {
  const hasCTAs = pitchUrl || demoUrl;

  return (
    <div className="cs__card cs-links">
      <h2 className="cs__h2">
        <FileText size={18} className="icon mr-1" /> Docs &amp; Links
      </h2>

      {hasCTAs && (
        <div className="cs-links__ctas">
          {pitchUrl && (
            <a className="btn btn--primary" href={pitchUrl} target="_blank" rel="noreferrer">
              <Presentation size={16} className="icon mr-1" /> Pitch deck
              <ExternalLink size={13} className="icon ml-1" />
            </a>
          )}
          {demoUrl && (
            <a className="btn btn--ghost cs-links__demo-btn" href={demoUrl} target="_blank" rel="noreferrer">
              <MonitorPlay size={16} className="icon mr-1" /> Live demo
              <ExternalLink size={13} className="icon ml-1" />
            </a>
          )}
        </div>
      )}

      {docs.length ? (
        <ul className="cs-links__list">
          {docs.map((d) => {
            const Icon = docIcon(d.label);
            return (
              <li key={`${d.label}-${d.url}`} className="cs-links__item">
                <a href={d.url} target="_blank" rel="noreferrer" className="cs-links__link">
                  <Icon size={15} className="icon cs-links__icon" />
                  {d.label}
                  <ExternalLink size={12} className="icon cs-links__ext" />
                </a>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="cs__p cs-links__empty">Docs bundle coming next.</p>
      )}
    </div>
  );
}
