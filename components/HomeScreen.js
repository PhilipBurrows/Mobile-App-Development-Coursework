import React, {Component} from 'react';
import { Text, View, Button, StyleSheet, AsyncStorage } from 'react-native';

import BaseStyle from './BaseStyle.style';

class Home extends Component{

  constructor(props){
    super(props);

    this.state = {
      token:'',
      returnData:[]
    }
  }

  _getData = async () => {
    try {
      this.setState({token:await AsyncStorage.getItem('@token')});

      this.getAllBusinesses();
    }
    catch(error){
      console.log(error);
    }
  }

  getAllBusinesses(){

    return fetch('http://10.0.2.2:3333/api/1.0.0/find',{
      headers:{'Content-Type':'application/json', 'X-Authorization':this.state.token}
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        returnData: responseJson
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }



  render(){
    const navigation = this.props.navigation;
    return (
      <View style={BaseStyle.flexContainer}>
        <View style={BaseStyle.header}>
          <Text style={BaseStyle.homeScreenTitleText}>CoffeDa</Text>
        </View>
        <View style={BaseStyle.body}>

          <Text>Home!</Text>
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
