import { useState, useEffect } from "react"
import Timer from "./Timer"
function QuestionCards({ attempt, question, currentquestion }) {
  if (question === undefined) {
    return (null);
  }
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  function onExpire() {
    setSelectedAnswer(null);
    attempt(null);

  }



  return (
    <>
      <div>

        <div>
          <h1>{question.questionText}</h1>
        </div>
        <div>
          < Timer questionIndex={currentquestion} onExpire={onExpire} />
        </div>
        <div>


          {
            question.answerOptions.map((option, index) => {



              let disabled = selectedAnswer !== null;
              let isCorrect = index === question.correctIndex;
              let isSelected = index === selectedAnswer;
              let buttonClass = "";
              if (selectedAnswer !== null) {


                if (isCorrect) {
                  buttonClass = "green";
                }

                else if (isSelected) {

                  buttonClass = "red";
                }
              }


              return (<button className={buttonClass} disabled={disabled} onClick={() => {
                setSelectedAnswer(index);
                setTimeout(() => {

                  setSelectedAnswer(null);
                  attempt(index);
                }
                  , 1000)
              }

              }
                key={index}>{option}</button>)
            }
            )



          }
        </div>
      </div>
    </>
  )
}

export default QuestionCards
