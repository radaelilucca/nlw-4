import React, { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";

import S from "./styles.module.scss";

const CompletedChallenges: React.FC = () => {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={S.container}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
};

export default CompletedChallenges;
