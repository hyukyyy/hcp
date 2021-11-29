import {
    AudioMutedOutlined,
    PauseCircleOutlined,
    PlayCircleOutlined,
    SoundOutlined
} from "@ant-design/icons";
import React, { memo, useState } from "react";
import ProgressBar from "./ProgressBar";
import toTimeString from "./totimeString";

const Controlbar = ({
  onProgressChange,
  onPlayIconClick,
  totalTime,
  currentTime,
  startTime,
  showControl,
  nowPlaying,
  videoElement,
}) => {
  const [volumeClicked, setVolumeClicked] = useState(false);

  // volume 클릭 관련 함수
  const handleVolume = () => {
    if (volumeClicked) {
      if (videoElement) {
        videoElement.muted = true;
      }
      setVolumeClicked(false);
    } else {
      if (videoElement) {
        videoElement.muted = false;
      }
      setVolumeClicked(true);
    }
  };

  // 마우스를 올렸을때 실행되는 함수
  const onMouseUp = () => {
    if (videoElement) {
      // controller를 옮긴 시점에 currentTime이 최신화 되지 않아, 이를 위해 수정
      videoElement.currentTime = currentTime;
      nowPlaying ? videoElement.play() : videoElement.pause();
    }
  };

  // 마우스를 내렸을때 실행되는 함수
  const onMouseDown = () => {
    if (videoElement) {
      videoElement.pause();
    }
  };

  return (
    <>
      <div
        className="controlBar"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <span className="text starttime">{toTimeString(startTime)}</span>
        <ProgressBar
          max={totalTime}
          value={currentTime}
          className="progressBar"
          onChange={onProgressChange}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
        />
        <span className="endTime">{toTimeString(totalTime)}</span>
        <img
          className="volume"
          src={volumeClicked ? <SoundOutlined /> : <AudioMutedOutlined />}
          onClick={handleVolume}
        />
      </div>
      <div className="playWrapper">
        <div className="playBg">
          <img
            className="playIcon"
            src={nowPlaying ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
            onClick={onPlayIconClick}
          />
        </div>
      </div>
    </>
  );
};

export default memo(Controlbar);
