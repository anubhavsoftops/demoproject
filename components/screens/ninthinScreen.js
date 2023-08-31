import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class NinthinScreen extends Component {
  render() {
    return (
        <View style={{flex:1 , justifyContent:'space-between'}}>
   <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <View style={{height:80,width:80, backgroundColor:'blue',justifyContent:'center'}}></View>
        <View style={{height:80,width:80, backgroundColor:'blue',justifyContent:'center'}}></View>
    </View>
    <View style={{flex:1, flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <View style={{height:80,width:80, backgroundColor:'yellow'}}></View>
       
    </View>
    <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <View style={{height:80,width:80, backgroundColor:'blue',justifyContent:'center'}}></View>
        <View style={{height:80,width:80, backgroundColor:'blue',justifyContent:'center'}}></View>
    </View>
      </View>
    )
  }
}

export default NinthinScreen