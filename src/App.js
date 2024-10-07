import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Welcome from './components/Welcome';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import XYZLoaderScene from './components/XYZLoaderScene';

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Disable scrolling on the body while showing the welcome message
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setShowWelcome(false);
      document.body.style.overflow = 'auto'; // Enable scrolling after welcome
    }, 3500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto'; // Cleanup: ensure overflow is enabled
    };
  }, []);

  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      {showWelcome ? (
        <Welcome />
      ) : (
        <>
          <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            <XYZLoaderScene />
          </Canvas>
          <div style={{ position: 'relative', zIndex: 1 }} className="content">
            <Header />
            <About />
            <Projects />
            <Contact />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
