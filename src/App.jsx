import { useState } from 'react'
import './App.css'
import QuestionCards from './components/QuestionCards'
import Result from './components/Result'
import StartScreen from './components/StartScreen'

function App() {

  const [stage, setStage] = useState("start");
  return (
    <>
      <div>


        {stage === "start" && <StartScreen />}
        {stage === "quiz" && <QuestionCards />}
        {stage === "result" && <Result />}


      </div>
    </>
  )
}

export default App
