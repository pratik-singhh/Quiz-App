function StartScreen({ startAction }) {

  return (
    <div>
      <h1 id="StartQuiz">
        Start Quiz.
      </h1>
      <button className="startBtn" onClick={() => startAction("quiz")} type="button"> Start Quiz</button>
    </div>
  )
}

export default StartScreen
