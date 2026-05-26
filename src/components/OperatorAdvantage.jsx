import React from "react";
import { ArrowRight, ClipboardList, Hospital, Route } from "lucide-react";

const CREDIBILITY_CARDS = [
  {
    title: "OR & hospital workflows",
    text:
      "Hands-on exposure to operating room environments, surgical equipment implementation, clinical handovers, and coordination with hospital teams.",
    icon: Hospital,
  },
  {
    title: "Implementation complexity",
    text:
      "Experience across equipment delivery, installation, training, support, documentation, stakeholder alignment, and project handover.",
    icon: ClipboardList,
  },
  {
    title: "Workflow-to-system thinking",
    text:
      "Practical understanding of where operational workflows break: missing ownership, scattered documentation, manual coordination, and weak visibility.",
    icon: Route,
  },
];

export default function OperatorAdvantage() {
  return (
    <section id="operator-advantage" className="section container operator-advantage">
      <div className="operator-advantage__panel reveal">
        <div className="operator-advantage__top">
          <div className="operator-advantage__content">
            <div className="operator-advantage__intro">
              <p className="operator-advantage__kicker">Credibility layer</p>
              <h2 className="section__title">
                <span className="about__chev">&gt;</span> Real MedTech implementation background
              </h2>
              <p>
                Before designing AI workflow systems, I spent 10+ years in MedTech operations,
                medical equipment implementation, hospital stakeholder coordination, and clinical
                workflow handover. That experience shapes how I approach AI: not as a generic
                automation layer, but as a way to reduce operational friction, improve traceability,
                and turn messy workflows into reliable systems.
              </p>
            </div>
          </div>

          <figure className="operator-advantage__media">
            <img
              src="/images/project-OR.jpg"
              alt="Operating room equipment and surgical workflow environment"
              loading="lazy"
            />
          </figure>
        </div>

        <div className="operator-advantage__cards">
          {CREDIBILITY_CARDS.map(({ title, text, icon }) => (
            <article className="operator-advantage__card" key={title}>
              {React.createElement(icon, { size: 18, "aria-hidden": "true" })}
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <p className="operator-advantage__compact-line">
          Selected implementation areas: surgical lights, OR video/audio integration, medical gas pendants,
          hyperbaric systems, surgical collaboration and education workflows.
        </p>

        <div className="operator-advantage__actions">
          <a href="/proof-of-work" className="btn btn--primary">
            View Proof of Work <ArrowRight size={15} className="icon ml-1" />
          </a>
          <a href="/ai-workflow" className="btn btn--ghost">
            Explore AI Workflows
          </a>
        </div>
      </div>
    </section>
  );
}
