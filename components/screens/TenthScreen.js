import {Text, View, StyleSheet} from 'react-native';
import React, {PureComponent} from 'react';

export default class TenthScreen extends PureComponent {
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
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignContent: 'center',
            }}>
            <View style={style.baseContainer}></View>
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
    width: 200,
    height: 50,
    padding: 40,
    borderRadius: 10,
    alignSelf: 'center',
  },
  baseContainer: {
    backgroundColor: 'red',
    width: 150,
    height: 50,
    padding: 40,

    alignSelf: 'center',
  },
});
