import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useState, useEffect } from 'react';
import { getData } from './utils/api';
import {Button, Container} from 'react-bootstrap';
import QuestionList from './components/QuestionsList';
import Score from './components/Score';

function App() {
  const [questions, setQuestions] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false)

  const QUESTION_TIME = 5;

    useEffect(() => {
        getData('/questions')
          .then(res => setQuestions(res))
          
    },[])

    useEffect(() => {
      if (quizStarted) {
        const interval = setInterval(() => {
              setTimer(prev => {
            if (prev >0) {
              return prev - 1;
            }
            if (currentQuestion === questions.length - 1) {
              setQuizStarted(false);
              setQuizEnd(true)
            } else {
              setCurrentQuestion(prev => prev + 1)
            }     
            return QUESTION_TIME;
          })
        },1000);

        return () => clearInterval(interval);
      }
    },[quizStarted,currentQuestion])



    const onStartButtonClick = () => {
        setQuizStarted(true);
        setCurrentQuestion(0);
        setScore(0);
        setQuizEnd(false);

    }

    // const handleAnwerQuestion = (aswerId) => {

    // }

    const handleAnswerQuestion = (answerId) => {
      if (answerId === questions[currentQuestion].answerId) {
        setScore(prev => prev + 1);
      }
    };

    const handleNextQuestion = () => {
        if (currentQuestion === questions.length - 1) {
            setQuizStarted(false);
            setQuizEnd(true)
            return
            
        }
        setCurrentQuestion(prev => prev + 1)
    }

  return (
    <Container> 

        <h1>Vilnius coding school</h1>
        <h3>Quiz app</h3>
        <p>Start test</p>
        { (!quizStarted && !quizEnd) && <Button onClick={onStartButtonClick}>  Start </Button> }
         {quizStarted && <QuestionList 
         timer={timer}
         questions={questions}
         current={currentQuestion}
         handleAnswerQuestion={handleAnswerQuestion}
         handleNextQuestion={handleNextQuestion}/>}
        { quizEnd && <Score
         score={score}
         restartButtonClick={onStartButtonClick}/>}
    </Container>
  )
}

export default App
