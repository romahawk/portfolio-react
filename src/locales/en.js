// src/locales/en.js
export default {
  nav: {
    results: "Results",
    projects: "Projects",
    services: "Skills",
    framework: "Framework",
    about: "About",
    contact: "Contact",
    toggleNav: "Toggle navigation",
    backToTop: "Back to top",
  },

  results: {
    title: "Results",
    intro: "10+ years of delivery evidence across regulated industries and multi-domain product systems.",
    tiles: [
      { metric: "10+ Years", label: "Product & Systems Leadership in regulated industries." },
      { metric: "$50M+", label: "Annual turnover managed under executive leadership." },
      { metric: "Full-Stack", label: "Architecting systems via AI-augmented SDLC." },
      { metric: "4+ Domains", label: "MedTech, Pharma, Logistics, and B2B SaaS expertise." },
      { metric: "AI-Native", label: "10x delivery velocity through agentic orchestration." },
    ],
  },

  hero: {
    eyebrow: "TECHNICAL PRODUCT PORTFOLIO",
    headline: "Technical Product Manager | Systems & AI Automation",
    subtitle:
      "Replacing operational chaos with scalable, AI-powered systems. 10+ years of domain expertise in MedTech & Pharma, managing $50M+ annual turnover. I bridge the gap between executive strategy and rapid technical delivery using an AI-orchestrated SDLC.",
    ctaSDLC: "How I Build (AI-Stack)",
    ctaProjects: "Explore Shipped Systems",
    downloadCV: "Download CV",
    scroll: "Scroll",
  },

  servicesPage: {
    nav: {
      hero: "Services",
      overview: "Overview",
      details: "Details",
      process: "Process",
      proof: "Proof",
      book: "Book",
    },
    cta: {
      book: "Book a Call",
      how: "See how it works",
      diagnosis: "Start with a Friction Diagnosis",
      viewSystems: "View systems",
    },
    hero: {
      eyebrow: "Productized systems",
      title: "Simple systems that generate leads and save time — built fast",
      subtitle:
        "We design and ship focused web, workflow, and automation systems for teams that need clearer demand, cleaner operations, and faster execution.",
      panelLabel: "Services delivery signals",
      signals: [
        { label: "Start point", value: "One concrete business problem" },
        { label: "Build style", value: "Lean, scoped, launch-ready" },
        { label: "Best fit", value: "B2B, operations, regulated teams" },
      ],
    },
    friction: {
      kicker: "Start with the bottleneck",
      title: "Business friction usually shows up before a team knows which tool it needs",
      intro:
        "The work starts by locating where the business is losing qualified inquiries, time, or decision clarity. Then we install the smallest system that produces a measurable improvement.",
    },
    frictionPoints: [
      {
        icon: "LineChart",
        title: "Lead friction",
        text: "The website gets visits, but the offer is unclear, trust is weak, or inquiries are not qualified.",
      },
      {
        icon: "BarChart3",
        title: "Operational drag",
        text: "Work is tracked across spreadsheets, inboxes, and disconnected tools, so status takes too long to see.",
      },
      {
        icon: "Bot",
        title: "Manual repetition",
        text: "The same admin and follow-up tasks keep happening every week without a simple system behind them.",
      },
      {
        icon: "Gauge",
        title: "Conversion leakage",
        text: "People show interest, but pages, CTAs, or booking flows create hesitation before action happens.",
      },
    ],
    diagnosisOffer: {
      kicker: "Start here",
      title: "Friction Diagnosis Sprint",
      copy:
        "Not sure whether your biggest problem is leads, conversion, manual work, or operational visibility? We start with a focused diagnosis to identify the highest-impact bottlenecks and map the fastest path to improvement.",
      timeline: "3-5 days",
      outputs: [
        "Top 3 friction points",
        "ROI-ranked improvement opportunities",
        "Recommended system path",
        "Clear implementation roadmap",
      ],
      cta: "Book a diagnosis",
    },
    systemsIntro: {
      kicker: "Recommended systems",
      title: "Choose the system that changes the business output",
      intro:
        "These are not isolated websites or dashboards. Each system is scoped to remove a bottleneck and create a clearer operational result.",
    },
    systems: [
      {
        id: "lead-generation-system",
        icon: "LineChart",
        title: "Lead Generation System",
        purpose: "For businesses that need more qualified inquiries.",
        recommendedWhen: "Weak pipeline, unclear offer, low-trust pages",
        includes: [
          "Positioning and messaging",
          "Conversion-focused landing page",
          "CTA and booking flow",
          "Trust elements",
          "Basic tracking setup",
        ],
        timeline: "7 days",
        outcome: "Clearer offer, stronger trust, more qualified calls.",
      },
      {
        id: "operations-visibility-system",
        icon: "BarChart3",
        title: "Operations Visibility System",
        purpose: "For teams managing work through spreadsheets, email, or disconnected tools.",
        recommendedWhen: "Status chasing, spreadsheet drift, unclear accountability",
        includes: [
          "Workflow mapping",
          "Status dashboard",
          "Bottleneck visibility",
          "Role-based views if needed",
          "Simple reporting layer",
        ],
        timeline: "2-3 weeks",
        outcome: "Less spreadsheet drift, faster decisions, clearer accountability.",
      },
      {
        id: "automation-leverage-system",
        icon: "Bot",
        title: "Automation Leverage System",
        purpose: "For repetitive manual work that can be safely reduced or structured.",
        recommendedWhen: "Weekly repetition, handoff delays, unclear automation priorities",
        includes: [
          "Process audit",
          "Data flow mapping",
          "Automation opportunity ranking",
          "AI/tool recommendations",
          "Implementation roadmap",
        ],
        timeline: "3-5 days",
        outcome: "Prioritized automation roadmap with realistic next steps.",
      },
      {
        id: "conversion-optimization-system",
        icon: "Gauge",
        title: "Conversion Optimization System",
        purpose: "For websites or funnels that already have some traffic but weak conversion.",
        recommendedWhen: "Traffic exists, but visitors hesitate or drop off",
        includes: [
          "Messaging audit",
          "CTA structure",
          "Page flow improvements",
          "Trust and objection handling",
          "Before/after recommendations",
        ],
        timeline: "5-10 days",
        outcome: "Sharper conversion path without a full rebuild.",
      },
    ],
    labels: {
      timeline: "Timeline",
      output: "Output",
      includes: "Includes",
      outcome: "Outcome",
      recommendedWhen: "Recommended when",
    },
    overview: {
      kicker: "Services",
      title: "Pick the system that removes the most friction",
      intro:
        "Each offer is scoped around a visible outcome: more qualified leads, less manual work, sharper conversion, or a faster automation roadmap.",
      items: [
        {
          id: "lead-generation-website",
          icon: "LineChart",
          title: "Lead Generation Website",
          description: "A focused website that explains the offer, builds trust, and turns visitors into booked calls.",
          timeline: "7 days",
          outcome: "Clear positioning and a stronger call pipeline",
        },
        {
          id: "workflow-dashboard",
          icon: "BarChart3",
          title: "Workflow / Operations Dashboard",
          description: "A practical dashboard for tracking work, handoffs, status, and operational bottlenecks.",
          timeline: "2-3 weeks",
          outcome: "Less spreadsheet drift and faster decisions",
        },
        {
          id: "ai-automation-audit",
          icon: "Bot",
          title: "AI & Automation Audit",
          description: "A fast scan of repetitive work, data flows, and where automation can safely create leverage.",
          timeline: "3-5 days",
          outcome: "Prioritized automation roadmap with next steps",
        },
        {
          id: "conversion-optimization-sprint",
          icon: "Gauge",
          title: "Conversion Optimization Sprint",
          description: "A focused sprint to improve messaging, flows, CTAs, and page structure where intent already exists.",
          timeline: "5-10 days",
          outcome: "Sharper conversion path without a full rebuild",
        },
      ],
    },
    details: {
      kicker: "Detail",
      title: "What each service actually delivers",
      expectedLabel: "Expected result",
      items: [
        {
          id: "lead-generation-website",
          icon: "LineChart",
          title: "Lead Generation Website",
          timeline: "7 days",
          expected: "A live, credible page that makes the offer obvious and gives visitors one clear next step.",
          blocks: [
            { label: "Problem", items: ["Visitors do not understand the offer fast enough", "Trust signals are scattered", "Calls depend on referrals only"] },
            { label: "What we do", items: ["Clarify positioning and page flow", "Build responsive page sections", "Connect CTA and inquiry path"] },
            { label: "What you get", items: ["Live website or landing page", "Conversion-focused copy structure", "Analytics-ready CTA path"] },
            { label: "Timeline", items: ["Day 1 audit and structure", "Days 2-6 build", "Day 7 launch pass"] },
          ],
        },
        {
          id: "workflow-dashboard",
          icon: "BarChart3",
          title: "Workflow / Operations Dashboard",
          timeline: "2-3 weeks",
          expected: "A single operational view that reduces status chasing and makes handoffs visible.",
          blocks: [
            { label: "Problem", items: ["Work lives across tools", "Manual reporting slows decisions", "Ownership is unclear"] },
            { label: "What we do", items: ["Map the workflow", "Define roles, states, and data points", "Build a usable dashboard"] },
            { label: "What you get", items: ["Dashboard prototype or live internal tool", "Workflow logic and status model", "Clean handoff documentation"] },
            { label: "Timeline", items: ["Week 1 model and prototype", "Week 2 build", "Optional week 3 hardening"] },
          ],
        },
        {
          id: "ai-automation-audit",
          icon: "Bot",
          title: "AI & Automation Audit",
          timeline: "3-5 days",
          expected: "A short list of automation opportunities ranked by value, risk, and implementation effort.",
          blocks: [
            { label: "Problem", items: ["AI ideas are vague", "Manual tasks repeat every week", "Risk is hard to judge"] },
            { label: "What we do", items: ["Review workflows and data inputs", "Identify safe automation candidates", "Estimate effort and constraints"] },
            { label: "What you get", items: ["Automation opportunity map", "Pilot recommendation", "Prompt and tooling direction"] },
            { label: "Timeline", items: ["Kickoff and access review", "Workflow scan", "Roadmap handover"] },
          ],
        },
        {
          id: "conversion-optimization-sprint",
          icon: "Gauge",
          title: "Conversion Optimization Sprint",
          timeline: "5-10 days",
          expected: "A cleaner conversion path that reduces hesitation and moves qualified visitors toward action.",
          blocks: [
            { label: "Problem", items: ["Traffic exists but intent leaks", "CTAs compete with each other", "Messaging feels generic"] },
            { label: "What we do", items: ["Audit hierarchy and friction", "Rewrite key sections", "Improve CTA placement and flow"] },
            { label: "What you get", items: ["Prioritized conversion fixes", "Updated page sections", "Measurement checklist"] },
            { label: "Timeline", items: ["Fast audit", "Copy and UI update", "Launch review"] },
          ],
        },
      ],
    },
    process: {
      kicker: "How we work",
      title: "A small system before a big commitment",
      intro:
        "The page follows the same operating logic as the work itself: diagnose the bottleneck, install the right system, then measure whether friction actually went down.",
      steps: [
        {
          icon: "SearchCheck",
          title: "Quick Audit",
          desc: "We identify one clear bottleneck in your workflow or website.",
        },
        {
          icon: "Settings2",
          title: "Fast Build",
          desc: "We implement a simple, working solution in 5-10 days.",
        },
        {
          icon: "Rocket",
          title: "Launch & Improve",
          desc: "You start using it immediately and we refine based on results.",
        },
      ],
    },
    processSteps: [
      {
        icon: "SearchCheck",
        title: "Step 1 - Diagnose friction",
        text: "Identify where the business loses leads, time, or decision clarity.",
      },
      {
        icon: "Settings2",
        title: "Step 2 - Install the right system",
        text: "Build the focused solution: landing page, dashboard, automation map, or conversion system.",
      },
      {
        icon: "Rocket",
        title: "Step 3 - Measure and improve",
        text: "Track the output and refine the system based on real usage.",
      },
    ],
    router: {
      kicker: "Decision router",
      title: "Which system do you need?",
      intro:
        "If the tool choice is unclear, start from the business problem instead of the deliverable.",
    },
    decisionRouterItems: [
      {
        problem: "We do not get enough qualified inquiries",
        system: "Lead Generation System",
      },
      {
        problem: "We manage too much through spreadsheets",
        system: "Operations Visibility System",
      },
      {
        problem: "We repeat the same manual tasks every week",
        system: "Automation Leverage System",
      },
      {
        problem: "People visit but do not convert",
        system: "Conversion Optimization System",
      },
      {
        problem: "We are not sure",
        system: "Friction Diagnosis Sprint",
      },
    ],
    proof: {
      kicker: "Context",
      title: "Systems built from real operations, not agency guesswork",
      text:
        "I design systems from the operator’s perspective — where workflows break, decisions stall, and time is lost. Each build is scoped to remove friction and create measurable leverage in daily operations.",
      note:
        "Based on operator-side delivery experience and workflow analysis.",
      stats: [
        { value: "10+ years", label: "MedTech, Logistics, FinTech delivery" },
        { value: "$40M+", label: "operations managed / supported" },
        { value: "5+ systems", label: "shipped in real environments" },
        { value: "30 – 50%", label: "manual work reduction potential" },
      ],
    },
    credibility: {
      kicker: "Built as a repeatable delivery system",
      title: "Built as a repeatable delivery system",
      text:
        "The method is simple on purpose: diagnose before building, focus on business output, use the simplest stack that works, and leave the client with a system that can be repeated or improved.",
      points: [
        "Diagnose before building.",
        "Focus on business output, not decoration.",
        "Use simple tools before complex automation.",
        "Deliver fast, measurable improvements.",
        "Document the system so it can be repeated or improved.",
      ],
    },
    trust: {
      kicker: "Trust",
      title: "Built from the operator side",
      text:
        "Before design or code, I map how the work actually happens: where decisions stall, where handoffs break, and where time is lost.",
      text2:
        "Then I scope the smallest system that can create visible leverage — faster clarity, cleaner execution, or measurable time savings.",
    },
    note: {
      kicker: "Trust",
      title: "Small note from Roman",
      text:
        "I build from the operator side first. Before design or code, I look for the workflow logic, the decision points, and the smallest system that can create visible leverage.",
    },
    final: {
      kicker: "Next step",
      title: "Let’s fix one problem first",
      text:
        "Bring one bottleneck: weak lead flow, manual reporting, unclear conversion, or an automation idea that needs structure. We will turn it into a small pilot.",
      secondary: "Start with a small pilot",
      primaryCta: "Book a Friction Diagnosis",
      secondaryCta: "Contact me",
    },
  },

  about: {
    title: "About",
    eyebrow: "Bridging $50M+ Operational Scale with AI-Orchestrated Delivery.",
    heading: "Technical Product Manager | Systems & AI Automation",
    profileAlt: "Roman Mazuryk profile",
    para1:
      "With 10+ years leading MedTech and regulated B2B delivery, I operate at the intersection of Product Strategy and AI-Augmented Architecture. I specialize in turning ambiguous, high-compliance constraints into predictable systems — leveraging my experience managing $50M+ operations to bridge the gap between business P&L and technical execution.",
    para2:
      "My operating model is decision compression. I use AI as a tool for systemic speed, not as a coding shortcut. The goal is to compress ambiguity into auditable execution and move from requirement to production-grade outcome with fewer handoffs, clearer trade-offs, and stronger delivery control.",
    pillars: {
      strategy: {
        title: "Strategy",
        text: "Max 3 active workstreams. Focused on outcome-velocity over feature-volume.",
      },
      architecture: {
        title: "Architecture",
        text: "Rigorous system validation before a single line of code is committed.",
      },
      execution: {
        title: "Execution",
        text: "Small, daily deployments. If it isn\u2019t in production, it hasn\u2019t solved the problem yet.",
      },
    },
    operatingModel: {
      eyebrow: "Operating model",
      heading: "My Operating Model: Decision Compression",
      text:
        "I reduce organizational drag by translating complex operational needs into lean system primitives. By utilizing AI-agentic workflows (Cursor, ClaudeCode), I compress the distance between a business requirement and a production-grade system, ensuring that delivery is not just fast, but auditable and impactful.",
      principles: {
        strategy: {
          label: "Strategy:",
          text: "Max 3 active workstreams. Focused on outcome-velocity over feature-volume.",
        },
        architecture: {
          label: "Architecture:",
          text: "Rigorous system validation before a single line of code is committed.",
        },
        execution: {
          label: "Execution:",
          text: "Small, daily deployments. If it is not in production, it has not solved the problem yet.",
        },
      },
      cta: "Explore the AI Production OS",
    },
    bestFit: {
      eyebrow: "Best-fit environment",
      heading: "Where I Operate Best",
      para1:
        "Designed for remote-first, English-first agile environments targeting EU and global B2B SaaS. This workflow performs best where technical ambiguity is high, execution speed matters, and leadership needs clear control across product, engineering, and operations.",
      para2:
        "I collaborate directly with engineering on architecture while aligning leadership on the trade-offs that drive speed, reliability, and long-term leverage. In regulated MedTech and Pharma contexts, auditability is the differentiator: Micro-Scope, explicit acceptance criteria, and AI-supported documentation create traceability without slowing delivery.",
      para3: "Systems ownership end-to-end: from ambiguity to shipped operational impact.",
    },
    outside: {
      eyebrow: "Outside the platform",
      heading: "Outside the Platform",
      basketball: "systems thinking applied to team dynamics.",
      training: "feedback loops compound over time.",
      travel: "pattern recognition across environments.",
      quote:
        "\u201CSome people want it to happen, some wish it would happen, others make it happen.\u201D",
      quoteAttrib: "- Michael Jordan",
    },
  },

  aiSdlc: {
    title: "AI-Augmented SDLC",
    intro:
      "An executive-control operating model for production-grade delivery. AI handles leverage, scaffolding, and signal synthesis; human judgment owns architecture, trade-offs, and release quality. Built for high-velocity teams shipping in EU/global B2B SaaS and regulated environments where auditability cannot slow execution.",
    badge1: "Remote-First Architecture",
    badge2: "MedTech / Pharma Auditability",
    badge3: "EU / Global Market Ready",
    badge4: "FinTech / Blockchain Ready",
    cta: "See the workflow in action",
    strategy: {
      heading: "Strategy & Governance",
      p1label: "Operating Rules:",
      p1text:
        "max 3 active projects, one outcome per week, and a strict \u201CNo refactor without shipping impact\u201D policy. Scope is a decision, not a backlog.",
      p2label: "Decision Logs",
      p2text:
        "capture trade-off rationale, accepted risk, and system implications to compound long-term leverage across releases. Every architectural decision has a record \u2014 no institutional knowledge locked in Slack threads.",
      p3label: "Compliance Edge:",
      p3text:
        "In regulated MedTech/Pharma environments, explicit Operating Rules and Decision Logs satisfy audit requirements without adding delivery overhead. Governance is an automated byproduct of the workflow, not a manual overhead.",
    },
    buildLoop: {
      heading: "The Daily Build Loop",
      p1label: "Micro-Scope execution:",
      p1text:
        "select a GitHub issue, define acceptance criteria and data schemas before touching code, then implement through small daily PRs. Scope is locked at issue-open \u2014 protecting scope integrity and predictable velocity.",
      p2label: "Architectural Gate & Risk Assessment",
      p2text:
        "is a hard gate before every implementation: architecture logic, state transitions, and edge cases are validated by the architect before work moves into Cursor and ClaudeCode for architect-led implementation. The model layer handles AI-assisted scaffolding; the human layer verifies architecture, constraints, and production readiness.",
      p3label: "Auditability in regulated contexts:",
      p3text:
        "Micro-Scope plus explicit acceptance criteria provides a traceable paper trail for MedTech/Pharma delivery without slowing cadence. Each PR maps directly to a scoped requirement, with AI-assisted scaffolding and human-verified architecture preserving executive control over what ships.",
    },
    hardening: {
      heading: "The Production Hardening Stack",
      lighthouse: "performance baselines and release gating. Score regression blocks merge.",
      sentry: "runtime error visibility and failure triage with environment-scoped alerting.",
      posthog: "usage analytics and post-release signal tracking to validate delivery impact.",
      aiObservability:
        "using LLMs to synthesize Sentry logs and PostHog signals into actionable product iterations, so teams move from noise to prioritized decisions faster.",
      aiReview:
        "are a standard implementation gate before merge, alongside human approval on architecture-critical changes. Every PR passes automated AI-quality gates, ensuring that human ingenuity is spent on solving business problems, not debugging boilerplate.",
    },
  },

  skills: {
    title: "Skills & Leverage",
    statement:
      "I use code as a leverage tool to validate system boundaries, clarify trade-offs, and accelerate production delivery \u2014",
    statementEm: "not as an end in itself.",
    pillars: {
      "product-systems-leadership": {
        title: "Product Systems Leadership",
        cards: [
          {
            title: "Systems & Platform Thinking",
            items: [
              "Translate operational workflows into product primitives: roles, states, permissions, and handoffs",
              "Define data models, APIs, and integration boundaries with auditability and compliance-by-design",
              "Drive explicit trade-offs: build vs buy, speed vs reliability, MVP vs long-term maintainability",
            ],
          },
          {
            title: "Product Leadership",
            items: [
              "Frame ambiguous problems into clear outcomes and executable product scope",
              "Lead roadmap and prioritization decisions across product, engineering, and operations",
              "Operate pragmatic Scrum/Kanban cadences; control scope, map dependencies, and sequence releases for predictable execution",
            ],
          },
          {
            title: "Stakeholder Leadership",
            items: [
              "Align executives and delivery teams around trade-offs, timelines, and measurable outcomes",
              "Facilitate workshops, requirements interviews, and decision sessions with clear ownership",
              "Write crisp artifacts: PRDs, specs, ADRs, and operating updates",
            ],
          },
        ],
      },
      "technical-leverage": {
        title: "Technical Leverage",
        cards: [
          {
            title: "AI-Accelerated Product Ops",
            items: [
              "Use LLM workflows for faster prototyping, documentation, and architecture exploration",
              "Build reusable prompting patterns for repeatable specs, audits, and delivery artifacts",
              "Reduce manual coordination through automation and cleaner interface contracts",
            ],
          },
          {
            title: "Rapid Prototyping & Validation",
            items: [
              "Prototype high-risk paths early: workflows, permissions, data integrity, and UX logic",
              "Use constraint-driven MVP slicing to validate assumptions before scaling",
              "Ship small increments, validate quickly, and evolve system boundaries intentionally",
            ],
          },
          {
            title: "Core Engine & Stack",
            items: [
              "React, JavaScript, Python (Flask/FastAPI), and Node.js for production web systems and service prototypes",
              "PostgreSQL, Firebase, REST APIs, and role-based access control for operational data modeling",
              "Git/GitHub, Docker, Vercel; Mermaid for architecture diagrams; Linear/Jira for delivery governance",
            ],
          },
        ],
      },
      "operating-edge": {
        title: "Operating Edge",
        cards: [
          {
            title: "Regulated Domain Advantage",
            items: [
              "MedTech and Pharma execution advantage: build for environments where uptime, auditability, and safety are non-negotiable",
              "Micro-Scope control and explicit acceptance criteria keep delivery traceable for regulated SDLC requirements",
              "14+ years navigating compliance-heavy procurement, clinical, and logistics workflows",
            ],
          },
          {
            title: "Ownership & Operator Mindset",
            items: [
              "Own delivery end-to-end: from problem framing through deployment and operational impact",
              "Use structured loops \u2014 constraints \u2192 model \u2192 decision \u2192 iteration \u2014 to convert ambiguity into execution",
              "Stay accountable for system outcomes, not output volume; maintain calm delivery under high-stakes constraints",
            ],
          },
        ],
      },
    },
  },

  projects: {
    title: "Product Systems",
    tabs: {
      tech: "Product Systems",
      medtech: "Regulated Systems Delivery",
    },
    filters: {
      All: "All",
      "Workflow Systems": "Workflow Systems",
      "Decision Support": "Decision Support",
      "Real-Time Systems": "Real-Time Systems",
      "Internal Tools": "Internal Tools",
      "Trading Systems": "Trading Systems",
      FinTech: "FinTech",
      Productivity: "Productivity",
      B2B: "B2B",
      MedTech: "MedTech",
    },
    ariaLabel: "Portfolio categories",
    filtersAriaLabel: "Filter product system tags",
    techSectionTitle: "Product Systems",
    techIntro:
      "Systems I design and ship to convert operational complexity into scalable products \u2014 from internal tools and data integrity layers to real-time interaction workflows.",
    medSectionTitle: "MedTech - Integration & Delivery",
    medIntro:
      "Regulated delivery across clinical environments: multi-vendor integrations, workflow governance, adoption enablement, and lifecycle reliability under real constraints.",
    medMgmtSectionTitle: "MedTech - Programs & Commercial Execution",
    medMgmtIntro:
      "Multi-site rollout governance, procurement/tenders, vendor orchestration, and adoption enablement.",
    empty: "No projects match that filter.",
    clearFilter: "Clear filter",
    viewLink: "View",
    inProgress: "In progress",
    caseStudy: "Case Study",
    loadingCaseStudy: "Loading case study",
    comingSoon: "Coming soon...",
    items: {
      livesurgery: {
        title: "LiveSurgery - Real-Time Surgical Collaboration Platform",
        summary:
          "Founder-led MedTech PoC delivering a fully functional OR workspace: multi-panel video coordination, drag-and-drop source assignment, role-based access (Surgeon / Observer / Admin), and WebSocket-powered real-time layout sync with optimistic concurrency. Backed by a FastAPI + SQLite REST API with session lifecycle management, an analytics dashboard, and a searchable session archive.",
      },
      flowlogics: {
        title: "Flowlogics - API-Driven Supply Visibility and Lifecycle Control",
        summary:
          "Logistics operations platform centralizing orders, warehouse intake, and delivered transitions with a strict API contract, role-gated workflows, readonly demo mode, and timeline-based ETA risk visibility.",
      },
      alpharhythm: {
        title: "AlphaRhythm - Trading Execution and Discipline System",
        summary:
          "Rule-based trading execution system designed to improve discipline, enforce strategy compliance, and turn discretionary decision-making into a repeatable workflow. Includes trade journaling, execution gates, violation tracking, and performance review loops for consistent trader behavior.",
      },
      jobsprint: {
        title: "JobSprint - Job Search Workflow Manager",
        summary:
          "Execution-oriented job search system for solo product and engineering candidates, replacing scattered notes and spreadsheets with a drag-and-drop application pipeline, weekly execution tracking, funnel analytics, and an offer-probability view tied to real conversion progress.",
      },
      "surgiris-lights": {
        title: "SURGIRIS LED Surgical Lights (Multi-site Delivery)",
        summary:
          "Standardized multi-site OR lighting deployments across 15+ ORs, aligning clinical workflow requirements with installation governance, training, and lifecycle reliability under disruption constraints.",
      },
      surgimedia: {
        title: "SURGIMEDIA Integrated OR Systems",
        summary:
          "Orchestrated end-to-end OR integration programs for visualization, routing, and documentation workflows across specialties, with multi-vendor governance and clinical alignment.",
      },
      "gas-pendants": {
        title: "Medical Gas & Equipment Pendants (ICU/OR)",
        summary:
          "Governed ICU/OR pendant system deployments for safety, ergonomics, and operational reliability while aligning technical requirements with clinical usage and facility constraints.",
      },
      "diagnostic-therapeutic": {
        title: "Diagnostic & Therapeutic Systems (Launch + Deployment)",
        summary:
          "Orchestrated launch and deployment of advanced diagnostic and therapy systems through structured adoption governance, stakeholder onboarding, and lifecycle readiness.",
      },
      "surgical-monitors": {
        title: "Surgical Monitors & Recorders (Imaging Workflow)",
        summary:
          "Integrated displays and recorders for real-time imaging and HD/4K routing, with vendor orchestration, installation readiness, and clinician onboarding for workflow reliability.",
      },
      "national-launches": {
        title: "National Product Launches (MedTech)",
        summary:
          "Launched MedTech products nationwide: positioning, demos, KOL engagement, training, and early adoption \u2014 aligning vendor goals with hospital realities.",
      },
      "or-lighting-rollout": {
        title: "OR Lighting Upgrade Program (Multi-hospital)",
        summary:
          "Governed a multi-hospital OR lighting rollout across budgeting, tenders, scheduling, vendor orchestration, installation standards, and clinician onboarding.",
      },
      "hyperbaric-deployment": {
        title: "Hyperbaric Therapy Deployment (Turnkey)",
        summary:
          "Orchestrated turnkey hyperbaric therapy deployment end-to-end: import controls, safety compliance, site readiness, clinical onboarding, and lifecycle maintenance processes.",
      },
    },
    caseStudySections: {
      "founder-lens": "Founder Lens",
      "problem-context": "Problem & Context",
      constraints: "Constraints",
      "product-decisions": "Key Decisions",
      architecture: "Architecture",
      roadmap: "Roadmap",
      outcomes: "Outcomes",
      gtm: "Business Model",
    },
    caseStudyTitles: {
      livesurgery: "LiveSurgery - Case Study",
      flowlogics: "Flowlogics - Case Study",
      alphorythm: "AlphaRhythm - Case Study",
      jobsprint: "JobSprint - Case Study",
    },
  },

  certifications: {
    title: "Certifications",
    inProgress: "In progress",
    viewCredential: "View credential",
    ongoing: "Ongoing",
    items: [
      {
        title: "GoIT \u2014 Project Management Certificate",
        issuer: "GoIT (2025)",
        summary:
          "End-to-end delivery governance: translating scope into roadmaps and execution plans, managing risks and dependencies, and maintaining stakeholder alignment through structured reporting and artifacts.",
        stack: [
          "Agile Delivery",
          "Scope & Roadmaps",
          "Backlog & Prioritization",
          "Risk & Dependencies",
          "Stakeholder Management",
          "Delivery Artifacts (SOW/WBS/RACI)",
        ],
      },
      {
        title: "Neoversity \u2014 Master\u2019s in Software Development (Technical Deepening)",
        issuer: "Woolf University (2024\u20132026)",
        summary:
          "Formal technical deepening to lead product systems with less abstraction \u2014 strengthening architecture fluency, data modeling, and engineering collaboration.",
        stack: [
          "System Design",
          "Data Modeling",
          "Full-Stack Foundations",
          "APIs",
          "Cloud & DevOps Basics",
        ],
      },
      {
        title: "DataCamp \u2013 Associate AI Engineer for Developers",
        issuer: "DataCamp (2025)",
        summary:
          "Applied AI integration track focused on building AI-powered product features using APIs and modern workflows \u2014 emphasizing practical implementation patterns over theory.",
        stack: [
          "AI Integration",
          "OpenAI API",
          "Prompting",
          "Tooling Patterns",
          "Productized AI Features",
        ],
      },
    ],
  },

  contact: {
    title: "Contact",
    subtitle: "Systems & AI Strategy Inquiries",
    para1:
      "Selectively evaluating Technical Product Manager roles within high-growth, English-first organizations. Specialized in bridging $50M+ operational complexity with AI-augmented delivery.",
    para2label: "Best for:",
    para2items: [
      "Complexity: Organizations scaling past \"Excel-based\" coordination.",
      "High-Stakes Ops: Logistics, FinTech, and B2B SaaS where auditability is non-negotiable.",
      "AI-Orchestration: Teams looking to 10x their delivery speed through agentic workflows (Cursor, ClaudeCode, v0).",
    ],
    para2text:
      "AI-agentic workflows, high-compliance platforms, internal tooling architecture, and zero-to-one system validation.",
    emailLabel: "Email",
    locationLabel: "Location",
    location: "Germany (CET)",
    socialLabel: "Social",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailFieldLabel: "Email",
    emailFieldPlaceholder: "you@example.com",
    messageLabel: "Message",
    messagePlaceholder: "How can I help?",
    hint: "Sends via your email client \u2014 no data stored",
    submitBtn: "Send inquiry",
    emailDirectBtn: "Email directly",
    copied: "Copied!",
    submitted: "Opening your email client with the draft...",
  },

  footer: {
    tagline:
      "Technical Product Manager | Systems & AI Automation\nArchitecting scalable systems in regulated industries. Leveraging 10+ years of domain expertise and AI-orchestrated delivery to make outcomes predictable.",
    nav: "Navigation",
    availability: "Selective Focus",
    availabilityText:
      "I take on a limited number of projects where fixing one system can unlock real operational leverage.",
    availabilityText2:
      "Each engagement is scoped around a single high-impact problem — with a clear path to faster execution, cleaner workflows, or measurable efficiency gains.",
    sendEmail: "Send an email",
    copyright: "All rights reserved.",
    location: "Germany (CET) \u00B7 Selective for remote & hybrid",
    navLinks: {
      Results: "Results",
      Projects: "Projects",
      Services: "Services",
      Framework: "Framework",
      About: "About",
      Contact: "Contact",
    },
  },

  modal: {
    onThisPage: "On this page",
    share: "Share",
    copied: "Copied!",
    copyLinkLabel: "Copy shareable link",
    closeLabel: "Close",
  },

  timeline: {
    title: "Timeline",
    showMilestones: "Show 3 Milestones",
    viewFull: "View Full History (11)",
    ariaFull: "Switch to 3-milestone summary view",
    ariaSummary: "Switch to full history (11 entries)",
  },

  backToTop: "Back to top",
};
