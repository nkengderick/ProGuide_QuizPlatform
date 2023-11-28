import './quiz.css'

import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Question from '../../components/Question/Question' 
import Navigation from '../../components/Navigation/Navigation'
import Options from '../../components/Options/Options'
import { useQuizDataContext } from '../../hooks/useQuizDataContext'
import Progress from '../../components/Progress/Progress'
import Timer from '../../components/Timer/Timer'

const Quiz = () => {

    const history = useHistory()
    const { state, nextQuestion, previousQuestion } = useQuizDataContext()
    const { currentQuiz, currentQuestion, userAnswers, totalQuestions} = state

    const [quizStarted, setQuizStarted] = useState(false)
    const [quizFinished, setQuizFinished] = useState(false)

    const totalTime = totalQuestions * 60;

    const startQuiz = () => {
        setQuizStarted(true)
    }

    const handleFinishQuiz = () => {
        setQuizFinished(true)
        console.log("User Answers:", userAnswers)
        history.push('/result')
    }

    const handleTimeout = () => {
        handleFinishQuiz()
    }

    useEffect(() => {
        {!quizStarted && (
            <button onClick={startQuiz()}>Start Quiz</button>
          )}
        if(quizStarted && !quizFinished){
            const timerTimeout = setTimeout(() => {
                handleTimeout()
            }, totalTime * 1000)
            return () => clearTimeout(timerTimeout)
        }
    }, [quizStarted, quizFinished])

    return (
        <div className='Quiz'>
            {quizStarted && !quizFinished && <Timer totalTime={totalTime} onTimeout={handleTimeout} />}
            <Progress />
            <h2>{state.currentQuiz.title}</h2>
            <Question />
            <Options />
            <Navigation 
                currentQuestion={currentQuestion}
                totalQuestions={currentQuiz.questions.length}
                nextQuestion={nextQuestion}
                previousQuestion={previousQuestion}
            />
            <button className='finish-button' onClick={handleFinishQuiz} disabled={currentQuestion !== currentQuiz.questions.length-1}>Finished View Results</button>
        </div>
    )
}

export default Quiz
