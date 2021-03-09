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
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Chat from './components/Chat/Chat';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import ImagePickerComponent from './components/util/ImagePicker';

const Stack = createStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Chat" component={Chat} /> */}
        <Stack.Screen
          name="ImagePickerComponent"
          component={ImagePickerComponent}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
