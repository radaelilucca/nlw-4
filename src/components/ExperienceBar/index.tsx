import React from "react";

import S from "./styles.module.scss";

const ExperienceBar: React.FC = () => {
  return (
    <header className={S.experienceBar}>
      <span>0 xp</span>
      <div className={S.experienceBarProgress}>
        <div
          className={S.experienceBarProgressIndicator}
          style={{ width: "50%" }}
        />
        <span className={S.currentExperience} style={{ left: "50%" }}>
          300 xp
        </span>
      </div>
      <span>600 xp</span>
    </header>
  );
};

export default ExperienceBar;
