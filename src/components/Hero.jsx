import React from "react";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Technical Product Portfolio · {new Date().getFullYear()}</p>

          <h1 className="hero__title">
            Roman Mazuryk
          </h1>

          <p className="hero__subtitle">
            Technical Product Manager with deep MedTech & regulated B2B experience.
            I lead complex products from problem framing to delivery — aligning stakeholders,
            defining trade-offs, and shipping systems that work under real constraints.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View Case Studies
            </a>
            <a href="#about" className="btn btn--ghost">
              About My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
