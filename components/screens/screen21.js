import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class Screen21 extends Component {
  render() {
    return (
      <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{justifyContent:'flex-end'}}>
            <View style={{height:50, width:50,backgroundColor:'tomato',borderRadius:100}}></View>
        </View>
        <View style={{justifyContent:'flex-end',height:560}}>
            <View style={{height:50, width:50,backgroundColor:'tomato',borderRadius:100}}></View>
        </View>
        <View style={{justifyContent:'flex-end',height:300}}>
            <View style={{height:50, width:50,backgroundColor:'tomato',borderRadius:100}}></View>
        </View>
        <View style={{justifyContent:'flex-start'}}>
            <View style={{height:50, width:50,backgroundColor:'tomato',borderRadius:100}}></View>
        </View>
      </View>
    )
  }
}

export default Screen21