import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@screens/home/HomeScreen";
import Map from "@screens/map/Map";
import React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { IRoutesParamList } from "./interface/IRoutes";

const Stack = createNativeStackNavigator<IRoutesParamList>();
const Tab = createBottomTabNavigator();

function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    height: 80,
                    alignItems: "center",
                    marginTop: 5,
                },
            }}
        >
            <Tab.Screen name="home" component={HomeScreen} />
            <Tab.Screen name="about" component={HomeScreen} />
            <Tab.Screen name="map" component={Map} />
        </Tab.Navigator>
    );
}

export default Routes;
