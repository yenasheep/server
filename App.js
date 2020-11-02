import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
//import TabStackScreen from "./app/routers/TabStackScreen";
import DrawerStackScreen from "./app/routers/DrawerStackScreen";
import { createStackNavigator } from "@react-navigation/stack";
//import communityTabStackScreen from "./app/routers/StoreTabStackScreen";
//import LoginScreen from "./app/screens/LoginScreen";
import TabStackScreen from './app/routers/TabStackScreen';
import LoginScreen from './app/screens/LoginScreen';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <MyStack />
      </SafeAreaView>
    </NavigationContainer>
  );
}


const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Drawer" component={DrawerStackScreen} />
      <Stack.Screen name="tab" component={TabStackScreen} />
      
    </Stack.Navigator>
  );
  }