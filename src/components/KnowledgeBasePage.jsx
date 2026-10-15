import React, { useId, useMemo, useState } from "react";
import { ArrowUpRight, Brain, Cpu, FileDown, Gauge, Search, Sparkles, Wrench } from "lucide-react";
import PageHero from "./common/PageHero.jsx";
import { SectionIndex, SectionRail } from "./common/SectionNav.jsx";
import { contact, labels } from "../content/site.js";
import { kbClosing, kbGlossary, kbHero, kbMeta, kbPillars, kbProjects, kbSectionNav } from "../data/aiKnowledgeBase.js";

const ICONS = { Brain, Cpu, Gauge, Sparkles, Wrench };

const PROJECT_BY_ID = Object.fromEntries(kbProjects.map((project) => [project.id, project]));
const PILLAR_BY_ID = Object.fromEntries(kbPillars.map((pillar) => [pillar.id, pillar]));
// Matrix rows only for projects with at least one listed application; the rest stay in kbProjects for later.
const MATRIX_PROJECTS = kbProjects.filter((project) =>
  kbPillars.some((pillar) => pillar.projects.some((item) => item.project === project.id)),
);

// On mobile, long lists show this many items until expanded. Desktop always shows everything (CSS).
const PREVIEW_COUNT = 3;

const slug = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function Pill({ kind, value }) {
  return <span className={`kb-pill kb-pill--${kind}-${slug(value)}`}>{value}</span>;
}

// Renders every item; items past PREVIEW_COUNT get a class that CSS hides below 768px until opened.
// renderItem(item, extraClass) must return a keyed element and apply extraClass to it.
function CollapsibleList({ as = "ul", className = "", items, renderItem, forceOpen = false }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const expanded = open || forceOpen;
  const collapsible = items.length > PREVIEW_COUNT && !forceOpen;

  return (
    <>
      {React.createElement(
        as,
        { id, className: `${className} kb-collapse ${expanded ? "kb-collapse--open" : ""}`.trim() },
        items.map((item, index) => renderItem(item, index >= PREVIEW_COUNT ? "kb-collapse__extra" : "")),
      )}
      {collapsible ? (
        <button
          type="button"
          className="kb-collapse__toggle"
          aria-expanded={expanded}
          aria-controls={id}
          onClick={() => setOpen((value) => !value)}
        >
          {expanded ? "Show fewer" : `Show all ${items.length}`}
        </button>
      ) : null}
    </>
  );
}

function PillarNav() {
  return (
    <nav className="kb-pillar-nav" aria-label="Knowledge base pillars">
      {kbPillars.map((pillar) => {
        const Icon = ICONS[pillar.icon] || Cpu;
        return (
          <a key={pillar.id} href={`#${pillar.id}`} className={`kb-pillar-nav__card kb-accent--${pillar.id}`}>
            <span className="kb-pillar-nav__num">{pillar.number}</span>
            <Icon size={20} aria-hidden="true" />
            <strong>{pillar.title}</strong>
            <span>{pillar.tagline}</span>
          </a>
        );
      })}
    </nav>
  );
}

