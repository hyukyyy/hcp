import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Intro = ({ nextPage }) => {
  return (
    <div
      style={{
        background: "#FBF7E9",
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        fontFamily: "'Yeon Sung', 'cursive'",
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
              fontSize: "5rem",
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
              fontSize: "5rem",
              marginBottom: "3rem",
              textOverflow: "unset",
              fontFamily: "'Yeon Sung', 'cursive'",
            }}
          >
            <div
              style={{
                display: "flex",
                height: 1200,
                // opacity: 0.5,
                fontSize: "5rem",
                color: "white",
                flexDirection: "column",
                marginBottom: 50,
              }}
            >
              <div
                style={{
                  flex: 4,
                  color: "white",
                  padding: 50,
                  background: "#333333",
                  borderRadius: 30,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 10,

                  borderColor: "grey",
                  borderStyle: "solid",
                  borderWidth: 1,
                }}
              >
                총 검사 시간은 10분 내외입니다.
              </div>
              <div
                style={{
                  flex: 4,
                  color: "black",
                  padding: 50,
                  background: "#FBF7E9",
                  borderRadius: 30,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 10,
                  borderColor: "grey",
                  borderStyle: "solid",
                  borderWidth: 1,
                }}
              >
                혹 질문이 마음에 들지 않더라도 <br />
                정직하게 답변하십시오.
              </div>
              <div
                style={{
                  flex: 4,
                  color: "white",
                  padding: 50,
                  background: "#FC674E",
                  borderRadius: 30,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 10,
                  borderColor: "grey",
                  borderStyle: "solid",
                  borderWidth: 1,
                }}
              >
                가능하면 답변 시 '중립'을 <br />
                선택하지 마십시오.
              </div>
              {/* <div
                style={{
                  flex: 4,
                  color: "white",
                  padding: 50,
                  background: "#3F96A3",
                  borderRadius: 30,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 10,
                  borderColor: "grey",
                  borderStyle: "solid",
                  borderWidth: 1,
                }}
              >
                * 교제 상대가 있는 경우, 상대에게 직접 질문하며 진행하실 경우
                정확도를 향상 시킬 수 있습니다.
              </div> */}
            </div>
            <div style={{ padding: 30, marginBottom: 50 }}>
              본 검사는 회원님의 질문에 대한
              <br />
              답과 활동을 기반으로 진행됩니다.
            </div>
            <div style={{ padding: 30 }}>
              더 자세한 정보를 원하실 경우
              <br />
              추가 링크를 이용해주세요.
            </div>
          </div>
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
              검사시작 <ArrowRightOutlined />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
