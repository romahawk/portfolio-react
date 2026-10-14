import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import ThemeSwitcher from "./ThemeSwitcher.jsx";
import NavControls from "./NavControls.jsx";
import { identity, labels, nav, navServices } from "../content/site.js";

// 800px matches the CSS mobile breakpoint
const MOBILE_MQ = "(max-width: 800px)";

// tuning knobs
const VIEWPORT_ANCHOR = 0.32; // 32% down the viewport for deciding active section
const SWITCH_BUFFER = 24;     // px hysteresis to avoid flicker on boundaries

function currentPath() {
  if (typeof window === "undefined") return "/";
  return window.location.pathname.replace(/\/+$/, "") || "/";
}

export default function Navbar({ themeMode, onThemeChange }) {
  const path = currentPath();
  const isHome = path === "/";
  // Header nav is Work · About · AI · Contact. The Services link appears only on /services
  // itself; everywhere else Consulting is reachable from the footer.
  const isServicesPage = path === navServices.href;
  // Anchors scroll on the landing page and link back to it from every other page.
  const navIds = useMemo(() => (isHome ? nav.filter((item) => item.id).map((item) => item.id) : []), [isHome]);
  // Exception: on /services, Contact points to that page's own #contact section, because the
  // landing page's contact block is written for recruiters. It is not highlighted on scroll,
  // so Services stays the only active item there.
  const isLocal = (id) => isHome || (isServicesPage && id === "contact");

  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.matchMedia(MOBILE_MQ).matches
  );

  const ticking = useRef(false);
  const sectionsRef = useRef([]);
  const navScrollRef = useRef(false);
  const navScrollTimeoutRef = useRef(null);

  const computeActive = useCallback(() => {
    const anchor = window.scrollY + window.innerHeight * VIEWPORT_ANCHOR;

    let current = "";
    for (const { id, top, bottom } of sectionsRef.current) {
      if (anchor >= top + SWITCH_BUFFER && anchor < bottom - SWITCH_BUFFER) {
        current = id;
        break;
      }
    }
    setActive((prev) => (prev !== current ? current : prev));
  }, []);

  const onScroll = useCallback(() => {
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

  const collectSections = useCallback(() => {
    const results = [];
    for (const id of navIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const bottom = top + el.offsetHeight;
      results.push({ id, top, bottom });
    }
    sectionsRef.current = results;
    computeActive();
  }, [computeActive, navIds]);

  const handleClick = useCallback(
    (id) => {
      setIsOpen(false);
      if (!isHome) return;
      setActive(id);

      if (navScrollTimeoutRef.current) {
        clearTimeout(navScrollTimeoutRef.current);
      }

      navScrollRef.current = true;
      navScrollTimeoutRef.current = setTimeout(() => {
        navScrollRef.current = false;
        computeActive();
      }, 700);
    },
    [computeActive, isHome]
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(MOBILE_MQ);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === "Escape") setIsOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    collectSections();

    const onHashChange = () => setTimeout(collectSections, 50);
    const onLoad = () => setTimeout(collectSections, 0);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", collectSections);
    window.addEventListener("orientationchange", collectSections);
    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", collectSections);
      window.removeEventListener("orientationchange", collectSections);
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("load", onLoad);
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
      <nav className="nav container" aria-label="Main">
        <a href={isHome ? "#top" : "/"} className="nav__logo" aria-label={`${identity.name} home`} onClick={() => handleClick("top")}>
          <img src="/images/rm-logo.png" alt={identity.name} className="nav__logo-img" />
        </a>

        <ul
          className={`nav__list ${isOpen ? "nav__list--open" : ""}`}
          inert={isMobile && !isOpen ? "" : undefined}
        >
          {nav.map(({ id, href, label }) => (
            <li key={id || href}>
              {id ? (
                <a
                  href={isLocal(id) ? `#${id}` : `/#${id}`}
                  className={`nav__link ${isHome && active === id ? "nav__link--active" : ""}`}
                  aria-current={isHome && active === id ? "location" : undefined}
                  onClick={() => handleClick(id)}
                >
                  {label}
                </a>
              ) : (
                <a
                  href={href}
                  className={`nav__link ${path === href ? "nav__link--active" : ""}`}
                  aria-current={path === href ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </a>
              )}
            </li>
          ))}
          {isServicesPage ? (
            <li>
              <a
                href={navServices.href}
                className="nav__link nav__link--active"
                aria-current="page"
                onClick={() => setIsOpen(false)}
              >
                {navServices.label}
              </a>
            </li>
          ) : null}
        </ul>

        <div className="nav__actions">
          {isServicesPage ? (
            <a href={navServices.bookCall.href} className="btn btn--primary nav__book-cta">
              {navServices.bookCall.label}
            </a>
          ) : null}
          {isMobile
            ? <ThemeSwitcher mode={themeMode} onChange={onThemeChange} />
            : <NavControls mode={themeMode} onThemeChange={onThemeChange} />
          }
          <button
            className={`nav__toggle ${isOpen ? "x" : ""}`}
            onClick={() => setIsOpen((p) => !p)}
            aria-label={labels.toggleNav}
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
