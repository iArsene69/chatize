import Main from "pages/Main";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    BarlowCondensed: require("./assets/fonts/BarlowCondensed-Regular.ttf"),
  });

  if (!loaded) return null;
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
}
