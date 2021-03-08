import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import BaseStyle from './BaseStyle.style'

class Card extends Component{
  state={
    likeIcon:'thumb-up-off-alt'
  }

  render(){
    return(
      <View style={BaseStyle.cardContainer}>
        <View style={BaseStyle.overallRatingAndLikesContainer}>
          <Text style={BaseStyle.overallRating}>Rating: {this.props.overallRating}</Text>
          <TouchableOpacity onPress={() => this.setState({likeIcon:'thumb-up-alt'})} style={BaseStyle.likeButton}>
            <Icons name={this.state.likeIcon} size={25} color='steelblue'/>
          </TouchableOpacity>
        </View>
        <View style={BaseStyle.ratingBreakdownContainer}>
          <Text style={BaseStyle.priceRating}>Price rating: {this.props.priceRating}</Text>
          <Text style={BaseStyle.qualityRating}>Quality rating: {this.props.qualityRating}</Text>
          <Text style={BaseStyle.cleanlinessRating}>Cleanliness rating: {this.props.cleanlinessRating}</Text>
        </View>
        <View style={BaseStyle.reviewTextContainer}>
          <Text style={BaseStyle.reviewText}>{this.props.reviewBody}</Text>
        </View>
        <View style={BaseStyle.imageContainer}>
          <Text style={BaseStyle.image}>Image</Text>
        </View>
      </View>
    );
  }
}



export default Card;
