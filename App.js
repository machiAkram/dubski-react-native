import React from 'react';
import { MyAppContainer } from './src/containers';
import { AppNavigator } from './src/navigators';
import { NavigationContainer } from '@react-navigation/native';
import { myTheme } from './src/theme/theme';

const App = () => {
  return <NavigationContainer theme={myTheme}>
    <MyAppContainer>
        <AppNavigator />
    </MyAppContainer>
  </NavigationContainer>
}

export default App;