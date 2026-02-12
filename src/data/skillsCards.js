// src/data/skillsCards.js

export const hardSkills = [
  {
    title: "Systems & Platform Thinking",
    items: [
      "Translate operational workflows into product primitives: roles, states, permissions, and handoffs",
      "Design data models and lifecycle logic with auditability and compliance-by-design",
      "Define APIs, integrations, and boundaries that keep platforms scalable and resilient",
    ],
  },
  {
    title: "Internal Tools & Decision Support",
    items: [
      "Build internal systems for visibility, risk control, deadline tracking, and operational forecasting",
      "Design metrics that support decisions: what matters, how to trust it, and when to act",
      "Structure information flows to reduce coordination drag across teams",
    ],
  },
  {
    title: "Architecture Trade-offs",
    items: [
      "Drive explicit trade-offs: build vs buy, speed vs reliability, MVP vs long-term maintainability",
      "Apply constraints-first architecture in regulated and high-stakes operating contexts",
      "Document decisions with rationale, risk profile, and expected operational impact",
    ],
  },
];

export const pmSkills = [
  {
    title: "Product Leadership",
    items: [
      "Frame ambiguous problems into clear outcomes and executable product scope",
      "Lead roadmap and prioritization decisions across product, engineering, and operations",
      "Run governance cadences that keep risk, sequencing, and delivery accountability visible",
    ],
  },
  {
    title: "Execution & Delivery Operations",
    items: [
      "Operate pragmatic Scrum/Kanban cadences using Jira, Confluence, and Trello",
      "Orchestrate cross-functional delivery across operations, engineering, leadership, and vendors",
      "Control scope, map dependencies, and sequence releases for predictable execution",
    ],
  },
];

export const softSkills = [
  {
    title: "Stakeholder Leadership",
    items: [
      "Align executives and delivery teams around trade-offs, timelines, and measurable outcomes",
      "Facilitate workshops, requirements interviews, and decision sessions with clear ownership",
      "Write crisp artifacts: PRDs, specs, ADRs, and operating updates",
    ],
  },
  {
    title: "Ownership & Operator Mindset",
    items: [
      "Own delivery end-to-end from ambiguity through deployment and adoption",
      "Create clarity fast in messy environments and convert decisions into action",
      "Stay accountable for system outcomes, not output volume",
    ],
  },
  {
    title: "Execution Under Constraint",
    items: [
      "Use structured loops: constraints -> model -> decision -> iteration",
      "Design operating routines that improve reliability without adding bureaucracy",
      "Maintain calm, consistent execution in high-stakes and compliance-heavy settings",
    ],
  },
];

export const leverageSkills = [
  {
    title: "AI-Accelerated Product Ops",
    items: [
      "Use LLM workflows for faster prototyping, documentation, and architecture exploration",
      "Accelerate iteration with AI-assisted coding, review, and decision prep",
      "Build reusable prompting patterns for repeatable specs, audits, and delivery artifacts",
    ],
  },
  {
    title: "Rapid Prototyping & Validation",
    items: [
      "Prototype high-risk paths early: workflows, permissions, data integrity, and UX logic",
      "Use constraint-driven MVP slicing to validate assumptions before scaling",
      "Ship small increments, validate quickly, and evolve boundaries intentionally",
    ],
  },
  {
    title: "Operational Leverage Design",
    items: [
      "Reduce manual coordination through automation and cleaner interface contracts",
      "Codify playbooks and repeatable routines that improve delivery consistency",
      "Increase leverage through clearer decisions, fewer dependencies, and better system signals",
    ],
  },
];

export const techStack = [
  {
    title: "Primary Implementation Stack",
    items: [
      "React (Vite), JavaScript, Tailwind",
      "Node.js (Express) for service and API design",
      "REST architecture, role-based access control, and workflow-state modeling",
    ],
  },
  {
    title: "Backend & Data Systems",
    items: [
      "PostgreSQL and SQLite for operational data modeling and query-driven workflows",
      "Firebase (Auth, Firestore) for validated internal tooling and rapid iteration loops",
      "Python (Flask/FastAPI) for service prototypes and architecture validation",
    ],
  },
  {
    title: "Shipping & Tooling",
    items: [
      "Git/GitHub workflows with PR discipline and release traceability",
      "Deployments: Vercel, Render",
      "Docker for environment consistency and reproducible delivery",
    ],
  },
];
