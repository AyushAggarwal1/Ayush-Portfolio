import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faMedium, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import NotionIcon from '../../src/assets/notion_svg.svg';

import '../customCss/SocialMediaLinks.css'; // Create a CSS file for styles

const SocialMediaLinks = () => {
    return (
        <div className="social-media-links">
            <a href="mailto:ayushaggarwal1136@gmail.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} /> {/* Gmail icon */}
            </a>
            <a href="https://github.com/AyushAggarwal1" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/ayushaggarwalin" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://medium.com/@ayushaggarwal1136" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faMedium} />
            </a>
            <a href="https://knowing-spoonbill-268.notion.site/Welcome-to-Ayush-s-Notion-World-833e75a9a45b43d0b73971bf5402ff9d" target="_blank" rel="noopener noreferrer">
                <img src={NotionIcon} alt="Notion" style={{ width: '24px', height: '24px' }} />
            </a>
            <a href="https://hub.docker.com/u/ayush1136" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faDocker} />
            </a>
        </div>
    );
};

export default SocialMediaLinks;
