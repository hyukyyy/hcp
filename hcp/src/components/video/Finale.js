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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 30,
          fontSize: 30,
        }}
      >
        분석결과
      </div>
      <div
        style={{
          fontSize: 20,
        }}
      >
        {timePass >= 1 && (
          <div style={{ marginBottom: 20 }}>
            '@chaenchaenii_i' 님의 분석결과입니다.
          </div>
        )}
        {timePass >= 3 && (
          <div style={{ marginBottom: 20 }}>
            '@chaenchaenii_i' 님의 마음은..
          </div>
        )}
        {timePass >= 5 && (
          <div style={{ marginBottom: 20 }}>
            어렵네요. 솔직히 잘 모르겠습니다.
          </div>
        )}
        {timePass >= 8 && (
          <div style={{ marginBottom: 20 }}>당황하셨나요...?</div>
        )}
        {timePass >= 10 && (
          <div style={{ marginBottom: 20 }}>
            지금쯤 이게 뭐지...? 라고 생각하실 것 같은데
          </div>
        )}
        {timePass >= 12 && (
          <div style={{ marginBottom: 20 }}>
            그런 채은님을 위해 준비했습니다!
          </div>
        )}
        {timePass >= 15 && (
          <div style={{ marginBottom: 20 }}>
            아마도 지금 앞에 계실 멋진 남성분이 꼭 하고싶은 말이 있대요!
          </div>
        )}
        {timePass >= 18 && (
          <div style={{ marginBottom: 20 }}>한번 들어보실래요?</div>
        )}
        {timePass >= 20 && (
          <Button
            onClick={() => getFinal()}
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

              fontSize: 20,
              fontFamily: "'Yeon Sung', 'cursive'",
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
