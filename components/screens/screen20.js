import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class Screen20 extends Component {
  render() {
    return (
        <View style={{flex:1 , justifyContent:'space-between'}}>
   <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <View style={{height:80,width:80,backgroundColor:'yellow'}}></View>
    <View style={{height:80,width:80,backgroundColor:'yellow'}}></View>
   </View>
   <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <View style={{height:80,width:80,backgroundColor:'yellow'}}></View>
    <View style={{height:80,width:80,backgroundColor:'yellow'}}></View>
   </View>
      </View>
    )
  }
}

export default Screen20