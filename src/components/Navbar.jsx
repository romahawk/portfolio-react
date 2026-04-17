import { useEffect, useRef, useState, useCallback } from "react";
import ThemeSwitcher from "./ThemeSwitcher.jsx";

// 800px matches the CSS mobile breakpoint
const MOBILE_MQ = "(max-width: 800px)";

const IDS = [
  "about",
  "ai-sdlc",
  "timeline",
  "skills",
  "projects",
  "certifications",
  "contact",
];
const NAV_LABELS = {
  about: "About",
  "ai-sdlc": "AI SDLC",
  timeline: "Timeline",
  skills: "Skills",
  projects: "Projects",
  certifications: "Certifications",
  contact: "Contact",
};

// tuning knobs
const VIEWPORT_ANCHOR = 0.32; // 32% down the viewport for deciding active section
const SWITCH_BUFFER = 24;     // px hysteresis to avoid flicker on boundaries

export default function Navbar({ themeMode, onThemeChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.matchMedia(MOBILE_MQ).matches
  );

  const ticking = useRef(false);
  const sectionsRef = useRef([]);
  const navScrollRef = useRef(false);
  const navScrollTimeoutRef = useRef(null);

  // compute active section using a viewport anchor + hysteresis
  const computeActive = useCallback(() => {
    const anchor = window.scrollY + window.innerHeight * VIEWPORT_ANCHOR;

    let current = IDS[0];
    for (const { id, top, bottom } of sectionsRef.current) {
      if (anchor >= top + SWITCH_BUFFER && anchor < bottom - SWITCH_BUFFER) {
        current = id;
        break;
      }
    }
    setActive((prev) => (prev !== current ? current : prev));
  }, []);

  // rAF-throttled scroll handler
  const onScroll = useCallback(() => {
    // ignore scroll events triggered by our own nav click smooth-scroll
    if (navScrollRef.current) return;

    if (ticking.current) return;
    ticking.current = true;
    requestAnimationFrame(() => {
      computeActive();
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
      ticking.current = false;
    });
  }, [computeActive]);

  // collect section bounds (document coordinates)
  const collectSections = useCallback(() => {
    const results = [];
    for (const id of IDS) {
      const el = document.getElementById(id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const bottom = top + el.offsetHeight;
      results.push({ id, top, bottom });
    }
    sectionsRef.current = results;
    computeActive();
  }, [computeActive]);

  // smooth internal nav + lock scroll-spy briefly
  const handleClick = useCallback(
    (id) => {
      setIsOpen(false);
      setActive(id); // instant underline move to target

      // clear any previous lock
      if (navScrollTimeoutRef.current) {
        clearTimeout(navScrollTimeoutRef.current);
      }

      // lock scroll-based updates while browser performs smooth scroll
      navScrollRef.current = true;
      navScrollTimeoutRef.current = setTimeout(() => {
        navScrollRef.current = false;
        computeActive(); // final sync based on actual position
      }, 700); // should roughly match your smooth scroll duration
    },
    [computeActive]
  );

  // Track mobile breakpoint for aria/inert management
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(MOBILE_MQ);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Close menu on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === "Escape") setIsOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    collectSections(); // initial

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", collectSections);
    window.addEventListener("orientationchange", collectSections);
    window.addEventListener("hashchange", () => setTimeout(collectSections, 50));
    window.addEventListener("load", () => setTimeout(collectSections, 0));

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", collectSections);
      window.removeEventListener("orientationchange", collectSections);
      window.removeEventListener("hashchange", collectSections);
      window.removeEventListener("load", collectSections);
      if (navScrollTimeoutRef.current) {
        clearTimeout(navScrollTimeoutRef.current);
      }
    };
  }, [collectSections, onScroll]);

  return (
    <header className="site-header">
      <div
        className={`nav__backdrop ${isOpen ? "nav__backdrop--open" : ""}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
      <nav className="nav container">
        <a href="#home" className="nav__logo" aria-label="Back to top" onClick={() => handleClick("home")}>
          <span className="nav__logo-brace">{'{ }'}</span>
          <span className="nav__logo-text">ROMAZ</span>
          <span className="nav__logo-accent" />
        </a>

        <ul
          className={`nav__list ${isOpen ? "nav__list--open" : ""}`}
          aria-hidden={isMobile && !isOpen}
          inert={isMobile && !isOpen ? "" : undefined}
        >
          {IDS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`nav__link ${active === id ? "nav__link--active" : ""}`}
                onClick={() => handleClick(id)}
              >
                {NAV_LABELS[id] || id}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav__actions">
          <ThemeSwitcher mode={themeMode} onChange={onThemeChange} />
          <button
            className={`nav__toggle ${isOpen ? "x" : ""}`}
            onClick={() => setIsOpen((p) => !p)}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <span className="nav__toggle-bar" />
            <span className="nav__toggle-bar" />
            <span className="nav__toggle-bar" />
          </button>
        </div>
      </nav>

      <div
        className="nav__progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
    </header>
  );
}
