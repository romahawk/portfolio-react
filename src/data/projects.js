// src/data/projects.js

// ---------- Tech ----------
export const techProjects = [
  {
    id: "livesurgery",
    title: "LiveSurgery (Platform PoC)",
    summary:
      "Concept-stage platform for live surgical collaboration and education. Explores session orchestration, multi-source video workflows, and real-time interaction patterns under high-stakes constraints.",
    stack: ["Concept", "WebRTC", "Firebase", "React"],
    tags: ["Prototype", "MedTech", "Platform"],
    link: "https://livesurgery.vercel.app/",
    caseStudy: "livesurgery",
  },
  {
    id: "smartshooter",
    title: "SmartShooter",
    summary:
      "Performance tracking product for basketball players and coaches: structured training logs, accuracy analytics, and engagement mechanics for long-term improvement.",
    stack: ["React", "Tailwind", "Firebase", "Firestore", "Auth"],
    tags: ["SportsTech", "Analytics", "Gamification"],
    link: "https://smartshooter.vercel.app",
    caseStudy: "smartshooter",
  },
  {
    id: "flowlogix",
    title: "FlowLogix — Supply Visibility Dashboard",
    summary:
      "Decision-support dashboard for logistics: role-based access, order tracking, ETD→ETA timeline visibility, and reporting to reduce manual coordination and improve reliability.",
    stack: ["Flask", "SQLite", "SQLAlchemy", "Tailwind", "Chart.js"],
    tags: ["Logistics", "Decision Support", "Data viz"],
    link: "https://flowlogix.onrender.com/",
    caseStudy: "flowlogix",
    warmupNote: "Tip: first load may take ~30s (free Render).",
  },
  {
    id: "portfolio",
    title: "Technical Product Manager Portfolio",
    summary:
      "This website as a product: designed for recruiter clarity—PM-first positioning, case-study narrative, and evidence of system thinking and decision-making.",
    stack: ["React", "Vite", "Tailwind"],
    tags: ["Positioning", "Portfolio"],
    link: "#",
    caseStudy: "portfolio",
  },
  {
    id: "medintegro",
    title: "Medintegro Website Rebuild",
    summary:
      "Product-led rebuild plan for a B2B MedTech distributor site: modular content structure, multilingual (DE/EN/UA), SEO/accessibility, and CMS integration.",
    stack: ["React", "Next.js", "Tailwind"],
    tags: ["B2B", "Rebuild", "SEO"],
    link: "#",
    caseStudy: "medintegro",
    inDevelopment: true,
  },
  {
    id: "alphorythm",
    title: "Alphorythm — Strategy Analytics",
    summary:
      "Trading analytics platform concept unifying backtests and live trades—focused on decision quality, risk behavior, and repeatable evaluation of strategies.",
    stack: ["React", "Tailwind", "Flask", "Firebase", "Chart.js", "SQLite"],
    tags: ["FinTech", "Analytics", "Dashboard", "MVP"],
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
      "Delivered and deployed surgical lighting across 15+ ORs. Coordinated clinical requirements, installation, training, and lifecycle support—including deployments under wartime disruption.",
    stack: ["Program Delivery", "Clinical Workflow", "Installation & Training"],
    icon: "💡",
  },
  {
    id: "surgimedia",
    segment: "integration",
    title: "SURGIMEDIA Integrated OR Systems",
    summary:
      "End-to-end OR integration programs: visualization, routing, and documentation workflows. Coordinated multi-vendor components and clinical stakeholders across specialties.",
    stack: ["System Integration", "Multi-vendor", "OR Workflow"],
    icon: "🖥️",
  },
  {
    id: "gas-pendants",
    segment: "integration",
    title: "Medical Gas & Equipment Pendants (ICU/OR)",
    summary:
      "Delivered ICU/OR pendant systems with a focus on safety, ergonomics, and operational reliability—aligning technical requirements with clinical usage and facility constraints.",
    stack: ["Safety", "Ergonomics", "Deployment"],
    icon: "🛠️",
  },
  {
    id: "diagnostic-therapeutic",
    segment: "integration",
    title: "Diagnostic & Therapeutic Systems (Launch + Deployment)",
    summary:
      "Introduced and deployed advanced systems (hyperbaric therapy, shockwave therapy, vein visualization, portable densitometry) through structured stakeholder adoption and training.",
    stack: ["Go-to-Market", "Clinical Adoption", "Training"],
    icon: "🔎",
  },
  {
    id: "surgical-monitors",
    segment: "integration",
    title: "Surgical Monitors & Recorders (Imaging Workflow)",
    summary:
      "Integrated displays/recorders enabling real-time imaging and HD/4K routing. Owned vendor coordination, installation readiness, and clinician onboarding to ensure reliable workflows.",
    stack: ["Imaging Workflow", "Integration", "Supportability"],
    icon: "📹",
  },

  // Sales & Project Management
  {
    id: "national-launches",
    segment: "management",
    title: "National Product Launches (MedTech)",
    summary:
      "Launched MedTech products nationwide: positioning, demos, KOL engagement, training, and early adoption—aligning vendor goals with hospital realities.",
    stack: ["GTM", "Stakeholder Alignment", "Training"],
    icon: "🚀",
  },
  {
    id: "or-lighting-rollout",
    segment: "management",
    title: "OR Lighting Upgrade Program (Multi-hospital)",
    summary:
      "Led multi-site rollout: budgeting, procurement/tenders, scheduling, vendor coordination, installation governance, and clinician onboarding.",
    stack: ["Program Management", "Procurement", "Rollout"],
    icon: "📈",
  },
  {
    id: "hyperbaric-deployment",
    segment: "management",
    title: "Hyperbaric Therapy Deployment (Turnkey)",
    summary:
      "Delivered and deployed a hyperbaric chamber program end-to-end: import, safety compliance, site readiness, clinical onboarding, and maintenance processes.",
    stack: ["Turnkey Delivery", "Safety", "Operations"],
    icon: "🫧",
  },
];
