import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, FileDown, Search } from "lucide-react";
import PageHero from "./common/PageHero.jsx";
import { SectionChips } from "./common/SectionNav.jsx";
import { contact, labels } from "../content/site.js";
import {
  kbClosing,
  kbGlossary,
  kbGlossaryCopy,
  kbHero,
  kbMaintenance,
  kbNotes,
  kbPillars,
  kbPrinciples,
  kbProjects,
  kbProof,
  kbSectionNav,
} from "../data/aiKnowledgeBase.js";

const PROJECT_BY_ID = Object.fromEntries(kbProjects.map((project) => [project.id, project]));
const PILLAR_BY_ID = Object.fromEntries(kbPillars.map((pillar) => [pillar.id, pillar]));
// Matrix rows only for projects with at least one listed application (and not opted out).
const MATRIX_PROJECTS = kbProjects.filter(
  (project) =>
    project.matrix !== false &&
    kbPillars.some((pillar) => pillar.projects.some((item) => item.project === project.id)),
);

const supportsUntilFound = typeof HTMLElement !== "undefined" && "onbeforematch" in HTMLElement.prototype;

// Deep links: /ai#memory opens the Memory row. Runs on load and on every hashchange.
function useOpenDetailsFromHash() {
  useEffect(() => {
    const openFromHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      const details = target.closest("details");
      if (details && !details.open) details.open = true;
      target.scrollIntoView({ block: "start" });
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);
}

function Summary({ children }) {
  return (
    <summary className="kb-summary">
      <span className="kb-summary__text">{children}</span>
      <ChevronDown size={20} className="kb-summary__chevron" aria-hidden="true" />
    </summary>
  );
}

// Five nodes left to right with a loop from the last back to the second. Hand-written SVG in two
// layouts: horizontal from 640px, vertical below. CSS shows one; the hidden one leaves the a11y tree.
const H = { w: 176, h: 48, gap: 30, y: 16 };
const V = { w: 230, h: 44, gap: 32, x: 20 };

function diagramClass(node) {
  return `kb-diagram__node${node.tone ? ` kb-diagram__node--${node.tone}` : ""}`;
}

function PrinciplesDiagram() {
  const nodes = kbPrinciples.diagram;
  const hx = (i) => i * (H.w + H.gap);
  const vy = (i) => i * (V.h + V.gap) + 4;
  const hWidth = hx(nodes.length - 1) + H.w;
  const vHeight = vy(nodes.length - 1) + V.h + 8;
  const loopY = H.y + H.h + 28;

  return (
    <figure className="kb-diagram">
      <svg
        className="kb-diagram__svg kb-diagram__svg--h"
        viewBox={`0 0 ${hWidth} ${loopY + 6}`}
        role="img"
        aria-label={kbPrinciples.caption}
      >
        <defs>
          <marker id="kb-arrow-h" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0 10 5 0 10z" className="kb-diagram__head" />
          </marker>
        </defs>
        {nodes.map((node, i) => (
          <g key={node.label}>
            <rect x={hx(i) + 1} y={H.y} width={H.w - 2} height={H.h} rx="10" className={diagramClass(node)} />
            <text x={hx(i) + H.w / 2} y={H.y + H.h / 2} className={`kb-diagram__label${node.tone === "accent" ? " kb-diagram__label--accent" : ""}`}>
              {node.label}
            </text>
            {i < nodes.length - 1 ? (
              <line x1={hx(i) + H.w + 3} y1={H.y + H.h / 2} x2={hx(i + 1) - 3} y2={H.y + H.h / 2} className="kb-diagram__edge" markerEnd="url(#kb-arrow-h)" />
            ) : null}
          </g>
        ))}
        <path
          d={`M${hx(4) + H.w / 2} ${H.y + H.h + 2} V${loopY} H${hx(1) + H.w / 2} V${H.y + H.h + 4}`}
          className="kb-diagram__edge kb-diagram__edge--loop"
          markerEnd="url(#kb-arrow-h)"
        />
      </svg>

      <svg
        className="kb-diagram__svg kb-diagram__svg--v"
        viewBox={`0 0 ${V.x + V.w + 60} ${vHeight}`}
        role="img"
        aria-label={kbPrinciples.caption}
      >
        <defs>
          <marker id="kb-arrow-v" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0 10 5 0 10z" className="kb-diagram__head" />
          </marker>
        </defs>
        {nodes.map((node, i) => (
          <g key={node.label}>
            <rect x={V.x} y={vy(i)} width={V.w} height={V.h} rx="10" className={diagramClass(node)} />
            <text x={V.x + V.w / 2} y={vy(i) + V.h / 2} className={`kb-diagram__label${node.tone === "accent" ? " kb-diagram__label--accent" : ""}`}>
              {node.label}
            </text>
            {i < nodes.length - 1 ? (
              <line x1={V.x + V.w / 2} y1={vy(i) + V.h + 3} x2={V.x + V.w / 2} y2={vy(i + 1) - 3} className="kb-diagram__edge" markerEnd="url(#kb-arrow-v)" />
            ) : null}
          </g>
        ))}
        <path
          d={`M${V.x + V.w + 2} ${vy(4) + V.h / 2} H${V.x + V.w + 34} V${vy(1) + V.h / 2} H${V.x + V.w + 4}`}
          className="kb-diagram__edge kb-diagram__edge--loop"
          markerEnd="url(#kb-arrow-v)"
        />
      </svg>

      <figcaption className="kb-diagram__caption">{kbPrinciples.caption}</figcaption>
    </figure>
  );
}

function SectionHead({ id, kicker, title, children }) {
  return (
    <header className="kb-head">
      {kicker ? <p className="kb-kicker">{kicker}</p> : null}
      <h2 id={id}>{title}</h2>
      {children}
    </header>
  );
}

function ProofCard({ card }) {
  return (
    <article className="kb-proof-card">
      <div className="kb-proof-card__head">
        <h3>{card.title}</h3>
        <span className="kb-status">{card.status}</span>
      </div>
      <p className="kb-proof-card__what">{card.what}</p>
      <ul className="kb-proof-card__bullets">
        {card.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
      </ul>
      <p className="kb-proof-card__footer">{card.footer}</p>
    </article>
  );
}

function PillarRow({ pillar }) {
  return (
    <details name="pillar" id={pillar.id} className="kb-row">
      <Summary>
        <span className="kb-row__num">{pillar.number}</span>
        <span>
          <strong>{pillar.title}.</strong> {pillar.principle}
        </span>
      </Summary>
      <div className="kb-row__body">
        <p className="kb-row__definition">{pillar.definition}</p>

        <h3>{kbNotes.termsTitle}</h3>
        <dl className="kb-terms">
          {pillar.parts.map((part) => (
            <div key={part.term}>
              <dt>{part.term}</dt>
              <dd>{part.text}</dd>
            </div>
          ))}
        </dl>

        <div className="kb-two-col">
          <div>
            <h3>{kbNotes.practicesTitle}</h3>
            <ul className="kb-list">
              {pillar.practices.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div>
            <h3>{kbNotes.pitfallsTitle}</h3>
            <ul className="kb-list">
              {pillar.pitfalls.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>

        <h3>{kbNotes.projectsTitle}</h3>
        <ul className="kb-applications">
          {pillar.projects.map((item) => (
            <li key={`${item.project}-${item.text}`}>
              <strong>{PROJECT_BY_ID[item.project]?.name || item.project}</strong>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>

        <h3>{kbNotes.toolsTitle}</h3>
        <ul className="kb-tools">
          {pillar.tools.map((tool) => (
            <li key={tool.name}>
              <span className="kb-tools__verdict">{tool.verdict}</span>
              <a href={tool.href} target="_blank" rel="noopener noreferrer">
                {tool.name} <ArrowUpRight size={13} aria-hidden="true" />
              </a>
              <span className="kb-tools__note">{tool.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}

function ProjectMatrix() {
  return (
    <details id="matrix" className="kb-row kb-row--matrix">
      <Summary>
        <span>
          <strong>{kbNotes.matrixTitle}</strong>
        </span>
      </Summary>
      <div className="kb-row__body">
        <div className="kb-matrix" role="region" aria-label={kbNotes.matrixTitle} tabIndex={0}>
          <table>
            <thead>
              <tr>
                <th scope="col">{kbNotes.matrixProjectColumn}</th>
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
                        {items.length
                          ? items.map((item) => <p key={item.text}>{item.text}</p>)
                          : <span className="kb-matrix__empty" aria-label={kbNotes.matrixEmptyLabel}>{kbNotes.matrixEmpty}</span>}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Below 768px the table is hidden and each project is a card. */}
        <ul className="kb-matrix-cards">
          {MATRIX_PROJECTS.map((project) => (
            <li key={project.id}>
              <strong>{project.name}</strong>
              <span>{project.status} · {project.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}

function Glossary() {
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const listRef = useRef(null);
  const { previewCount } = kbGlossaryCopy;

  const entries = useMemo(() => {
    const q = query.trim().toLowerCase();
    return [...kbGlossary]
      .sort((a, b) => a.term.localeCompare(b.term))
      .filter((entry) => !q || `${entry.term} ${entry.def}`.toLowerCase().includes(q));
  }, [query]);

  const collapsed = supportsUntilFound && !showAll && query.trim() === "";

  // React treats `hidden` as a boolean, so hidden="until-found" is set on the DOM directly.
  // Without browser support every term stays visible.
  useEffect(() => {
    const items = listRef.current ? [...listRef.current.children] : [];
    items.forEach((item, index) => {
      if (collapsed && index >= previewCount) item.setAttribute("hidden", "until-found");
      else item.removeAttribute("hidden");
    });
  }, [collapsed, entries, previewCount]);

  return (
    <details className="kb-row kb-row--glossary">
      <Summary>
        <span>
          <strong>{kbGlossaryCopy.title(kbGlossary.length)}</strong>
        </span>
      </Summary>
      <div className="kb-row__body">
        <label className="kb-search">
          <Search size={16} aria-hidden="true" />
          <span className="sr-only">{kbGlossaryCopy.searchLabel}</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={kbGlossaryCopy.searchLabel}
          />
        </label>
        <p className="kb-glossary__count" aria-live="polite">{kbGlossaryCopy.countLabel(entries.length)}</p>
        <dl className="kb-glossary" ref={listRef}>
          {entries.map((entry) => (
            <div key={entry.term} className="kb-glossary__item">
              <dt>
                {entry.term}
                <span className="kb-glossary__pillar">{PILLAR_BY_ID[entry.pillar]?.title}</span>
              </dt>
              <dd>{entry.def}</dd>
            </div>
          ))}
        </dl>
        {collapsed && entries.length > previewCount ? (
          <button type="button" className="kb-text-button" onClick={() => setShowAll(true)}>
            {kbGlossaryCopy.showAll(entries.length)}
          </button>
        ) : null}
      </div>
    </details>
  );
}

export default function KnowledgeBasePage() {
  useOpenDetailsFromHash();

  return (
    <div className="kb-page">
      <PageHero
        id="top"
        eyebrow={kbHero.eyebrow}
        title={kbHero.title}
        subtitle={kbHero.subtitle}
        showScrollCue={false}
        primaryCta={{
          label: labels.downloadCv,
          href: contact.cvUrl,
          download: true,
          icon: <FileDown size={15} className="icon ml-1" aria-hidden="true" />,
        }}
        tertiaryCta={{ label: kbHero.workLink.label, href: kbHero.workLink.href, className: "kb-text-link" }}
      />

      <SectionChips nav={kbSectionNav} />

      <section id="principles" className="container kb-section" aria-labelledby="principles-title">
        <SectionHead id="principles-title" kicker={kbPrinciples.kicker} title={kbPrinciples.title} />
        <ol className="kb-principles">
          {kbPrinciples.items.map((item) => (
            <li key={item.lead}>
              <strong>{item.lead}</strong> {item.text}
            </li>
          ))}
        </ol>
        <PrinciplesDiagram />
      </section>

      <section id="proof" className="container kb-section" aria-labelledby="proof-title">
        <SectionHead id="proof-title" kicker={kbProof.kicker} title={kbProof.title} />
        <div className="kb-proof-grid">
          {kbProof.cards.map((card) => <ProofCard card={card} key={card.title} />)}
        </div>
      </section>

      <section id="notes" className="container kb-section kb-section--deferred" aria-labelledby="notes-title">
        <SectionHead id="notes-title" kicker={kbNotes.kicker} title={kbNotes.title}>
          <p>{kbNotes.intro}</p>
        </SectionHead>
        <div className="kb-rows">
          {kbPillars.map((pillar) => <PillarRow pillar={pillar} key={pillar.id} />)}
        </div>
        <div className="kb-rows">
          <ProjectMatrix />
        </div>
      </section>

      <section id="glossary" className="container kb-section kb-section--deferred kb-section--tight" aria-label={kbGlossaryCopy.title(kbGlossary.length)}>
        <div className="kb-rows">
          <Glossary />
        </div>
        <div className="kb-maintenance">
          <h3>{kbMaintenance.title}</h3>
          <p>{kbMaintenance.text}</p>
        </div>
      </section>

      <section id="contact" className="container kb-section" aria-labelledby="contact-title">
        <div className="kb-closing">
          <h2 id="contact-title">{kbClosing.title}</h2>
          <div className="kb-closing__actions">
            <a href={contact.cvUrl} className="btn btn--primary" download>
              {labels.downloadCv} <FileDown size={15} className="icon ml-1" aria-hidden="true" />
            </a>
            <a href={contact.emailHref} className="kb-text-link">{contact.email}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
