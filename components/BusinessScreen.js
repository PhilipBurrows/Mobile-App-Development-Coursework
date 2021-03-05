import React , {Component }from 'react';
import { Text, View, Button , TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

import BaseStyle from './BaseStyle.style';

class Business extends Component {
  render(){
    const navigation = this.props.navigation;
    return (
      <View style={BaseStyle.flexContainer}>
        <View style={BaseStyle.businessHeader}>
          <TouchableOpacity style={BaseStyle.backButton}
            onPress={() => navigation.goBack()}>

            <Icons name={'arrow-back'} size={30} color='white'/>
          </TouchableOpacity>
          <Text style={BaseStyle.businessTitleText}>Business Name</Text>
        </View>
        <View>

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
