import React , {Component} from 'react';
import { Text, View, Button , TouchableOpacity, TextInput, AsyncStorage, Alert, KeyboardAvoidingView } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

import BaseStyle from './BaseStyle.style';



class Review extends Component {

  constructor(props){
    super(props);

    this.state = {
      token:'',
      overallRating:'',
      priceRating:'',
      qualityRating:'',
      cleanlinessRating:'',
      reviewBody:''
    }
  }

  _getData = async () => {
    try {
      this.setState({token:await AsyncStorage.getItem('@token')});

      this.sendReview();
    }
    catch(error){
      console.log(error);
    }
  }

  sendReview(){
    let to_send={
      overall_rating: parseInt(this.state.overallRating),
      price_rating: parseInt(this.state.priceRating),
      quality_rating: parseInt(this.state.qualityRating),
      clenliness_rating: parseInt(this.state.cleanlinessRating),
      review_body: this.state.reviewBody
    }

    return fetch('http://10.0.2.2:3333/api/1.0.0/location/' +this.props.route.params.businessID +'/review',{
      method:'post',
      headers:{'Content-Type':'application/json', 'X-Authorization':this.state.token},
      body: JSON.stringify(to_send)
    })
    .then((response) => {
      Alert.alert('Review Sent');
    })
    .catch((error) => {
      console.log(error);
    })
  }


  render(){
    const navigation = this.props.navigation;
    return (
      <KeyboardAvoidingView style={BaseStyle.keyboardAvoidingContainer}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
        enabled={Platform.OS === "ios" ? true : false}>
        <View style={BaseStyle.flexContainer}>
          <View style={BaseStyle.businessHeader}>
            <TouchableOpacity style={BaseStyle.backButton}
              onPress={() => navigation.goBack()}>
              <Icons name={'arrow-back'} size={30} color='white'/>
            </TouchableOpacity>
            <Text style={BaseStyle.businessTitleText}>{this.props.route.params.businessName}</Text>
            <View style={BaseStyle.businessHeaderButton}>
              <Button
                title='Submit'
                onPress={()=>this._getData()}
              />
            </View>
          </View>
          <View style={BaseStyle.body}>
            <View style={BaseStyle.ratingsContainer}>
              <TextInput placeholder='overall' style={BaseStyle.ratingInput}
                onChangeText={(overallRating) => this.setState({overallRating})}
                value={this.state.overallRating}/>
              <TextInput placeholder='price' style={BaseStyle.ratingInput}
                onChangeText={(priceRating) => this.setState({priceRating})}
                value={this.state.priceRating}/>
              <TextInput placeholder='quality' style={BaseStyle.ratingInput}
                onChangeText={(qualityRating) => this.setState({qualityRating})}
                value={this.state.qualityRating}/>
              <TextInput placeholder='cleanliness' style={BaseStyle.ratingInput}
                onChangeText={(cleanlinessRating) => this.setState({cleanlinessRating})}
                value={this.state.cleanlinessRating}/>
            </View>
            <TextInput placeholder='Write your review here' multiline={true} style={BaseStyle.reviewInput}
              onChangeText={(reviewBody) => this.setState({reviewBody})}
              value={this.state.reviewBody}/>

          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default Review;
