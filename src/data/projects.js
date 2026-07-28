// src/data/projects.js

// ---------- Tech ----------
export const techProjects = [
  {
    id: "clinical-evidence-workflow",
    title: "Clinical Evidence Workflow",
    summary:
      "Flagship proof: AI-assisted workflow for MedTech evidence review, claim mapping, traceability, and handover.",
    proof: {
      problem: "MedTech evidence, claims, and handover context can scatter across PDFs, spreadsheets, review notes, and tacit product knowledge.",
      system: "AI-assisted evidence review workflow with claim mapping, source traceability, reviewer-ready outputs, SOP logic, and handover artifacts.",
      value: "Creates a clearer audit trail from evidence to claim support, reduces review ambiguity, and gives product, regulatory, and commercial teams a shared working model.",
      evidence: "Workflow architecture, information model, AI-assisted extraction patterns, traceability matrix, acceptance criteria, and documentation handover.",
    },
    stack: ["AI workflow design", "Evidence mapping", "Traceability", "SOP handover"],
    tags: ["Workflow Systems", "Decision Support", "MedTech", "AI-Assisted"],
    caseStudy: "clinical-evidence-workflow",
    caseStudyUrl: "/medtech-ai-systems/clinical-evidence-workflow",
    status: "Concept Workflow / Prototype Concept",
    icon: "SearchCheck",
  },
  {
    id: "livesurgery",
    title: "LiveSurgery",
    summary:
      "Surgical workflow intelligence for multi-source OR video, session structuring, education, and surgical collaboration.",
    proof: {
      problem: "Surgical collaboration and education workflows depend on fragmented video sources, manual coordination, and weak session structure.",
      system: "Real-time OR workspace with multi-panel video coordination, drag-and-drop source assignment, roles, session lifecycle logic, and archive/search patterns.",
      value: "Turns live surgical activity into a structured collaboration and teaching environment with clearer roles, reusable sessions, and operational visibility.",
      evidence: "React workspace, FastAPI backend, SQLite data model, WebSocket sync, role-based access, analytics dashboard, and session archive.",
    },
    stack: ["React + Tailwind", "FastAPI + SQLite", "WebSocket (real-time sync)", "Vite + Recharts + dnd-kit", "WebRTC (next phase)"],
    tags: ["Real-Time Systems", "Decision Support", "MedTech", "B2B"],
    link: "https://livesurgery-landing.vercel.app/",
    caseStudy: "livesurgery",
    status: "Prototype",
  },
  {
    id: "flowlogics",
    title: "FlowLogix",
    summary:
      "Operations visibility dashboard for workflow visibility and operational decision support.",
    proof: {
      problem: "Operational status, handoffs, warehouse intake, and delivery updates can live across spreadsheets, emails, and disconnected reports.",
      system: "API-driven visibility dashboard centralizing orders, warehouse intake, delivered transitions, role-gated workflows, and timeline-based ETA risk.",
      value: "Reduces status chasing and gives teams a shared operational picture for faster decisions and cleaner accountability.",
      evidence: "Flask API, SQLite schema, SQLAlchemy models, role states, readonly demo mode, dashboard views, and Chart.js reporting.",
    },
    stack: ["Flask", "SQLite", "SQLAlchemy", "Vanilla JS", "Tailwind", "Chart.js"],
    tags: ["Workflow Systems", "Internal Tools", "Decision Support", "B2B"],
    link: "https://flowlogics.app/",
    caseStudy: "flowlogics",
    status: "Built System",
  },
  {
    id: "vendor-free-supply-tracker",
    title: "Vendor-Free Supply Tracker",
    summary:
      "Logistics and stock reporting workflow system for purchase orders, warehouse intake, delivered goods, and stock reporting.",
    proof: {
      problem: "Purchase order status, warehouse intake, delivered goods, and stock reporting were too dependent on manual coordination and fragmented spreadsheet logic.",
      system: "Structured supply workflow model covering PO lifecycle, warehouse transitions, delivered-goods states, stock reporting, and data contracts for internal operations.",
      value: "Improves reporting reliability, reduces manual reconciliation, and gives operations clearer lifecycle visibility across supply activity.",
      evidence: "Workflow mapping, SQL-ready schema logic, status model, reporting requirements, operational acceptance criteria, and stakeholder handover.",
    },
    stack: ["Workflow mapping", "SQL data modeling", "Operations reporting", "Acceptance criteria"],
    tags: ["Workflow Systems", "Internal Tools", "Decision Support", "B2B"],
    caseStudy: "vendor-free-supply-tracker",
    status: "Archived Experiment",
    icon: "Boxes",
    archivedFromMain: true,
  },
  {
    id: "alpharhythm",
    title: "AlphaRhythm",
    summary:
      "Rule-based execution and compliance system for trading discipline, rule checking, violations, and weekly review.",
    proof: {
      problem: "Discretionary trading decisions are hard to review when rules, violations, and weekly learning loops are not captured in one system.",
      system: "Rule-based execution workflow with trade journaling, execution gates, violation tracking, compliance checks, and weekly review loops.",
      value: "Turns behavior into reviewable data, strengthens discipline, and makes process improvement visible over time.",
      evidence: "React product flow, Firebase/Firestore persistence, rule model, review mechanics, and compliance-oriented UX decisions.",
    },
    stack: ["React", "Vite", "Tailwind", "Firebase", "Firestore"],
    tags: ["Trading Systems", "FinTech", "Decision Support", "Productivity"],
    link: "https://alpharhythm.trade/",
    caseStudy: "alphorythm",
    status: "Archived Experiment",
    archivedFromMain: true,
  },
  {
    id: "jobsprint",
    title: "JobSprint",
    summary:
      "AI-assisted workflow/productivity system for job search pipeline, role capture, application tracking, and compliance support.",
    proof: {
      problem: "Job search execution often becomes scattered across saved roles, notes, spreadsheets, reminders, and inconsistent follow-up routines.",
      system: "AI-assisted workflow manager with role capture, application pipeline, drag-and-drop status tracking, weekly execution analytics, and compliance support.",
      value: "Creates a repeatable operating rhythm, improves follow-through, and makes pipeline quality visible instead of relying on memory.",
      evidence: "React workflow UI, local persistence, funnel analytics, pipeline state model, and AI-assisted productivity patterns.",
    },
    stack: ["React", "Vite", "Tailwind", "Local Storage", "Analytics"],
    tags: ["Workflow Systems", "Productivity", "Decision Support"],
    link: "https://jobsprint-demo.vercel.app/",
    caseStudy: "jobsprint",
    status: "Archived Experiment",
    archivedFromMain: true,
  },
];

