import React from "react";
import { SafeAreaView, StatusBar, useColorScheme } from "react-native";

const MyAppContainer = ({ children }) => {
    const isDarkMode = useColorScheme() === 'dark';
    return <SafeAreaView>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        {children}
    </SafeAreaView>
}

export default MyAppContainer;