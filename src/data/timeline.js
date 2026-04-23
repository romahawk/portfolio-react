// src/data/timeline.js
const timeline = [
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
      "Designed and prototyped product systems: Flowlogics (operations platform), LiveSurgery (real-time workspace PoC), SmartShooter (analytics)",
      "Translated messy operational needs into system primitives: state models, permissions, data flows, and UI workflows",
      "Used prototyping to de-risk architecture, accelerate delivery, and improve engineering alignment",
    ],
    icon: "🧭",
  },

  {
    id: "2024-2025-pharmalogis",
    year: 2024,
    title: "Technical Product Systems — Internal Tools",
    role: "Technical Product Manager (Internal Systems)",
    company: "PharmaLogis GmbH — Germany",
    tags: ["Tech"],
    summary:
      "Defined data contracts, schema architecture, and platform boundaries for the transition from fragmented Excel/email workflows to a centralized SQL-based internal operations platform for high-compliance logistics.",
    highlights: [
      "Defined the technical specifications, data contracts, and schema architecture for a unified logistics platform (SQL-based platform logic replacing manual coordination)",
      "Managed Engineering-to-Ops stakeholder alignment throughout platform definition and rollout",
      "Increased operational velocity by ~35% via unified dashboards and reduced manual cross-referencing",
      "Shortened executive reporting cycles by ~25% with real-time visualization and automated reconciliation",
    ],
    icon: "📦",
  },

  {
    id: "2019-2024-medintegro",
    year: 2019,
    title: "MedTech Platform Delivery & Systems Architecture",
    role: "Technical Product Manager | Systems & Platform Delivery",
    company: "Medintegro — Ukraine / EU",
    tags: ["MedTech"],
    summary:
      "Owned lifecycle delivery for complex MedTech systems in regulated environments — designing the implementation product and turning clinical workflows into a standardized, repeatable hardware/software stack with disciplined execution routines.",
    highlights: [
      "Delivered 20+ integrated systems using a modular platform approach (high reuse across implementations)",
      "Standardized the delivery lifecycle (discovery → install → training → support) as a repeatable delivery product",
      "Reduced operational overhead by ~30% through internal automation and standardized delivery routines",
      "Maintained System Integrity under extreme logistics constraints (2022–2023) with stable client delivery",
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
      "Orchestrated multi-vendor OR integrations across imaging, endoscopy, and video systems — aligning clinicians, vendors, and engineers around executable system scope.",
    highlights: [
      "Productized the deployment of integrated clinical platforms; standardized the hardware/software stack to reduce implementation lead times",
      "Standardized delivery lifecycle: discovery → planning → installation → training → support",
      "Managed cross-device workflows and handover under clinical and safety constraints",
    ],
    icon: "🔧",
  },

  {
    id: "2018-medintegro-founded",
    year: 2018,
    title: "Founded Medintegro — Product-Led Delivery",
    role: "Founder / Commercial & Delivery Lead",
    company: "Medintegro — Ukraine",
    tags: ["MedTech", "Startup"],
    summary:
      "Founded Medintegro and designed the implementation product for clinical platform integration — launching Ukraine's first compact SURGIMEDIA OR integration system and establishing repeatable delivery playbooks for scale.",
    highlights: [
      "Productized the deployment of integrated clinical platforms; standardized the hardware/software stack to reduce implementation lead times",
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
    title: "Strategic Systems & Ops Leadership",
    role: "Product & Business Systems Lead (CEO)",
    company: "Acropolus Biosciences (Genom Biotech branch) — Ukraine",
    tags: ["Startup"],
    summary:
      "Promoted to CEO within three months to lead a strategic operational turnaround — architecting the organizational operating system that handled $40M+ in turnover across procurement, compliance, and commercial execution.",
    highlights: [
      "Promoted to CEO within three months to lead a strategic operational turnaround",
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
      "Built core operating discipline in high-compliance healthcare environments by coordinating supply and delivery workflows, aligning cross-functional stakeholders, and developing the execution mindset that now informs product systems architecture.",
    highlights: [
      "Built 5 years of hands-on operational discipline in regulated supplier-to-end-user workflows",
      "High-compliance execution foundations across 3 organizations in regulated settings",
      "Strengthened customer-facing execution through account continuity and multi-stakeholder problem-solving",
    ],
    icon: "💊",
  },
];

export default timeline;
