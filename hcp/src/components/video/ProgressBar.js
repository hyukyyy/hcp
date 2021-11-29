import React from "react";

const ProgressBar = ({
  max,
  value,
  className,
  onChange,
  onMouseDown,
  onMouseUp,
}) => {
  //   const classProps = classNames(styles.default, className);
  const percentNum = (value / max || 0) * 100;
  const percent = `${percentNum}%`;

  return (
    <div
    // className={classProps}
    >
      <div className="progressBar bar" style={{ width: percent }}>
        <input
          onChange={(e) => onChange(parseInt(e.target.value, 10))}
          onTouchStart={onMouseDown}
          onTouchEnd={onMouseUp}
          type="range"
          min="0"
          max="100"
          step="1"
          value={percentNum}
          className="controller"
        />
      </div>
    </div>
  );
};

export default ProgressBar;
