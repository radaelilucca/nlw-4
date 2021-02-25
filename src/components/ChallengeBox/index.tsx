import React from "react";

import S from "./styles.module.scss";

const hasActive = true;

const ChallengeBox: React.FC = () => {
  return (
    <div className={S.container}>
      {!hasActive ? (
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
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg" alt="" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos.</p>
          </main>

          <footer>
            <button
              type="button"
              className={S.containerActiveFailedButton}
              onClick={() => {}}
            >
              Falhei
            </button>
            <button
              type="button"
              className={S.containerActiveCompleteButton}
              onClick={() => {}}
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
