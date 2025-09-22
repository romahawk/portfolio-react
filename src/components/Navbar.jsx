import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="nav container">
        <a href="#home" className="nav__logo" onClick={close}>
          ROMAN<span className="nav__logo-accent">.</span>
        </a>

        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={toggle}
        >
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
        </button>

        <ul className={`nav__list ${open ? "nav__list--open" : ""}`}>
          <li className="nav__item">
            <a href="#home" className="nav__link" onClick={close}>Home</a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link" onClick={close}>About</a>
          </li>
          <li className="nav__item"><a href="#timeline" className="nav__link" onClick={close}>Timeline</a></li>
          <li className="nav__item">
            <a href="#skills" className="nav__link" onClick={close}>Skills</a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link nav__cta" onClick={close}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
