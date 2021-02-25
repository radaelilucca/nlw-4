import Head from "next/head";
import {
  Profile,
  ExperienceBar,
  CompletedChallenges,
  Countdown,
  ChallengeBox,
} from "../components";
import { CountdownProvider } from "../contexts/CountdownContext";

import S from "../style/pages/Home.module.scss";

export default function Home() {
  return (
    <div className={S.container}>
      <Head>
        <title>Início - move.it</title>
      </Head>

      <ExperienceBar />
      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  );
}
