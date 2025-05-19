import ProjectCard, { Project } from './ProjectCard';
import { Github, ExternalLink, FileText, Video, Presentation as PresentationIcon } from 'lucide-react'; // Removed unused Server import
import ScrollAnimationWrapper from './ScrollAnimationWrapper'; // Import the wrapper

const ayushProjectsData: Project[] = [
  {
    id: 'gst-bill-maker',
    title: "GST Bill Maker",
    description: "A comprehensive GST billing application with features like secure authentication, customer and item management, automatic tax calculations, bill generation (print/download), date filtering, and business profile management.",
    technologies: ["Next.js 14", "React 18", "TailwindCSS", "Next.js API Routes", "PostgreSQL", "Prisma ORM", "NextAuth.js", "TypeScript"],
    imageUrl: '/project_images/gst_bill.png',
    links: [
      { url: "https://github.com/AyushAggarwal1/gst-bill", label: "GitHub", icon: Github }, // Replace # with actual GitHub link
      { url: "https://gstbillmaker.netlify.app/", label: "Live Demo", icon: ExternalLink, isPrimary: true } // Replace # with actual live demo link
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
    imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGV0JTIwZmVlZGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60', // Pet feeder related image
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
      // { url: "", label: "View Report", icon: FileText }, // reportLink was empty
      { url: "https://docs.google.com/presentation/d/1nel50Y0bSEb_su43nVEIIawPf65dgPvh/edit#slide=id.p1", label: "Presentation", icon: PresentationIcon }
    ]
  },
  {
    id: 'music-player',
    title: "Music Player",
    description: "A web-based music player application developed using fundamental web technologies: HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60', // Music related image
    links: [
      { url: "https://github.com/AyushAggarwal1/Coding-Ninjas-Music-Player", label: "GitHub", icon: Github },
      { url: "https://ayushmusicplayer.netlify.app/", label: "Hosted on Netlify", icon: ExternalLink, isPrimary: true },
    ]
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-28 bg-[hsl(var(--color-bg-card))]">
      <div className="container mx-auto px-6 md:px-8">
        <h2 
          className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 md:mb-20 text-[hsl(var(--color-text-heading))] tracking-tight"
        >
          Featured Projects
        </h2>
        {ayushProjectsData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {ayushProjectsData.map((project, index) => (
              <ScrollAnimationWrapper key={project.id} delay={`${index * 100}ms`}>
                <ProjectCard project={project} />
              </ScrollAnimationWrapper>
            ))}
          </div>
        ) : (
          <div className="text-center text-[hsl(var(--color-text-muted))] max-w-xl mx-auto">
            <p className="mb-4 text-lg leading-relaxed">More projects coming soon. Stay tuned!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection; 