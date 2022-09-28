import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@screens/home/HomeScreen";
import React from "react";
const Stack = createNativeStackNavigator();

function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen
                name="about"
                component={(props) => <HomeScreen {...props} text="About Us" />}
            />
        </Stack.Navigator>
    );
}

export default Routes;
