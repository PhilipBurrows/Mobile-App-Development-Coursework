import React , { Component } from 'react';
import { Text, View, Button, TextInput } from 'react-native';

import BaseStyle from './BaseStyle.style';

class Search extends Component {
  render(){
    const navigation = this.props.navigation;
    return (
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
    );
  }
}

export default Search;
