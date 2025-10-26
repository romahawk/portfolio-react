// src/data/projects.js

// ---------- Tech ----------
export const techProjects = [
  
  {
    id: "livesurgery",
    title: "Livesurgery (Startup Prototype)",
    summary:
      "Concept-stage MedTech EdTech platform for live surgical collaboration and case sharing. PoC accepted to an incubator. Future: WebRTC + Firebase + React.",
    stack: ["Concept", "WebRTC", "Firebase", "React"],
    tags: ["Prototype", "MedTech"],
    link: "https://livesurgery.vercel.app/",
    caseStudy: "livesurgery",
  },
  {
    id: "smartshooter",
    title: "SmartShooter AI",
    summary:
      "AI-driven app that helps basketball players track performance, analyze shooting data, and stay engaged. Built with React, Tailwind, and Firebase (Firestore + Auth).",
    stack: ["React", "Tailwind", "Firebase", "Firestore", "Auth"],
    tags: ["SportsTech", "Analytics", "Gamification"],
    link: "https://smartshooter.vercel.app",
    caseStudy: "smartshooter",
  },
  {
    id: "flowlogix",
    title: "FlowLogix — Logistic Tracker",
    summary:
      "Flask-based dashboard for supply planning and order tracking with RBAC, timeline visualization (ETD→ETA), CSV export, and dark-mode UI. Built with Flask, SQLite/SQLAlchemy, Tailwind, and Chart.js. Demo mode available.",
    stack: ["Flask", "SQLite", "SQLAlchemy", "Tailwind", "Chart.js"],
    tags: ["Logistics", "Dashboard", "Data viz"],
    link: "https://flowlogix.onrender.com/",              // replace with live demo or repo URL if you have one
    caseStudy: "flowlogix"
  }
,
  {
    id: "portfolio",
    title: "Developer Portfolio Website",
    summary:
      "Personal website to showcase my transition from MedTech to IT. Timeline, skills, MedTech projects, and contact form. Built with React + Vite.",
    stack: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
    tags: ["Web", "React"],
    link: "#",
  },
  {
    id: "medintegro",
    title: "Medintegro Website Rebuild",
    summary:
      "Headless rebuild of a MedTech distributor site: React + Tailwind, CMS integration, multilingual (DE/EN/UA), SEO & accessibility.",
    stack: ["React", "Next.js", "Tailwind", "Headless CMS"],
    tags: ["Web", "Rebuild", "Headless", "i18n", "SEO"],
    link: "#",
  },
  {
    id: "alphorythm",
    title: "Alphorythm — Strategy Analytics Platform",
    summary:
      "FinTech app unifying backtests and live trades in one dashboard — multi-strategy analytics, role-based access, real-time sync.",
    stack: ["React", "Tailwind", "Flask", "Firebase", "Chart.js", "SQLite"],
    tags: ["FinTech", "Analytics", "Dashboard", "MVP"],
    link: "#",
    caseStudy: "alphorythm"
  }


];

// ---------- MedTech ----------
// Use segment to split UI into two groups inside the MedTech tab:
//   - "integration" → technical integrations / installations
//   - "management"  → sales, tenders, multi-site rollouts (PM focus)
export const medtechProjects = [
  // Integration & Innovation
  {
    id: "surgiris-lights",
    segment: "integration",
    title: "SURGIRIS LED Surgical Lights",
    summary:
      "Delivered and installed advanced surgical lighting systems in 15+ ORs across Ukraine (incl. war-damaged hospital in Bucha). Integrated surgical field video, high CRI, energy efficiency.",
    stack: ["MedTech Healthcare", "Surgical Lighting"],
    icon: "💡",
  },
  {
    id: "surgimedia",
    segment: "integration",
    title: "SURGIMEDIA Integrated OR Systems",
    summary:
      "Full-cycle deployment of modular OR integration (visualization, routing, documentation). Supported neurosurgery, diagnostics, and endoscopy.",
    stack: ["MedTech Healthcare", "OR Integration"],
    icon: "🖥️",
  },
  {
    id: "gas-pendants",
    segment: "integration",
    title: "Medical Gas & Equipment Pendants",
    summary:
      "Installed SURGIRIS ceiling pendants for ICU/ORs: ergonomic design, electrical safety, and efficient gas/device access.",
    stack: ["MedTech", "Ergonomics"],
    icon: "🛠️",
  },
  {
    id: "diagnostic-therapeutic",
    segment: "integration",
    title: "New Diagnostic & Therapeutic Equipment",
    summary:
      "Introduced OxyHealth hyperbaric chamber, R.WOLF shockwave therapy, ACCUVEIN vein visualization, and portable densitometry.",
    stack: ["MedTech Healthcare", "Diagnostics"],
    icon: "🔎",
  },
  {
    id: "surgical-monitors",
    segment: "integration",
    title: "Surgical Monitors & Recorders",
    summary:
      "Supplied/integrated displays & recorders (NDS, FSN, ADVANTECH, Medicapture). Enabled real-time imaging and HD/4K routing.",
    stack: ["MedTech Healthcare", "Surgical Imaging"],
    icon: "📹",
  },

  // Sales & Project Management (new group)
  {
    id: "or-lighting-rollout",
    segment: "management",
    title: "OR Lighting Upgrade Program (Multi-site)",
    summary:
      "Led multi-hospital rollout of SURGIRIS LED lights: budgeting, tenders, vendor coordination, installation scheduling, clinician onboarding.",
    stack: ["Sales & PM", "Procurement", "Training"],
    icon: "📈",
  },
  {
    id: "ep-lab-install",
    segment: "management",
    title: "First EP Lab Installation (CR BARD)",
    summary:
      "Coordinated the first EP lab installation in Ukraine: stakeholder alignment, logistics, regulatory steps, and OR integration support.",
    stack: ["Project Delivery", "Vendor Mgmt", "Regulatory"],
    icon: "🏥",
  },
  {
    id: "national-launches",
    segment: "management",
    title: "National Product Launches",
    summary:
      "Introduced ACCUVEIN vein visualization and R.WOLF shockwave therapy nationwide: marketing, demos, KOL engagement, and training.",
    stack: ["Go-to-Market", "Field Training", "KOLs"],
    icon: "🚀",
  },
  {
    id: "hyperbaric-deployment",
    segment: "management",
    title: "Hyperbaric Therapy Deployment",
    summary:
      "Delivered and installed OxyHealth Fortius 420 hyperbaric chamber; handled import, safety, clinical onboarding, and maintenance process.",
    stack: ["Turnkey Delivery", "Safety", "Training"],
    icon: "🫧",
  },
];
