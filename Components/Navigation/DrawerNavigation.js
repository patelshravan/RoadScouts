import React from "react";
// import { StatusBar } from "react-native";
import DrawerContent from "./DrawerContent";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import StackNavigation from "./StackNavigation";

const Drawer = createDrawerNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      {/* <StatusBar backgroundColor="#2c9dd1" /> */}
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
        screenOptions={{
          headerTitle: "",
          drawerPosition: "right",
          headerShown: false,
          drawerStyle: {
            borderBottomStartRadius: 30,
          },
        }}
      >
        <Drawer.Screen name="HomeStack" component={StackNavigation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
