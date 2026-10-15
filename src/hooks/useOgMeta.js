import { useEffect } from "react";
import { seo } from "../content/site.js";

const IMAGE = {
  imageWidth: "1200",
  imageHeight: "630",
};

const HOME = {
  ...seo.home,
  image: "https://www.mazuryk.dev/images/og/og-home.png",
  imageAlt: "Roman Mazuryk, Technical Project Manager / Implementation Lead.",
  ...IMAGE,
};

const SERVICES = {
  ...seo.services,
  image: "https://www.mazuryk.dev/images/og/og-ai.png",
  imageAlt: "AI workflow audits and prototype sprints by Roman Mazuryk.",
  ...IMAGE,
};

const KB = {
  title: "How I implement AI | Roman Mazuryk, Technical Project Manager / Implementation Lead",
  ogTitle: "How I implement AI · Roman Mazuryk",
  description:
    "How a Technical Project Manager with 20+ years in regulated MedTech, pharma and logistics uses AI every day: one source of truth, approval gates, checks before anything ships. Hamburg area, open to remote across the EU.",
  url: "https://www.mazuryk.dev/ai",
  image: "https://www.mazuryk.dev/images/og/og-ai.png",
  imageAlt: "How I implement AI, by Roman Mazuryk.",
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

// ogTitle: a shorter share title for OG and Twitter; defaults to the page title.
function applyMeta({ title, ogTitle = title, description, url, image, imageAlt = "", imageWidth = "1200", imageHeight = "630" }) {
  document.title = title;
  setMeta('meta[name="description"]', "content", description);
  setMeta('meta[property="og:title"]', "content", ogTitle);
  setMeta('meta[property="og:description"]', "content", description);
  setMeta('meta[property="og:url"]', "content", url);
  setMeta('meta[property="og:image"]', "content", image);
  setMeta('meta[property="og:image:width"]', "content", imageWidth);
  setMeta('meta[property="og:image:height"]', "content", imageHeight);
  setMeta('meta[property="og:image:alt"]', "content", imageAlt);
  setMeta('meta[name="twitter:title"]', "content", ogTitle);
  setMeta('meta[name="twitter:description"]', "content", description);
  setMeta('meta[name="twitter:image"]', "content", image);
  setMeta('meta[property="twitter:url"]', "content", url);
  setCanonical(url);
}

export function useOgMeta() {
  useEffect(() => {
    const path = window.location.pathname.replace(/\/+$/, "") || "/";
    if (path === "/services") applyMeta(SERVICES);
    else if (path === "/ai" || path.startsWith("/ai/")) applyMeta(KB);
    else if (path === "/proof-of-work/or-integration") applyMeta(OR_INTEGRATION_PROOF);
    else applyMeta(HOME);
  }, []);
}
