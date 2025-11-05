import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen((prev) => !prev);

  return (
    <header className="site-header">
      <nav className="nav container">
        {/* logo */}
        <div className="nav__logo">
          <span className="nav__logo-brace">{'{ }'}</span>
          <span className="nav__logo-text">ROMAZ</span>
          <span className="nav__logo-accent"></span>
        </div>

        {/* mobile toggle */}
        <button
          className={`nav__toggle ${isOpen ? "x" : ""}`}
          onClick={toggleNav}
          aria-label="Toggle navigation"
        >
          <span className="nav__toggle-bar"></span>
          <span className="nav__toggle-bar"></span>
          <span className="nav__toggle-bar"></span>
        </button>

        <ul className={`nav__list ${isOpen ? "nav__list--open" : ""}`}>
          <li><a href="#home" className="nav__link" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" className="nav__link" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#timeline" className="nav__link" onClick={() => setIsOpen(false)}>Timeline</a></li>
          <li><a href="#skills" className="nav__link" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#projects" className="nav__link" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#certifications" className="nav__link" onClick={() => setIsOpen(false)}>Certifications</a></li>

          <li>
            <a
              href="#contact"
              className="nav__cta btn--primary"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>

      </nav>
    </header>
  );
}
