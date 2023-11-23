import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../MainScreen/Home";
import InfoScreen from "../InfoPage/InfoScreen";

const Stack = createStackNavigator(); // Create a stack navigator using createStackNavigator from React Navigation
function StackNavigator() {
  return (
    // Define the StackNavigator component
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="ImageIntel" // Name of the screen used for navigation
        component={Home} // Component to be rendered for this screen
        // options={{ headerShown: false }}
      />
      <Stack.Screen name="Info" component={InfoScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
