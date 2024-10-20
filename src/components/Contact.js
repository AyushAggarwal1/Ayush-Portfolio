import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import '../customCss/ContactUs.css'; // Optional: Import your custom CSS file for styling

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      
      <div class="contact-message">
      My inbox is always open! Feel free to reach out with questions, opportunities, or just to say hello. You can also connect with me on social media below.
      </div>

      <div className="contact-details">
        {/* Email Link */}
        <p>
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          <a href="mailto:ayushaggarwal1136@gmail.com">Email Me</a>
        </p>

        {/* Beacon Link */}
        <p>
          <FontAwesomeIcon icon={faLink} className="contact-icon" />
          Reach out to me on social media via my 
          <a 
            href="https://www.beacons.ai/ayushaggarwal" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ marginLeft: '5px' }}
          >
            Beacon profile
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
