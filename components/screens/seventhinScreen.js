import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class SeventhinScreen extends Component {
  render() {
    return (
      <View style={{flex:1 , justifyContent:'space-between'}}>
    <View style={{flex:1,justifyContent:'flex-start',alignItems:'center'}}>
        <View style={{height:80,width:80, backgroundColor:'tomato'}}></View>
    </View>
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <View style={{height:80,width:80, backgroundColor:'yellow'}}></View>
    </View>
    <View style={{flex:1,justifyContent:'flex-end',alignItems:'center'}}>
        <View style={{height:80,width:80, backgroundColor:'blue',justifyContent:'center'}}></View>
    </View>
      </View>
    )
  }
}

export default SeventhinScreen