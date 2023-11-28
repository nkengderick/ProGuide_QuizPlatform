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
      <div className="text-container">
        <h2 className='question-number'>Question {currentQuiz.questions[currentQuestion].id} of {totalQuestions}</h2>
        <h2 className='percent-complete'>Completed : {percentageComplete}%</h2>
      </div>
      <div className='bar-container'>
        <div className='progress-bar' style={{ width: `${percentageComplete}%` }}></div>
      </div>
    </div>
  )
}

export default Progress