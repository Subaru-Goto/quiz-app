import { useId } from "react"
import {decode} from "html-entities";

function Quiz({ data }) {
  const { question, allAnswers } = data;
  const id = useId();

  const generateRandomFourIndex = (arr) => {
    {/* random returns float value between 0 and 1,
    by reducing the return value with 5 will generate
    number between -0.5 and 0.5 
    and sort method copares each value
    and sort based on smaller value */}
    return arr.sort(() => Math.random() - 0.5);
  }
  const randomAnswers = generateRandomFourIndex(allAnswers)

  return (
    <>
      <form>
        {/* Original question is encoded */}
      <h2>{decode(question)}</h2>
        <div className="form--card">
          <input
            type="radio"
            id={id + "1"}
            name={randomAnswers[0]}
            className="radio-input"
          />
          <label htmlFor={id + "1"} className="radio-label">
            {randomAnswers[0]}
          </label>

          <input
            type="radio"
            id={id + "2"}
            name={randomAnswers[1]}
            className="radio-input"
          />
          <label htmlFor={id + "2"} className="radio-label">
          {randomAnswers[1]}
          </label>

          <input
            type="radio"
            id={id + "3"}
            name={randomAnswers[2]}
            className="radio-input"
          />
          <label htmlFor={id + "3"} className="radio-label">
          {randomAnswers[2]}
          </label>

          <input
            type="radio"
            id={id + "4"}
            name={randomAnswers[3]}
            className="radio-input"
          />
          <label htmlFor={id + "4"} className="radio-label">
          {randomAnswers[3]}
          </label>
        </div>
      </form>
    </>
  )
}

export default Quiz;