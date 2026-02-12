import React from "react";
import * as Lucide from "lucide-react";
import milestones from "../data/milestones.js";

const Milestones = () => {
  return (
    <div className="milestones" aria-label="Key milestones">
      {(milestones || []).map((m) => {
        const Icon = Lucide[m.icon] || Lucide.Circle;
        return (
          <article key={m.id} className="milestone">
            <header className="milestone__head">
              <span className="milestone__range">{m.range}</span>
              <span className="milestone__icon" aria-hidden>
                <Icon size={18} strokeWidth={2} />
              </span>
            </header>

            <h3 className="milestone__title">{m.title}</h3>
            <p className="milestone__summary">{m.summary}</p>

            {m.points?.length ? (
              <ul className="milestone__list">
                {m.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            ) : null}
          </article>
        );
      })}
    </div>
  );
};

export default Milestones;
