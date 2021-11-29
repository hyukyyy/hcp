import { Button, Radio } from "antd";

const Questions = ({ question, nextPage }) => {
  return (
    <div
      style={{
        flex: 1,
        // background: "#F291A3",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        fontFamily: "'Nanum Brush Script', 'cursive'",
      }}
    >
      <div
        style={{
          //   background: "white",
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
          <div style={{ fontSize: "10rem", marginBottom: "3rem" }}>
            {question.title}
          </div>
          <Radio.Group>
            {question.selections.map((selection) => {
              return (
                <Radio
                  style={{
                    display: "block",
                    fontSize: "8rem",
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
              width: "15rem",
              height: "10rem",
              borderRadius: 20,

              fontSize: "5rem",
              fontFamily: "'Nanum Brush Script', 'cursive'",
            }}
          >
            다음문항
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
