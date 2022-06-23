import React from "react";

import { ImageBackground, View } from "react-native";
import DrawerContent from "./DrawerContent";
import { NavigationContainer, Link } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import StackNavigation from "./StackNavigation";
import CustomerProfile from "../Customer/CustomerProfile";
import Home from "../Customer/Home";
import DriverList from "../DriverList/DriverList";

import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Settings from "../Settings";

const Drawer = createDrawerNavigator();

const Navigation = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
        screenOptions={{
          headerTitle: "",
          drawerType: "slide",
          drawerPosition: "right",
          headerStyle: { backgroundColor: "#2c9dd1" },
          drawerStyle: { backgroundColor: "#fff5ee" },
          drawerActiveTintColor: "black",
          drawerInactiveTintColor: "#7d7d7d",
          drawerActiveBackgroundColor: "#d3d3d3",
        }}
      >
        <Drawer.Screen
          name="Stack"
          component={StackNavigation}
          options={{
            drawerItemStyle: { display: "none" },
          }}
        />
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({ focused, size }) => (
              <AntDesign
                name="home"
                size={size}
                color={focused ? "#000" : "#7d7d7d"}
              />
            ),
            headerRight: () => (
              <Link style={{ marginRight: 15 }} to={{ screen: "Profile" }}>
                <ImageBackground
                  source={require("../../assets/profile.jpg")}
                  style={{ width: 35, height: 35 }}
                  imageStyle={{ borderRadius: 25 }}
                />
              </Link>
            ),
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={CustomerProfile}
          options={{
            drawerIcon: ({ focused, size }) => (
              <AntDesign
                name="user"
                size={size}
                color={focused ? "#000" : "#7d7d7d"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="DriverList"
          component={DriverList}
          options={{
            title: "Drivers List",
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="list-outline"
                size={size}
                color={focused ? "#000" : "#7d7d7d"}
              />
            ),
            headerShown: null,
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{
            title: "Settings",
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="settings-outline"
                size={size}
                color={focused ? "#000" : "#7d7d7d"}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
