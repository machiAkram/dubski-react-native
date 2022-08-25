import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { GameMode, MyPosts, OnlineFriends, Room } from '../components';

const PlayScreen = () => {
  return (
    <ScrollView style={styles.playContainer}>
      <OnlineFriends />
      <Room />
      <GameMode />
      <MyPosts />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  playContainer: {
  }
});
export default PlayScreen;