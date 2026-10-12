import { useEffect } from "react";
import { seo } from "../content/site.js";

const IMAGE = {
  imageWidth: "1200",
  imageHeight: "630",
};

const HOME = {
  ...seo.home,
  image: "https://www.mazuryk.dev/images/og/og-home.png",
  imageAlt: "Roman Mazuryk, Technical Project Manager.",
  ...IMAGE,
};

const SERVICES = {
  ...seo.services,
  image: "https://www.mazuryk.dev/images/og/og-ai.png",
  imageAlt: "AI workflow audits and prototype sprints by Roman Mazuryk.",
  ...IMAGE,
};

const KB = {
  title: "AI Field Guide: Harness, Skills, Memory, Tools, Cost",
  description:
    "A practical reference for building with AI agents: terminology, best practices and tool choices, applied to real projects by Roman Mazuryk.",
  url: "https://www.mazuryk.dev/kb",
  image: "https://www.mazuryk.dev/images/og/og-ai.png",
  imageAlt: "AI Field Guide by Roman Mazuryk.",
  ...IMAGE,
};

const OR_INTEGRATION_PROOF = {
  title: "OR Integration & Surgical Workflow Systems | Roman Mazuryk",
  description:
    "Real-world MedTech implementation experience across operating room infrastructure, surgical equipment integration, video/audio workflows, clinical handover, and hospital stakeholder coordination.",
  url: "https://www.mazuryk.dev/proof-of-work/or-integration",
  image: "https://www.mazuryk.dev/images/og/og-or_workflow.png",
  imageAlt: "OR integration and surgical workflow systems proof page for Roman Mazuryk.",
  ...IMAGE,
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
    const path = window.location.pathname.replace(/\/+$/, "") || "/";
    if (path === "/services") applyMeta(SERVICES);
    else if (path === "/kb" || path.startsWith("/kb/")) applyMeta(KB);
    else if (path === "/proof-of-work/or-integration") applyMeta(OR_INTEGRATION_PROOF);
    else applyMeta(HOME);
  }, []);
}
