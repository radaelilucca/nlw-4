import React from "react";

import S from "./styles.module.scss";

const Profile: React.FC = () => {
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
          Level 1
        </p>
      </div>
    </div>
  );
};

export default Profile;
