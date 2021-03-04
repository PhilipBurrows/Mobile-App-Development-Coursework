import React , { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './HomeScreen';
import Search from './SearchScreen';
import Business from './BusinessScreen';
import Review from './ReviewScreen';

const Stack = createStackNavigator();

class HomeStackNavigator extends Component{
  render(){
    return(
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Business' component={Business}/>
        <Stack.Screen name='Review' component={Review}/>
      </Stack.Navigator>
    );
  }
}

class SearchStackNavigator extends Component{
  render(){
    return(
      <Stack.Navigator>
        <Stack.Screen name='Search' component={Search}/>
        <Stack.Screen name='Business' component={Business}/>
        <Stack.Screen name='Review' component={Review}/>
      </Stack.Navigator>
    )
  }
}

export { HomeStackNavigator, SearchStackNavigator };
