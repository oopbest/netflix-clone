import HomeScreen from "./HomeScreen";
import AuthScreen from "./AuthScreen";

function HomePage() {
  const auth = false;
  return <div>{auth ? <HomeScreen /> : <AuthScreen />}</div>;
}

export default HomePage;
