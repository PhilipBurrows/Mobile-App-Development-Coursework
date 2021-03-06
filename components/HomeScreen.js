import React, {Component} from 'react';
import { Text, View, Button, StyleSheet, AsyncStorage } from 'react-native';

import BaseStyle from './BaseStyle.style';

class Home extends Component{

  constructor(props){
    super(props);

    this.state = {
      token:'blank',
    }
  }

  _getData = async () => {
    try {
      const temp = await AsyncStorage.getItem('token');
      this.setState({token:temp});
      console.log(this.state.token);
    }
    catch(error){
      console.log(error);
    }
  }

  render(){
    const navigation = this.props.navigation;
    return (
      <View style={BaseStyle.flexContainer}>
        <View style={BaseStyle.header}>
          <Text style={BaseStyle.homeScreenTitleText}>CoffeDa</Text>
        </View>
        <View style={BaseStyle.body}>

          <Text>Home</Text>
          <Button
            title='Business'
            onPress={() => navigation.navigate('Business')}
          />
        </View>
      </View>
    );
  }
}


export default Home;
