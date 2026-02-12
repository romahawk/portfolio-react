import React from "react";
import CaseStudyLinks from "../CaseStudyLinks.jsx";

export default function MedintegroCaseStudy() {
  return (
    <div className="cs">
      <header className="cs__hero">
        <span className="cs__badge">Case Study • MedTech Web (In Progress)</span>
        <h1 className="cs__title">Medintegro — B2B Website Rebuild</h1>
        <p className="cs__lead">
          Product-led rebuild of a MedTech distributor website to improve clarity, structure, SEO,
          and multilingual scalability—designed for long-term maintainability and content ownership.
        </p>
      </header>

      <div className="cs__grid cs__grid--two">
        <div className="cs__card">
          <h2 className="cs__h2">Problem & Context</h2>
          <p className="cs__p">
            The existing site structure made it difficult to communicate complex product lines,
            keep content updated, and support multilingual expansion. This created friction for
            buyers and reduced discoverability (SEO) and trust.
          </p>
        </div>
        <div className="cs__card">
          <h2 className="cs__h2">Users / Stakeholders</h2>
          <ul className="cs__list">
            <li><strong>B2B buyers</strong> — need clear navigation and product understanding.</li>
            <li><strong>Sales team</strong> — needs editable content and consistent messaging.</li>
            <li><strong>Marketing</strong> — needs SEO structure and landing pages.</li>
            <li><strong>Future engineers</strong> — need maintainable architecture and content model.</li>
          </ul>
        </div>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Constraints</h2>
        <ul className="cs__list">
          <li><strong>Multilingual</strong>: DE/EN/UA content must be consistent and scalable.</li>
          <li><strong>Content ownership</strong>: non-technical updates via CMS without breaking structure.</li>
          <li><strong>SEO & accessibility</strong>: predictable routing, metadata, and readable content hierarchy.</li>
          <li><strong>Modularity</strong>: product lines must be composable (“content-as-code” + CMS later).</li>
        </ul>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Key Product Decisions I Owned</h2>
        <ul className="cs__list">
          <li>Chose a <strong>staged delivery</strong>: static structure → React/Next.js → CMS → multilingual expansion.</li>
          <li>Defined a <strong>content model</strong> that supports product categories, lines, and SKUs without duplication.</li>
          <li>Prioritized <strong>information architecture</strong> and navigation clarity over visual complexity.</li>
          <li>Designed for <strong>maintainability</strong> (modular components, consistent routing, reusable templates).</li>
        </ul>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Scope (In Progress)</h2>
        <ul className="cs__list">
          <li>Information architecture + modular UI components</li>
          <li>CMS integration (headless) for content ownership</li>
          <li>DE/EN/UA content model and routing</li>
          <li>SEO + accessibility baseline</li>
        </ul>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">Status</h2>
        <p className="cs__p">
          In development — content modeling and CMS wiring in progress. Current focus is on a stable
          structure that supports future content growth without rework.
        </p>
      </div>

      <div className="cs__card">
        <h2 className="cs__h2">My Role</h2>
        <p className="cs__p">
          Technical Product Manager: defined the rebuild strategy, content model, and delivery phases;
          aligned UX, SEO, and maintainability constraints; used hands-on implementation to validate the
          architecture and reduce ambiguity for future engineering work.
        </p>
      </div>

      <CaseStudyLinks />
    </div>
  );
}
