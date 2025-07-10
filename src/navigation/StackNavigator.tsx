import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screens/Home";
import { Form } from "../screens/Form";

export type RootStackParamList = {
  HomeScreen: undefined;
  FormScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="FormScreen" component={Form} />
    </Stack.Navigator>
  );
}
