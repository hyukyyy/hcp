import { Button } from "antd";

const Intro = ({ nextPage }) => {
  return (
    <div
      style={{
        flex: 1,
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
          <div
            style={{
              fontSize: "6rem",
              marginBottom: "3rem",
              fontFamily: "'Petit Formal Script', 'cursive'",
            }}
          >
            HCP evaluation
          </div>
          <div
            style={{
              flex: 1,
              width: "100%",
              fontSize: "8rem",
              marginBottom: "3rem",
              textOverflow: "unset",
              fontFamily: "'Nanum Brush Script', 'cursive'",
            }}
          >
            어쩌구 저쩌구 검사 설명... 어쩌구 저쩌구 검사 설명... 어쩌구 저쩌구
            검사 설명... 어쩌구 저쩌구 검사 설명... 어쩌구 저쩌구 검사 설명...
            어쩌구 저쩌구 검사 설명... 어쩌구 저쩌구 검사 설명... 어쩌구 저쩌구
            검사 설명... 어쩌구 저쩌구 검사 설명... 어쩌구 저쩌구 검사 설명...
            어쩌구 저쩌구 검사 설명... 어쩌구 저쩌구 검사 설명... 어쩌구 저쩌구
            검사 설명...
          </div>
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
            검사시작
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
