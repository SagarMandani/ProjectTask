/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import Router from './src/Router';
import { Provider } from 'react-redux';
import Store from './src/Store';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Provider store={Store}>
          <Router />
      </Provider>
    </>
  );
};

export default App;