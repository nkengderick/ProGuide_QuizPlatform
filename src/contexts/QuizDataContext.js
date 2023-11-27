import React, { createContext, useEffect, useReducer } from 'react'

import quizData from '../quizData'

export const QuizDataContext = createContext()

export const initialState = {
    quizData: quizData,
    currentQuiz: null,
    currentQuestion: 0,
    totalQuestions: 0,
    currentAnswer: "",
    userAnswers: [],
}

export const quizDataReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_QUIZ':
          return { ...state, currentQuiz: action.payload, currentQuestion: 0, totalQuestions: action.payload.questions.length };
        case 'SET_CURRENT_QUESTION':
          return { ...state, currentQuestion: action.payload };
        case 'SET_USER_ANSWERS':
            // const updatedanswers = [...state.userAnswers]
            // updatedanswers[state.currentQuestion] = action.payload
            return { ...state, userAnswers: action.payload }
        case "SET_CURRENT_ANSWER":
            const { questionIndex, answerIndex } = action.payload;
            return { ...state, userAnswers: { ...state.userAnswers, [`question${questionIndex}`]: answerIndex},}
        
        default:
          return state;
      }
}

export const QuizDataProvider = ({ children }) => {
    const [state, dispatch] = useReducer(quizDataReducer, initialState)

    useEffect(() => {
        dispatch({ type: 'SET_CURRENT_QUIZ', payload: quizData[0]})
    }, []) 
    
    const setQuiz = (quizIndex) => {
        dispatch({ type: 'SET_CURRENT_QUIZ', payload: quizData[quizIndex] })
        // dispatch({ type: 'SET_CURRENT_QUESTION', payload: 0 })
        // dispatch({ type: 'SET_USER_ANSWERS', payload: [] })
    }
    
    const nextQuestion = () => {
        dispatch({ type: 'SET_CURRENT_QUESTION', payload: state.currentQuestion + 1 })
    }
    
    const previousQuestion = () => {
        dispatch({ type: 'SET_CURRENT_QUESTION', payload: state.currentQuestion - 1 })
    }
    
    const handleRetakeQuiz = (quizIndex) => {
        dispatch({ type: 'SET_CURRENT_QUIZ', payload: quizData[quizIndex] })
        dispatch({ type: 'SET_CURRENT_QUESTION', payload: 0 })
        dispatch({ type: 'SET_USER_ANSWERS', payload: [] })
    }

    return (
        <QuizDataContext.Provider value={{ dispatch, state, setQuiz, nextQuestion, previousQuestion, handleRetakeQuiz }}>
            {children}
        </QuizDataContext.Provider>
    )
}