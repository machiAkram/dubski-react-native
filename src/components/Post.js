import React, { useState } from "react";
import { StyleSheet, View, Pressable, Platform, Dimensions, Text, TouchableOpacity } from "react-native";
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import { colors } from "../theme/colors";
import Media from "./Media";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

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
    const [isClapped, setIsClapped] = useState(false);
    const tabBarHeight = useBottomTabBarHeight();


    const handlePostPress = () => {
        ReactNativeHapticFeedback.trigger(hapticTriggerType, hapticOptions);
        setIsPunchlined(!isPunchlined);
    }

    const onClapPress = () => {
        setIsClapped(true);
    }

    const onCommentPress = () => {
    }

    return <Pressable onLongPress={handlePostPress} delayLongPress={200}>
        <View style={[styles.postContainer, { height: Dimensions.get('window').height - tabBarHeight }]}>
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
        <View style={[styles.uiContainer, { height: Dimensions.get('window').height - tabBarHeight }]}>
            <View style={styles.rightContainer}>
                <TouchableOpacity style={styles.iconContainer} onPress={onCommentPress}>
                    <FontAwesome name='diamond' size={30} color={'white'} />
                    <Text style={[styles.statsLabel, { fontSize: 12 }]}>Collect</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconContainer} onPress={onClapPress}>
                    <MaterialCommunityIcons name='hand-clap' size={40} color={isClapped ? colors.primaryRed : 'white'} />
                    <Text style={[styles.statsLabel, { color: isClapped ? colors.primaryRed : 'white' }]}>{post.claps}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconContainer} onPress={onCommentPress}>
                    <FontAwesome name='commenting' size={30} color={'white'} />
                    <Text style={styles.statsLabel}>{post.nbComments}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconContainer} onPress={onCommentPress}>
                    <FontAwesome name='share' size={30} color={'white'} />
                    <Text style={[styles.statsLabel, { fontSize: 12 }]}>Share</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.iconContainer, { marginBottom: 10 }]} onPress={onCommentPress}>
                    <Feather name='more-horizontal' size={30} color={'white'} />
                    <Text style={[styles.statsLabel, { fontSize: 12 }]}>More</Text>
                </TouchableOpacity>

            </View>
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
    },
    uiContainer: {
        position: "absolute",
        width: '100%',
        justifyContent: "flex-end"
    },
    rightContainer: {
        alignSelf: 'flex-end',
        height: 350,
        justifyContent: 'space-between',
        marginRight: 5,
    },
    iconContainer: {
        alignItems: "center",
    },
    statsLabel: {
        fontSize: 14,
        fontWeight: '600',
        marginTop: 5,
        color: 'white'
    },
});

export default Post;