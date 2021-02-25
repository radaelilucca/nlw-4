import { createContext, useState, ReactNode, useEffect } from "react";

import challenges from "../data/challenges.json";

interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}
interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  experienceToNextLevel: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}
export const ChallengesContext = createContext({} as ChallengesContextData);

export const ChallengesProvider: React.FC = ({
  children,
}: ChallengesProviderProps) => {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  const levelUp = () => {
    return setLevel((prevState) => prevState + 1);
  };

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);

    new Audio("/notification.mp3").play();

    if (Notification.permission === "granted") {
      new Notification("Novo desafio 🥳", {
        body: `Valendo ${challenge.amount}xp!`,
      });
    }
  };

  const resetChallenge = () => {
    setActiveChallenge(null);
  };

  const completeChallenge = () => {
    console.log("check");
    if (activeChallenge) {
      const { amount } = activeChallenge;

      let finalExperience = currentExperience + amount;

      if (finalExperience >= experienceToNextLevel) {
        levelUp();

        finalExperience = finalExperience - experienceToNextLevel;
      }

      setCurrentExperience(finalExperience);
      setActiveChallenge(null);
      setChallengesCompleted((prevState) => prevState + 1);

      // FIXME:
    }
  };

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        experienceToNextLevel,
        levelUp,
        startNewChallenge,
        resetChallenge,
        completeChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};
