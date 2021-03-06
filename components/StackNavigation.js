import React , { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './HomeScreen';
import Search from './SearchScreen';
import Business from './BusinessScreen';
import Review from './ReviewScreen';
import User from './UserScreen';
import NewUser from './NewUserScreen';

const Stack = createStackNavigator();

class HomeStackNavigator extends Component{
  render(){
    return(
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
        <Stack.Screen name='Business' component={Business} options={{headerShown:false}}/>
        <Stack.Screen name='Review' component={Review} options={{headerShown:false}}/>
      </Stack.Navigator>
    );
  }
}

class SearchStackNavigator extends Component{
  render(){
    return(
      <Stack.Navigator>
        <Stack.Screen name='Search' component={Search} options={{headerShown:false}}/>
        <Stack.Screen name='Business' component={Business} options={{headerShown:false}}/>
        <Stack.Screen name='Review' component={Review} options={{headerShown:false}}/>
      </Stack.Navigator>
    )
  }
}

class UserStackNavigator extends Component{
  render(){
    return(
      <Stack.Navigator>
        <Stack.Screen name='User' component={User} options={{headerShown:false}}/>
        <Stack.Screen name='NewUser' component={NewUser} options={{headerShown:false}}/>
      </Stack.Navigator>

    )
  }
}

export { HomeStackNavigator, SearchStackNavigator, UserStackNavigator};
