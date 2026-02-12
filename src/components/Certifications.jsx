import React from "react";
import { GraduationCap, Database, Projector } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "GoIT — Project Management Certificate",
    image: "/images/certs/goit-pm.jpg",
    icon: <Projector size={20} />,
    issuer: "GoIT (2025)",
    stack: [
      "Agile Delivery",
      "Scope & Roadmaps",
      "Backlog & Prioritization",
      "Risk & Dependencies",
      "Stakeholder Management",
      "Delivery Artifacts (SOW/WBS/RACI)",
    ],
    summary:
      "End-to-end delivery governance: translating scope into roadmaps and execution plans, managing risks and dependencies, and maintaining stakeholder alignment through structured reporting and artifacts.",
  },

  {
    id: 2,
    title: "Neoversity — Master’s in Software Development (Technical Deepening)",
    image: "/images/certs/goit-neoversity.jpg",
    icon: <GraduationCap size={20} />,
    issuer: "Woolf University (2024–2026)",
    stack: [
      "System Design",
      "Data Modeling",
      "Full-Stack Foundations",
      "APIs",
      "Cloud & DevOps Basics",
    ],
    summary:
      "Formal technical deepening to lead product systems with less abstraction — strengthening architecture fluency, data modeling, and engineering collaboration.",
    status: "ongoing",
  },
  {
    id: 3,
    title: "DataCamp – Associate AI Engineer for Developers",
    placeholder: true,
    icon: <Database size={20} />,
    issuer: "DataCamp (2025)",
    link: "https://app.datacamp.com/learn/career-tracks/associate-ai-engineer-for-developers",
    stack: [
      "AI Integration",
      "OpenAI API",
      "Prompting",
      "Tooling Patterns",
      "Productized AI Features",
    ],
    summary:
      "Applied AI integration track focused on building AI-powered product features using APIs and modern workflows — emphasizing practical implementation patterns over theory.",
    status: "ongoing",
  },
];

const Certifications = () => (
  <section id="certifications" className="section container">
    <h2 className="section__title">&gt; Certifications</h2>

    <div className="certs__grid">
      {certifications.map((cert) => {
        const isPlaceholder = cert.placeholder || !cert.image;

        return (
          <div key={cert.id} className="cert-card">
            <div className="cert-card__head">
              <span className="cert-card__icon">{cert.icon}</span>
              <h3 className="cert-card__title">{cert.title}</h3>
            </div>

            {/* Image or gradient placeholder */}
            {isPlaceholder ? (
              <div className="cert-card__ph">
                <span className="cert-card__ph-label">In progress</span>
              </div>
            ) : (
              <img
                src={cert.image}
                alt={cert.title}
                className="cert-card__img"
                loading="lazy"
              />
            )}

            <p className="cert-card__issuer">{cert.issuer}</p>

            {cert.link ? (
              <a href={cert.link} target="_blank" rel="noreferrer">
                View credential
              </a>
            ) : null}

            {cert.status === "ongoing" && (
              <span className="badge badge--ongoing">Ongoing</span>
            )}

            <p className="cert-card__summary">{cert.summary}</p>

            {Array.isArray(cert.stack) && cert.stack.length > 0 && (
              <ul className="cert-card__stack">
                {cert.stack.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  </section>
);

export default Certifications;
