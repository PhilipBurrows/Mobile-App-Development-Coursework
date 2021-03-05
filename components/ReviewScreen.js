import React , {Component} from 'react';
import { Text, View, Button , TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

import BaseStyle from './BaseStyle.style';


class Review extends Component {
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
            <Text style={BaseStyle.businessTitleText}>Business Name</Text>
            <View style={BaseStyle.businessHeaderButton}>
              <Button
                title='Submit'
              />
            </View>
          </View>
          <View style={BaseStyle.body}>
            <TextInput placeholder='Write your review here' multiline={true} style={BaseStyle.reviewInput}/>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default Review;
