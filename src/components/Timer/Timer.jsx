import './timer.css'

import React, { useState, useEffect } from 'react';

const Timer = ({ totalTime, onTimeout }) => {
  const [timeRemaining, setTimeRemaining] = useState(totalTime);
  const [timePerQuestion, setTimePerQuestion] = useState(totalTime);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
      setTimePerQuestion((prevTime) => prevTime - 1);
    }, 1000);

    if (timeRemaining === 0) {
      clearInterval(timerInterval);
      onTimeout(); 
    }

    return () => clearInterval(timerInterval);
  }, [timeRemaining, onTimeout]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div>
      <p>Total Time Remaining: {formatTime(timeRemaining)}</p>
      <p>Time per Question: {formatTime(timePerQuestion)}</p>
    </div>
  );
};

export default Timer;
