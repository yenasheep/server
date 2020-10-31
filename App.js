import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
//import TabStackScreen from "./app/routers/TabStackScreen";
import DrawerStackScreen from "./app/routers/DrawerStackScreen";
//import communityTabStackScreen from "./app/routers/StoreTabStackScreen";
//import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <DrawerStackScreen />
      </SafeAreaView>
    </NavigationContainer>
  );
}
