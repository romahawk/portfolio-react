import { Fragment } from "react";
import {
  ArrowRight,
  Bot,
  ClipboardCheck,
  Code2,
  Mail,
  Stethoscope,
  Workflow,
} from "lucide-react";
import {
  ArtifactMap,
  CTAStrip,
  FeaturePill,
  PageHero,
  ProofCard,
  SectionHeader,
  SystemCard,
  WorkflowMap,
} from "./system/SystemVisuals.jsx";
import TypewriterTitle from "./common/TypewriterTitle.jsx";
import { getProjectsByCategory, projectCategories } from "../data/projects.js";
import { useTranslation } from "../context/LangContext.jsx";
import { deText, localizeGermanValue } from "../locales/germanCopy.js";

const EMAIL = "romazuryk@proton.me";

const homeWorkflow = [
  { label: "Audit", detail: "Map one workflow, bottlenecks, risks, opportunities", accent: "ai" },
  { label: "Pilot scope", detail: "Recommended automation, assistant, dashboard, or decision-support path", accent: "medtech" },
  { label: "Implementation", detail: "Prototype, sprint roadmap, handover, next build step", accent: "fullstack" },
];

const heroInputs = ["Emails", "Excel", "PDFs", "Calls", "Manual handoffs"];
const heroOutputs = ["Audit map", "AI matrix", "Pilot scope", "Roadmap", "Prototype"];

const operatingModelPills = [
  { label: "AI systems consulting", accent: "ai" },
  { label: "Workflow automation", accent: "ai" },
  { label: "MedTech / regulated operations", accent: "medtech" },
  { label: "Full-stack implementation", accent: "fullstack" },
  { label: "Audit to working system", accent: "fullstack" },
];

const homeArtifact = {
  inputLabel: "Positioning layers",
  outputLabel: "Commercial offer",
  inputs: [
    { label: "AI workflow systems", accent: "ai" },
    { label: "Regulated operations credibility", accent: "medtech" },
    { label: "Full-stack implementation", accent: "fullstack" },
  ],
  outputs: [{ label: "AI Workflow Opportunity Audit", accent: "ai" }],
};

const homeAuditDeliverables = [
  "Workflow review",
  "Bottleneck map",
  "AI opportunity matrix",
  "Feasibility and risk assessment",
  "Recommended pilot",
  "Implementation roadmap",
];

const homeAuditFit = [
  "Operations-heavy SMEs with manual coordination and repeated admin work",
  "MedTech, HealthTech, and regulated teams with documentation or handover friction",
  "Founders or operators who need a practical AI starting point before spending on a build",
];

const homeAuditOutcomes = [
  "A clear view of where AI can help safely",
  "A prioritized pilot that can become a sprint",
  "A roadmap for an internal assistant, workflow automation, dashboard, or decision-support system",
];

const aiArtifact = {
  inputLabel: "Manual process",
  outputLabel: "AI-assisted workflow",
  inputs: ["Intake", "Trigger", "Manual task"],
  outputs: ["Automation", "AI summary", "Human review", "Dashboard / output"],
};

const proofHighlights = [
  {
    title: "AI Workflow Opportunity Audit",
    problem: "Manual work and scattered documentation hide where automation should start.",
    system: "Map one workflow, identify bottlenecks, score AI opportunities, assess risk, and define the first pilot.",
    proof: "Directly supports the AI Workflow Opportunity Audit entry offer.",
    cta: { label: "Explore AI", href: "/ai" },
    icon: Bot,
    accent: "ai",
  },
  {
    title: "Prototype Sprint / Internal Assistant",
    problem: "Clinical workflows depend on equipment, vendors, handover, training, and implementation reality.",
    system: "Translate regulated implementation complexity into assistant, handover, SOP, and dashboard concepts with review points.",
    proof: "MedTech implementation background: Surgimedia, Surgiris, OR workflows, stakeholder coordination, and handover.",
    cta: { label: "View MedTech", href: "/medtech" },
    icon: Stethoscope,
    accent: "medtech",
  },
  {
    title: "Workflow Automation / Decision Support",
    problem: "Teams need visible workflow state, not another static document or vague prototype.",
    system: "Build dashboards, product prototypes, APIs, persistence, and AI-assisted development loops.",
    proof: "Implementation proof from FlowLogix, LiveSurgery, mazuryk.dev, and workflow tool prototypes.",
    cta: { label: "View Full-Stack", href: "/fullstack" },
    icon: Code2,
    accent: "fullstack",
  },
];

const aiOffers = [
  {
    title: "AI Workflow Opportunity Audit",
    badge: "Best starting point",
    bestFor: "Operations-heavy teams that know work is slow or fragmented but do not yet know which AI use case is worth building.",
    deliverable: "Workflow review, bottleneck map, AI opportunity matrix, feasibility and risk assessment, recommended pilot, and roadmap.",
    output: "A clear entry point for a build sprint: internal assistant, workflow automation, dashboard, or decision-support prototype.",
    cta: { label: "Discuss an audit", href: `mailto:${EMAIL}?subject=AI%20Workflow%20Audit%20Request` },
    icon: ClipboardCheck,
    tone: "audit",
    featured: true,
  },
  {
    title: "Prototype Sprint",
    bestFor: "Turning an audit recommendation into a tangible workflow system.",
    deliverable: "A working pilot: automation, internal assistant, dashboard, or prototype with human review points.",
    output: "Connected forms, emails, documents, spreadsheets, APIs, AI actions, and handover notes.",
    cta: { label: "Plan a pilot", href: `mailto:${EMAIL}?subject=Pilot%20Planning%20Discussion` },
    icon: Bot,
    tone: "pilot",
  },
  {
    title: "Knowledge & SOP System",
    bestFor: "Turning scattered operational knowledge into repeatable procedures and searchable guidance.",
    deliverable: "Structured SOPs, onboarding materials, and reusable documentation flows.",
    output: "Process library, SOP drafts, handover templates, and AI-assisted documentation logic.",
    cta: { label: "Structure knowledge", href: `mailto:${EMAIL}?subject=SOP%20Knowledge%20System` },
    icon: Workflow,
    tone: "knowledge",
  },
  {
    title: "Dashboard & Internal Tool",
    bestFor: "Replacing spreadsheet chaos with shared workflow visibility.",
    deliverable: "A lightweight dashboard or internal workflow tool prototype.",
    output: "Status tracking, task ownership, simple reporting, and workflow state visibility.",
    cta: { label: "Discuss prototype", href: `mailto:${EMAIL}?subject=Internal%20Tool%20Prototype` },
    icon: Code2,
    tone: "tool",
  },
];

