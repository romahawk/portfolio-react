import React, { useMemo, useRef, useEffect, useState } from "react";
import journey from "../data/journey.js";

const toYear = y => Number(String(y).match(/\d{4}/)?.[0] || 0);

const JourneyFull = () => {
  const [newestFirst, setNewestFirst] = useState(true);
  const items = useMemo(() => {
    const arr = [...journey];
    arr.sort((a, b) => (newestFirst ? toYear(b.year) - toYear(a.year)
                                    : toYear(a.year) - toYear(b.year)));
    return arr;
  }, [newestFirst]);

  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onWheel = e => {
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
        el.scrollLeft += e.deltaY; e.preventDefault();
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const scrollBy = dx => ref.current?.scrollBy({ left: dx, behavior: "smooth" });

  return (
    <div className="timeline">
      <div className="timeline__controls">
        <button className="timeline__sort-btn" onClick={() => setNewestFirst(v=>!v)}>
          Sort: {newestFirst ? "Newest First" : "Oldest First"}{" "}
          <i className={`fas ${newestFirst ? "fa-arrow-down" : "fa-arrow-up"}`}/>
        </button>
      </div>

      <button className="timeline__scroll-btn timeline__scroll-btn--left"
              aria-label="Scroll left" onClick={() => scrollBy(-420)}>←</button>

      <div className="timeline__container" ref={ref}>
        {items.map(t => (
          <div key={t.year} className={`timeline__item ${t.highlight ? "timeline__item--highlight" : ""}`}
               data-year={toYear(t.year)}>
            <h3 className="timeline__year">
              {t.year} {t.icon ? <i className={t.icon}/> : null}
            </h3>
            <div className="timeline__marker"></div>
            <div className="timeline__content">
              <ul className="timeline__highlights">
                {t.items.map((li,i) => <li key={i}>{li}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <button className="timeline__scroll-btn timeline__scroll-btn--right"
              aria-label="Scroll right" onClick={() => scrollBy(420)}>→</button>
    </div>
  );
};

export default JourneyFull;
