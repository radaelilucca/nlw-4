import React, { useEffect, useState } from "react";

import S from "./styles.module.scss";

let countdownTimeout: NodeJS.Timeout;

const Countdown: React.FC = () => {
  const [timer, setTimer] = useState(60 * 25);
  const [isActive, setActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const [minutesLeft, minutesRight] = String(Math.floor(timer / 60))
    .padStart(2, "0")
    .split("");
  const [secondsLeft, secondsRight] = String(timer % 60)
    .padStart(2, "0")
    .split("");

  const resetCountdown = () => {
    clearTimeout(countdownTimeout);
    setActive(false);
    setTimer(60 * 25);
  };

  useEffect(() => {
    if (isActive && timer > 0) {
      countdownTimeout = setTimeout(() => {
        setTimer((prevState) => prevState - 1);
      }, 1);
    } else if (isActive && timer === 0) {
      console.log("finished");
      setActive(false);
      setHasFinished(true);
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
      {hasFinished ? (
        <button disabled className={S.startButton}>
          Ciclo encerrado
        </button>
      ) : (
        <>
          {!isActive ? (
            <button
              type="button"
              className={S.startButton}
              onClick={() => setActive(true)}
            >
              Iniciar um ciclo
            </button>
          ) : (
            <button
              type="button"
              className={`${S.startButton}  ${S.stopButton}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Countdown;
