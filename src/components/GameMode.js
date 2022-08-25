import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title } from '../components';

const GameMode = () => {
  return (
    <View style={styles.container}>
      <Title>Game Mode</Title>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  }
});

export default GameMode;