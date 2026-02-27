// src/data/skillsCards.js
// 3-pillar structure — 8 cards total, down from 14
// Each pillar has a Lucide icon name consumed by Skills.jsx

export const skillsPillars = [
  {
    id: "product-systems-leadership",
    title: "Product Systems Leadership",
    icon: "Users",
    cards: [
      {
        title: "Systems & Platform Thinking",
        icon: "Network",
        items: [
          "Translate operational workflows into product primitives: roles, states, permissions, and handoffs",
          "Define data models, APIs, and integration boundaries with auditability and compliance-by-design",
          "Drive explicit trade-offs: build vs buy, speed vs reliability, MVP vs long-term maintainability",
        ],
      },
      {
        title: "Product Leadership",
        icon: "Layers",
        items: [
          "Frame ambiguous problems into clear outcomes and executable product scope",
          "Lead roadmap and prioritization decisions across product, engineering, and operations",
          "Operate pragmatic Scrum/Kanban cadences; control scope, map dependencies, and sequence releases for predictable execution",
        ],
      },
      {
        title: "Stakeholder Leadership",
        icon: "Users",
        items: [
          "Align executives and delivery teams around trade-offs, timelines, and measurable outcomes",
          "Facilitate workshops, requirements interviews, and decision sessions with clear ownership",
          "Write crisp artifacts: PRDs, specs, ADRs, and operating updates",
        ],
      },
    ],
  },
  {
    id: "technical-leverage",
    title: "Technical Leverage",
    icon: "Zap",
    cards: [
      {
        title: "AI-Accelerated Product Ops",
        icon: "Sparkles",
        items: [
          "Use LLM workflows for faster prototyping, documentation, and architecture exploration",
          "Build reusable prompting patterns for repeatable specs, audits, and delivery artifacts",
          "Reduce manual coordination through automation and cleaner interface contracts",
        ],
      },
      {
        title: "Rapid Prototyping & Validation",
        icon: "Code2",
        items: [
          "Prototype high-risk paths early: workflows, permissions, data integrity, and UX logic",
          "Use constraint-driven MVP slicing to validate assumptions before scaling",
          "Ship small increments, validate quickly, and evolve system boundaries intentionally",
        ],
      },
      {
        title: "Core Engine & Stack",
        icon: "Database",
        items: [
          "React, JavaScript, Python (Flask/FastAPI), and Node.js for production web systems and service prototypes",
          "PostgreSQL, Firebase, REST APIs, and role-based access control for operational data modeling",
          "Git/GitHub, Docker, Vercel; Mermaid for architecture diagrams; Linear/Jira for delivery governance",
        ],
      },
    ],
  },
  {
    id: "operating-edge",
    title: "Operating Edge",
    icon: "ShieldCheck",
    cards: [
      {
        title: "Regulated Domain Advantage",
        icon: "Stethoscope",
        items: [
          "MedTech and Pharma execution advantage: build for environments where uptime, auditability, and safety are non-negotiable",
          "Micro-Scope control and explicit acceptance criteria keep delivery traceable for regulated SDLC requirements",
          "14+ years navigating compliance-heavy procurement, clinical, and logistics workflows",
        ],
      },
      {
        title: "Ownership & Operator Mindset",
        icon: "BriefcaseBusiness",
        items: [
          "Own delivery end-to-end: from problem framing through deployment and operational impact",
          "Use structured loops — constraints → model → decision → iteration — to convert ambiguity into execution",
          "Stay accountable for system outcomes, not output volume; maintain calm delivery under high-stakes constraints",
        ],
      },
    ],
  },
];
