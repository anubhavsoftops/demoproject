import { Text, View,StyleSheet } from 'react-native'
import React, { PureComponent } from 'react'

export default class EightScreen extends PureComponent {
  render() {
    return (
        <>
          <View style={{flex: 1,flexDirection:'row-reverse',justifyContent:'space-between',alignItems:'center'}}>
            <View style={[{flex: 1,justifyContent:'space-between',height:950}]}>
              <View style={[style.boxContainer,{}]} />
              <View style={[style.boxContainer,{}]} />
            </View>
            
            <View style={[{flex: 1,justifyContent:'space-between',height:800}]}>
              <View style={[style.boxContainer,{backgroundColor:'red'}]} />
              <View style={[style.boxContainer,{backgroundColor:'red'}]} />
            </View>
            <View style={[{flex: 1,justifyContent:'space-between',height:600}]}>
              <View style={[style.boxContainer,{backgroundColor:'red'}]} />
              <View style={[style.boxContainer,{backgroundColor:'red'}]} />
            </View>
            <View style={[{flex: 1,justifyContent:'space-between',height:400}]}>
              <View style={[style.boxContainer,{backgroundColor:'red'}]} />
              <View style={[style.boxContainer,{backgroundColor:'red'}]} />
            </View>
            <View style={[{flex: 1,justifyContent:'space-between',height:200}]}>
              <View style={[style.boxContainer,{backgroundColor:'red'}]} />
              <View style={[style.boxContainer,{backgroundColor:'red'}]} />
            </View>
            <View style={[{flex: 1,justifyContent:'center',height:750}]}>
              
              <View style={[style.boxContainer,{backgroundColor:'red'}]} />
            </View>
            
          </View>
        </>
      );
    }
  }
  const style = StyleSheet.create({
    flexScreen: {
      flex: 1,
    },
    boxContainer: {
      backgroundColor: 'red',
      width: 50,
      height: 50,
      // padding: 40,
      borderRadius:100,
      borderWidth: 2,
    },
  
  });
  