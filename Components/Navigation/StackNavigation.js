import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";

import Signup from "../Signup";
import Login from "../Login";
import Home from "../Customer/Home";
import HomeDriver from "../Driver/HomeDriver";
import DriverProfile from "../Driver/DriverProfile";
import UpdateProfileDriver from "../Driver/UpdateProfileDriver";
import CustomerProfile from "../Customer/CustomerProfile";
import UpdateCustomerProfile from "../Customer/UpdateCustomerProfile";
import ForgotPassword from "../ForgotPassword";
import DriverList from "../DriverList/DriverList";
import ConfirmEmail from "../ConfirmEmail";
import NewPassword from "../NewPassword";
import TermAndCond from "../TermAndCond";
import Requests from "../Driver/Requests";
const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <>
      <StatusBar backgroundColor="#2c9dd1" />
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: null,
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="CustomerProfile" component={CustomerProfile} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="TermsAndConditions" component={TermAndCond} />

        <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen
          name="UpdateCustomerProfile"
          component={UpdateCustomerProfile}
        />
        <Stack.Screen name="HomeDriver" component={HomeDriver} />
        <Stack.Screen name="DriverProfile" component={DriverProfile} />
        <Stack.Screen
          name="UpdateProfileDriver"
          component={UpdateProfileDriver}
        />
        <Stack.Screen name="DriverList" component={DriverList} />
        <Stack.Screen name="RequestPage" component={Requests} />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigation;
