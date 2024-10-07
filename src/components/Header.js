import React from 'react';
import '../customCss/Header.css'; // Import your CSS file for styling

const Header = () => {
  const scrollToTop = () => {
    const topElement = document.getElementById('top');
    if (topElement) {
      topElement.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the top
    }
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1 onClick={scrollToTop} style={{ cursor: 'pointer' }}>Ayush Aggarwal</h1>
      </div>
      <div className="header-right">
        <nav>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            {/* <li><a href="#skills">Skills</a></li> */}
            <li><a href="#contact">Contact Me</a></li>
            <li><a href="/path/to/resume.pdf" download>Download Resume</a></li> {/* Update with actual path to your resume */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
