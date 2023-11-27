import './navigation.css'

import React, { useState } from 'react'
import { useQuizDataContext } from '../../hooks/useQuizDataContext'

const Navigation = () => {

    const { state, nextQuestion, previousQuestion, } = useQuizDataContext()
    const { currentQuestion, totalQuestions, userAnswers } = state
    const [selectedAnswers, setSelectedAnswers] = useState(userAnswers)

    const handleNextQuestion = () => {
        nextQuestion();
    
        if (currentQuestion !== totalQuestions - 1) {
            const currentQuestionAnswers = selectedAnswers[currentQuestion];
            const nextQuestionAnswers = { ...selectedAnswers };
            nextQuestionAnswers[currentQuestion + 1] = currentQuestionAnswers;
            setSelectedAnswers(nextQuestionAnswers);
        }
    };
    
    const handlePreviousQuestion = () => {
        previousQuestion();
    
        if (currentQuestion !== 0) {
            const previousQuestionAnswers = selectedAnswers[currentQuestion];
            const currentQuestionAnswers = { ...selectedAnswers };
            currentQuestionAnswers[currentQuestion] = previousQuestionAnswers;
            setSelectedAnswers(currentQuestionAnswers);
        }
    };
    

    return (
        <div className='Navigation'>
            <button onClick={handlePreviousQuestion} disabled={state.currentQuestion === 0}>Previous</button>
            <button onClick={handleNextQuestion} disabled={currentQuestion === totalQuestions - 1}>Next</button>
            {/* {currentQuestion === currentQuiz.questions.length - 1 && (
                <button onClick={handleFinishQuiz}>Finished View Results</button>
            )} */}
        </div>
    )
}

export default Navigation
