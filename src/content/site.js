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
};

export const identity = {
  name: "Roman Mazuryk",
  role: "Technical Project Manager",
  eyebrow: "Technical Project Manager · Hamburg / Remote (EU)",
  headline: "System implementation in regulated environments",
  subline: "12+ years delivering complex system implementations in MedTech, pharma and logistics. 20+ systems taken from discovery to rollout and user adoption.",
  metaLine: "EU work authorisation · English C1 · German B1",
  footerTagline: "Technical Project Manager for system implementation in regulated environments. Hamburg / Remote (EU).",
};

export const nav = [
  { id: "work", label: "Work" },
  { id: "delivery", label: "Delivery" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export const navServices = { label: "Services", href: "/services" };

export const labels = {
  downloadCv: "Download CV",
  emailMe: "Email me",
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

export const facts = [
  "12+ years of system implementation",
  "20+ systems delivered end to end",
  "GDP, ISO 9001, DICOM, PACS/RIS",
  "M.Sc. Computer Science, expected 12/2026",
];

export const work = {
  title: "Selected delivery work",
  intro: "Two delivery projects with the problem, my role, what I did and the result, plus how I run my own builds.",
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
    work: "Built and rolled out an internal software solution. Brought a role-based dashboard with order lifecycle tracking to production. Managed integrations and data flows for end-to-end traceability, and kept delivery GDP and ISO 9001 compliant. Public demo (FlowLogix): Flask API, SQLAlchemy data model, role-gated workflows, ETA risk timeline, read-only demo mode.",
    outcome: "Manual coordination effort down an estimated ~30%, measured by recurring alignment steps removed. Full traceability across the order lifecycle. Live demo and public repo.",
    links: [
      { label: "Live demo", href: "https://flowlogics.app/" },
      { label: "Code", href: "https://github.com/romahawk/flowlogix" },
    ],
  },
  {
    title: "AI Field Guide, how I run my own builds",
    role: "Designed and built it myself",
    work: "For my own builds I also run an AI-assisted delivery system: defined roles, one source of truth, decision logs and review gates.",
    outcome: "My working reference for building with AI agents: the terms, the practices that hold up, and the tools I actually use across my own projects.",
    links: [{ label: "How I work with AI", href: "/kb" }],
  },
];

// Max 3 items. FlowLogix is already in the PharmaLogis card.
export const otherBuilds = [
  {
    status: "Live",
    title: "AlphaRhythm",
    line: "A deployed product for structured trade journaling, discipline tracking, risk logic and decision-review workflows.",
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
  note: "For my own builds I also run an AI-assisted delivery system: defined roles, one source of truth, decision logs and review gates.",
  noteLink: { label: "How I work with AI", href: "/kb" },
};

export const about = {
  title: "Technical PM. 20+ years in regulated industries.",
  paragraphs: [
    "I'm Roman, a technical project manager based near Hamburg. I've worked in medical technology, pharma and logistics for over 20 years. For the last 12+ of them I've delivered client-facing system implementations: integrated operating rooms, imaging and PACS/RIS connectivity, and internal logistics systems under GDP and ISO 9001.",
    "I founded and ran Medintegro, a MedTech systems integrator, and delivered 20+ projects for hospitals and clinics with vendors across the EU, US and Asia. Most recently, at PharmaLogis, I built and rolled out internal systems that cut manual coordination by an estimated 30%.",
    "I know APIs and data flows well enough to steer engineering teams, and clinical and operational work well enough to run discovery, workshops and go-live. I also build software myself, including LLM-based workflows.",
    "I'm looking for a permanent TPM or implementation role in Hamburg or remote across the EU.",
  ],
  experienceTitle: "Experience",
  factsTitle: "Education, languages and location",
};

// From the CV, newest first.
export const experience = [
  { role: "Independent Project Manager and IT Consultant", org: "mazuryk.dev, Hamburg", dates: "01/2026 to present", line: "Project-based consulting for mid-sized companies on process digitalisation and internal systems." },
  { role: "Commercial Specialist, Freight Forwarding and Logistics", org: "PharmaLogis GmbH, Reinbek near Hamburg", dates: "08/2024 to 10/2025", line: "Introduction of internal systems and process digitalisation across operations." },
  { role: "Founder and Technical Project Manager", org: "Medintegro, Kyiv", dates: "12/2012 to 05/2024", line: "Delivered 20+ client-facing system projects across OR video, imaging and automation." },
  { role: "CEO and Head of International Business Development", org: "Acropolus Biosciences, Kyiv", dates: "06/2011 to 08/2012", line: "Full P&L and operational ownership of a business with 70+ employees." },
  { role: "Sales and Project Roles, Pharma and Medical Technology", org: "International manufacturers and distributors, Kyiv", dates: "2005 to 2011", line: "Built the domain foundation in regulated environments." },
];

export const education = { label: "Education", value: "M.Sc. Computer Science (Specialization in Software Engineering) · Woolf University / Neoversity · expected 12/2026" };
export const languages = { label: "Languages", value: "Ukrainian and Russian (native) · English C1 · German B1, certification exam Dec 2026" };
export const location = { label: "Location", value: "Hamburg area · EU work authorisation · open to remote across the EU" };

export const contactSection = {
  title: "Hiring for a TPM or implementation role?",
  text: "The CV has the full picture. Happy to talk about a role in Hamburg or remote across the EU.",
};

// Condensed from the former /ai, /services and /collaborate pages. No prices, no client results.
export const services = {
  hero: {
    eyebrow: "Services · Roman Mazuryk, Technical Project Manager",
    headline: "Turn one manual workflow into a working system",
    subline: "For operations-heavy SMEs and regulated teams. I map one workflow, find where AI can safely reduce friction, and build the first useful version with human review points.",
    primary: { label: "Book an AI Workflow Audit", href: contact.auditHref },
    secondary: { label: "Email me", href: contact.emailHref },
  },
  problem: {
    title: "The problem: work that lives in emails, spreadsheets and people's heads",
    text: "Work is scattered across emails, spreadsheets, PDFs, meetings and handover documents. Follow-ups are manual, ownership is unclear and nobody can see where a case stands.",
    beforeLabel: "Before",
    afterLabel: "After",
    before: ["Emails", "Spreadsheets", "PDFs", "Manual follow-ups", "Unclear ownership", "No workflow memory"],
    after: ["Structured intake", "AI-assisted summaries", "Task ownership", "Status visibility", "SOPs and handover", "Reusable workflow system"],
  },
  offersTitle: "Three ways to start",
  offers: [
    {
      title: "AI Workflow Opportunity Audit",
      badge: "Best starting point",
      get: "Workflow review, bottleneck map, AI opportunity matrix, feasibility and risk assessment, recommended pilot and roadmap.",
      duration: "Delivered within 5 business days.",
      outcome: "A clear entry point for a build sprint: internal assistant, workflow automation, dashboard or decision-support prototype.",
    },
    {
      title: "Prototype Sprint",
      get: "A working pilot for one workflow: automation, internal assistant, dashboard or prototype with human review points.",
      duration: "Typically 2 to 4 weeks.",
      outcome: "Connected forms, emails, documents, spreadsheets, APIs and AI actions, with handover notes.",
    },
    {
      title: "Workflow automation",
      get: "Automations, structured SOPs and a lightweight dashboard or internal tool around one workflow.",
      duration: "Run as a 2 to 4 week sprint.",
      outcome: "Status tracking, task ownership, simple reporting and documentation the team can maintain.",
    },
  ],
  labels: { get: "What you get", duration: "Typical duration", outcome: "Outcome", good: "Good fit", notIdeal: "Not ideal for" },
  processTitle: "How it works",
  process: [
    { title: "Workflow intake", text: "We pick one repetitive or messy process worth improving. You share examples, documents, current tools and pain points." },
    { title: "Process mapping", text: "I map inputs, decisions, handoffs, ownership, tools and failure points." },
    { title: "Automation design", text: "We define what gets automated, what stays human-reviewed and which output is useful." },
    { title: "Prototype build", text: "I build the smallest useful workflow with automation tools, AI, a lightweight database or a custom UI where needed." },
    { title: "Review, handover, iteration", text: "We test with real use, refine edge cases and document how to run it." },
  ],
  proof: {
    title: "Proof",
    text: "The delivery background behind this work is on the portfolio page. Example workflows are available on request.",
    links: [
      { label: "Selected delivery work", href: "/#work" },
      { label: "How I work with AI", href: "/kb" },
    ],
  },
  fitTitle: "Who it fits",
  fit: {
    good: [
      "Operations-heavy SMEs",
      "Logistics and service businesses",
      "MedTech, HealthTech and regulated operations teams",
      "Small teams with scattered knowledge",
      "Founders who need fast workflow prototypes",
    ],
    notIdeal: [
      "Teams looking for a fully managed AI product, not a consultant",
      "Enterprise organisations with existing digital transformation programs",
      "Businesses wanting a chatbot without any workflow or backend change",
      "Teams needing regulatory certification or sign-off rather than workflow implementation",
    ],
  },
  cta: {
    title: "Have one messy workflow worth fixing?",
    text: "Start with one contained process. I map it, score the automation opportunity, assess risk and define a build scope.",
    primary: { label: "Book an AI Workflow Audit", href: contact.auditHref },
    secondary: { label: "Email me", href: contact.emailHref },
  },
};

export const seo = {
  home: {
    title: "Roman Mazuryk · Technical Project Manager, System Implementation",
    description: "Technical project manager with 12+ years delivering system implementations in MedTech, pharma and logistics. 20+ systems from discovery to adoption. Hamburg / Remote (EU).",
    url: "https://www.mazuryk.dev/",
  },
  services: {
    title: "Services · AI Workflow Audits and Prototype Sprints · Roman Mazuryk",
    description: "AI Workflow Opportunity Audits, prototype sprints and workflow automation for operations-heavy SMEs and regulated teams. Map one workflow, then build the first working version.",
    url: "https://www.mazuryk.dev/services",
  },
};
