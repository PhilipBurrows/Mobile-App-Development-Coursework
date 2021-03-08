import React , { Component } from 'react';
import { Text, View, Button, TextInput, KeyboardAvoidingView, ScrollView, AsyncStorage, DeviceEventEmitter, Alert } from 'react-native';

import BaseStyle from './BaseStyle.style';
import BusinessCard from './BusinessCard'

class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      token:'',
      returnData:[],
      searchString:''
    }
  }

  _getData = async () => {
    try {
      this.setState({token:await AsyncStorage.getItem('@token')});
    }
    catch(error){
      console.log(error);
    }
  }

  getSearchedLocations(){
    if(this.state.token===''){
      Alert.alert('You must be logged in to use the search function')
    }
    else{
      return fetch('http://10.0.2.2:3333/api/1.0.0/find?q='+this.state.searchString,{
        headers:{'Content-Type':'application/json', 'X-Authorization':this.state.token}
      })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          returnData: responseJson
        })
        console.log('here now' + this.state.returnData[0].location_town)
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }

  componentDidMount (){
      DeviceEventEmitter.addListener('loginSuccess', (e)=>{this._getData()})
  }


  render(){
    const navigation = this.props.navigation;
      return (
        <KeyboardAvoidingView style={BaseStyle.keyboardAvoidingContainer}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
          enabled={Platform.OS === "ios" ? true : false}>
          <View style={BaseStyle.flexContainer}>
            <View style={BaseStyle.searchHeader}>
              <TextInput style={BaseStyle.searchTextInput}
                onChangeText={(searchString) => this.setState({searchString})}
                value={this.state.searchString}/>
              <View style={BaseStyle.searchButton}>
                <Button
                  title='search'
                  onPress={() => this.getSearchedLocations()}
                />
              </View>
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
        </KeyboardAvoidingView>
      );
  }
}

export default Search;
