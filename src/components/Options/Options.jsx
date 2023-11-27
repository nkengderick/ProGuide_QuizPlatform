import './options.css'

import React, { useState } from 'react'
import { useQuizDataContext } from '../../hooks/useQuizDataContext'
import { useHistory } from 'react-router-dom'

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
            type: 'SET_CURRENT_ANSWER',
            payload: {
                questionIndex: currentQuestion,
                answerIndex: selectedOptions,
            },
        })
    }

    return (
        <div className='Options'>
            {options.map((option, index) => (
                <div key={index}>
                       <input 
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
