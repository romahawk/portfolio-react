import { useEffect, useMemo, useRef, useState } from "react";

const EMPTY_IDS = [];

// In-page navigation for long pages. /services uses two forms:
// - "index": a static list under the hero, shown below 1360px (phones, tablets, small laptops).
// - "rail": a fixed list in the left margin, shown from 1360px. It fades in after the hero
//   and highlights the section in view. Up to 1599px it shows numbers only (labels on hover
//   and focus); from 1600px it shows full labels. Both are plain anchor lists, so they work
//   without JS.
// /ai uses SectionChips (below).

// Horizontal band (as rootMargin) a section must cross to count as "in view".
const ACTIVE_BAND = "-40% 0px -55% 0px";

function useActiveSection(ids) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length || typeof IntersectionObserver === "undefined") return undefined;

    const inBand = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) inBand.add(entry.target.id);
          else inBand.delete(entry.target.id);
        }
        // Unlisted sections leave nothing highlighted.
        setActive(ids.find((id) => inBand.has(id)) || "");
      },
      { rootMargin: ACTIVE_BAND }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

function usePastHero(heroId) {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const hero = document.getElementById(heroId);
    if (!hero || typeof IntersectionObserver === "undefined") return undefined;

    // "Past" once the hero's bottom edge rises above 40% of the viewport height,
    // i.e. the hero no longer overlaps the lower 60% of the viewport.
    const observer = new IntersectionObserver(
      ([entry]) => setPast(!entry.isIntersecting && entry.boundingClientRect.top < 0),
      { rootMargin: "-40% 0px 0px 0px" }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [heroId]);

  return past;
}

function SectionLinks({ items, active }) {
  return (
    <ol>
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className={active === item.id ? "is-active" : undefined}
            aria-current={active === item.id ? "location" : undefined}
          >
            {item.number ? <span className="sv2-nav__num">{item.number}</span> : null}
            <span className="sv2-nav__label">{item.label}</span>
          </a>
        </li>
      ))}
    </ol>
  );
}

export function SectionIndex({ nav }) {
  return (
    <nav className="sv2-index" aria-label={nav.label}>
      <p className="sv2-index__label">{nav.label}</p>
      <SectionLinks items={nav.items} active="" />
    </nav>
  );
}

const supportsScrollTargetGroup =
  typeof CSS !== "undefined" && CSS.supports?.("scroll-target-group: auto");

// The chip that :target-current marks, read back after scrolling so aria-current matches it.
function useTargetCurrent(enabled, listRef) {
  const [current, setCurrent] = useState("");

  useEffect(() => {
    if (!enabled) return undefined;
    const sync = () => {
      const link = listRef.current?.querySelector("a:target-current");
      setCurrent(link ? link.getAttribute("href").slice(1) : "");
    };
    sync();
    document.addEventListener("scrollend", sync);
    return () => document.removeEventListener("scrollend", sync);
  }, [enabled, listRef]);

  return current;
}

// "chips": a horizontal strip of anchors under the hero (/ai). CSS makes it sticky from 768px.
// Active chip: :target-current with scroll-target-group where supported (aria-current synced on
// scrollend); elsewhere useActiveSection sets the is-active class and aria-current.
export function SectionChips({ nav }) {
  const ids = useMemo(() => nav.items.map((item) => item.id), [nav.items]);
  const listRef = useRef(null);
  const observed = useActiveSection(supportsScrollTargetGroup ? EMPTY_IDS : ids);
  const targetCurrent = useTargetCurrent(supportsScrollTargetGroup, listRef);
  const active = supportsScrollTargetGroup ? targetCurrent : observed;

  return (
    <nav className="kb-chips" aria-label={nav.label}>
      <ol className="kb-chips__list container" ref={listRef}>
        {nav.items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={!supportsScrollTargetGroup && active === item.id ? "kb-chip is-active" : "kb-chip"}
              aria-current={active === item.id ? "location" : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function SectionRail({ nav, heroId }) {
  const ids = useMemo(() => nav.items.map((item) => item.id), [nav.items]);
  const active = useActiveSection(ids);
  const shown = usePastHero(heroId);

  return (
    <nav className={`sv2-rail${shown ? " sv2-rail--shown" : ""}`} aria-label={nav.label}>
      <SectionLinks items={nav.items} active={active} />
    </nav>
  );
}
