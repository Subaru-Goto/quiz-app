import { useState, useEffect } from "react"
import Quiz from "./Quiz"

function QuizPage() {
  const [questions, setQuestions] = useState([]);

  const addAllAnswers = (dataArr) => {
    // Concatinate correct answer and incorrect answers
    // And add new key value pair
    const newDataArr = dataArr.map(data => {
      return {
        ...data,
        allAnswers:
         [...data.incorrect_answers, data.correct_answer]
      };
    });
    return newDataArr;
  }
  
  useEffect(() => {
    const getQuestions = async () => {
      try {
        const response = await fetch(
          "https://opentdb.com/api.php?amount=5&type=multiple"
        );
        const data = await response.json();
        const newData = addAllAnswers(data.results)
        setQuestions(newData);
      } catch (error) {
        console.error(error);
      }
    };
    getQuestions(); 
  }, []); 

  const questionData = questions.map(question => {
    return (<Quiz data={question}/>)
  })

  return (
    <div className="quiz--container">
      {questionData}
      <button className="checkAnswer--btn">Check Answers</button>
    </div>
  )
}

export default QuizPage;
