import { createContext, useState, ReactNode, useEffect } from "react";
import Cookie from "js-cookie";

import challenges from "../data/challenges.json";
import LevelUpModal from "../components/LevelUpModal";

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
  closeLevelUpModal: () => void;
}

interface ChallengesProviderProps {
  level: number;
  challengesCompleted: number;
  currentExperience: number;
  children: ReactNode;
}
export const ChallengesContext = createContext({} as ChallengesContextData);

export const ChallengesProvider = ({
  children,
  ...rest
}: ChallengesProviderProps) => {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(rest.level ?? 0);
  const [challengesCompleted, setChallengesCompleted] = useState(
    rest.level ?? 0
  );
  const [activeChallenge, setActiveChallenge] = useState(null);

  const [isModalOpen, setModalOpen] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    Cookie.set("level", String(level));
    Cookie.set("challengesCompleted", String(challengesCompleted));
    Cookie.set("currentExperience", String(currentExperience));
  }, [level, challengesCompleted, currentExperience]);

  const levelUp = () => {
    setLevel((prevState) => prevState + 1);
    setModalOpen(true);
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

  const closeLevelUpModal = () => {
    setModalOpen(false);
  };

  const completeChallenge = () => {
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
        closeLevelUpModal,
      }}
    >
      {children}
      {isModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  );
};
