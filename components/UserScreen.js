import React , { Component } from 'react';
import { Text, View, Button, TextInput, KeyboardAvoidingView } from 'react-native';

import BaseStyle from './BaseStyle.style';

class User extends Component {
  render(){
    const navigation = this.props.navigation;
    return (
      <KeyboardAvoidingView style={BaseStyle.keyboardAvoidingContainer}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
        enabled={Platform.OS === "ios" ? true : false}>

        <View style={BaseStyle.flexContainer}>
          <View style={BaseStyle.header}>
            <Text style={BaseStyle.userTitleText}>Username</Text>
            <View style={BaseStyle.newUserButton}>
              <Button
                title='Create Account'
                onPress={() => navigation.navigate('NewUser')}
              />
            </View>
          </View>
          <View style={BaseStyle.body}>
            <View style={BaseStyle.loginInputContainer}>
              <TextInput placeholder='email ' style={BaseStyle.loginInput}/>
              <TextInput placeholder='password' style={BaseStyle.loginInput}/>
              <Button
                title='Login'
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default User;
