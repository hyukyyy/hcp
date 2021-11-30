import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Radio } from "antd";
import { useState } from "react";

const Questions = ({ question, nextPage }) => {
  const [answer, setAnswer] = useState(50);
  const [noAnswerAlert, setNoAnswerAlert] = useState(false);

  return (
    <div
      style={{
        flex: 1,
        background: "#FBF7E9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        fontFamily: "'Yeon Sung', 'cursive'",
      }}
    >
      <div
        style={{
          width: "90%",
          height: "80%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
          marginBottom: 10,

          borderWidth: 2,
          borderStyle: "dashed",
          borderColor: "#333333",
        }}
      >
        <div
          style={{
            width: "80%",
            height: 860,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: 30, marginBottom: "3rem", marginTop: 20 }}>
            {question.title}
          </div>
          <Radio.Group
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          >
            {question.selections.map((selection, idx) => {
              return (
                <Radio
                  value={idx}
                  style={{
                    display: "block",
                    fontSize: 30,
                    marginBottom: "3rem",
                  }}
                >
                  {selection.text}
                </Radio>
              );
            })}
          </Radio.Group>
          {noAnswerAlert && (
            <div style={{ color: "red", fontSize: 20 }}>
              * 답변을 선택해주세요 *
            </div>
          )}
          <Button
            onClick={() => {
              if (answer === 50) {
                setNoAnswerAlert(true);
                return;
              }
              nextPage();
              setAnswer(50);
              setNoAnswerAlert(false);
            }}
            style={{
              display: "flex",
              alignItems: "center",

              width: 150,
              height: 50,
              borderRadius: 100,
              borderWidth: 0,
              background: "#333333",
              color: "white",
              padding: 30,
              marginBottom: 10,

              fontSize: 20,
              fontFamily: "'Yeon Sung', 'cursive'",
            }}
          >
            <div
              style={{
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              다음문항 <ArrowRightOutlined />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
