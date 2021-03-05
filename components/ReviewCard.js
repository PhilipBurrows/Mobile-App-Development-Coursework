import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

class Card extends Component{
  state={
    likeIcon:'thumb-up-off-alt'
  }

  render(){
    return(
      <View style={styles.main}>
        <View style={styles.overallRatingAndLikesContainer}>
          <Text style={styles.overallRating}>Rating: {this.props.overallRating}</Text>
          <TouchableOpacity onPress={() => this.setState({likeIcon:'thumb-up-alt'})} style={styles.likeButton}>
            <Icons name={this.state.likeIcon} size={25} color='steelblue'/>
          </TouchableOpacity>
        </View>
        <View style={styles.ratingBreakdownContainer}>
          <Text style={styles.priceRating}>Price rating: {this.props.priceRating}</Text>
          <Text style={styles.qualityRating}>Quality rating: {this.props.qualityRating}</Text>
          <Text style={styles.cleanlinessRating}>Cleanliness rating: {this.props.cleanlinessRating}</Text>
        </View>
        <View style={styles.reviewTextContainer}>
          <Text style={styles.reviewText}>{this.props.reviewBody}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Text style={styles.image}>Image</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main:{
    alignSelf:'stretch',
    backgroundColor:'pink',
    borderWidth:2,
    margin:10,
    height:300
  },
  overallRatingAndLikesContainer:{
    flex:1,
    backgroundColor:'lightgrey',
    flexDirection:'row'
  },
  ratingBreakdownContainer:{
    flex:3,
    backgroundColor:'grey',
  },
  reviewTextContainer:{
    flex:4,
    backgroundColor:'lightgreen',
  },
  imageContainer:{
    flex:4,
    backgroundColor:'orange'
  },
  overallRating:{
    flex:1,
    marginLeft:10
  },
  likeButton:{
    flex:1
  },
  priceRating:{
    fontWeight:'bold',
    paddingBottom:5,
    marginLeft:10
  },
  qualityRating:{
    fontWeight:'bold',
    paddingBottom:5,
    marginLeft:10
  },
  cleanlinessRating:{
    fontWeight:'bold',
    marginLeft:10
  },
  reviewText:{
    marginLeft:10
  },
  image:{
    marginLeft:10
  }

})

export default Card;
