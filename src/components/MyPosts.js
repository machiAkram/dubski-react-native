import React from 'react';
import { View, StyleSheet, FlatList, Dimensions, Pressable } from 'react-native';
import { Title, Media } from '../components';
import { posts } from '../assets/dummyPosts';

const { width } = Dimensions.get('screen');

const renderPost = ({ item }) => {
  return (
    <Pressable style={styles.itemContainer}>
      <Media
        type={item.setupType}
        data={item.setupData}
        isPunchline={false}
        isPunchlined={false}
      />
    </Pressable>
  )
}

const MyPosts = ({ children }) => {
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={renderPost}
        numColumns={3}
        ListHeaderComponent={
          <View>
            {children}
            <View style={styles.titleContainer}>
              <Title>My Collection</Title>
            </View>
          </View>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 20,
  },
  itemContainer: {
    width: width / 3,
    height: 200,
    justifyContent: 'center',
  },
})

export default MyPosts;