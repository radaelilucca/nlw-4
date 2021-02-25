import React, { useEffect, useState } from "react";

import S from "./styles.module.scss";

const Countdown: React.FC = () => {
  const [timer, setTimer] = useState(60 * 25);
  const [isActive, setActive] = useState(false);

  const [minutesLeft, minutesRight] = String(Math.floor(timer / 60))
    .padStart(2, "0")
    .split("");
  const [secondsLeft, secondsRight] = String(timer % 60)
    .padStart(2, "0")
    .split("");

  useEffect(() => {
    if (isActive && timer > 0) {
      setTimeout(() => {
        setTimer((prevState) => prevState - 1);
      }, 1000);
    } else {
      setActive(false);
    }
  }, [isActive, timer]);

  return (
    <div className={S.container}>
      <div className={S.containerClock}>
        <div>
          <span>{minutesLeft}</span>
          <span>{minutesRight} </span>
        </div>
        <span className={S.spliter}>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </div>
      <button
        type="button"
        className={S.startButton}
        onClick={() => setActive(true)}
      >
        Start
      </button>
    </div>
  );
};

export default Countdown;
