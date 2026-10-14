// Single content source for the two-page site (/ and /services).
// Identity, numbers, degree, languages, contact, cases and services copy live here; components hold no copy.
// Facts must match the CV (public/roman-mazuryk-cv.pdf). scripts/check-consistency.mjs guards banned wording.

const EMAIL = "romazuryk@gmail.com";

export const contact = {
  email: EMAIL,
  emailHref: `mailto:${EMAIL}`,
  auditHref: `mailto:${EMAIL}?subject=AI%20Workflow%20Audit%20Request`,
  linkedin: "https://www.linkedin.com/in/roman-mazuryk/",
  github: "https://github.com/romahawk",
  cvUrl: "/roman-mazuryk-cv.pdf",
  // Intro-call booking link. Email fallback until the Cal.com link is set; replace with the full https://cal.com/... URL.
  calUrl: `mailto:${EMAIL}?subject=Intro%20call%20request`,
};

// Same title as the CV and LinkedIn headline. roleShort only where space is tight.
export const identity = {
  name: "Roman Mazuryk",
  role: "Technical Project Manager / Implementation Lead",
  roleShort: "TPM / Implementation Lead",
  eyebrow: "Hamburg area · Open to remote across the EU",
  subtitle: "I get complex systems live in regulated environments. MedTech and pharma logistics, from vendor selection to go-live and support. Now with hands-on AI.",
  // Not rendered since homepage v3 (credibility strip hidden); kept for reuse.
  metaLine: "EU work authorisation · English C1 · German B1 in progress",
  footerTagline: "Technical Project Manager / Implementation Lead · Ahrensburg / Hamburg",
};

export const navAi = {
  label: "AI",
  href: "/ai",
};

// Header and footer order: Work · About · AI · Contact. Items with an id are homepage anchors.
export const nav = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { href: navAi.href, label: navAi.label },
  { id: "contact", label: "Contact" },
];

export const navServices = {
  label: "Services",
  href: "/services",
  // Header button shown only on /services; same link as the page's intro-call buttons.
  bookCall: { label: "Book a call", href: contact.calUrl },
};

export const labels = {
  downloadCv: "Download CV",
  emailMe: "Email me",
  linkedin: "LinkedIn",
  backToWork: "See all delivery work",
  keyFacts: "Key facts",
  howIWorkWithAi: "How I work with AI",
  seeServices: "Looking for project support? See services",
  toggleNav: "Toggle navigation",
  scroll: "Scroll",
  scrollAria: "Scroll to the next section",
  backToTop: "Back to top",
  navigation: "Navigation",
  contact: "Contact",
};

// Consulting is reachable only from this small footer link (no services pitch on the homepage).
export const footer = {
  consulting: { label: "Consulting", href: "/services" },
};

export const facts = [
  "20+ years in regulated industries",
  "20+ systems delivered end to end",
  "GDP, ISO 9001, DICOM, PACS/RIS",
  "M.Sc. Computer Science, expected 12/2026",
];

export const work = {
  title: "Selected delivery work",
  intro: "Three projects, each with the problem, my role, what I did and the result.",
  otherBuildsTitle: "Other builds",
};

// Shape expected by components/common/ProofCaseCard.jsx.
export const cases = [
  {
    title: "Medintegro, OR imaging and PACS/RIS integration",
    problem: "Hospitals buying integrated ORs and imaging from several vendors needed image flows into PACS and RIS to work from day one.",
    role: "Founder and Technical Project Manager, senior client lead · 2012 to 2024",
    work: "Ran 20+ client projects across OR video, imaging and automation, from technical discovery through installation, acceptance testing and training. Configured DICOM image flows, coordinated PACS/RIS connectivity and vendors across three continents.",
    outcome: "Post-handover queries and open items down an estimated 20 to 25%, through standard workflows, checklists and handover docs. Repeat business from long-term clients.",
    links: [{ label: "See the OR integration case", href: "/proof-of-work/or-integration" }],
  },
  {
    title: "PharmaLogis, internal systems rollout under GDP and ISO 9001",
    status: "Demo",
    problem: "Trading and supply chain processes ran across separate systems and manual alignment, in a GDP and ISO 9001 certified pharma logistics company.",
    role: "Owned the full project lifecycle · 2024 to 2025",
    work: "Built and rolled out an internal software solution. Brought a role-based dashboard with order lifecycle tracking to production. Managed integrations and data flows for end-to-end traceability, and kept delivery GDP and ISO 9001 compliant. Public demo of the system (FlowLogics): Flask API, SQLAlchemy data model, role-gated workflows, ETA risk timeline, read-only demo mode.",
    outcome: "Manual coordination effort down an estimated ~30%, based on recurring alignment steps removed. Full traceability across the order lifecycle. Live demo and public repo.",
    links: [
      { label: "Live demo", href: "https://flowlogics.app/" },
      { label: "Code", href: "https://github.com/romahawk/flowlogix" },
    ],
  },
  {
    title: "AI Field Guide, how I run my own builds",
    problem: "A model forgets everything when a session ends, and the same model behaves very differently inside a good or a bad setup. AI-assisted builds need structure to stay reliable.",
    role: "Designed and built it myself",
    work: "For my own builds I also run an AI-assisted delivery system: defined roles, one source of truth, decision logs and review gates. I documented it as a public field guide: five pillars (harness, skills, memory, tools, cost), tool verdicts, a project matrix and a glossary.",
    outcome: "My working reference for building with AI agents: the terms, the practices that hold up, and the tools I actually use. Tied to six of my own projects, including my M.Sc. capstone (Rolevoice) and this site.",
    links: [{ label: "How I work with AI", href: "/ai" }],
  },
];

