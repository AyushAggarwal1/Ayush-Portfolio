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
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      console.log("Particles engine initialized.");
    }).then(() => {
      setInit(true);
      console.log("Particles init set to true.");
    }).catch(error => {
      console.error("Error initializing particles engine:", error);
    });

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Particles loaded, container:", container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      // background: {
      //   color: { value: "#transparent" }, // Ensure background is transparent
      // },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse", // repulse on hover
          },
        },
        modes: {
          push: {
            quantity: 3,
          },
          repulse: {
            distance: 150, // Increased distance for repulse
            duration: 0.6,
          },
        },
      },
      particles: {
        color: {
          value: isDarkTheme ? "#A0AEC0" : "#4A5568", // Light gray for dark, darker gray for light
        },
        links: {
          color: isDarkTheme ? "#718096" : "#718096", // Slightly darker gray for links
          distance: 160,
          enable: true,
          opacity: 0.2, // Reduced opacity for subtlety
          width: 1,
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
          random: true, // More random movement
          speed: 0.5,    // Slower speed
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800, // Standard density area
          },
          value: 60, // Slightly more particles
        },
        opacity: {
          value: isDarkTheme ? 0.4 : 0.5, // Slightly more visible
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 4 }, // Slightly larger max size
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
      {/* Animated background elements */}
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="absolute inset-0 -z-0" // Changed z-index to 0 to be behind content but visible
      />
      {/* <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 dark:bg-blue-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-200/20 dark:bg-blue-800/20 rounded-full blur-3xl" />
      </div> */}
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
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
              className="inline-block px-4 py-1 mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700"
            >
              <span className="text-blue-600 dark:text-blue-400 font-medium">
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
                className="relative group overflow-hidden rounded-md bg-blue-600 px-6 py-3 text-white flex items-center gap-2"
              >
                <Briefcase className="w-5 h-5 relative z-10" />
                <span className="relative z-10 font-medium">View My Work</span>
                <span className="absolute inset-0 bg-blue-700 translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
              </Link>
              <Link
                href="/#contact"
                className="group px-6 py-3 rounded-md border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/50 font-medium transition-colors"
              >
                <span className="flex items-center gap-2">
                  Contact Me
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5 group-hover:scale-110">→</span>
                </span>
              </Link>
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