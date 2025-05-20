'use client';

import React, { useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills as allSkillsData } from '@/lib/data'; // Renamed to avoid conflict
import { SkillType } from '@/types'; // Import SkillType
import { ShieldCheck, Users, Code, BarChart, Zap, PenTool, Brain, Star, Info } from 'lucide-react'; // Added Star, Info

// Helper to get category icon
const getCategoryIcon = (categoryName: string): React.ReactElement => {
  switch (categoryName) {
    case 'Product Strategy': return <ShieldCheck className="w-6 h-6" />;
    case 'User Experience': return <Users className="w-6 h-6" />;
    case 'Technical': return <Code className="w-6 h-6" />;
    case 'Data & Analytics': return <BarChart className="w-6 h-6" />;
    case 'Methodology': return <Zap className="w-6 h-6" />;
    case 'Tools': return <PenTool className="w-6 h-6" />;
    default: return <Brain className="w-6 h-6" />;
  }
};

// Group skills by category from the new data structure
const skillGroups = allSkillsData.reduce((acc, skill) => {
  const category = skill.category;
  if (!acc[category]) {
    acc[category] = {
      name: category,
      icon: getCategoryIcon(category),
      skills: [],
    };
  }
  acc[category].skills.push(skill);
  return acc;
}, {} as Record<string, { name: string; icon: React.ReactElement; skills: SkillType[] }>);

const categoryOrder = ['Product Strategy', 'User Experience', 'Technical', 'Data & Analytics', 'Methodology', 'Tools'];
const orderedSkillGroups = categoryOrder.map(categoryName => skillGroups[categoryName]).filter(group => group);

interface SkillBubbleProps {
  skill: SkillType;
  index: number;
  totalSkillsInCategory: number;
}

