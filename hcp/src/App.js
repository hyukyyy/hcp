import { useEffect, useState } from "react";
import xlsx from "xlsx";
import Ending from "./components/Ending";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Questions from "./components/Questions";
import questions from "./static/questions";
import "./styles/index.css";
import "./styles/reset.css";

function App() {
  const questionLength = questions.length;
  const [index, setIndex] = useState(0);
  const [answerList, setAnswerList] = useState([]);

  const onDownload = () => {
    const ws = xlsx.utils.json_to_sheet(answerList);
    const wb = xlsx.utils.book_new();
    ["질문", "답변 텍스트", "답변"].forEach((x, idx) => {
      const cellAdd = xlsx.utils.encode_cell({ c: idx, r: 0 });
      ws[cellAdd].v = x;
    });
    ws["!cols"] = [];
    xlsx.utils.book_append_sheet(wb, ws, "sheet1");
    xlsx.writeFile(wb, "answers.xlsx");
  };

  useEffect(() => {
    if (answerList.length === questionLength - 1) {
      onDownload();
    }
  }, [answerList]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: 420,
        fontFamily: "MaruBuri-Regular",
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
            answerList={answerList}
            setAnswerList={setAnswerList}
            questionLength={questionLength}
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
