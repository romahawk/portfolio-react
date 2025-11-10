import React from "react";

export default function MedintegroCaseStudy() {
  return (
    <div className="cs">
      <header className="cs__hero">
        <span className="cs__badge">Case Study • MedTech Web</span>
        <h1 className="cs__title">Medintegro Website Rebuild</h1>
        <p className="cs__lead">
          Headless, multilingual rebuild of a MedTech distributor website to improve UX, SEO, and future React pages.
        </p>
      </header>

      <div className="cs__card">
        <h2 className="cs__h2">Scope</h2>
        <ul className="cs__list">
          <li>React/Tailwind UI</li>
          <li>CMS integration (headless)</li>
          <li>DE/EN/UA content model</li>
          <li>Better structure for product lines</li>
        </ul>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Status</h2>
        <p className="cs__p">
          Currently in development — content modelling and CMS wiring in progress.
        </p>
      </div>
    </div>
  );
}
