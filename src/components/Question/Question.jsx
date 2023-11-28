import './question.css'

import ball from '../../assets/balldirection.jpeg'
import block from '../../assets/blockdirection.jpeg'
import book from '../../assets/bookdirection.jpeg'

import React from 'react'
import { useQuizDataContext } from '../../hooks/useQuizDataContext'
import { MathComponent } from 'mathjax-react'

const Question = () => {

    const { state } = useQuizDataContext()
    const { currentQuiz, currentQuestion } = state

    if (!currentQuiz) {
        return null;
    }

    const image = currentQuiz.questions[currentQuestion].imageUrl
    const equation = currentQuiz.questions[currentQuestion].equation

    return (
        <div className='Question'>
            <p className='question'>{currentQuiz.questions[currentQuestion].id}. {currentQuiz.questions[currentQuestion].question}</p>
            {equation && (
                <MathComponent tex={String.raw`${equation}`} display={true}/>
            )}
            {image && (
                <img src={
                    image === 'ball' 
                    ? ball
                    : image === 'block' 
                    ? block
                    : image === 'book' 
                    ? book
                    : ball          
                } alt={image} className='question-image' />
            )}
        </div>
    )
}

export default Question
