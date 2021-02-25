import { ExperienceBar } from "../components/ExperienceBar";
import Profile from "../components/Profile";

import S from "../style/pages/Home.module.scss";

export default function Home() {
  return (
    <div className={S.container}>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
        </div>
        <div></div>
      </section>
    </div>
  );
}
