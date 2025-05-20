'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '@/lib/data';
import { ShieldCheck, Zap, Brain, Code, PenTool, Database, BarChart, Users } from 'lucide-react';

// Group skills by category
const skillGroups = [
  {
    name: "Product Strategy",
    icon: <ShieldCheck className="w-5 h-5" />,
    skills: skills.filter(skill => 
      ["Product Strategy", "Product Roadmapping", "Market Analysis", "Competitor Analysis", "Product Lifecycle Management"].includes(skill)
    )
  },
  {
    name: "User Experience",
    icon: <Users className="w-5 h-5" />,
    skills: skills.filter(skill => 
      ["User Research", "UX/UI Design", "Customer Journey Mapping", "User Stories", "A/B Testing"].includes(skill)
    )
  },
  {
    name: "Technical",
    icon: <Code className="w-5 h-5" />,
    skills: skills.filter(skill => 
      ["Next.js", "React", "TypeScript", "Python", "SQL", "Git"].includes(skill)
    )
  },
  {
    name: "Data & Analytics",
    icon: <BarChart className="w-5 h-5" />,
    skills: skills.filter(skill => 
      ["Data Analysis", "Product Analytics", "A/B Testing"].includes(skill)
    )
  },
  {
    name: "Methodology",
    icon: <Zap className="w-5 h-5" />,
    skills: skills.filter(skill => 
      ["Agile Methodologies", "Cross-functional Leadership", "Requirements Gathering", "Feature Prioritization"].includes(skill)
    )
  },
  {
    name: "Tools",
    icon: <PenTool className="w-5 h-5" />,
    skills: skills.filter(skill => 
      ["JIRA", "Figma"].includes(skill)
    )
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { 
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="skills" className="relative py-20 overflow-hidden">
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
          className="mb-16 text-center"
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 rounded-full">
            Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Capabilities
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive set of skills I've developed throughout my career as a product manager.
          </p>
        </motion.div>

        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            {skillGroups.map((group, groupIndex) => (
              <motion.div
                key={group.name}
                variants={item}
                className="relative bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-bl-3xl" />
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                      {group.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {group.name}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-700/50 text-gray-800 dark:text-gray-200 text-sm font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          delay: 0.6 + (groupIndex * 0.1) + (index * 0.05),
                          type: "spring",
                          stiffness: 100
                        }}
                        whileHover={{ 
                          backgroundColor: "#e0f2fe", 
                          color: "#0284c7",
                          scale: 1.05,
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Always learning and expanding my skillset to solve complex product challenges.
            </p>
            
            <motion.div 
              className="mt-8 inline-block relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="#contact" 
                className="px-8 py-3 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg font-medium flex items-center gap-2 hover:bg-primary-100 dark:hover:bg-primary-800/30 transition-colors"
              >
                <Brain className="w-5 h-5" />
                <span>Let's collaborate</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 