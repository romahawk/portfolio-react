import React, { useEffect, useState } from "react";
import { ChevronDown, Mail, Linkedin, Github, FileDown } from "lucide-react";
import { useTranslation } from "../context/LangContext.jsx";

const Hero = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const headline = t("hero.headline");
  const [headlineLead, headlineTail] = headline.split("|").map((part) => part.trim());

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">{t("hero.eyebrow")}</p>

          <h1 className="hero__title">
            <span className="hero__title-lead">{headlineLead}</span>
            {headlineTail ? <span className="hero__title-tail">| {headlineTail}</span> : null}
          </h1>

          <p className="hero__subtitle">{t("hero.subtitle")}</p>

          <div className="hero__actions">
            <a href="#framework" className="btn btn--primary">
              {t("hero.ctaSDLC")}
            </a>
            <a href="#projects" className="btn btn--ghost">
              {t("hero.ctaProjects")}
            </a>
            <a href="mailto:romazuryk@proton.me" className="btn btn--ghost hero__email-cta">
              <Mail size={15} className="icon mr-1" />
              romazuryk@proton.me
            </a>
          </div>

          <div className="hero__social-row">
            <a href="https://www.linkedin.com/in/roman-mazuryk/" target="_blank" rel="noreferrer" className="hero__social-link">
              <Linkedin size={14} className="icon mr-1" /> LinkedIn
            </a>
            <span className="hero__social-sep" aria-hidden="true" />
            <a href="https://github.com/romahawk" target="_blank" rel="noreferrer" className="hero__social-link">
              <Github size={14} className="icon mr-1" /> GitHub
            </a>
            <span className="hero__social-sep" aria-hidden="true" />
            <a href="/roman-mazuryk-cv.pdf" download aria-label={t("hero.downloadCV")} className="hero__social-link">
              <FileDown size={14} className="icon mr-1" /> {t("hero.downloadCV")}
            </a>
          </div>
        </div>
      </div>

      <div className={`hero__scroll-hint ${scrolled ? "hero__scroll-hint--hidden" : ""}`} aria-hidden="true">
        <span>{t("hero.scroll")}</span>
        <ChevronDown size={18} className="hero__scroll-hint-icon" />
      </div>
    </section>
  );
};

export default Hero;
