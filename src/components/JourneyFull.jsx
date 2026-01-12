import React, { useMemo, useRef, useEffect, useState } from "react";
import * as Lucide from "lucide-react";
import journey from "../data/journey.js";

const toYear = (y) => Number(String(y).match(/\d{4}/)?.[0] || 0);

const JourneyFull = () => {
  const [newestFirst, setNewestFirst] = useState(true);

  const items = useMemo(() => {
    const arr = [...journey];
    arr.sort((a, b) =>
      newestFirst ? toYear(b.year) - toYear(a.year) : toYear(a.year) - toYear(b.year)
    );
    return arr;
  }, [newestFirst]);

  const ref = useRef(null);

  // vertical wheel → horizontal scroll
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onWheel = (e) => {
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
        el.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const scrollBy = (dx) => ref.current?.scrollBy({ left: dx, behavior: "smooth" });

  return (
    <div className="timeline" aria-label="Experience narrative timeline">
      <div className="timeline__controls">
        <button
          className="timeline__sort-btn chip"
          onClick={() => setNewestFirst((v) => !v)}
          aria-pressed={newestFirst}
          title="Toggle sort order"
        >
          Sort: {newestFirst ? "Newest → Oldest" : "Oldest → Newest"}
        </button>
      </div>

      <button
        className="timeline__scroll-btn timeline__scroll-btn--left"
        aria-label="Scroll left"
        onClick={() => scrollBy(-420)}
      >
        ←
      </button>

      <div className="timeline__container" ref={ref} role="list">
        {items.map((t) => {
          const Icon = Lucide[t.icon] || Lucide.Circle;
          return (
            <div
              key={t.year}
              className={`timeline__item ${t.highlight ? "timeline__item--highlight" : ""}`}
              data-year={toYear(t.year)}
              role="listitem"
            >
              <h3 className="timeline__year">
                <span className="timeline__year-text">{t.year}</span>
                <Icon className="timeline__icon" size={18} strokeWidth={2} />
              </h3>

              {/* hidden marker in horizontal layout, keep node for future theming */}
              <div className="timeline__marker" aria-hidden="true"></div>

              <div className="timeline__content">
                <ul className="timeline__highlights">
                  {(t.items || []).map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      <button
        className="timeline__scroll-btn timeline__scroll-btn--right"
        aria-label="Scroll right"
        onClick={() => scrollBy(420)}
      >
        →
      </button>
    </div>
  );
};

export default JourneyFull;
