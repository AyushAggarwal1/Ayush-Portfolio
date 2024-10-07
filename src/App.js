import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Welcome from './components/Welcome'; 
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import XYZLoaderScene from './components/XYZLoaderScene'; // Import the new component

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false); // Hide the welcome message after 0.5 seconds
    }, 5000); // 500 milliseconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      {showWelcome ? (
        <Welcome /> // Render the Welcome component
      ) : (
        <>
          <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            <XYZLoaderScene />
          </Canvas>
          <div style={{ position: 'relative', zIndex: 1 }}>
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