const aiStack = [
  {
    capability: "AI analysis / structured outputs",
    tools: "ChatGPT, Claude",
    useCase: "Summaries, classification, workflow analysis, SOP drafts, structured outputs",
  },
  {
    capability: "Research / validation",
    tools: "Perplexity",
    useCase: "Market checks, source-backed research, process discovery",
  },
  {
    capability: "Automation",
    tools: "n8n, Make",
    useCase: "Connect forms, emails, spreadsheets, APIs, and AI actions",
  },
  {
    capability: "Operational workspace",
    tools: "Airtable, Notion, Google Sheets",
    useCase: "Lightweight workflow databases and operational tracking",
  },
  {
    capability: "Custom UI",
    tools: "React, Next.js",
    useCase: "Dashboards, internal tools, workflow interfaces",
  },
  {
    capability: "Application data",
    tools: "Supabase, Firebase",
    useCase: "User data, workflow states, project records",
  },
  {
    capability: "Knowledge ingestion",
    tools: "Firecrawl, document parsers, APIs",
    useCase: "Bring web pages, documents, records, and system data into usable workflow context",
  },
  {
    capability: "Deployment",
    tools: "Vercel, Render",
    useCase: "Fast deployment of prototypes and lightweight tools",
  },
  {
    capability: "Quality / monitoring",
    tools: "Langfuse, Sentry, PostHog",
    useCase: "Trace AI behavior, catch errors, and observe usage after launch",
  },
];

const aiBeforeAfter = {
  before: [
    "Emails",
    "Spreadsheets",
    "PDFs",
    "Manual follow-ups",
    "Unclear ownership",
    "No workflow memory",
  ],
  after: [
    "Structured intake",
    "AI-assisted summaries",
    "Task ownership",
    "Status visibility",
    "SOPs / handover",
    "Reusable workflow system",
  ],
};

const aiExampleWorkflows = [
  {
    title: "Customer Intake & Lead Qualification",
    steps: ["Website form / email", "AI classifies request", "Human reviews priority", "CRM/task updated"],
    value: "Faster response and cleaner follow-up ownership.",
  },
  {
    title: "Support & Request Triage",
    steps: ["Customer request", "AI extracts key fields", "Missing data flagged", "Task or ticket created"],
    value: "Less manual sorting and fewer incomplete requests.",
  },
  {
    title: "Scattered Documentation \u2192 SOPs",
    steps: ["Process notes", "AI drafts procedure", "Human review", "Structured documentation"],
    value: "Repeatable procedures instead of scattered knowledge.",
  },
  {
    title: "Meeting Notes \u2192 Tasks & Owners",
    steps: ["Meeting notes", "AI summary", "Decisions and owners extracted", "Tasks assigned"],
    value: "Clearer ownership after calls and meetings.",
  },
  {
    title: "Implementation Handover",
    steps: ["PDFs, emails, notes", "AI extracts fields", "Review queue", "Database updated"],
    value: "Cleaner handover from scattered project context into structured next actions.",
  },
  {
    title: "Reporting & Workflow Visibility",
    steps: ["Sheets / forms / tasks", "Workflow status structured", "Dashboard", "Weekly visibility"],
    value: "Better status visibility across recurring operational work.",
  },
];

const aiProcess = [
  {
    title: "Workflow intake",
    happens: "We identify one repetitive or messy process worth improving.",
    provide: "Examples, screenshots, documents, current tools, and pain points.",
    deliver: "Problem definition and initial scope.",
  },
  {
    title: "Process mapping",
    happens: "I map inputs, decisions, handoffs, ownership, tools, and failure points.",
    provide: "Clarifications and real workflow examples.",
    deliver: "Workflow map and friction analysis.",
  },
  {
    title: "Automation design",
    happens: "We define what should be automated, what should stay human-reviewed, and what output is useful.",
    provide: "Business rules, approval logic, and tool access where needed.",
    deliver: "Automation design and implementation plan.",
  },
  {
    title: "Prototype build",
    happens: "I build the smallest useful workflow using automation tools, AI, lightweight databases, or custom UI where needed.",
    provide: "Feedback on real use cases.",
    deliver: "Working prototype or automation flow.",
  },
  {
    title: "Review, handover, iteration",
    happens: "We test the workflow, refine edge cases, and document how to use it.",
    provide: "Feedback from actual usage.",
    deliver: "Handover notes, SOP, and next-step recommendations.",
  },
];

const aiFit = {
  good: [
    "Operations-heavy SMEs",
    "Logistics and service businesses",
    "Local companies with manual admin workflows",
    "MedTech-adjacent operations",
    "Small teams with scattered knowledge",
    "Founders who need fast workflow prototypes",
  ],
  notIdeal: [
    "Abstract AI experiments",
    "Large enterprise transformation programs",
    "Pure chatbot projects without workflow integration",
    "Automation without human review where risk is high",
  ],
};

const medtechHeroWorkflow = [
  { label: "Clinical need", detail: "User, site, and workflow context" },
  { label: "Technical requirements", detail: "Devices, infrastructure, constraints" },
  { label: "Implementation planning", detail: "Scope, dependencies, risk, owners" },
  { label: "Installation / coordination", detail: "Hospital, suppliers, service partners" },
  { label: "Training & handover", detail: "Documentation, adoption, support logic" },
  { label: "Workflow system", detail: "Product requirements, SOPs, visibility" },
];

const regulatedOperationsProof = [
  {
    title: "Clinical workflow complexity",
    body: "Experience with operating-room environments, clinical routines, handovers, and documentation.",
    relevance: "Designs that respect real workflow constraints.",
  },
  {
    title: "Multi-stakeholder coordination",
    body: "Work across clinicians, hospital teams, vendors, suppliers, and internal teams.",
    relevance: "Systems that support adoption, ownership, and review.",
  },
  {
    title: "Implementation & handover thinking",
    body: "From requirements and installation planning to training, documentation, and post-handover support.",
    relevance: "Pilots that can become usable operational systems.",
  },
  {
    title: "Documentation & knowledge transfer",
    body: "Turning scattered implementation context into structured procedures, notes, and support logic.",
    relevance: "Strong fit for SOPs, internal assistants, and decision-support tools.",
  },
];

const medtechSelectedProof = [
  {
    title: "OR Integration & Surgical Workflow Systems",
    type: "Domain proof / implementation experience",
    problem: "OR environments combine devices, people, infrastructure, documentation, and handover - but workflow ownership is often fragmented.",
    system: "Mapped the implementation context around OR integration, surgical video workflows, stakeholder coordination, training, and handover.",
    proof: "Real MedTech implementation background.",
    relevance: "Trust layer for AI Workflow Audits, implementation handover systems, and regulated workflow automation.",
    links: [{ label: "View OR proof", href: "/proof-of-work/or-integration" }],
  },
  {
    title: "LiveSurgery",
    type: "Product concept / MedTech platform prototype",
    problem: "Surgical collaboration, recording, remote expertise, and case visibility require structured product logic around clinical workflows.",
    system: "Created a product concept and prototype direction for surgical video / collaboration workflows.",
    proof: "Deployed product artifact and workflow prototype direction.",
    relevance: "Prototype Sprint and decision-support system proof for clinical collaboration workflows.",
    links: [{ label: "Live demo", href: "https://livesurgery-landing.vercel.app/" }],
  },
  {
    title: "MedTech Implementation Handoff Assistant",
    type: "AI-assisted workflow concept",
    problem: "Implementation knowledge is often scattered across emails, PDFs, meetings, notes, and informal handover.",
    system: "Designed an AI-assisted workflow to structure requirements, missing documents, risks, meeting summaries, and customer handover.",
    proof: "Workflow map / product specification / reference system.",
    relevance: "Internal Assistant and implementation handover proof connected to the AI Workflow Audit path.",
    links: [{ label: "View workflow library", href: "/ai-workflow#medtech-implementation-handoff-assistant" }],
  },
  {
    title: "MedTech Operations Knowledge / Workflow OS",
    type: "Internal workflow system concept",
    problem: "Product data, project knowledge, SOPs, supplier information, and onboarding materials become fragmented over time.",
    system: "Designed a structured knowledge and workflow system for products, projects, SOPs, onboarding, and handover.",
    proof: "Concept, data model, prototype direction, and documentation artifact.",
    relevance: "Workflow Automation, SOP system, and reporting/visibility proof for regulated operations.",
    links: [{ label: "Explore workflows", href: "/ai-workflow#medtech-operations-knowledge-workflow-os" }],
  },
];