function PillarSection({ pillar }) {
  const Icon = ICONS[pillar.icon] || Cpu;
  return (
    <section id={pillar.id} className={`section container kb-section kb-pillar kb-accent--${pillar.id}`} aria-labelledby={`${pillar.id}-title`}>
      <header className="kb-pillar__head reveal">
        <p className="kb-kicker">
          <Icon size={16} aria-hidden="true" /> {pillar.number} / {pillar.tagline}
        </p>
        <h2 id={`${pillar.id}-title`}><span className="about__chev">&gt;</span> {pillar.title}</h2>
        <p className="kb-pillar__definition">{pillar.definition}</p>
      </header>

      <dl className="kb-parts">
        {pillar.parts.map((part) => (
          <div key={part.term} className="kb-parts__item">
            <dt>{part.term}</dt>
            <dd>{part.text}</dd>
          </div>
        ))}
      </dl>

      <div className="kb-two-col">
        <div className="kb-box kb-box--do">
          <h3>Best practices</h3>
          <CollapsibleList
            items={pillar.practices}
            renderItem={(item, extra) => <li key={item} className={extra || undefined}>{item}</li>}
          />
        </div>
        <div className="kb-box kb-box--dont">
          <h3>Pitfalls</h3>
          <CollapsibleList
            items={pillar.pitfalls}
            renderItem={(item, extra) => <li key={item} className={extra || undefined}>{item}</li>}
          />
        </div>
      </div>

      <div className="kb-box kb-box--projects">
        <h3>In my projects</h3>
        <CollapsibleList
          className="kb-applications"
          items={pillar.projects}
          renderItem={(item, extra) => (
            <li key={`${item.project}-${item.text}`} className={extra || undefined}>
              <div className="kb-applications__meta">
                <strong>{PROJECT_BY_ID[item.project]?.name || item.project}</strong>
                <Pill kind="status" value={item.status} />
              </div>
              <p>{item.text}</p>
            </li>
          )}
        />
      </div>

      <div className="kb-box">
        <h3>Tools: use, try, skip</h3>
        <CollapsibleList
          className="kb-tools"
          items={pillar.tools}
          renderItem={(tool, extra) => (
            <li key={tool.name} className={extra || undefined}>
              <Pill kind="verdict" value={tool.verdict} />
              <a href={tool.href} target="_blank" rel="noreferrer">
                {tool.name} <ArrowUpRight size={13} aria-hidden="true" />
              </a>
              <span>{tool.note}</span>
            </li>
          )}
        />
      </div>
    </section>
  );
}

