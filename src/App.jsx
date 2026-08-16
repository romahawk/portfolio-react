import React from "react";
import { LangProvider } from "./context/LangContext.jsx";
import { useScrollReveal } from "./hooks/useScrollReveal.js";
import { useOgMeta } from "./hooks/useOgMeta.js";
import { useTheme } from "./hooks/useTheme.js";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";

const Analytics = React.lazy(() =>
  import("@vercel/analytics/react").then((module) => ({ default: module.Analytics })),
);
const HomePage = React.lazy(() =>
  import("./components/MarketPages.jsx").then((module) => ({ default: module.HomePage })),
);
const AIPage = React.lazy(() =>
  import("./components/MarketPages.jsx").then((module) => ({ default: module.AIPage })),
);
const MedTechPage = React.lazy(() =>
  import("./components/MarketPages.jsx").then((module) => ({ default: module.MedTechPage })),
);
const FullStackPage = React.lazy(() =>
  import("./components/MarketPages.jsx").then((module) => ({ default: module.FullStackPage })),
);
const AboutPage = React.lazy(() => import("./components/AboutPage.jsx"));
const ContactPage = React.lazy(() => import("./components/ContactPage.jsx"));
const ORIntegrationProofPage = React.lazy(() => import("./components/ORIntegrationProofPage.jsx"));
const AIWorkflowLibrary = React.lazy(() => import("./components/AIWorkflowLibrary.jsx"));
const AIWorkflowDetailPage = React.lazy(() => import("./components/AIWorkflowDetailPage.jsx"));
const ClinicalEvidenceWorkflowPage = React.lazy(() => import("./components/ClinicalEvidenceWorkflowPage.jsx"));

function DeferredAnalytics() {
  const [enabled, setEnabled] = React.useState(false);

  React.useEffect(() => {
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(() => setEnabled(true), { timeout: 3000 });
      return () => window.cancelIdleCallback(id);
    }

    const id = window.setTimeout(() => setEnabled(true), 3000);
    return () => window.clearTimeout(id);
  }, []);

  if (!enabled) return null;

  return (
    <React.Suspense fallback={null}>
      <Analytics />
    </React.Suspense>
  );
}

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
    if (typeof window === "undefined") return;
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

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
    const path = window.location.pathname.replace(/\/+$/, "") || "/";
    const id = window.location.hash.slice(1) || ROUTE_SECTION_MAP[path];
    if (!id) {
      window.requestAnimationFrame(() => window.scrollTo(0, 0));
      return;
    }
    if (page !== "home") return;
    window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView();
    });
  }, [page]);

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <Navbar themeMode={themeMode} onThemeChange={setThemeMode} />
      <main id="main">
        <React.Suspense fallback={null}>
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
        </React.Suspense>
      </main>
      <Footer />
      <BackToTop />
      <DeferredAnalytics />
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