const medtechCapabilityCards = [
  {
    title: "Requirements structuring",
    text: "Translate clinical, operational, and technical input into clear requirements, workflow states, and implementation tasks.",
  },
  {
    title: "Stakeholder alignment",
    text: "Coordinate between clinical users, technical teams, suppliers, service partners, and business stakeholders.",
  },
  {
    title: "Workflow mapping",
    text: "Map how devices, people, data, documents, approvals, and handover steps interact in real clinical or operational environments.",
  },
  {
    title: "Implementation planning",
    text: "Support rollout thinking across scope, constraints, dependencies, risks, training, and handover.",
  },
  {
    title: "Documentation & SOP logic",
    text: "Create structured documentation, handover materials, SOP flows, and knowledge systems for implementation-heavy teams.",
  },
  {
    title: "AI-assisted delivery",
    text: "Use AI tools to accelerate discovery, documentation, prototyping, workflow mapping, and product specification.",
  },
];

const medtechRoleGroups = [
  {
    title: "Best-fit roles",
    items: [
      "Technical Product Manager",
      "MedTech Product Manager",
      "Product / Project Manager",
      "Product Operations",
      "Implementation / Solutions roles",
      "Clinical workflow systems roles",
      "AI-assisted workflow / internal tools roles",
    ],
  },
  {
    title: "Best-fit environments",
    items: [
      "MedTech and HealthTech companies",
      "OR integration / digital surgery teams",
      "Implementation-heavy B2B products",
      "Regulated workflow environments",
      "Medical equipment and clinical systems companies",
      "Teams with fragmented documentation or handover processes",
    ],
  },
];

const fullstackHeroFlow = [
  "Idea",
  "AI-assisted planning",
  "UI prototype",
  "Data model",
  "Working app",
  "Deployed demo",
];

const fullstackStackGroups = [
  { title: "Frontend", items: ["React", "Next.js", "TypeScript / JavaScript", "Tailwind"] },
  { title: "Backend / APIs", items: ["Python", "Flask / FastAPI", "REST APIs"] },
  { title: "Data", items: ["PostgreSQL", "Supabase", "Firebase"] },
  { title: "Deployment", items: ["Vercel", "Render", "Koyeb"] },
  { title: "AI-assisted development", items: ["ChatGPT", "Claude", "Codex", "v0", "Cursor"] },
];

const fullstackWorkflow = [
  {
    title: "Discover",
    text: "Clarify problem, user flow, requirements, constraints, and implementation scope.",
  },
  {
    title: "Prototype",
    text: "Use v0, React, Tailwind, and AI-assisted UI generation to build fast product interfaces.",
  },
  {
    title: "Build",
    text: "Implement data models, APIs, state logic, authentication, dashboards, and workflow states.",
  },
  {
    title: "Iterate",
    text: "Review bugs, improve UX, refactor code, document decisions, and deploy working versions.",
  },
];

const fullstackSelectedProjects = [
  {
    title: "mazuryk.dev",
    type: "Portfolio system / personal operating website",
    description: "A custom portfolio and positioning system structured around AI automation, MedTech product/project credibility, and full-stack product-building proof.",
    relevance: "Shows frontend architecture, routing, content structure, UX strategy, responsive design, and personal product positioning.",
    stack: ["React", "Vite", "Routing", "SEO", "Responsive CSS"],
    links: [
      { label: "GitHub", href: "https://github.com/romahawk/portfolio-react" },
      { label: "Live", href: "https://www.mazuryk.dev/" },
    ],
  },
  {
    title: "FlowLogix",
    type: "Operations dashboard / workflow tool",
    description: "A logistics and operations workflow system for tracking, filtering, and structuring operational records and process visibility.",
    relevance: "Shows backend logic, API work, filtering, data handling, operations thinking, and workflow-dashboard design.",
    stack: ["Flask", "SQLite", "SQLAlchemy", "API", "Dashboard UX"],
    links: [
      { label: "GitHub", href: "https://github.com/romahawk/flowlogix" },
      { label: "Live", href: "https://flowlogics.app/" },
    ],
  },
  {
    title: "LiveSurgery",
    type: "MedTech product prototype",
    description: "A surgical video / collaboration product concept and prototype direction for clinical workflows, remote expertise, case visibility, and MedTech collaboration.",
    relevance: "Shows MedTech product thinking, clinical workflow understanding, UI/product logic, and full-stack prototype capability.",
    stack: ["React", "FastAPI", "SQLite", "WebSocket", "MedTech UX"],
    links: [
      { label: "GitHub", href: "https://github.com/romahawk/livesurgery-poc" },
      { label: "Live", href: "https://livesurgery-landing.vercel.app/" },
    ],
  },
  {
    title: "Medintegro",
    type: "MedTech website / product platform prototype",
    description: "A MedTech-oriented digital presence and product platform concept connected to OR integration, clinical systems, and implementation-heavy medical technology.",
    relevance: "Shows domain-specific frontend work, MedTech positioning, product structure, and applied UX/content design.",
    stack: ["Frontend", "Product UX", "MedTech content", "Responsive design"],
    links: [
      { label: "GitHub", href: "https://github.com/romahawk/medintegro-v0" },
      { label: "Live", href: "https://www.medintegro.com.ua/" },
    ],
  },
  {
    title: "AlphaRhythm",
    type: "Trading discipline product / SaaS-style product concept",
    description: "A product concept for structured trade journaling, discipline tracking, risk logic, and decision-review workflows.",
    relevance: "Shows product thinking, data-driven UX, user workflow design, landing/app structure, and independent product-building ability.",
    stack: ["React", "Firebase", "Firestore", "Workflow UX", "Product concept"],
    links: [{ label: "Live", href: "https://alpharhythm.trade" }],
  },
  {
    title: "Workflow Intelligence Content System",
    type: "AI-assisted internal product system",
    description: "A workflow system for planning, structuring, and exporting MedTech / LinkedIn / Substack content assets from a reusable content library.",
    relevance: "Shows AI-assisted product operations, content workflow design, internal tooling, structured data thinking, and UI system design.",
    stack: ["React components", "Content model", "AI workflow", "Internal tooling"],
    links: [{ label: "GitHub", href: "https://github.com/romahawk/portfolio-react" }],
    status: "WIP / Internal tool",
  },
];

