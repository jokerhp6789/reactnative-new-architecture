import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@screens/home/HomeScreen";
import Map from "@screens/map/Map";

const Tab = createBottomTabNavigator();

export default (
    <Tab.Navigator>
        <Tab.Screen name="home" component={HomeScreen} />
        <Tab.Screen name="about" component={HomeScreen} />
        <Tab.Screen name="map" component={Map} />
    </Tab.Navigator>
);
