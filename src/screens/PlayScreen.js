import React from 'react';
import { View, StyleSheet } from 'react-native';
import { GameMode, MyPosts, OnlineFriends, Room } from '../components';
import { colors } from '../theme/colors';

const PlayScreen = () => {
  return (
    <View style={styles.playContainer}>
      <OnlineFriends />
      <Room />
      <GameMode />
      <MyPosts />
    </View>
  )
}

const styles = StyleSheet.create({
  playContainer: {
  }
});
export default PlayScreen;