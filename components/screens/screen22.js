import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class Screen22 extends Component {
  render() {
    return (
      <View style={{flex:1,justifyContent:'space-between'}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View style={{height:50, width:50,backgroundColor:'tomato',borderRadius:100}}></View>
            <View style={{height:50, width:50,backgroundColor:'tomato',borderRadius:100}}></View>
            <View style={{height:50, width:50,backgroundColor:'tomato',borderRadius:100}}></View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
            <View style={{height:50, width:50,backgroundColor:'yellow',borderRadius:100}}></View>
            <View style={{height:50, width:50,backgroundColor:'yellow',borderRadius:100}}></View>
        </View>     
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View style={{height:50, width:50,backgroundColor:'yellow',borderRadius:100}}></View>
            <View style={{height:50, width:50,backgroundColor:'yellow',borderRadius:100}}></View>
            <View style={{height:50, width:50,backgroundColor:'yellow',borderRadius:100}}></View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
            <View style={{height:50, width:50,backgroundColor:'green',borderRadius:100}}></View>
            <View style={{height:50, width:50,backgroundColor:'green',borderRadius:100}}></View>
        </View>        
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View style={{height:50, width:50,backgroundColor:'green',borderRadius:100}}></View>
            <View style={{height:50, width:50,backgroundColor:'green',borderRadius:100}}></View>
            <View style={{height:50, width:50,backgroundColor:'green',borderRadius:100}}></View>
        </View> 
      </View>
    )
  }
}

export default Screen22