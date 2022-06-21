import React from "react";
import AppStack from "./Components/Navigation/DrawerNavigation";
// import {
//   Provider as PaperProvider,
//   DarkTheme as PaperDarkTheme,
// } from "react-native-paper";

export default function App() {
  return (
    // <PaperProvider theme={PaperDarkTheme}>
    <AppStack />
    // </PaperProvider>
  );
}
