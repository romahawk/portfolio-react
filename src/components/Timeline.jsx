import React, { useMemo, useRef, useState, useEffect } from "react";
import data from "../data/timeline.js";

const TAGS = ["All", "MedTech", "Tech", "Startup", "Design"];

const sorters = {
  desc: (a, b) => b.year - a.year,
  asc: (a, b) => a.year - b.year,
};

const Timeline = () => {
  const [tag, setTag] = useState("All");
  const [order, setOrder] = useState("desc"); // latest first
  const scrollerRef = useRef(null);

  // Filter + sort
  const items = useMemo(() => {
    const filtered = tag === "All" ? data : data.filter((d) => d.tags?.includes(tag));
    return [...filtered].sort(sorters[order]);
  }, [tag, order]);

  // Horizontal wheel scroll
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onWheel = (e) => {
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
        el.scrollLeft += e.deltaY; // vertical wheel moves horizontally
        e.preventDefault();
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // Keyboard: arrow left/right to scroll container when focused
  const onKey = (e) => {
    const el = scrollerRef.current;
    if (!el) return;
    if (e.key === "ArrowRight") el.scrollBy({ left: 300, behavior: "smooth" });
    if (e.key === "ArrowLeft") el.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollBy = (dx) => {
    scrollerRef.current?.scrollBy({ left: dx, behavior: "smooth" });
  };

  return (
    <section id="timeline" className="section container timeline">
      <h2 className="section__title">
        <span className="about__chev">&gt;</span> Experience Timeline
      </h2>

      {/* Controls */}
      <div className="timeline__toolbar" role="toolbar" aria-label="Timeline controls">
        <div className="timeline__filters" role="group" aria-label="Filter by tag">
          {TAGS.map((t) => (
            <button
              key={t}
              className={`chip ${tag === t ? "chip--active" : ""}`}
              onClick={() => setTag(t)}
              aria-pressed={tag === t}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="timeline__sort" role="group" aria-label="Sort order">
          <button
            className={`chip ${order === "desc" ? "chip--active" : ""}`}
            onClick={() => setOrder("desc")}
            aria-pressed={order === "desc"}
            title="Newest first"
          >
            ↓ Newest
          </button>
          <button
            className={`chip ${order === "asc" ? "chip--active" : ""}`}
            onClick={() => setOrder("asc")}
            aria-pressed={order === "asc"}
            title="Oldest first"
          >
            ↑ Oldest
          </button>
        </div>
      </div>

      {/* Track */}
      <div className="timeline__track-wrap">
        <button className="timeline__arrow" aria-label="Scroll left" onClick={() => scrollBy(-420)}>
          ‹
        </button>

        <div
          className="timeline__track"
          ref={scrollerRef}
          tabIndex={0}
          onKeyDown={onKey}
          role="list"
          aria-label="Career timeline"
        >
          {items.map((item) => (
            <article key={item.id} className="timeline__card" role="listitem">
              <header className="timeline__card-head">
                <span className="timeline__year">{item.year}</span>
                <span className="timeline__icon" aria-hidden>
                  {item.icon || "•"}
                </span>
              </header>

              <h3 className="timeline__title">{item.title}</h3>
              <p className="timeline__meta">
                <strong>{item.role}</strong> — {item.company}
              </p>
              <p className="timeline__summary">{item.summary}</p>

              {item.highlights?.length ? (
                <ul className="timeline__bullets">
                  {item.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              ) : null}

              <footer className="timeline__tags">
                {(item.tags || []).map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </footer>
            </article>
          ))}
        </div>

        <button className="timeline__arrow" aria-label="Scroll right" onClick={() => scrollBy(420)}>
          ›
        </button>
      </div>
    </section>
  );
};

export default Timeline;
