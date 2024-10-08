import React from 'react';
import '../customCss/About.css'; // Importing the CSS file for styling

const About = () => {
  return (
    <section id="about" className="about-section">
      <p className="intro-line  fade-in"> I’m Ayush Aggarwal, dedicated to continuous learning and exploration, enthusiastic learner with a passion for discovering new ideas and experiences.</p>
      <h2 className="about-title">About Me</h2>
      <p className="about-description">
        I am a dedicated Product Manager and problem solver with expertise in crafting Product Requirement Documents (PRDs) and designing user-centric wireframes to deliver exceptional product experiences. My passion for cross-functional collaboration drives successful project outcomes, while my focus on user feedback and analytics enhances product strategies. I thrive in fast-paced environments, ensuring timely delivery and high-quality releases that boost user satisfaction and sales conversions. With a solid foundation in SEO, I align product goals with business objectives to contribute to measurable growth.
      </p>
    </section>
  );
};

export default About;
