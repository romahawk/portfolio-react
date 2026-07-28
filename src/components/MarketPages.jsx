import React from "react";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  ClipboardCheck,
  Code2,
  Database,
  FileText,
  Github,
  Mail,
  Network,
  Stethoscope,
  Workflow,
} from "lucide-react";
import PageHero from "./common/PageHero.jsx";
import StatusBadge from "./StatusBadge.jsx";
import { getProjectsByCategory, projectCategories } from "../data/projects.js";

const EMAIL = "romazuryk@proton.me";

const routeCards = [
  {
    title: "AI Automation for SMEs",
    text: "Workflow audits, AI automations, SOP systems, internal dashboards, and n8n-based process automation for small and medium-sized businesses.",
    cta: "Explore AI Solutions",
    href: "/ai",
    icon: Bot,
  },
  {
    title: "MedTech Product & Project Portfolio",
    text: "MedTech implementation, OR integration, workflow systems, stakeholder coordination, and product/project management proof.",
    cta: "View MedTech Portfolio",
    href: "/medtech",
    icon: Stethoscope,
  },
  {
    title: "AI-Enhanced Full-Stack Development",
    text: "React, Next.js, Python, automation, product prototypes, dashboards, and AI-assisted development workflows.",
    cta: "View Full-Stack Work",
    href: "/fullstack",
    icon: Code2,
  },
];

const aiOffers = [
  ["AI Workflow Audit", "Map one messy process, identify automation opportunities, and define the smallest useful AI-assisted workflow."],
  ["Automation Sprint", "Build one working automation or workflow prototype using tools such as n8n, Make, Airtable, Notion, APIs, and AI assistants."],
  ["SOP / Knowledge System", "Turn scattered knowledge into structured operating procedures, onboarding materials, and repeatable documentation."],
  ["Dashboard / Internal Tool Prototype", "Replace spreadsheet chaos with a lightweight dashboard or internal tool."],
];

const aiProblems = [
  "Manual status updates and repeated coordination",
  "Scattered SOPs, onboarding notes, and tribal knowledge",
  "Spreadsheet-heavy operations with weak visibility",
  "AI interest without a practical workflow starting point",
];

const aiStack = ["ChatGPT / Claude", "n8n / Make", "Airtable / Notion / Google Sheets", "APIs", "React / Next.js", "Supabase / Firebase"];

const medtechProof = [
  "OR integration and surgical infrastructure",
  "Surgimedia / Surgiris / Medintegro implementation context",
  "Surgical lights and surgical video/audio workflows",
  "Hospital stakeholder coordination, training, handover, and documentation",
  "Multi-vendor delivery across medical equipment environments",
];

const medtechRoleFit = [
  "Product / Project Manager",
  "Technical Product Manager",
  "Product Operations",
  "Implementation / Solutions roles",
  "MedTech or HealthTech founder support",
];

