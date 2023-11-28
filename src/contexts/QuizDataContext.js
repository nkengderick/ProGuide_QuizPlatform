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
    timeSpentPerQuestion: [],
}

export const quizDataReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_QUIZ':
          return { ...state, currentQuiz: action.payload, currentQuestion: 0, totalQuestions: action.payload.questions.length };
        case 'SET_CURRENT_QUESTION':
          return { ...state, currentQuestion: action.payload };
          case 'SET_USER_ANSWERS':
              const existingAnswerIndex = state.userAnswers.findIndex((answer) => answer.questionIndex === action.payload.questionIndex);
              
              if (existingAnswerIndex !== -1) {
                  state.userAnswers.splice(existingAnswerIndex, 1)
                }
                return {
                    quizData: state.quizData,
                    currentQuiz: state.currentQuiz,
                    totalQuestions: state.totalQuestions,
                    currentAnswer: state.currentAnswer,
                    currentQuestion: state.currentQuestion,
                    userAnswers: [ ...state.userAnswers, action.payload]
                } 
        case 'SET_TIME_SPENT_PER_QUESTION':
             return { ...state, timeSpentPerQuestion: action.payload };
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
    }
    
    const nextQuestion = () => {
        dispatch({ type: 'SET_CURRENT_QUESTION', payload: state.currentQuestion + 1 })
    }
    
    const previousQuestion = () => {
        dispatch({ type: 'SET_CURRENT_QUESTION', payload: state.currentQuestion - 1 })
    }

    return (
        <QuizDataContext.Provider value={{ dispatch, state, setQuiz, nextQuestion, previousQuestion }}>
            {children}
        </QuizDataContext.Provider>
    )
}