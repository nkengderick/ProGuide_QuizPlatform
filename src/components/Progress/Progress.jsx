import './progress.css'

import React from 'react'
import { useQuizDataContext } from '../../hooks/useQuizDataContext'

const Progress = () => {
    const { state } = useQuizDataContext()
    const { currentQuiz, currentQuestion, totalQuestions, userAnswers } = state

    const answeredQuestions = Object.keys(userAnswers).length;
    const percentageComplete = (answeredQuestions/totalQuestions)*100

  return (
    <div className='Progress'>
        <h2>Question {currentQuiz.questions[currentQuestion].id} of {totalQuestions}</h2>
        <h2>Percentage Completed : {percentageComplete}%</h2>
    </div>
  )
}

export default Progress