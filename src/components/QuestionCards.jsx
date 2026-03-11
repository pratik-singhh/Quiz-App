import Timer from "./Timer"
function QuestionCards({ attempt, question }) {

  return (
    <>

      <div>
        <h1>{question.questionText}</h1>
      </div>

      {
        question.answerOptions.map((option, index) =>

          (<button onClick={() => attempt(index)} key={index}>{option}</button>)

        )
      }
    </>
  )
}

export default QuestionCards
