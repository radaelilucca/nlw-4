import Head from "next/head";

import { GetServerSideProps } from "next";
import {
  Profile,
  ExperienceBar,
  CompletedChallenges,
  Countdown,
  ChallengeBox,
} from "../components";
import { CountdownProvider } from "../contexts/CountdownContext";

import S from "../style/pages/Home.module.scss";
import { ChallengesProvider } from "../contexts/ChallengesContext";

interface HomeProps {
  level: number;
  challengesCompleted: number;
  currentExperience: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
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
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(currentExperience),
    },
  };
};
