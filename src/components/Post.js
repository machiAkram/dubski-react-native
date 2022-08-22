import React, { useState } from "react";
import { StyleSheet, View, Pressable, Platform, Dimensions, Text, TouchableOpacity, Image } from "react-native";
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import { colors } from "../theme/colors";
import Media from "./Media";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
    const [isCollected, setIsCollected] = useState(false);
    const tabBarHeight = useBottomTabBarHeight();

    const handlePostLongPress = () => {
        ReactNativeHapticFeedback.trigger(hapticTriggerType, hapticOptions);
        setIsPunchlined(!isPunchlined);
    }

    const handleCollectPress = () => {
        setIsCollected(!isCollected);
    }

    const handleClapPress = () => {
        setIsClapped(!isClapped);
    }

    const handleCommentPress = () => {

    }

    const handleMorePress = () => {

    }

    return <Pressable onLongPress={handlePostLongPress} delayLongPress={200}>
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

            <View style={styles.bottomContainer}>
                <Pressable>
                    <Image
                        style={styles.profilePicture}
                        source={post.user.profilePic}
                    />
                </Pressable>
                <View>
                    <Pressable>
                        <Text style={styles.handle}>@{post.user.username}</Text>
                    </Pressable>
                    <Text style={styles.hashtags}>#test, #testhashtag</Text>
                </View>
            </View>

            <View style={styles.rightContainer}>
                <TouchableOpacity style={styles.iconContainer} onPress={handleCollectPress}>
                    <FontAwesome style={styles.shadow} name='diamond' size={30} color={isCollected ? colors.primaryRed : colors.offWhite} />
                    <Text style={[styles.statsLabel, styles.shadow, { color: isCollected ? colors.primaryRed : colors.offWhite }]}>{post.nbCollects}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconContainer} onPress={handleClapPress}>
                    <MaterialCommunityIcons style={[styles.shadow, styles.clapIcon]} name='hand-clap' size={35} color={isClapped ? colors.primaryRed : colors.offWhite} />
                    <Text style={[styles.statsLabel, styles.shadow, { color: isClapped ? colors.primaryRed : colors.offWhite }]}>{post.claps}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconContainer} onPress={handleCommentPress}>
                    <FontAwesome style={styles.shadow} name='commenting' size={30} color={colors.offWhite} />
                    <Text style={[styles.statsLabel, styles.shadow]}>{post.nbComments}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.iconContainer, { marginBottom: 10 }]} onPress={handleMorePress}>
                    <Feather style={styles.shadow} name='more-horizontal' size={30} color={colors.offWhite} />
                    <Text style={[styles.statsLabel, styles.shadow]}>More</Text>
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
        justifyContent: "space-between",
        flexDirection: "row",
    },
    rightContainer: {
        alignSelf: 'flex-end',
        height: 270,
        justifyContent: 'space-between',
        marginRight: 5,
        marginBottom: 10,
    },
    iconContainer: {
        alignItems: "center",
    },
    statsLabel: {
        fontSize: 12,
        fontWeight: '600',
        marginTop: 3,
        color: colors.offWhite
    },
    shadow: {
        textShadowColor: 'black',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 5,
        shadowOpacity: 0.5
    },
    clapIcon: {
        transform: [{ scaleX: -1 }, { rotate: '48deg' }],
    },
    bottomContainer: {
        alignSelf: "flex-end",
        marginLeft: 5,
        marginBottom: 10,
        flexDirection: 'row'
    },
    handle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        marginLeft: 10,
    },
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#fff',
    },
    hashtags: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '300',
        marginLeft: 10,
    },
});

export default Post;