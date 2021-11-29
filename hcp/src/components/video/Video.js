import React, { memo, useEffect, useRef, useState } from "react";
import Controlbar from "./Controlbar";

const Video = ({ className, src }) => {
  const [nowPlaying, setNowPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControl, setShowControl] = useState(false);

  const ref = useRef();

  const totalTime = (ref && ref.current && ref.current.duration) || 0;
  const videoElement = ref && ref.current;

  //   const classProps = classNames(styles.video, className);

  const videoSrc = src || "";
  const startTime = Math.floor(currentTime);

  // 동영상 시간 업데이트 함수
  const addTimeUpdate = () => {
    const observedVideoElement = ref && ref.current;
    if (observedVideoElement) {
      observedVideoElement.addEventListener("timeupdate", function () {
        setCurrentTime(observedVideoElement.currentTime);
      });
      // 컴포넌트가 처음 마운트 될 때 동영상 시작 할지 말지 여부 (여기서는 시작되게 했음)
      setNowPlaying(true);
      observedVideoElement.play();
    }
  };

  useEffect(() => {
    addTimeUpdate();
  }, []);

  // progress 이동시켰을때 실행되는 함수
  const onProgressChange = (percent) => {
    if (!showControl) {
      setShowControl(true);
    }

    if (videoElement) {
      const playingTime = videoElement.duration * (percent / 100);

      setCurrentTime(playingTime);
    }
  };

  // play icon 클릭했을떄 실행되는 함수
  const onPlayIconClick = () => {
    if (videoElement) {
      if (nowPlaying) {
        setNowPlaying(false);
        videoElement.pause();
      } else {
        setNowPlaying(true);
        videoElement.play();
      }
    }
  };

  // control bar visible 관련 함수
  const handleControlVisible = () => {
    if (!showControl) {
      setShowControl(true);
      setTimeout(() => {
        setShowControl(false);
      }, 2000);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <video
        style={{
          position: "relative",
          width: "100%",
        }}
        loop={true}
        muted={true}
        ref={ref}
        playsInline={true}
        onClick={handleControlVisible}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <Controlbar
        onProgressChange={onProgressChange}
        onPlayIconClick={onPlayIconClick}
        totalTime={totalTime}
        currentTime={currentTime}
        startTime={startTime}
        showControl={showControl}
        nowPlaying={nowPlaying}
        videoElement={videoElement}
      />
    </div>
  );
};

export default memo(Video);
