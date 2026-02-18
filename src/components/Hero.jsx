import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

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
            Technical Product Manager & Founder-Operator
          </h1>

          <p className="hero__subtitle">
            Building scalable systems in regulated industries.
            10+ years leading MedTech & Pharma platforms — from $40M+ operations oversight to
            full-stack product delivery.
            I bridge executive strategy with hands-on system architecture and delivery.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View Product Systems
            </a>
            <a href="https://www.linkedin.com/in/roman-mazuryk/" className="btn btn--ghost" target="_blank" rel="noreferrer">
              Connect on LinkedIn
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
