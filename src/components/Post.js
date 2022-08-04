import React, { useState } from "react";
import { Text, StyleSheet, View, Pressable, Platform, Image } from "react-native";
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import { colors } from "../theme/colors";
import { human } from "react-native-typography";

const hapticOptions = {
  enableVibrateFallback: false,
  ignoreAndroidSystemSettings: true,
};

const hapticTriggerType = Platform.select({
  ios: 'selection', // TODO: check best ios vibration
  android: 'impactMedium'
});

const Post = () => {
  const [isPunchlined, setIsPunchlined] = useState(false);

  const handlePostPress = () => {
    ReactNativeHapticFeedback.trigger(hapticTriggerType, hapticOptions)
    setIsPunchlined(!isPunchlined);
  }

  return <Pressable onLongPress={handlePostPress} delayLongPress={200}>
    <View style={styles.postContainer}>
      {!isPunchlined
        ? <Image source={require('../assets/test9-21.jpg')} style={styles.image}/>
        : <Text style={styles.text}>{"Lorem ipsum dolor sit amet, consectetur \n\nadipiscing elit, sed do eiusmod tempor \n\nincididunt ut labore et dolore magna \n\naliqua. Ut enim ad minim veniam, quis nostrud\n\n exercitation ullamco laboris nisi ut \n\naliquip ex ea commodo consequat. Duis aute irure\n\n dolor in reprehenderit in voluptate."}</Text>
      }
    </View>
  </Pressable>

}

const styles = StyleSheet.create({
  postContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: "contain"
  },
  text: {
    ...human.bodyWhite,
    marginHorizontal: "5%",
    textAlign: "center",
  }
});

export default Post;