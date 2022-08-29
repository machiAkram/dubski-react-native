import React from 'react';
import { View, StyleSheet, FlatList, Pressable } from 'react-native';
import { Title, Media } from '../components';
import { posts } from '../assets/dummyPosts';
import { colors } from '../theme/colors';

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
        // columnWrapperStyle={{justifyContent: 'flex-start'}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 20,
    marginBottom: 5
  },
  itemContainer: {
    width: '30%',
    height: 180,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 10,
    marginHorizontal: '1.5%',
    marginVertical: 5,
    overflow: 'hidden',
  },
})

export default MyPosts;