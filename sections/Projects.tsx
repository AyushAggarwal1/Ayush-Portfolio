'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';
import { Code, Layers, Search, Image as ImageIcon, ChevronDown, Monitor, Server, Cpu } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const INITIAL_VISIBLE_COUNT = 4;
  const INCREMENT_COUNT = 4;
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const [imageError, setImageError] = useState<Record<string, boolean>>({});
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  // Add a gridKey to force rerender when filters change
  const [gridKey, setGridKey] = useState(0);

  // Group technologies by category
  const techCategories = {
    frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'TailwindCSS'],
    backend: ['Python', 'Fast API', 'Flask', 'PostgreSQL', 'Prisma ORM', 'NextAuth.js', 'Next.js API Routes'],
    other: ['Machine Learning', 'IoT', 'C++', 'Adafruit IO', 'IFTTT', 'Blynk', 'Google Assistant', 'Azure Cloud', 'Chat-GPT API', 'Robotics', 'Bluetooth', 'Wi-Fi', 'Zigbee']
  };

  // Quick filters shown directly
  const quickFilters = ['all', 'Next.js', 'React', 'Python', 'TypeScript'];

  // Enhanced filter change function that directly updates filtered projects
  const handleFilterChange = useCallback((newFilter: string) => {
    // Update active filter
    setActiveFilter(newFilter);
    
    // Immediately update filtered projects
    if (newFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => 
        project.technologies.some(tech => 
          tech.toLowerCase() === newFilter.toLowerCase() ||
          // Handle special case for Machine Learning which might be listed differently
          (newFilter === 'Machine Learning' && 
           (tech.toLowerCase() === 'machine learning' || 
            tech.toLowerCase().includes('machine learning')))
        )
      );
      setFilteredProjects(filtered);
    }
    
    // Force grid to rerender by changing key
    setGridKey(prev => prev + 1);
    
    // Reset visible count immediately
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  }, []);

  // Set initial filtered projects (removed dependency on activeFilter to prevent double filter application)
  useEffect(() => {
    setFilteredProjects(projects);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const loadMore = useCallback(() => {
    // Directly set the new count without relying on previous state
    // This ensures we're always using the most current value
    const newCount = visibleCount + INCREMENT_COUNT;
    console.log('Current visible count:', visibleCount);
    console.log('New visible count:', newCount);
    console.log('Total filtered projects:', filteredProjects.length);
    
    // Make sure we don't exceed the total number of filtered projects
    setVisibleCount(Math.min(newCount, filteredProjects.length));
    
    // Force a re-render of the grid
    setGridKey(prev => prev + 1);
  }, [visibleCount, filteredProjects.length]);

  // Reset visible count when filtered projects change
  useEffect(() => {
    // This ensures the correct number of items are shown after filtering
    setVisibleCount(Math.min(INITIAL_VISIBLE_COUNT, filteredProjects.length));
  }, [filteredProjects]);

  const handleImageError = (projectId: string) => {
    setImageError(prev => ({
      ...prev,
      [projectId]: true
    }));
  };

  const getFilterIcon = (tech: string) => {
    if (tech === 'all') return <Layers className="w-4 h-4" />;
    if (techCategories.frontend.includes(tech)) return <Monitor className="w-4 h-4" />;
    if (techCategories.backend.includes(tech)) return <Server className="w-4 h-4" />;
    return <Cpu className="w-4 h-4" />;
  };

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
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 70 }
    }
  };

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 -right-1/4 w-1/2 h-1/2 bg-blue-50/30 dark:bg-blue-900/10 rounded-full blur-3xl -z-10" />
      <div className="absolute -left-1/4 bottom-0 w-1/2 h-1/2 bg-blue-50/30 dark:bg-blue-900/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full">
            My Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my technical skills and creative problem-solving abilities.
          </p>
          {/* Debug information to help troubleshoot */}
          <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            <span>Total Projects: {projects.length} | </span>
            <span>Filtered: {filteredProjects.length} | </span>
            <span>Visible: {visibleCount}</span>
          </div>
        </motion.div>

        {/* Filters */}
        <div className="mb-12">
          {/* Main filter row with quick filters and dropdown */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
            {quickFilters.map(filter => (
              <motion.button
                key={filter}
                onClick={() => handleFilterChange(filter === 'all' ? 'all' : filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter || (filter === 'all' && activeFilter === 'all')
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-1.5">
                  {filter === 'all' ? <Layers className="w-4 h-4" /> : <Code className="w-4 h-4" />}
                  {filter === 'all' ? 'All Projects' : filter}
                </span>
              </motion.button>
            ))}
            
            {/* More filters dropdown */}
            <div className="relative" ref={filterRef}>
              <motion.button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-1.5">
                  <Code className="w-4 h-4" />
                  More Filters
                  <ChevronDown className={`w-4 h-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
                </span>
              </motion.button>
              
              <AnimatePresence>
                {isFilterOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute z-20 mt-2 w-64 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg right-0"
                  >
                    <div className="space-y-4">
                      {/* Frontend Technologies */}
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 flex items-center">
                          <Monitor className="w-4 h-4 mr-1.5" /> Frontend
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {techCategories.frontend.map(tech => (
                            <button
                              key={tech}
                              onClick={() => {
                                handleFilterChange(tech);
                                setIsFilterOpen(false);
                              }}
                              className={`px-2 py-1 text-xs rounded-full transition-colors ${
                                activeFilter === tech
                                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                              }`}
                            >
                              {tech}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      {/* Backend Technologies */}
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 flex items-center">
                          <Server className="w-4 h-4 mr-1.5" /> Backend
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {techCategories.backend.map(tech => (
                            <button
                              key={tech}
                              onClick={() => {
                                handleFilterChange(tech);
                                setIsFilterOpen(false);
                              }}
                              className={`px-2 py-1 text-xs rounded-full transition-colors ${
                                activeFilter === tech
                                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                              }`}
                            >
                              {tech}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      {/* Other Technologies */}
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 flex items-center">
                          <Cpu className="w-4 h-4 mr-1.5" /> Other
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {techCategories.other.map(tech => (
                            <button
                              key={tech}
                              onClick={() => {
                                handleFilterChange(tech);
                                setIsFilterOpen(false);
                              }}
                              className={`px-2 py-1 text-xs rounded-full transition-colors ${
                                activeFilter === tech
                                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                              }`}
                            >
                              {tech}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          
          {/* Active filter indicator */}
          {activeFilter !== 'all' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center items-center"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                <span>Filtering by:</span>
                <div className="flex items-center gap-1 font-medium">
                  {getFilterIcon(activeFilter)}
                  {activeFilter}
                </div>
                <button 
                  onClick={() => handleFilterChange('all')}
                  className="ml-1 p-0.5 rounded-full hover:bg-blue-100 dark:hover:bg-blue-800/30"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </motion.div>
          )}
        </div>

        {/* No projects found message */}
        {filteredProjects.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Search className="w-12 h-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">No projects found</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try selecting a different technology filter.
            </p>
          </motion.div>
        )}

        {/* Projects Grid */}
        <motion.div 
          key={gridKey} // Force grid to rerender when this key changes
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.slice(0, visibleCount).map((project, index) => (
              <motion.div
                layout
                key={project.id}
                variants={item}
                className="group flex flex-col h-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  {imageError[project.id] ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                      <div className="text-center">
                        <ImageIcon className="w-12 h-12 mx-auto text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500">{project.title}</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-500 group-hover:scale-110"
                        onError={() => handleImageError(project.id)}
                      />
                      {/* Image overlay effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Project title on image that appears on hover */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-bold text-white drop-shadow-lg">
                          {project.title}
                        </h3>
                      </div>
                    </>
                  )}
                </div>
                
                {/* Project Content */}
                <div className="flex flex-col flex-grow p-6">
                  {/* Title - visible on mobile/desktop when not hovering */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors md:group-hover:opacity-0 md:group-hover:h-0 md:group-hover:mb-0 md:group-hover:overflow-hidden">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="mt-auto mb-4">
                    <h4 className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 font-medium">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <button
                          key={tech}
                          onClick={() => handleFilterChange(tech)}
                          className={`text-xs px-2 py-1 rounded-full transition-colors ${
                            techIndex < 4
                              ? 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                              : 'hidden'
                          }`}
                        >
                          {tech}
                        </button>
                      ))}
                      {project.technologies.length > 4 && (
                        <div className="relative group/tooltip">
                          <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 cursor-default">
                            +{project.technologies.length - 4}
                          </span>
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 bg-white dark:bg-gray-800 rounded shadow-lg text-sm w-max max-w-[200px] opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-300 z-10">
                            <div className="flex flex-wrap gap-1">
                              {project.technologies.slice(4).map(tech => (
                                <button
                                  key={tech}
                                  onClick={() => handleFilterChange(tech)}
                                  className="text-xs px-1.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                                >
                                  {tech}
                                </button>
                              ))}
                            </div>
                            <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-white dark:bg-gray-800"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 mt-auto pt-2 border-t border-gray-100 dark:border-gray-700">
                    {project.links.map(link => (
                      <Link
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1.5 text-sm transition-all duration-300 ${
                          link.isPrimary
                            ? 'relative overflow-hidden bg-blue-600 text-white px-3 py-1.5 rounded-md group/btn flex-1 justify-center'
                            : 'text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300'
                        }`}
                      >
                        {link.isPrimary && (
                          <span className="absolute inset-0 w-full h-full bg-blue-700 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 ease-out" />
                        )}
                        <link.icon className={`w-4 h-4 ${link.isPrimary ? 'relative z-10' : ''}`} />
                        <span className={`${link.isPrimary ? 'relative z-10' : ''} ${!link.isPrimary ? 'hidden sm:inline' : ''}`}>
                          {link.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Load More Button */}
        {filteredProjects.length > visibleCount && (
          <motion.div 
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              onClick={loadMore}
              className="group relative overflow-hidden bg-transparent border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-md font-medium"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 w-0 bg-blue-600 dark:bg-blue-500 transition-all duration-300 ease-out group-hover:w-full"></span>
              <span className="relative group-hover:text-white transition-colors duration-300">
                Load More Projects 
                <span className="ml-1">({filteredProjects.length - visibleCount} remaining)</span>
              </span>
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
} 