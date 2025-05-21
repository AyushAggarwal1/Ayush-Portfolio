'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowDown, Briefcase } from 'lucide-react';
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

// Fix for motion() deprecation warning - use motion.create() instead
const MotionLink = motion.create(Link);

export default function Hero() {
  const [init, setInit] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    // Check for dark mode preference
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkTheme(prefersDark);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setIsDarkTheme(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    console.log("Attempting to initialize particles engine...");
    // Immediately invoke to avoid any potential race conditions
    (async () => {
      try {
        await initParticlesEngine(async (engine) => {
          await loadSlim(engine);
          console.log("Particles engine initialized successfully.");
        });
        setInit(true);
        console.log("Particles init set to true.");
      } catch (error) {
        console.error("Error initializing particles engine:", error);
      }
    })();

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Particles loaded, container:", container);
    // Make sure container is visible after loading
    if (container?.canvas?.element) {
      const canvas = container.canvas.element as HTMLCanvasElement;
      canvas.style.position = 'absolute';
      canvas.style.zIndex = '1';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.pointerEvents = 'none';
    }
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: false
      },
      fpsLimit: 60,
      particles: {
        color: {
          value: [
            isDarkTheme ? "#3b82f6" : "#3b82f6", // blue
            isDarkTheme ? "#8b5cf6" : "#8b5cf6", // purple
            isDarkTheme ? "#ec4899" : "#ec4899", // pink
          ],
        },
        links: {
          color: isDarkTheme ? "random" : "random",
          distance: 150,
          enable: true,
          opacity: 0.5, // Increased from 0.3
          width: 1.5, // Increased from 1
          triangles: {
            enable: true,
            opacity: 0.1 // Doubled from 0.05
          }
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1.5, // Increased from 1
          straight: false,
          trail: {
            enable: true,
            length: 4, // Increased from 3
            fillColor: isDarkTheme ? "#111827" : "#ffffff",
          },
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200,
          },
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 100, // Increased from 70
        },
        opacity: {
          value: { min: 0.4, max: 0.8 }, // Increased from 0.3-0.7
          animation: {
            enable: true,
            speed: 0.5,
            minimumValue: 0.2, // Increased from 0.1
            sync: false
          }
        },
        shape: {
          type: ["circle", "triangle", "polygon"],
          options: {
            polygon: {
              sides: 6
            }
          }
        },
        size: {
          value: { min: 1.5, max: 6 }, // Increased from 1-5
          animation: {
            enable: true,
            speed: 2,
            minimumValue: 0.5,
            sync: false
          }
        },
        twinkle: {
          lines: {
            enable: true,
            frequency: 0.1, // Increased from 0.05
            opacity: 0.7, // Increased from 0.5
            color: {
              value: isDarkTheme ? "#a855f7" : "#a855f7" // purple
            }
          },
          particles: {
            enable: true,
            frequency: 0.1, // Increased from 0.05
            opacity: 0.7, // Increased from 0.5
            color: {
              value: isDarkTheme ? "#ec4899" : "#ec4899" // pink
            }
          }
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
            parallax: { 
              enable: true, 
              force: 30, // Increased from 20
              smooth: 15 // Increased from 10
            }
          },
          resize: {
            enable: true,
            delay: 0.5,
          },
        },
        modes: {
          push: {
            quantity: 7, // Increased from 5
            groups: ["polygon"]
          },
          repulse: {
            distance: 150,
            duration: 0.4,
          },
          bubble: {
            distance: 200,
            size: 7,
            duration: 2,
            opacity: 1,
            speed: 3
          },
          connect: {
            distance: 80,
            links: {
              opacity: 0.3
            },
            radius: 60
          },
          grab: {
            distance: 200,
            links: {
              opacity: 0.3
            }
          }
        },
      },
      detectRetina: true,
    }),
    [isDarkTheme],
  );

  const initialsVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.4, // Staggered delay for each letter
        duration: 0.8,
      },
    }),
  };
  
  const aaContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4, // Delay between each letter's animation
        delayChildren: 1.0, // Initial delay before starting the 'AA' animation after page load (0.7 from parent + 0.3 from h1)
      },
    },
  };


  if (!init) {
    return null;
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white dark:bg-gray-900">
      {/* Particle background with fixed z-index to ensure visibility */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        {init && (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
            className="absolute inset-0"
          />
        )}
      </div>
      
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 dark:bg-blue-900/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200/20 dark:bg-purple-800/30 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 relative" style={{ zIndex: 10 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-4 py-1 mb-6 rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-pink-900/30 border border-blue-200 dark:border-blue-700"
            >
              <span className="text-gradient-text font-medium">
                Product Manager
              </span>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="block">Hi, I'm</span>
              <motion.span 
                className="gradient-text"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{
                  duration: 4, // Slower animation for a subtle effect
                  ease: "linear",
                  repeat: Infinity,
                }}
                style={{ backgroundSize: "200% 200%" }} // Make background larger to allow movement
              >
                Ayush Aggarwal
              </motion.span>
            </motion.h1>
            <motion.h2 
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Specializing in building innovative and user-centered solutions
            </motion.h2>
            <motion.p 
              className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              I blend product strategy, user research, and technical expertise to drive 
              product innovation and deliver exceptional user experiences that solve real 
              business challenges.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                href="/#projects"
                className="btn-primary group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                  <span className="font-medium">View My Work</span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 translate-y-full transition-transform duration-300 group-hover:translate-y-0 z-0"></span>
              </Link>
              <motion.button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="btn-outline group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="flex items-center gap-2">
                  Contact Me
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5 group-hover:scale-110">→</span>
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="hidden md:flex justify-end"
          >
            <div className="relative">
              <motion.div 
                className="relative w-80 h-80 rounded-full bg-gradient-to-br from-blue-100 to-blue-300 dark:from-blue-900/30 dark:to-blue-700/30 overflow-hidden shadow-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute inset-5 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                  {/* Profile image or avatar can be placed here */}
                  <motion.div 
                    className="text-9xl font-bold text-blue-600/20 dark:text-blue-400/20 flex"
                    variants={aaContainerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.span variants={initialsVariants} custom={0}>A</motion.span>
                    <motion.span variants={initialsVariants} custom={1}>A</motion.span>
                  </motion.div>
                </div>
                
                {/* Decorative elements */}
                <motion.div 
                  className="absolute -right-2 top-1/4 w-4 h-4 rounded-full bg-blue-500"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute left-0 bottom-1/3 w-3 h-3 rounded-full bg-blue-400"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, delay: 0.3, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute left-1/3 bottom-0 w-5 h-5 rounded-full bg-blue-600"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, delay: 0.6, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </motion.div>
      </motion.div>
    </section>
  );
} 