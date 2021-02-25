import React, { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";

import S from "./styles.module.scss";

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={S.profileContainer}>
      <img
        className={S.profileContainerPicture}
        src="https://github.com/radaelilucca.png"
        alt="Lucca Radaeli"
      />
      <div className={S.profileContainerContent}>
        <strong>Lucca Radaeli</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </div>
  );
};

export default Profile;
