import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { colors } from "../theme/colors";

const MyAppContainer = ({ children }) => {
    return <SafeAreaView>
        <StatusBar barStyle={"light-content"} backgroundColor={colors.darkModeBackground}/>
        {children}
    </SafeAreaView>
}

export default MyAppContainer;