const fullstackSecondaryExperiments = [
  {
    title: "SmartShooter",
    type: "Sports tracking product experiment",
    description: "A basketball shooting tracker concept focused on mobile-first logging, progress visibility, and habit-building mechanics.",
    relevance: "Shows product experimentation, Firebase/front-end logic, mobile UX thinking, and rapid prototyping.",
    stack: ["React", "Firebase", "Mobile UX", "Prototype"],
    links: [
      { label: "GitHub", href: "https://github.com/romahawk/SmartShooter_" },
      { label: "Live", href: "https://smart-shooter.vercel.app/" },
    ],
  },
  {
    title: "JobSprint",
    type: "Job search operating system experiment",
    description: "A job-search workflow tool for tracking applications, sources, company research, and compliance/reporting logic.",
    relevance: "Shows workflow design, data structuring, product thinking, and practical internal tooling.",
    stack: ["React", "Vite", "Local Storage", "Analytics", "Workflow UX"],
    links: [
      { label: "GitHub", href: "https://github.com/romahawk/jobsprint-demo" },
      { label: "Live", href: "https://jobsprint-demo.vercel.app/" },
    ],
  },
];

const fullstackCapabilities = [
  {
    title: "Product prototyping",
    text: "Turning an idea into a scoped user flow, UI, data model, and deployed demo.",
  },
  {
    title: "Workflow systems",
    text: "Designing states, inputs, ownership, dashboards, and operational logic around real processes.",
  },
  {
    title: "Frontend implementation",
    text: "Building responsive interfaces with React, Next.js, Tailwind, and reusable components.",
  },
  {
    title: "Backend and data logic",
    text: "Working with APIs, databases, authentication, records, and persistence where needed.",
  },
  {
    title: "AI-assisted development",
    text: "Using AI tools to accelerate planning, implementation, debugging, documentation, and iteration.",
  },
  {
    title: "Product communication",
    text: "Documenting project logic, trade-offs, architecture, and user value clearly for non-technical stakeholders.",
  },
];

function ProofGrid({ projects, accent }) {
  const { lang } = useTranslation();
  const localizedProjects = localizeGermanValue(projects, lang);

  return (
    <div className="market-page__proof-grid">
      {localizedProjects.map((project) => <ProofCard project={project} accent={accent} key={project.title} />)}
    </div>
  );
}

function PillList({ items, accent = "ai" }) {
  return (
    <div className="market-page__pill-list">
      {items.map((item) => {
        const label = typeof item === "string" ? item : item.label;
        const itemAccent = typeof item === "string" ? accent : item.accent || accent;
        return <FeaturePill accent={itemAccent} key={label}>{label}</FeaturePill>;
      })}
    </div>
  );
}

function HomeHeroVisual() {
  const { lang } = useTranslation();
  const inputs = localizeGermanValue(heroInputs, lang);
  const outputs = localizeGermanValue(heroOutputs, lang);

  return (
    <div className="home-system-visual system-accent--ai" aria-label={deText("Fragmented inputs become structured outputs", lang)}>
      <div className="home-system-visual__column">
        <span className="home-system-visual__label">{deText("Fragmented inputs", lang)}</span>
        {inputs.map((item) => <span className="home-system-visual__chip" key={item}>{item}</span>)}
      </div>
      <div className="home-system-visual__core" aria-hidden="true">
        <span className="home-system-visual__pulse" />
        <strong>{deText("Product logic", lang)}</strong>
        <span>{deText("AI-assisted workflow map", lang)}</span>
      </div>
      <div className="home-system-visual__column">
        <span className="home-system-visual__label">{deText("Structured outputs", lang)}</span>
        {outputs.map((item) => <span className="home-system-visual__chip home-system-visual__chip--output" key={item}>{item}</span>)}
      </div>
    </div>
  );
}

