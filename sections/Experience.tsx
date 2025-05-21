'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, MapPin, ChevronDown, Briefcase, Calendar, Download } from 'lucide-react';
import Image from 'next/image';
import { experiences } from '@/lib/data';

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check initially
    checkIfMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleExpand = (index: number) => {
    setExpandedId(expandedId === index ? null : index);
  };

  // Add stagger animation for list items
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="experience" className="relative py-20 overflow-hidden">
      {/* Enhanced Background decorations */}
      <div className="absolute inset-0 -z-10 bg-grid bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900/50 dark:via-gray-900/80 dark:to-gray-900/50" />
      <div className="absolute -left-20 top-40 w-72 h-72 bg-gradient-to-br from-blue-200/40 via-purple-200/40 to-pink-200/40 dark:from-blue-800/20 dark:via-purple-800/20 dark:to-pink-800/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -right-20 bottom-40 w-80 h-80 bg-gradient-to-br from-blue-200/40 via-purple-200/40 to-pink-200/40 dark:from-blue-800/20 dark:via-purple-800/20 dark:to-pink-800/20 rounded-full blur-3xl animate-pulse" />
      
      <div className="container relative mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20 text-gradient-primary rounded-full border border-blue-100 dark:border-blue-800/30">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My journey as a product manager and my contributions to various organizations.
          </p>
          <motion.a
            href="https://drive.google.com/file/d/1t6FbgrqEdGy6Nc5lOfHMpaxHR0NHV2Yv/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden inline-flex items-center gap-2 px-6 py-2.5 mt-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span 
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <Download className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Download Resume</span>
          </motion.a>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Timeline line */}
            <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform md:-translate-x-1/2" 
              style={{ top: isMobile ? '8px' : '0' }}
            />
            
            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${index}`}
                variants={item}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:pr-10 md:ml-auto md:mr-1/2' : 'md:pl-10 md:ml-1/2'
                } w-full md:w-auto`}
                style={{ maxWidth: isMobile ? '100%' : 'calc(50% - 20px)' }}
              >
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-0 md:left-1/2 top-2 md:top-0 w-6 h-6 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900 transform md:-translate-x-1/2 z-10"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  onClick={() => toggleExpand(index)}
                />
                
                <motion.div
                  className={`mt-2 md:mt-0 ml-10 md:ml-0 p-4 md:p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 cursor-pointer transition-shadow ${
                    expandedId === index ? 'ring-2 ring-blue-500 dark:ring-blue-400' : 'hover:shadow-lg'
                  }`}
                  onClick={() => toggleExpand(index)}
                  whileHover={expandedId !== index ? { y: -4, scale: 1.02, boxShadow: "0px 10px 20px -5px rgba(0, 0, 0, 0.1)" } : {}}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="flex flex-col gap-3">
                    {/* Company Logo */}
                    {experience.logoUrl && (
                      <div className="flex justify-start mb-2">
                        <motion.div 
                          className="relative w-12 h-12 overflow-hidden rounded-md bg-white shadow-sm"
                          whileHover={{ scale: 1.08, transition: { type: "spring", stiffness: 300 } }}
                        >
                          <Image 
                            src={experience.logoUrl} 
                            alt={`${experience.company} logo`} 
                            fill
                            style={{ objectFit: 'contain' }}
                            className="p-1"
                          />
                        </motion.div>
                      </div>
                    )}
                    
                    <div className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                      <Briefcase className="w-4 h-4" />
                      <span>{experience.type}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {experience.role}
                    </h3>
                    
                    <div className="flex flex-col md:flex-row md:items-center gap-2 text-gray-700 dark:text-gray-300">
                      <div className="flex items-center">
                        <a 
                          href={experience.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 hover-underline"
                        >
                          {experience.company}
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                      <span className="hidden md:inline text-gray-400">•</span>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1 text-gray-500 dark:text-gray-500" />
                        <span className="text-gray-600 dark:text-gray-400 text-sm">
                          {experience.location}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 mt-1">
                      <Calendar className="w-4 h-4" /> 
                      <span>{experience.dates}</span>
                    </div>
                  </div>
                  
                  <AnimatePresence mode="sync">
                    {expandedId === index && (
                      <motion.div
                        key={`exp-details-${index}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700"
                      >
                        <ul className="space-y-3 mb-4 text-gray-600 dark:text-gray-400 text-left">
                          {experience.description.map((item, i) => (
                            <motion.li 
                              key={i} 
                              className="flex items-start"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <span className="mr-2 text-blue-500 dark:text-blue-400 flex-shrink-0">•</span>
                              <span className="text-left">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                        
                        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                            <span className="inline-block w-4 h-4 mr-2 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                              <span className="block w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400"></span>
                            </span>
                            Skills & Tools
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.skills.split(', ').map((skill, i) => (
                              <motion.span
                                key={i}
                                className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {expandedId !== index && (
                    <motion.button
                      className="mt-3 flex items-center gap-1 text-blue-500 dark:text-blue-400 text-sm"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <span>Show details</span>
                      <motion.span
                        animate={{ rotate: expandedId === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.span>
                    </motion.button>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 