import React , { Component } from 'react';
import { Text, View, Button, TextInput, KeyboardAvoidingView, TouchableOpacity, Alert } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

import BaseStyle from './BaseStyle.style';

class NewUser extends Component {

  constructor(props){
    super(props);

    this.state = {
      firstName:'',
      lastName:'',
      email:'',
      password:''
    }
  }

  addItem(){
    let to_send = {
      first_name:this.state.firstName,
      last_name:this.state.lastName,
      email:this.state.email,
      password:this.state.password
    };

    return fetch('http://10.0.2.2:3333/api/1.0.0/user',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(to_send)
    })
    .then((response) => {
      Alert.alert('User Created');
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
          <TouchableOpacity style={BaseStyle.backButton}
            onPress={() => navigation.goBack()}>
            <Icons name={'arrow-back'} size={30} color='white'/>
          </TouchableOpacity>
            <Text style={BaseStyle.newUserTitleText}>Create Account</Text>
          </View>
          <View style={BaseStyle.body}>
            <View style={BaseStyle.newUserInputContainer}>
              <TextInput placeholder='Firstname' style={BaseStyle.loginInput}
                onChangeText={(firstName) => this.setState({firstName})}
                value={this.state.firstName}/>
              <TextInput placeholder='Lastname' style={BaseStyle.loginInput}
                onChangeText={(lastName) => this.setState({lastName})}
                value={this.state.lastName}/>
              <TextInput placeholder='Email' style={BaseStyle.loginInput}
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}/>
              <TextInput placeholder='Password' style={BaseStyle.loginInput}
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}/>
              <Button
                title='Sign Up'
                onPress={() => this.addItem()}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default NewUser;
