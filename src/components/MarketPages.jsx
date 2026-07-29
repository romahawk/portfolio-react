import {
  ArrowRight,
  Bot,
  ClipboardCheck,
  Code2,
  Github,
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
  RouteCard,
  SectionHeader,
  SystemCard,
  WorkflowMap,
} from "./system/SystemVisuals.jsx";
import { getProjectsByCategory, projectCategories } from "../data/projects.js";

const EMAIL = "romazuryk@proton.me";

const routeCards = [
  {
    title: "AI Automation for SMEs",
    text: "Workflow audits, AI automations, SOP systems, internal dashboards, and n8n-based process automation for small and medium-sized businesses.",
    cta: "Explore AI Solutions",
    href: "/ai",
    icon: Bot,
    accent: "ai",
  },
  {
    title: "MedTech Product & Project Portfolio",
    text: "MedTech implementation, OR integration, workflow systems, stakeholder coordination, and product/project management proof.",
    cta: "View MedTech Portfolio",
    href: "/medtech",
    icon: Stethoscope,
    accent: "medtech",
  },
  {
    title: "AI-Enhanced Full-Stack Development",
    text: "React, Next.js, Python, automation, product prototypes, dashboards, and AI-assisted development workflows.",
    cta: "View Full-Stack Work",
    href: "/fullstack",
    icon: Code2,
    accent: "fullstack",
  },
];

const homeWorkflow = [
  { label: "Product Thinking", detail: "States, owners, decisions, requirements" },
  { label: "AI Automation", detail: "Assistants, APIs, workflow triggers" },
  { label: "Workflow Systems", detail: "Dashboards, SOPs, prototypes, handover" },
];

const heroInputs = ["Emails", "Excel", "PDFs", "Calls", "Manual tasks"];
const heroOutputs = ["Workflow system", "Automation", "Dashboard", "SOP", "Prototype"];

const operatingModelPills = [
  "Product Thinking",
  "MedTech / Operations Experience",
  "AI Automation",
  "Full-Stack Delivery",
  "Workflow Systems",
];

const homeArtifact = {
  inputLabel: "Capabilities",
  outputLabel: "System",
  inputs: ["AI Automation", "MedTech Experience", "Full-Stack Delivery"],
  outputs: ["Workflow Systems"],
};

const aiArtifact = {
  inputLabel: "Manual process",
  outputLabel: "AI-assisted workflow",
  inputs: ["Intake", "Trigger", "Manual task"],
  outputs: ["Automation", "AI summary", "Human review", "Dashboard / output"],
};

const proofHighlights = [
  {
    title: "AI workflow audits",
    problem: "Manual work and scattered documentation hide where automation should start.",
    system: "Map one workflow, identify automation opportunities, and define a smallest useful system.",
    proof: "Offer structure, workflow mapping logic, SOP handover, and automation sprint path.",
    cta: { label: "Explore AI", href: "/ai" },
    icon: Bot,
    accent: "ai",
  },
  {
    title: "OR integration proof",
    problem: "Clinical workflows depend on equipment, vendors, handover, training, and implementation reality.",
    system: "Translate operating-room complexity into product/project requirements and workflow ownership.",
    proof: "Surgimedia, Surgiris, surgical video/audio workflows, stakeholder coordination, and handover.",
    cta: { label: "View MedTech", href: "/medtech" },
    icon: Stethoscope,
    accent: "medtech",
  },
  {
    title: "Workflow tool builds",
    problem: "Teams need visible workflow state, not another static document or vague prototype.",
    system: "Build dashboards, product prototypes, APIs, persistence, and AI-assisted development loops.",
    proof: "FlowLogix, LiveSurgery, mazuryk.dev, and archived technical prototypes.",
    cta: { label: "View Full-Stack", href: "/fullstack" },
    icon: Code2,
    accent: "fullstack",
  },
];

