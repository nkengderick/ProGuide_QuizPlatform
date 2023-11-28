import { useQuizDataContext } from '../../hooks/useQuizDataContext';
import './timer.css'

import React, { useState, useEffect } from 'react';

const Timer = ({ totalTime, onTimeout }) => {
  const [timeRemaining, setTimeRemaining] = useState(totalTime);
  const {state, dispatch} = useQuizDataContext()
  const currentQuestion = state

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
      dispatch({
        type: 'SET_TIME_SPENT_PER_QUESTION',
        payload: {
          index: currentQuestion,
          timeSpent: totalTime - timeRemaining
        }
      })
    }, 1000);

    if (timeRemaining === 0) {
      clearInterval(timerInterval);
      onTimeout(); 
    }

    return () => clearInterval(timerInterval);

  }, [timeRemaining, totalTime, currentQuestion, onTimeout, dispatch]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className='Timer'>
      <p>Total Time Remaining: {formatTime(timeRemaining)}</p>
    </div>
  );
};

export default Timer;
