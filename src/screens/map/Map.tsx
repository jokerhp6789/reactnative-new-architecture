import React from "react";
import { Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

// ...

export interface IMapProps {
    [key: string]: any;
}

const Map: React.FC<IMapProps> = ({}) => {
    return (
        <View style={{ flex: 1 }}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={{ flex: 1 }}
                showsCompass
                showsUserLocation
                showsMyLocationButton
                onPress={({ currentTarget, nativeEvent }) => {
                    const { coordinate, position } = nativeEvent;
                    console.log({ nativeEvent });
                    console.log({ currentTarget });
                }}
            >
                <Text>This is Marker</Text>
            </MapView>
        </View>
    );
};

export default Map;
