'use client';

import { motion } from 'framer-motion';

type SectionDividerProps = {
  type?: 'wave' | 'angle' | 'curve' | 'triangles';
  flip?: boolean;
  className?: string;
  lightColor?: string;
  darkColor?: string;
  colorScheme?: 'primary' | 'secondary' | 'accent' | 'gradient';
};

export default function SectionDivider({ 
  type = 'wave', 
  flip = false, 
  className = '',
  lightColor = '#f9fafb', // Default light color (gray-50)
  darkColor = '#111827',   // Default dark color (gray-900)
  colorScheme = 'primary'
}: SectionDividerProps) {
  
  // Common classes
  const commonClasses = `absolute left-0 w-full h-16 md:h-24 ${className} ${flip ? 'transform rotate-180' : ''}`;
  
  // Get fill based on color scheme
  const getFill = () => {
    if (colorScheme === 'primary') {
      return 'url(#primaryGradient)';
    } else if (colorScheme === 'secondary') {
      return 'url(#secondaryGradient)';
    } else if (colorScheme === 'accent') {
      return 'url(#accentGradient)';
    } else if (colorScheme === 'gradient') {
      return 'url(#multicolorGradient)';
    }
    return 'currentColor';
  };
  
  // Gradient definitions
  const gradientDefs = (
    <defs>
      <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#2563eb" />
      </linearGradient>
      <linearGradient id="secondaryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
      <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#db2777" />
      </linearGradient>
      <linearGradient id="multicolorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="50%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
  );
  
  if (type === 'wave') {
    return (
      <div className={`${commonClasses} overflow-hidden`}>
        <motion.svg
          className="absolute w-full h-full"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {gradientDefs}
          <motion.path
            d="M0,40 C320,100 420,0 740,50 C1060,100 1380,20 1440,30 L1440,100 L0,100 Z"
            fill={getFill()}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
          />
        </motion.svg>
      </div>
    );
  }

  if (type === 'angle') {
    return (
      <div className={commonClasses}>
        <motion.svg
          className="absolute w-full h-full"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {gradientDefs}
          <motion.polygon
            points="0,100 0,0 1440,100"
            fill={getFill()}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </motion.svg>
      </div>
    );
  }
  
  if (type === 'curve') {
    return (
      <div className={commonClasses}>
        <motion.svg
          className="absolute w-full h-full"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {gradientDefs}
          <motion.path
            d="M0,100 C600,20 1200,40 1440,100 L1440,100 L0,100 Z"
            fill={getFill()}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </motion.svg>
      </div>
    );
  }
  
  if (type === 'triangles') {
    return (
      <div className={commonClasses}>
        <motion.svg
          className="absolute w-full h-full"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {gradientDefs}
          <motion.path
            d="M0,100 L144,0 L288,100 L432,0 L576,100 L720,0 L864,100 L1008,0 L1152,100 L1296,0 L1440,100 L1440,100 L0,100 Z"
            fill={getFill()}
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </motion.svg>
      </div>
    );
  }
  
  return null;
} 