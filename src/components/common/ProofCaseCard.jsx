import { ArrowRight } from "lucide-react";
import StatusBadge from "../StatusBadge.jsx";

const FIELDS = [
  ["problem", "Problem"],
  ["role", "My role"],
  ["work", "What I did"],
  ["outcome", "Outcome"],
];

const TONES = ["surgical", "workflow", "systems", "demo"];

// Delivery proof card: reuses the medtech-proof-card styles; renders only the fields it is given.
export default function ProofCaseCard({ item, index = 0 }) {
  const links = item.links || [];

  return (
    <article className={`medtech-proof-card medtech-proof-card--${TONES[index % TONES.length]} reveal`}>
      <header className="proof-case-card__header">
        <h3>{item.title}</h3>
        {item.status ? <StatusBadge status={item.status} /> : null}
      </header>
      {/* Every field keeps its row (empty when missing) so rows line up across cards in the subgrid layout. */}
      <dl className="proof-case-card__fields">
        {FIELDS.map(([key, label]) => (item[key] ? (
          <div key={key}>
            <dt>{label}</dt>
            <dd>{item[key]}</dd>
          </div>
        ) : (
          <div className="proof-case-card__empty" aria-hidden="true" key={key} />
        )))}
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
