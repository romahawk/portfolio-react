// src/data/projects.js

// ---------- Tech ----------
export const techProjects = [
  {
    id: "livesurgery",
    title: "LiveSurgery - Real-Time Surgical Collaboration Platform",
    summary:
      "Founder-led MedTech PoC delivering a fully functional OR workspace: multi-panel video coordination, drag-and-drop source assignment, role-based access (Surgeon / Observer / Admin), and WebSocket-powered real-time layout sync with optimistic concurrency. Backed by a FastAPI + SQLite REST API with session lifecycle management, an analytics dashboard, and a searchable session archive.",
    stack: ["React + Tailwind", "FastAPI + SQLite", "WebSocket (real-time sync)", "Vite + Recharts + dnd-kit", "WebRTC (next phase)"],
    tags: ["Real-Time Systems", "Decision Support", "MedTech", "B2B"],
    link: "https://livesurgery-landing.vercel.app/",
    caseStudy: "livesurgery",
  },
  {
    id: "flowlogics",
    title: "Flowlogics - API-Driven Supply Visibility and Lifecycle Control",
    summary:
      "Logistics operations platform centralizing orders, warehouse intake, and delivered transitions with a strict API contract, role-gated workflows, readonly demo mode, and timeline-based ETA risk visibility.",
    stack: ["Flask", "SQLite", "SQLAlchemy", "Vanilla JS", "Tailwind", "Chart.js"],
    tags: ["Workflow Systems", "Internal Tools", "Decision Support", "B2B"],
    link: "https://flowlogics.app/",
    caseStudy: "flowlogics",
  },
  {
    id: "alpharhythm",
    title: "AlphaRhythm - Trading Execution and Discipline System",
    summary:
      "Rule-based trading execution system designed to improve discipline, enforce strategy compliance, and turn discretionary decision-making into a repeatable workflow. Includes trade journaling, execution gates, violation tracking, and performance review loops for consistent trader behavior.",
    stack: ["React", "Vite", "Tailwind", "Firebase", "Firestore"],
    tags: ["Trading Systems", "FinTech", "Decision Support", "Productivity"],
    link: "https://alpharhythm.trade/",
    caseStudy: "alphorythm",
  },
  {
    id: "jobsprint",
    title: "JobSprint - Job Search Workflow Manager",
    summary:
      "Execution-oriented job search system for solo product and engineering candidates, replacing scattered notes and spreadsheets with a drag-and-drop application pipeline, weekly execution tracking, funnel analytics, and an offer-probability view tied to real conversion progress.",
    stack: ["React", "Vite", "Tailwind", "Local Storage", "Analytics"],
    tags: ["Workflow Systems", "Productivity", "Decision Support"],
    link: "https://jobsprint-demo.vercel.app/",
    caseStudy: "jobsprint",
    hiddenFromFrontend: true,
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
