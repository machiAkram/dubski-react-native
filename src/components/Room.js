import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Title } from '../components';
import { room } from '../assets/dummyFriends';
import { colors } from '../theme/colors';

const Room = () => {
  if (room.length > 1) return (
    <View style={styles.roomContainer}>
      <Title>Room</Title>
      <View style={styles.container}>
        {room.map((friend) => {
          return <TouchableOpacity key={friend.id}>
            <Image style={[styles.profilePic, { borderColor: friend.isSpeaking ? colors.primaryRed : '#000000' }]} source={friend.profilePic} />
          </TouchableOpacity>
        })}
      </View>
    </View>
  )
  else return null;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // marginHorizontal: 25,
    marginTop: 10
  },
  roomContainer: {
    marginTop: 10,
  },
  profilePic: {
    width: 45,
    height: 45,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#000000',
  }
});

export default Room;