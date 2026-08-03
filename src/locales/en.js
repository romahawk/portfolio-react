// src/locales/en.js
export default {
  nav: {
    home: "Home",
    results: "Results",
    projects: "Proof of Work",
    services: "Services",
    aiWorkflow: "AI Workflows",
    aiSolutions: "AI Consulting",
    medtech: "Regulated Proof",
    fullstack: "Build Proof",
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
    headline: "AI Workflow Systems for Operations-Heavy Teams",
    subtitle:
      "I help MedTech, HealthTech, and B2B operations teams turn messy operational workflows into AI-assisted, auditable systems — from discovery to prototype, SOPs, and handover.",
    ctaAudit: "Book an AI Workflow Audit",
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
    emailDirectBtn: "Book an AI Workflow Audit",
    copied: "Copied!",
    submitted: "Opening your email client with the draft...",
  },

  footer: {
    tagline:
      "AI Workflow Systems for Operations-Heavy SMEs and Regulated Teams\nCombining AI systems consulting, MedTech implementation credibility, and full-stack implementation proof.",
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
      ServicesBusiness: "AI Audit",
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

  site: {
    scroll: "SCROLL",
    scrollAria: "Scroll to the next section",
    languageSelector: "Language selector",
    nextStep: "Next step",
    next: "Next",
    filters: { all: "All" },
    workflowSteps: ["Capture", "Structure", "Assist", "Review", "Handover"],
    cta: {
      viewProof: "View Proof of Work",
      viewBuildProof: "View Build Proof",
      viewRegulatedProof: "View Regulated Proof",
      exploreAiWorkflows: "Explore AI Workflows",
      workWithMe: "Discuss a workflow",
      contact: "Contact",
      discussRole: "Discuss one workflow",
      exploreCollaboration: "Explore AI consulting",
      viewWorkflow: "View Workflow",
      viewCaseStudy: "View Case Study",
      startAudit: "Book an AI Workflow Audit",
      viewAiExamples: "View AI Workflow Examples",
      view: "View",
    },
    status: {
      "real-medtech-implementation-experience": "Real MedTech Implementation Experience",
      "real-medtech-delivery-experience": "Real MedTech Delivery Experience",
      "built-system": "Built System",
      prototype: "Prototype",
      "reference-system": "Reference System",
      "concept-workflow": "Concept Workflow",
      "concept-workflow-prototype-concept": "Concept Workflow / Prototype Concept",
      "prototype-concept": "Prototype Concept",
      "proof-of-work-artifact": "Proof-of-Work Artifact",
      "case-simulation": "Case Simulation",
      "archived-experiment": "Archived Experiment",
      "regulated-operations-pattern": "Regulated Operations Pattern",
    },
    seo: {
      homeTitle: "Roman Mazuryk \u2014 AI Workflow Systems Consultant",
      homeDescription: "AI systems consulting, workflow automation, audit-to-implementation roadmaps, and prototype builds for operations-heavy SMEs, MedTech, HealthTech, and regulated teams.",
      aiTitle: "AI Workflow Systems and Automation for SMEs \u2014 Roman Mazuryk",
      aiDescription: "AI Workflow Opportunity Audits, automation pilots, internal assistants, SOP systems, dashboards, and implementation roadmaps for operations-heavy SMEs.",
      medtechTitle: "MedTech and Regulated Operations Proof \u2014 Roman Mazuryk",
      medtechDescription: "Real MedTech implementation experience used as authority for AI workflow consulting in regulated, documentation-heavy, and handover-heavy environments.",
      fullstackTitle: "From Audit to Working System \u2014 Roman Mazuryk",
      fullstackDescription: "Implementation proof for AI workflow consulting: prototypes, dashboards, internal tools, automations, and deployed workflow applications.",
      collaborateTitle: "AI-Assisted Workflow Collaboration for MedTech Teams",
      collaborateDescription: "Workflow audits, discovery sprints, prototypes, SOP systems, and compliance-aware automation support for MedTech, HealthTech, and regulated operations teams.",
      aiWorkflowTitle: "AI Workflow Library",
      aiWorkflowDescription: "Practical examples of AI-assisted workflow systems for MedTech, HealthTech, and regulated operations.",
      proofTitle: "Proof of Work - AI Workflow Systems and Regulated Operations",
      proofDescription: "Selected workflow systems, product concepts, and AI-assisted prototypes showing how Roman Mazuryk translates operational complexity into structured, auditable systems.",
      orProofTitle: "OR Integration & Surgical Workflow Systems | Roman Mazuryk",
      orProofDescription: "Real-world MedTech implementation experience across operating room infrastructure, surgical equipment integration, video/audio workflows, clinical handover, and hospital stakeholder coordination.",
      clinicalEvidenceTitle: "AI-Assisted Clinical Evidence Workflow for MedTech Teams | mazuryk.dev",
      clinicalEvidenceDescription: "Compliance-aware workflow concept for turning scattered clinical evidence, product claims, PDFs, studies, and internal knowledge into a structured, traceable review system.",
      workflowReference: "AI Workflow Reference",
      workflowImageAltSuffix: "reference workflow for MedTech and regulated operations.",
    },
    home: {
      hero: {
        eyebrow: "MEDTECH / HEALTHTECH / REGULATED OPERATIONS",
        title: "AI Workflow Systems for Operations-Heavy SMEs and Regulated Teams",
        subtitle: "I help MedTech, HealthTech, and regulated operations teams turn complex workflows into practical AI-assisted systems, prototypes, and implementation roadmaps.",
      },
      credibility: {
        eyebrow: "Credibility layer",
        title: "Real MedTech implementation background",
        text: "Before designing AI workflow systems, I spent 10+ years in MedTech operations, medical equipment implementation, hospital stakeholder coordination, and clinical workflow handover. That experience shapes how I approach AI: not as a generic automation layer, but as a way to reduce operational friction, improve traceability, and turn messy workflows into reliable systems.",
        compact: "Selected implementation areas: surgical lights, OR video/audio integration, medical gas pendants, hyperbaric systems, surgical collaboration and education workflows.",
        cards: [
          { title: "OR & hospital workflows", text: "Hands-on exposure to operating room environments, surgical equipment implementation, clinical handovers, and coordination with hospital teams." },
          { title: "Implementation complexity", text: "Experience across equipment delivery, installation, training, support, documentation, stakeholder alignment, and project handover." },
          { title: "Workflow-to-system thinking", text: "Practical understanding of where operational workflows break: missing ownership, scattered documentation, manual coordination, and weak visibility." },
        ],
      },
      workflowPreview: {
        eyebrow: "Solution library",
        title: "Practical AI workflow examples",
        text: "A visual library of reference workflows showing how MedTech and regulated teams can turn scattered documentation, operational bottlenecks, and manual coordination into AI-assisted systems.",
        items: ["Scattered documentation", "Operational bottlenecks", "Manual coordination"],
      },
      companyStrip: {
        eyebrow: "For companies",
        title: "Need to map one complex workflow?",
        text: "I provide focused workflow audits, discovery sprints, and prototype support for MedTech, HealthTech, and regulated operations teams.",
      },
      proofPreview: {
        title: "Featured Proof of Work",
        text: "Proof items led by real MedTech implementation experience, then connected to product concepts and AI-assisted workflow systems.",
        cta: "View Full Proof of Work",
        items: {},
      },
    },
    footer: {
      headline: "AI Workflow Systems for Operations-Heavy Teams",
      tagline: "AI systems consulting backed by MedTech implementation credibility and full-stack build proof.",
      navigation: "Navigation",
      navLinks: ["Proof of Work", "AI Workflows", "About", "Contact", "AI Audit"],
      focus: "Selective focus",
      focusText: "I focus on selected AI workflow audits, automation pilots, internal assistants, dashboards, and implementation roadmaps where operational friction is concrete.",
      bestFit: "Best fit: operations-heavy SMEs, MedTech, HealthTech, and regulated teams with scattered documentation, handover gaps, manual coordination, or weak visibility.",
      bottomLeft: "Roman Mazuryk. AI Workflow Systems Consultant.",
      bottomRight: "Built with React, workflow thinking, and AI-assisted delivery.",
    },
    about: {
      hero: {
        eyebrow: "AI SYSTEMS CONSULTANT / WORKFLOW AUTOMATION / REGULATED OPERATIONS",
        title: "I turn messy workflows into practical AI-assisted systems",
        subtitle: "I help operations-heavy teams turn fragmented processes into practical AI-assisted systems, combining product strategy, workflow analysis, AI automation, and full-stack delivery. My MedTech background adds real-world judgment from regulated, high-friction environments.",
      },
      background: {
        eyebrow: "Background",
        title: "A practical operator foundation",
        text: "My work sits between operational reality and product structure: understanding where workflows break, then designing AI-assisted systems that make the work clearer, reviewable, and easier to execute.",
      },
      implementation: {
        eyebrow: "Regulated operations proof",
        title: "Regulated operations experience that improves AI system design",
        text: "This experience matters because AI workflow systems fail when they ignore real constraints: handovers, ownership, documentation, training, exceptions, and review points.",
        areasTitle: "Strongest proof points",
        givesTitle: "How it improves AI workflow design",
        areas: ["OR and clinical workflow environments", "Medical equipment implementation and handover", "Stakeholder coordination across hospitals, vendors, and technical teams", "Documentation, training, support, and visibility gaps", "Judgment about where human review must remain"],
        gives: ["Understands where workflows break", "Designs for ownership, review, and handover", "Translates messy operational context into system requirements", "Avoids over-automating high-risk workflows"],
      },
      philosophy: {
        eyebrow: "Operating philosophy",
        title: "Operator-first, AI-assisted",
        text: "I do not start from what AI can do. I start from where the workflow breaks, where risk appears, and what system should exist.",
        support: "AI is the acceleration layer: useful for discovery, prototyping, documentation, and delivery, but the workflow logic, ownership, and review model must stay clear.",
      },
      focus: {
        eyebrow: "Current focus",
        title: "Where this experience translates today",
        cards: [
          { title: "AI-assisted delivery", text: "Using AI to accelerate workflow discovery, prototyping, documentation, and implementation support while keeping human judgment visible." },
          { title: "Product & workflow systems", text: "Turning operational complexity into product concepts, requirements, dashboards, SOPs, and handover-ready systems." },
          { title: "Regulated operations proof", text: "Using MedTech and regulated-operations experience as trust proof for high-friction workflows, not as the primary commercial identity." },
        ],
      },
      role: {
        eyebrow: "Role fit",
        title: "Where this background creates value",
        intro: "My strongest fit is AI workflow systems for operations-heavy teams, backed by product judgment, regulated-operations credibility, and implementation proof.",
        cards: [
          { title: "For consulting clients", items: ["AI Workflow Opportunity Audit", "Prototype Sprint", "Internal Assistant / SOP System", "Dashboard or workflow tool"] },
          { title: "For product and employment roles", items: ["AI Product Manager", "Technical Product Manager", "Product Operations Lead", "MedTech / HealthTech Product Manager"] },
          { title: "Where regulated proof helps", items: ["Documentation and handover systems", "Operational dashboards", "Compliance-aware workflow automation", "MedTech implementation workflows", "OR / hospital workflow systems"] },
        ],
      },
      milestones: {
        title: "Selected regulated-operations milestones",
        items: ["First EP lab implementation support in Ukraine", "Surgical lights and OR video integration projects", "Hyperbaric chamber implementation", "Medical gas pendant implementations for OR/ICU", "Integrated OR video/audio systems", "Surgical education and collaboration workflow concepts", "Hospital equipment handover and training projects"],
      },
      final: { title: "Discuss one workflow worth fixing" },
    },
    contact: {
      hero: {
        eyebrow: "CONTACT",
        title: "Talk roles, workflows, or one system worth fixing",
        subtitle: "Use the contact path that fits: hiring teams can evaluate role fit, and business teams can start with one workflow audit or prototype conversation.",
        primary: "Contact for Roles",
      },
      details: {
        title: "Contact",
        subtitle: "AI workflow audit, automation pilot, or implementation path",
        text: "Best fit: operations-heavy SMEs, MedTech, HealthTech, and regulated teams that want to turn one fragmented workflow into a practical AI-assisted system.",
        bestForLabel: "Best for:",
        bestForItems: [
          "Teams considering an AI Workflow Opportunity Audit.",
          "Operators with scattered documentation, manual coordination, handover gaps, or weak reporting visibility.",
          "Founders or product teams that need a prototype, dashboard, internal assistant, or workflow automation after the audit.",
        ],
        note: "Best conversations start with one workflow worth fixing.",
        emailLabel: "Email",
        locationLabel: "Location",
        location: "Germany (CET)",
        socialLabel: "Social",
        copied: "Copied!",
      },
      form: {
        nameLabel: "Name",
        namePlaceholder: "Your name",
        emailLabel: "Email",
        emailPlaceholder: "you@example.com",
        messageLabel: "Message",
        messagePlaceholder: "Role, team, workflow, or project context",
        hint: "Sends via your email client - no data stored",
        submit: "Contact for roles",
        emailDirect: "Email directly",
        submitted: "Opening your email client with the draft...",
      },
    },
    services: {
      hero: {
        eyebrow: "WORK WITH ME",
        title: "AI-Assisted Workflow Collaboration for MedTech Teams",
        subtitle: "I work with MedTech, HealthTech, and regulated operations teams to map complex workflows, identify bottlenecks, prototype better systems, and create implementation-ready documentation.",
        microcopy: "Concepts and prototypes are scoped with human review, traceability, and clear ownership. No claim of certified medical software or automated regulatory decisions.",
      },
      who: {
        eyebrow: "Who this is for",
        title: "Teams with operational complexity and AI pressure",
        items: ["MedTech / HealthTech startups scaling operations", "Pharma logistics and regulated operations teams", "Implementation-heavy B2B teams", "Teams with scattered documentation, manual coordination, weak handovers, or AI interest without workflow clarity"],
      },
      offers: {
        eyebrow: "Collaboration offers",
        title: "Commercial support for one workflow at a time",
        text: "Each engagement starts from operational reality: what people do today, where the process fails, what AI can safely assist, and what must remain under human control.",
        items: [
          { title: "AI Workflow Audit", problem: "A complex workflow is slow, manual, or unclear, but the team does not yet know where AI can safely help.", description: "A focused remote audit to map one workflow, identify bottlenecks, assess risk, and define the first practical system path.", deliverables: ["workflow map", "bottleneck analysis", "AI opportunity matrix", "risk/control analysis", "implementation recommendations", "roadmap"], outcome: "A clear, auditable starting point for one workflow improvement." },
          { title: "AI Product Discovery Sprint", problem: "The team has an AI or workflow product idea, but the use case, users, data, risks, and scope are still fuzzy.", description: "Discovery sprint for teams exploring AI products, internal tools, or workflow automation opportunities.", deliverables: ["problem framing", "user and workflow analysis", "product concept", "feature prioritization", "prototype direction", "build/no-build recommendation"], outcome: "A sharper product direction before engineering spend." },
          { title: "Workflow Prototype Sprint", problem: "The workflow is understood, but the team needs a tangible interface or prototype to validate the system model.", description: "A focused sprint to turn one selected workflow into a testable prototype or internal operating model.", deliverables: ["workflow specification", "prototype", "dashboard or structured interface", "review checkpoints", "implementation roadmap"], outcome: "A prototype that makes the workflow visible enough to test, discuss, and refine." },
          { title: "SOP / Documentation System", problem: "Process knowledge is scattered across notes, files, calls, and individual memory.", description: "Structure documentation, SOP support, handover artifacts, and review-ready operating records.", deliverables: ["documentation map", "SOP draft structure", "handover checklist", "review checkpoints", "source traceability model"], outcome: "Cleaner operational memory and easier handover." },
          { title: "MedTech AI Operator-in-Residence", problem: "The team needs operator-level workflow thinking alongside product, AI, and implementation coordination.", description: "Part-time embedded support for AI discovery, product specs, workflow modeling, and implementation coordination.", deliverables: ["workflow discovery", "process documentation", "product requirements", "AI use-case mapping", "coordination support", "prioritization support"], outcome: "More structured product and workflow decisions with operator context." },
          { title: "Compliance-Aware Automation Setup", problem: "Automation ideas stall because ownership, review, traceability, and exception paths are unclear.", description: "Design automation workflows with human review, source traceability, checkpoints, and version history.", deliverables: ["automation map", "human-in-the-loop review model", "audit trail structure", "SOP support", "implementation backlog"], outcome: "A safer automation model that keeps human review and auditability explicit." },
        ],
      },
      labels: { problemSolved: "Problem solved", deliverables: "Deliverables", outcome: "Typical outcome" },
      method: {
        eyebrow: "Method",
        title: "Operator-first, AI-assisted",
        text: "I do not start from what AI can do. I start from where the workflow breaks, where risk appears, and what system should exist.",
        steps: ["Map the workflow", "Identify bottlenecks and risks", "Define the system model", "Add AI assistance where useful", "Design review and traceability checkpoints", "Prototype, document, and hand over"],
      },
      proof: {
        eyebrow: "Proof",
        title: "See practical workflow examples",
        text: "The workflow library shows transparent concept workflows, reference systems, prototype concepts, and proof-of-work artifacts with explicit maturity labels.",
        links: [{ title: "Proof of Work", href: "/proof-of-work" }, { title: "AI Workflow Library", href: "/ai-workflow" }],
      },
      final: {
        title: "Start with one workflow",
        text: "Bring one fragmented workflow, implementation bottleneck, or AI idea. I will help map the current process, identify safe AI assistance points, and define the first auditable system path.",
      },
    },
    proof: {
      hero: {
        eyebrow: "MEDTECH DELIVERY / PRODUCT SYSTEMS / AI WORKFLOWS",
        title: "Proof of Work",
        subtitle: "Selected workflow systems, product concepts, and AI-assisted prototypes showing how I translate operational complexity into structured, auditable systems.",
        primary: "View Domain Proof",
        trust: "Real MedTech implementation is separated from concept workflows and archived experiments. Each item is labeled by maturity and intent.",
      },
      labels: { problem: "Problem", systemConcept: "System concept", systemExperience: "System / workflow experience", value: "Value", proves: "What it proves", involved: "What was involved" },
      featured: {
        eyebrow: "Featured domain proof",
        title: "OR Integration & Surgical Workflow Systems",
        text: "The strongest proof item is real-world MedTech implementation experience, not a software or AI product claim.",
        cta: "View OR Integration Proof",
        card: {
          title: "OR Integration & Surgical Workflow Systems",
          domain: "Operating rooms / surgical infrastructure / medical equipment integration",
          summary: "Real-world experience with operating room integration and surgical infrastructure projects, including surgical lighting, OR video/audio workflows, medical equipment coordination, implementation handover, and hospital stakeholder alignment.",
          problem: "Operating rooms are complex environments where equipment, video signals, patient data, lighting, documentation, and clinical workflows must work together reliably. Poor integration creates friction, delays, weak visibility, and handover risk.",
          system: "Experience across implementation planning, equipment coordination, installation support, clinical handover, stakeholder communication, and workflow understanding around integrated OR environments.",
          proves: "Real MedTech domain exposure, OR and hospital workflow understanding, implementation and handover reality, multi-stakeholder coordination, and the ability to translate clinical-operational complexity into product and workflow systems.",
        },
      },
      medtech: {
        eyebrow: "Domain proof",
        title: "Real-world MedTech implementation experience",
        text: "Before building AI-assisted workflow systems, I worked across real MedTech delivery environments: operating rooms, hospital stakeholders, medical equipment projects, multi-vendor coordination, installation, training, support, and handover. These projects are included as domain proof, showing the operational reality behind my current product and workflow systems work.",
        more: "View more MedTech implementation examples",
      },
      ai: {
        eyebrow: "AI workflow systems",
        title: "AI-Assisted Workflow Systems",
        text: "Reference workflows, prototypes, and concept systems that build on real MedTech implementation patterns and show how operational complexity can be translated into AI-assisted systems.",
        more: "View more AI workflow examples",
      },
      archive: {
        title: "Archived systems and earlier experiments",
        text: "Earlier projects that developed my product, workflow, and AI-assisted delivery capability. They are kept as background evidence while the current commercial focus is AI workflow systems and implementation work.",
      },
    },
    aiWorkflow: {
      processMap: "process map",
      hero: { eyebrow: "PRACTICAL AI WORKFLOW SYSTEMS", title: "AI Workflow Library", subtitle: "Outcome-based examples of AI-assisted systems for scattered documentation, manual coordination, request triage, implementation handover, reporting visibility, and regulated operations.", primary: "View Workflow Problems" },
      reference: { eyebrow: "Reference library", title: "Why this library exists", text: "These examples show the kinds of workflow problems an AI Workflow Opportunity Audit can map, score, and turn into a pilot recommendation. They are designed as reference workflows, prototype concepts, and proof-of-work artifacts with explicit maturity labels.", trust: "These workflow examples are informed by real MedTech and regulated-operations patterns, including implementation handovers, OR workflows, documentation gaps, equipment coordination, and operational visibility problems. They remain transparently labeled as concept, reference, prototype, or built systems where applicable." },
      featured: { eyebrow: "Featured workflow", title: "Browse by business problem", text: "Choose a workflow family, inspect the reference pattern, then open the detail page if it resembles a process your team may want to audit or automate." },
      categories: { "MedTech / Clinical / OR Workflows": "MedTech / Clinical / OR", "Operations / Implementation Workflows": "Operations / Implementation Workflows", "Compliance-Aware Workflows": "Compliance-Aware Workflows" },
      other: "Other workflows",
      explorer: { eyebrow: "Workflow explorer", title: "Filter reference workflows", text: "Use a narrow filter set to keep the library scannable." },
      filters: { domain: "Domain", status: "Status", problem: "Business problem" },
      problemTypes: { All: "All", Traceability: "Traceability", Handover: "Handover", Coordination: "Coordination", Documentation: "Documentation", Automation: "Automation" },
      labels: { problem: "Workflow problem", pain: "Current workflow pain", concept: "AI-assisted workflow concept", components: "System components", review: "Human review points", traceability: "Auditability / traceability layer", value: "Expected business value" },
      final: { title: "Want to map one of your workflows?", text: "Start with one workflow, define where it breaks, identify what AI can safely assist, and turn the best opportunity into a pilot roadmap." },
      detail: {
        eyebrow: "Workflow detail", notFoundEyebrow: "Workflow not found", notFoundTitle: "That workflow example is not available yet.", notFoundText: "The AI Workflow Library is data-driven, so new examples can be added as structured records.", back: "Back to AI Workflow Library", backShort: "Back to Library", heroEyebrow: "WORKFLOW DETAIL",
        problemTitle: "Workflow Problem", whatWorkflowIs: "What the workflow is", audienceSuffix: "are the primary audience for this workflow.", whyBreaks: "Why it breaks", breaksSuffix: "create repeated friction when the workflow is not structured.", risk: "Risk or inefficiency",
        currentTitle: "Current Workflow", manualSteps: "Manual steps", tools: "Tools involved", bottlenecks: "Bottlenecks", ownershipGaps: "Ownership gaps", documentationGaps: "Documentation gaps",
        aiTitle: "AI-Assisted Workflow", aiAssists: "Where AI assists", automated: "What gets automated", manual: "What remains controlled manually", componentsTitle: "System Components", auditTitle: "Auditability Layer", auditText: "This concept keeps AI assistance inside a controlled workflow. It is not positioned as certified medical software and does not make black-box regulatory decisions.", valueTitle: "Expected Business Value", artifactTitle: "Prototype / Artifact Placeholder",
        finalTitle: "Want to map this type of workflow in your organization?", finalText: "Start with one workflow, make the current process visible, then design the AI assistance, human review, traceability, and handover layer around it.",
        generic: {
          currentSteps: ["Capture the request", "Review context", "Coordinate next actions", "Document the outcome"],
          tools: ["Shared documents", "Spreadsheets", "Task boards", "Email or meetings"],
          ownershipGaps: ["Workflow owner", "Reviewer", "Exception owner"],
          documentationGaps: ["Source context", "Decision rationale", "Approval history"],
          aiSteps: ["Structure intake", "Suggest gaps and risks", "Prepare review packet", "Generate handover output"],
          aiAssists: ["Summarization", "Classification", "Draft generation", "Checklist preparation"],
          automatedParts: ["Draft outputs", "Status summaries", "Completeness checks"],
          manualControls: ["Scope decision", "Human review", "Final approval"],
          artifacts: ["Workflow map", "Dashboard mockup", "Data table", "Process diagram", "Implementation roadmap"],
        },
      },
    },
    orProof: {
      hero: { eyebrow: "REAL MEDTECH IMPLEMENTATION EXPERIENCE", title: "OR Integration & Surgical Workflow Systems", subtitle: "Real-world MedTech implementation experience across operating room infrastructure, surgical equipment integration, video/audio workflows, clinical handover, and hospital stakeholder coordination.", meta: "Operating rooms / surgical infrastructure / medical equipment integration" },
      context: { eyebrow: "Context", title: "Integrated OR environments are workflow systems", text: "Integrated OR environments combine surgical infrastructure, medical equipment, audio/video routing, visualization, recording, patient data workflows, telemedicine possibilities, documentation, and team coordination." },
      complexity: { eyebrow: "Workflow complexity", title: "Connected elements inside the operating room system", items: ["Surgical lighting", "OR video/audio signals", "Medical displays", "Imaging / DICOM / PACS context where relevant", "Medical gas / room infrastructure where relevant", "Recording and streaming workflows", "Hospital IT / technical teams", "Surgeons and clinical users", "Implementation and handover documentation"] },
      role: { eyebrow: "Role / exposure", title: "Roman's real-world role and exposure", text: "Experience included business development, project coordination, implementation support, equipment delivery/installation coordination, training/handover support, and stakeholder communication around MedTech and OR environments." },
      proves: { eyebrow: "What this proves", title: "Credibility for product, workflow, implementation, and solutions roles", hubTop: "OR / Hospital", hubBottom: "Workflow Reality", cards: [{ title: "Domain understanding", text: "Exposure to operating room environments, surgical infrastructure, equipment implementation, and hospital workflow constraints." }, { title: "Workflow/system thinking", text: "Ability to see how equipment, people, documentation, signals, room readiness, and handover states interact as one operational system." }, { title: "Stakeholder coordination", text: "Experience communicating across hospitals, vendors, technical teams, clinical users, and decision-makers during implementation work." }, { title: "Implementation reality", text: "Understanding of delivery, installation coordination, training, support, documentation, acceptance, and practical handover friction." }, { title: "Foundation for AI-assisted workflow systems", text: "A grounded base for mapping workflow risk, traceability, auditability, documentation gaps, and operational visibility opportunities." }] },
      bridge: { eyebrow: "Bridge to current positioning", title: "Real implementation background, translated into AI-assisted systems", text: "This real-world implementation background now informs my AI workflow systems consulting, especially where discovery, documentation, handover, traceability, prototyping, and delivery need to stay practical." },
      opportunities: { eyebrow: "Future workflow opportunities", title: "Concept workflows this experience can inform", text: "These are future opportunities and concept workflows, not completed client projects.", items: ["OR utilization optimization", "Surgical recording indexing", "AI documentation and handover", "Equipment readiness workflows", "Biomedical maintenance systems", "Surgical collaboration systems"] },
      final: { title: "From OR workflow exposure to structured systems", text: "Explore the AI workflow library for reference systems and concept implementations built around documentation, handover, operational visibility, and traceability." },
    },
    workflows: {},
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
