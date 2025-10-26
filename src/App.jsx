import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import TimelineSwitch from "./components/TimelineSwitch.jsx";
import Skills from "./components/Skills.jsx"
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";

 function App() {
   return (
     <>
       <Navbar />
       <main id="main">
         <Hero />
         <About />
         <TimelineSwitch />
         <Skills />
         <Projects />
         <Contact />
       </main>
       <Footer />
       <BackToTop />
     </>
   );
 }

 export default App;
