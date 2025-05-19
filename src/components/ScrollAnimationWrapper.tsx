"use client";

import React, { useEffect, useRef, useState, ReactNode, ElementType } from 'react';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
  animationClass?: string; // Class to add when in view
  threshold?: number; // IntersectionObserver threshold
  delay?: string; // Optional animation delay (e.g., "100ms", "0.2s")
  staggerChildren?: number; // Optional delay in ms to apply to direct children
  as?: ElementType; // Use ElementType for the 'as' prop
  once?: boolean;
}

const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({
  children,
  className = "",
  animationClass = "section-animate", // Default to existing class
  threshold = 0.1,
  delay = "0ms",
  staggerChildren,
  as: Component = 'div',
  once = true,
  ...rest
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = targetRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once && currentRef) {
              observer.unobserve(currentRef);
            }
          }
        });
      },
      { threshold }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once, animationClass, delay]);

  const childrenWithStagger = staggerChildren && React.Children.count(children) > 0
    ? React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          // Cast child to access props and style safely
          const element = child as React.ReactElement<{ style?: React.CSSProperties }>;
          return React.cloneElement(element, {
            style: {
              ...(element.props.style || {}),
              animationDelay: isVisible ? `${index * staggerChildren}ms` : undefined,
            },
          });
        }
        return child;
      })
    : children;

  const combinedClassName = `transition-opacity duration-500 ease-in-out ${className} ${isVisible ? animationClass : 'opacity-0'}`;
  
  const style: React.CSSProperties = {
    animationDelay: isVisible ? delay : undefined,
    transitionDelay: isVisible ? delay : undefined,
    ...((rest as { style?: React.CSSProperties }).style || {}),
  };

  return (
    <Component 
      ref={targetRef as React.Ref<unknown>}
      className={combinedClassName}
      style={style}
      {...rest}
    >
      {childrenWithStagger}
    </Component>
  );
};

export default ScrollAnimationWrapper; 