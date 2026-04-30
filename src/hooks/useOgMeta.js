import { useEffect } from "react";
import { techProjects } from "../data/projects.js";

const BASE = {
  title: "Roman Mazuryk - Technical Product Manager & Founder-Operator",
  description:
    "Technical Product Manager and Founder-Operator building AI-augmented product systems in regulated industries from strategy through delivery.",
  url: "https://www.mazuryk.dev/",
  image: "https://www.mazuryk.dev/images/og-home.png",
  imageAlt: "Mazuryk.dev hero preview with headline, CTA buttons, and a small circular profile photo.",
  imageWidth: "1200",
  imageHeight: "630",
};

const SERVICES = {
  title: "Web, Workflow & AI Systems | mazuryk.dev",
  description:
    "Productized systems that replace operational chaos with measurable results — lead-generating websites, automation dashboards, and AI workflow audits. Delivered in weeks, not quarters.",
  url: "https://www.mazuryk.dev/services",
  image: "https://www.mazuryk.dev/images/og-services.png",
  imageAlt: "Mazuryk.dev services page preview — Web, Workflow & AI Systems for founders and product teams.",
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
      if (window.location.pathname.replace(/\/+$/, "") === "/services") {
        applyMeta(SERVICES);
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
