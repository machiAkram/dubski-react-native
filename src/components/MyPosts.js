import { View, StyleSheet } from 'react-native';
import React from 'react';
import { Title } from '../components';

const MyPosts = () => {
  return (
    <View style={styles.container}>
      <Title>My Collection</Title>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
})

export default MyPosts;