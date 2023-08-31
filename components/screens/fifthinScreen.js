import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';

export class FifthinScreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, justifyContent:'flex-start'}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <View
              style={{
                height: 130,
                width: 130,
                backgroundColor: 'yellow',
              }}></View>
            <View
              style={{
                height: 50,
                width: 50,
                backgroundColor: 'red',
              }}></View>
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: 'blue',
              }}></View>
            <View
              style={{
                height: 30,
                width: 30,
                backgroundColor: 'green',
              }}></View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              width:220
            }}>
            <View
              style={{
                height: 50,
                width: 50,
                backgroundColor: 'yellow',
              }}></View>
            <View
              style={{
                height: 90,
                width: 90,
                backgroundColor: 'red',
              }}></View>
            <View
              style={{
                height: 40,
                width: 40,
                backgroundColor: 'blue',
              }}></View>
            
          </View>
        </View>
        <View style={{flex: 1, backgroundColor: 'tomato',justifyContent:'flex-end'}}>
            <View style={{flexDirection:'row'}}>

              <View style={{backgroundColor:'red',height:15,width:35}}></View>
              <View style={{backgroundColor:'blue',height:15,width:35}}></View>
              <View style={{backgroundColor:'green',height:15,width:35}}></View>
              <View style={{backgroundColor:'blue',height:15,width:35}}></View>
              <View style={{backgroundColor:'red',height:15,width:35}}></View>
              <View style={{backgroundColor:'green',height:15,width:35}}></View>
              <View style={{backgroundColor:'red',height:15,width:35}}></View>
              <View style={{backgroundColor:'green',height:15,width:35}}></View>
              <View style={{backgroundColor:'red',height:15,width:35}}></View>
              <View style={{backgroundColor:'green',height:15,width:35}}></View>
              <View style={{backgroundColor:'red',height:15,width:35}}></View>
              <View style={{backgroundColor:'green',height:15,width:35}}></View>
            </View>
        </View>
      </View>
    );
  }
}

export default FifthinScreen;

const style = StyleSheet.create({});
