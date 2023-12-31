import { useEffect, useRef, useState } from "react";
import FakeCounting from "./FakeCounting";
import Finale from "./video/Finale";
import Video from "./video/Video";

const Ending = ({ nextPage }) => {
  const ref = useRef();
  const [showControl, setShowControl] = useState(false);

  const [timeCount, setTImeCount] = useState(true);
  const [showFinal, setShowFinal] = useState(false);

  useEffect(() => {
    setTimeout(() => setTImeCount(false), 3000);
  });

  const handleControlVisible = () => {
    if (!showControl) {
      setShowControl(true);
      setTimeout(() => {
        setShowControl(false);
      }, 2000);
    }
  };

  return (
    <div
      style={{
        flex: 1,
        background: "#FBF7E9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        fontFamily: "MaruBuri-Regular",
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
            height: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: 30,
              marginBottom: "3rem",
              marginTop: 20,
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
        fontFamily: "MaruBuri-Regular",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {!showFinal &&
              (timeCount ? (
                <FakeCounting />
              ) : (
                <Finale getFinal={() => setShowFinal(true)} />
              ))}
            {showFinal && (
              <Video
                className="video"
                src={require("../img/testing.mp4").default}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ending;
