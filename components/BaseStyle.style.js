import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  flexContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  keyboardAvoidingContainer:{
    flex:1,
    alignSelf:'stretch'
  },
  header:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'stretch',
    backgroundColor:'pink',
    paddingLeft:20,
    borderColor:'white',
    borderBottomWidth:1
  },
  businessHeader:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'stretch',
    backgroundColor:'pink',
  },
  body:{
    flex:6,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'stretch',
    backgroundColor:'lightblue'
  },
  homeScreenTitleText:{
    color:'white',
    fontSize:30,
    fontWeight:'bold',
    marginTop:50,
    fontFamily:'serif',
    fontStyle:'italic'
  },
  businessTitleText:{
    flex:8,
    color:'white',
    fontSize:20,
    fontWeight:'bold',
    marginTop:50,
    fontStyle:'italic',
    marginLeft:20
  },
  businessHeaderButton:{
    flex:3,
    marginTop:50,
    marginRight:10
  },
  businessScrollView:{
    alignSelf:'stretch',
    marginTop:10
  },
  userTitleText:{
    flex:2,
    color:'white',
    fontSize:25,
    fontWeight:'bold',
    marginTop:50,
  },
  newUserButton:{
    flex:1,
    marginTop:50,
    marginRight:10
  },
  newUserTitleText:{
    flex:12,
    color:'white',
    fontSize:25,
    fontWeight:'bold',
    marginTop:50,
  },
  backButton:{
    flex:2,
    marginTop:50,
    marginLeft:10,
    marginRight:50
  },
  backButtonText:{
    color:'white',
    fontSize:20,
    fontWeight:'bold'
  },
  searchHeader:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'stretch',
    backgroundColor:'pink',
  },
  searchTextInput:{
    flex:1,
    marginTop:50,
    marginLeft:10,
    marginRight:10,
    borderColor:'gray',
    borderWidth:1,
    backgroundColor:'white'
  },
  newUserInputContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'stretch',
    marginBottom:300,
    paddingTop:100
  },
  loginInputContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'stretch',
    marginBottom:350,
    paddingTop:100
  },
  loginInput:{
    flex:1,
    marginBottom:10,
    borderColor:'grey',
    borderWidth:1,
    backgroundColor:'white',
    alignSelf:'stretch',
    marginLeft:70,
    marginRight:70,
    paddingLeft:10
  },
  loginButton:{
    flex:2
  },
  logoutButton:{
    flex:2
  },
  reviewInput:{
    flex:1,
    alignSelf:'stretch',
    margin:20,
    paddingLeft:10,
    paddingRight:10,
    borderColor:'lightgrey',
    borderWidth:2,
    backgroundColor:'white',
    textAlignVertical:'top'
  }
});
