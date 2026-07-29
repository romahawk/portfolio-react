import {
  ArrowRight,
  Bot,
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
    problem: "A messy process is slow, repeated, and spread across people, spreadsheets, documents, and messages.",
    system: "Map the workflow, expose bottlenecks, identify AI/automation opportunities, and define the smallest useful system.",
    proof: "Clear workflow map, friction register, opportunity matrix, and a scoped next-step implementation plan.",
    cta: { label: "Request audit", href: `mailto:${EMAIL}?subject=AI%20Workflow%20Audit%20Request` },
    icon: ClipboardCheck,
  },
  {
    title: "Automation Sprint",
    problem: "The team sees automation potential but lacks a working prototype, ownership model, and exception handling.",
    system: "Build one practical automation or workflow prototype using n8n, Make, Airtable/Notion, APIs, or custom UI where useful.",
    proof: "Working automation path, review checkpoints, handover notes, and next build recommendations.",
    cta: { label: "Discuss sprint", href: `mailto:${EMAIL}?subject=Automation%20Sprint%20Discussion` },
    icon: Bot,
  },
  {
    title: "SOP / Knowledge System",
    problem: "Operating knowledge lives in scattered notes, calls, folders, chats, and individual memory.",
    system: "Turn the knowledge into structured procedures, onboarding paths, ownership rules, and reusable documentation.",
    proof: "SOP structure, source map, handover checklist, and repeatable operating memory.",
    cta: { label: "Structure knowledge", href: `mailto:${EMAIL}?subject=SOP%20Knowledge%20System` },
    icon: Workflow,
  },
  {
    title: "Dashboard / Internal Tool Prototype",
    problem: "Spreadsheet-heavy operations make status, risk, and handoffs hard to see.",
    system: "Design a lightweight dashboard or internal tool that makes workflow states visible and actionable.",
    proof: "Clickable prototype, state model, data assumptions, and implementation-ready next steps.",
    cta: { label: "Discuss prototype", href: `mailto:${EMAIL}?subject=Internal%20Tool%20Prototype` },
    icon: Code2,
  },
];

const aiStack = [
  "ChatGPT",
  "Claude",
  "n8n",
  "Make",
  "Airtable / Notion / Google Sheets",
  "APIs",
  "React / Next.js when custom UI is needed",
  "Supabase / Firebase if persistence is needed",
];

const aiWorkflow = [
  { label: "Audit", detail: "Map one workflow and its hidden states" },
  { label: "Automate", detail: "Add AI/API support where it removes friction" },
  { label: "Operate", detail: "Document, hand over, and improve the system" },
];

const aiProblems = [
  {
    title: "Repetitive coordination",
    problem: "Updates, reminders, approvals, and handoffs depend on people chasing each other manually.",
    system: "Turn the recurring path into visible states, triggers, owners, and review points.",
    proof: "Better fit for automation sprints, status dashboards, and exception handling.",
    icon: Workflow,
  },
  {
    title: "Scattered documentation",
    problem: "Process knowledge lives across PDFs, chats, calls, spreadsheets, and individual memory.",
    system: "Structure knowledge into SOPs, onboarding paths, checklists, and reusable operating records.",
    proof: "SOP / Knowledge System offer with source mapping and handover logic.",
    icon: ClipboardCheck,
  },
  {
    title: "Spreadsheet visibility gaps",
    problem: "Teams cannot easily see workflow state, bottlenecks, risk, or accountability.",
    system: "Replace spreadsheet chaos with a lightweight dashboard or internal workflow tool.",
    proof: "FlowLogix-style operational visibility patterns and custom UI where needed.",
    icon: Code2,
  },
  {
    title: "AI without a use case",
    problem: "AI interest becomes experimentation when the workflow, data, and decision points are unclear.",
    system: "Start with one workflow audit, then add AI only where it removes real friction.",
    proof: "Clear opportunity matrix before build work begins.",
    icon: Bot,
  },
];

