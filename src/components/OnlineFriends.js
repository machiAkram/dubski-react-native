import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { friends } from '../assets/dummyFriends';
import { colors } from '../theme/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Title } from '../components';


const FriendItem = ({ friend }) => {
  return <View style={styles.friendContainer}>
    <Image style={styles.profilePic} source={friend.profilePic} />
    <Text style={styles.friendsName}>@{friend.username}</Text>
  </View>
}
const renderItem = ({ item }) => { return <FriendItem friend={item} /> }


const ListHeader = () => {
  return <TouchableOpacity style={styles.friendContainer}>
    <View style={[styles.profilePic, { backgroundColor: colors.secondary, alignItems: 'center', justifyContent: 'center' }]}>
      <AntDesign name='adduser' color={colors.white} size={20} />
    </View>
    <Text style={styles.friendsName}>Invite friends</Text>
  </TouchableOpacity>
}

const OnlineFriends = () => {
  return (
    <View style={styles.container}>
      <Title>Friends</Title>
      <FlatList
        data={friends}
        renderItem={renderItem}
        horizontal
        ListHeaderComponent={<ListHeader />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  friendContainer: {
    margin: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#000000',
  },
  friendsName: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 12,
    width: 75,
    marginTop: 2
  }
});

export default OnlineFriends;