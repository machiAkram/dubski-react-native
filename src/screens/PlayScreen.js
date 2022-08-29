import React from 'react';
import { View, StyleSheet } from 'react-native';
import { GameMode, MyPosts, OnlineFriends, Room } from '../components';

const PlayScreen = () => {
  return (
    <View style={styles.playContainer}>
      <MyPosts>
        <OnlineFriends />
        <Room />
        <GameMode />
      </MyPosts>
    </View>
  )
}

const styles = StyleSheet.create({
  playContainer: {
  }
});
export default PlayScreen;