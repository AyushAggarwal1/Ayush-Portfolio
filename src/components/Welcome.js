import React, { useEffect, useState } from 'react';
import '../customCss/Welcome.css'; // Import any CSS styling for the welcome component

const Welcome = () => {
  const message = "Welcome to My Portfolio!"; // Your welcome message
  const [displayedLetters, setDisplayedLetters] = useState("");

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex < message.length) {
        setDisplayedLetters((prev) => prev + message.charAt(currentIndex)); // Add the current letter to the displayedLetters
        currentIndex++;
      } else {
        clearInterval(intervalId); // Stop when all letters are displayed
      }
    }, 100); // Adjust the speed of letter appearance here

    return () => clearInterval(intervalId); // Clean up on component unmount
  }, [message]);

  return (
    <div className="welcome-message">
      <h1>{displayedLetters}</h1>
    </div>
  );
};

export default Welcome;
