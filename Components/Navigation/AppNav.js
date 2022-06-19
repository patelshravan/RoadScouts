import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";
import { AuthContext } from "../Context/AuthContext";
import AppStack from "./Navigation";
import Navigation from "./Navigation";

const AppNav = () => {
  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>;
  }
  return <>{userToken !== null ? <Navigation /> : <AppStack />}</>;
};

export default AppNav;
