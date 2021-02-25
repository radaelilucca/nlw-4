import React, { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";

import S from "./styles.module.scss";

const ExperienceBar: React.FC = () => {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <header className={S.experienceBar}>
      <span>0 xp</span>
      <div className={S.experienceBarProgress}>
        <div
          className={S.experienceBarProgressIndicator}
          style={{ width: `${percentToNextLevel}%` }}
        />
        <span
          className={S.currentExperience}
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
};

export default ExperienceBar;