// ---------- MedTech ----------
export const medtechProjects = [
  {
    id: "surgiris-lights",
    segment: "integration",
    title: "SURGIRIS LED Surgical Lights (Multi-site Delivery)",
    summary:
      "Standardized multi-site OR lighting deployments across 15+ ORs, aligning clinical workflow requirements with installation governance, training, and lifecycle reliability under disruption constraints.",
    stack: ["Program Delivery", "Clinical Workflow", "Installation & Training"],
    icon: "Lightbulb",
  },
  {
    id: "surgimedia",
    segment: "integration",
    title: "SURGIMEDIA Integrated OR Systems",
    summary:
      "Orchestrated end-to-end OR integration programs for visualization, routing, and documentation workflows across specialties, with multi-vendor governance and clinical alignment.",
    stack: ["System Integration", "Multi-vendor", "OR Workflow"],
    icon: "MonitorCog",
  },
  {
    id: "gas-pendants",
    segment: "integration",
    title: "Medical Gas & Equipment Pendants (ICU/OR)",
    summary:
      "Governed ICU/OR pendant system deployments for safety, ergonomics, and operational reliability while aligning technical requirements with clinical usage and facility constraints.",
    stack: ["Safety", "Ergonomics", "Deployment"],
    icon: "Wrench",
  },
  {
    id: "diagnostic-therapeutic",
    segment: "integration",
    title: "Diagnostic & Therapeutic Systems (Launch + Deployment)",
    summary:
      "Orchestrated launch and deployment of advanced diagnostic and therapy systems through structured adoption governance, stakeholder onboarding, and lifecycle readiness.",
    stack: ["Go-to-Market", "Clinical Adoption", "Training"],
    icon: "SearchCheck",
  },
  {
    id: "surgical-monitors",
    segment: "integration",
    title: "Surgical Monitors & Recorders (Imaging Workflow)",
    summary:
      "Integrated displays and recorders for real-time imaging and HD/4K routing, with vendor orchestration, installation readiness, and clinician onboarding for workflow reliability.",
    stack: ["Imaging Workflow", "Integration", "Supportability"],
    icon: "Camera",
  },
  {
    id: "national-launches",
    segment: "management",
    title: "National Product Launches (MedTech)",
    summary:
      "Launched MedTech products nationwide: positioning, demos, KOL engagement, training, and early adoption - aligning vendor goals with hospital realities.",
    stack: ["GTM", "Stakeholder Alignment", "Training"],
    icon: "Rocket",
  },
  {
    id: "or-lighting-rollout",
    segment: "management",
    title: "OR Lighting Upgrade Program (Multi-hospital)",
    summary:
      "Governed a multi-hospital OR lighting rollout across budgeting, tenders, scheduling, vendor orchestration, installation standards, and clinician onboarding.",
    stack: ["Program Management", "Procurement", "Rollout"],
    icon: "TrendingUp",
  },
  {
    id: "hyperbaric-deployment",
    segment: "management",
    title: "Hyperbaric Therapy Deployment (Turnkey)",
    summary:
      "Orchestrated turnkey hyperbaric therapy deployment end-to-end: import controls, safety compliance, site readiness, clinical onboarding, and lifecycle maintenance processes.",
    stack: ["Turnkey Delivery", "Safety", "Operations"],
    icon: "Waves",
  },
];

