import React from "react";
import { useScrollReveal } from "./hooks/useScrollReveal.js";
import { useOgMeta } from "./hooks/useOgMeta.js";
import { useTheme } from "./hooks/useTheme.js";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";
// The two main pages are small and render the LCP element, so they load eagerly; detail pages stay lazy.
import HomePage from "./components/site/HomePage.jsx";
import ServicesPage from "./components/site/ServicesPage.jsx";

const Analytics = React.lazy(() =>
  import("@vercel/analytics/react").then((module) => ({ default: module.Analytics })),
);
const ORIntegrationProofPage = React.lazy(() => import("./components/ORIntegrationProofPage.jsx"));
const KnowledgeBasePage = React.lazy(() => import("./components/KnowledgeBasePage.jsx"));

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

// Two pages (/ and /services) plus two detail pages. Every other route is redirected in vercel.json.
const SERVICES_PATH = "/services";
const KB_PATH = "/kb";
const OR_INTEGRATION_PROOF_PATH = "/proof-of-work/or-integration";

function getPage() {
  if (typeof window === "undefined") return "home";
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === SERVICES_PATH) return "services";
  if (path === OR_INTEGRATION_PROOF_PATH) return "or-integration-proof";
  if (path === KB_PATH || path.startsWith(`${KB_PATH}/`)) return "kb";
  return "home";
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
    const id = window.location.hash.slice(1);
    if (!id) {
      window.requestAnimationFrame(() => window.scrollTo(0, 0));
      return;
    }
    if (page !== "home") return;
    // The page is lazy-loaded, so wait for the target section to exist before scrolling.
    let tries = 0;
    const scrollToTarget = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView();
        return;
      }
      if (tries++ < 40) window.requestAnimationFrame(scrollToTarget);
    };
    window.requestAnimationFrame(scrollToTarget);
  }, [page]);

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <Navbar themeMode={themeMode} onThemeChange={setThemeMode} />
      <React.Suspense fallback={null}>
        <main id="main">
          {page === "services" ? (
            <ServicesPage />
          ) : page === "or-integration-proof" ? (
            <ORIntegrationProofPage />
          ) : page === "kb" ? (
            <KnowledgeBasePage />
          ) : (
            <HomePage />
          )}
        </main>
        <Footer />
        <BackToTop />
      </React.Suspense>
      <DeferredAnalytics />
    </>
  );
}

function App() {
  return (
    <AppInner />
  );
}

export default App;
