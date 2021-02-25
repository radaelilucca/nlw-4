import React, { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import { CountdownContext } from "../../contexts/CountdownContext";

import S from "./styles.module.scss";

const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );

  const { resetCountdown } = useContext(CountdownContext);

  const handleChallengeFinished = (hasSucceed) => {
    if (hasSucceed) {
      completeChallenge();
      resetCountdown();
    } else {
      resetChallenge();
      resetCountdown();
    }
  };

  return (
    <div className={S.container}>
      {!activeChallenge ? (
        <div className={S.containerNotActive}>
          <strong>Finalize um ciclo para receber um desafio </strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Complete os desafios e ganhe experiência para chegar ao próximo
            nível
          </p>
        </div>
      ) : (
        <div className={S.containerActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={S.containerActiveFailedButton}
              onClick={() => handleChallengeFinished(false)}
            >
              Falhei
            </button>
            <button
              type="button"
              className={S.containerActiveCompleteButton}
              onClick={() => handleChallengeFinished(true)}
            >
              Completei
            </button>
          </footer>
        </div>
      )}
    </div>
  );
};

export default ChallengeBox;
