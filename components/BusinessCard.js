import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BaseStyle from './BaseStyle.style'

class Card extends Component{

  render(){
    const navigation = this.props.navigation;
    return(
      <View style={BaseStyle.businessCardContainer}>
        <View style={BaseStyle.businessCardNameContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Business',{businessID:this.props.test})}>
            <Text style={BaseStyle.businessCardTtileContainer}>{this.props.businessName}</Text>
          </TouchableOpacity>
        </View>
        <View style={BaseStyle.imageContainer}>
          <Text style={BaseStyle.image}>Image</Text>
        </View>
        <View style={BaseStyle.businessCardRatingsContainer}>
          <Text style={BaseStyle.avgOverallRating}>Overall rating: {this.props.overallRating}</Text>
          <Text style={BaseStyle.avgPriceRating}>Price rating: {this.props.priceRating}</Text>
          <Text style={BaseStyle.avgQualityRating}>Quality rating: {this.props.qualityRating}</Text>
          <Text style={BaseStyle.avgCleanlinessRating}>Cleanliness rating: {this.props.cleanlinessRating}</Text>
        </View>
      </View>
    );
  }
}


export default Card;
