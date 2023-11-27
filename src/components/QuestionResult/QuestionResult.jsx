import './questionresult.css'

import React, { useState, useEffect } from 'react'
import { useQuizDataContext } from '../../hooks/useQuizDataContext'


const QuestionResult = () => {
    const { state } = useQuizDataContext()
    const { currentQuiz, userAnswers } = state

    useEffect(() => {
      console.log('userAnswers changed:', userAnswers)
    }, [userAnswers])

    const renderUserAnswerArray = () => {

      return Object.entries(userAnswers).map(([questionIndex, answer]) => {
        const questionId = parseInt(questionIndex.replace('question', ''), 10)
        const question = currentQuiz.questions.find((q) => q.id === questionId)

        const questionText = question ? question.question : ''
        const correctAnswer = question ? question.correctAnswer : ''
        const isCorrect = answer === correctAnswer

        return (
          <div key={questionId}>
            <p>{questionId}</p>
            <p>{questionText}</p>
            <p>{answer}</p>
            <p>{correctAnswer}</p>
            <p>{isCorrect}</p>
          </div>
        )
      }) 
    }


    return (
      <div className="QuestionResult">
        <div>{renderUserAnswerArray().map((result) => (
          <div>{result}</div>
        ))}</div>
      </div>
    )
}

export default QuestionResult

  //   return (
  //     <div className="QuestionResult">
  //       <h2>Results Details</h2>
  //       <ul>
  //         {(userAnswerArray).map((result) => (
  //           <li key={result[0]}>
  //             <p>Question {result[0]}: {result[1]}</p>
  //             <p>Your Answer: {result[2]}</p>
  //             <p>Correct Answer: {result[3]}</p>
  //             <p>{result[4] ? 'Correct' : 'Incorrect'}</p>
  //             <p>Points Gained: {result[4] ? '+1' : '0'}</p>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   )
  // }
  //   return (
  //     <div className="QuestionResult">
  //       <h2>Results Details</h2>
  //       <ul>
  //         {(userAnswerArray).map((result) => (
  //           <li key={result.questionIndex}>
  //             <p>
  //               Question {result.questionIndex}: {result.question}
  //             </p>
  //             <p>Your Answer: {result.answer}</p>
  //             <p>Correct Answer: {result.correctAnswer}</p>
  //             <p>{result.isCorrect ? 'Correct' : 'Incorrect'}</p>
  //             <p>Points Gained: {result.isCorrect ? '+1' : '0'}</p>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   )
//   }

// export default QuestionResult