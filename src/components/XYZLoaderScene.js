import React, { useEffect } from 'react';
import * as THREE from 'three';
import { XYZLoader } from 'three/addons/loaders/XYZLoader.js';

const XYZLoaderScene = () => {
  useEffect(() => {
    let camera, scene, renderer, clock, points;
    clock = new THREE.Clock();

    // Set up camera
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(10, 7, 10);  // Adjust camera position
    camera.lookAt(new THREE.Vector3(0, 0, 0));  // Ensure it's looking at the scene's origin

    // Set up scene
    scene = new THREE.Scene();
    scene.add(camera);

    // Initialize renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Set canvas style directly to fill the viewport
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';

    document.body.appendChild(renderer.domElement);

    // Load the XYZ model
    const loader = new XYZLoader();
    loader.load('/models/xyz/helix_201.xyz', 
      (geometry) => {
        console.log("Model loaded", geometry);  // Log when the model is loaded

        geometry.center();

        const vertexColors = geometry.hasAttribute('color');
        const material = new THREE.PointsMaterial({ size: 0.1, vertexColors });

        points = new THREE.Points(geometry, material);
        scene.add(points);

        // Immediately trigger the first render once the model is loaded
        renderScene();
      }, 
      undefined, 
      (error) => {
        console.error("Error loading model", error);  // Log any errors that occur
      }
    );

    // Handle window resizing
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderScene(); // Re-render after resizing
    };
    window.addEventListener('resize', onWindowResize);

    // Render function
    const renderScene = () => {
      if (points) {
        const delta = clock.getDelta();
        points.rotation.x += delta * 0.2;
        points.rotation.y += delta * 0.5;
      }
      renderer.render(scene, camera);
    };

    // Start animation loop to continuously render the scene
    renderer.setAnimationLoop(renderScene);

    // Clean up on component unmount
    return () => {
      window.removeEventListener('resize', onWindowResize);
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null; // Nothing to render in JSX
};

export default XYZLoaderScene;
