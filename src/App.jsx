import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { LangProvider } from "./context/LangContext.jsx";
import { useScrollReveal } from "./hooks/useScrollReveal.js";
import { useOgMeta } from "./hooks/useOgMeta.js";
import { useTheme } from "./hooks/useTheme.js";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Results from "./components/Results.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import AIAugmentedSDLC from "./components/AIAugmentedSDLC.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";
import ServicesPage from "./components/ServicesPage.jsx";

function getPage() {
  if (typeof window === "undefined") return "home";
  return window.location.pathname.replace(/\/+$/, "") === "/services" ? "services" : "home";
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
    if (page !== "home" || !window.location.hash) return;
    const id = window.location.hash.slice(1);
    window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView();
    });
  }, [page]);

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <Navbar themeMode={themeMode} onThemeChange={setThemeMode} />
      <main id="main">
        {page === "services" ? (
          <ServicesPage />
        ) : (
          <>
            <Hero />
            <Results />
            <Projects />
            <Skills />
            <AIAugmentedSDLC />
            <About />
            <Contact />
          </>
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
