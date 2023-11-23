import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/Navigator/StackNavigator";

function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;
