import React , { Component } from 'react';
import { Text, View, Button, TextInput } from 'react-native';

import BaseStyle from './BaseStyle.style';

class User extends Component {
  render(){
    return (
      <View style={BaseStyle.flexContainer}>
        <View style={BaseStyle.header}>
          <Text style={BaseStyle.userTitleText}>Username</Text>
        </View>
        <View style={BaseStyle.body}>
          <View style={BaseStyle.loginInputContainer}>
            <TextInput style={BaseStyle.loginInput}/>
            <TextInput style={BaseStyle.loginInput}/>
            <Button
              title='Login'
            />
          </View>
        </View>
      </View>
    );
  }
}

export default User;
