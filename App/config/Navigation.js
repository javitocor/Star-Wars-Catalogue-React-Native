import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Login from "../screens/Login";
import Items from "../screens/Items";
import ItemCard from "../screens/ItemCard";

const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Login" component={Login} />
    <MainStack.Screen name="Home" component={Home} />
    <MainStack.Screen name="Items" component={Items} />
    <MainStack.Screen name="ItemCard" component={ItemCard} />
  </MainStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
);