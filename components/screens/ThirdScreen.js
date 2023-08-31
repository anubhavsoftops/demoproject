import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import React, {Component} from 'react';

export class ThirdScreen extends Component {
  render() {
    return (
      <>
        <View style={{flex: 1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
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

export default ThirdScreen;
