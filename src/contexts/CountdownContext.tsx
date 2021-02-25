import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {
  timer: number;
  hasFinished: boolean;
  isActive: boolean;
  setActive: (boolean) => void;
  resetCountdown: () => void;
}
interface CountdownProviderProps {
  children: ReactNode;
}

let countdownTimeout: NodeJS.Timeout;

export const CountdownContext = createContext({} as CountdownContextData);

export const CountdownProvider = ({ children }: CountdownProviderProps) => {
  const [timer, setTimer] = useState(60 * 25);
  const [isActive, setActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const { startNewChallenge } = useContext(ChallengesContext);

  const resetCountdown = () => {
    clearTimeout(countdownTimeout);
    setActive(false);
    setTimer(60 * 25);
    setHasFinished(false);
  };

  useEffect(() => {
    if (isActive && timer > 0) {
      countdownTimeout = setTimeout(() => {
        setTimer((prevState) => prevState - 1);
      }, 1000);
    } else if (isActive && timer === 0) {
      console.log("finished");
      setActive(false);
      setHasFinished(true);
      startNewChallenge();
    }
  }, [isActive, timer]);

  return (
    <CountdownContext.Provider
      value={{ timer, hasFinished, isActive, setActive, resetCountdown }}
    >
      {children}
    </CountdownContext.Provider>
  );
};
