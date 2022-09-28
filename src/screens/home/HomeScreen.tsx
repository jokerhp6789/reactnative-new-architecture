import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Button, Text, View } from "react-native";

export interface IHomeScreenProps {
    [key: string]: any;
}

const HomeScreen: React.FC<IHomeScreenProps> = ({ text, test }) => {
    const navigate = useNavigation();
    console.log({ test });
    return (
        <View>
            <Text>{text || "Home Screen"}</Text>
            <Button
                onPress={() => {
                    navigate.navigate("about", { test: "props" });
                }}
                title="Navigate to"
            />
        </View>
    );
};

export default HomeScreen;