// Max 3 items. PharmaLogis / FlowLogics already has its own delivery card.
export const otherBuilds = [
  {
    status: "Pre-beta",
    title: "AlphaRhythm",
    line: "AlphaRhythm (pre-beta): trade journaling, discipline tracking and decision review.",
    url: "https://alpharhythm.trade",
  },
  {
    status: "Live demo",
    title: "LiveSurgery",
    line: "A deployed surgical video and collaboration prototype for clinical workflows, remote expertise and case visibility.",
    url: "https://livesurgery-landing.vercel.app/",
  },
];

export const delivery = {
  title: "How I run delivery",
  steps: [
    { title: "Discovery", text: "Requirements and workflows with clinical, operations and management stakeholders." },
    { title: "Scope and plan", text: "Delivery scope, vendor alignment, risks and timeline." },
    { title: "Build and integrate", text: "Configuration, integrations and data flows, acceptance testing with vendors and engineers." },
    { title: "Rollout and adoption", text: "Go-live, training, handover docs and support." },
  ],
  noteLink: { label: "How I work with AI", href: "/ai" },
};

// Homepage teaser for /ai. Replaces the one-line note that used to close the Delivery section.
export const aiTeaser = {
  title: "How I work with AI",
  text: "For my own builds I run a team of AI agents working daily from one versioned source of truth, with defined roles, decision logs and review gates. The AI page shows the setup, the practices that hold up, the tools I use and a public project you can inspect.",
  link: { label: "See how I work with AI", href: "/ai" },
};

export const about = {
  title: "About",
  photo: { src: "/images/profile-400.webp", alt: "Roman Mazuryk portrait" },
  paragraphs: [
    "For over a decade I owned the whole MedTech delivery chain at Medintegro, the integrator I founded. That meant picking manufacturers, planning the integration, getting hospitals live, supporting them after go-live and selling the next project. I ran delivery and the P&L.",
    "Then I moved into pharma logistics at PharmaLogis, where I built and rolled out internal systems under GDP and ISO 9001.",
    "Since leaving PharmaLogis in late 2025 I've upskilled full time. I'm finishing a Master of Science in Computer Science (due Dec 2026) and I build with AI every day, including my personal agent operating system, which I run my own work on.",
    "My job is making implementations land: clear scope, vendors aligned, users live and supported. AI is how I now do that faster.",
  ],
  experienceTitle: "Experience",
  factsTitle: "Education, languages and location",
};

// From the CV, newest first.
export const experience = [
  { role: "Independent projects and Master's work", org: "mazuryk.dev, Hamburg", dates: "01/2026 to present", line: "Rolevoice (M.Sc. capstone): AI-assisted foreign-language assessment for professionals. First pilot: German. AlphaRhythm (pre-beta)." },
  { role: "Commercial Specialist, Freight Forwarding and Logistics", org: "PharmaLogis GmbH, Reinbek near Hamburg", dates: "08/2024 to 11/2025", line: "Introduction of internal systems and process digitalisation across operations." },
  { role: "Founder and Technical Project Manager", org: "Medintegro, Kyiv", dates: "12/2012 to 05/2024", line: "Delivered 20+ client-facing system projects across OR video, imaging and automation." },
  { role: "CEO and Head of International Business Development", org: "Acropolus Biosciences, Kyiv", dates: "06/2011 to 08/2012", line: "Full P&L and operational ownership of a business with 70+ employees." },
  { role: "Sales and Project Roles, Pharma and Medical Technology", org: "International manufacturers and distributors, Kyiv", dates: "2005 to 2011", line: "Built the domain foundation in regulated environments." },
];

