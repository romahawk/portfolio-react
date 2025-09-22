import React from "react";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Portfolio / 2025</p>
          <h1 className="hero__title">Hi, I’m Roman Mazuryk</h1>
          <p className="hero__subtitle">
            MedTech expert pivoting to Software & Data—building practical, high-impact solutions.
          </p>
          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">View Projects</a>
            <a href="#about" className="btn btn--ghost">About Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
