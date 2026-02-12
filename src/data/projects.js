// src/data/projects.js

// ---------- Tech ----------
export const techProjects = [
  {
    id: "livesurgery",
    title: "LiveSurgery — Real-Time Collaboration System (PoC)",
    summary:
      "Real-time MedTech workspace exploring multi-source video coordination and session orchestration. Designed to model low-latency interaction patterns and workflow integrity in high-stakes environments.",
    stack: ["React", "WebRTC (planned)", "Firebase (planned)", "Architecture PoC"],
    tags: ["Real-time", "Platform", "PoC", "Regulated"],
    link: "https://livesurgery.vercel.app/",
    caseStudy: "livesurgery",
  },
  {
    id: "smartshooter",
    title: "SmartShooter — Performance Analytics System",
    summary:
      "Training analytics system for athletes and coaches: structured session logging, accuracy metrics, and engagement loops. Built to turn raw training activity into repeatable feedback and measurable improvement.",
    stack: ["React", "Tailwind", "Firebase", "Firestore", "Auth"],
    tags: ["Analytics", "Decision Support", "Platform"],
    link: "https://smartshooter.vercel.app",
    caseStudy: "smartshooter",
  },
  {
    id: "flowlogix",
    title: "FlowLogix — Logistics Orchestration Dashboard",
    summary:
      "Internal operations platform for pharma logistics: role-based access, delivery state tracking (ETD→ETA→ATA), and decision-support reporting designed to reduce coordination overhead and improve data integrity.",
    stack: ["Flask", "SQLite", "SQLAlchemy", "Tailwind", "Chart.js"],
    tags: ["Internal Tools", "Decision Support", "Platform", "Regulated", "B2B"],
    link: "https://flowlogix.onrender.com/",
    caseStudy: "flowlogix",
    warmupNote: "Tip: first load may take ~30s (free Render).",
  },
  {
    id: "portfolio",
    title: "Portfolio — Product Narrative System",
    summary:
      "This site treated as a product artifact: clear positioning, evidence hierarchy, and case-study storytelling designed for executive scanability and technical credibility.",
    stack: ["React", "Vite", "Tailwind"],
    tags: ["Platform", "B2B", "Decision Support"],
    link: "#",
    caseStudy: "portfolio",
  },
  {
    id: "medintegro",
    title: "Medintegro — B2B Platform Rebuild (In Progress)",
    summary:
      "Product-led rebuild of a MedTech distributor site: modular information architecture, multilingual content (DE/EN/UA), SEO/accessibility, and CMS-ready structure designed for scalable growth.",
    stack: ["Next.js", "React", "Tailwind"],
    tags: ["B2B", "Platform", "Regulated"],
    link: "#",
    caseStudy: "medintegro",
    inDevelopment: true,
  },
  {
    id: "alphorythm",
    title: "AlphaRhythm — Decision Quality Analytics (In Progress)",
    summary:
      "Trading execution analytics system unifying backtests and live trades to measure decision quality, risk behavior, and system adherence — turning discretionary execution into structured review loops.",
    stack: ["React", "Tailwind", "Node/Flask (planned)", "Firebase", "Chart.js", "SQLite"],
    tags: ["Analytics", "Decision Support", "Platform", "PoC"],
    link: "#",
    caseStudy: "alphorythm",
    inDevelopment: true,
  },
];

// ---------- MedTech ----------
export const medtechProjects = [
  // Integration & Innovation
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

  // Sales & Project Management
  {
    id: "national-launches",
    segment: "management",
    title: "National Product Launches (MedTech)",
    summary:
      "Launched MedTech products nationwide: positioning, demos, KOL engagement, training, and early adoption—aligning vendor goals with hospital realities.",
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
