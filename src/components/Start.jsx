function Start({ setStart }) {
  const handleClick = () => {
    setStart(prevState => !prevState)
  }
  return (
    <div className="start--container">
      <h1>Test your knowledge!</h1>
      <p>
        When you start the quiz, there will be 5 questions. You have to choose
        the right answer from 4 answers.
      </p>
      <button className="start--btn" onClick={handleClick}>
        Start quiz
      </button>
    </div>
  );
}

export default Start;
