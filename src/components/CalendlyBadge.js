import React, { useEffect } from 'react';

const CalendlyBadge = () => {
  useEffect(() => {
    // Load the Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;

    // Append the script to the body
    document.body.appendChild(script);

    // Initialize the Calendly badge widget once the script is loaded
    script.onload = () => {
      window.Calendly.initBadgeWidget({
        url: 'https://calendly.com/teamwithayush/15min',
        text: 'Schedule time with me',
        color: '#0069ff',
        textColor: '#ffffff',
        branding: undefined,
      });
    };

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything itself
};

export default CalendlyBadge;
