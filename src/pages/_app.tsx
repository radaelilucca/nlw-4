import { ChallengesProvider } from "../contexts/ChallengesContext";
import "../style/global.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default MyApp;
