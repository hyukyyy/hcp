import { SyncOutlined } from "@ant-design/icons";

const FakeCounting = () => {
  return (
    <div
      style={{
        width: "80%",
        height: "30%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "30rem",
      }}
    >
      <SyncOutlined spin />
      <div style={{ fontSize: "5rem", marginTop: 100 }}>
        결과를 분석하는 중입니다...
      </div>
    </div>
  );
};

export default FakeCounting;
