import React , {Component }from 'react';
import { Text, View, Button } from 'react-native';



class Business extends Component {
  render(){
    const navigation = this.props.navigation;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Business!</Text>
        <Button
          title='Review'
          onPress={() => navigation.navigate('Review')}
        />
      </View>
    );
  }
}

export default Business;
