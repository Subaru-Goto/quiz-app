import Start from "./components/Start"
import Quiz from "./components/Quiz"
import { useState } from "react";
function App() {
  const [start, setStart] = useState(false);

  return <>{!start ? <Start setStart={setStart} /> : <Quiz />}</>;
}

export default App
