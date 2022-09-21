import React from 'react';
import { MyAppContainer } from './src/containers';
import { AppNavigator } from './src/navigators';
import { NavigationContainer } from '@react-navigation/native';
import { myTheme } from './src/theme/theme';
import { Provider as PaperProvider } from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider theme={myTheme}>
      <NavigationContainer theme={myTheme}>
        <MyAppContainer>
          <AppNavigator />
        </MyAppContainer>
      </NavigationContainer>
    </PaperProvider>
  )
}

export default App;