const SkillBubble: React.FC<SkillBubbleProps> = ({ skill, index, totalSkillsInCategory }) => {
  const angle = (index / totalSkillsInCategory) * 2 * Math.PI; // Distribute skills in a circle
  const radius = totalSkillsInCategory > 4 ? 80 : 60; // Adjust radius based on number of skills
  const delay = index * 0.1;
  
  // Create unique float animation for each bubble
  const floatY = Math.sin(index) * 10;
  const floatDuration = 3 + Math.random() * 2;
  const floatDelay = Math.random() * 2;

  return (
    <motion.div
      className="absolute group/tooltip"
      initial={{ opacity: 0, scale: 0, rotate: -10 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: 0,
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
      }}
      transition={{ 
        type: 'spring', 
        stiffness: 100, 
        damping: 10, 
        delay: 0.5 + delay 
      }}
      whileHover={{
        scale: 1.2, 
        zIndex: 10,
        rotate: [0, -5, 5, -5, 0], 
        transition: { 
          duration: 0.4, 
          ease: "easeInOut",
          rotate: {
            duration: 0.4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror"
          }
        }
      }}
    >
      <motion.span
        className="px-3 py-1.5 rounded-full bg-gradient-to-r from-gray-100 to-white dark:from-gray-700/50 dark:to-gray-800/50 text-gray-800 dark:text-gray-200 text-sm font-medium cursor-default shadow-sm hover:shadow-md transition-shadow"
        animate={{
          y: [0, floatY, 0],
          rotate: [0, 3, 0, -3, 0],
        }}
        transition={{
          y: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: floatDuration,
            ease: "easeInOut",
            delay: floatDelay
          },
          rotate: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: floatDuration * 1.5,
            ease: "easeInOut",
            delay: floatDelay
          }
        }}
      >
        <span className="relative z-10">
          {skill.name}
        </span>
        <motion.span 
          className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full -z-10 opacity-0"
          animate={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      </motion.span>

      {/* Tooltip */} 
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-xs p-2.5 bg-gray-800 dark:bg-gray-900 text-white text-xs rounded-md shadow-lg opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-300 z-20">
        {skill.proficiency && (
          <div className="flex items-center mb-1">
            <Star className="w-3 h-3 mr-1.5 text-yellow-400" /> 
            <span className="font-semibold">{skill.proficiency}</span>
          </div>
        )}
        {skill.description && (
          <div className="flex items-start">
            <Info className="w-3 h-3 mr-1.5 mt-0.5 text-blue-400 flex-shrink-0" />
            <span>{skill.description}</span>
          </div>
        )}
        {!skill.proficiency && !skill.description && (
          <span>More details coming soon.</span>
        )}
        <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-gray-800 dark:bg-gray-900"></div>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const categoryItemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    show: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 80 }
    }
  };

  // New animation for the orbiting container
  const orbitAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 50, 
        damping: 15,
        delay: 0.3
      }
    }
  };

  // New floating particle component for decoration
  const FloatingParticle = ({ size, color, delay, left, top }: { 
    size: number, 
    color: string, 
    delay: number,
    left: string,
    top: string
  }) => (
    <motion.div 
      className="absolute rounded-full opacity-70 pointer-events-none"
      style={{ 
        width: size, 
        height: size, 
        backgroundColor: color,
        left,
        top,
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.7, 0.2, 0.7]
      }}
      transition={{
        y: {
          repeat: Infinity,
          duration: 3 + Math.random() * 2,
          ease: "easeInOut",
          delay
        },
        opacity: {
          repeat: Infinity,
          duration: 3 + Math.random() * 2,
          ease: "easeInOut",
          delay
        }
      }}
    />
  );

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden bg-gray-50 dark:bg-gray-900/60">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 bg-grid bg-gray-50 dark:bg-gray-900/50" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />
      
      {/* Animated background dots */}
      <div className="absolute inset-0 -z-5">
        <div className="absolute top-20 right-20 w-3 h-3 rounded-full bg-secondary-400/30 animate-pulse-slow" style={{ animationDelay: '0s' }} />
        <div className="absolute top-60 left-40 w-2 h-2 rounded-full bg-accent-500/20 animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-40 right-1/4 w-2 h-2 rounded-full bg-blue-600/20 animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-3 h-3 rounded-full bg-secondary-300/30 animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
        
        {/* Additional floating particles */}
        <FloatingParticle size={4} color="rgba(139, 92, 246, 0.3)" delay={0.2} left="10%" top="30%" />
        <FloatingParticle size={6} color="rgba(236, 72, 153, 0.2)" delay={1.3} left="85%" top="25%" />
        <FloatingParticle size={5} color="rgba(59, 130, 246, 0.25)" delay={0.7} left="20%" top="75%" />
        <FloatingParticle size={3} color="rgba(236, 72, 153, 0.2)" delay={2.1} left="75%" top="85%" />
        <FloatingParticle size={7} color="rgba(139, 92, 246, 0.15)" delay={1.5} left="60%" top="15%" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20 text-center"
        >
          <motion.span 
            className="inline-block px-3.5 py-1.5 mb-5 text-sm font-semibold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/40 rounded-full tracking-wide"
            initial={{ opacity: 0, scale: 0, y: -20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
          >
            My Expertise
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-5">
            Skills & Capabilities
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A dynamic showcase of the primary skills and technologies I leverage to build impactful products and solutions.
          </p>
        </motion.div>

        <div ref={ref} className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10" // Increased gap
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            {orderedSkillGroups.map((group, groupIndex) => (
              <motion.div
                key={group.name}
                variants={categoryItemVariants}
                className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 md:p-8 min-h-[280px] flex flex-col items-center justify-center text-center overflow-visible transform-gpu"
                whileHover={{
                  scale: 1.03,
                  y: -5,
                  filter: "brightness(1.05)",
                  boxShadow: "0px 20px 40px -10px rgba(0, 0, 0, 0.15), 0px 10px 20px -10px rgba(0, 0, 0, 0.1)",
                  transition: { type: "spring", stiffness: 300, damping: 15 }
                }}
              >
                {/* Top right decorative element */}
                <motion.div 
                  className="absolute top-3 right-3 w-3 h-3 rounded-full"
                  style={{ 
                    background: groupIndex % 3 === 0 
                      ? "linear-gradient(to right, #3b82f6, #2563eb)" 
                      : groupIndex % 3 === 1 
                        ? "linear-gradient(to right, #8b5cf6, #7c3aed)" 
                        : "linear-gradient(to right, #ec4899, #db2777)",
                  }}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: groupIndex * 0.3
                  }}
                />

                {/* Category Header */}
                <div className="mb-8 relative">
                  <motion.div 
                    className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-teal-100 to-blue-100 dark:from-teal-900/40 dark:to-blue-900/40 text-teal-600 dark:text-teal-400 mb-3 shadow-sm"
                    whileHover={{ 
                      rotate: [0, -5, 5, -5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    {group.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {group.name}
                  </h3>
                  
                  {/* Animated underline */}
                  <motion.div 
                    className="h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-2 mx-auto"
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: "60%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 + groupIndex * 0.2 }}
                  />
                </div>

                {/* Skill Bubbles Orbiting Container */}
                <motion.div 
                  className="relative w-full h-40 flex items-center justify-center"
                  variants={orbitAnimation}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="absolute w-full h-full rounded-full border border-blue-100/20 dark:border-blue-800/20"
                    animate={{ 
                      rotate: 360,
                    }}
                    transition={{ 
                      duration: 40, 
                      repeat: Infinity, 
                      ease: "linear"
                    }}
                  />
                  {group.skills.map((skill, index) => (
                    <SkillBubble 
                      key={skill.name} 
                      skill={skill} 
                      index={index} 
                      totalSkillsInCategory={group.skills.length} 
                    />
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 max-w-2xl mx-auto">
              Continuously learning and adapting to new technologies and methodologies to drive innovation and excellence.
            </p>
            <motion.a 
              href="#contact" 
              className="group relative overflow-hidden inline-flex items-center gap-2.5 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span 
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500 transform translate-x-full transition-transform duration-300 ease-out"
                whileHover={{ translateX: 0 }}
                transition={{ duration: 0.3 }}
              />
              <Brain className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Let's Build Something Great</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 