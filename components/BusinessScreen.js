import React , {Component }from 'react';
import { Text, View, Button } from 'react-native';

import BaseStyle from './BaseStyle.style';

class Business extends Component {
  render(){
    const navigation = this.props.navigation;
    return (
      <View style={BaseStyle.flexContainer}>
        <View style={BaseStyle.header}>
          <Text style={BaseStyle.businessTitleText}>Business Name</Text>
        </View>
        <View style={BaseStyle.body}>
          <Text>Business!</Text>
          <Button
            title='Review'
            onPress={() => navigation.navigate('Review')}
          />
        </View>
      </View>
    );
  }
}

export default Business;
