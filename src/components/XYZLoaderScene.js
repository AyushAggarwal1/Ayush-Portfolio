import React, { useEffect } from 'react';
import * as THREE from 'three';
import { XYZLoader } from 'three/examples/jsm/loaders/XYZLoader.js';

const XYZLoaderScene = () => {
  useEffect(() => {
    let camera, scene, renderer, clock;
    let points;

    init();
    animate();

    function init() {
      // Set up the camera
      camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.set(10, 7, 10);

      // Set up the scene
      scene = new THREE.Scene();
      scene.add(camera);
      camera.lookAt(scene.position);

      // Set up the clock
      clock = new THREE.Clock();

      // Load the XYZ file
      const loader = new XYZLoader();
      loader.load('models/xyz/helix_201.xyz', function (geometry) {
        geometry.center();

        const vertexColors = geometry.hasAttribute('color') === true;
        const material = new THREE.PointsMaterial({ size: 0.1, vertexColors: vertexColors });

        points = new THREE.Points(geometry, material);
        scene.add(points);
      });

      // Set up the renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      // Handle window resize
      window.addEventListener('resize', onWindowResize);
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
      requestAnimationFrame(animate);

      const delta = clock.getDelta();

      if (points) {
        points.rotation.x += delta * 0.2;
        points.rotation.y += delta * 0.5;
      }

      renderer.render(scene, camera);
    }

    return () => {
      // Clean up event listeners and renderer on component unmount
      window.removeEventListener('resize', onWindowResize);
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []); // Empty dependency array to run only once on mount

  return null; // This component does not render any JSX
};

export default XYZLoaderScene;