export const education = { label: "Education", value: "Master of Science in Computer Science · Woolf / GoIT Neoversity · expected 12/2026" };
export const languages = { label: "Languages", value: "Ukrainian and Russian (native) · English C1 · German B1, certification exam Dec 2026" };
export const location = { label: "Location", value: "Hamburg area · EU work authorisation · open to remote across the EU" };

export const contactSection = {
  title: "Hiring for a TPM or implementation role?",
  text: "The CV has the full picture. Happy to talk about a role in Hamburg or remote across the EU.",
};

// Condensed from the former /ai, /services and /collaborate pages. No prices, no client results.
export const services = {
  hero: {
    eyebrow: "Services · AI workflows for regulated operations",
    headline: "Practical AI for regulated operations",
    subline: "Built by someone who has implemented systems in hospitals and GDP-certified warehouses. A 5-day audit finds where AI belongs. A 2 to 4 week build delivers it with human review and an audit trail.",
    primary: { label: "Book a 20-min intro call", href: contact.calUrl },
    secondary: { label: "See a sample audit", href: "#sample" },
    credibility: ["20+ years in regulated industries", "20+ systems delivered", "GDP, ISO 9001", "DICOM, PACS/RIS"],
  },
  // In-page navigation: numbered sections plus FAQ. Labels follow the section kickers.
  sectionNav: {
    label: "On this page",
    items: [
      { id: "patterns", number: "01", label: "Where AI fits" },
      { id: "sample", number: "02", label: "Sample audit" },
      { id: "proof", number: "03", label: "Proof" },
      { id: "engagements", number: "04", label: "Engagements" },
      { id: "guardrails", number: "05", label: "Data and risk" },
      { id: "faq", label: "FAQ" },
    ],
  },
  patterns: {
    kicker: "01 · Where AI fits",
    title: "The model reads and drafts. Rules check. People decide.",
    intro: "Every workflow I build splits the work three ways, so it stays fast, explainable and auditable.",
    legend: { ai: "AI", rules: "Rules", human: "You decide" },
    items: [
      {
        title: "Document intake into structured data",
        text: "Delivery notes, certificates, forms and emails, read into a fixed schema and checked against your records.",
        ai: "Reads documents and extracts fields",
        rules: "Compares with orders and master data",
        human: "Confirms flagged fields",
      },
      {
        title: "Case and deviation records",
        text: "Free text, photos and emails turned into complete, categorised records with an owner and a status.",
        ai: "Structures the record, suggests a category",
        rules: "Required fields, routing, deadlines",
        human: "Decides and closes the case",
      },
      {
        title: "Status summaries and drafts",
        text: "Daily status, handover notes and supplier letters drafted from the records you already have.",
        ai: "Drafts the text",
        rules: "Uses only approved record data",
        human: "Edits and sends",
      },
    ],
    footnote: "Patterns, not client case studies.",
  },
  sample: {
    kicker: "02 · Sample audit",
    title: "See exactly what an audit delivers",
    // "not" is set in bold, as in the copy deck.
    text: {
      before: "A full sample audit of goods receipt and deviation handling in GDP pharmaceutical logistics. It covers the process map, opportunity matrix, pilot design with controls, measurement plan, roadmap and risks. It includes the part most audits skip: where AI should ",
      strong: "not",
      after: " be used.",
    },
    label: "Illustrative example. Fictional company, typical workflow, not a client project.",
    image: {
      src: "/images/services/sample-audit-pipeline.webp",
      srcSet: "/images/services/sample-audit-pipeline-800.webp 800w, /images/services/sample-audit-pipeline.webp 1545w",
      sizes: "(max-width: 900px) calc(100vw - 32px), 640px",
      fullSrc: "/images/services/sample-audit-pipeline.png",
      width: 1545,
      height: 512,
    },
    imageAlt: "Pilot design from the sample audit: AI extracts, rules check, warehouse confirms, AI structures the deviation, QA decides",
    cta: { label: "Download the sample audit (PDF, 8 pages)", href: "/sample-ai-workflow-audit.pdf" },
  },
  proof: {
    kicker: "03 · Proof",
    title: "What backs this up",
    rows: [
      {
        label: "Implementation",
        text: "20+ system implementations in hospitals, imaging and regulated logistics, from discovery to adoption.",
        links: [{ label: "Selected delivery work", href: "/#work" }],
      },
      {
        label: "Workflow system · Demo",
        text: "FlowLogics: role-gated intake, status tracking and ETA risk for logistics operations. No AI inside. It shows the system-of-record side that AI steps plug into.",
        links: [
          { label: "Live demo", href: "https://flowlogics.app/", external: true },
          { label: "Code", href: "https://github.com/romahawk/flowlogix", external: true },
        ],
      },
      {
        label: "AI practice",
        text: "The practices, tools and review gates I use to build with AI agents.",
        links: [{ label: "How I build with AI", href: "/ai" }],
      },
    ],
  },
  engagements: {
    kicker: "04 · Engagements",
    title: "Two ways to work together",
    labels: { format: "Format", get: "You get", outcome: "Outcome", price: "Price" },
    items: [
      {
        title: "AI Workflow Audit",
        badge: "Start here",
        format: "Fixed scope, 5 business days",
        get: "Process map, bottleneck analysis, AI opportunity matrix including where AI should not be used, pilot design with controls, measurement plan and roadmap",
        outcome: "A pilot scope your management and QA can sign off",
        price: "Fixed fee, quoted on request",
      },
      {
        title: "Build Sprint",
        format: "2 to 4 weeks, scoped from the audit",
        get: "A working pilot for one workflow: extraction, rules, review screens and records, connected to your existing systems where possible",
        outcome: "Tested in shadow mode against a baseline before any go-live decision. Handover docs included",
        price: "Quoted after the audit",
      },
    ],
  },
  guardrails: {
    kicker: "05 · Data and risk",
    title: "How I handle data and risk",
    items: [
      "AI prepares, people decide. No automated decisions where accountability matters.",
      "Every AI output is editable and logged with user and time.",
      "Model hosting and data processing are agreed before the build. I sign a data processing agreement (AVV) where personal data is involved.",
      "Your data is not used to train models.",
      "Least-privilege access, removed at the end of the engagement.",
      "Tested against your own historical data before anyone relies on it.",
    ],
  },
  about: {
    title: "Who you work with",
    photo: { src: "/images/profile-400.webp", alt: "Roman Mazuryk portrait" },
    text: "I'm Roman. Since 2012 I've implemented systems where mistakes are expensive: integrated operating rooms, imaging connected to hospital PACS, and internal systems in GDP-certified pharma logistics. Now I also build the software, including AI workflows. You work with me directly, from the first call to handover.",
    link: { label: "Full background", href: "/#about" },
  },
  fit: {
    title: "Fit",
    goodLabel: "Good fit",
    notIdealLabel: "Not a fit",
    good: [
      "Operations teams in logistics, pharma, MedTech and healthcare",
      "One document-heavy workflow that eats team time",
      "Managers who need a pilot their QA can sign off",
    ],
    notIdeal: [
      "A chatbot without any workflow change",
      "Large transformation programmes",
      "Regulatory certification or validation sign-off as the main need",
    ],
  },
  faq: {
    title: "FAQ",
    items: [
      { q: "Which AI models do you use?", a: "Commercial models via API, chosen to fit your hosting and data rules. Outputs are structured and logged, so every result can be checked." },
      { q: "Do you replace our WMS or ERP?", a: "No. Your existing system stays the system of record. The pilot sits next to it or feeds it." },
      { q: "What if AI is not the answer?", a: "Then the audit says so and recommends the simpler fix. When the logic is fixed, rules beat models." },
      { q: "What do you need from us?", a: "Three short interviews, sample documents and records, and read access where possible." },
    ],
  },
  cta: {
    title: "One workflow eating your team's time?",
    text: "In 20 minutes we'll know whether an audit makes sense.",
    primary: { label: "Book a 20-min intro call", href: contact.calUrl },
    secondary: { label: "Email me", href: contact.emailHref },
  },
};

export const seo = {
  home: {
    title: "Roman Mazuryk | Technical Project Manager / Implementation Lead",
    description: "Technical Project Manager and Implementation Lead. 20+ years in regulated MedTech, pharma and logistics, taking systems live since 2012, now adding hands-on AI. Hamburg area, open to remote across the EU.",
    url: "https://www.mazuryk.dev/",
  },
  services: {
    title: "AI Workflow Audits for Regulated Operations · Roman Mazuryk",
    description: "A 5-day AI workflow audit and 2 to 4 week build sprints for logistics, pharma and MedTech operations. AI reads and drafts, rules check, people decide. Book a 20-minute intro call.",
    url: "https://www.mazuryk.dev/services",
  },
};
