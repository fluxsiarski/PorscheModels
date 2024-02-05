import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import Home from "./screens/Home";
import Porsche911Turbo from "./screens/Porsche911Turbo";
import Porsche911GT3 from "./screens/Porsche911GT3";
import { Image, StatusBar } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Porsche models",
          }}
        />

        <Stack.Screen
          name="Porsche911Turbo"
          component={Porsche911Turbo}
          options={{
            title: "Porsche911Turbo",
          }}
        />

        <Stack.Screen
          name="Porsche911GT3"
          component={Porsche911GT3}
          options={{
            title: "Porsche911GT3",
          }}
        />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}

// Every screen component in app is provided with navigation prop automatically.
// Navigation prop has various methods to initiate navigation actions one of which is navigate
