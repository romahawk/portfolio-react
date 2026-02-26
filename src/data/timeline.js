// src/data/timeline.js
const timeline = [
  {
    id: "2026-ai-production-os",
    year: 2026,
    title: "AI-Augmented Delivery OS — Portfolio Production Hardening",
    role: "Technical Product Manager (Independent)",
    company: "Self-Directed",
    tags: ["Tech", "AI"],
    summary:
      "Applied a structured AI-augmented delivery OS to rebuild portfolio from development debt to production-grade discipline: Lighthouse CI gates, security headers, performance hardening, and proof-of-work artifacts for every shipped change.",
    highlights: [
      "Reduced initial JS bundle by 68% via tree-shaking and lazy-loading; Lighthouse Performance 38 → 99",
      "Shipped CI/CD pipeline (Lighthouse CI), vercel.json security headers, and full docs scaffold in structured sprints",
      "Operated orient → scope → build → lint → ship → park delivery loop using Claude Code for AI-accelerated execution",
    ],
    icon: "🤖",
  },

  {
    id: "2025-now",
    year: 2025,
    title: "Technical Product Management — Systems & Delivery (Independent)",
    role: "Technical Product Manager (Independent)",
    company: "EU",
    tags: ["Tech", "MedTech"],
    summary:
      "Building and shipping product systems that model complex operations: roles, states, data integrity, and decision-support workflows. Focused on platform thinking, architecture trade-offs, and execution discipline.",
    highlights: [
      "Designed and prototyped product systems: FlowLogix (operations platform), LiveSurgery (real-time workspace PoC), SmartShooter (analytics)",
      "Translated messy operational needs into system primitives: state models, permissions, data flows, and UI workflows",
      "Used prototyping to de-risk architecture, accelerate delivery, and improve engineering alignment",
    ],
    icon: "🧭",
  },

  {
    id: "2024-2025-pharmalogis",
    year: 2024,
    title: "Internal Systems Productization",
    role: "Product Manager (Internal Systems)",
    company: "PharmaLogis GmbH — Germany",
    tags: ["Tech"],
    summary:
      "Architected the shift from fragmented Excel/email workflows to a centralized internal operations platform—defining the data model, product backlog, and decision-support dashboards for high-compliance logistics.",
    highlights: [
      "Defined core data structures and platform logic for a unified logistics dashboard (data integrity + operational coordination)",
      "Increased operational velocity by ~35% by eliminating manual cross-referencing and automating information retrieval",
      "Shortened weekly executive reporting cycles by ~25% via real-time visualization and automated reconciliation",
    ],
    icon: "📦",
  },

  {
    id: "2024-masters",
    year: 2024,
    title: "Technical Deepening",
    role: "Master’s Degree — Computer Science",
    company: "Neoversity (Woolf-accredited) — May 2024",
    tags: ["Tech"],
    summary:
      "Formalized software engineering and architecture foundations to operate with less abstraction and lead systems delivery end-to-end.",
    highlights: [
      "Deepened system design, data modeling, and delivery practices for internal tools and platforms",
      "Strengthened ability to partner with engineers on architecture trade-offs and implementation constraints",
    ],
    icon: "🎓",
  },

  {
    id: "2019-now-medintegro",
    year: 2019,
    title: "MedTech Platform Delivery & Systems Architecture",
    role: "Technical Product Manager | Systems & Platform Delivery",
    company: "Medintegro — Ukraine / EU",
    tags: ["MedTech"],
    summary:
      "Owned lifecycle delivery for complex MedTech systems in regulated environments—turning clinical workflows into deployable system boundaries, integration plans, and reliable operational delivery.",
    highlights: [
      "Delivered 20+ integrated systems using a modular platform approach (high reuse across implementations)",
      "Reduced operational overhead by ~30% through internal automation and standardized delivery routines",
      "Owned trade-offs across scope, uptime, compliance constraints, and budget ranges (€100k–€2M)",
    ],
    icon: "🏥",
  },

  {
    id: "2021-livesurgery",
    year: 2021,
    title: "LiveSurgery — Real-Time Collaboration Concept & PoC",
    role: "Founder / Product Architect",
    company: "Startup Concept",
    tags: ["Tech", "MedTech", "Startup"],
    summary:
      "Designed a surgical collaboration platform concept, exploring multi-source video workflows, session orchestration, and real-time interaction patterns under clinical constraints.",
    highlights: [
      "Defined product vision, MVP scope, and UX flows for OR collaboration and education",
      "Validated feasibility assumptions around multi-source streams and session lifecycle orchestration",
      "Selected to an accelerator program with early mentor validation",
    ],
    icon: "🧠",
  },

  {
    id: "2020-or-integrations",
    year: 2020,
    title: "Integrated OR Programs",
    role: "Technical Project Lead (Systems Integration)",
    company: "Medintegro — Ukraine",
    tags: ["MedTech"],
    summary:
      "Orchestrated multi-vendor OR integrations across imaging, endoscopy, and video systems—aligning clinicians, vendors, and engineers around executable system scope.",
    highlights: [
      "Standardized delivery lifecycle: discovery → planning → installation → training → support",
      "Managed cross-device workflows and handover under clinical and safety constraints",
    ],
    icon: "🔧",
  },

  {
    id: "2018-market-expansion",
    year: 2018,
    title: "Market Expansion & Product Launches",
    role: "Commercial & Delivery Lead (MedTech Platforms)",
    company: "Medintegro — Ukraine",
    tags: ["MedTech"],
    summary:
      "Launched diagnostic and therapy platforms and scaled B2B adoption by combining go-to-market execution with reliable delivery and lifecycle support.",
    highlights: [
      "Introduced new product lines and structured adoption through repeatable delivery playbooks",
      "Expanded hospital client base across private and public healthcare providers",
    ],
    icon: "📈",
  },

  {
    id: "2016-ux",
    year: 2016,
    title: "UX Foundations (Applied to Product Discovery)",
    role: "UX Design Training",
    company: "GoUX — Kyiv",
    tags: ["Design", "Tech"],
    summary:
      "Built UX fundamentals to support clearer product discovery, better user flows, and faster alignment between users and engineers.",
    highlights: [
      "Developed practical proficiency in user flows, prototyping, and usability thinking",
    ],
    icon: "🎨",
  },

  {
    id: "2011-2012-ceo",
    year: 2011,
    title: "Operational Leadership Foundation",
    role: "CEO / Head of International Business Development",
    company: "Acropolus Biosciences (Genom Biotech branch) — Ukraine",
    tags: ["Startup"],
    summary:
      "Early operator role in regulated pharma: led execution across commercial, operations, and compliance functions in a high-stakes environment.",
    highlights: [
      "Managed $40M+ P&L with a 70+ FTE cross-functional organization",
      "Aligned operations with EU-GMP and national regulatory requirements",
    ],
    icon: "🏛️",
  },
  {
    id: "2005-2010-foundation",
    year: 2005,
    title: "Foundational Operational Experience (Pharma & Healthcare)",
    role: "Operational Execution | Regulatory Coordination | Stakeholder Alignment",
    company: "Pharma & Healthcare Operations - Kyiv, Ukraine",
    tags: ["Pharma", "Healthcare", "Operations"],
    summary:
      "Built core operating discipline in high-compliance healthcare environments by coordinating supply and delivery workflows, aligning cross-functional stakeholders, and developing the execution mindset that now informs my product systems architecture.",
    highlights: [
      "Built 5 years of hands-on operational discipline in regulated supplier-to-end-user workflows",
      "Built high-compliance execution foundations across 3 organizations in regulated settings",
      "Strengthened customer-facing execution through account continuity and multi-stakeholder problem-solving",
    ],
    icon: "Gear",
  },
];

export default timeline;



