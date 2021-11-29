import { useState } from "react";
import Ending from "./components/Ending";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Questions from "./components/Questions";
import questions from "./static/questions";
import "./styles/reset.css";

function App() {
  const [index, setIndex] = useState(0);
  const questionLength = questions.length;

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />

      {index === 0 ? (
        <Intro nextPage={() => setIndex(index + 1)} />
      ) : index === questionLength ? (
        <Ending />
      ) : (
        <Questions
          question={questions[index]}
          nextPage={() => setIndex(index + 1)}
        />
      )}
    </div>
  );
}

export default App;
