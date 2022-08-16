import React, { useState } from "react";
import { StyleSheet, View, Pressable, Platform, Dimensions } from "react-native";
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import { colors } from "../theme/colors";
import Media from "./Media";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const hapticOptions = {
    enableVibrateFallback: false,
    ignoreAndroidSystemSettings: true,
};

const hapticTriggerType = Platform.select({
    ios: 'selection', // TODO: check best ios vibration
    android: 'impactMedium'
});

const Post = ({ post }) => {
    const [isPunchlined, setIsPunchlined] = useState(false);

    const tabBarHeight = useBottomTabBarHeight();


    const handlePostPress = () => {
        ReactNativeHapticFeedback.trigger(hapticTriggerType, hapticOptions)
        setIsPunchlined(!isPunchlined);
    }

    return <Pressable onLongPress={handlePostPress} delayLongPress={200}>
        <View style={[styles.postContainer, {height: Dimensions.get('window').height - tabBarHeight}]}>
            <Media
                type={post.setupType}
                data={post.setupData}
                isPunchline={false}
                isPunchlined={isPunchlined}
            />
            <Media
                type={post.punchlineType}
                data={post.punchlineData}
                isPunchline={true}
                isPunchlined={isPunchlined}
            />
        </View>
    </Pressable>

}
// { uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1' }  https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4
const styles = StyleSheet.create({
    postContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.darkModeBackground
    }
});

export default Post;