const aiProcess = [
  {
    title: "Map the workflow",
    problem: "The process feels obvious until ownership, exceptions, inputs, and handoffs are made explicit.",
    system: "Document the real path, not the idealized version.",
    proof: "Workflow map, actors, states, artifacts, and bottlenecks.",
    icon: Workflow,
  },
  {
    title: "Find the smallest useful system",
    problem: "Big automation scopes stall quickly.",
    system: "Pick one useful workflow improvement with clear boundaries and human review.",
    proof: "Prioritized automation candidate and implementation plan.",
    icon: ClipboardCheck,
  },
  {
    title: "Prototype and hand over",
    problem: "A demo is not useful unless the team knows how to operate it.",
    system: "Build the workflow prototype and package the logic into SOPs, notes, and next steps.",
    proof: "Working path, review checkpoints, and handover artifacts.",
    icon: Bot,
  },
];

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
    <div className="market-page">
      <PageHero
        eyebrow="AI Solutions"
        title="AI Workflow Automation for SMEs"
        subtitle="I help small and medium-sized businesses turn repetitive operational work, scattered documentation, and manual coordination into AI-assisted workflows, automations, dashboards, and SOP systems."
        primaryCta={{ label: "Request AI Workflow Audit", href: `mailto:${EMAIL}?subject=AI%20Workflow%20Audit%20Request`, icon: <Mail size={15} className="icon ml-1" aria-hidden="true" /> }}
        secondaryCta={{ label: "Discuss Automation Sprint", href: `mailto:${EMAIL}?subject=Automation%20Sprint%20Discussion` }}
        scrollTargetId="ai-problems"
      >
        <p className="market-page__claim">I do not sell AI experiments. I help businesses remove workflow friction.</p>
      </PageHero>

      <section id="ai-problems" className="section container market-page__section">
        <SectionHeader eyebrow="Problems I solve" title="Operational friction that is ready to become a system" text="The right starting point is usually not a grand AI strategy. It is one repeated process with unclear state, ownership, or documentation." />
        <div className="market-page__system-grid">
          {aiProblems.map((problem) => <SystemCard {...problem} accent="ai" key={problem.title} />)}
        </div>
      </section>

      <section className="section container market-page__section">
        <SectionHeader eyebrow="Workflow intelligence" title="Useful AI starts with operational friction" text="The work is not to decorate a business with AI. The work is to expose the process, structure the states, and automate where it is genuinely useful." />
        <ArtifactMap
          accent="ai"
          title="Manual Process becomes AI-Assisted Workflow"
          {...aiArtifact}
        />
        <WorkflowMap items={aiWorkflow} accent="ai" title="AI workflow automation path" />
      </section>

      <section className="section container market-page__section">
        <SectionHeader eyebrow="Productized offers" title="Small, practical engagements" text="Each offer is scoped around one workflow, one useful outcome, and clear handover." />
        <div className="market-page__system-grid">
          {aiOffers.map((offer) => <SystemCard {...offer} accent="ai" key={offer.title} />)}
        </div>
      </section>

      <section className="section container market-page__section">
        <SectionHeader eyebrow="Example workflows" title="Automation and operating-system examples" />
        <ProofGrid projects={projects} accent="ai" />
      </section>

      <section className="section container market-page__section">
        <SectionHeader eyebrow="Stack / tools" title="Practical tools before heavy engineering" />
        <PillList items={aiStack} accent="ai" />
      </section>

      <section className="section container market-page__section">
        <SectionHeader eyebrow="Process" title="Start with one workflow, then build only what is useful" />
        <div className="market-page__system-grid">
          {aiProcess.map((step) => <SystemCard {...step} accent="ai" key={step.title} />)}
        </div>
      </section>

      <section className="section container market-page__section">
        <CTAStrip
          accent="ai"
          eyebrow="Next step"
          title="Have one messy workflow worth fixing?"
          text="Start with a focused audit or a scoped automation sprint. No AI theater, just workflow friction made visible."
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
