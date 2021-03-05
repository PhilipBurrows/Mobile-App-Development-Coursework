import React , { Component } from 'react';
import { Text, View, Button, TextInput, KeyboardAvoidingView } from 'react-native';

import BaseStyle from './BaseStyle.style';

class Search extends Component {
  render(){
    const navigation = this.props.navigation;
    return (
      <KeyboardAvoidingView style={BaseStyle.keyboardAvoidingContainer}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
        enabled={Platform.OS === "ios" ? true : false}>
        <View style={BaseStyle.flexContainer}>
          <View style={BaseStyle.searchHeader}>
            <TextInput style={BaseStyle.searchTextInput}/>
          </View>
          <View style={BaseStyle.body}>
            <Text>Search!</Text>
            <Button
              title='Business'
              onPress={() => navigation.navigate('Business')}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default Search;
