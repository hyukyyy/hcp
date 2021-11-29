import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Radio } from "antd";

const Questions = ({ question, nextPage }) => {
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
          width: "90vw",
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          borderWidth: 5,
          borderStyle: "dashed",
          borderColor: "#333333",
        }}
      >
        <div
          style={{
            width: "80%",
            height: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: "7rem", marginBottom: "3rem" }}>
            {question.title}
          </div>
          <Radio.Group>
            {question.selections.map((selection) => {
              return (
                <Radio
                  style={{
                    display: "block",
                    fontSize: "7rem",
                    marginBottom: "3rem",
                  }}
                >
                  {selection.text}
                </Radio>
              );
            })}
          </Radio.Group>
          <Button
            onClick={() => nextPage()}
            style={{
              width: "30rem",
              height: "10rem",
              borderRadius: 100,
              borderWidth: 0,
              background: "#333333",
              color: "white",
              padding: 30,

              fontSize: "5rem",
              fontFamily: "'Yeon Sung', 'cursive'",
            }}
          >
            <div style={{ color: "white" }}>
              다음문항 <ArrowRightOutlined />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
