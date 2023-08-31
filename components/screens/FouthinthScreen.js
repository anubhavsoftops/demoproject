import {Text, View, StyleSheet} from 'react-native';
import React, {PureComponent} from 'react';

export default class ForuthinScreen extends PureComponent {
  render() {
    return (
      <View style={style.flexBox}>
        <View style={style.flexContainer}>
          <View
            style={{backgroundColor: 'yellow', height: 80, width: 120}}></View>
          <View style={{backgroundColor: 'red', height: 50, width: 100}}></View>
          <View
            style={{backgroundColor: 'blue', height: 80, width: 120}}></View>
        </View>
        <View style={style.midContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={{
                backgroundColor: 'yellow',
                height: 80,
                width: 120,
              }}></View>
            <View
              style={{backgroundColor: 'red', height: 50, width: 100,}}></View>
            <View
              style={{backgroundColor: 'blue', height: 80, width: 120}}></View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={{
                backgroundColor: 'yellow',
                height: 80,
                width: 120,
              }}></View>
            <View
              style={{backgroundColor: 'red', height: 50, width: 100}}></View>
            <View
              style={{backgroundColor: 'blue', height: 80, width: 120}}></View>
          </View>
        </View>
        <View style={style.midContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={{
                backgroundColor: 'yellow',
                height: 80,
                width: 120,
              }}></View>
            <View
              style={{backgroundColor: 'red', height: 50, width: 100,}}></View>
            <View
              style={{backgroundColor: 'blue', height: 80, width: 120}}></View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={{
                backgroundColor: 'yellow',
                height: 80,
                width: 120,
              }}></View>
            <View
              style={{backgroundColor: 'red', height: 50, width: 100}}></View>
            <View
              style={{backgroundColor: 'blue', height: 80, width: 120}}></View>
          </View>
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  flexBox: {flex: 1},
  flexContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  midContainer: {
    flex: 1,

    justifyContent: 'space-around',
  },
});
