import { useEffect } from "react";
import { techProjects } from "../data/projects.js";
import { getWorkflowBySlug } from "../data/aiWorkflows.js";

const BASE = {
  title: "Roman Mazuryk — MedTech Product & Workflow Systems",
  description:
    "MedTech operator and product systems builder combining real implementation experience with AI-assisted discovery, prototyping, documentation, and delivery.",
  url: "https://www.mazuryk.dev/",
  image: "https://www.mazuryk.dev/images/og-home.png",
  imageAlt: "Mazuryk.dev hero preview with headline, CTA buttons, and a small circular profile photo.",
  imageWidth: "1200",
  imageHeight: "630",
};

const COLLABORATE = {
  title: "AI-Assisted Workflow Collaboration for MedTech Teams",
  description:
    "Workflow audits, discovery sprints, prototypes, SOP systems, and compliance-aware automation support for MedTech, HealthTech, and regulated operations teams.",
  url: "https://www.mazuryk.dev/collaborate",
  image: "https://www.mazuryk.dev/images/og-services.png",
  imageAlt: "Mazuryk.dev collaboration page preview for AI-assisted workflow support in MedTech and regulated operations.",
  imageWidth: "1200",
  imageHeight: "630",
};

const CLINICAL_EVIDENCE = {
  title: "AI-Assisted Clinical Evidence Workflow for MedTech Teams | mazuryk.dev",
  description:
    "Compliance-aware workflow concept for turning scattered clinical evidence, product claims, PDFs, studies, and internal knowledge into a structured, traceable review system.",
  url: "https://www.mazuryk.dev/medtech-ai-systems/clinical-evidence-workflow",
  image: "https://www.mazuryk.dev/images/og-home.png",
  imageAlt: "AI-assisted clinical evidence workflow concept for MedTech teams.",
  imageWidth: "1200",
  imageHeight: "630",
};

const AI_WORKFLOW = {
  title: "AI Workflow Library",
  description:
    "Practical examples of AI-assisted workflow systems for MedTech, HealthTech, and regulated operations.",
  url: "https://www.mazuryk.dev/ai-workflow",
  image: "https://www.mazuryk.dev/images/og-home.png",
  imageAlt: "AI workflow solution library for MedTech and regulated operations.",
  imageWidth: "1200",
  imageHeight: "630",
};

const PROOF_OF_WORK = {
  title: "Proof of Work — MedTech Product & Workflow Systems",
  description:
    "Selected workflow systems, product concepts, and AI-assisted prototypes showing how Roman Mazuryk translates operational complexity into structured, auditable systems.",
  url: "https://www.mazuryk.dev/proof-of-work",
  image: "https://www.mazuryk.dev/images/og-home.png",
  imageAlt: "Proof of work for MedTech product and workflow systems.",
  imageWidth: "1200",
  imageHeight: "630",
};

const OR_INTEGRATION_PROOF = {
  title: "OR Integration & Surgical Workflow Systems | Roman Mazuryk",
  description:
    "Real-world MedTech implementation experience across operating room infrastructure, surgical equipment integration, video/audio workflows, clinical handover, and hospital stakeholder coordination.",
  url: "https://www.mazuryk.dev/proof-of-work/or-integration",
  image: "https://www.mazuryk.dev/images/og-home.png",
  imageAlt: "OR integration and surgical workflow systems proof page for Roman Mazuryk.",
  imageWidth: "1200",
  imageHeight: "630",
};

function setMeta(selector, attr, value) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

function setCanonical(url) {
  const el = document.querySelector('link[rel="canonical"]');
  if (el) el.setAttribute("href", url);
}

function applyMeta({ title, description, url, image, imageAlt = "", imageWidth = "1200", imageHeight = "630" }) {
  document.title = title;
  setMeta('meta[name="description"]', "content", description);
  setMeta('meta[property="og:title"]', "content", title);
  setMeta('meta[property="og:description"]', "content", description);
  setMeta('meta[property="og:url"]', "content", url);
  setMeta('meta[property="og:image"]', "content", image);
  setMeta('meta[property="og:image:width"]', "content", imageWidth);
  setMeta('meta[property="og:image:height"]', "content", imageHeight);
  setMeta('meta[property="og:image:alt"]', "content", imageAlt);
  setMeta('meta[name="twitter:title"]', "content", title);
  setMeta('meta[name="twitter:description"]', "content", description);
  setMeta('meta[name="twitter:image"]', "content", image);
  setMeta('meta[property="twitter:url"]', "content", url);
  setCanonical(url);
}

export function useOgMeta() {
  useEffect(() => {
    function update() {
      const path = window.location.pathname.replace(/\/+$/, "") || "/";

      if (path === "/services" || path === "/collaborate") {
        applyMeta(COLLABORATE);
        return;
      }

      if (path === "/ai-workflow") {
        applyMeta(AI_WORKFLOW);
        return;
      }

      if (path === "/proof-of-work") {
        applyMeta(PROOF_OF_WORK);
        return;
      }

      if (path === "/proof-of-work/or-integration") {
        applyMeta(OR_INTEGRATION_PROOF);
        return;
      }

      if (path.startsWith("/ai-workflow/")) {
        const slug = path.slice("/ai-workflow/".length);
        const workflow = getWorkflowBySlug(slug);
        if (workflow) {
          applyMeta({
            title: `${workflow.title} — AI Workflow Reference`,
            description: workflow.summary,
            url: `https://www.mazuryk.dev/ai-workflow/${workflow.slug}`,
            image: AI_WORKFLOW.image,
            imageAlt: `${workflow.title} reference workflow for MedTech and regulated operations.`,
          });
          return;
        }
      }

      if (path === "/medtech-ai-systems/clinical-evidence-workflow") {
        applyMeta(CLINICAL_EVIDENCE);
        return;
      }

      const match = window.location.hash.match(/^#projects\/(.+)$/);
      if (match) {
        const project = techProjects.find((p) => p.caseStudy === match[1]);
        if (project) {
          applyMeta({
            title: `${project.title} - mazuryk.dev`,
            description: project.summary,
            url: `https://www.mazuryk.dev/#projects/${match[1]}`,
            image: BASE.image,
          });
          return;
        }
      }

      applyMeta(BASE);
    }

    update();
    window.addEventListener("hashchange", update);
    window.addEventListener("popstate", update);
    return () => {
      window.removeEventListener("hashchange", update);
      window.removeEventListener("popstate", update);
    };
  }, []);
}
