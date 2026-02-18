import React, { useEffect, useState } from "react";
import Milestones from "./Milestones.jsx";
import JourneyFull from "./JourneyFull.jsx";

const TimelineSwitch = () => {
  const [full, setFull] = useState(
    () => localStorage.getItem("timeline:view") === "full"
  );

  useEffect(() => {
    localStorage.setItem("timeline:view", full ? "full" : "summary");
  }, [full]);

  return (
    <section id="timeline" className="section container">
      <header className="timeline__toolbar reveal">
        <h2 className="section__title">
          <span className="about__chev">&gt;</span> Timeline
        </h2>
        <button
          className="chip"
          onClick={() => setFull(v => !v)}
          aria-pressed={full}
          aria-label={full ? "Switch to 3-milestone summary view" : "Switch to full history (11 entries)"}
        >
          {full ? "Show 3 Milestones" : "View Full History (11)"}
        </button>
      </header>
      {full ? <JourneyFull /> : <Milestones />}
    </section>
  );
};

export default TimelineSwitch;
