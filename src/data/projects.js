// src/data/projects.js

export const techProjects = [
  {
    id: "portfolio",
    title: "Developer Portfolio Website",
    summary:
      "Personal website to showcase my transition from MedTech to IT. Timeline, skills, MedTech projects, and contact form. Built with React + Vite.",
    stack: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
    tags: ["Web", "React"],
    link: "#", // replace later
  },
  {
    id: "livesurgery",
    title: "Livesurgery (Startup Prototype)",
    summary:
      "Concept-stage MedTech EdTech platform for live surgical collaboration and case sharing. PoC accepted to a startup incubator. Future: WebRTC + Firebase + React.",
    stack: ["Concept", "WebRTC", "Firebase", "React"],
    tags: ["Prototype", "MedTech"],
    link: "#",
  },
  {
    id: "supply-plan",
    title: "Quarterly Supply Plan Tracker",
    summary:
      "Internal web tool (prototype) for visualizing pharmaceutical supply plans for PHA. CSV import, status tracker, timeline chart. Built with Python (Pandas, Plotly) + Streamlit.",
    stack: ["Python", "Pandas", "Plotly", "Streamlit"],
    tags: ["Python", "Data viz"],
    link: "#",
  },
  {
    id: "smarthooper",
    title: "Smarthooper AI",
    summary:
      "AI-driven app to support young basketball athletes with training recommendations and performance tracking. Future: Flask + ML.",
    stack: ["Python", "OpenCV", "React (future)"],
    tags: ["AI/ML", "Computer Vision"],
    link: "#",
  },
  {
    id: "osta",
    title: "OSTA Website Redesign",
    summary:
      "Redesign of pharma distribution company website. React conversion, CMS integration, multi-language support.",
    stack: ["HTML", "CSS", "JS", "React"],
    tags: ["Web", "Redesign"],
    link: "#",
  },
];

export const medtechProjects = [
  {
    id: "surgiris-lights",
    title: "SURGIRIS LED Surgical Lights",
    summary:
      "Delivered and installed surgical lighting systems in 15+ ORs across Ukraine (incl. war-damaged hospital in Bucha). Integrated surgical field video, high CRI, energy efficiency.",
    stack: ["MedTech Healthcare", "Surgical Lighting"],
  },
  {
    id: "surgimedia",
    title: "SURGIMEDIA Integrated OR Systems",
    summary:
      "Full-cycle deployment of modular OR integration (visualization, routing, documentation). Supported neurosurgery, diagnostics, and endoscopy.",
    stack: ["MedTech Healthcare", "OR Integration"],
  },
  {
    id: "gas-pendants",
    title: "Medical Gas & Equipment Pendants",
    summary:
      "Installed SURGIRIS ceiling pendants for ICU/ORs: ergonomic design, electrical safety, efficient gas & device access.",
    stack: ["MedTech", "Ergonomics"],
  },
  {
    id: "diagnostic-therapeutic",
    title: "New Diagnostic & Therapeutic Equipment",
    summary:
      "Introduced Oxyhealth hyperbaric chamber, R.WOLF shockwave therapy, ACCUVEIN vein visualization, portable bone densitometry.",
    stack: ["MedTech Healthcare", "Diagnostics"],
  },
  {
    id: "surgical-monitors",
    title: "Surgical Monitors & Recorders",
    summary:
      "Supplied/integrated displays & recorders (NDS, FSN, ADVANTECH, Medicapture). Enabled real-time imaging, HD/4K routing.",
    stack: ["MedTech Healthcare", "Surgical Imaging"],
  },
];
