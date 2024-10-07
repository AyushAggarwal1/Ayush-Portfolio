import React from 'react';
import { Canvas } from '@react-three/fiber';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import XYZLoaderScene from './components/XYZLoaderScene'; // Import the new component

const App = () => {
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <XYZLoaderScene />
      </Canvas>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
