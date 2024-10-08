import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../customCss/Projects.css'; // Adjust the path as needed

const projectsData = [
  {
    title: "Resume Selector",
    description: "Resume-Selector is a machine learning project designed to analyze and classify resumes based on industry sectors. Using a dataset from Kaggle, this project employs various preprocessing techniques and machine learning algorithms to streamline the hiring process.",
    tech: "Python, Numpy, Pandas, NLTK for natural language processing, Scikit-learn",
    githubLink: "https://github.com/AyushAggarwal1/Resume-Selector",
    reportLink: "https://drive.google.com/file/d/169JzoSc4Id69lrsHUVpS9xb9gdKA9QpK/view",
    reportLabel: "View Research Paper",  // Label for the report link
    presentationLink: "",  // Presentation link
  },

  {
    title: "IOT Pet Feeder",
    description: "An IoT-based pet feeding system that automates feeding schedules and allows real-time control and monitoring through Google Assistant and the Blynk app. The system also integrates with Adafruit IO and IFTTT for automation and cloud connectivity.",
    tech: "C++, Adafruit IO, IFTTT, Blynk, Google Assistant",
    githubLink: "https://github.com/AyushAggarwal1/IOT-Pet-Feeder",
    videoLink: "https://drive.google.com/file/d/1YQSx7Ce3HrE-oSv14NkRqk507tFbdMG3/view?usp=drive_link",
    reportLink: "https://drive.google.com/file/d/1wrRn5Rdb8Yomw0itOVy_F3EwLN2jgp_U/view?usp=drive_link",
    reportLabel: "View Report",
    presentationLink: "https://docs.google.com/presentation/d/1J-XlUphvUT-LllO8QMx2eScUTakMgKV1/edit?usp=drive_link&ouid=111599084868524496540&rtpof=true&sd=true",
  },
  {
    title: "Surveillance-Car",
    tech: "C++, Adafruit Cloud, Wi-Fi, Bluetooth, Zigbee",
    description: "The Surveillance Robotic Car project utilizes advanced wireless technologies-Wi-Fi, Bluetooth, and Zigbee-to develop robotic vehicles tailored for surveillance applications.",
    githubLink: "https://github.com/AyushAggarwal1/Surveillance-Car",
    videoLink: "https://drive.google.com/file/d/1sCFyiNgm3yF2JxD9ODRPL9pdfuXyIoZp/view?usp=drive_link",
    reportLink: "",
    reportLabel: "View Report",
    presentationLink: "https://docs.google.com/presentation/d/1nel50Y0bSEb_su43nVEIIawPf65dgPvh/edit#slide=id.p1",
  },
  {
    title: "Music Player",
    tech: "HTML, CSS, JavaScript",
    description: "Music player web application using Html and CSS.",
    githubLink: "https://github.com/AyushAggarwal1/Coding-Ninjas-Music-Player",
  },
];


const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className='project-heading'>My Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="tech-used">Technology Used: {project.tech}</p>
            <div className="project-links">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
              {project.videoLink && <a href={project.videoLink} target="_blank" rel="noopener noreferrer">Watch Video</a>}
              {project.reportLink && <a href={project.reportLink} target="_blank" rel="noopener noreferrer">{project.reportLabel}</a>}
              {project.presentationLink && <a href={project.presentationLink} target="_blank" rel="noopener noreferrer">View Presentation</a>}
            </div>
          </div>
        ))}
      </div>

      <div className="more-projects">
        <p>
          <a href="https://github.com/AyushAggarwal1" target="_blank" rel="noopener noreferrer">
            More on <FontAwesomeIcon icon={faGithub} className="github-icon" /> GitHub
          </a>
        </p>

      </div>

    </section>
  );
};

export default Projects;