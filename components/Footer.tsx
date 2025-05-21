'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { SiNotion, SiMedium } from 'react-icons/si';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer 
      className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Left Column: About */}
          <div>
            <Link 
              href="/" 
              className="text-2xl font-bold text-blue-700 dark:text-blue-300"
            >
              Ayush Aggarwal
            </Link>
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
              Product Manager specializing in innovative solutions
            </p>
            <motion.a
              href="https://drive.google.com/file/d/1t6FbgrqEdGy6Nc5lOfHMpaxHR0NHV2Yv/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white rounded-lg transition-colors mt-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </motion.a>
          </div>

          {/* Right Column: Connect */}
          <div className="flex flex-col items-end">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Connect</h3>
            <div className="flex items-center space-x-6">
              <motion.a 
                href="https://github.com/AyushAggarwal1" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                whileHover={{ y: -2 }}
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/ayushaggarwalin" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                whileHover={{ y: -2 }}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a 
                href="https://knowing-spoonbill-268.notion.site/Welcome-to-Ayush-s-Notion-World-833e75a9a45b43d0b73971bf5402ff9d" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                whileHover={{ y: -2 }}
                aria-label="Notion"
              >
                <SiNotion className="w-6 h-6" />
              </motion.a>
              <motion.a 
                href="https://medium.com/@ayushaggarwal1136" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                whileHover={{ y: -2 }}
                aria-label="Medium"
              >
                <SiMedium className="w-6 h-6" />
              </motion.a>
              <motion.a 
                href="mailto:ayushaggarwal1136@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                whileHover={{ y: -2 }}
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-100 dark:border-gray-800 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} Ayush Aggarwal. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}