export const projectCategories = {
  aiAutomation: "aiAutomation",
  medtech: "medtech",
  fullstack: "fullstack",
  archived: "archived",
};

export const projectPortfolio = [
  {
    title: "AI Workflow Audit",
    category: projectCategories.aiAutomation,
    status: "Productized service",
    summary: "Map one messy process, identify automation opportunities, and define the smallest useful AI-assisted workflow.",
    problem: "Operational work is scattered across spreadsheets, messages, documents, and individual memory.",
    solution: "A workflow map, friction analysis, automation opportunity matrix, and practical first-step implementation plan.",
    proof: "Uses the same workflow modeling approach shown across the AI workflow library and internal tool prototypes.",
    stack: ["Workflow mapping", "AI assistants", "SOP logic", "Automation planning"],
    links: [{ label: "Request audit", href: "mailto:romazuryk@proton.me?subject=AI%20Workflow%20Audit%20Request" }],
    relevance: "SME automation entry point",
    featured: true,
  },
  {
    title: "Automation Sprint",
    category: projectCategories.aiAutomation,
    status: "Productized service",
    summary: "Build one working automation or workflow prototype with practical tools and human review points.",
    problem: "Teams want automation, but the workflow, data handoffs, ownership, and exception paths are unclear.",
    solution: "A scoped prototype using tools such as n8n, Make, Airtable, Notion, APIs, AI assistants, or a custom UI where useful.",
    proof: "Extends patterns from FlowLogix, JobSprint, and AI-assisted workflow concepts.",
    stack: ["n8n / Make", "APIs", "Airtable / Notion", "React / Next.js"],
    links: [{ label: "Discuss sprint", href: "mailto:romazuryk@proton.me?subject=Automation%20Sprint%20Discussion" }],
    relevance: "SME automation build path",
    featured: true,
  },
  {
    title: "OR Integration & Surgical Workflow Systems",
    category: projectCategories.medtech,
    status: "Real implementation experience",
    summary: "Operating room integration, surgical lights, video/audio workflows, training, handover, and hospital stakeholder coordination.",
    problem: "OR environments combine clinical workflow, infrastructure, vendors, equipment, documentation, and handover risk.",
    solution: "Implementation coordination and workflow ownership across delivery, installation, clinical onboarding, and operational handover.",
    proof: "Surgimedia, Surgiris, Medintegro, surgical lights, surgical video/audio, medical equipment implementation, multi-vendor delivery.",
    stack: ["OR integration", "Stakeholder coordination", "Training", "Implementation documentation"],
    links: [{ label: "View proof", href: "/proof-of-work/or-integration" }],
    relevance: "MedTech Product / Project / Implementation credibility",
    featured: true,
  },
  {
    title: "LiveSurgery",
    category: projectCategories.medtech,
    status: "Prototype",
    summary: "Surgical workflow intelligence for multi-source OR video, session structuring, education, and surgical collaboration.",
    problem: "Surgical collaboration and education workflows depend on fragmented video sources and weak session structure.",
    solution: "Real-time OR workspace with role-based sessions, source assignment, archive/search patterns, and analytics direction.",
    proof: "React workspace, FastAPI backend, SQLite model, WebSocket sync, role-based access, analytics dashboard.",
    stack: ["React", "FastAPI", "SQLite", "WebSocket", "Workflow UX"],
    links: [{ label: "Live demo", href: "https://livesurgery-landing.vercel.app/" }],
    relevance: "MedTech product concept and full-stack prototype proof",
    featured: true,
  },
  {
    title: "mazuryk.dev",
    category: projectCategories.fullstack,
    status: "Built system",
    summary: "This portfolio: a routed React/Vite content system for market-specific positioning, proof pages, SEO, theme, and language controls.",
    problem: "One portfolio needed to support AI automation, MedTech credibility, and full-stack proof without feeling like three unrelated careers.",
    solution: "A single strategic router with curated vertical pages and reusable project/content data.",
    proof: "React SPA routing, reusable components, metadata hook, responsive CSS system, i18n and theme controls.",
    stack: ["React", "Vite", "JavaScript", "CSS", "Vercel"],
    links: [{ label: "GitHub", href: "https://github.com/romahawk" }],
    relevance: "Full-stack product and positioning system",
    featured: true,
  },
  {
    title: "FlowLogix",
    category: projectCategories.fullstack,
    status: "Built system",
    summary: "Operations visibility dashboard for workflow visibility, status handoffs, ETA risk, and accountability.",
    problem: "Operations teams lose time to status chasing across emails, spreadsheets, and disconnected reports.",
    solution: "API-driven dashboard with order states, warehouse intake, delivered transitions, role-gated workflows, and reporting.",
    proof: "Flask API, SQLite schema, SQLAlchemy models, role states, readonly demo mode, dashboard views, Chart.js reporting.",
    stack: ["Flask", "SQLite", "SQLAlchemy", "Vanilla JS", "Tailwind", "Chart.js"],
    links: [{ label: "Live demo", href: "https://flowlogics.app/" }],
    relevance: "Internal tools and workflow dashboard proof",
    featured: true,
  },
  {
    title: "SmartShooter",
    category: projectCategories.fullstack,
    status: "Prototype",
    summary: "Technical product prototype showing structured interaction design and execution discipline.",
    problem: "Useful as broader technical proof, but less central to the current three-vector positioning.",
    solution: "Archived as supporting evidence rather than primary homepage material.",
    proof: "Existing case-study component remains available in the codebase.",
    stack: ["React", "Product UX", "Prototype"],
    links: [],
    relevance: "Archived technical proof",
    featured: false,
  },
  {
    title: "AlphaRhythm",
    category: projectCategories.archived,
    status: "Archived experiment",
    summary: "Rule-based execution and review system for trading discipline.",
    problem: "Less relevant to the main market routes.",
    solution: "Kept as archived evidence of workflow thinking and product execution.",
    proof: "React product flow, Firebase/Firestore persistence, rule model, review mechanics.",
    stack: ["React", "Firebase", "Firestore"],
    links: [{ label: "Live demo", href: "https://alpharhythm.trade/" }],
    relevance: "Archived workflow-system experiment",
    featured: false,
  },
  {
    title: "JobSprint",
    category: projectCategories.archived,
    status: "Archived experiment",
    summary: "AI-assisted job search pipeline and productivity system.",
    problem: "Useful proof, but not a primary market-facing wedge.",
    solution: "Kept as supporting full-stack/workflow evidence.",
    proof: "React workflow UI, local persistence, analytics, pipeline state model.",
    stack: ["React", "Vite", "Local Storage", "Analytics"],
    links: [{ label: "Live demo", href: "https://jobsprint-demo.vercel.app/" }],
    relevance: "Archived productivity workflow proof",
    featured: false,
  },
];

export function getProjectsByCategory(category, { featuredOnly = false } = {}) {
  return projectPortfolio.filter((project) => (
    project.category === category && (!featuredOnly || project.featured)
  ));
}
