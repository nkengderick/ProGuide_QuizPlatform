import './result.css'

import React from 'react'
import { Link } from 'react-router-dom'
// import QuestionResult from '../../components/QuestionResult/QuestionResult'
import ResultSummary from '../../components/ResultSummary/ResultSummary'
import { useQuizDataContext } from '../../hooks/useQuizDataContext'
// import ScoreChart from '../../components/ScoreChart/ScoreChart'

const Result = () => {
    
    const { state, handleRetakeQuiz } = useQuizDataContext()
    const { currentQuiz } = state


    const handlePrintResults = () => {
        window.print()
    }

    const handleShareResults = () => {
        alert('Sharing Results...')
    }
  
    return (
    <div className='Result'>
        <ResultSummary />
        {/* <ScoreChart /> */}
        {/* <QuestionResult userAnswers={userAnswers}/> */}
        <div className="result-btns">
            <button onClick={handleRetakeQuiz}><Link to={`quiz/${currentQuiz.id}`}>Retake Quiz</Link></button>
            <button onClick={handlePrintResults}>Print Results</button>
            <button onClick={handleShareResults}>Share Results</button>
        </div>
    </div>
  )
}

export default Result