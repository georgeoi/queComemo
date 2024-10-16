import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./screens/MainScreen";
import ResultsScreen from "./screens/ResultsScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} options={{ title: 'Meal Planner' }} />
        <Stack.Screen name="Results" component={ResultsScreen} options={{ title: 'Meal Suggestions' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
