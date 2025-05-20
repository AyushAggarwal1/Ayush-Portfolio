'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion, useAnimation, cubicBezier } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const trailsCount = 8; // Increased from 5
  const cursorControls = useAnimation();
  
  // Create refs for smoother animation
  const cursorSpeedRef = useRef({ x: 0, y: 0 });
  const prevPositionRef = useRef({ x: -100, y: -100 });
  const lastUpdateTimeRef = useRef(Date.now());

  // Color definitions for the cursor
  const cursorColors = {
    main: '#a855f7', // Purple-500
    secondary: '#ec4899', // Pink-500
    accent: '#3b82f6', // Blue-500
    glow: 'rgba(168, 85, 247, 0.5)', // Brighter Purple glow
    trail: (i: number) => {
      // Enhanced color gradient with 3 colors (blue → purple → pink)
      const ratio = i / trailsCount;
      if (ratio < 0.5) {
        // Blue to Purple transition (first half)
        const segmentRatio = ratio * 2; // Scale 0-0.5 to 0-1
        return `rgba(${59 + (168 - 59) * segmentRatio}, ${130 + (85 - 130) * segmentRatio}, ${246 + (247 - 246) * segmentRatio}, ${0.7 - ratio * 0.6})`;
      } else {
        // Purple to Pink transition (second half)
        const segmentRatio = (ratio - 0.5) * 2; // Scale 0.5-1 to 0-1
        return `rgba(${168 + (236 - 168) * segmentRatio}, ${85 + (72 - 85) * segmentRatio}, ${247 + (153 - 247) * segmentRatio}, ${0.7 - ratio * 0.6})`;
      }
    },
    particle: (i: number) => {
      // Randomize particle colors between blue, purple, and pink
      const colors = ['#3b82f6', '#a855f7', '#ec4899'];
      return colors[i % colors.length];
    }
  };

  // Custom easing for more natural movement
  const springEasing = cubicBezier(0.34, 1.56, 0.64, 1);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      const dt = (now - lastUpdateTimeRef.current) / 1000; // Time in seconds
      lastUpdateTimeRef.current = now;
      
      // Calculate velocity
      if (dt > 0) {
        cursorSpeedRef.current = {
          x: (e.clientX - prevPositionRef.current.x) / dt,
          y: (e.clientY - prevPositionRef.current.y) / dt
        };
      }
      
      prevPositionRef.current = { x: e.clientX, y: e.clientY };
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if (e.target instanceof Element) {
        const targetElement = e.target as Element;
        if (
          window.getComputedStyle(targetElement).cursor === 'pointer' ||
          targetElement.closest('button, a[href], input, textarea, select, [role="button"]')
        ) {
          setIsPointer(true);
          cursorControls.start({
            scale: [1, 1.3, 1.2],
            borderRadius: ["50%", "30%", "40%"],
            transition: { duration: 0.5, ease: springEasing }
          });
        } else {
          setIsPointer(false);
        }
      }
    };
    
    const handleMouseOut = () => {
      setIsPointer(false);
    };
    
    const handleMouseDown = () => {
      setIsClicking(true);
      setHasClicked(true);
      cursorControls.start({
        scale: 0.8,
        transition: { duration: 0.1, ease: springEasing }
      });
    };
    
    const handleMouseUp = () => {
      setIsClicking(false);
      cursorControls.start({
        scale: isPointer ? 1.2 : 1,
        transition: { duration: 0.2, ease: springEasing }
      });
      
      // Reset hasClicked after animation time
      setTimeout(() => setHasClicked(false), 600);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorControls, isPointer, springEasing]);

  // Update animation based on speed
  useEffect(() => {
    const updateCursorStyle = () => {
      const speed = Math.sqrt(
        cursorSpeedRef.current.x * cursorSpeedRef.current.x + 
        cursorSpeedRef.current.y * cursorSpeedRef.current.y
      );
      
      // Dampen the speed values over time
      cursorSpeedRef.current = {
        x: cursorSpeedRef.current.x * 0.9,
        y: cursorSpeedRef.current.y * 0.9
      };
      
      const rotation = Math.atan2(cursorSpeedRef.current.y, cursorSpeedRef.current.x) * (180 / Math.PI);
      const stretch = Math.min(1 + speed / 800, 1.8); // More responsive stretching
      
      if (speed > 80) { // Lower threshold for more responsiveness
        cursorControls.start({
          rotate: rotation,
          scaleX: stretch,
          scaleY: 2 - stretch,
          transition: { duration: 0.15, ease: springEasing }
        });
      } else {
        cursorControls.start({
          rotate: 0,
          scaleX: isClicking ? 0.8 : (isPointer ? 1.2 : 1),
          scaleY: isClicking ? 0.8 : (isPointer ? 1.2 : 1),
          transition: { duration: 0.3, ease: springEasing }
        });
      }
      
      requestAnimationFrame(updateCursorStyle);
    };
    
    const animationFrame = requestAnimationFrame(updateCursorStyle);
    return () => cancelAnimationFrame(animationFrame);
  }, [cursorControls, isClicking, isPointer, springEasing]);

  if (shouldReduceMotion) {
    return null;
  }

  // Create trail elements with staggered delay and enhanced motion
  const trails = Array.from({ length: trailsCount }, (_, i) => {
    const delay = 0.03 * (i + 1); // Shortened delay for more responsive trailing
    const size = 10 - i * 1.1; // Slightly larger initial size
    const opacity = 0.7 - (i * 0.08);
    
    return (
      <motion.div
        key={i}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998]"
        style={{
          width: size,
          height: size,
          backgroundColor: cursorColors.trail(i),
          mixBlendMode: 'difference',
          opacity,
          boxShadow: `0 0 ${6 - i * 0.6}px ${cursorColors.glow}`
        }}
        animate={{
          x: mousePosition.x - size / 2,
          y: mousePosition.y - size / 2,
        }}
        transition={{
          type: 'spring',
          stiffness: 180 - i * 15, // Varied stiffness for natural motion
          damping: 15,
          mass: 0.2 + i * 0.05, // Varied mass for trailing effect
          delay: delay
        }}
      />
    );
  });

  // Generate random burst particles for click effect
  const burstParticles = hasClicked && Array.from({ length: 10 }).map((_, i) => {
    const angle = (i / 10) * Math.PI * 2;
    const distance = 30 + Math.random() * 30;
    const size = 2 + Math.random() * 3;
    const duration = 0.5 + Math.random() * 0.5;
    
    return (
      <motion.div
        key={`burst-${i}`}
        className="absolute rounded-full"
        style={{
          width: size,
          height: size,
          backgroundColor: cursorColors.particle(i),
          boxShadow: `0 0 4px ${cursorColors.particle(i)}`,
        }}
        initial={{ 
          x: 0, 
          y: 0, 
          opacity: 1,
          scale: 0.5
        }}
        animate={{ 
          x: Math.cos(angle) * distance, 
          y: Math.sin(angle) * distance, 
          opacity: 0,
          scale: 1.5
        }}
        transition={{ 
          duration: duration,
          ease: [0.2, 0.9, 0.4, 1]
        }}
      />
    );
  });

  return (
    <>
      {/* Main cursor ring */}
      <motion.div
        animate={cursorControls}
        className="fixed top-0 left-0 pointer-events-none z-[10000] flex items-center justify-center"
        style={{
          width: 40, // Slightly larger
          height: 40, // Slightly larger
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          backgroundColor: 'transparent',
          border: `2px solid ${cursorColors.main}`,
          borderRadius: '50%',
          mixBlendMode: 'difference',
          boxShadow: `0 0 15px ${cursorColors.glow}` // Enhanced glow
        }}
      >
        {isPointer && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-1.5 h-1.5 bg-white rounded-full" // Slightly larger dot
          />
        )}
      </motion.div>
      
      {/* Cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999]" // Slightly larger
        style={{ 
          background: `linear-gradient(to right, ${cursorColors.main}, ${cursorColors.secondary})`,
          mixBlendMode: 'difference',
          filter: 'blur(0.5px)',
          boxShadow: `0 0 8px ${cursorColors.glow}` // Enhanced glow
        }}
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
          scale: isClicking ? 0.6 : 1
        }}
        transition={{
          type: 'spring',
          stiffness: 800,
          damping: 25
        }}
      >
        {/* Burst particles container */}
        {hasClicked && (
          <div className="relative">
            {burstParticles}
          </div>
        )}
      </motion.div>
      
      {/* Particle trails */}
      {trails}
      
      {/* Motion blur effect trail */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full pointer-events-none z-[9997] opacity-30"
        style={{
          background: `radial-gradient(circle, ${cursorColors.secondary} 0%, transparent 70%)`,
          filter: 'blur(4px)',
        }}
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 20,
          restDelta: 0.001
        }}
      />
    </>
  );
};

export default CustomCursor; 