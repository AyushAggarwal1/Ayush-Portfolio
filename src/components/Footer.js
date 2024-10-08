import React from 'react';
import '../customCss/Footer.css'; // Optional: Import your custom CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Build with <span style={{ textDecoration: 'line-through', margin: '0 5px' }}>❤️</span> Code by Ayush
      </p>
    </footer>
  );
};

export default Footer;
