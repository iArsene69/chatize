import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Chat from "./ChatScreens";
import Contacts from "./ContactsScreen";

const Tab = createMaterialTopTabNavigator();

export default function TabApp() {
  return (
    <Tab.Navigator
      initialRouteName="Chat"
      screenOptions={{
        tabBarActiveTintColor: "#fff000",
        tabBarInactiveTintColor: '#d9d9d9',
        tabBarLabelStyle: { fontSize: 16, fontFamily: "BarlowCondensed" },
        tabBarStyle: { backgroundColor: "#151515" },
        tabBarIndicatorStyle: { backgroundColor: "#fff000" },
      }}
      sceneContainerStyle={{
        backgroundColor: '#1b1b1b'
      }}
    >
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{ tabBarLabel: "Chat" }}
      />
      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={{ tabBarLabel: "Contacts" }}
      />
    </Tab.Navigator>
  );
}
