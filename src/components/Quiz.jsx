import { Fragment, useId, useState, useEffect} from "react"
import {decode} from "html-entities";

function Quiz({ data, handleAnswerClick, selectedAnswers,
   isFinalAnswer, questionIndex}) {
  const { question, allAnswers, correct_answer } = data;
  const [decodedQuestion, setDecodedQuestion] = useState("");
  const [randomAnswers, setRandomAnswers] = useState([]);
  const id = useId();

  const randomizeArrayOrder = (arr) => {
    {/* random returns float value between 0 and 1,
    by reducing the return value with 5 will generate
    number between -0.5 and 0.5 
    and sort method copares each value
    and sort based on smaller value */}
    return arr.sort(() => Math.random() - 0.5);
  }

  useEffect (() => {
    // Generate random array only once
    setDecodedQuestion(decode(question));
    const decodedAnswers = allAnswers.map(answer => decode(answer));
    setRandomAnswers(randomizeArrayOrder(decodedAnswers))
  }, [data])

  const radioInputs = randomAnswers.map((answer, index) => {
    const selectedAnnswerArr = Object.values(selectedAnswers);
    const isSelectedAnswer = selectedAnnswerArr[questionIndex] === answer;
    const isCorrectAnswer = correct_answer === answer;

    let labelStyle = {};
    if (isFinalAnswer && isCorrectAnswer) {
      labelStyle.backgroundColor = "#11c973";
      labelStyle.color = "#fff";
      labelStyle.border = "1px solid #fff"
    } else if (isFinalAnswer && !isCorrectAnswer && isSelectedAnswer) {
      labelStyle.backgroundColor = "tomato";
      labelStyle.color = "#fff";
      labelStyle.border = "1px solid #fff"
    }

    return (
      <Fragment key={index}>
        <input
          type="radio"
          id={id + index}
          name="quizSelections"
          className="radio-input"
          disabled={isFinalAnswer}
          value={answer}
          onChange={() => {
            handleAnswerClick(decodedQuestion, answer);
          }
          }
          checked={selectedAnnswerArr[questionIndex] === answer}

        />
        <label
        htmlFor={id + index}
        className="radio-label"
        style={isFinalAnswer?labelStyle:{}}>
          {answer}
        </label>
    </Fragment>
    )
  })

  return (
    <>
      <form>
      <h2>{decodedQuestion}</h2>
        <div className="form--card">
          {radioInputs}
        </div>
      </form>
    </>
  )
}

export default Quiz;