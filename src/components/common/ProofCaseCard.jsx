import { ArrowRight } from "lucide-react";
import StatusBadge from "../StatusBadge.jsx";
import { useTranslation } from "../../context/LangContext.jsx";
import { deText } from "../../locales/germanCopy.js";

const FIELDS = [
  ["problem", "Problem"],
  ["role", "My role"],
  ["work", "What I did"],
  ["outcome", "Outcome"],
];

const TONES = ["surgical", "workflow", "systems", "demo"];

// Delivery proof card: reuses the medtech-proof-card styles; renders only the fields it is given.
export default function ProofCaseCard({ item, index = 0 }) {
  const { lang } = useTranslation();
  const links = item.links || [];

  return (
    <article className={`medtech-proof-card medtech-proof-card--${TONES[index % TONES.length]} reveal`}>
      <header>
        {item.status ? <StatusBadge status={item.status} /> : null}
        <h3>{item.title}</h3>
      </header>
      <dl>
        {FIELDS.filter(([key]) => item[key]).map(([key, label]) => (
          <div key={key}>
            <dt>{deText(label, lang)}</dt>
            <dd>{item[key]}</dd>
          </div>
        ))}
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
