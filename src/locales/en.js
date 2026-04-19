// src/locales/en.js
export default {
  nav: {
    about: "About",
    aiSdlc: "AI SDLC",
    timeline: "Timeline",
    skills: "Skills",
    projects: "Projects",
    certifications: "Certifications",
    contact: "Contact",
    toggleNav: "Toggle navigation",
    backToTop: "Back to top",
  },

  hero: {
    eyebrow: "Technical Product Portfolio",
    headline: "Technical Product Manager & Delivery Lead",
    subtitle:
      "AI-Augmented SDLC for production-grade delivery in regulated industries. 10+ years leading MedTech & Pharma platforms \u2014 from $40M+ operations to full-stack system architecture. I make trade-offs explicit and delivery predictable.",
    ctaSDLC: "View AI-Augmented SDLC",
    ctaProjects: "View Product Systems",
    downloadCV: "Download CV",
    scroll: "Scroll",
  },

  about: {
    title: "About",
    eyebrow: "Operator profile",
    heading: "Technical Product Manager | Systems & Delivery",
    profileAlt: "Roman Mazuryk profile",
    para1:
      "With 10+ years in MedTech and regulated B2B delivery, I operate at the intersection of Product Strategy, System Architecture, and Operational Excellence. I specialize in turning ambiguous, high-compliance constraints into predictable, high-uptime systems.",
    para2:
      "My operating model is decision compression. I reduce organizational drag by translating complex operational needs into lean system primitives. I do not just manage backlogs; I architect the logic that ensures delivery is predictable, compliant, and impactful.",
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
        "I reduce organizational drag by translating complex operational needs into lean system primitives. I do not just manage backlogs; I architect the logic that ensures delivery is predictable, compliant, and impactful.",
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
      cta: "View Full System Architecture",
    },
    bestFit: {
      eyebrow: "Best-fit environment",
      heading: "Where I Operate Best",
      para1:
        "Designed for remote-first agile environments. This workflow performs best in compliance-heavy systems, multi-stakeholder delivery, and zero-to-one platform work \u2014 particularly in EU and global B2B SaaS, internal tools, and regulated industries.",
      para2:
        "I collaborate directly with engineering on architecture while aligning leadership on the trade-offs that drive speed, reliability, and long-term leverage. In regulated MedTech and Pharma contexts, Micro-Scope and explicit acceptance criteria provide auditability without slowing delivery.",
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
      "The Systems-First SDLC for production-grade delivery. Trade-offs stay explicit, decisions stay visible, scope stays constrained to what can ship. Built for Remote-First Agile Environments targeting EU/Global B2B SaaS and regulated industries.",
    badge1: "Remote-First Architecture",
    badge2: "MedTech / Pharma Auditability",
    badge3: "EU / Global Market Ready",
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
        "In regulated MedTech/Pharma environments, explicit Operating Rules and Decision Logs satisfy audit requirements without adding delivery overhead. Governance is built into the workflow, not bolted on.",
    },
    buildLoop: {
      heading: "The Daily Build Loop",
      p1label: "Micro-Scope execution:",
      p1text:
        "select a GitHub issue, define acceptance criteria and data schemas before touching code, then implement through small daily PRs. Scope is locked at issue-open \u2014 protecting scope integrity and predictable velocity.",
      p2label: "Architectural Gate & Risk Assessment",
      p2text:
        "is a hard gate before every implementation: architecture logic, state transitions, and edge cases are validated by the architect. AI assists \u2014 the architect decides.",
      p3label: "Auditability in regulated contexts:",
      p3text:
        "Micro-Scope plus explicit acceptance criteria provides a traceable paper trail for MedTech/Pharma delivery without slowing cadence. Each PR maps directly to a scoped requirement.",
    },
    hardening: {
      heading: "The Production Hardening Stack",
      lighthouse: "performance baselines and release gating. Score regression blocks merge.",
      sentry: "runtime error visibility and failure triage with environment-scoped alerting.",
      posthog: "usage analytics and post-release signal tracking to validate delivery impact.",
      aiReview:
        "are a standard implementation gate before merge, alongside human approval on architecture-critical changes. Every PR passes automated quality checks before it reaches the architect review layer.",
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
    subtitle: "Product Systems Inquiries",
    para1:
      "Open to Technical Product Manager and Product Owner roles, as well as selective founder/operator collaborations in complex, regulated environments.",
    para2label: "Best for:",
    para2text:
      "internal tools, workflow automation, decision-support dashboards, real-time PoCs, and MVP validation.",
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
      "Technical Product Manager & Founder\u2011Operator.\nBuilding scalable systems in regulated industries.",
    nav: "Navigation",
    availability: "Availability",
    availabilityText:
      "Open to Technical PM & Product Owner roles and selective founder\u2011operator collaborations.",
    sendEmail: "Send an email",
    copyright: "All rights reserved.",
    location: "Germany (CET) \u00B7 Available for remote & hybrid",
    navLinks: {
      Home: "Home",
      About: "About",
      Timeline: "Timeline",
      Skills: "Skills",
      "Product Systems": "Product Systems",
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
