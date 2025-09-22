import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        {/* TODO: About, Projects, Contact sections will go here */}
        <section id="about" className="section container">
          <h2>About</h2>
          <p>Placeholder. We’ll port content later.</p>
        </section>

        <section id="projects" className="section container">
          <h2>Projects</h2>
          <p>Placeholder. We’ll add cards & filters later.</p>
        </section>

        <section id="contact" className="section container">
          <h2>Contact</h2>
          <p>Placeholder. We’ll add a form or links later.</p>
        </section>
      </main>
    </>
  );
};

export default App;