const aiOffers = [
  {
    title: "AI Workflow Audit",
    badge: "Best starting point",
    bestFor: "Identifying where AI and automation can remove real workflow friction.",
    deliverable: "Workflow map + automation opportunity roadmap.",
    output: "Prioritized opportunities, risk points, tool suggestions, and first sprint scope.",
    cta: { label: "Request audit", href: `mailto:${EMAIL}?subject=AI%20Workflow%20Audit%20Request` },
    icon: ClipboardCheck,
    featured: true,
  },
  {
    title: "Automation Sprint",
    bestFor: "Building one useful workflow instead of discussing broad AI strategy.",
    deliverable: "A working automation or prototype.",
    output: "Connected forms, emails, documents, spreadsheets, APIs, and AI actions.",
    cta: { label: "Discuss sprint", href: `mailto:${EMAIL}?subject=Automation%20Sprint%20Discussion` },
    icon: Bot,
  },
  {
    title: "SOP / Knowledge System",
    bestFor: "Turning scattered business knowledge into repeatable procedures.",
    deliverable: "Structured SOPs, onboarding materials, and reusable documentation flows.",
    output: "Process library, SOP drafts, handover templates, and AI-assisted documentation logic.",
    cta: { label: "Structure knowledge", href: `mailto:${EMAIL}?subject=SOP%20Knowledge%20System` },
    icon: Workflow,
  },
  {
    title: "Dashboard / Internal Tool Prototype",
    bestFor: "Replacing spreadsheet chaos with operational visibility.",
    deliverable: "A lightweight dashboard or internal workflow tool.",
    output: "Status tracking, task ownership, simple reporting, and workflow state visibility.",
    cta: { label: "Discuss prototype", href: `mailto:${EMAIL}?subject=Internal%20Tool%20Prototype` },
    icon: Code2,
  },
];

