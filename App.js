import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './components/HomeScreen'
import Search from './components/SearchScreen'
import User from './components/UserScreen'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="User" component={User} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
