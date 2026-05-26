import React from "react";
import { ArrowRight, Bot, ClipboardCheck, FileSearch } from "lucide-react";

const SERVICES = [
  {
    title: "AI Workflow Audit",
    text: "Map one high-friction workflow, identify safe AI opportunities, and define the smallest auditable pilot.",
    icon: ClipboardCheck,
  },
  {
    title: "Discovery Sprint",
    text: "Clarify users, workflow states, risks, data boundaries, and product scope before engineering spend.",
    icon: FileSearch,
  },
  {
    title: "Prototype Support",
    text: "Move from workflow map to testable AI-assisted prototype, acceptance criteria, and handover artifacts.",
    icon: Bot,
  },
];

export default function HomeServices() {
  return (
    <section id="services-for-medtech" className="section container home-services">
      <div className="home-services__head reveal">
        <p className="home-services__kicker">Collaboration path</p>
        <h2 className="section__title">
          <span className="about__chev">&gt;</span> For companies: AI-assisted workflow collaboration
        </h2>
        <p>
          I work with MedTech, HealthTech, and regulated operations teams on workflow audits,
          discovery sprints, prototypes, documentation systems, and implementation support.
        </p>
      </div>

      <div className="home-services__grid">
        {SERVICES.map(({ title, text, icon }, index) => (
          <article
            className={`home-services__card reveal reveal--delay-${Math.min(index + 1, 3)}`}
            key={title}
          >
            {React.createElement(icon, { size: 18, className: "home-services__icon", "aria-hidden": "true" })}
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>

      <div className="home-services__actions reveal">
        <a href="/collaborate" className="btn btn--primary">
          Work With Me <ArrowRight size={15} className="icon ml-1" />
        </a>
        <a href="/ai-workflow" className="btn btn--ghost">
          Explore AI Workflows
        </a>
      </div>
    </section>
  );
}
