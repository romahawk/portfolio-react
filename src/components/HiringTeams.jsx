import React from "react";
import { ArrowRight, BriefcaseBusiness, CheckCircle2 } from "lucide-react";

const ROLES = [
  "AI Product Manager",
  "Technical Product Manager",
  "Product Operations Lead",
  "MedTech / HealthTech Product Lead",
  "Workflow Automation Lead",
  "AI Systems Builder for regulated operations",
];

const VALUE_POINTS = [
  "Workflow discovery",
  "Product requirement structuring",
  "AI-assisted prototyping",
  "Cross-functional communication",
  "Regulated-domain thinking",
  "Implementation handover",
];

export default function HiringTeams() {
  return (
    <section id="hiring-teams" className="section container hiring-teams">
      <div className="hiring-teams__panel reveal">
        <div className="hiring-teams__intro">
          <p className="hiring-teams__kicker">Hiring credibility</p>
          <h2 className="section__title">
            <span className="about__chev">&gt;</span> Where I create value for product teams
          </h2>
          <p>
            I fit teams that need product judgment, operator context, technical fluency,
            and the ability to convert regulated workflow ambiguity into usable system scope.
          </p>
          <div className="hiring-teams__actions">
            <a href="/proof-of-work" className="btn btn--primary">
              View Proof of Work <ArrowRight size={15} className="icon ml-1" />
            </a>
            <a href="/contact" className="btn btn--ghost">Contact</a>
          </div>
        </div>

        <div className="hiring-teams__content">
          <div className="hiring-teams__block">
            <div className="hiring-teams__block-heading">
              <BriefcaseBusiness size={17} className="hiring-teams__icon" aria-hidden="true" />
              <h3>Role fit</h3>
            </div>
            <div className="hiring-teams__chips" aria-label="Best-fit roles">
              {ROLES.map((role) => (
                <span className="hiring-teams__chip" key={role}>{role}</span>
              ))}
            </div>
          </div>

          <div className="hiring-teams__block">
            <div className="hiring-teams__block-heading">
              <CheckCircle2 size={17} className="hiring-teams__icon" aria-hidden="true" />
              <h3>Value points</h3>
            </div>
            <ul className="hiring-teams__list">
              {VALUE_POINTS.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={15} className="hiring-teams__check" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
