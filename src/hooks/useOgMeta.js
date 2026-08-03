import { useEffect } from "react";
import { techProjects } from "../data/projects.js";
import { getWorkflowBySlug } from "../data/aiWorkflows.js";
import { useTranslation } from "../context/LangContext.jsx";

const BASE = {
  title: "Roman Mazuryk \u2014 AI Workflow Systems Consultant",
  description:
    "AI systems consulting, workflow automation, audit-to-implementation roadmaps, and prototype builds for operations-heavy SMEs, MedTech, HealthTech, and regulated teams.",
  url: "https://www.mazuryk.dev/",
  image: "https://www.mazuryk.dev/images/og-home.png",
  imageAlt: "Mazuryk.dev hero preview with headline, CTA buttons, and a small circular profile photo.",
  imageWidth: "1200",
  imageHeight: "630",
};

const AI_SOLUTIONS = {
  title: "AI Workflow Systems and Automation for SMEs \u2014 Roman Mazuryk",
  description:
    "AI Workflow Opportunity Audits, automation pilots, internal assistants, SOP systems, dashboards, and implementation roadmaps for operations-heavy SMEs.",
  url: "https://www.mazuryk.dev/ai",
  image: "https://www.mazuryk.dev/images/og-services.png",
  imageAlt: "AI workflow automation services for SMEs by Roman Mazuryk.",
  imageWidth: "1200",
  imageHeight: "630",
};

const MEDTECH = {
  title: "MedTech and Regulated Operations Proof \u2014 Roman Mazuryk",
  description:
    "Real MedTech implementation experience used as authority for AI workflow consulting in regulated, documentation-heavy, and handover-heavy environments.",
  url: "https://www.mazuryk.dev/medtech",
  image: "https://www.mazuryk.dev/images/og-home.png",
  imageAlt: "MedTech product and project portfolio by Roman Mazuryk.",
  imageWidth: "1200",
  imageHeight: "630",
};

const FULLSTACK = {
  title: "From Audit to Working System \u2014 Roman Mazuryk",
  description:
    "Implementation proof for AI workflow consulting: prototypes, dashboards, internal tools, automations, and deployed workflow applications.",
  url: "https://www.mazuryk.dev/fullstack",
  image: "https://www.mazuryk.dev/images/og-home.png",
  imageAlt: "AI-enhanced full-stack product builder portfolio by Roman Mazuryk.",
  imageWidth: "1200",
  imageHeight: "630",
};

const ABOUT = {
  title: "About - Roman Mazuryk",
  description:
    "MedTech implementation experience, product/project management, AI automation, and full-stack development unified around practical workflow systems.",
  url: "https://www.mazuryk.dev/about",
  image: "https://www.mazuryk.dev/images/og-home.png",
  imageAlt: "About Roman Mazuryk.",
  imageWidth: "1200",
  imageHeight: "630",
};

const CONTACT = {
  title: "Discuss One Workflow to Automate - Roman Mazuryk",
  description:
    "Book an AI Workflow Opportunity Audit, discuss one workflow to automate, or scope an implementation sprint for an internal assistant, dashboard, or workflow tool.",
  url: "https://www.mazuryk.dev/contact",
  image: "https://www.mazuryk.dev/images/og-home.png",
  imageAlt: "Contact Roman Mazuryk.",
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
  image: "https://www.mazuryk.dev/images/og-ai-workflows.png",
  imageAlt: "AI workflow solution library for MedTech and regulated operations.",
  imageWidth: "1200",
  imageHeight: "630",
};

const OR_INTEGRATION_PROOF = {
  title: "OR Integration & Surgical Workflow Systems | Roman Mazuryk",
  description:
    "Real-world MedTech implementation experience across operating room infrastructure, surgical equipment integration, video/audio workflows, clinical handover, and hospital stakeholder coordination.",
  url: "https://www.mazuryk.dev/proof-of-work/or-integration",
  image: "https://www.mazuryk.dev/images/og-or_workflow.png",
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
  const { lang, t } = useTranslation();

  useEffect(() => {
    const seo = (key, fallback) => {
      const value = t(`site.seo.${key}`);
      return value === `site.seo.${key}` ? fallback : value;
    };

    function update() {
      const path = window.location.pathname.replace(/\/+$/, "") || "/";

      if (path === "/ai" || path === "/services" || path === "/collaborate") {
        applyMeta({
          ...AI_SOLUTIONS,
          title: seo("aiTitle", AI_SOLUTIONS.title),
          description: seo("aiDescription", AI_SOLUTIONS.description),
        });
        return;
      }

      if (path === "/medtech") {
        applyMeta({
          ...MEDTECH,
          title: seo("medtechTitle", MEDTECH.title),
          description: seo("medtechDescription", MEDTECH.description),
        });
        return;
      }

      if (path === "/fullstack") {
        applyMeta({
          ...FULLSTACK,
          title: seo("fullstackTitle", FULLSTACK.title),
          description: seo("fullstackDescription", FULLSTACK.description),
        });
        return;
      }

      if (path === "/about") {
        applyMeta({
          ...ABOUT,
          title: seo("aboutTitle", ABOUT.title),
          description: seo("aboutDescription", ABOUT.description),
        });
        return;
      }

      if (path === "/contact") {
        applyMeta({
          ...CONTACT,
          title: seo("contactTitle", CONTACT.title),
          description: seo("contactDescription", CONTACT.description),
        });
        return;
      }

      if (path === "/ai-workflow") {
        applyMeta({
          ...AI_WORKFLOW,
          title: seo("aiWorkflowTitle", AI_WORKFLOW.title),
          description: seo("aiWorkflowDescription", AI_WORKFLOW.description),
        });
        return;
      }

      if (path === "/proof-of-work/or-integration") {
        applyMeta({
          ...OR_INTEGRATION_PROOF,
          title: seo("orProofTitle", OR_INTEGRATION_PROOF.title),
          description: seo("orProofDescription", OR_INTEGRATION_PROOF.description),
        });
        return;
      }

      if (path.startsWith("/ai-workflow/")) {
        const slug = path.slice("/ai-workflow/".length);
        const workflow = getWorkflowBySlug(slug);
        if (workflow) {
          const titleKey = `site.workflows.${workflow.slug}.title`;
          const summaryKey = `site.workflows.${workflow.slug}.summary`;
          const title = t(titleKey) === titleKey ? workflow.title : t(titleKey);
          const summary = t(summaryKey) === summaryKey ? workflow.summary : t(summaryKey);
          applyMeta({
            title: `${title} - ${seo("workflowReference", "AI Workflow Reference")}`,
            description: summary,
            url: `https://www.mazuryk.dev/ai-workflow/${workflow.slug}`,
            image: AI_WORKFLOW.image,
            imageAlt: `${title} ${seo("workflowImageAltSuffix", "reference workflow for MedTech and regulated operations.")}`,
          });
          return;
        }
      }

      if (path === "/medtech-ai-systems/clinical-evidence-workflow") {
        applyMeta({
          ...CLINICAL_EVIDENCE,
          title: seo("clinicalEvidenceTitle", CLINICAL_EVIDENCE.title),
          description: seo("clinicalEvidenceDescription", CLINICAL_EVIDENCE.description),
        });
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

      applyMeta({
        ...BASE,
        title: seo("homeTitle", BASE.title),
        description: seo("homeDescription", BASE.description),
      });
    }

    update();
    window.addEventListener("hashchange", update);
    window.addEventListener("popstate", update);
    return () => {
      window.removeEventListener("hashchange", update);
      window.removeEventListener("popstate", update);
    };
  }, [lang, t]);
}
