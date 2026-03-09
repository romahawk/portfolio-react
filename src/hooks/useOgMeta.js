import { useEffect } from "react";
import { techProjects } from "../data/projects.js";

const BASE = {
  title: "Roman Mazuryk — Technical Product Manager & Founder-Operator",
  description:
    "Technical Product Manager and Founder-Operator with 10+ years in MedTech and regulated B2B environments. Building scalable product systems from strategy to delivery.",
  url: "https://www.mazuryk.dev/",
  image: "https://www.mazuryk.dev/images/profile.jpg",
};

function setMeta(selector, attr, value) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

function applyMeta({ title, description, url, image }) {
  document.title = title;
  setMeta('meta[name="description"]',          "content", description);
  setMeta('meta[property="og:title"]',         "content", title);
  setMeta('meta[property="og:description"]',   "content", description);
  setMeta('meta[property="og:url"]',           "content", url);
  setMeta('meta[property="og:image"]',         "content", image);
  setMeta('meta[name="twitter:title"]',        "content", title);
  setMeta('meta[name="twitter:description"]',  "content", description);
  setMeta('meta[name="twitter:image"]',        "content", image);
}

export function useOgMeta() {
  useEffect(() => {
    function update() {
      const match = window.location.hash.match(/^#projects\/(.+)$/);
      if (match) {
        const project = techProjects.find((p) => p.caseStudy === match[1]);
        if (project) {
          applyMeta({
            title: `${project.title} — mazuryk.dev`,
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
    return () => window.removeEventListener("hashchange", update);
  }, []);
}
