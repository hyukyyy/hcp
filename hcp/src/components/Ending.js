const Ending = ({ nextPage }) => {
  return (
    <div
      style={{
        flex: 1,
        background: "#FBF7E9",
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
            Evaluation ending
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
            여기에 영상이 들어가면 좋을 것 같다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ending;
