import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faMedium, faDocker } from '@fortawesome/free-brands-svg-icons';
import NotionIcon from '../../src/assets/notion_svg.svg';

import '../customCss/SocialMediaLinks.css'; // Create a CSS file for styles

const SocialMediaLinks = () => {
    return (
        <div className="social-media-links">
            <a href="https://github.com/AyushAggarwal1" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/ayushaggarwalin" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://medium.com/@ayushaggarwal1136" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faMedium} />
            </a>
            <a href={NotionIcon} target="_blank" rel="noopener noreferrer">
                <img src={NotionIcon} alt="Notion" style={{ width: '24px', height: '24px' }} />
            </a>
            <a href="https://hub.docker.com/u/ayush1136" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faDocker} />
            </a>
        </div>
    );
};

export default SocialMediaLinks;
