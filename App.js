import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import SearchScreen from './screens/SearchScreen.js';
import BookTransactionScreen from './screens/BookTransactionScreen.js';

export default function App() {
  return (
    <View>
      <AppContainer/>
    </View>
  );
}


const tabNavigator = createBottomTabNavigator({
  search:{screen:SearchScreen},
  transaction:{screen:BookTransactionScreen}
})

const AppContainer = createAppContainer(tabNavigator);