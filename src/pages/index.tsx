import { Profile, ExperienceBar, CompletedChallenges } from "../components";

import S from "../style/pages/Home.module.scss";

export default function Home() {
  return (
    <div className={S.container}>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
        </div>
        <div>right</div>
      </section>
    </div>
  );
}
