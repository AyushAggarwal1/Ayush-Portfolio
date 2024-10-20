import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Welcome from './components/Welcome';
import Header from './components/Header';
import Experience from './components/Experience';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import XYZLoaderScene from './components/XYZLoaderScene';
import CalendlyBadge from './components/CalendlyBadge';
import SocialMediaLinks from './components/SocialMediaLinks';
import Footer from './components/Footer';
import UnderConstructionPopup from './components/UnderConstructionPopup'; // Import the popup component

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(true); // Set to true to show popup on load

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isPopupOpen) {
      const timer = setTimeout(() => {
        setIsPopupOpen(false);
      }, 3000); // Set duration (e.g., 3000ms = 3 seconds)

      return () => clearTimeout(timer);
    }
  }, [isPopupOpen]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {showWelcome ? (
        <Welcome />
      ) : (
        <>
          <div className="canvas-container"> {/* Added a container for the Canvas */}
            <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
              <XYZLoaderScene />
            </Canvas>
          </div>
          <div style={{ position: 'relative', zIndex: 1, flex: '1 0 auto', overflowY: 'auto' }} className="content">
            <div id="top" style={{ position: 'absolute', top: 0, left: 0 }} /> {/* Scroll anchor */}
            <Header />
            <About />
            <Experience />
            <Projects />
            <Contact />
            <CalendlyBadge />
            <SocialMediaLinks /> 
            <Footer />
          </div>
        </>
      )}
      <UnderConstructionPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} /> {/* Render the popup */}
    </div>
  );
};

export default App;


// after complete delete underConstructionPopup.js and css
