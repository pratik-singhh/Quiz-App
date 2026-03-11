import { useState } from 'react'
import './App.css'
import QuestionCards from './components/QuestionCards'

import Questions from './data/Questions.js'

import Result from './components/Result'
import StartScreen from './components/StartScreen'

function App() {

  const [score, setScore] = useState(0);

  const [stage, setStage] = useState("start");    //This is to determine what part of the quiz we are on . 

  const [currentquestion, setCurrentQuestion] = useState(0); //This is to determine which question no we are on .

  function reset() {
    setScore(0);
    setStage("start");
    setCurrentQuestion(0);
  }


  function handleAnswer(attempt) {

    console.log(currentquestion);
    if (attempt === null) {

      setScore((s) => s);

    }
    else if (attempt === Questions[currentquestion].correctIndex) {
      console.log("Correct");
      setScore((s) => s + 1);
    }
    else {
      console.log("Incorrect");
      setScore((s) => s);
    }
    if (currentquestion < Questions.length - 1) {

      setCurrentQuestion((qNo) => qNo + 1);
    }
    else {
      setStage("result");
    }

  }

  return (
    <>
      <div>


        {stage === "start" && <StartScreen startAction={setStage} />}


        {stage === "quiz" && <QuestionCards currentquestion={currentquestion} attempt={handleAnswer} question={Questions[currentquestion]} />}
        {stage === "result" && <Result score={score} total={Questions.length} restart={reset} />}


      </div>
    </>
  )
}

export default App
