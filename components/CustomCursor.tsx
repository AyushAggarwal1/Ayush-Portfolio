'use client';

import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false); // To change cursor style on interactive elements
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if (e.target instanceof Element) {
        const targetElement = e.target as Element;
        if (
          window.getComputedStyle(targetElement).cursor === 'pointer' ||
          targetElement.closest('button, a[href]')
        ) {
          setIsPointer(true);
        } else {
          setIsPointer(false);
        }
      }
    };
    
    const handleMouseOut = () => {
      setIsPointer(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);


    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  if (shouldReduceMotion) {
    return null; // Don't render custom cursor if reduce motion is enabled
  }

  const outerVariants = {
    default: {
      x: mousePosition.x - 16, // Adjust for size/centering
      y: mousePosition.y - 16,
      scale: isPointer ? 1.5 : 1,
      opacity: isPointer ? 0.3 : 0.5,
      transition: { type: 'spring', stiffness: 200, damping: 20, mass: 0.5 },
    },
  };

  const innerVariants = {
    default: {
      x: mousePosition.x - 4, // Adjust for size/centering
      y: mousePosition.y - 4,
      scale: isPointer ? 0.8 : 1,
      transition: { type: 'spring', stiffness: 600, damping: 25, mass: 0.3 },
    },
  };

  return (
    <>
      <motion.div
        variants={outerVariants}
        animate="default"
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-blue-500 pointer-events-none z-[9999]"
        style={{ mixBlendMode: 'difference' }} // Cool effect with background
      />
      <motion.div
        variants={innerVariants}
        animate="default"
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-[9999]"
        style={{ mixBlendMode: 'difference' }} // Inner dot also with difference
      />
    </>
  );
};

export default CustomCursor; 