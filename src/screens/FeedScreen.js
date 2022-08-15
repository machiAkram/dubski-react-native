import React from "react";
import { Post } from "../components";
import { posts } from "../assets/dummyPosts";
import { FlatList, View, Dimensions } from "react-native";

const FeedScreen = () => {
    return <View>
        <FlatList
            data={posts}
            renderItem={({ item, index }) => <Post post={item} index={index}/>}
            showsVerticalScrollIndicator={false}
            snapToInterval={Dimensions.get('window').height}
            decelerationRate={'fast'}
            disableIntervalMomentum
        />
    </View>
}

export default FeedScreen;