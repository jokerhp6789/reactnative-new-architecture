import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@screens/home/HomeScreen";
import { IMapProps } from "@screens/map/Map";
import React from "react";
import { IHomeScreenProps } from "../../screens/home/HomeScreen";

export type IRoutesParamList = {
    home: IHomeScreenProps;
    about: IHomeScreenProps;
    map: IMapProps;
};
