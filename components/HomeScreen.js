import React, {Component} from 'react';
import { Text, View, Button, StyleSheet,TouchableOpacity, ScrollView, AsyncStorage, DeviceEventEmitter } from 'react-native';

import BaseStyle from './BaseStyle.style';
import BusinessCard from './BusinessCard'


class Home extends Component{

  constructor(props){
    super(props);

    this.state = {
      token:'',
      returnData:[],
      loggedIn:false
    }
  }

  _getData = async () => {
    try {
      this.setState({token:await AsyncStorage.getItem('@token')});
      this.getAllBusinesses()
      this.setState({loggedIn:true})
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
      console.log(this.state.returnData[0].location_name)
    })
    .catch((error) => {
      console.log(error);
    });
  }


  componentDidMount () {
      DeviceEventEmitter.addListener('loginSuccess', (e)=>{this._getData()})
  }



  render(){
    const navigation = this.props.navigation;
    if(this.state.loggedIn){
      return (
        <View style={BaseStyle.flexContainer}>
          <View style={BaseStyle.header}>
            <Text style={BaseStyle.homeScreenTitleText}>CoffeDa</Text>
          </View>
          <View style={BaseStyle.body}>
            <ScrollView style={BaseStyle.businessScrollView}>
              {this.state.returnData.map(business => (
                <View key={business.location_id}>

                    <BusinessCard navigation={navigation} test={business.location_id} businessName={business.location_name} overallRating={business.avg_overall_rating} priceRating={business.avg_price_rating} qualityRating={business.avg_quality_rating} cleanlinessRating={business.avg_clenliness_rating}/>
                </View>
              ))}
            </ScrollView>

          </View>
        </View>
      );
    }
    else{
      return(
        <View style={BaseStyle.flexContainer}>
          <View style={BaseStyle.header}>
            <Text style={BaseStyle.homeScreenTitleText}>CoffeDa</Text>
          </View>
          <View style={BaseStyle.body}>
            <Text>Log in to access this page</Text>
          </View>
        </View>
      )
    }
  }
}


export default Home;
