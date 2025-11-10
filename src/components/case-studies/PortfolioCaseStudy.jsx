import React from "react";

export default function PortfolioCaseStudy() {
  return (
    <div className="cs">
      <header className="cs__hero">
        <span className="cs__badge">Case Study • Portfolio</span>
        <h1 className="cs__title">Developer Portfolio Website</h1>
        <p className="cs__lead">
          A personal CV/portfolio site to demonstrate React skills, MedTech background, and a clean UI system.
        </p>
      </header>

      <div className="cs__card">
        <h2 className="cs__h2">Goals</h2>
        <ul className="cs__list">
          <li>Show transition from MedTech → Software & Data</li>
          <li>Reusable layout (Navbar, Hero, About, Timeline, Projects, Contact)</li>
          <li>Room for case studies and MedTech work</li>
        </ul>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Stack</h2>
        <p className="cs__p">React + Vite, custom CSS, lucide-react icons.</p>
      </div>
    </div>
  );
}
