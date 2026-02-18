import { useEffect, useRef, useState, useCallback } from "react";

const IDS = ["home", "about", "timeline", "skills", "projects", "certifications", "contact"];

// tuning knobs
const VIEWPORT_ANCHOR = 0.32; // 32% down the viewport for deciding active section
const SWITCH_BUFFER = 24;     // px hysteresis to avoid flicker on boundaries

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

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
        <div className="nav__logo">
          <span className="nav__logo-brace">{'{ }'}</span>
          <span className="nav__logo-text">ROMAZ</span>
          <span className="nav__logo-accent" />
        </div>

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

        <ul className={`nav__list ${isOpen ? "nav__list--open" : ""}`}>
          {IDS.slice(0, -1).map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`nav__link ${active === id ? "nav__link--active" : ""}`}
                onClick={() => handleClick(id)}
              >
                {id[0].toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className={`nav__cta ${active === "contact" ? "nav__cta--active" : ""}`}
              onClick={() => handleClick("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
