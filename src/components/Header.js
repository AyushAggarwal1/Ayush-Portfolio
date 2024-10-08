import React, { useState } from 'react';
import '../customCss/Header.css'; // Import your CSS file for styling
import Resume from '../../src/assets/Ayush_Aggarwal_Resume.pdf';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility

  const scrollToTop = () => {
    const topElement = document.getElementById('top');
    if (topElement) {
      topElement.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the top
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle menu visibility
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1 onClick={scrollToTop} style={{ cursor: 'pointer', textAlign: 'center' }}>Ayush Aggarwal</h1>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <div className={`header-right ${isMenuOpen ? 'open' : ''}`}>
        <nav>
          <ul>
            <li><a href="#about" onClick={closeMenu}>About Me</a></li>
            <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact Me</a></li>
            <li><a href={Resume} download="Ayush_Aggarwal_Resume.pdf" onClick={closeMenu}>Download CV</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
