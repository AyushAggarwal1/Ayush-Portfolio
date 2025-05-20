import { ExperienceType, ProjectType, SkillType } from "@/types";
import { 
  Github, 
  ExternalLink, 
  FileText, 
  Video, 
  Presentation as PresentationIcon 
} from "lucide-react";

export const experiences: ExperienceType[] = [
  {
    role: "Associate Product Manager",
    company: "AccuKnox",
    companyUrl: "https://accuknox.com",
    dates: "Sep 2024 - Present",
    location: "Menlo Park, CA (Remote)",
    description: [
      "Continuing to drive product innovation and growth in cloud-native security, focusing on strategic roadmap development and market expansion.",
      "Owned end-to-end product development lifecycle: PRDs, wireframes, UX flows, and feature ideation.",
      "Led cross-functional teams (engineering, design, QA) to deliver high-quality product releases on schedule.",
      "Pioneered and implemented end-to-end 5G security vulnerability scanning, enhancing cloud-native security offerings.",
      "Integrated Semgrep, JIRA, and various security tools into the SaaS platform, streamlining security workflows.",
      "Authored comprehensive documentation and onboarding resources, resulting in smoother user adoption.",
      "Improved user retention by 15% through targeted UX enhancements and data-driven iterative design.",
    ],
    skills: "Product Strategy, Agile Methodologies, UX/UI Design Principles, Market Research, Competitive Analysis, Roadmapping, Jira, Git, Cross-functional Collaboration",
    type: "Full-time",
    logoUrl: "/company_logo/accuknox_logo.jpg"
  },
  {
    role: "Product Quality Engineer",
    company: "i2V Systems",
    companyUrl: "https://i2vsys.com",
    dates: "Jul 2023 - Sep 2024 (1 yr 3 mos)",
    location: "Gurugram, Haryana, India",
    description: [
      "Enhanced product strategy using user analytics, leading to a 20% increase in customer satisfaction.",
      "Refined QA and testing workflows, reducing defects by 25% and improving sprint efficiency.",
      "Aligned product messaging with marketing & sales, driving a 15% increase in conversions.",
      "Collaborated with engineering & product teams to improve software quality and performance.",
    ],
    skills: "User Analytics, QA Methodologies, Product Messaging, Software Quality Assurance, Cross-functional Teamwork",
    type: "Full-time",
    logoUrl: "/company_logo/i2v_logo.png"
  },
  {
    role: "Product Associate",
    company: "Techvins Software",
    companyUrl: "https://techvins.com",
    dates: "Feb 2023 - Jul 2023 (6 mos)",
    location: "Gurugram, Haryana, India",
    description: [
      "Optimized Agile execution, increasing sprint velocity by 15% and improving decision-making efficiency.",
      "Conducted data-driven user research, leading to a 25% boost in engagement and 15% higher retention.",
      "Implemented SEO strategies, enhancing organic traffic growth and search engine visibility.",
    ],
    skills: "Agile Execution, User Research, SEO Strategies, Sprint Velocity Optimization, User Engagement",
    type: "Internship",
    logoUrl: "/company_logo/techvins_logo.jpeg"
  },
];

