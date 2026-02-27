import React, { useEffect, useState } from "react";
import { ChevronDown, Mail, Linkedin, Github, FileDown } from "lucide-react";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Technical Product Portfolio · {new Date().getFullYear()}</p>

          <h1 className="hero__title">
            Technical Product Manager &amp; Founder-Operator
          </h1>

          <p className="hero__subtitle">
            AI-Augmented SDLC for production-grade delivery in regulated industries.
            10+ years leading MedTech &amp; Pharma platforms — from $40M+ operations to
            full-stack system architecture. I make trade-offs explicit and delivery predictable.
          </p>

          <div className="hero__actions">
            <a href="#ai-sdlc" className="btn btn--primary">
              View AI-Augmented SDLC
            </a>
            <a href="#projects" className="btn btn--ghost">
              View Product Systems
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
            <a href="/roman-mazuryk-cv.pdf" download className="hero__social-link">
              <FileDown size={14} className="icon mr-1" /> Download CV
            </a>
          </div>
        </div>
      </div>

      <div className={`hero__scroll-hint ${scrolled ? "hero__scroll-hint--hidden" : ""}`} aria-hidden="true">
        <span>Scroll</span>
        <ChevronDown size={18} className="hero__scroll-hint-icon" />
      </div>
    </section>
  );
};

export default Hero;
