import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { LangProvider } from "./context/LangContext.jsx";
import { useScrollReveal } from "./hooks/useScrollReveal.js";
import { useOgMeta } from "./hooks/useOgMeta.js";
import { useTheme } from "./hooks/useTheme.js";
import Navbar from "./components/Navbar.jsx";
import AboutPage from "./components/AboutPage.jsx";
import ContactPage from "./components/ContactPage.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";
import { AIPage, FullStackPage, HomePage, MedTechPage } from "./components/MarketPages.jsx";
import ClinicalEvidenceWorkflowPage from "./components/ClinicalEvidenceWorkflowPage.jsx";
import AIWorkflowLibrary from "./components/AIWorkflowLibrary.jsx";
import AIWorkflowDetailPage from "./components/AIWorkflowDetailPage.jsx";
import ORIntegrationProofPage from "./components/ORIntegrationProofPage.jsx";

const CLINICAL_EVIDENCE_PATH = "/medtech-ai-systems/clinical-evidence-workflow";
const AI_WORKFLOW_PATH = "/ai-workflow";
const OR_INTEGRATION_PROOF_PATH = "/proof-of-work/or-integration";
const ROUTE_SECTION_MAP = {
  "/about": "about",
  "/contact": "contact",
};

function getPage() {
  if (typeof window === "undefined") return "home";
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/ai" || path === "/services" || path === "/collaborate") return "ai";
  if (path === "/medtech") return "medtech";
  if (path === "/fullstack") return "fullstack";
  if (path === "/about") return "about";
  if (path === "/contact") return "contact";
  if (path === OR_INTEGRATION_PROOF_PATH) return "or-integration-proof";
  if (path === AI_WORKFLOW_PATH) return "ai-workflow";
  if (path.startsWith(`${AI_WORKFLOW_PATH}/`)) return "ai-workflow-detail";
  if (path === CLINICAL_EVIDENCE_PATH) return "clinical-evidence-workflow";
  return "home";
}

function getWorkflowSlug() {
  if (typeof window === "undefined") return "";
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  return path.startsWith(`${AI_WORKFLOW_PATH}/`) ? path.slice(`${AI_WORKFLOW_PATH}/`.length) : "";
}

function AppInner() {
  const [themeMode, setThemeMode] = useTheme();
  const [page, setPage] = React.useState(getPage);
  useScrollReveal(page);
  useOgMeta();

  React.useEffect(() => {
    const onPopState = () => setPage(getPage());
    const onHashChange = () => setPage(getPage());
    window.addEventListener("popstate", onPopState);
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("popstate", onPopState);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  React.useEffect(() => {
    if (page !== "home") return;
    const path = window.location.pathname.replace(/\/+$/, "") || "/";
    const id = window.location.hash.slice(1) || ROUTE_SECTION_MAP[path];
    if (!id) return;
    window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView();
    });
  }, [page]);

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <Navbar themeMode={themeMode} onThemeChange={setThemeMode} />
      <main id="main">
        {page === "ai" ? (
          <AIPage />
        ) : page === "medtech" ? (
          <MedTechPage />
        ) : page === "fullstack" ? (
          <FullStackPage />
        ) : page === "about" ? (
          <AboutPage />
        ) : page === "contact" ? (
          <ContactPage />
        ) : page === "or-integration-proof" ? (
          <ORIntegrationProofPage />
        ) : page === "ai-workflow" ? (
          <AIWorkflowLibrary />
        ) : page === "ai-workflow-detail" ? (
          <AIWorkflowDetailPage slug={getWorkflowSlug()} />
        ) : page === "clinical-evidence-workflow" ? (
          <ClinicalEvidenceWorkflowPage />
        ) : (
          <HomePage />
        )}
      </main>
      <Footer />
      <BackToTop />
      <Analytics />
    </>
  );
}

function App() {
  return (
    <LangProvider>
      <AppInner />
    </LangProvider>
  );
}

export default App;
