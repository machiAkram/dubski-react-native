import React, { useState } from "react";
import { Text, StyleSheet, View, Pressable, Platform } from "react-native";
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

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
        ? <Text>Setup</Text>
        : <Text>Punchline</Text>
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
  }
});

export default Post;