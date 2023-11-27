import './question.css'

import React from 'react'
import { useQuizDataContext } from '../../hooks/useQuizDataContext'

const Question = () => {

    const { state } = useQuizDataContext()
    const { currentQuiz, currentQuestion } = state

    if (!currentQuiz) {
        return null;
    }

    return (
        <div className='Question'>
            {currentQuiz.questions[currentQuestion].question}
        </div>
    )
}

export default Question
