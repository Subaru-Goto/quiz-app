import Start from "./components/Start"
import QuizPage from "./components/QuizPage"
import { useState } from "react";
function App() {
  const [start, setStart] = useState(false);

  return <>{!start ? <Start setStart={setStart} /> : <QuizPage />}</>;
}

export default App
