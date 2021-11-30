import { useState } from "react";
import Ending from "./components/Ending";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Questions from "./components/Questions";
import questions from "./static/questions";
import "./styles/index.css";
import "./styles/reset.css";

function App() {
  const questionLength = questions.length;
  const [index, setIndex] = useState(15);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: 420,
        fontFamily: "'Yeon Sung', 'cursive'",
      }}
    >
      <Header />
      <div style={{ height: 660 }}>
        {index === 0 ? (
          <Intro nextPage={() => setIndex(index + 1)} />
        ) : index === questionLength ? (
          <Ending />
        ) : (
          <Questions
            question={questions[index]}
            nextPage={() => setIndex(index + 1)}
            skipQuestion={() => setIndex(index + 2)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
