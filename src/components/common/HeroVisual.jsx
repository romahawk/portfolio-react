import React from "react";
import {
  BriefcaseBusiness,
  ClipboardCheck,
  FileSearch,
  GitBranch,
  Hospital,
  LayoutDashboard,
  Mail,
  PackageCheck,
  ShieldCheck,
  UserCheck,
  Workflow,
  Wrench,
} from "lucide-react";

const VISUALS = {
  home: {
    title: "Workflow System",
    nodes: ["Capture", "Structure", "Assist", "Review", "Handover"],
    side: ["MedTech context", "Auditability", "SOP handover"],
    Icon: Workflow,
  },
  proof: {
    title: "Proof Grid",
    nodes: ["Concept", "Prototype", "Built", "Archive"],
    side: ["Case studies", "Product artifacts", "Workflow risk"],
    Icon: LayoutDashboard,
  },
  workflow: {
    title: "AI Workflow Map",
    nodes: ["Input", "AI assist", "Human review", "Trace", "Export"],
    side: ["Source links", "Review logs", "Decision trail"],
    Icon: GitBranch,
  },
  services: {
    title: "Audit Sprint",
    nodes: ["Map", "Risk", "Scope", "Prototype", "Handover"],
    side: ["Deliverables", "Controls", "Roadmap"],
    Icon: ClipboardCheck,
  },
  about: {
    title: "Operator System",
    nodes: ["Hospital", "Workflow", "Product", "AI", "Handover"],
    side: ["MedTech operator", "Product judgment", "Traceability"],
    Icon: Hospital,
  },
  contact: {
    title: "Inquiry Router",
    nodes: ["Hiring", "Services", "Workflow", "Response"],
    side: ["Role fit", "Business audit", "Remote CET"],
    Icon: Mail,
  },
  "workflow-detail": {
    title: "Reference Workflow",
    nodes: ["Current", "Assist", "Checkpoint", "Audit", "Output"],
    side: ["Human-in-the-loop", "Version history", "SOP support"],
    Icon: FileSearch,
  },
};

const ICONS = [FileSearch, ShieldCheck, UserCheck, BriefcaseBusiness, PackageCheck, Wrench];

export default function HeroVisual({ type = "home", title }) {
  const visual = VISUALS[type] || VISUALS.home;
  const PrimaryIcon = visual.Icon;

  return (
    <div className={`hero-visual hero-visual--${type}`} aria-hidden="true">
      <div className="hero-visual__panel">
        <div className="hero-visual__top">
          <span className="hero-visual__icon">
            <PrimaryIcon size={20} />
          </span>
          <div>
            <strong>{title || visual.title}</strong>
            <span>AI workflow systems</span>
          </div>
        </div>

        <div className="hero-visual__map">
          {visual.nodes.map((node, index) => (
            <div className="hero-visual__node" key={node}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{node}</strong>
            </div>
          ))}
        </div>

        <div className="hero-visual__body">
          <div className="hero-visual__artifact">
            {ICONS.slice(0, 4).map((Icon, index) => (
              <span key={index}>
                <Icon size={15} />
              </span>
            ))}
          </div>
          <div className="hero-visual__side">
            {visual.side.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
