import React from "react";
import { GraduationCap, Code, Database, Projector } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "GoIT – Project Management Course",
    image: "/images/certs/goit-pm.jpg",
    icon: <Projector size={20} />,
    issuer: "GoIT (2025)",
    // status: "completed", // optional: add if you show badges
    stack: [
      "Agile",
      "Scrum",
      "Kanban",
      "Jira",
      "Confluence",
      "WBS",
      "SOW",
      "Roadmap",
      "Backlog",
      "Risk Log",
      "RACI",
      "Gantt/EVM",
      "Stakeholders",
    ],
    summary:
      "End-to-end IT project management: scope, scheduling, budgeting, risk and communication. Built delivery artifacts (SOW, WBS, roadmap, backlog, risk register), ran sprints in Jira, documented in Confluence, and practiced reporting with Gantt/EVM and RACI for stakeholders.",
  },

  {
    id: 2,
    title:
      "GoIT Neoversity – Master’s in Software Development & Data Analytics",
    image: "/images/certs/goit-neoversity.jpg",
    icon: <GraduationCap size={20} />,
    issuer: "Woolf University (in progress, 2024–2026)",
    stack: [
      "HTML",
      "CSS",
      "JS",
      "React / React Native",
      "Typescript",
      "Git",
      "CI/CD",
      "Python",
      "Heroku",
      "Kubernetes",
      "SQL",
      "Docker",
      "Jenkins",
      "NoSQL",
      "Redis",
      "RestAPI",
      "MongoDB",
    ],
    summary:
      "Comprehensive program covering full-stack, data analytics, and project management fundamentals.",
    status: "ongoing",
  },
  {
    id: 3,
    title: "Mate Academy – Full-Stack Developer Bootcamp",
    placeholder: true,
    icon: <Code size={20} />,
    issuer: "Mate Academy (in progress, 2025)",
    stack: [
      "SASS",
      "React",
      "Redux",
      "Typescript",
      "Node.js",
      "Webstorm",
      "Npm",
      "PostgreSqL",
      "Firebase",
      "Github",
    ],
    summary:
      "Building production-ready full-stack apps while applying clean code, Git workflow, and deployment practices.",
    status: "ongoing",
  },
  {
    id: 4,
    title: "DataCamp – Associate AI Engineer for Developers",
    placeholder: true,
    icon: <Database size={20} />,
    issuer: "DataCamp (in progress, 2025)",
    link: "https://app.datacamp.com/learn/career-tracks/associate-ai-engineer-for-developers",
    stack: [
      "Python",
      "OpenAI API",
      "Prompt Engineering",
      "LangChain",
      "AI Integration",
    ],
    summary:
      "Learn to integrate AI-powered applications using APIs and open-source libraries. Covers OpenAI API, prompting, and conversational AI development.",
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
                <span className="cert-card__ph-label">Coming soon</span>
              </div>
            ) : (
              <img
                src={cert.image}
                alt={cert.title}
                className="cert-card__img"
                loading="lazy"
              />
            )}

            <p className="cert-card__issuer">
              {cert.issuer}
              {cert.period ? ` (${cert.period})` : ""}
            </p>

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
