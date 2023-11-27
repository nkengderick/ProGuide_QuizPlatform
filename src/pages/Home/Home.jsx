import React from 'react';
import './home.css';
import hero from '../../assets/hero.jpg'
import { useQuizDataContext } from '../../hooks/useQuizDataContext';
import { Link } from 'react-router-dom';

const Home = () => {

    const { state, setQuiz } = useQuizDataContext()
    const { quizData } = state

    return (
        <div className="Home">
            <h1>ProGuide Quiz Platform</h1>
            <p>Bridging the Educational Gap</p>
            <img src={hero} alt="Hero" />
            <div className="call-to-action">
            <a href="#quizlist" className="btn btn-primary">Get Started</a>
            <a href="/learn-more" className="btn btn-secondary">Learn More</a>
            </div>
            <div className='quizList' id='quizlist'>
                <h2>Avalaible Quizzes</h2>
                <p>Below are the various avalaible quizzes you can take to test yourself</p>
                <ul>
                    {quizData.map((quiz, index) => (
                        <li key={index}>
                            <Link to={`quiz/${index}`} onClick={() => setQuiz(index)}>
                                {quiz.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
  );
};

export default Home;