function ProjectMatrix() {
  return (
    <section id="kb-matrix" className="section container kb-section" aria-labelledby="kb-matrix-title">
      <header className="kb-section__head reveal">
        <p className="kb-kicker">Project view</p>
        <h2 id="kb-matrix-title"><span className="about__chev">&gt;</span> Which pillar does what, per project</h2>
        <p>The same content as above, read by project instead of by concept.</p>
      </header>
      <div className="kb-matrix" role="region" aria-label="Project by pillar matrix" tabIndex={0}>
        <table>
          <thead>
            <tr>
              <th scope="col">Project</th>
              {kbPillars.map((pillar) => <th scope="col" key={pillar.id}>{pillar.title}</th>)}
            </tr>
          </thead>
          <tbody>
            {MATRIX_PROJECTS.map((project) => (
              <tr key={project.id}>
                <th scope="row">
                  <strong>{project.name}</strong>
                  <span>{project.note}</span>
                </th>
                {kbPillars.map((pillar) => {
                  const items = pillar.projects.filter((item) => item.project === project.id);
                  return (
                    <td key={pillar.id}>
                      {items.length ? items.map((item) => (
                        <p key={item.text}><Pill kind="status" value={item.status} /> {item.text}</p>
                      )) : <span className="kb-matrix__empty" aria-label="Not applicable">n/a</span>}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Below 768px the table is hidden and each project is a card. */}
      <ul className="kb-matrix-cards" aria-label="Projects">
        {MATRIX_PROJECTS.map((project) => (
          <li key={project.id} className="kb-matrix-card">
            <div className="kb-matrix-card__head">
              <strong>{project.name}</strong>
              <Pill kind="status" value={project.status} />
            </div>
            <p>{project.note}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Glossary() {
  const [query, setQuery] = useState("");
  const [pillarFilter, setPillarFilter] = useState("all");
  const entries = useMemo(() => {
    const q = query.trim().toLowerCase();
    return [...kbGlossary]
      .sort((a, b) => a.term.localeCompare(b.term))
      .filter((entry) => pillarFilter === "all" || entry.pillar === pillarFilter)
      .filter((entry) => !q || `${entry.term} ${entry.def}`.toLowerCase().includes(q));
  }, [query, pillarFilter]);

  return (
    <section id="kb-glossary" className="section container kb-section" aria-labelledby="kb-glossary-title">
      <header className="kb-section__head reveal">
        <p className="kb-kicker">Glossary</p>
        <h2 id="kb-glossary-title"><span className="about__chev">&gt;</span> Terms in one line</h2>
      </header>
      <div className="kb-glossary__controls">
        <label className="kb-search">
          <Search size={16} aria-hidden="true" />
          <span className="sr-only">Search terms</span>
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search terms" />
        </label>
        <div className="ux-tabs" role="group" aria-label="Filter by pillar">
          {[{ id: "all", title: "All" }, ...kbPillars].map((pillar) => (
            <button
              type="button"
              key={pillar.id}
              className={`ux-tab ${pillarFilter === pillar.id ? "ux-tab--active" : ""}`}
              aria-pressed={pillarFilter === pillar.id}
              onClick={() => setPillarFilter(pillar.id)}
            >
              {pillar.title}
            </button>
          ))}
        </div>
      </div>
      <p className="kb-glossary__count" aria-live="polite">{entries.length} terms</p>
      {/* A search shows every match, so the mobile preview only applies to browsing. */}
      <CollapsibleList
        as="dl"
        className="kb-glossary"
        items={entries}
        forceOpen={query.trim() !== ""}
        renderItem={(entry, extra) => (
          <div key={entry.term} className={`kb-glossary__item kb-accent--${entry.pillar} ${extra}`.trim()}>
            <dt>
              {entry.term}
              <a href={`#${entry.pillar}`} className="kb-glossary__tag">{PILLAR_BY_ID[entry.pillar]?.title}</a>
            </dt>
            <dd>{entry.def}</dd>
          </div>
        )}
      />
    </section>
  );
}

export default function KnowledgeBasePage() {
  return (
    <div className="kb-page">
      <PageHero
        id="kb-top"
        eyebrow={`${kbMeta.title} · Updated ${kbMeta.lastReviewed}`}
        title={kbHero.title}
        subtitle={kbHero.subtitle}
        showScrollCue={false}
      >
        <ul className="kb-hero-points" aria-label="Proof points">
          {kbHero.proofPoints.map((point) => <li key={point}>{point}</li>)}
        </ul>
        <div className="page-hero__actions">
          <a href={contact.cvUrl} className="btn btn--primary" download>
            {labels.downloadCv} <FileDown size={15} className="icon ml-1" aria-hidden="true" />
          </a>
          <a href={contact.emailHref} className="kb-hero-email">
            {labels.emailMe}
          </a>
        </div>
        <SectionIndex nav={kbSectionNav} />
      </PageHero>

      <SectionRail nav={kbSectionNav} heroId="kb-top" />

      <section id="kb-pillars" className="section container kb-section" aria-labelledby="kb-pillars-title">
        <header className="kb-section__head reveal">
          <p className="kb-kicker">The model in one picture</p>
          <h2 id="kb-pillars-title"><span className="about__chev">&gt;</span> Five pillars</h2>
          <blockquote className="kb-analogy">{kbMeta.mentalModel}</blockquote>
        </header>
        <PillarNav />
      </section>

      {kbPillars.map((pillar) => <PillarSection pillar={pillar} key={pillar.id} />)}

      <ProjectMatrix />
      <Glossary />

      <section className="section container kb-section kb-maintenance">
        <div className="kb-box">
          <h3>How this guide is maintained</h3>
          <p>
            Status labels are literal: <Pill kind="status" value="In use" /> runs today,{" "}
            <Pill kind="status" value="In build" /> is being built, <Pill kind="status" value="Pre-beta" /> runs in a product that is
            not released yet. Plans are not listed until they are built. Tool verdicts reflect a solo builder working across a
            few repos. Your context may differ.
          </p>
        </div>
      </section>

      <section id="kb-contact" className="section container kb-section" aria-labelledby="kb-closing-title">
        <div className="kb-box kb-closing">
          <h2 id="kb-closing-title">{kbClosing.title}</h2>
          <p>
            {"Here's "}<a href={contact.cvUrl} download>my CV</a>, or email{" "}
            <a href={contact.emailHref}>{contact.email}</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
