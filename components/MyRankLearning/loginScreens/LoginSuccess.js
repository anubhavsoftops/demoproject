import {
    TouchableOpacity,
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    Image,
    StatusBar,
    ImageBackground,
    FlatList,
    TextInput,
    ScrollView,
    Alert,
  } from 'react-native';
  import React, { Component } from 'react'

export default class LoginSuccess extends Component {
  componentDidMount(){
    setTimeout(()=>{
      this.props.navigation.navigate('home');
    },5000)
  }
  render() {
    return (
      <SafeAreaView  style={{backgroundColor: '#6d0282'}}>
        <View style={{height:'100%'}}>
        <View style={{height:'60%',alignItems:'center',justifyContent:'center'}}> 
            <Image style={{height:280,width:350}} resizeMode='stretch' source={require('../asset/verification.png')} />
        </View>
        <Text style={{textAlign:'center',fontSize:25,fontWeight:'bold',color:'#fff'}}>Logged In Success</Text>
        </View>
      </SafeAreaView>
    )
  }
}