import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Customer/Home";
import HomeDriver from "./Driver/HomeDriver";
import DriverProfile from "./Driver/DriverProfile";
import UpdateProfileDriver from "./Driver/UpdateProfileDriver";
import CustomerProfile from "./Customer/CustomerProfile";
import UpdateCustomerProfile from "./Customer/UpdateCustomerProfile";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Navigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTransparent: true,
          headerTitle: "",
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="HomeDriver" component={HomeDriver} />
        <Stack.Screen name="DriverProfile" component={DriverProfile} />
        <Stack.Screen name="CustomerProfile" component={CustomerProfile} />
        <Stack.Screen
          name="UpdateProfileDriver"
          component={UpdateProfileDriver}
        />
        <Stack.Screen
          name="UpdateCustomerProfile"
          component={UpdateCustomerProfile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
