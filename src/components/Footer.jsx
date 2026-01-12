import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer__inner">
        <div className="footer__brand">ROMAZ.</div>
        <nav className="footer__nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#timeline">Timeline</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="footer__copy">© {year} Roman Mazuryk. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
