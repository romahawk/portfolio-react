import React, { useState } from "react";
import CaseStudyLinks from "../CaseStudyLinks.jsx";

const sprints = [
  {
    id: 1,
    title: "Sprint 1 - Demo Mode Foundation",
    goals: [
      "Skip sign-in and land directly on the dashboard in demo mode",
      "Generate seeded application data on app load",
      "Make demo resets safe and intentional instead of hidden side effects",
      "Preserve a realistic product shell rather than a static showcase",
    ],
    outcome:
      "JobSprint became immediately explorable for portfolio viewers instead of asking them to understand setup before product value.",
    retro:
      "For a demo product, first-run friction is a product bug, not a minor onboarding inconvenience.",
  },
  {
    id: 2,
    title: "Sprint 2 - Shared Demo Data and KPI Integrity",
    goals: [
      "Unify dashboard and Job OS around one generated demo universe",
      "Audit KPI math and align conversion logic across cards and analytics",
      "Fix misleading response-rate behavior by treating rejected applications consistently",
      "Make weekly and funnel views use the same status semantics as the dashboard",
    ],
    outcome:
      "The dashboard stopped behaving like a disconnected veneer and became a trustworthy readout of the same underlying operational dataset.",
    retro:
      "Metrics only earn trust when every surface uses the same definitions; inconsistent status semantics are product debt.",
  },
  {
    id: 3,
    title: "Sprint 3 - Workflow Density and Layout Refinement",
    goals: [
      "Refit the application pipeline to the desktop viewport without horizontal scrolling",
      "Keep column density readable while preserving drag-and-drop workflow",
      "Clarify the difference between per-application offer probability and batch-level offer odds",
      "Expose sync state and demo notices without wasting core screen real estate",
    ],
    outcome:
      "The main dashboard became easier to scan, less visually noisy, and more legible as an execution surface.",
    retro:
      "In operational dashboards, spatial discipline matters as much as visual polish because clutter dilutes decision speed.",
  },
  {
    id: 4,
    title: "Sprint 4 - Guided Onboarding and Discoverability",
    goals: [
      "Add a product tour with spotlight overlays, anchored steps, and replay support",
      "Guide users across Dashboard, Analytics, and Job OS instead of one isolated screen",
      "Auto-start onboarding on first visit and support forced replay via query param",
      "Improve the tour card with better spacing, hierarchy, and gradient presentation",
    ],
    outcome:
      "JobSprint gained a self-explaining entry path that lowers cognitive load for first-time users and portfolio reviewers.",
    retro:
      "Good onboarding should not narrate every control; it should compress time-to-orientation for the user.",
  },
  {
    id: 5,
    title: "Sprint 5 - Navbar Information Architecture",
    goals: [
      "Move Job OS sync and identity details into the navbar as an icon-triggered tooltip",
      "Promote tour replay into a persistent Guide control",
      "Surface demo-state messaging in the navbar instead of inline warning blocks",
      "Keep the interface compact while preserving operational context",
    ],
    outcome:
      "The top bar evolved from basic navigation into a control layer that carries state, guidance, and demo-system context.",
    retro:
      "When state is important but secondary, the navbar is often the right compression layer instead of another page-level panel.",
  },
];

