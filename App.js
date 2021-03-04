import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import BottomTabNavigator from './components/TabNavigator'

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator/>
    </NavigationContainer>
  );
}
