import React , { Component } from 'react';
import { Text, View, Button, TextInput, KeyboardAvoidingView, AsyncStorage, Alert } from 'react-native';

import BaseStyle from './BaseStyle.style';

class User extends Component {

  constructor(props){
    super(props);

    this.state = {
      returnData:[],
      email:'',
      password:'',

      toggleButtons:true
    }
  }

  _storeData = async () => {
    try {
      await AsyncStorage.setItem('token', this.state.returnData.token)
    }
    catch (error){
      console.log(error);
    }
  }

  login(){
    let to_send = {
      email:this.state.email,
      password:this.state.password
    };

    return fetch('http://10.0.2.2:3333/api/1.0.0/user/login',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(to_send)
    })
    .then((response) => response.json())
    .then((responseJson) => {
      Alert.alert('Login Successful');
      this.setState({
        returnData:responseJson,
        toggleButtons:false
      })
      this._storeData();
    })
    .catch((error) => {
      console.log(error);
    })
  }

  logout(){
    return fetch('http://10.0.2.2:3333/api/1.0.0/user/logout',{
      method:'post',
      headers:{'Content-Type':'application/json', 'X-Authorization':this.state.returnData.token},
    })
    .then((response) => {
      Alert.alert('Logout Successful');
      this.setState({
        returnData:[],
        toggleButtons:true
      })
      this._storeData();
    })
    .catch((error) => {
      console.log(error);
    })
  }

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
              <TextInput placeholder='email ' style={BaseStyle.loginInput}
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}/>
              <TextInput placeholder='password' style={BaseStyle.loginInput}
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}/>
              <View style={BaseStyle.loginButton}>
                <Button
                  disabled={!this.state.toggleButtons}
                  title='Login'
                  onPress={() => this.login()}
                />
              </View>
              <View style={BaseStyle.logoutButton}>
                <Button
                  disabled={this.state.toggleButtons}
                  title='Logout'
                  onPress={() => this.logout()}
                />
              </View>
              <Text>{this.state.returnData.token}</Text>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default User;
