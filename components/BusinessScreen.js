import React , {Component }from 'react';
import { Text, View, Button , TouchableOpacity, ScrollView } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

import BaseStyle from './BaseStyle.style';
import ReviewCard from './ReviewCard'

class Business extends Component {
  state={
    reviews:[
      { id : 1, overallRating:'5',priceRating:'4',qualityRating:'3',cleanlinessRating:'2', reviewBody: "review 1"},
      { id : 2, overallRating:'5',priceRating:'4',qualityRating:'3',cleanlinessRating:'2', reviewBody: "review 2"},
      { id : 3, overallRating:'5',priceRating:'4',qualityRating:'3',cleanlinessRating:'2', reviewBody: "review 3"},
      { id : 4, overallRating:'5',priceRating:'4',qualityRating:'3',cleanlinessRating:'2', reviewBody: "review 4"}
    ],
    newId:4
  }
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
          <View style={BaseStyle.businessHeaderButton}>
            <Button
              title='Review'
              onPress={() => navigation.navigate('Review')}
            />
          </View>
        </View>
        <View style={BaseStyle.body}>
          <ScrollView style={BaseStyle.businessScrollView} >
            {this.state.reviews.map(review =>(
              <View key={review.id}>
                <ReviewCard overallRating={review.overallRating} priceRating={review.priceRating} qualityRating={review.qualityRating} cleanlinessRating={review.cleanlinessRating} reviewBody={review.reviewBody}/>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Business;
