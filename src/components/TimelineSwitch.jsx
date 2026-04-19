import React, { Suspense, useEffect, useState } from "react";
import Milestones from "./Milestones.jsx";
import { useTranslation } from "../context/LangContext.jsx";

const JourneyFull = React.lazy(() => import("./JourneyFull.jsx"));

const TimelineSwitch = () => {
  const { t } = useTranslation();
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
          <span className="about__chev">&gt;</span> {t("timeline.title")}
        </h2>
        <button
          className="chip"
          onClick={() => setFull(v => !v)}
          aria-pressed={full}
          aria-label={full ? t("timeline.ariaFull") : t("timeline.ariaSummary")}
        >
          {full ? t("timeline.showMilestones") : t("timeline.viewFull")}
        </button>
      </header>
      {full ? <Suspense fallback={null}><JourneyFull /></Suspense> : <Milestones />}
    </section>
  );
};

export default TimelineSwitch;
