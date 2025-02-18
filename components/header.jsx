"use client"; // Required for Next.js App Router (if using `app/` directory)

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="header">
      <div className="container">
        <nav className="nav-list">
          <h1>JayTech</h1> {/* Your name or brand */}
          
          {/* Mobile Menu Toggle */}
          <ul id="sidemenu" className={menuOpen ? "open" : ""}>
            <li><a href="#header">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            <i className="fas fa-times close-icon" onClick={() => setMenuOpen(false)}></i>
          </ul>

          {/* Menu Button */}
          <i className="fas fa-bars menu-icon" onClick={() => setMenuOpen(true)}></i>
        </nav>

        {/* Hero Section */}
        <div className="header-text">
          <p>Frontend Developer</p>
          <h1>
            Hi, I'm <span>Jeremiah</span>
            <br />I am a Web Developer.
          </h1>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="mouse-scroll">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="mouse-arrow">
          <span></span>
        </div>
      </div>
    </header>
  );
}