function RegulatedOperationsProofGrid({ items }) {
  const { lang } = useTranslation();
  const localizedItems = localizeGermanValue(items, lang);

  return (
    <div className="medtech-regulated-proof-grid">
      {localizedItems.map((item, index) => (
        <article className="medtech-regulated-proof-card reveal" key={item.title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
          <div>
            <strong>{deText("AI relevance", lang)}</strong>
            <p>{item.relevance}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function WorkflowBeforeAfter({ before, after }) {
  const { lang } = useTranslation();
  const beforeItems = localizeGermanValue(before, lang);
  const afterItems = localizeGermanValue(after, lang);

  return (
    <div className="ai-before-after reveal">
      <div className="ai-before-after__panel ai-before-after__panel--before">
        <span className="ai-before-after__label">{deText("Before", lang)}</span>
        <h3>{deText("Scattered work", lang)}</h3>
        <ul>
          {beforeItems.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
      <div className="ai-before-after__arrow" aria-hidden="true">
        <ArrowRight size={22} />
      </div>
      <div className="ai-before-after__panel ai-before-after__panel--after">
        <span className="ai-before-after__label">{deText("After", lang)}</span>
        <h3>{deText("Workflow intelligence", lang)}</h3>
        <ul>
          {afterItems.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

function CapabilityToolMatrix({ items }) {
  const { lang } = useTranslation();
  const localizedItems = localizeGermanValue(items, lang);

  return (
    <div className="ai-tool-matrix reveal">
      <div className="ai-tool-matrix__head">
        <span>{deText("Capability", lang)}</span>
        <span>{deText("Tools", lang)}</span>
        <span>{deText("Use case", lang)}</span>
      </div>
      {localizedItems.map((item) => (
        <div className="ai-tool-matrix__row" key={item.capability}>
          <strong>{item.capability}</strong>
          <span>{item.tools}</span>
          <p>{item.useCase}</p>
        </div>
      ))}
    </div>
  );
}

function SelectedProofCard({ item, index = 0 }) {
  const { lang } = useTranslation();
  const localizedItem = localizeGermanValue(item, lang);
  const links = localizedItem.links || [];
  const tone = ["surgical", "demo", "workflow", "systems"][index % 4];

  return (
    <article className={`medtech-proof-card medtech-proof-card--${tone} reveal`}>
      <header>
        <p>{localizedItem.type}</p>
        <h3>{localizedItem.title}</h3>
      </header>
      <dl>
        <div>
          <dt>{deText("Problem", lang)}</dt>
          <dd>{localizedItem.problem}</dd>
        </div>
        <div>
          <dt>{deText("System / contribution", lang)}</dt>
          <dd>{localizedItem.system}</dd>
        </div>
        <div>
          <dt>{deText("Proof", lang)}</dt>
          <dd>{localizedItem.proof}</dd>
        </div>
        <div>
          <dt>{deText("Relevance", lang)}</dt>
          <dd>{localizedItem.relevance}</dd>
        </div>
      </dl>
      {links.length ? (
        <div className="medtech-proof-card__links">
          {links.map((link) => {
            const external = link.href.startsWith("http");
            return (
              <a href={link.href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} key={link.href}>
                {link.label} <ArrowRight size={14} aria-hidden="true" />
              </a>
            );
          })}
        </div>
      ) : null}
    </article>
  );
}

function ProductizedOfferCard({ offer }) {
  const { lang } = useTranslation();
  const localizedOffer = localizeGermanValue(offer, lang);
  const Icon = offer.icon;
  const toneClass = offer.tone ? `ai-offer-card--${offer.tone}` : "";

  return (
    <article className={`ai-offer-card ${toneClass} ${offer.featured ? "ai-offer-card--featured" : ""} reveal`}>
      <header className="ai-offer-card__header">
        <span className="ai-offer-card__icon" aria-hidden="true">{Icon ? <Icon size={18} /> : null}</span>
        {localizedOffer.badge ? <span className="ai-offer-card__badge">{localizedOffer.badge}</span> : null}
      </header>
      <h3>{localizedOffer.title}</h3>
      <dl>
        <div>
          <dt>{deText("Best for", lang)}</dt>
          <dd>{localizedOffer.bestFor}</dd>
        </div>
        <div>
          <dt>{deText("Deliverable", lang)}</dt>
          <dd>{localizedOffer.deliverable}</dd>
        </div>
        <div>
          <dt>{deText("Typical output", lang)}</dt>
          <dd>{localizedOffer.output}</dd>
        </div>
      </dl>
      <a href={offer.cta.href} className="ai-offer-card__cta">
        {localizedOffer.cta.label} <ArrowRight size={14} aria-hidden="true" />
      </a>
    </article>
  );
}

function HomeAuditSection() {
  const { lang } = useTranslation();
  const fit = localizeGermanValue(homeAuditFit, lang);
  const deliverables = localizeGermanValue(homeAuditDeliverables, lang);
  const outcomes = localizeGermanValue(homeAuditOutcomes, lang);

  return (
    <section id="audit" className="section container market-page__section home-audit-section">
      <SectionHeader
        eyebrow={deText("Entry offer", lang)}
        title={deText("AI Workflow Opportunity Audit", lang)}
        text={deText("A focused consulting engagement for teams that want practical AI implementation work, but need to know which workflow is worth automating first.", lang)}
      />
      <div className="home-audit-grid">
        <article className="home-audit-card home-audit-card--primary home-audit-card--ai reveal">
          <span className="home-audit-card__label">{deText("Who it is for", lang)}</span>
          <h3>{deText("Operations-heavy SMEs and regulated teams with one messy workflow.", lang)}</h3>
          <p>
            {deText("Best fit when work is scattered across emails, spreadsheets, PDFs, meetings, support requests, or handover documents, and the team needs a concrete AI starting point.", lang)}
          </p>
          <ul>
            {fit.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
        <article className="home-audit-card home-audit-card--included home-audit-card--medtech reveal">
          <span className="home-audit-card__label">{deText("What is included", lang)}</span>
          <ul className="home-audit-card__deliverables">
            {deliverables.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
        <article className="home-audit-card home-audit-card--outcome home-audit-card--fullstack reveal">
          <span className="home-audit-card__label">{deText("What you receive", lang)}</span>
          <ul>
            {outcomes.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
        <article className="home-audit-card home-audit-card--sprint home-audit-card--ai reveal">
          <span className="home-audit-card__label">{deText("How it leads into implementation", lang)}</span>
          <h3>{deText("From audit to working system", lang)}</h3>
          <p>
            {deText("The audit produces a recommended pilot and sprint scope. From there, I can help build the first useful system: an internal assistant, workflow automation, dashboard, decision-support tool, or deployed custom prototype.", lang)}
          </p>
          <a href={`mailto:${EMAIL}?subject=AI%20Workflow%20Audit%20Request`} className="btn btn--primary">
            {deText("Book an AI Workflow Audit", lang)} <ArrowRight size={15} className="icon ml-1" aria-hidden="true" />
          </a>
        </article>
      </div>
    </section>
  );
}

function CapabilityGrid({ items }) {
  const { lang } = useTranslation();
  const localizedItems = localizeGermanValue(items, lang);

  return (
    <div className="medtech-capability-grid">
      {localizedItems.map((item) => (
        <article className="medtech-capability-card reveal" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  );
}

function WorkflowExampleStrip({ workflow }) {
  const { lang } = useTranslation();
  const localizedWorkflow = localizeGermanValue(workflow, lang);
  const flowLabels = ["Input", "AI Step", "Human Review", "Output"].map((label) => deText(label, lang));

  return (
    <article className="ai-workflow-strip reveal">
      <div className="ai-workflow-strip__title">
        <h3>{localizedWorkflow.title}</h3>
        <p>{localizedWorkflow.value}</p>
      </div>
      <div className="ai-workflow-strip__flow" aria-label={`${localizedWorkflow.title} flow`}>
        {localizedWorkflow.steps.map((step, index) => (
          <span className="ai-workflow-strip__node" key={step}>
            <span>{flowLabels[index]}</span>
            {step}
          </span>
        ))}
      </div>
    </article>
  );
}

function ProcessTimeline({ steps }) {
  const { lang } = useTranslation();
  const localizedSteps = localizeGermanValue(steps, lang);

  return (
    <div className="ai-process-timeline">
      {localizedSteps.map((step, index) => (
        <article className="ai-process-step reveal" key={step.title}>
          <span className="ai-process-step__number">{String(index + 1).padStart(2, "0")}</span>
          <div className="ai-process-step__body">
            <h3>{step.title}</h3>
            <dl>
              <div>
                <dt>{deText("What happens", lang)}</dt>
                <dd>{step.happens}</dd>
              </div>
              <div>
                <dt>{deText("You provide", lang)}</dt>
                <dd>{step.provide}</dd>
              </div>
              <div>
                <dt>{deText("I deliver", lang)}</dt>
                <dd>{step.deliver}</dd>
              </div>
            </dl>
          </div>
        </article>
      ))}
    </div>
  );
}

function RoleFitSection({ groups }) {
  const { lang } = useTranslation();
  const localizedGroups = localizeGermanValue(groups, lang);

  return (
    <div className="medtech-role-grid">
      {localizedGroups.map((group) => (
        <article className="medtech-role-card reveal" key={group.title}>
          <h3>{group.title}</h3>
          <ul>
            {group.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
      ))}
    </div>
  );
}

function FitSection({ good, notIdeal }) {
  const { lang } = useTranslation();
  const goodItems = localizeGermanValue(good, lang);
  const notIdealItems = localizeGermanValue(notIdeal, lang);

  return (
    <div className="ai-fit-grid reveal">
      <article className="ai-fit-card ai-fit-card--good">
        <h3>{deText("Good fit", lang)}</h3>
        <ul>
          {goodItems.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </article>
      <article className="ai-fit-card ai-fit-card--not">
        <h3>{deText("Not ideal for", lang)}</h3>
        <ul>
          {notIdealItems.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </article>
    </div>
  );
}

function FullStackHeroVisual({ items }) {
  const { lang } = useTranslation();
  const localizedItems = localizeGermanValue(items, lang);

  return (
    <div className="fullstack-hero-map system-accent--fullstack reveal" aria-label={deText("Idea to deployed artifact", lang)}>
      {localizedItems.map((item, index) => (
        <div className="fullstack-hero-map__step" key={item}>
          <div className="fullstack-hero-map__node">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item}</strong>
          </div>
          {index < items.length - 1 ? <span className="fullstack-hero-map__connector" aria-hidden="true" /> : null}
        </div>
      ))}
    </div>
  );
}

function StackGroupGrid({ groups }) {
  const { lang } = useTranslation();
  const localizedGroups = localizeGermanValue(groups, lang);

  return (
    <div className="fullstack-stack-grid">
      {localizedGroups.map((group) => (
        <article className="fullstack-stack-card reveal" key={group.title}>
          <h3>{group.title}</h3>
          <div>
            {group.items.map((item) => <FeaturePill accent="fullstack" key={item}>{item}</FeaturePill>)}
          </div>
        </article>
      ))}
    </div>
  );
}

function FullStackWorkflowRow({ steps }) {
  const { lang } = useTranslation();
  const localizedSteps = localizeGermanValue(steps, lang);

  return (
    <div className="fullstack-workflow-row">
      {localizedSteps.map((step, index) => (
        <article className="fullstack-workflow-card reveal" key={step.title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </article>
      ))}
    </div>
  );
}

function FullStackProjectCard({ project, compact = false }) {
  const { lang } = useTranslation();
  const localizedProject = localizeGermanValue(project, lang);
  const links = localizedProject.links || [];

  return (
    <article className={`fullstack-project-card ${compact ? "fullstack-project-card--compact" : ""} reveal`}>
      <header>
        {localizedProject.status ? <span className="fullstack-project-card__status">{localizedProject.status}</span> : null}
        <p>{localizedProject.type}</p>
        <h3>{localizedProject.title}</h3>
      </header>
      <p className="fullstack-project-card__description">{localizedProject.description}</p>
      <p className="fullstack-project-card__relevance">{localizedProject.relevance}</p>
      <div className="fullstack-project-card__stack">
        {localizedProject.stack.map((item) => <FeaturePill accent="fullstack" key={item}>{item}</FeaturePill>)}
      </div>
      {links.length ? (
        <div className="fullstack-project-card__links">
          {links.map((link) => {
            const external = link.href.startsWith("http");
            return (
              <a href={link.href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} key={`${project.title}-${link.label}`}>
                {link.label} <ArrowRight size={13} aria-hidden="true" />
              </a>
            );
          })}
        </div>
      ) : null}
    </article>
  );
}

function FullStackCapabilityGrid({ items }) {
  const { lang } = useTranslation();
  const localizedItems = localizeGermanValue(items, lang);

  return (
    <div className="fullstack-capability-grid">
      {localizedItems.map((item) => (
        <article className="fullstack-capability-card reveal" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  );
}

export function HomePage() {
  const { lang } = useTranslation();
  const highlights = [
    "AI Systems Consultant",
    "Operations-heavy SMEs",
    "Regulated workflow experience",
  ];
  const homeTitle = "AI Workflow Systems for Operations-Heavy SMEs and Regulated Teams";
  const localizedHighlights = localizeGermanValue(highlights, lang);
  const localizedHomeArtifact = localizeGermanValue(homeArtifact, lang);
  const localizedHomeWorkflow = localizeGermanValue(homeWorkflow, lang);
  const localizedOperatingModelPills = localizeGermanValue(operatingModelPills, lang);
  const localizedProofHighlights = localizeGermanValue(proofHighlights, lang);

  return (
    <div className="market-page market-page--home">
      <PageHero
        id="home"
        eyebrow={deText("AI Systems Consultant for operations-heavy SMEs and regulated industries", lang)}
        title={<TypewriterTitle text={deText(homeTitle, lang)} />}
        subtitle={deText("I help operations-heavy SMEs turn manual, fragmented workflows into practical AI systems, internal tools, and implementation roadmaps.", lang)}
        primaryCta={{ label: deText("Book an AI Workflow Audit", lang), href: `mailto:${EMAIL}?subject=AI%20Workflow%20Audit%20Request`, icon: <Mail size={15} className="icon ml-1" aria-hidden="true" /> }}
        secondaryCta={{ label: deText("View Build Proof", lang), href: "/fullstack" }}
        tertiaryCta={{ label: deText("Discuss One Workflow to Automate", lang), href: `mailto:${EMAIL}?subject=One%20Workflow%20to%20Automate` }}
        scrollTargetId="audit"
      >
        <div className="market-page__hero-extra">
          <PillList items={localizedHighlights} accent="ai" />
        </div>
      </PageHero>

      <HomeAuditSection />

      <section className="section container market-page__section">
        <SectionHeader
          eyebrow={deText("System map", lang)}
          title={deText("From fragmented workflow to implementation roadmap", lang)}
          text={deText("The method starts with one concrete operational workflow, maps the process and risk, identifies the AI opportunity, and turns the best pilot into a buildable system.", lang)}
        />
        <ArtifactMap
          accent="ai"
          title={deText("AI Workflow Systems plus Regulated Operations Credibility plus Full-Stack Delivery becomes an Implementation-Ready Audit", lang)}
          {...localizedHomeArtifact}
        />
        <WorkflowMap items={localizedHomeWorkflow} accent="ai" title={deText("Audit to working system", lang)} />
        <PillList items={localizedOperatingModelPills} accent="ai" />
      </section>

      <section className="section container market-page__section">
        <SectionHeader
          eyebrow={deText("Proof connected to offers", lang)}
          title={deText("Proof that turns workflow problems into AI systems", lang)}
          text={deText("Technology stays secondary here. The important signal is whether a business process can become a visible, reviewable, useful system.", lang)}
        />
        <div className="market-page__highlight-grid">
          {localizedProofHighlights.map((item) => <SystemCard {...item} key={item.title} />)}
        </div>
      </section>

      <section className="section container market-page__section">
        <CTAStrip
          accent="ai"
          eyebrow={deText("Next step", lang)}
          title={deText("Have one workflow that feels too manual, scattered, or fragile?", lang)}
          text={deText("Start with an AI Workflow Opportunity Audit. We identify the bottlenecks, the automation opportunity, the risk boundaries, and the first realistic pilot.", lang)}
          primary={{ label: deText("Book an AI Workflow Audit", lang), href: `mailto:${EMAIL}?subject=AI%20Workflow%20Audit%20Request` }}
          secondary={{ label: deText("View Build Proof", lang), href: "/fullstack" }}
        />
      </section>
    </div>
  );
}

export function AIPage() {
  const { lang } = useTranslation();
  const projects = getProjectsByCategory(projectCategories.aiAutomation, { featuredOnly: true });
  const aiTitle = "AI Workflow Systems and Automation for Operations-Heavy SMEs";
  const localizedAiArtifact = localizeGermanValue(aiArtifact, lang);
  const localizedAiStack = localizeGermanValue(aiStack, lang);
  const localizedAiExampleWorkflows = localizeGermanValue(aiExampleWorkflows, lang);
  const localizedAiProcess = localizeGermanValue(aiProcess, lang);
  const localizedAiFit = localizeGermanValue(aiFit, lang);
  const localizedAiBeforeAfter = localizeGermanValue(aiBeforeAfter, lang);

  return (
    <div className="market-page market-page--ai">
      <PageHero
        eyebrow={deText("AI systems consulting", lang)}
        title={<TypewriterTitle text={deText(aiTitle, lang)} />}
        subtitle={deText("I help teams turn repetitive operational work, scattered documentation, manual coordination, and weak handovers into AI-assisted workflows, automations, internal assistants, dashboards, and implementation roadmaps.", lang)}
        primaryCta={{ label: deText("Book an AI Workflow Audit", lang), href: `mailto:${EMAIL}?subject=AI%20Workflow%20Audit%20Request`, icon: <Mail size={15} className="icon ml-1" aria-hidden="true" /> }}
        secondaryCta={{ label: deText("Discuss One Workflow to Automate", lang), href: `mailto:${EMAIL}?subject=One%20Workflow%20to%20Automate` }}
        scrollTargetId="ai-workflow-intelligence"
        variant="ai"
      >
        <div className="ai-hero-extra">
          <p className="market-page__claim">{deText("I do not sell broad AI experiments. I help businesses find one workflow where AI can safely reduce friction, then turn it into a practical system.", lang)}</p>
          <HomeHeroVisual />
        </div>
      </PageHero>

      <section id="ai-workflow-intelligence" className="section container market-page__section">
        <SectionHeader
          eyebrow={deText("01 / Workflow intelligence", lang)}
          title={deText("From scattered work to workflow intelligence", lang)}
          text={deText("A workflow intelligence system connects scattered inputs - emails, documents, forms, spreadsheets, and meetings - and turns them into structured tasks, summaries, decisions, dashboards, or SOPs.", lang)}
        />
        <WorkflowBeforeAfter before={localizedAiBeforeAfter.before} after={localizedAiBeforeAfter.after} />
        <ArtifactMap
          accent="ai"
          title={deText("Manual Process becomes AI-Assisted Workflow", lang)}
          {...localizedAiArtifact}
        />
      </section>

      <section className="section container market-page__section">
        <SectionHeader
          eyebrow={deText("02 / Process", lang)}
          title={deText("Process", lang)}
          text={deText("The process is intentionally small-scope: map one workflow, build one useful system, review it with real users, and iterate.", lang)}
        />
        <ProcessTimeline steps={localizedAiProcess} />
      </section>

      <section className="section container market-page__section">
        <SectionHeader
          eyebrow={deText("03 / Productized offers", lang)}
          title={deText("Start with an audit, then build the right pilot", lang)}
          text={deText("The AI Workflow Opportunity Audit clarifies the workflow, opportunity, risk, and pilot scope before committing to a build sprint.", lang)}
        />
        <div className="ai-offer-grid">
          {aiOffers.map((offer, index) => (
            <Fragment key={offer.title}>
              {index === 2 ? (
                <p className="ai-offer-grid__row-label">{deText("Common pilot types", lang)}</p>
              ) : null}
              <ProductizedOfferCard offer={offer} />
            </Fragment>
          ))}
        </div>
      </section>

      <section className="section container market-page__section">
        <SectionHeader
          eyebrow={deText("04 / Example workflows", lang)}
          title={deText("Practical AI workflows for operational bottlenecks", lang)}
          text={deText("These examples show where AI can structure incoming information, reduce manual coordination, and create reviewable outputs without replacing human judgment.", lang)}
        />
        <div className="ai-workflow-library">
          {localizedAiExampleWorkflows.map((workflow) => <WorkflowExampleStrip workflow={workflow} key={workflow.title} />)}
        </div>
      </section>

      <section className="section container market-page__section">
        <SectionHeader
          eyebrow={deText("05 / Tools", lang)}
          title={deText("Tools mapped to workflow capabilities", lang)}
          text={deText("The stack depends on the workflow. I use AI, automation tools, lightweight databases, and custom interfaces only where they remove real operational friction.", lang)}
        />
        <CapabilityToolMatrix items={localizedAiStack} />
      </section>

      <section className="section container market-page__section">
        <SectionHeader
          eyebrow={deText("06 / Fit", lang)}
          title={deText("Best fit", lang)}
          text={deText("This is best suited for SMEs and operational teams that already have real work happening across emails, spreadsheets, documents, forms, meetings, and manual follow-ups - but lack a structured workflow system around it.", lang)}
        />
        <FitSection good={localizedAiFit.good} notIdeal={localizedAiFit.notIdeal} />
        <ProofGrid projects={projects} accent="ai" />
      </section>

      <section className="section container market-page__section">
        <CTAStrip
          accent="ai"
          eyebrow={deText("Next step", lang)}
          title={deText("Have one messy workflow worth fixing?", lang)}
          text={deText("Start with one contained process. I can help map it, identify automation opportunities, assess risk, and define the smallest useful workflow system around it.", lang)}
          primary={{ label: deText("Book an AI Workflow Audit", lang), href: `mailto:${EMAIL}?subject=AI%20Workflow%20Audit%20Request` }}
          secondary={{ label: deText("Discuss One Workflow to Automate", lang), href: `mailto:${EMAIL}?subject=One%20Workflow%20to%20Automate` }}
        />
      </section>
    </div>
  );
}

export function MedTechPage() {
  const { lang } = useTranslation();
  const medtechTitle = "MedTech and Regulated Operations Proof";
  const localizedMedtechHeroWorkflow = localizeGermanValue(medtechHeroWorkflow, lang);
  const localizedRegulatedOperationsProof = localizeGermanValue(regulatedOperationsProof, lang);
  const localizedMedtechSelectedProof = localizeGermanValue(medtechSelectedProof, lang);
  const localizedMedtechCapabilityCards = localizeGermanValue(medtechCapabilityCards, lang);
  const localizedMedtechRoleGroups = localizeGermanValue(medtechRoleGroups, lang);

  return (
    <div className="market-page market-page--medtech">
      <PageHero
        eyebrow={deText("Trust layer / regulated operations", lang)}
        title={<TypewriterTitle text={deText(medtechTitle, lang)} />}
        subtitle={deText("Real MedTech implementation experience translated into AI workflow consulting judgment: clinical context, stakeholder coordination, documentation, handover, risk boundaries, and practical implementation thinking.", lang)}
        primaryCta={{ label: deText("View Regulated Proof", lang), href: "#medtech-impact" }}
        secondaryCta={{ label: deText("Book an AI Workflow Audit", lang), href: `mailto:${EMAIL}?subject=AI%20Workflow%20Audit%20Request`, icon: <Mail size={15} className="icon ml-1" aria-hidden="true" /> }}
        scrollTargetId="medtech-impact"
      >
        <div className="market-page__hero-extra medtech-hero-extra">
          <p className="medtech-credibility-line">{deText("10+ years across MedTech, OR integration, clinical equipment workflows, supplier coordination, training, handover, and healthcare operations.", lang)}</p>
          <WorkflowMap items={localizedMedtechHeroWorkflow} accent="medtech" title={deText("Clinical need to workflow system", lang)} />
        </div>
      </PageHero>

      <section id="medtech-impact" className="section container market-page__section">
        <SectionHeader
          eyebrow={deText("Regulated operations proof", lang)}
          title={deText("Why my MedTech background matters for AI workflow systems", lang)}
          text={deText("AI systems fail when they ignore real-world constraints: handovers, stakeholders, documentation, exceptions, training, and review points. My MedTech implementation background helps me design workflows that fit how teams actually work.", lang)}
        />
        <RegulatedOperationsProofGrid items={localizedRegulatedOperationsProof} />
      </section>

      <section id="medtech-proof" className="section container market-page__section">
        <SectionHeader
          eyebrow={deText("Selected proof", lang)}
          title={deText("Selected proof of work", lang)}
          text={deText("A focused selection of MedTech and workflow-system projects that connect implementation experience with product thinking and AI-assisted delivery.", lang)}
        />
        <div className="medtech-proof-grid">
          {localizedMedtechSelectedProof.map((item, index) => <SelectedProofCard item={item} index={index} key={item.title} />)}
        </div>
      </section>

      <section className="section container market-page__section">
        <SectionHeader
          eyebrow={deText("Capabilities", lang)}
          title={deText("Product & project capabilities", lang)}
          text={deText("Capability is framed around what implementation-heavy teams need: requirements, alignment, workflow mapping, rollout thinking, documentation, and practical AI support.", lang)}
        />
        <CapabilityGrid items={localizedMedtechCapabilityCards} />
      </section>

      <section className="section container market-page__section">
        <SectionHeader
          eyebrow={deText("Role fit", lang)}
          title={deText("Best-fit roles and environments", lang)}
          text={deText("Clear fit for teams where clinical workflow understanding, implementation reality, and product/project structure need to meet.", lang)}
        />
        <RoleFitSection groups={localizedMedtechRoleGroups} />
      </section>

      <section className="section container market-page__section">
        <CTAStrip
          accent="medtech"
          eyebrow={deText("Next step", lang)}
          title={deText("Need AI workflow work with regulated-operations judgment?", lang)}
          text={deText("MedTech is the credibility layer: it shows I understand implementation-heavy environments where workflows, documentation, stakeholders, handover, and risk matter.", lang)}
          primary={{ label: deText("Book an AI Workflow Audit", lang), href: `mailto:${EMAIL}?subject=AI%20Workflow%20Audit%20Request` }}
          secondary={{ label: deText("View Regulated Proof", lang), href: "#medtech-impact" }}
        />
      </section>
    </div>
  );
}

export function FullStackPage() {
  const { lang } = useTranslation();
  const fullstackTitle = "From Audit to Working System";
  const localizedFullstackHeroFlow = localizeGermanValue(fullstackHeroFlow, lang);
  const localizedFullstackStackGroups = localizeGermanValue(fullstackStackGroups, lang);
  const localizedFullstackWorkflow = localizeGermanValue(fullstackWorkflow, lang);
  const localizedFullstackSelectedProjects = localizeGermanValue(fullstackSelectedProjects, lang);
  const localizedFullstackSecondaryExperiments = localizeGermanValue(fullstackSecondaryExperiments, lang);
  const localizedFullstackCapabilities = localizeGermanValue(fullstackCapabilities, lang);

  return (
    <div className="market-page market-page--fullstack">
      <PageHero
        eyebrow={deText("Implementation proof", lang)}
        title={<TypewriterTitle text={deText(fullstackTitle, lang)} />}
        subtitle={deText("I can move from workflow discovery to prototype, internal tool, dashboard, automation, or deployed custom application using modern full-stack tools and AI-assisted development workflows.", lang)}
        primaryCta={{ label: deText("View Selected Projects", lang), href: "#fullstack-projects" }}
        secondaryCta={{ label: deText("Book an AI Workflow Audit", lang), href: `mailto:${EMAIL}?subject=AI%20Workflow%20Audit%20Request`, icon: <Mail size={15} className="icon ml-1" aria-hidden="true" /> }}
        scrollTargetId="fullstack-stack"
      >
        <div className="market-page__hero-extra fullstack-hero-extra">
          <p className="fullstack-credibility-line">{deText("This is implementation proof for the consulting offer: React, Python, APIs, databases, deployment, and AI-assisted development applied to real workflow problems.", lang)}</p>
          <FullStackHeroVisual items={localizedFullstackHeroFlow} />
        </div>
      </PageHero>

      <section id="fullstack-stack" className="section container market-page__section">
        <SectionHeader
          eyebrow={deText("Technical stack", lang)}
          title={deText("Technical stack", lang)}
          text={deText("A compact product-builder toolkit for interfaces, APIs, data, deployment, and AI-assisted implementation loops.", lang)}
        />
        <StackGroupGrid groups={localizedFullstackStackGroups} />
      </section>

      <section className="section container market-page__section">
        <SectionHeader
          eyebrow={deText("AI-assisted development workflow", lang)}
          title={deText("AI-assisted development workflow", lang)}
          text={deText("I use AI tools to accelerate product discovery, architecture planning, UI generation, code review, documentation, debugging, and iteration while keeping product logic and implementation decisions explicit.", lang)}
        />
        <FullStackWorkflowRow steps={localizedFullstackWorkflow} />
      </section>

      <section id="fullstack-projects" className="section container market-page__section">
        <SectionHeader
          eyebrow={deText("Selected projects", lang)}
          title={deText("Selected projects", lang)}
          text={deText("A focused selection of deployed products, workflow systems, and technical prototypes showing product thinking, full-stack execution, and AI-assisted development.", lang)}
        />
        <div className="fullstack-project-grid">
          {localizedFullstackSelectedProjects.map((project) => <FullStackProjectCard project={project} key={project.title} />)}
        </div>
      </section>

      <section className="section container market-page__section">
        <SectionHeader
          eyebrow={deText("Secondary experiments", lang)}
          title={deText("Secondary experiments", lang)}
          text={deText("Smaller product experiments and learning projects that show additional execution range without being the core positioning.", lang)}
        />
        <div className="fullstack-secondary-grid">
          {localizedFullstackSecondaryExperiments.map((project) => <FullStackProjectCard project={project} compact key={project.title} />)}
        </div>
      </section>

      <section className="section container market-page__section">
        <SectionHeader
          eyebrow={deText("Build capabilities", lang)}
          title={deText("What this proves for AI consulting clients", lang)}
          text={deText("The projects show the ability to turn an audit or roadmap into a practical artifact: prototype, dashboard, internal tool, data model, or deployed workflow application.", lang)}
        />
        <FullStackCapabilityGrid items={localizedFullstackCapabilities} />
      </section>

      <section className="section container market-page__section">
        <CTAStrip
          accent="fullstack"
          eyebrow={deText("Next step", lang)}
          title={deText("Need the audit recommendation turned into a working tool?", lang)}
          text={deText("The strongest fit is product-shaped technical work after workflow discovery: a useful prototype, dashboard, internal assistant, or AI-assisted workflow system with clear product logic.", lang)}
          primary={{ label: deText("Discuss Prototype Sprint", lang), href: `mailto:${EMAIL}?subject=Prototype%20Sprint%20Discussion` }}
          secondary={{ label: deText("View GitHub", lang), href: "https://github.com/romahawk" }}
        />
      </section>
    </div>
  );
}
