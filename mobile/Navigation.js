// Navigation.js
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

import Map from "./components/Map";
import Profile from "./components/Profile";
import Services from "./components/services/Services";
import News from "./components/News";
import Contribute from "./components/constribute/Contribute";
import ServicePage from "./components/services/ServicePage";
import Login from "./components/Login";
import { useAuth } from "./AuthContext"; // Importar o contexto de autenticação

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const AuthStack = createStackNavigator();

function ServicesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ServicesMain"
        component={Services}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ServicePage"
        component={ServicePage}
        options={({ route }) => ({
          title: route.params.service.name,
          headerBackTitleVisible: false,
          headerBackTitle: " ",
        })}
      />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarBackground: () => (
          <LinearGradient
            colors={["#0000FF", "#EE82EE"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={StyleSheet.absoluteFill}
          />
        ),
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#bbb",
        tabBarStyle: {
          backgroundColor: "transparent",
        },
      }}
    >
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="map" size={size} color={color} />
          ),
          title: "Map",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
          title: "Perfil",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Contribute"
        component={Contribute}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="plus-circle" size={size} color={color} />
          ),
          title: "Contribuições",
        }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="newspaper-o" size={size} color={color} />
          ),
          title: "News",
        }}
      />
      <Tab.Screen
        name="Services"
        component={ServicesStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcon name="location-city" size={size} color={color} />
          ),
          title: "Serviços",
        }}
      />
    </Tab.Navigator>
  );
}

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={MyTabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function AuthStackScreen() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
}

export default function Navigation() {
  const { isLoggedIn } = useAuth(); // Usar o contexto de autenticação

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <AuthStackScreen />}
    </NavigationContainer>
  );
}