const aiStack = [
  {
    capability: "AI reasoning / writing",
    tools: "ChatGPT, Claude",
    useCase: "Summaries, classification, SOP drafts, structured outputs",
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
    capability: "Data / operations base",
    tools: "Airtable, Notion, Google Sheets",
    useCase: "Lightweight workflow databases and operational tracking",
  },
  {
    capability: "Custom UI",
    tools: "React, Next.js",
    useCase: "Dashboards, internal tools, workflow interfaces",
  },
  {
    capability: "Data persistence",
    tools: "Supabase, Firebase",
    useCase: "User data, workflow states, project records",
  },
  {
    capability: "Deployment",
    tools: "Vercel, Render",
    useCase: "Fast deployment of prototypes and lightweight tools",
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
    title: "Lead qualification workflow",
    steps: ["Website form / email", "AI classifies request", "Human reviews priority", "CRM/task updated"],
    value: "Faster response and cleaner follow-up ownership.",
  },
  {
    title: "Quote / request intake workflow",
    steps: ["Customer request", "AI extracts key fields", "Missing data flagged", "Quote task created"],
    value: "Less manual sorting and fewer incomplete requests.",
  },
  {
    title: "SOP generator",
    steps: ["Process notes", "AI drafts SOP", "Human review", "Structured documentation"],
    value: "Repeatable procedures instead of scattered knowledge.",
  },
  {
    title: "Meeting-to-action workflow",
    steps: ["Meeting notes", "AI summary", "Decisions and owners extracted", "Tasks assigned"],
    value: "Clearer ownership after calls and meetings.",
  },
  {
    title: "Document extraction workflow",
    steps: ["PDF / email attachment", "AI extracts fields", "Review queue", "Database updated"],
    value: "Less copy-paste and more reliable document handling.",
  },
  {
    title: "Operations dashboard",
    steps: ["Sheets / forms / tasks", "Workflow state model", "Dashboard", "Weekly visibility"],
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

const medtechProof = [
  "OR integration and surgical infrastructure",
  "Surgimedia / Surgiris / Medintegro implementation context",
  "Surgical lights and surgical video/audio workflows",
  "Hospital stakeholder coordination, training, handover, and documentation",
  "Multi-vendor delivery across medical equipment environments",
];

const medtechHeroWorkflow = [
  { label: "Clinical need", detail: "User, site, and workflow context" },
  { label: "Technical requirements", detail: "Devices, infrastructure, constraints" },
  { label: "Implementation planning", detail: "Scope, dependencies, risk, owners" },
  { label: "Installation / coordination", detail: "Hospital, suppliers, service partners" },
  { label: "Training & handover", detail: "Documentation, adoption, support logic" },
  { label: "Workflow system", detail: "Product requirements, SOPs, visibility" },
];

const medtechImpact = [
  {
    title: "Clinical workflow understanding",
    text: "Worked around real operating room and clinical environments where technical systems, clinicians, infrastructure, documentation, and handover have to work together.",
  },
  {
    title: "Multi-stakeholder coordination",
    text: "Coordinated across clinicians, hospital teams, biomedical engineers, suppliers, service partners, and international manufacturers.",
  },
  {
    title: "Implementation-to-handover thinking",
    text: "Supported the transition from requirements and installation planning to training, documentation, operational use, and post-handover support.",
  },
  {
    title: "Product / workflow translation",
    text: "Translates field implementation complexity into product requirements, workflow maps, dashboards, SOP logic, and AI-assisted delivery concepts.",
  },
];

const medtechFieldContexts = [
  {
    fieldContext: "OR integration and surgical workflow systems",
    productRelevance: "workflow ownership, stakeholder alignment, handover risk",
  },
  {
    fieldContext: "Surgical video / audio workflows",
    productRelevance: "data capture, documentation, interoperability, clinical usability",
  },
  {
    fieldContext: "Surgical lights and OR equipment context",
    productRelevance: "requirements, constraints, training, post-handover support",
  },
  {
    fieldContext: "Medical equipment implementation",
    productRelevance: "implementation planning, dependencies, acceptance, supportability",
  },
  {
    fieldContext: "Hospital stakeholder coordination",
    productRelevance: "alignment across clinicians, technical teams, suppliers, and decision-makers",
  },
  {
    fieldContext: "Training, handover, documentation, support logic",
    productRelevance: "structured operating memory, SOPs, onboarding, workflow state visibility",
  },
];

const medtechSelectedProof = [
  {
    title: "OR Integration & Surgical Workflow Systems",
    type: "Domain proof / implementation experience",
    problem: "OR environments combine devices, people, infrastructure, documentation, and handover - but workflow ownership is often fragmented.",
    system: "Mapped the implementation context around OR integration, surgical video workflows, stakeholder coordination, training, and handover.",
    proof: "Real MedTech implementation background.",
    relevance: "Product / project management, stakeholder alignment, workflow design, implementation risk.",
    links: [{ label: "View OR proof", href: "/proof-of-work/or-integration" }],
  },
  {
    title: "LiveSurgery",
    type: "Product concept / MedTech platform prototype",
    problem: "Surgical collaboration, recording, remote expertise, and case visibility require structured product logic around clinical workflows.",
    system: "Created a product concept and prototype direction for surgical video / collaboration workflows.",
    proof: "Deployed product artifact and workflow prototype direction.",
    relevance: "MedTech product thinking, workflow design, clinical collaboration, technical specification.",
    links: [{ label: "Live demo", href: "https://livesurgery-landing.vercel.app/" }],
  },
  {
    title: "MedTech Implementation Handoff Assistant",
    type: "AI-assisted workflow concept",
    problem: "Implementation knowledge is often scattered across emails, PDFs, meetings, notes, and informal handover.",
    system: "Designed an AI-assisted workflow to structure requirements, missing documents, risks, meeting summaries, and customer handover.",
    proof: "Workflow map / product specification / reference system.",
    relevance: "Product Ops, implementation enablement, documentation, handover, AI-assisted delivery.",
    links: [{ label: "View workflow library", href: "/ai-workflow" }],
  },
  {
    title: "MedTech Operations Knowledge / Workflow OS",
    type: "Internal workflow system concept",
    problem: "Product data, project knowledge, SOPs, supplier information, and onboarding materials become fragmented over time.",
    system: "Designed a structured knowledge and workflow system for products, projects, SOPs, onboarding, and handover.",
    proof: "Concept, data model, prototype direction, and documentation artifact.",
    relevance: "Operational visibility, knowledge management, internal tools, structured delivery.",
    links: [{ label: "Explore workflows", href: "/ai-workflow" }],
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
  return (
    <div className="market-page__proof-grid">
      {projects.map((project) => <ProofCard project={project} accent={accent} key={project.title} />)}
    </div>
  );
}

function PillList({ items, accent = "ai" }) {
  return (
    <div className="market-page__pill-list">
      {items.map((item) => <FeaturePill accent={accent} key={item}>{item}</FeaturePill>)}
    </div>
  );
}

function HomeHeroVisual() {
  return (
    <div className="home-system-visual system-accent--ai" aria-label="Fragmented inputs become structured outputs">
      <div className="home-system-visual__column">
        <span className="home-system-visual__label">Fragmented inputs</span>
        {heroInputs.map((item) => <span className="home-system-visual__chip" key={item}>{item}</span>)}
      </div>
      <div className="home-system-visual__core" aria-hidden="true">
        <span className="home-system-visual__pulse" />
        <strong>Product logic</strong>
        <span>AI-assisted workflow map</span>
      </div>
      <div className="home-system-visual__column">
        <span className="home-system-visual__label">Structured outputs</span>
        {heroOutputs.map((item) => <span className="home-system-visual__chip home-system-visual__chip--output" key={item}>{item}</span>)}
      </div>
    </div>
  );
}

function MedTechImpactGrid({ items }) {
  return (
    <div className="medtech-impact-grid">
      {items.map((item, index) => (
        <article className="medtech-impact-card reveal" key={item.title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  );
}

function WorkflowBeforeAfter({ before, after }) {
  return (
    <div className="ai-before-after reveal">
      <div className="ai-before-after__panel ai-before-after__panel--before">
        <span className="ai-before-after__label">Before</span>
        <h3>Scattered work</h3>
        <ul>
          {before.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
      <div className="ai-before-after__arrow" aria-hidden="true">
        <ArrowRight size={22} />
      </div>
      <div className="ai-before-after__panel ai-before-after__panel--after">
        <span className="ai-before-after__label">After</span>
        <h3>Workflow intelligence</h3>
        <ul>
          {after.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

function FieldContextMap({ items }) {
  return (
    <div className="medtech-field-map reveal">
      {items.map((item) => (
        <article className="medtech-field-row" key={item.fieldContext}>
          <div>
            <span>Field context</span>
            <strong>{item.fieldContext}</strong>
          </div>
          <ArrowRight size={16} aria-hidden="true" />
          <div>
            <span>Product relevance</span>
            <p>{item.productRelevance}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function CapabilityToolMatrix({ items }) {
  return (
    <div className="ai-tool-matrix reveal">
      <div className="ai-tool-matrix__head">
        <span>Capability</span>
        <span>Tools</span>
        <span>Use case</span>
      </div>
      {items.map((item) => (
        <div className="ai-tool-matrix__row" key={item.capability}>
          <strong>{item.capability}</strong>
          <span>{item.tools}</span>
          <p>{item.useCase}</p>
        </div>
      ))}
    </div>
  );
}

function SelectedProofCard({ item }) {
  const links = item.links || [];

  return (
    <article className="medtech-proof-card reveal">
      <header>
        <p>{item.type}</p>
        <h3>{item.title}</h3>
      </header>
      <dl>
        <div>
          <dt>Problem</dt>
          <dd>{item.problem}</dd>
        </div>
        <div>
          <dt>System / contribution</dt>
          <dd>{item.system}</dd>
        </div>
        <div>
          <dt>Proof</dt>
          <dd>{item.proof}</dd>
        </div>
        <div>
          <dt>Relevance</dt>
          <dd>{item.relevance}</dd>
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
  const Icon = offer.icon;

  return (
    <article className={`ai-offer-card ${offer.featured ? "ai-offer-card--featured" : ""} reveal`}>
      <header className="ai-offer-card__header">
        <span className="ai-offer-card__icon" aria-hidden="true">{Icon ? <Icon size={18} /> : null}</span>
        {offer.badge ? <span className="ai-offer-card__badge">{offer.badge}</span> : null}
      </header>
      <h3>{offer.title}</h3>
      <dl>
        <div>
          <dt>Best for</dt>
          <dd>{offer.bestFor}</dd>
        </div>
        <div>
          <dt>Deliverable</dt>
          <dd>{offer.deliverable}</dd>
        </div>
        <div>
          <dt>Typical output</dt>
          <dd>{offer.output}</dd>
        </div>
      </dl>
      <a href={offer.cta.href} className="ai-offer-card__cta">
        {offer.cta.label} <ArrowRight size={14} aria-hidden="true" />
      </a>
    </article>
  );
}

function CapabilityGrid({ items }) {
  return (
    <div className="medtech-capability-grid">
      {items.map((item) => (
        <article className="medtech-capability-card reveal" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  );
}

function WorkflowExampleStrip({ workflow }) {
  return (
    <article className="ai-workflow-strip reveal">
      <div className="ai-workflow-strip__title">
        <h3>{workflow.title}</h3>
        <p>{workflow.value}</p>
      </div>
      <div className="ai-workflow-strip__flow" aria-label={`${workflow.title} flow`}>
        {workflow.steps.map((step, index) => (
          <span className="ai-workflow-strip__node" key={step}>
            <span>{["Input", "Automation", "Review", "Output"][index]}</span>
            {step}
          </span>
        ))}
      </div>
    </article>
  );
}

function ProcessTimeline({ steps }) {
  return (
    <div className="ai-process-timeline">
      {steps.map((step, index) => (
        <article className="ai-process-step reveal" key={step.title}>
          <span className="ai-process-step__number">{String(index + 1).padStart(2, "0")}</span>
          <div className="ai-process-step__body">
            <h3>{step.title}</h3>
            <dl>
              <div>
                <dt>What happens</dt>
                <dd>{step.happens}</dd>
              </div>
              <div>
                <dt>You provide</dt>
                <dd>{step.provide}</dd>
              </div>
              <div>
                <dt>I deliver</dt>
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
  return (
    <div className="medtech-role-grid">
      {groups.map((group) => (
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
  return (
    <div className="ai-fit-grid reveal">
      <article className="ai-fit-card ai-fit-card--good">
        <h3>Good fit</h3>
        <ul>
          {good.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </article>
      <article className="ai-fit-card ai-fit-card--not">
        <h3>Not ideal for</h3>
        <ul>
          {notIdeal.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </article>
    </div>
  );
}

function FullStackHeroVisual({ items }) {
  return (
    <div className="fullstack-hero-map system-accent--fullstack reveal" aria-label="Idea to deployed artifact">
      {items.map((item, index) => (
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
  return (
    <div className="fullstack-stack-grid">
      {groups.map((group) => (
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
  return (
    <div className="fullstack-workflow-row">
      {steps.map((step, index) => (
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
  const links = project.links || [];

  return (
    <article className={`fullstack-project-card ${compact ? "fullstack-project-card--compact" : ""} reveal`}>
      <header>
        {project.status ? <span className="fullstack-project-card__status">{project.status}</span> : null}
        <p>{project.type}</p>
        <h3>{project.title}</h3>
      </header>
      <p className="fullstack-project-card__description">{project.description}</p>
      <p className="fullstack-project-card__relevance">{project.relevance}</p>
      <div className="fullstack-project-card__stack">
        {project.stack.map((item) => <FeaturePill accent="fullstack" key={item}>{item}</FeaturePill>)}
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
  return (
    <div className="fullstack-capability-grid">
      {items.map((item) => (
        <article className="fullstack-capability-card reveal" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  );
}

export function HomePage() {
  const highlights = [
    "Product thinking",
    "AI automation",
    "Full-stack delivery",
  ];

  return (
    <div className="market-page market-page--home">
      <PageHero
        id="home"
        eyebrow="Roman Mazuryk"
        title="AI-Augmented Product & Workflow Systems"
        subtitle="I turn messy operational workflows into structured software systems using product thinking, AI automation, and full-stack delivery."
        primaryCta={{ label: "Explore AI Solutions", href: "/ai" }}
        secondaryCta={{ label: "View MedTech Portfolio", href: "/medtech" }}
        tertiaryCta={{ label: "View Full-Stack Work", href: "/fullstack" }}
        scrollTargetId="routes"
      >
        <div className="market-page__hero-extra">
          <PillList items={highlights} accent="ai" />
          <HomeHeroVisual />
        </div>
      </PageHero>

      <section id="routes" className="section container market-page__section">
        <SectionHeader
          eyebrow="Three-vector router"
          title="Choose the route that matches your intent"
          text="Three entry points, one operating model: fragmented workflows become visible systems."
        />
        <div className="market-page__route-grid">
          {routeCards.map((card) => <RouteCard {...card} key={card.href} />)}
        </div>
      </section>

      <section className="section container market-page__section">
        <SectionHeader
          eyebrow="System map"
          title="One operating model, three market entry points"
          text="Product thinking plus MedTech and operations experience plus AI automation plus full-stack delivery equals practical workflow systems."
        />
        <ArtifactMap
          accent="ai"
          title="AI Automation plus MedTech Experience plus Full-Stack Delivery becomes Workflow Systems"
          {...homeArtifact}
        />
        <WorkflowMap items={homeWorkflow} accent="ai" title="One operating model, three market entry points" />
        <PillList items={operatingModelPills} accent="ai" />
      </section>

      <section className="section container market-page__section">
        <SectionHeader
          eyebrow="Selected proof"
          title="A few signals, not the whole archive"
          text="The homepage stays concise; deeper proof lives inside the relevant market route."
        />
        <div className="market-page__highlight-grid">
          {proofHighlights.map((item) => <SystemCard {...item} key={item.title} />)}
        </div>
      </section>

      <section className="section container market-page__section">
        <CTAStrip
          accent="ai"
          eyebrow="Next step"
          title="Choose the path that matches your intent."
          text="Start with one concrete workflow, role need, or prototype idea."
          primary={{ label: "Discuss a workflow", href: "/contact" }}
          secondary={{ label: "Explore AI Solutions", href: "/ai" }}
        />
      </section>
    </div>
  );
}

export function AIPage() {
  const projects = getProjectsByCategory(projectCategories.aiAutomation, { featuredOnly: true });

  return (
    <div className="market-page market-page--ai">
      <PageHero
        eyebrow="AI Solutions"
        title="AI Workflow Automation for SMEs"
        subtitle="I help small and medium-sized businesses turn repetitive operational work, scattered documentation, and manual coordination into AI-assisted workflows, automations, dashboards, and SOP systems."
        primaryCta={{ label: "Request AI Workflow Audit", href: `mailto:${EMAIL}?subject=AI%20Workflow%20Audit%20Request`, icon: <Mail size={15} className="icon ml-1" aria-hidden="true" /> }}
        secondaryCta={{ label: "Discuss Automation Sprint", href: `mailto:${EMAIL}?subject=Automation%20Sprint%20Discussion` }}
        scrollTargetId="ai-workflow-intelligence"
        variant="ai"
      >
        <div className="ai-hero-extra">
          <p className="market-page__claim">I do not sell AI experiments. I help businesses remove workflow friction.</p>
          <HomeHeroVisual />
        </div>
      </PageHero>

      <section id="ai-workflow-intelligence" className="section container market-page__section">
        <SectionHeader
          eyebrow="01 / Workflow intelligence"
          title="From scattered work to workflow intelligence"
          text="A workflow intelligence system connects scattered inputs - emails, documents, forms, spreadsheets, and meetings - and turns them into structured tasks, summaries, decisions, dashboards, or SOPs."
        />
        <WorkflowBeforeAfter before={aiBeforeAfter.before} after={aiBeforeAfter.after} />
        <ArtifactMap
          accent="ai"
          title="Manual Process becomes AI-Assisted Workflow"
          {...aiArtifact}
        />
      </section>

      <section className="section container market-page__section">
        <SectionHeader
          eyebrow="02 / Tools"
          title="Tools mapped to workflow capabilities"
          text="The stack depends on the workflow. I use AI, automation tools, lightweight databases, and custom interfaces only where they remove real operational friction."
        />
        <CapabilityToolMatrix items={aiStack} />
      </section>

      <section className="section container market-page__section">
        <SectionHeader
          eyebrow="03 / Productized offers"
          title="Productized offers"
          text="Start with one contained workflow. Each offer is designed to produce a usable business artifact, not a vague AI experiment."
        />
        <div className="ai-offer-grid">
          {aiOffers.map((offer) => <ProductizedOfferCard offer={offer} key={offer.title} />)}
        </div>
      </section>

      <section className="section container market-page__section">
        <SectionHeader
          eyebrow="04 / Example workflows"
          title="Example workflows"
          text="These are practical workflow patterns that can be adapted to SMEs, service businesses, logistics, operations, and MedTech-adjacent companies."
        />
        <div className="ai-workflow-library">
          {aiExampleWorkflows.map((workflow) => <WorkflowExampleStrip workflow={workflow} key={workflow.title} />)}
        </div>
      </section>

      <section className="section container market-page__section">
        <SectionHeader
          eyebrow="05 / Process"
          title="Process"
          text="The process is intentionally small-scope: map one workflow, build one useful system, review it with real users, and iterate."
        />
        <ProcessTimeline steps={aiProcess} />
      </section>

      <section className="section container market-page__section">
        <SectionHeader
          eyebrow="06 / Fit"
          title="Best fit"
          text="This is best suited for SMEs and operational teams that already have real work happening across emails, spreadsheets, documents, forms, meetings, and manual follow-ups - but lack a structured workflow system around it."
        />
        <FitSection good={aiFit.good} notIdeal={aiFit.notIdeal} />
        <ProofGrid projects={projects} accent="ai" />
      </section>

      <section className="section container market-page__section">
        <CTAStrip
          accent="ai"
          eyebrow="Next step"
          title="Have one messy workflow worth fixing?"
          text="Start with one contained process. I can help map it, identify automation opportunities, and build the smallest useful workflow system around it."
          primary={{ label: "Request AI Workflow Audit", href: `mailto:${EMAIL}?subject=AI%20Workflow%20Audit%20Request` }}
          secondary={{ label: "Discuss Automation Sprint", href: `mailto:${EMAIL}?subject=Automation%20Sprint%20Discussion` }}
        />
      </section>
    </div>
  );
}

export function MedTechPage() {
  return (
    <div className="market-page market-page--medtech">
      <PageHero
        eyebrow="MedTech / Product / Project"
        title="MedTech Product & Project Portfolio"
        subtitle="Real MedTech implementation experience translated into product thinking, project coordination, workflow systems, stakeholder alignment, and AI-assisted delivery."
        primaryCta={{ label: "Discuss MedTech Role", href: `mailto:${EMAIL}?subject=MedTech%20Product%20%2F%20Project%20Role`, icon: <Mail size={15} className="icon ml-1" aria-hidden="true" /> }}
        secondaryCta={{ label: "View Selected Proof", href: "#medtech-proof" }}
        scrollTargetId="medtech-impact"
      >
        <div className="market-page__hero-extra medtech-hero-extra">
          <p className="medtech-credibility-line">10+ years across MedTech, OR integration, clinical equipment workflows, supplier coordination, training, handover, and healthcare operations.</p>
          <WorkflowMap items={medtechHeroWorkflow} accent="medtech" title="Clinical need to workflow system" />
        </div>
      </PageHero>

      <section id="medtech-impact" className="section container market-page__section">
        <SectionHeader
          eyebrow="Impact snapshot"
          title="Implementation experience with product impact"
          text="The strongest signal is practical delivery context: clinical workflows, technical constraints, stakeholders, documentation, and handover translated into product/project judgment."
        />
        <MedTechImpactGrid items={medtechImpact} />
      </section>

      <section className="section container market-page__section">
        <SectionHeader
          eyebrow="Implementation proof"
          title="Real-world MedTech implementation context"
          text="My MedTech background comes from practical implementation work: operating room systems, medical equipment workflows, hospital stakeholders, supplier coordination, installation support, training, and handover."
        />
        <FieldContextMap items={medtechFieldContexts} />
        <PillList items={medtechProof} accent="medtech" />
      </section>

      <section id="medtech-proof" className="section container market-page__section">
        <SectionHeader
          eyebrow="Selected proof"
          title="Selected proof of work"
          text="A focused selection of MedTech and workflow-system projects that connect implementation experience with product thinking and AI-assisted delivery."
        />
        <div className="medtech-proof-grid">
          {medtechSelectedProof.map((item) => <SelectedProofCard item={item} key={item.title} />)}
        </div>
      </section>

      <section className="section container market-page__section">
        <SectionHeader
          eyebrow="Capabilities"
          title="Product & project capabilities"
          text="Capability is framed around what implementation-heavy teams need: requirements, alignment, workflow mapping, rollout thinking, documentation, and practical AI support."
        />
        <CapabilityGrid items={medtechCapabilityCards} />
      </section>

      <section className="section container market-page__section">
        <SectionHeader
          eyebrow="Role fit"
          title="Best-fit roles and environments"
          text="Clear fit for teams where clinical workflow understanding, implementation reality, and product/project structure need to meet."
        />
        <RoleFitSection groups={medtechRoleGroups} />
      </section>

      <section className="section container market-page__section">
        <CTAStrip
          accent="medtech"
          eyebrow="Next step"
          title="Need product, project, or workflow systems experience in MedTech?"
          text="I am most useful where clinical workflow understanding, implementation experience, stakeholder coordination, product thinking, and AI-assisted delivery need to come together."
          primary={{ label: "Discuss MedTech Role", href: `mailto:${EMAIL}?subject=MedTech%20Product%20%2F%20Project%20Role` }}
          secondary={{ label: "Contact Roman", href: "/contact" }}
        />
      </section>
    </div>
  );
}

export function FullStackPage() {
  return (
    <div className="market-page market-page--fullstack">
      <PageHero
        eyebrow="Product builder / AI-assisted delivery"
        title="AI-Enhanced Full-Stack Product Builder"
        subtitle="I build product prototypes, dashboards, workflow tools, and AI-assisted systems using modern full-stack tools and AI-native development workflows."
        primaryCta={{ label: "View Selected Projects", href: "#fullstack-projects" }}
        secondaryCta={{ label: "View GitHub", href: "https://github.com/romahawk", external: true, icon: <Github size={15} className="icon ml-1" aria-hidden="true" /> }}
        scrollTargetId="fullstack-stack"
      >
        <div className="market-page__hero-extra fullstack-hero-extra">
          <p className="fullstack-credibility-line">React, Next.js, Python, APIs, databases, deployment, and AI-assisted development workflows applied to real product and workflow problems.</p>
          <FullStackHeroVisual items={fullstackHeroFlow} />
        </div>
      </PageHero>

      <section id="fullstack-stack" className="section container market-page__section">
        <SectionHeader
          eyebrow="Technical stack"
          title="Technical stack"
          text="A compact product-builder toolkit for interfaces, APIs, data, deployment, and AI-assisted implementation loops."
        />
        <StackGroupGrid groups={fullstackStackGroups} />
      </section>

      <section className="section container market-page__section">
        <SectionHeader
          eyebrow="AI-assisted development workflow"
          title="AI-assisted development workflow"
          text="I use AI tools to accelerate product discovery, architecture planning, UI generation, code review, documentation, debugging, and iteration while keeping product logic and implementation decisions explicit."
        />
        <FullStackWorkflowRow steps={fullstackWorkflow} />
      </section>

      <section id="fullstack-projects" className="section container market-page__section">
        <SectionHeader
          eyebrow="Selected projects"
          title="Selected projects"
          text="A focused selection of deployed products, workflow systems, and technical prototypes showing product thinking, full-stack execution, and AI-assisted development."
        />
        <div className="fullstack-project-grid">
          {fullstackSelectedProjects.map((project) => <FullStackProjectCard project={project} key={project.title} />)}
        </div>
      </section>

      <section className="section container market-page__section">
        <SectionHeader
          eyebrow="Secondary experiments"
          title="Secondary experiments"
          text="Smaller product experiments and learning projects that show additional execution range without being the core positioning."
        />
        <div className="fullstack-secondary-grid">
          {fullstackSecondaryExperiments.map((project) => <FullStackProjectCard project={project} compact key={project.title} />)}
        </div>
      </section>

      <section className="section container market-page__section">
        <SectionHeader
          eyebrow="Build capabilities"
          title="What this proves"
          text="The projects translate into practical product-building capability, not a claim to build everything."
        />
        <FullStackCapabilityGrid items={fullstackCapabilities} />
      </section>

      <section className="section container market-page__section">
        <CTAStrip
          accent="fullstack"
          eyebrow="Next step"
          title="Need a prototype, dashboard, or workflow tool built quickly?"
          text="The strongest fit is product-shaped technical work: a useful prototype, dashboard, internal tool, or AI-assisted workflow system with clear product logic."
          primary={{ label: "Discuss Product Prototype", href: `mailto:${EMAIL}?subject=Full-Stack%20Prototype%20Discussion` }}
          secondary={{ label: "View GitHub", href: "https://github.com/romahawk" }}
        />
      </section>
    </div>
  );
}
