import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  ClipboardCheck,
  Code2,
  Github,
  Mail,
  Network,
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
import { getProjectsByCategory, projectCategories, projectPortfolio } from "../data/projects.js";

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

const medtechArtifact = {
  inputLabel: "OR / clinical workflow",
  outputLabel: "Product & project systems",
  inputs: ["Device / OR environment", "Stakeholders", "Documentation"],
  outputs: ["Handover", "Workflow states", "Operational visibility"],
};

const fullstackArtifact = {
  inputLabel: "Prompt",
  outputLabel: "Product system",
  inputs: ["Idea", "AI-assisted planning", "Code"],
  outputs: ["Data layer", "UI", "Deployed demo"],
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

const medtechRoleFit = [
  {
    title: "Product / Project Manager",
    problem: "MedTech delivery often fails between commercial promise, clinical workflow, vendor constraints, and implementation reality.",
    system: "Translate field constraints into roadmaps, requirements, rollouts, decision records, and handover logic.",
    proof: "OR integration, medical equipment implementation, training, stakeholder coordination, and documentation ownership.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Technical Product Manager",
    problem: "AI and workflow concepts need product judgment rooted in real operating environments.",
    system: "Frame use cases, users, data flows, risks, review points, and prototype scope before engineering spend.",
    proof: "LiveSurgery, clinical workflow concepts, OR video/audio workflow exposure, and AI-assisted delivery patterns.",
    icon: Network,
  },
  {
    title: "Product Operations / Implementation",
    problem: "Teams need cleaner visibility across adoption, handover, training, supportability, and multi-vendor coordination.",
    system: "Create structured workflow states, stakeholder maps, SOPs, dashboards, and accountable delivery routines.",
    proof: "Multi-site rollouts, clinical onboarding, hospital stakeholder coordination, and implementation documentation.",
    icon: Workflow,
  },
];

const medtechWorkflow = [
  { label: "Field reality", detail: "Hospitals, OR workflows, vendors, equipment" },
  { label: "Product model", detail: "Roles, constraints, states, handover" },
  { label: "Delivery proof", detail: "Implementation, training, workflow systems" },
];

const medtechOrExperience = [
  {
    title: "OR integration and surgical workflows",
    problem: "Operating rooms combine equipment, signals, clinical routines, documentation, vendors, and downtime sensitivity.",
    system: "Translate OR integration reality into workflow states, handover logic, adoption risks, and product requirements.",
    proof: "Surgimedia context, surgical video/audio workflows, surgical monitors, recorders, and multi-vendor coordination.",
    icon: Stethoscope,
  },
  {
    title: "Surgical lights and equipment rollout",
    problem: "Medical equipment delivery is not just installation; it requires clinical fit, training, supportability, and acceptance.",
    system: "Coordinate rollout, training, stakeholder expectations, and implementation documentation.",
    proof: "Surgiris surgical lights, Medintegro context, hospital stakeholders, training, and lifecycle handover.",
    icon: ClipboardCheck,
  },
  {
    title: "Implementation documentation",
    problem: "Important field knowledge is often lost between sales, implementation, support, product, and clinical users.",
    system: "Convert delivery context into structured records, requirements, owners, and support-ready documentation.",
    proof: "Implementation handover, workflow ownership, training materials, and multi-vendor delivery coordination.",
    icon: Workflow,
  },
];

const medtechCapabilities = [
  {
    title: "Product / project translation",
    problem: "Clinical and operational constraints often arrive as anecdotes, escalations, or implementation friction.",
    system: "Turn field reality into requirements, scope, acceptance criteria, rollout plans, and decision records.",
    proof: "MedTech implementation background plus workflow-system portfolio.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Stakeholder coordination",
    problem: "Hospitals, vendors, technical teams, clinicians, and commercial stakeholders need different levels of detail.",
    system: "Create shared visibility around owners, risks, handoffs, and next decisions.",
    proof: "Hospital stakeholder coordination, training, handover, and multi-vendor delivery.",
    icon: Network,
  },
  {
    title: "Workflow ownership",
    problem: "Implementation-heavy products fail when no one owns the operating model after delivery.",
    system: "Define how the workflow runs, who reviews it, what gets documented, and where escalation happens.",
    proof: "OR integration proof, MedTech workflow concepts, and documentation-oriented delivery.",
    icon: Workflow,
  },
];

const medtechAiConcepts = [
  {
    title: "MedTech Implementation Handoff Assistant",
    problem: "Implementation context gets lost before it becomes product, support, or customer-success knowledge.",
    system: "Capture site context, owners, risks, acceptance criteria, and next actions in a structured handoff model.",
    proof: "Workflow concept aligned with implementation-heavy MedTech teams.",
    cta: { label: "View workflow library", href: "/ai-workflow" },
    icon: ClipboardCheck,
  },
  {
    title: "MedTech Operations Knowledge / Workflow OS",
    problem: "Operational knowledge is scattered across implementation notes, support history, training, and vendor materials.",
    system: "Create a searchable operating layer for SOPs, handover, review points, and workflow states.",
    proof: "Combines MedTech domain context with AI-assisted knowledge-system patterns.",
    cta: { label: "Explore workflows", href: "/ai-workflow" },
    icon: Bot,
  },
  {
    title: "Regulated operations visibility",
    problem: "Operational teams need cleaner status visibility without pretending a dashboard solves clinical complexity.",
    system: "Frame FlowLogix-style visibility around workflow states, risk, accountability, and handoffs.",
    proof: "FlowLogix as operations visibility proof when applied carefully to regulated environments.",
    cta: { label: "View proof", href: "/fullstack" },
    icon: Code2,
  },
];

const fullstackStack = [
  "React",
  "Next.js",
  "TypeScript / JavaScript",
  "Tailwind",
  "Python",
  "Flask / FastAPI",
  "PostgreSQL / Supabase / Firebase",
  "REST APIs",
  "Git / GitHub",
  "Vercel / Render / Koyeb",
  "ChatGPT",
  "Claude",
  "Codex",
  "v0",
  "Cursor",
];

const fullstackWorkflow = [
  { label: "Product frame", detail: "User, workflow, state, acceptance criteria" },
  { label: "AI-assisted build", detail: "Codex, Claude, ChatGPT, implementation loops" },
  { label: "Working system", detail: "Prototype, dashboard, API, handover" },
];

const fullstackProjectProof = [
  {
    title: "Workflow Intelligence content system",
    status: "Built",
    summary: "Reusable visual and content primitives for workflow maps, system cards, proof cards, CTAs, and route-specific accents.",
    problem: "Generic portfolio cards do not communicate operational complexity becoming structured systems.",
    solution: "A component layer that expresses Problem, System, Proof, workflow states, connectors, and page-specific accents.",
    proof: "SystemVisuals components, visual-system CSS, and the three-vector route architecture.",
    stack: ["React components", "CSS tokens", "Workflow UX", "Design system"],
    links: [{ label: "View source", href: "https://github.com/romahawk" }],
    relevance: "Reusable product UI system",
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
  const projects = getProjectsByCategory(projectCategories.medtech, { featuredOnly: true });
  const medtechProofWork = [
    ...projects,
    {
      title: "MedTech Implementation Handoff Assistant",
      status: "Concept",
      summary: "AI-assisted handoff model for turning implementation context into requirements, owners, risks, acceptance criteria, and next steps.",
      problem: "Site realities and customer implementation knowledge get lost before they become product or support requirements.",
      solution: "Structured intake, risk register, requirement map, owner matrix, handoff export, and review checklist.",
      proof: "MedTech workflow concept grounded in implementation and product handover needs.",
      stack: ["AI workflow design", "Implementation handover", "Requirement mapping", "Risk register"],
      links: [{ label: "View workflow library", href: "/ai-workflow" }],
      relevance: "Implementation-to-product bridge",
    },
    {
      title: "MedTech Operations Knowledge / Workflow OS",
      status: "Concept",
      summary: "Structured operating layer for SOPs, onboarding, review points, handover, and implementation knowledge.",
      problem: "Operational knowledge is scattered across notes, training, support history, and vendor materials.",
      solution: "Knowledge workflow with source mapping, SOP structure, ownership logic, and AI-assisted retrieval patterns.",
      proof: "Extends SOP / Knowledge System patterns into MedTech implementation contexts.",
      stack: ["SOP systems", "Knowledge workflows", "AI assistance", "Handover"],
      links: [{ label: "Explore workflows", href: "/ai-workflow" }],
      relevance: "MedTech workflow-system concept",
    },
    {
      title: "FlowLogix",
      status: "Built",
      summary: "Operations visibility dashboard relevant to regulated operations when framed around states, handoffs, risk, and accountability.",
      problem: "Teams lose operational visibility across disconnected reports, spreadsheets, and status chasing.",
      solution: "Dashboard model for workflow states, lifecycle visibility, ETA risk, and role-gated accountability.",
      proof: "Flask API, SQLite schema, SQLAlchemy models, readonly demo mode, dashboard views, and Chart.js reporting.",
      stack: ["Flask", "SQLite", "Operational visibility", "Dashboard UX"],
      links: [{ label: "Live demo", href: "https://flowlogics.app/" }],
      relevance: "Regulated operations visibility proof",
    },
  ];

  return (
    <div className="market-page">
      <PageHero
        eyebrow="Trust engine"
        title="MedTech Product & Project Portfolio"
        subtitle="Real MedTech implementation experience translated into product thinking, workflow systems, stakeholder coordination, and AI-assisted delivery."
        primaryCta={{ label: "View Product / Project Proof", href: "/proof-of-work", icon: <ArrowRight size={15} className="icon ml-1" aria-hidden="true" /> }}
        secondaryCta={{ label: "Contact for MedTech Roles", href: `mailto:${EMAIL}?subject=MedTech%20Product%20%2F%20Project%20Role` }}
        scrollTargetId="medtech-credibility"
      />

      <section id="medtech-credibility" className="section container market-page__section">
        <SectionHeader eyebrow="Real-world credibility" title="Implementation-aware product judgment" text="The MedTech story is not only AI. It is clinical workflow, installation reality, stakeholder coordination, handover, documentation, and ownership under operational constraints." />
        <PillList items={medtechProof} accent="medtech" />
      </section>

      <section className="section container market-page__section">
        <SectionHeader eyebrow="OR integration" title="Clinical workflow experience translated into product logic" text="The useful signal is the ability to understand the environment behind the requirement: equipment, clinical routines, vendors, training, support, and handover." />
        <ArtifactMap
          accent="medtech"
          title="OR and Clinical Workflow becomes Product and Project Systems"
          {...medtechArtifact}
        />
        <WorkflowMap items={medtechWorkflow} accent="medtech" title="MedTech field reality to product logic" />
        <div className="market-page__system-grid">
          {medtechOrExperience.map((item) => <SystemCard {...item} accent="medtech" key={item.title} />)}
        </div>
      </section>

      <section className="section container market-page__section">
        <SectionHeader eyebrow="Product / project management" title="Where implementation becomes delivery capability" />
        <div className="market-page__system-grid">
          {medtechCapabilities.map((item) => <SystemCard {...item} accent="medtech" key={item.title} />)}
        </div>
      </section>

      <section className="section container market-page__section">
        <SectionHeader eyebrow="Selected proof" title="MedTech product and project evidence" text="Proof is framed around workflows, implementation ownership, and product/project translation rather than a disconnected case-study archive." />
        <ProofGrid projects={medtechProofWork} accent="medtech" />
      </section>

      <section className="section container market-page__section">
        <SectionHeader eyebrow="AI-assisted concepts" title="MedTech-relevant workflow systems" text="AI is positioned as assistance for documentation, handover, visibility, and structured review, not as a vague clinical claim." />
        <div className="market-page__system-grid">
          {medtechAiConcepts.map((item) => <SystemCard {...item} accent="medtech" key={item.title} />)}
        </div>
      </section>

      <section className="section container market-page__section">
        <SectionHeader eyebrow="Role fit" title="Where this background fits" />
        <div className="market-page__system-grid">
          {medtechRoleFit.map((role) => <SystemCard {...role} accent="medtech" cta={{ label: "Contact for role fit", href: `mailto:${EMAIL}?subject=MedTech%20Role%20Fit` }} key={role.title} />)}
        </div>
      </section>

      <section className="section container market-page__section">
        <CTAStrip
          accent="medtech"
          eyebrow="Next step"
          title="Hiring for MedTech Product, Project, Product Ops, or Implementation roles?"
          text="The strongest fit is implementation-heavy MedTech work where clinical workflow reality needs to become product logic, documentation, and delivery ownership."
          primary={{ label: "View Product / Project Proof", href: "/proof-of-work" }}
          secondary={{ label: "Contact for MedTech Roles", href: `mailto:${EMAIL}?subject=MedTech%20Product%20%2F%20Project%20Role` }}
        />
      </section>
    </div>
  );
}

export function FullStackPage() {
  const featuredProjects = getProjectsByCategory(projectCategories.fullstack, { featuredOnly: true });
  const secondaryProjects = projectPortfolio.filter((project) => (
    !project.featured && [projectCategories.fullstack, projectCategories.archived].includes(project.category)
  ));
  const selectedProjects = [...fullstackProjectProof, ...featuredProjects];

  return (
    <div className="market-page">
      <PageHero
        eyebrow="Proof engine"
        title="AI-Enhanced Full-Stack Product Builder"
        subtitle="I build product prototypes, dashboards, workflow tools, and AI-assisted systems using modern full-stack tools and AI-native development workflows."
        primaryCta={{ label: "View GitHub", href: "https://github.com/romahawk", external: true, icon: <Github size={15} className="icon ml-1" aria-hidden="true" /> }}
        secondaryCta={{ label: "Discuss Product Prototype", href: `mailto:${EMAIL}?subject=Full-Stack%20Prototype%20Discussion` }}
        scrollTargetId="fullstack-stack"
      />

      <section id="fullstack-stack" className="section container market-page__section">
        <SectionHeader eyebrow="Technical stack" title="Product-builder toolkit" text="Positioned honestly: not as a senior pure software engineer, but as an AI-enhanced builder who can ship prototypes, dashboards, workflow tools, and useful product systems." />
        <ArtifactMap
          accent="fullstack"
          title="Prompt becomes Prototype becomes Product System"
          {...fullstackArtifact}
        />
        <WorkflowMap items={fullstackWorkflow} accent="fullstack" title="AI-assisted full-stack delivery path" />
        <PillList items={fullstackStack} accent="fullstack" />
      </section>

      <section className="section container market-page__section">
        <SectionHeader eyebrow="AI-assisted development workflow" title="Faster discovery, clearer implementation" />
        <div className="market-page__system-grid">
          {[
            {
              title: "Product framing",
              problem: "Building starts too early when the user, workflow, state model, and acceptance criteria are fuzzy.",
              system: "Use AI to pressure-test jobs, workflows, constraints, risks, and requirements before implementation.",
              proof: "Sharper specs, clearer edge cases, and build loops that start from product logic rather than guesswork.",
              icon: Network,
            },
            {
              title: "Implementation",
              problem: "Prototype velocity stalls when every refactor, bug, and UI iteration is handled manually.",
              system: "Use Codex, Claude, ChatGPT, and related tools for code generation, refactoring support, debugging, and documentation.",
              proof: "Working prototypes, dashboards, route systems, metadata, and responsive interfaces shipped in short loops.",
              icon: Code2,
            },
            {
              title: "Handover",
              problem: "Prototypes lose value when decisions, data assumptions, and next steps are not captured.",
              system: "Turn builds into readmes, specs, architecture notes, and implementation plans.",
              proof: "Cleaner project memory and easier continuation for founders, teams, or hiring reviewers.",
              icon: ClipboardCheck,
            },
          ].map((item) => <SystemCard {...item} accent="fullstack" key={item.title} />)}
        </div>
      </section>

      <section className="section container market-page__section">
        <SectionHeader eyebrow="Selected projects" title="Technical execution proof" />
        <ProofGrid projects={selectedProjects} accent="fullstack" />
      </section>

      <section className="section container market-page__section">
        <SectionHeader eyebrow="Secondary experiments" title="Archived and de-emphasized proof" text="Older or less central projects are preserved as supporting workflow-system evidence without competing with the main market routes." />
        <ProofGrid projects={secondaryProjects} accent="fullstack" />
      </section>

      <section className="section container market-page__section">
        <CTAStrip
          accent="fullstack"
          eyebrow="Architecture / implementation proof"
          title="Dashboards, workflow state, APIs, persistence, and deployment"
          text="Examples include FlowLogix, LiveSurgery, this portfolio system, and archived prototypes such as JobSprint and AlphaRhythm."
          primary={{ label: "Open proof archive", href: "/proof-of-work" }}
          secondary={{ label: "Discuss prototype", href: `mailto:${EMAIL}?subject=Full-Stack%20Prototype%20Discussion` }}
        />
      </section>

      <section className="section container market-page__section">
        <SectionHeader eyebrow="GitHub / live demos" title="Built proof, demos, and implementation memory" text="The full-stack route is execution evidence for prototypes, dashboards, workflow tools, and AI-assisted build loops." />
        <PillList
          accent="fullstack"
          items={[
            "Git / GitHub history",
            "Live demos where available",
            "Prototype architecture",
            "Workflow state modeling",
            "API and persistence patterns",
            "AI-assisted implementation loops",
          ]}
        />
      </section>

      <section className="section container market-page__section">
        <CTAStrip
          accent="fullstack"
          eyebrow="Next step"
          title="Need a prototype, dashboard, or workflow tool built quickly?"
          text="The strongest fit is product-shaped technical work: a useful prototype, dashboard, internal tool, or AI-assisted workflow system."
          primary={{ label: "View GitHub", href: "https://github.com/romahawk" }}
          secondary={{ label: "Discuss Product Prototype", href: `mailto:${EMAIL}?subject=Full-Stack%20Prototype%20Discussion` }}
        />
      </section>
    </div>
  );
}
