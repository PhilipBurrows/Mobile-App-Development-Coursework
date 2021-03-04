import React , { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './HomeScreen';
import Business from './BusinessScreen';

const Stack = createStackNavigator();

class HomeStackNavigator extends Component{
  render(){
    return(
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Business' component={Business}/>
      </Stack.Navigator>
    );
  }
}

export default HomeStackNavigator;
