import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import ThemeSwitcher from "./ThemeSwitcher.jsx";
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import NavControls from "./NavControls.jsx";
import { useTranslation } from "../context/LangContext.jsx";

// 800px matches the CSS mobile breakpoint
const MOBILE_MQ = "(max-width: 800px)";

const IDS = [
  "results",
  "projects",
  "services",
  "framework",
  "about",
  "contact",
];

const SERVICES_PAGE_IDS = [
  "services",
  "services-overview",
  "service-details",
  "how-it-works",
  "proof",
  "book-call",
];

// tuning knobs
const VIEWPORT_ANCHOR = 0.32; // 32% down the viewport for deciding active section
const SWITCH_BUFFER = 24;     // px hysteresis to avoid flicker on boundaries

export default function Navbar({ themeMode, onThemeChange }) {
  const { t } = useTranslation();
  const isServicesPage =
    typeof window !== "undefined" && window.location.pathname.replace(/\/+$/, "") === "/services";
  const navIds = useMemo(() => (isServicesPage ? SERVICES_PAGE_IDS : IDS), [isServicesPage]);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(() => (isServicesPage ? SERVICES_PAGE_IDS[0] : "about"));
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.matchMedia(MOBILE_MQ).matches
  );

  const ticking = useRef(false);
  const sectionsRef = useRef([]);
  const navScrollRef = useRef(false);
  const navScrollTimeoutRef = useRef(null);

  const NAV_LABEL_KEYS = {
    results: "nav.results",
    projects: "nav.projects",
    services: "nav.services",
    framework: "nav.framework",
    about: "nav.about",
    contact: "nav.contact",
    "services-overview": "servicesPage.nav.overview",
    "service-details": "servicesPage.nav.details",
    "how-it-works": "servicesPage.nav.process",
    proof: "servicesPage.nav.proof",
    "book-call": "servicesPage.nav.book",
  };

  const getNavLabelKey = (id) =>
    isServicesPage && id === "services" ? "servicesPage.nav.hero" : NAV_LABEL_KEYS[id];

  const computeActive = useCallback(() => {
    const anchor = window.scrollY + window.innerHeight * VIEWPORT_ANCHOR;

    let current = navIds[0];
    for (const { id, top, bottom } of sectionsRef.current) {
      if (anchor >= top + SWITCH_BUFFER && anchor < bottom - SWITCH_BUFFER) {
        current = id;
        break;
      }
    }
    setActive((prev) => (prev !== current ? current : prev));
  }, [navIds]);

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
    [computeActive]
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

  useEffect(() => {
    setActive(navIds[0]);
    setTimeout(collectSections, 0);
  }, [collectSections, navIds]);

  return (
    <header className="site-header">
      <div
        className={`nav__backdrop ${isOpen ? "nav__backdrop--open" : ""}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
      <nav className="nav container">
        <a href={isServicesPage ? "#services" : "#home"} className="nav__logo" aria-label={t("nav.backToTop")} onClick={() => handleClick(isServicesPage ? "services" : "home")}>
          <span className="nav__logo-brace">{'{ }'}</span>
          <span className="nav__logo-text">ROMAZ</span>
          <span className="nav__logo-accent" />
        </a>

        <ul
          className={`nav__list ${isOpen ? "nav__list--open" : ""}`}
          aria-hidden={isMobile && !isOpen}
          inert={isMobile && !isOpen ? "" : undefined}
        >
          {navIds.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`nav__link ${active === id ? "nav__link--active" : ""}`}
                onClick={() => handleClick(id)}
              >
                {t(getNavLabelKey(id))}
              </a>
            </li>
          ))}
          {/* Language switcher inside mobile menu */}
          {isMobile && (
            <li className="nav__lang-mobile">
              <LanguageSwitcher />
            </li>
          )}
        </ul>

        <div className="nav__actions">
          {isMobile
            ? <ThemeSwitcher mode={themeMode} onChange={onThemeChange} />
            : <NavControls mode={themeMode} onThemeChange={onThemeChange} />
          }
          <button
            className={`nav__toggle ${isOpen ? "x" : ""}`}
            onClick={() => setIsOpen((p) => !p)}
            aria-label={t("nav.toggleNav")}
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
