import { Text, View ,StyleSheet} from 'react-native'
import React, { PureComponent } from 'react'

export default class SixthScreen extends PureComponent {
  render() {
    return (
        <View style={{flex: 1, justifyContent: 'space-between'}}>
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
                alignContent: 'center',
              }}>
              <View style={style.boxContainer}></View>
              <View style={style.boxContainer}></View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'center',
              }}>
              <View style={style.boxContainer}></View>
              <View style={style.boxContainer}></View>
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
  