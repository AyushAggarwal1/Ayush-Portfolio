"use client";

import { motion, Variants } from 'framer-motion';
import React from 'react';

interface PageAnimatorProps {
  children: React.ReactNode;
  className?: string;
  type?: 'fadeInOnLoad' | 'fadeInOnScroll';
}

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2 } },
};

export default function PageAnimator({ children, className, type = 'fadeInOnScroll' }: PageAnimatorProps) {
  if (type === 'fadeInOnLoad') {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
} 