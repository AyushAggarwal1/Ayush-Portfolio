'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';
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
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link 
              href="/" 
              className="text-xl font-bold text-blue-700 dark:text-blue-300"
            >
              Ayush Aggarwal
            </Link>
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
              Product Manager specializing in innovative solutions
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <motion.a 
              href="https://github.com/AyushAggarwal1" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
              whileHover={{ scale: 1.2, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/ayushaggarwalin" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.2, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="https://twitter.com/yourprofile" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="Twitter"
              whileHover={{ scale: 1.2, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Twitter className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} Ayush Aggarwal. All rights reserved.
          </p>
          
          {/* <div className="mt-4 md:mt-0 flex space-x-6">
            <Link 
              href="/privacy" 
              className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors text-sm"
            >
              Terms of Service
            </Link>
          </div> */}
        </div>
      </div>
    </motion.footer>
  );
} 