const fullstackStack = [
  "React", "Next.js", "TypeScript / JavaScript", "Tailwind", "Python", "Flask / FastAPI",
  "PostgreSQL / Supabase / Firebase", "REST APIs", "Git / GitHub", "Vercel / Render / Koyeb",
  "ChatGPT / Claude / Codex / v0 / Cursor",
];

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="market-page__section-head reveal">
      <p className="market-page__kicker">{eyebrow}</p>
      <h2><span className="about__chev">&gt;</span> {title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function CardGrid({ items, icon = ClipboardCheck }) {
  return (
    <div className="market-page__grid">
      {items.map(([title, text]) => (
        <article className="market-page__card reveal" key={title}>
          {React.createElement(icon, { size: 18, className: "market-page__icon", "aria-hidden": "true" })}
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
      ))}
    </div>
  );
}

function ProjectCard({ project }) {
  const links = project.links || [];

  return (
    <article className="market-page__project reveal">
      <header>
        <div>
          <h3>{project.title}</h3>
          <p>{project.relevance}</p>
        </div>
        <StatusBadge status={project.status} />
      </header>
      <p>{project.summary}</p>
      <dl>
        <div>
          <dt>Problem</dt>
          <dd>{project.problem}</dd>
        </div>
        <div>
          <dt>Proof</dt>
          <dd>{project.proof}</dd>
        </div>
      </dl>
      <div className="market-page__chips">
        {project.stack.slice(0, 6).map((item) => <span key={item}>{item}</span>)}
      </div>
      {links.length ? (
        <div className="market-page__actions">
          {links.map((link) => {
            const external = link.href.startsWith("http");
            return (
              <a href={link.href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="project-card__link project-card__link--ghost" key={link.href}>
                {link.label} <ArrowRight size={14} aria-hidden="true" />
              </a>
            );
          })}
        </div>
      ) : null}
    </article>
  );
}

function ProjectGrid({ projects }) {
  return (
    <div className="market-page__project-grid">
      {projects.map((project) => <ProjectCard project={project} key={project.title} />)}
    </div>
  );
}

function ChipList({ items }) {
  return (
    <div className="market-page__chips market-page__chips--large">
      {items.map((item) => <span key={item}>{item}</span>)}
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
        subtitle="I combine product management, MedTech implementation experience, AI automation, and full-stack development to turn messy workflows into structured, usable systems."
        primaryCta={{ label: "Explore AI Solutions", href: "/ai" }}
        secondaryCta={{ label: "View MedTech Portfolio", href: "/medtech" }}
        tertiaryCta={{ label: "View Full-Stack Work", href: "/fullstack" }}
        scrollTargetId="routes"
      >
        <ChipList items={highlights} />
      </PageHero>

      <section id="routes" className="section container market-page__section">
        <SectionHeader
          eyebrow="Choose the right entry point"
          title="One background, three market routes"
          text="The umbrella is simple: I turn operational complexity into software systems using product thinking, AI automation, and full-stack delivery."
        />
        <div className="market-page__route-grid">
          {routeCards.map(({ title, text, cta, href, icon }) => (
            <a href={href} className="market-page__route-card reveal" key={href}>
              {React.createElement(icon, { size: 22, className: "market-page__icon", "aria-hidden": "true" })}
              <h3>{title}</h3>
              <p>{text}</p>
              <span>{cta} <ArrowRight size={14} aria-hidden="true" /></span>
            </a>
          ))}
        </div>
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
        <SectionHeader eyebrow="Problems I solve" title="Useful AI starts with operational friction" />
        <CardGrid items={aiProblems.map((item) => [item, "Mapped into a clearer workflow, automation candidate, SOP, dashboard, or prototype."])} icon={Workflow} />
      </section>

      <section className="section container market-page__section">
        <SectionHeader eyebrow="Productized offers" title="Small, practical engagements" text="Each offer is scoped around one workflow, one useful outcome, and clear handover." />
        <CardGrid items={aiOffers} icon={ClipboardCheck} />
      </section>

      <section className="section container market-page__section">
        <SectionHeader eyebrow="Example workflows" title="Automation and operating-system examples" />
        <ProjectGrid projects={projects} />
      </section>

      <section className="section container market-page__section">
        <SectionHeader eyebrow="Stack / tools" title="Practical tools before heavy engineering" />
        <ChipList items={aiStack} />
      </section>
    </div>
  );
}

export function MedTechPage() {
  const projects = getProjectsByCategory(projectCategories.medtech, { featuredOnly: true });

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
        <ChipList items={medtechProof} />
      </section>

      <section className="section container market-page__section">
        <SectionHeader eyebrow="Selected proof" title="MedTech product and project evidence" />
        <ProjectGrid projects={projects} />
      </section>

      <section className="section container market-page__section">
        <SectionHeader eyebrow="Role fit" title="Where this background fits" />
        <CardGrid items={medtechRoleFit.map((item) => [item, "A fit where workflow ownership, implementation reality, product thinking, and stakeholder coordination matter."])} icon={BriefcaseBusiness} />
      </section>
    </div>
  );
}

export function FullStackPage() {
  const projects = getProjectsByCategory(projectCategories.fullstack, { featuredOnly: true });

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
        <ChipList items={fullstackStack} />
      </section>

      <section className="section container market-page__section">
        <SectionHeader eyebrow="AI-assisted development workflow" title="Faster discovery, clearer implementation" />
        <CardGrid
          icon={Network}
          items={[
            ["Product framing", "Use AI to pressure-test users, jobs, workflows, requirements, and acceptance criteria before build."],
            ["Implementation", "Use Codex, Claude, ChatGPT, and related tools for code generation, refactoring support, debugging, and documentation."],
            ["Handover", "Turn prototypes into clearer readmes, specs, architecture notes, and next-step implementation plans."],
          ]}
        />
      </section>

      <section className="section container market-page__section">
        <SectionHeader eyebrow="Selected projects" title="Technical execution proof" />
        <ProjectGrid projects={projects} />
      </section>

      <section className="section container market-page__section">
        <div className="market-page__cta reveal">
          <Database size={20} className="market-page__icon" aria-hidden="true" />
          <div>
            <p className="market-page__kicker">Architecture / implementation proof</p>
            <h2>Dashboards, workflow state, APIs, persistence, and deployment</h2>
            <p>Examples include FlowLogix, LiveSurgery, this portfolio system, and archived prototypes such as JobSprint and AlphaRhythm.</p>
          </div>
          <a href="/proof-of-work" className="btn btn--ghost">Open proof archive <FileText size={15} className="icon ml-1" /></a>
        </div>
      </section>
    </div>
  );
}
