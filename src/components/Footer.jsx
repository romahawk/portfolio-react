import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer__inner">
        <div className="footer__brand">ROMAN.</div>
        <nav className="footer__nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#timeline">Timeline</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Product Systems</a>
          <a href="#contact">Contact</a>
          <a href="https://www.linkedin.com/in/roman-mazuryk/" target="_blank" rel="noreferrer">LinkedIn</a>
        </nav>
        <div className="footer__copy">© {year} Roman Mazuryk. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
