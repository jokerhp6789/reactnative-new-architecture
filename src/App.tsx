/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
// import { ApolloProvider } from "@apollo/client";
// import { Colors } from "d-react-native-styles";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// import SplashScreen from "react-native-splash-screen";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import InitComponent from "./InitComponent";
// import MessagingComponent from "./MessagingComponent";
// import Routes from "./navigation/Routes";
// import API from "./network/API";
// import PermissionComponent from "./PermissionComponent";
// import store, { persistor } from "./store/store";
import Routes from "./navigation/Routes";

const App = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                {/* <ApolloProvider client={API.instance}> */}
                <StatusBar barStyle="dark-content" translucent />
                <SafeAreaView
                    style={{ flex: 1, backgroundColor: "white" }}
                    edges={["top"]}
                >
                    <Routes />
                </SafeAreaView>
                {/* <PermissionComponent />
            <MessagingComponent />
            <InitComponent /> */}
                {/* </ApolloProvider> */}
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

// const AppWithStore = () => {
//     return (
//         <Provider store={store}>
//             <PersistGate persistor={persistor}>
//                 <App />
//             </PersistGate>
//         </Provider>
//     );
// };

export default App;
