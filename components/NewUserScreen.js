import React , { Component } from 'react';
import { Text, View, Button, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

import BaseStyle from './BaseStyle.style';

class NewUser extends Component {
  render(){
    const navigation = this.props.navigation;
    return (
      <KeyboardAvoidingView style={BaseStyle.keyboardAvoidingContainer}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
        enabled={Platform.OS === "ios" ? true : false}>

        <View style={BaseStyle.flexContainer}>
          <View style={BaseStyle.header}>
          <TouchableOpacity style={BaseStyle.backButton}
            onPress={() => navigation.goBack()}>
            <Icons name={'arrow-back'} size={30} color='white'/>
          </TouchableOpacity>
            <Text style={BaseStyle.newUserTitleText}>Create Account</Text>
          </View>
          <View style={BaseStyle.body}>
            <View style={BaseStyle.newUserInputContainer}>
              <TextInput placeholder='Firstname' style={BaseStyle.loginInput}/>
              <TextInput placeholder='Lastname' style={BaseStyle.loginInput}/>
              <TextInput placeholder='Email' style={BaseStyle.loginInput}/>
              <TextInput placeholder='Password' style={BaseStyle.loginInput}/>
              <Button
                title='Sign Up'
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default NewUser;
