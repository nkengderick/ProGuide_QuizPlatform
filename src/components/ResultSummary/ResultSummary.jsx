import './resultsummary.css'

import React, { useState, useEffect } from 'react'
import { useQuizDataContext } from '../../hooks/useQuizDataContext'
import ScoreChart from '../ScoreChart/ScoreChart'

const ResultSummary = () => {

    const { state } = useQuizDataContext()
    const { userAnswers, currentQuiz, totalQuestions, timeSpentPerQuestion } = state
    
    const [attemptedQuestions, setAttemptedQuestions] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0)

    const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    useEffect(() => {

      const answeredQuestionsCount = Object.keys(userAnswers).length;
      setAttemptedQuestions(answeredQuestionsCount);

      let correctAnswersCount = 0;
      currentQuiz.questions.forEach((question, index) => {
        const userAnswer = userAnswers[index]?.answerIndex
        if (userAnswer === question.correctAnswer){
          correctAnswersCount += 1
        }
      })
      setCorrectAnswers(correctAnswersCount)

          }, [userAnswers, currentQuiz.questions]);

    const score = ( correctAnswers / totalQuestions ) * 100
    let remark = '';
    let advice = '';
  
    if (score >= 80) {
      remark = 'A - Excellent';
      advice = 'Congratulations! You did an excellent job.';
    } else if (score >= 60) {
      remark = 'B - Good';
      advice = 'Well done! You performed well.';
    } else if (score >= 50) {
      remark = 'C - Average';
      advice = 'Good effort! You are on an average level.';
    } else if (score >= 40) {
      remark = 'D - Fail';
      advice = 'You need improvement. Study more for better results.';
    } else {
      remark = 'E - Worse';
      advice = 'You have to seriously work on your understanding of the subject.';
    }
  return (
    <div className='ResultSummary'>
      <div className="summary">
        <h2>Your Results for quiz <span className='title'>{currentQuiz.title}</span></h2>
        <h2>Attempted {attemptedQuestions} out of {totalQuestions}</h2>
        <h2>Correct Answers {correctAnswers}</h2>
        <h2>Incorrect Answers {attemptedQuestions - correctAnswers}</h2>
        <h2>UnAnswered Answers {totalQuestions - attemptedQuestions}</h2>
        <p>Total Score: {correctAnswers} out of {totalQuestions}</p>
        <p>Percentage Passed: {score}%</p>
        <p>Remark: {remark}</p>
        <p>{advice}</p>
      </div>
      <div className='question-details'>
        {currentQuiz.questions.map((question, index) => (
          <div key={index} className={userAnswers[index]?.answerIndex === question.correctAnswer ? 'correct' : userAnswers[index] ? 'incorrect' : 'unanswered'}>
            <p>Question: {question.question}</p>
            <p>Your Answer: {userAnswers[index]?.answerIndex}</p>
            <p>Correct Answer: {question.correctAnswer}</p>
            <p>{userAnswers[index]?.answerIndex === question.correctAnswer ? 'Correct' : userAnswers[index] ? 'incorrect' : 'unanswered'}</p>
            <p>Points Gained: {userAnswers[index]?.answerIndex === question.correctAnswer ? 1 : 0}</p>
            <p>Time Used: {userAnswers[index]?.answerIndex ? formatTime(timeSpentPerQuestion[index]) : 'Not Answered'}</p>
          </div>
        ))}
      </div>
      <ScoreChart Ncorrect={correctAnswers} Nincorrect={attemptedQuestions - correctAnswers} Nunanswered={totalQuestions - attemptedQuestions} />
    </div>
  )
}

export default ResultSummary
