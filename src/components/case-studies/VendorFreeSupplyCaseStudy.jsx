import React from "react";

export default function VendorFreeSupplyCaseStudy() {
  return (
    <article className="cs">
      <header className="cs__hero">
        <p className="cs__eyebrow">Operations Workflow System</p>
        <h1 className="cs__title">Vendor-Free Supply Tracker</h1>
        <p className="cs__subtitle">
          Logistics and stock reporting workflow system for purchase orders,
          warehouse intake, delivered goods, and stock reporting.
        </p>
      </header>

      <div id="founder-lens" data-cs-section="founder-lens" className="cs__card cs__card--insight">
        <h2>Founder Lens</h2>
        <p>
          The work focused on turning operational movement into clear product
          primitives: orders, statuses, stock events, reporting views, and
          handoff rules.
        </p>
      </div>

      <div id="problem-context" data-cs-section="problem-context" className="cs__card">
        <h2>Problem & Context</h2>
        <p>
          Purchase orders, warehouse intake, delivered goods, and stock reports
          can drift when the workflow depends on spreadsheets, manual updates,
          and person-specific knowledge.
        </p>
      </div>

      <div id="constraints" data-cs-section="constraints" className="cs__card">
        <h2>Constraints</h2>
        <ul>
          <li>Operations needed reliable status visibility without overbuilding.</li>
          <li>Reporting logic had to match real warehouse and supply behavior.</li>
          <li>Data structures needed to support future SQL-based workflow logic.</li>
        </ul>
      </div>

      <div id="product-decisions" data-cs-section="product-decisions" className="cs__card cs__card--warm">
        <h2>Key Decisions</h2>
        <ul>
          <li>Separate PO lifecycle, warehouse events, delivered-goods states, and stock reporting.</li>
          <li>Define explicit status transitions instead of relying on free-text updates.</li>
          <li>Translate operational reporting needs into acceptance criteria and schema logic.</li>
        </ul>
      </div>

      <div id="architecture" data-cs-section="architecture" className="cs__card cs__card--cool">
        <h2>Architecture</h2>
        <p>
          The system model centered on supply objects, lifecycle transitions,
          stock movement, reporting fields, and role-specific views. The output
          was designed to be implementation-ready for SQL-backed internal tools.
        </p>
      </div>

      <div id="roadmap" data-cs-section="roadmap" className="cs__card cs__card--interactive">
        <h2>Roadmap</h2>
        <ol>
          <li>Map current spreadsheet and reporting workflow.</li>
          <li>Define lifecycle states, fields, exceptions, and reporting outputs.</li>
          <li>Prepare implementation handover for dashboard or internal tool build.</li>
        </ol>
      </div>

      <div id="outcomes" data-cs-section="outcomes" className="cs__card cs__card--success">
        <h2>Outcomes</h2>
        <p>
          The proof shows workflow analysis, operations data modeling, and
          product translation from messy supply coordination into a clearer,
          auditable reporting system.
        </p>
      </div>

      <div id="gtm" data-cs-section="gtm" className="cs__card cs__card--warm">
        <h2>Business Model</h2>
        <p>
          The same pattern applies to B2B operations teams that need less
          spreadsheet drift, cleaner accountability, and faster reporting from
          existing operational workflows.
        </p>
      </div>
    </article>
  );
}
