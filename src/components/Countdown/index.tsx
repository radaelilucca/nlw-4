import React, { useContext, useEffect, useState } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import { CountdownContext } from "../../contexts/CountdownContext";

import S from "./styles.module.scss";

const Countdown: React.FC = () => {
  const {
    timer,
    resetCountdown,
    setActive,
    isActive,
    hasFinished,
  } = useContext(CountdownContext);

  const [minutesLeft, minutesRight] = String(Math.floor(timer / 60))
    .padStart(2, "0")
    .split("");
  const [secondsLeft, secondsRight] = String(timer % 60)
    .padStart(2, "0")
    .split("");

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
