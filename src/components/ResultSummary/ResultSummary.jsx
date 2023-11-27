import './resultsummary.css'

import React, { useState, useEffect } from 'react'
import { useQuizDataContext } from '../../hooks/useQuizDataContext'

const ResultSummary = () => {

    const { state } = useQuizDataContext()
    const { userAnswers, currentQuestion, currentQuiz, totalQuestions } = state
    
    const [attemptedQuestions, setAttemptedQuestions] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0)

    useEffect(() => {
      const answeredQuestionsCount = Object.keys(userAnswers).length;
      setAttemptedQuestions(answeredQuestionsCount);
      

      const correctAnswersCount = Object.entries(userAnswers).reduce(
        (count, [questionIndex, userAnswerObject]) => {
          const questionId = parseInt(questionIndex.replace('question', ''), 10);
          const question = currentQuiz.questions.find(q => q.id === questionId+1)
          const correctAnswer = question.correctAnswer;
          const userAnswer = JSON.stringify(userAnswerObject)
          console.log(userAnswer)

          //if (question && question.correctAnswer) { 
            if (userAnswer === correctAnswer) {
              return count + 1;
            }
            return count;
        //}
      },
      0
    );
  
      setCorrectAnswers(correctAnswersCount);
    }, [userAnswers, currentQuiz.questions]);


    const score = ( correctAnswers / totalQuestions ) * 100

  return (
    <div className='ResultSummary'>
        <h2>Your Results</h2>
        <h2>{JSON.stringify(userAnswers)}</h2>
        <h2>Attempted Questions {attemptedQuestions}</h2>
        <h2>Correct Answers {correctAnswers}</h2>
        <p>Total Score: {correctAnswers} out of {totalQuestions}</p>
        <p>Percentage Passed: {score}%</p>
    </div>
  )
}

export default ResultSummary