export const projects: ProjectType[] = [
  {
    id: 'gst-bill-maker',
    title: "GST Bill Maker",
    description: "A comprehensive GST billing application with features like secure authentication, customer and item management, automatic tax calculations, bill generation (print/download), date filtering, and business profile management.",
    technologies: ["Next.js 14", "React 18", "TailwindCSS", "Next.js API Routes", "PostgreSQL", "Prisma ORM", "NextAuth.js", "TypeScript"],
    imageUrl: '/project_images/gst_bill.png',
    links: [
      { url: "https://github.com/AyushAggarwal1/gst-bill", label: "GitHub", icon: Github },
      { url: "https://gstbillmaker.netlify.app/", label: "Live Demo", icon: ExternalLink, isPrimary: true }
    ]
  },
  {
    id: 'ed-chatbot',
    title: "Ed-Chat-bot",
    description: "This FastAPI-based chatbot, hosted on Azure and powered by OpenAI's GPT-3.5-turbo, assists with lead management, offers multilingual support (English, Spanish, and Russian).",
    technologies: ["Python", "Chat-GPT API", "Fast API", "Azure Cloud", "Flask"],
    imageUrl: '/project_images/ed_chatbot.png',
    links: [
      { url: "https://github.com/AyushAggarwal1/ed-chatbot", label: "GitHub", icon: Github },
      { url: "https://ed-chatbot-ekbfcvcae3epdrgr.canadacentral-01.azurewebsites.net/", label: "Hosted on Azure", icon: ExternalLink, isPrimary: true },
    ]
  },
  {
    id: 'resume-selector',
    title: "Resume Selector",
    description: "Resume-Selector is a machine learning project designed to analyze and classify resumes based on industry sectors. Using a dataset from Kaggle, this project employs various preprocessing techniques and machine learning algorithms to streamline the hiring process.",
    technologies: ["Python", "Numpy", "Pandas", "NLTK", "Scikit-learn", "Machine Learning"],
    imageUrl: '/project_images/resume_selector.png',
    links: [
      { url: "https://github.com/AyushAggarwal1/Resume-Selector", label: "GitHub", icon: Github },
      { url: "https://drive.google.com/file/d/169JzoSc4Id69lrsHUVpS9xb9gdKA9QpK/view", label: "View Research Paper", icon: FileText, isPrimary: true },
    ]
  },
  {
    id: 'iot-pet-feeder',
    title: "IOT Pet Feeder",
    description: "An IoT-based pet feeding system that automates feeding schedules and allows real-time control and monitoring through Google Assistant and the Blynk app. Integrates with Adafruit IO and IFTTT.",
    technologies: ["C++", "Adafruit IO", "IFTTT", "Blynk", "Google Assistant", "IoT"],
    imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGV0JTIwZmVlZGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    links: [
      { url: "https://github.com/AyushAggarwal1/IOT-Pet-Feeder", label: "GitHub", icon: Github },
      { url: "https://drive.google.com/file/d/1YQSx7Ce3HrE-oSv14NkRqk507tFbdMG3/view?usp=drive_link", label: "Video Demo", icon: Video },
      { url: "https://drive.google.com/file/d/1wrRn5Rdb8Yomw0itOVy_F3EwLN2jgp_U/view?usp=drive_link", label: "View Report", icon: FileText },
      { url: "https://docs.google.com/presentation/d/1J-XlUphvUT-LllO8QMx2eScUTakMgKV1/edit?usp=drive_link&ouid=111599084868524496540&rtpof=true&sd=true", label: "Presentation", icon: PresentationIcon }
    ]
  },
  {
    id: 'surveillance-car',
    title: "Surveillance-Car",
    description: "The Surveillance Robotic Car project utilizes advanced wireless technologies (Wi-Fi, Bluetooth, and Zigbee) to develop robotic vehicles tailored for surveillance applications.",
    technologies: ["C++", "Adafruit Cloud", "Wi-Fi", "Bluetooth", "Zigbee", "Robotics"],
    imageUrl: '/project_images/survillance_car.png',
    links: [
      { url: "https://github.com/AyushAggarwal1/Surveillance-Car", label: "GitHub", icon: Github },
      { url: "https://drive.google.com/file/d/1sCFyiNgm3yF2JxD9ODRPL9pdfuXyIoZp/view?usp=drive_link", label: "Video Demo", icon: Video },
      { url: "https://docs.google.com/presentation/d/1nel50Y0bSEb_su43nVEIIawPf65dgPvh/edit#slide=id.p1", label: "Presentation", icon: PresentationIcon }
    ]
  },
  {
    id: 'music-player',
    title: "Music Player",
    description: "A web-based music player application developed using fundamental web technologies: HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    links: [
      { url: "https://github.com/AyushAggarwal1/Coding-Ninjas-Music-Player", label: "GitHub", icon: Github },
      { url: "https://ayushmusicplayer.netlify.app/", label: "Hosted on Netlify", icon: ExternalLink, isPrimary: true },
    ]
  }
];

export const skills: SkillType[] = [
  // Product Strategy
  { name: "Product Strategy", category: "Product Strategy", proficiency: "Advanced" },
  { name: "Product Roadmapping", category: "Product Strategy", proficiency: "Advanced" },
  { name: "Market Analysis", category: "Product Strategy", proficiency: "Proficient" },
  { name: "Competitor Analysis", category: "Product Strategy", proficiency: "Proficient" },
  { name: "Product Lifecycle Management", category: "Product Strategy", proficiency: "Proficient" },

  // User Experience
  { name: "User Research", category: "User Experience", proficiency: "Advanced" },
  { name: "UX/UI Design", category: "User Experience", proficiency: "Proficient" },
  { name: "Customer Journey Mapping", category: "User Experience", proficiency: "Proficient" },
  { name: "User Stories", category: "User Experience", proficiency: "Advanced" },
  { name: "A/B Testing", category: "User Experience", proficiency: "Intermediate" },

  // Technical
  { name: "Next.js", category: "Technical", proficiency: "Proficient" },
  { name: "React", category: "Technical", proficiency: "Proficient" },
  { name: "TypeScript", category: "Technical", proficiency: "Proficient" },
  { name: "Python", category: "Technical", proficiency: "Intermediate" },
  { name: "SQL", category: "Technical", proficiency: "Intermediate" },
  { name: "Git", category: "Technical", proficiency: "Advanced" },

  // Data & Analytics
  { name: "Data Analysis", category: "Data & Analytics", proficiency: "Proficient" },
  { name: "Product Analytics", category: "Data & Analytics", proficiency: "Proficient" },

  // Methodology
  { name: "Agile Methodologies", category: "Methodology", proficiency: "Advanced" },
  { name: "Cross-functional Leadership", category: "Methodology", proficiency: "Advanced" },
  { name: "Requirements Gathering", category: "Methodology", proficiency: "Advanced" },
  { name: "Feature Prioritization", category: "Methodology", proficiency: "Advanced" },

  // Tools
  { name: "JIRA", category: "Tools", proficiency: "Advanced" },
  { name: "Figma", category: "Tools", proficiency: "Proficient" },
]; 