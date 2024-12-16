import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "../screens/loginScreen";
import SignUpScreen from "../screens/signUpScreen";
import DashboardScreen from "../screens/dashboardScreen";
import TransferScreen from "../screens/transferScreen";
import TopUpScreen from "../screens/topUpScreen";
import IonIcons from "react-native-vector-icons/Ionicons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboards"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Dashboards") {
            iconName = focused ? "home-sharp" : "home-outline";
          } else if (route.name === "Transfer") {
            iconName = focused ? "paper-plane" : "paper-plane-outline";
          } else if (route.name === "TopUp") {
            iconName = focused ? "wallet" : "wallet-outline";
          }

          return (
            <IonIcons name={iconName} size={size} color={color}></IonIcons>
          );
        },
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Dashboards" component={DashboardScreen} />
      <Tab.Screen name="Transfer" component={TransferScreen} />
      <Tab.Screen name="TopUp" component={TopUpScreen} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Dashboards"
          component={TabNav}
          screenOptions={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
