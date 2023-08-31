import {Text, View, StyleSheet} from 'react-native';
import React, {PureComponent} from 'react';

export default class FifthScreen extends PureComponent {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignContent: 'center',
            }}>
            <View style={style.boxContainer}></View>
            <View style={style.boxContainer}></View>
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignContent: 'center',
            }}>
            <View style={style.boxContainer}></View>
            <View style={style.boxContainer}></View>
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignContent: 'center',
            }}>
            <View style={style.boxContainer}></View>
            <View style={style.boxContainer}></View>
          </View>
        </View>
      </View>
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
