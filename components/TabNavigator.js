import React , { Component} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { HomeStackNavigator, SearchStackNavigator } from './StackNavigation';
import Search from './SearchScreen';
import User from './UserScreen';


const Tab = createBottomTabNavigator();

class TabNavigator extends Component{
  render(){
    return(
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon:({focused,color,size})=>{
            let iconName;

            if(route.name === 'Home'){
              iconName = focused ? 'home':'home-outline';
            }
            else if(route.name === 'Search'){
              iconName = focused ? 'search':'search-outline';
            }
            else if(route.name === 'User'){
              iconName = focused ? 'person':'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Home" component={HomeStackNavigator} />
        <Tab.Screen name="Search" component={SearchStackNavigator} />
        <Tab.Screen name="User" component={User} />
      </Tab.Navigator>
    );
  }
}

export default TabNavigator;
