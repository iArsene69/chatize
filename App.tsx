import Main from "pages/Main";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import ChatPages from "pages/ChatPages";


const Stack = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    BarlowCondensed: require("./assets/fonts/BarlowCondensed-Regular.ttf"),
  });

  if (!loaded) return null;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="ChatPage" component={ChatPages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
