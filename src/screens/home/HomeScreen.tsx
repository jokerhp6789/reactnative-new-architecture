import { IRoutesParamList } from "@navigation/interface/IRoutes";
import { useNavigation } from "@react-navigation/core";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, Text, View } from "react-native";

export interface IHomeScreenProps
    extends Partial<NativeStackScreenProps<IRoutesParamList, "home">> {
    text?: string;
    test?: any;
}

const HomeScreen: React.FC<IHomeScreenProps> = ({
    text,
    test,
    navigation,
    route,
}) => {
    const navigate = useNavigation();
    console.log({ test });
    return (
        <View>
            <Text>{text || "Home Screen"}</Text>
            <Button
                onPress={() => {
                    // navigate.navigate("home", { test: "props" });
                    navigation?.navigate("about", { test: "awesome" });
                }}
                title="Navigate to"
            />
            <Button
                onPress={() => {
                    // navigate.navigate("home", { test: "props" });
                    navigation?.navigate("map", { test: "awesome" });
                }}
                title="Navigate to Map"
            />
        </View>
    );
};

export default HomeScreen;
