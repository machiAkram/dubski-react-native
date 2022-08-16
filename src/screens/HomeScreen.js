import React from "react";
import { Post } from "../components";
import { posts } from "../assets/dummyPosts";
import { FlatList, View, Dimensions, StyleSheet } from "react-native";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const HomeScreen = () => {
    const tabBarHeight = useBottomTabBarHeight();

    return <View style={styles.feedContainer}>
        <FlatList
            data={posts}
            renderItem={({ item }) => <Post post={item}/>}
            showsVerticalScrollIndicator={false}
            snapToInterval={Dimensions.get('window').height - tabBarHeight}
            decelerationRate={'fast'}
            disableIntervalMomentum
        />
    </View>
}

const styles = StyleSheet.create({
    feedContainer: {
        height: '100%',
        width: '100%'
    }
});

export default HomeScreen;