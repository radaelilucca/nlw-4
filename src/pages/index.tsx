import {
  Profile,
  ExperienceBar,
  CompletedChallenges,
  Countdown,
} from "../components";

import S from "../style/pages/Home.module.scss";

export default function Home() {
  return (
    <div className={S.container}>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>right</div>
      </section>
    </div>
  );
}
