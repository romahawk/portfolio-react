// src/data/projects.js

// ---------- Tech ----------
export const techProjects = [
  {
    id: "livesurgery",
    title: "LiveSurgery - Real-Time Surgical Collaboration System",
    summary:
      "Founder-led MedTech product initiative unifying multi-source video, role-based interaction, and session governance into one OR workflow designed for reliability under clinical constraints.",
    stack: ["React", "WebRTC (planned)", "Firebase (planned)", "Architecture PoC"],
    tags: ["Real-time", "Platform", "PoC", "Regulated"],
    link: "https://livesurgery.vercel.app/",
    caseStudy: "livesurgery",
  },
  {
    id: "flowlogix",
    title: "FlowLogix - Supply Visibility and Lifecycle Control",
    summary:
      "Decision-support system centralizing orders, warehouse intake, and delivery transitions with role-gated workflows and ETA risk visibility to reduce coordination drag and reporting drift.",
    stack: ["Flask", "SQLite", "SQLAlchemy", "Tailwind", "Chart.js"],
    tags: ["Internal Tools", "Decision Support", "Platform", "Regulated", "B2B"],
    link: "https://flowlogix.onrender.com/",
    caseStudy: "flowlogix",
    warmupNote: "Tip: first load may take ~30s (free Render).",
  },
  {
    id: "smartshooter",
    title: "SmartShooter - Training Log and Shooting Analytics",
    summary:
      "Player-coach performance system combining low-friction session logging, zone-based analytics, and habit loops (streaks/challenges) to improve training consistency and decision quality.",
    stack: ["React", "Tailwind", "Firebase", "Firestore", "Auth"],
    tags: ["Analytics", "Decision Support", "Platform"],
    link: "https://smartshooter.vercel.app",
    caseStudy: "smartshooter",
  },
  {
    id: "portfolio",
    title: "Portfolio - Product Narrative System",
    summary:
      "Product artifact designed around executive scanability: clear positioning, evidence hierarchy, and case-study storytelling that translates delivery depth into decision-ready narrative.",
    stack: ["React", "Vite", "Tailwind"],
    tags: ["Platform", "B2B", "Decision Support"],
    link: "#",
    caseStudy: "portfolio",
  },
  {
    id: "medintegro",
    title: "Medintegro - B2B Platform Rebuild (In Progress)",
    summary:
      "Product-led rebuild of a MedTech distributor platform with modular information architecture, multilingual content (DE/EN/UA), and CMS-ready structure for scalable growth.",
    stack: ["Next.js", "React", "Tailwind"],
    tags: ["B2B", "Platform", "Regulated"],
    link: "#",
    caseStudy: "medintegro",
    inDevelopment: true,
  },
  {
    id: "alphorythm",
    title: "AlphaRhythm - Strategy Analytics Platform (In Progress)",
    summary:
      "Decision-support platform unifying imports, backtests, and live trading logs into one consistent review workflow to reduce metric ambiguity and improve execution discipline.",
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
