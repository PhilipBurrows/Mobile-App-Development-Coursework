import React , {Component }from 'react';
import { Text, View, Button , TouchableOpacity, ActivityIndicator, ScrollView,AsyncStorage } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

import BaseStyle from './BaseStyle.style';
import ReviewCard from './ReviewCard'

class Business extends Component {

  constructor(props){
    super(props);

    this.state = {
      businessID:this.props.route.params.businessID,
      isLoading:true,
      token:'',
      returnData:[],
    }
  }

  componentDidMount(){
    this.getReviews();
  }

  getReviews(){
    return fetch('http://10.0.2.2:3333/api/1.0.0/location/'+this.state.businessID,{
      headers:{'Content-Type':'application/json'}
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        returnData: responseJson
      })
      console.log('here')
      console.log(this.props.route.params.businessID)
      this.setState({isLoading:false})
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render(){
    if(this.state.isLoading){
      return(
        <View style={BaseStyle.flexContainer}>
          <ActivityIndicator color='blue'/>
        </View>
      );
    }
    else{
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
                onPress={() => navigation.navigate('Review',{businessID:this.state.businessID})}
              />
            </View>
          </View>
          <View style={BaseStyle.body}>
            <View style={BaseStyle.businessUpdateButton}>
              <Button
                title={'Update'}
                onPress={() => this.getReviews()}
              />
            </View>
              <ScrollView style={BaseStyle.businessScrollView} >
                {this.state.returnData.location_reviews.map(review =>(
                  <View key={review.review_id}>
                    <ReviewCard overallRating={review.overall_rating} priceRating={review.price_rating} qualityRating={review.quality_rating} cleanlinessRating={review.clenliness_rating} reviewBody={review.review_body}/>
                  </View>
                ))}
              </ScrollView>
          </View>
        </View>

      );
    }
  }
}

export default Business;
