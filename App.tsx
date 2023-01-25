/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import BottomStackNavigation from './Navigation/BottomStackNavigation';
import themeNative from './screens/Fonts/FontsNativeBase';
import {Provider} from 'react-redux';
import store from './redux/redux';
import RootNavigation from './Navigation/RootNavigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NativeBaseProvider theme={themeNative}>
          <NavigationContainer>
            <RootNavigation />
          </NavigationContainer>
        </NativeBaseProvider>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
