import React from "react";
import { ArrowRight, Files, GitBranch, TableProperties } from "lucide-react";

const PREVIEW_ITEMS = [
  { icon: Files, label: "Scattered documentation" },
  { icon: GitBranch, label: "Operational bottlenecks" },
  { icon: TableProperties, label: "Manual coordination" },
];

export default function AIWorkflowPreview() {
  return (
    <section id="ai-workflow-preview" className="section container ai-workflow-preview">
      <div className="ai-workflow-preview__panel reveal">
        <div className="ai-workflow-preview__copy">
          <p className="ai-workflow-preview__kicker">Solution library</p>
          <h2 className="section__title">
            <span className="about__chev">&gt;</span> Practical AI workflow examples
          </h2>
          <p>
            A visual library of reference workflows showing how MedTech and regulated teams
            can turn scattered documentation, operational bottlenecks, and manual coordination
            into AI-assisted systems.
          </p>
          <a href="/ai-workflow" className="btn btn--primary">
            Explore AI Workflows <ArrowRight size={15} className="icon ml-1" />
          </a>
        </div>

        <div className="ai-workflow-preview__stack" aria-label="AI workflow example inputs">
          {PREVIEW_ITEMS.map(({ icon, label }) => (
            <div className="ai-workflow-preview__item" key={label}>
              {React.createElement(icon, { size: 18, "aria-hidden": "true" })}
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="ai-workflow-preview__company-strip reveal">
        <div>
          <p className="ai-workflow-preview__kicker">For companies</p>
          <h3>Need to map one complex workflow?</h3>
          <p>
            I provide focused workflow audits, discovery sprints, and prototype support for
            MedTech, HealthTech, and regulated operations teams.
          </p>
        </div>
        <div className="ai-workflow-preview__strip-actions">
          <a href="/collaborate" className="btn btn--primary">Work With Me</a>
          <a href="/ai-workflow" className="btn btn--ghost">Explore AI Workflows</a>
        </div>
      </div>
    </section>
  );
}
