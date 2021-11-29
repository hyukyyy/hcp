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

        fontFamily: "'Nanum Brush Script', 'cursive'",
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
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {timeCount ? <FakeCounting /> : <Finale />}
            {showFinal && (
              <Video className="" src={require("../img/testing.mp4").default} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ending;
