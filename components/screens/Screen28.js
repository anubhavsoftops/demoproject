import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class Screen28 extends Component {
  render() {
    return (
      <View style={{flex:1 ,justifyContent:'space-between' }}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{height:60,width:60,backgroundColor:'yellow',borderRadius:100}}></View>
        <View style={{height:60,width:60,backgroundColor:'yellow',borderRadius:100}}></View>
        <View style={{height:60,width:60,backgroundColor:'yellow',borderRadius:100}}></View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{height:60,width:60,backgroundColor:'green',borderRadius:100}}></View>
        <View style={{height:60,width:60,backgroundColor:'green',borderRadius:100}}></View>
        <View style={{height:60,width:60,backgroundColor:'green',borderRadius:100}}></View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{height:60,width:60,backgroundColor:'pink',borderRadius:100}}></View>
        <View style={{height:60,width:60,backgroundColor:'pink',borderRadius:100}}></View>
        <View style={{height:60,width:60,backgroundColor:'pink',borderRadius:100}}></View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{height:60,width:60,backgroundColor:'blue',borderRadius:100}}></View>
        <View style={{height:60,width:60,backgroundColor:'blue',borderRadius:100}}></View>
        <View style={{height:60,width:60,backgroundColor:'blue',borderRadius:100}}></View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{height:60,width:60,backgroundColor:'black',borderRadius:100}}></View>
        <View style={{height:60,width:60,backgroundColor:'black',borderRadius:100}}></View>
        <View style={{height:60,width:60,backgroundColor:'black',borderRadius:100}}></View>
        </View>
        
      </View>
    )
  }
}

export default Screen28