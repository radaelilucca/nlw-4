import React from "react";

import S from "./styles.module.scss";

const CompletedChallenges: React.FC = () => {
  return (
    <div className={S.container}>
      <span>Desafios completos</span>
      <span>5</span>
    </div>
  );
};

export default CompletedChallenges;
