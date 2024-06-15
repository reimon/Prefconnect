// App.js
import { StatusBar } from "expo-status-bar";
import React from "react";
import Navigation from "./Navigation";
import { AuthProvider } from "./AuthContext"; // Importar o AuthProvider

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
      <StatusBar style="auto" />
    </AuthProvider>
  );
}
