import React, { useState } from 'react';
import '../customCss/Header.css'; // Import your CSS file for styling
import Resume from '../../src/assets/Ayush_Aggarwal_Resume.pdf';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle menu visibility
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the section
    }
    closeMenu(); // Close the menu after selecting an item
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1 onClick={() => scrollToSection('top')} style={{ cursor: 'pointer', textAlign: 'center' }}>Ayush</h1>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <div className={`header-right ${isMenuOpen ? 'open' : ''}`}>
        <nav>
          <ul>
            {/* headers for redirection */}
            <li><a href="#" onClick={() => scrollToSection('about')}>About Me</a></li>
            <li><a href="#" onClick={() => scrollToSection('experience')}>Experience</a></li>
            <li><a href="#" onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a href="#" onClick={() => scrollToSection('contact')}>Contact Me</a></li>
            <li><a href={Resume} download="Ayush_Aggarwal_Resume.pdf">Download CV</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
