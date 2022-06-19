import React from "react";
import { AuthProvider } from "./Components/Context/AuthContext";
import AppNav from "./Components/Navigation/AppNav";

export default function App() {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}