export default function JobSprintCaseStudy() {
  const [sprintsOpen, setSprintsOpen] = useState(false);

  return (
    <section className="cs">
      <header className="cs__hero">
        <span className="cs__badge">Case Study - Career Productivity (Demo Product)</span>
        <h1 className="cs__title">
          JobSprint - Job Search OS with Trustworthy Metrics and Guided UX
        </h1>
        <p className="cs__lead">
          A job-search execution system designed to make pipeline health, weekly
          output, and conversion probability visible in one workspace. Built as a
          demo-first product, JobSprint combines dashboard KPIs, an operational Job OS,
          and guided onboarding so first-time users can understand the workflow without setup friction.
        </p>
        <div className="cs__meta" aria-label="Case study highlights">
          <div className="cs__meta-item"><strong>Scope</strong> Demo-first workflow system</div>
          <div className="cs__meta-item"><strong>Focus</strong> KPI trust and onboarding clarity</div>
          <div className="cs__meta-item"><strong>Format</strong> Product case study with shipped sprints</div>
        </div>
      </header>

      <div id="founder-lens" className="cs__card cs__card--insight">
        <div className="cs__eyebrow">Strategic framing</div>
        <h2 className="cs__h2">Founder Lens</h2>
        <ul className="cs__list">
          <li>
            <strong>Product thesis</strong>: job search performance collapses when
            activity tracking, pipeline visibility, and execution discipline are
            split across notes, spreadsheets, and mental models; one operational
            layer makes the numbers visible and actionable.
          </li>
          <li>
            <strong>ICP + buyer/user</strong>: ambitious individual operators,
            career switchers, and coaches; buyers are self-serve users or advisors,
            primary users are candidates managing multi-role pipelines.
          </li>
          <li>
            <strong>Wedge + why now</strong>: start with personal execution clarity
            and conversion visibility at a time when search processes are longer,
            noisier, and increasingly metrics-driven.
          </li>
          <li>
            <strong>Moat</strong>: execution-focused workflow depth, unified job
            search operating model, and demo-safe product storytelling that still
            behaves like a real system.
          </li>
        </ul>
      </div>

      <div className="cs__grid cs__grid--two">
        <div id="problem-context" className="cs__card">
          <div className="cs__eyebrow">Problem space</div>
          <h2 className="cs__h2">Problem & Context</h2>
          <p className="cs__p">
            Most job seekers track applications in brittle spreadsheets and rely on
            intuition to understand whether the process is working. That makes it hard
            to answer simple questions like whether weekly output is improving, where
            the funnel is leaking, or what the probability of landing an offer actually is.
          </p>
        </div>
        <div className="cs__card cs__card--cool">
          <div className="cs__eyebrow">User map</div>
          <h2 className="cs__h2">Users / Stakeholders</h2>
          <ul className="cs__personas">
            <li>
              <div className="cs__persona-name">Independent Job Seeker</div>
              <div className="cs__persona-role">Primary operator</div>
              <p className="cs__p">
                Needs one place to manage applications, weekly discipline, and pipeline momentum.
              </p>
            </li>
            <li>
              <div className="cs__persona-name">Career Coach</div>
              <div className="cs__persona-role">Accountability partner</div>
              <p className="cs__p">
                Wants a client-facing system that makes execution quality and conversion gaps explicit.
              </p>
            </li>
            <li>
              <div className="cs__persona-name">Portfolio Reviewer / Investor</div>
              <div className="cs__persona-role">Product evaluator</div>
              <p className="cs__p">
                Needs a demo that feels real immediately, without setup friction or broken product logic.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div id="constraints" className="cs__card">
        <div className="cs__eyebrow">Delivery guardrails</div>
        <h2 className="cs__h2">Constraints</h2>
        <ul className="cs__list">
          <li>
            <strong>Demo realism</strong>: the product must feel live and coherent even when seeded with synthetic data.
          </li>
          <li>
            <strong>Metric trust</strong>: KPI cards, analytics, and probability models must use consistent status definitions.
          </li>
          <li>
            <strong>First-run clarity</strong>: users should understand the product without creating accounts or reading docs first.
          </li>
          <li>
            <strong>Density vs usability</strong>: the dashboard has to stay information-rich without collapsing into horizontal overflow or panel clutter.
          </li>
        </ul>
      </div>

      <div id="product-decisions" className="cs__card cs__card--warm">
        <div className="cs__eyebrow">Product bets</div>
        <h2 className="cs__h2">Key Product Decisions I Owned</h2>
        <ul className="cs__list">
          <li>
            Reframed the app as a <strong>demo-first product</strong> and removed the login gate so users land on value immediately.
          </li>
          <li>
            Unified the dashboard and Job OS around <strong>one generated demo universe</strong> instead of letting separate fake datasets drift apart.
          </li>
          <li>
            Audited and corrected <strong>KPI and conversion logic</strong> so the dashboard, analytics, and probability engine tell the same story.
          </li>
          <li>
            Treated onboarding as a <strong>product surface</strong>, not a help overlay, by building a replayable guided walkthrough across routes.
          </li>
          <li>
            Moved secondary system context into the <strong>navbar control layer</strong> to preserve page focus while keeping important state accessible.
          </li>
        </ul>
      </div>

      <div id="architecture" className="cs__card cs__card--cool">
        <div className="cs__eyebrow">System design</div>
        <h2 className="cs__h2">Architecture & Technical Leverage</h2>
        <ul className="cs__list">
          <li>
            <strong>Frontend</strong>: React + Vite with route-based workspace surfaces for Dashboard, Analytics, and Job OS.
          </li>
          <li>
            <strong>State model</strong>: shared app context for dashboard behavior plus a unified demo workspace generator to keep seeded data coherent across modules.
          </li>
          <li>
            <strong>Interaction layer</strong>: drag-and-drop application pipeline, tooltip-driven microcopy, and guided onboarding with spotlight positioning.
          </li>
          <li>
            <strong>Demo infrastructure</strong>: auto-bootstrapped demo session, refresh/reset regeneration, and replayable product tour with route-aware steps.
          </li>
          <li>
            <strong>Decision layer</strong>: KPI math, funnel analytics, weekly execution signals, and offer-probability modeling aligned to one status taxonomy.
          </li>
          <li>
            <strong>Extensibility path</strong>: architecture still leaves room for real auth, persistence, and deeper coaching or CRM-like workflows.
          </li>
        </ul>
      </div>

      <div id="roadmap" className="cs__card cs__card--interactive">
        <button
          className="cs__collapsible-header"
          onClick={() => setSprintsOpen((open) => !open)}
          aria-expanded={sprintsOpen}
        >
          <div className="cs__collapsible-copy">
            <div className="cs__eyebrow">Execution pacing</div>
            <h2 className="cs__h2">Execution Roadmap (Agile Sprints)</h2>
            <div className="cs__collapsible-helper">5 shipped iterations covering demo UX, KPI integrity, layout, onboarding, and navbar IA.</div>
          </div>
          <span className="cs__collapsible-arrow" aria-hidden="true">
            {sprintsOpen ? "Close" : "Open"}
          </span>
        </button>
        {sprintsOpen && (
          <div className="cs__grid cs__grid--two">
            {sprints.map((sprint) => (
              <article key={sprint.id} className="cs__sprint">
                <h3 className="cs__h3">{sprint.title}</h3>
                <div className="cs__sprint-sec">
                  <div className="cs__sprint-label">Goals</div>
                  <ul className="cs__list cs__list--compact">
                    {sprint.goals.map((goal, index) => (
                      <li key={index}>{goal}</li>
                    ))}
                  </ul>
                </div>
                <div className="cs__sprint-sec">
                  <div className="cs__sprint-label">Outcome</div>
                  <p className="cs__p">{sprint.outcome}</p>
                </div>
                <div className="cs__sprint-retro">Retro: {sprint.retro}</div>
              </article>
            ))}
          </div>
        )}
      </div>

      <div className="cs__grid cs__grid--two">
        <div id="outcomes" className="cs__card cs__card--success">
          <div className="cs__eyebrow">Business impact</div>
          <h2 className="cs__h2">Outcomes & Success Criteria</h2>
          <ul className="cs__list">
            <li>
              First-run experience became portfolio-safe and immediately explorable without sign-in friction.
            </li>
            <li>
              Dashboard KPIs, analytics charts, and Job OS operational data now reconcile against the same demo dataset.
            </li>
            <li>
              The application pipeline fits the desktop viewport cleanly without forced horizontal scroll.
            </li>
            <li>
              Guided onboarding now explains the system across routes instead of relying on the user to infer product structure.
            </li>
            <li>
              Navbar information architecture became cleaner by compressing sync identity and demo-system state into reusable controls.
            </li>
          </ul>
        </div>
        <div className="cs__card">
          <div className="cs__eyebrow">Ownership</div>
          <h2 className="cs__h2">My Role (Product Owner / Technical PM)</h2>
          <p className="cs__p">
            I owned the product narrative, workflow model, demo strategy, KPI integrity,
            and delivery sequencing. I used direct implementation to validate product
            decisions quickly: onboarding, seeded data behavior, dashboard density,
            metric definitions, and information architecture were all treated as product
            decisions, not just frontend polish.
          </p>
        </div>
      </div>

      <div id="gtm" className="cs__card cs__card--warm">
        <div className="cs__eyebrow">Commercial path</div>
        <h2 className="cs__h2">Business Model & GTM</h2>
        <ul className="cs__list">
          <li>
            <strong>Pricing models</strong>: freemium personal tier, premium solo plan, and coach/team workspace plans.
          </li>
          <li>
            <strong>First 5 customers plan</strong>: target job seekers with structured search goals and coaches who need accountability tooling for multiple clients.
          </li>
          <li>
            <strong>Why they buy</strong>: better execution visibility, stronger weekly discipline, and more trustworthy conversion feedback than generic trackers.
          </li>
          <li>
            <strong>How to close</strong>: founder-led demos, targeted content around search systems, and coach-led adoption through repeat workflow use.
          </li>
          <li>
            <strong>Sales cycle reality</strong>: the strongest wedge is self-serve product trust; users must feel immediate clarity before they consider habit change or paid upgrade.
          </li>
        </ul>
      </div>

      <CaseStudyLinks
        demoUrl="https://jobsprint-demo.vercel.app/"
        docs={[
          { label: "Repository", url: "https://github.com/romahawk/jobsprint-demo" },
        ]}
      />

      <footer className="cs__footer">
        <p className="cs__last-updated">Last updated: Mar 2026</p>
      </footer>
    </section>
  );
}
