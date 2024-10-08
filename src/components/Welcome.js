import React, { useEffect, useState } from 'react';
import '../customCss/Welcome.css'; // Import any CSS styling for the welcome component

const Welcome = () => {
  const message = "Welcome to My Virtual World!"; // Your welcome message
  const [displayedLetters, setDisplayedLetters] = useState("");
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    let currentIndex = -1;

    const intervalId = setInterval(() => {
      if (currentIndex < message.length - 1) {
        currentIndex++;
        setDisplayedLetters((prev) => prev + message.charAt(currentIndex)); // Add the current letter to the displayedLetters
      } else {
        clearInterval(intervalId); // Stop when all letters are displayed
      }
    }, 50); // Adjust the speed of letter appearance here

    return () => clearInterval(intervalId); // Clean up on component unmount
  }, [message]);

  useEffect(() => {
    setAnimationClass("fade-in-scale"); // Add animation class on mount
    const timer = setTimeout(() => {
      setAnimationClass(""); // Reset animation class after the animation
    }, 50); // Duration of the animation

    return () => clearTimeout(timer); // Clean up on unmount
  }, []);

  return (
    <div className={`welcome-message ${animationClass}`}>
      <h1 className="rainbow-text">{displayedLetters}</h1>
    </div>
  );
};

export default Welcome;
