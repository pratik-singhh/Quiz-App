function StartScreen({ startAction }) {

  return (
    <div>
      <h1 id="StartQuiz">
        Welcome to the Pokemon Quiz.
      </h1>
      <button className="startBtn" onClick={() => startAction("quiz")} type="button"> Start Quiz</button>
      <h1>
        Made by Pratik.
      </h1>
    </div>
  )
}

export default StartScreen
