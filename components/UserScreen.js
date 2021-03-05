import React , { Component } from 'react';
import { Text, View, Button } from 'react-native';

import BaseStyle from './BaseStyle.style';

class User extends Component {
  render(){
    return (
      <View style={BaseStyle.flexContainer}>
        <View style={BaseStyle.header}>
          <Text style={BaseStyle.userTitleText}>Username</Text>
        </View>
        <View style={BaseStyle.body}>
          <Text>User!</Text>
          <Button
            title='Login'
          />
        </View>
      </View>
    );
  }
}

export default User;
