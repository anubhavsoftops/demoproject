import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class Screen26 extends Component {
  render() {
    return (
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{justifyContent:'space-between'}}>
            <View style={{height:50, width:50,backgroundColor:'yellow',borderRadius:100}}></View>
            <View style={{height:50, width:50,backgroundColor:'yellow',borderRadius:100}}></View>
        </View>
        <View style={{justifyContent:'flex-end',height:300}}>
            <View style={{height:50, width:50,backgroundColor:'blue',borderRadius:100}}></View>
        </View>
        <View style={{justifyContent:'flex-end',height:560}}>
            <View style={{height:50, width:50,backgroundColor:'blue',borderRadius:100}}></View>
        </View>
        <View style={{justifyContent:'space-between'}}>
            <View style={{height:50, width:50,backgroundColor:'tomato',borderRadius:100}}></View>
            <View style={{height:50, width:50,backgroundColor:'tomato',borderRadius:100}}></View>
        </View>
      </View>
    )
  }
}

export default Screen26