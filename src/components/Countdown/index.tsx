import React from "react";

import S from "./styles.module.scss";

const Countdown: React.FC = () => {
  return (
    <div className={S.container}>
      <div>
        <span>2</span>
        <span>5</span>
      </div>
      <span className={S.spliter}>:</span>
      <div>
        <span>0</span>
        <span>0</span>
      </div>
    </div>
  );
};

export default Countdown;
