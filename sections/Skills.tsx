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
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;
  const delay = index * 0.1;

  return (
    <motion.div
      className="absolute group/tooltip"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: x + 'px', // Adding 'px' unit
        y: y + 'px', // Adding 'px' unit
      }}
      transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.5 + delay }}
      whileHover={{ scale: 1.15, zIndex: 10 }}
    >
      <span
        className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-700/50 text-gray-800 dark:text-gray-200 text-sm font-medium cursor-default shadow-sm hover:shadow-md transition-shadow"
      >
        {skill.name}
      </span>
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
        staggerChildren: 0.2, // Increased stagger for categories
      }
    }
  };

  const categoryItemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 80 }
    }
  };

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden bg-gray-50 dark:bg-gray-900/60">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 bg-gray-50 dark:bg-gray-900/50" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
      
      {/* Animated background dots */}
      <div className="absolute inset-0 -z-5">
        <div className="absolute top-20 right-20 w-3 h-3 rounded-full bg-primary-400/30 animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute top-60 left-40 w-2 h-2 rounded-full bg-primary-500/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-40 right-1/4 w-2 h-2 rounded-full bg-primary-600/20 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-3 h-3 rounded-full bg-primary-300/30 animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20 text-center"
        >
          <span className="inline-block px-3.5 py-1.5 mb-5 text-sm font-semibold text-teal-600 dark:text-teal-400 bg-teal-100 dark:bg-teal-900/40 rounded-full tracking-wide">
            My Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5">
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
            {orderedSkillGroups.map((group) => (
              <motion.div
                key={group.name}
                variants={categoryItemVariants}
                className="relative bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 md:p-8 min-h-[280px] flex flex-col items-center justify-center text-center overflow-visible" // Added overflow-visible for tooltips
              >
                {/* Category Header */}
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center p-3 rounded-full bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 mb-3 shadow-sm">
                    {group.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {group.name}
                  </h3>
                </div>

                {/* Skill Bubbles Orbiting Container */}
                <div className="relative w-full h-40 flex items-center justify-center"> {/* Increased height for orbit */}
                  {group.skills.map((skill, index) => (
                    <SkillBubble 
                      key={skill.name} 
                      skill={skill} 
                      index={index} 
                      totalSkillsInCategory={group.skills.length} 
                    />
                  ))}
                </div>
                
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.5 }} // Delay based on category animations
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 max-w-2xl mx-auto">
              Continuously learning and adapting to new technologies and methodologies to drive innovation and excellence.
            </p>
            <motion.a 
              href="#contact" 
              className="inline-flex items-center gap-2.5 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              whileTap={{ scale: 0.98 }}
            >
              <Brain className="w-5 h-5" />
              <span>Let's Build Something Great</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 