import {Text, View, StyleSheet} from 'react-native';
import React, {PureComponent} from 'react';

export default class seventhScreen extends PureComponent {
  render() {
    return (
      <>
        <View style={{flex: 1, justifyContent: 'space-between', height: 100}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'center',
            }}>
            <View style={style.boxContainer}></View>
            <View style={style.boxContainer}></View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignSelf: 'center',
              width: 250,
            }}>
            <View style={style.boxContainer}></View>
            <View style={style.boxContainer}></View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <View style={style.boxContainer}></View>
          </View>
        </View>
        <View style={{flex:1}}></View>
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
    padding: 40,
    alignSelf: 'center',
  },
});
