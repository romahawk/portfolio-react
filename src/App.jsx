 import React from "react";
 import Navbar from "./components/Navbar.jsx";
 import Hero from "./components/Hero.jsx";
 import About from "./components/About.jsx";
 import TimelineSwitch from "./components/TimelineSwitch.jsx";

 function App() {
   return (
     <>
       <Navbar />
       <main id="main">
         <Hero />
         <About />
         <TimelineSwitch />
       </main>
     </>
   );
 }

 export default App;
