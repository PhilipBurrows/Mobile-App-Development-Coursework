import React, {Component} from 'react';
import { Text, View, Button } from 'react-native';



class Home extends Component{
  render(){
    const navigation = this.props.navigation;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home</Text>
        <Button
          title='Business'
          onPress={() => navigation.navigate('Business')}
        />
      </View>
    );
  }
}

export default Home;
