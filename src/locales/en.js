// src/locales/en.js
export default {
  nav: {
    home: "Home",
    results: "Results",
    projects: "Proof of Work",
    services: "Services",
    aiWorkflow: "AI Workflows",
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
    eyebrow: "MEDTECH / HEALTHTECH / REGULATED OPERATIONS",
    headline: "MedTech Product & Workflow Systems",
    subtitle:
      "I help MedTech, HealthTech, and B2B operations teams turn messy operational workflows into AI-assisted, auditable systems — from discovery to prototype, SOPs, and handover.",
    ctaAudit: "Work With Me",
    ctaCaseStudies: "View Product Case Studies",
    ctaSDLC: "How I Build (AI-Stack)",
    ctaProjects: "Explore Shipped Systems",
    downloadCV: "Download CV",
    scroll: "Scroll",
  },

  servicesPage: {
    nav: {
      hero: "Home",
      overview: "Services",
      process: "Method",
      proof: "Proof",
      book: "Contact",
    },
  },

  about: {
    title: "About",
    eyebrow: "Operator background for regulated AI workflow systems.",
    heading: "AI Product / Technical Product Leader for MedTech Workflow Systems",
    profileAlt: "Roman Mazuryk profile",
    para1:
      "My background is operator-first: 10+ years around MedTech implementation, regulated B2B operations, product delivery, and cross-functional execution. I understand the messy middle where clinical, operational, commercial, and technical realities collide.",
    para2:
      "Today I focus on AI workflow systems: product discovery, workflow modeling, prototype delivery, SOP-ready handover, and practical automation for regulated operations. I use AI to accelerate analysis and build loops while keeping human review, traceability, and system ownership explicit.",
    pillars: {
      strategy: {
        title: "Discovery",
        text: "Translate ambiguous workflow pain into users, states, constraints, risks, and product scope.",
      },
      architecture: {
        title: "Systems",
        text: "Turn messy operations into requirements, data models, review paths, and auditable handoffs.",
      },
      execution: {
        title: "Delivery",
        text: "Prototype quickly, validate with operators, document decisions, and hand over usable systems.",
      },
    },
    operatingModel: {
      eyebrow: "Operating model",
      heading: "My Operating Model: Decision Compression",
      text:
      "I reduce organizational drag by translating complex operational needs into lean system primitives. By using AI-agentic workflows (Cursor, ClaudeCode), I compress the distance between a business requirement and a concept implementation, while keeping auditability and operational impact visible.",
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
          text: "Small, daily validation loops. If the workflow is not usable by operators, it has not solved the problem yet.",
        },
      },
      cta: "Explore the AI Production OS",
    },
    bestFit: {
      eyebrow: "Best-fit environment",
      heading: "Where I Operate Best",
      para1:
        "Best fit: AI Product Manager, Technical Product Manager, Product Operations, MedTech / HealthTech Product Lead, or Workflow Automation roles where the work requires both product judgment and operational realism.",
      para2:
        "I work across business, product, operations, and engineering: framing the problem, mapping the workflow, shaping MVP scope, defining acceptance criteria, and making trade-offs visible to leadership.",
      para3: "Regulated operations mindset: move fast where possible, but keep review ownership, traceability, documentation, and handover discipline intact.",
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
      "An executive-control operating model for AI workflow systems. AI handles leverage, scaffolding, and signal synthesis; human judgment owns architecture, trade-offs, auditability, and release quality in regulated operations.",
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
        "is a hard gate before every implementation: architecture logic, state transitions, workflow risk, and edge cases are validated before work moves into Cursor and ClaudeCode for architect-led implementation. The model layer handles AI-assisted scaffolding; the human layer verifies architecture, constraints, and operational readiness.",
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
      "I use code as a leverage tool to validate system boundaries, clarify trade-offs, and accelerate concept implementation \u2014",
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
              "React, JavaScript, Python (Flask/FastAPI), and Node.js for operational systems and service prototypes",
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
    title: "Proof of Work",
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
      "AI-Assisted": "AI-Assisted",
      "Trading Systems": "Trading Systems",
      FinTech: "FinTech",
      Productivity: "Productivity",
      B2B: "B2B",
      MedTech: "MedTech",
    },
    ariaLabel: "Proof of work categories",
    filtersAriaLabel: "Filter proof of work tags",
    techSectionTitle: "System-building evidence",
    techIntro:
      "Selected systems reframed as evidence of workflow design, product thinking, AI-assisted delivery, and practical operational automation.",
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
    viewCaseStudy: "View Case Study",
    labels: {
      problem: "Problem",
      system: "System built",
      value: "Business/process value",
      evidence: "Tech/product evidence",
    },
    loadingCaseStudy: "Loading case study",
    comingSoon: "Coming soon...",
    items: {
      "clinical-evidence-workflow": {
        title: "Clinical Evidence Workflow",
        summary:
          "Flagship proof: AI-assisted workflow for MedTech evidence review, claim mapping, traceability, and handover.",
      },
      livesurgery: {
        title: "LiveSurgery",
        summary:
          "Surgical workflow intelligence for multi-source OR video, session structuring, education, and surgical collaboration.",
      },
      flowlogics: {
        title: "FlowLogix",
        summary:
          "Operations visibility dashboard for workflow visibility and operational decision support.",
      },
      "vendor-free-supply-tracker": {
        title: "Vendor-Free Supply Tracker",
        summary:
          "Logistics and stock reporting workflow system for purchase orders, warehouse intake, delivered goods, and stock reporting.",
      },
      alpharhythm: {
        title: "AlphaRhythm",
        summary:
          "Rule-based execution and compliance system for trading discipline, rule checking, violations, and weekly review.",
      },
      jobsprint: {
        title: "JobSprint",
        summary:
          "AI-assisted workflow/productivity system for job search pipeline, role capture, application tracking, and compliance support.",
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
      "clinical-evidence-workflow": "Clinical Evidence Workflow - Case Study",
      livesurgery: "LiveSurgery - Case Study",
      flowlogics: "Flowlogics - Case Study",
      "vendor-free-supply-tracker": "Vendor-Free Supply Tracker - Case Study",
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
    subtitle: "Roles, product teams, and workflow systems",
    para1:
      "Open to AI Product Manager, Technical Product Manager, Product Operations, and MedTech / HealthTech product roles where operator context and AI-assisted systems thinking matter.",
    para2label: "Best for:",
    para2items: [
      "Hiring teams evaluating workflow automation, AI product, or regulated operations leadership.",
      "Product teams that need someone who can translate messy operations into system requirements.",
      "Business teams looking for focused AI workflow audits or prototype support.",
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
    submitBtn: "Contact for Roles",
    emailDirectBtn: "Request AI Workflow Audit",
    copied: "Copied!",
    submitted: "Opening your email client with the draft...",
  },

  footer: {
    tagline:
      "MedTech Product & Workflow Systems\nCombining real MedTech implementation experience with AI-assisted discovery, prototyping, documentation, and delivery.",
    nav: "Navigation",
    availability: "Selective Focus",
    availabilityText:
      "I take on a limited number of projects where fixing one system can unlock real operational leverage.",
    availabilityText2:
      "Each engagement is scoped around a single high-impact problem — with a clear path to faster execution, cleaner workflows, or measurable efficiency gains.",
    sendEmail: "Send an email",
    requestAudit: "Request an audit",
    availabilityTextServices:
      "I take on a limited number of MedTech, HealthTech, and regulated operations projects where one workflow system can create visible leverage.",
    availabilityText2Services:
      "Each engagement starts with a clear audit: the fastest path to safer AI assistance, cleaner workflows, and auditable handover.",
    copyright: "All rights reserved.",
    location: "Germany (CET) \u00B7 Selective for remote & hybrid",
    navLinks: {
      Home: "Home",
      Results: "Results",
      Projects: "Proof of Work",
      Services: "Services",
      AIWorkflows: "AI Workflows",
      ServicesBusiness: "Work With Me",
      About: "About",
      Contact: "Contact",
    },
    servicesNavLinks: {
      audit:    "Audit",
      systems:  "Services",
      packages: "Packages",
      process:  "Method",
      context:  "Proof",
      trust:    "Trust",
      contact:  "Contact",
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
