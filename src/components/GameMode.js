import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Title } from '../components';
import { Button, Menu } from 'react-native-paper';
import { colors } from '../theme/colors';

const GameMode = () => {
  const [visible, setVisible] = useState(false);
  const [gameMode, setGameMode] = useState(null);

  const toggleMenu = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.container}>
      <Title>Game Mode</Title>
      <Menu
        visible={visible}
        onDismiss={toggleMenu}
        anchor={<Button style={styles.button} mode='outlined' textColor={colors.primaryRed} icon='arrow-down' contentStyle={{ flexDirection: 'row-reverse' }} onPress={toggleMenu}>Choose Game Mode</Button>}>
        <Menu.Item onPress={() => { setGameMode('1v1'); setVisible(false); }} title="1v1" />
        <Menu.Item onPress={() => { }} title="Item 2" />
        <Menu.Item onPress={() => { }} title="Item 3" />
      </Menu>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  button: {
    marginHorizontal: 10,
    marginTop: 10,
    borderColor: colors.primaryRed
  }
});

export default GameMode;