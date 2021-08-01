/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ActivityIndicator
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Provider } from "react-redux"
import configureStore from "./src/store/configureStore"
import { PersistGate } from "redux-persist/integration/react"
import NavigationService from './src/navigation/NavigationService';

const { persistor, store } = configureStore()

import AppMain from "./src/navigation/NavigationStack"

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Provider store={store}>
        <PersistGate
          loading={<ActivityIndicator/>}
          persistor={persistor}
        >
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <AppMain ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef)
            }}/>
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  //
});

export default App;
