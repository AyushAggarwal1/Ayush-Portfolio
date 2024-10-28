import React from 'react';
import '../customCss/Experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaBriefcase } from 'react-icons/fa'; // Importing icons
import Resume from '../../src/assets/Ayush_Aggarwal_Resume.pdf';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
  return (
    <section id="experience">
      <h2 className='underline'> 
        <FaBriefcase /> Experience
      </h2>
      <div className="experience-container">
        {/* experience 1 */}
        <ExperienceItem
          title="Product Management, AccuKnox"
          location="Remote, US"
          date="Sept 2024 ‑ Present"
          responsibilities={[
            "Created Product Requirement Documents (PRDs) to clearly define product specifications and ensure alignment with business goals.",
            "Designed wireframes and low‑fidelity prototypes to visualize product concepts and user workflows.",
            "Collaborated with cross‑functional teams, including developers, designers, and quality assurance, to ensure timely product delivery and adherence to specifications.",
            "Engaged with clients to gather product requirements, provide updates, and incorporate feedback into the development cycle."
          ]}
          position="left"     // positin of exp card
        />

        {/* experience 2 */}
        <div className="line" />
        <ExperienceItem
          title="Product Quality Eng., I2v Sys"
          location="Gurgaon, Haryana"
          date="June 2023 ‑ Sept 2024"
          responsibilities={[
            "Utilized customer feedback and user analytics to inform product strategy, leading to a 20% increase in user satisfaction scores.",
            "Worked with product and QA teams to define requirements, develop testing strategies, and ensure high‑quality product releases.",
            "Produced stakeholder reports, aligning product messaging with marketing and sales teams, contributing to a 15% increase in sales conversions.",
            "Led daily stand‑up meetings and sprint reviews to ensure team alignment, resulting in a 10% increase in sprint efficiency."
          ]}
          position="right"     // positin of exp card      
        />

        {/* experience 3 */}
        <div className="line" />
        <ExperienceItem
          title="Product Associate Intern, Techvins"
          location="Gurgaon, Haryana"
          date="Feb 2023 ‑ June 2023"
          responsibilities={[
            "Organized daily team briefings and sprint assessments, resulting in a 15% increase in sprint velocity.",
            "Analyzed user data to drive product enhancements, boosting engagement by 25% and retention by 15%.",
            "Implemented SEO strategies on the website, resulting in a significant increase in organic traffic.",
          ]}
          position="left"     // positin of exp card
        />
      </div>


      {/* soical links */}
      <div className="social-links-message">
        <p>
          Interested in my work? Don't forget to explore my 
          <span className="highlight">
            <a href="https://medium.com/@ayushaggarwal1136" className='medium' target="_blank" rel="noopener noreferrer">Medium</a>
          </span>
          and
          <span className="highlight">
            <a href="https://knowing-spoonbill-268.notion.site/Welcome-to-Ayush-s-Notion-World-833e75a9a45b43d0b73971bf5402ff9d" className="notion" target="_blank" rel="noopener noreferrer">Notion</a>
          </span>
          for more insights and updates!
        </p>
      </div>


      {/* beacon link */}
      <p className="freelance-message">
        Want me to work for you? Connect with me on my social channels!
        <a
          href="https://www.beacons.ai/ayushaggarwal"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginLeft: '5px' }}
        ><FontAwesomeIcon icon={faLink} className="contact-icon" /></a>
      </p>


      {/* resume link */}
      <a href={Resume} download="Ayush_Aggarwal_Resume.pdf" class="cv-button">Download CV</a>
    </section>
  );
};

const ExperienceItem = ({ title, location, date, responsibilities, icon, position }) => {
  return (

    <div className={`experience-card ${position}`}>
      <div className="icon">{icon}</div> {/* Icon display */}
      <h3>{title}</h3>
      <p>
        <span>{location}</span> | {date}
      </p>
      <ul className="responsibilities">
        {responsibilities.map((responsibility, index) => (
          <li className="responsibility-item" key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
