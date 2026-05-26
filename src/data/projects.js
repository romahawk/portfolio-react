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
