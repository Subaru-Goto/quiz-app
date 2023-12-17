import { useState, useEffect } from "react"
import Quiz from "./Quiz"
import LoadingPage from "./LoadingPage"

function QuizPage() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isFinalAnswer, setIsFinalAnswer] = useState(false);

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

  const getQuestions = async () => {
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=5&type=multiple"
      );
      const data = await response.json();
      const newData = addAllAnswers(data.results)
      setQuestions(newData);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getQuestions(); 
  }, []); 

  const handleAnswerClick = (question, answer) => {
    setSelectedAnswers(prevAnswers => ({
      ...prevAnswers,
      [question]: answer
    }));
  }

  const handleCheckAnswers = () => {
    const newState = !isFinalAnswer;
    setIsFinalAnswer(newState);
    if(!newState) {
      getQuestions();
      setSelectedAnswers([]);
      window.scrollTo(0, 0)
    }
  }

  const questionData = questions.map((question, index)=> {
    return (<Quiz
            data={question}
            key={index}
            handleAnswerClick={handleAnswerClick}
            selectedAnswers={selectedAnswers}
            isFinalAnswer={isFinalAnswer}
            questionIndex={index}/>)
  })

  return (
    <div className="quiz--container">
      {isLoading ? <LoadingPage /> : questionData}
      {!isLoading && <button
       className="checkAnswer--btn"
       onClick={handleCheckAnswers}>
        {!isFinalAnswer?"Check Answers":"Try another quiz"}
      </button>}
    </div>
  )
}

export default QuizPage;
