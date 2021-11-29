import { Button } from "antd";
import { useEffect, useState } from "react";

const Finale = ({ getFinal }) => {
  const [timePass, setTimePass] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setTimePass(1);
    }, 1000);

    setTimeout(() => {
      setTimePass(3);
    }, 3000);

    setTimeout(() => {
      setTimePass(5);
    }, 5000);

    setTimeout(() => {
      setTimePass(8);
    }, 8000);

    setTimeout(() => {
      setTimePass(10);
    }, 10000);

    setTimeout(() => {
      setTimePass(12);
    }, 12000);

    setTimeout(() => {
      setTimePass(15);
    }, 15000);

    setTimeout(() => {
      setTimePass(18);
    }, 18000);

    setTimeout(() => {
      setTimePass(20);
    }, 20000);
  }, []);

  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "90%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 100,
        }}
      >
        분석결과
      </div>
      <div
        style={{
          fontSize: "5rem",
        }}
      >
        {timePass >= 1 && <div>'@chaenchaenii_i' 님의 분석결과입니다.</div>}
        <br />
        {timePass >= 3 && <div>'@chaenchaenii_i' 님의 마음은..</div>}
        <br />
        {timePass >= 5 && <div>어렵네요. 솔직히 잘 모르겠습니다.</div>}
        <br />
        {timePass >= 8 && <div>당황하셨나요...?</div>}
        <br />
        {timePass >= 10 && (
          <div>지금쯤 이게 뭐지...? 라고 생각하실 것 같은데</div>
        )}
        <br />
        {timePass >= 12 && <div>그런 채은님을 위해 준비했습니다!</div>}
        <br />
        {timePass >= 15 && (
          <div>
            아마도 지금 앞에 계실 멋진 남성분이 꼭 하고싶은 말이 있대요!
          </div>
        )}
        <br />
        {timePass >= 18 && <div>한번 들어보실래요?</div>}
        <br />
        {timePass >= 20 && (
          <Button
            onClick={() => getFinal()}
            style={{
              width: "30rem",
              height: "10rem",
              borderRadius: 100,
              borderWidth: 0,
              background: "#333333",
              color: "white",
              padding: 30,

              fontSize: "5rem",
              fontFamily: "'Nanum Brush Script', 'cursive'",
            }}
          >
            <div style={{ color: "white" }}>꼭 눌러주세요</div>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Finale;
