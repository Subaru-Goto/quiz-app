import { useId, useState, useEffect } from "react"
function Quiz() {
  const id = useId();
  const [questions, setQuestions] = useState([]);
  
  useEffect(() => {
    const getQuestions = async () => {
      try {
        const response = await fetch(
          "https://opentdb.com/api.php?amount=5&type=multiple"
        );
        const data = await response.json();
        setQuestions(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    getQuestions();
  }, []);

  // const createChoices = () => {
  //   "correct_answer":"Typewriters","incorrect_answers":[]
  // }

  console.log(questions)

  return (
    <div className="quiz--container">
      <form>
      <h2>How would one say goodbye in spanish?</h2>
        <div className="form--card">
          <input
            type="radio"
            id={"option1"}
            name="placeholder"
            className="radio-input"
          />
          <label htmlFor={"option1"} className="radio-label">
            Option 1
          </label>

          <input
            type="radio"
            id={"option2"}
            name="placeholder"
            className="radio-input"
          />
          <label htmlFor={"option2"} className="radio-label">
            Option 2
          </label>

          <input
            type="radio"
            id={"option3"}
            name="placeholder"
            className="radio-input"
          />
          <label htmlFor={"option3"} className="radio-label">
            Option 3
          </label>

          <input
            type="radio"
            id={"option4"}
            name="placeholder"
            className="radio-input"
          />
          <label htmlFor={"option4"} className="radio-label">
            Option 4
          </label>

          <input
            type="radio"
            id={"option5"}
            name="placeholder"
            className="radio-input"
          />
          <label htmlFor={"option5"} className="radio-label">
            Option 5
          </label>
        </div>
      </form>
    </div>
  ); 
}

export default Quiz;
