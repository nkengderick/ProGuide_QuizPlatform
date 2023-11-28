import './result.css'

import React from 'react'
import { Link } from 'react-router-dom'
import ResultSummary from '../../components/ResultSummary/ResultSummary'
import { useQuizDataContext } from '../../hooks/useQuizDataContext'

const Result = () => {
    
    const { state, dispatch } = useQuizDataContext()
    const { currentQuiz, userAnswers } = state


    const handlePrintResults = () => {
        window.print()
    }

    const handleShareResults = () => {
        alert('Sharing Results...')
    }

    const handleRetakeQuiz = () => {
        dispatch({ type: 'SET_CURRENT_QUIZ', payload: currentQuiz })
        dispatch({ type: 'SET_CURRENT_QUESTION', payload: 0 })
        dispatch({ type: 'SET_USER_ANSWERS', payload: [] })
    }
  
    return (
    <div className='Result'>
        <ResultSummary />
        <div className="result-btns">
            <button onClick={handleRetakeQuiz}><Link to={`quiz/${currentQuiz.id}`}>Retake Quiz</Link></button>
            <button onClick={handlePrintResults}>Print Results</button>
            <button onClick={handleShareResults}>Share Results</button>
        </div>
    </div>
  )
}

export default Result