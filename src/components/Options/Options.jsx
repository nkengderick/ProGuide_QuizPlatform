import './options.css'

import React, { useState } from 'react'
import { useQuizDataContext } from '../../hooks/useQuizDataContext'

const Options = () => {
    
    const { state, dispatch } = useQuizDataContext()
    const { currentQuiz, currentQuestion, userAnswers } = state
    
    const initialSelectedOptions = () => {
        if(userAnswers[currentQuestion]){
            return {
                [currentQuestion]: userAnswers[currentQuestion]
            }
        } else {
            return {}
        }
    }

    const [selectedOptions, setSelectedOptions] = useState(initialSelectedOptions)

    if(!currentQuiz || !currentQuiz.questions[currentQuestion]) {
        return null
    }      

    const options = currentQuiz.questions[currentQuestion].answerOptions
    
    const handleOptionChange = (index) => {
        const optionValue = options[index]
        
        setSelectedOptions({ ...selectedOptions, [currentQuestion]: optionValue})
        dispatch({
            type: 'SET_USER_ANSWERS',
            payload: {
                questionIndex: currentQuestion,
                answerIndex: optionValue,
            },
        })
    }  
    // const shuffledOptions = options
    //     .map((option) => ({ sort: Math.random(), value: option }))
    //     .sort((a, b) => a.sort - b.sort)
    //     .map((shuffledOption) => shuffledOption.value);

    return (
        <div className='Options'>
            {options.map((option, index) => (
                <div key={index}>
                       <input
                        className='option' 
                        key={currentQuiz.questions[currentQuestion].id}
                        type={currentQuiz.questions[currentQuestion].type === 'Single' ? 'radio' : 'checkbox'}
                        id={`option${index}`}
                        name='options'
                        value = {option}
                        checked={selectedOptions[currentQuestion] === option}
                        onChange={() => handleOptionChange(index)}
                       /> 
                    <label htmlFor={`option${index}`}>{option}</label>
                </div>
            ))}

        </div>
    )
}

export default Options
