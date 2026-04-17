import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { useScrollReveal } from "./hooks/useScrollReveal.js";
import { useOgMeta } from "./hooks/useOgMeta.js";
import { useTheme } from "./hooks/useTheme.js";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import AIAugmentedSDLC from "./components/AIAugmentedSDLC.jsx";
import TimelineSwitch from "./components/TimelineSwitch.jsx";
import Skills from "./components/Skills.jsx"
import Projects from "./components/Projects.jsx";
import Certifications from "./components/Certifications.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";

 function App() {
   const [themeMode, setThemeMode] = useTheme();
   useScrollReveal();
   useOgMeta();
   return (
     <>
       <a href="#main" className="skip-link">Skip to main content</a>
       <Navbar themeMode={themeMode} onThemeChange={setThemeMode} />
       <main id="main">
         <Hero />
         <About />
         <AIAugmentedSDLC />
         <TimelineSwitch />
         <Skills />
         <Projects />
         <Certifications />
         <Contact />
       </main>
       <Footer />
       <BackToTop />
       <Analytics />
     </>
   );
 }

 export default App;
