import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import React, {Component} from 'react';

export class FirstScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View style={style.boxContainer}></View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={style.boxContainer}></View>
          <View style={style.boxContainer}></View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={style.boxContainer}></View>
          <View style={style.boxContainer}></View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={style.boxContainer}></View>
          <View style={style.boxContainer}></View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={style.boxContainer}></View>
          <View style={style.boxContainer}></View>
        </View>
        <View style={style.boxContainer}></View>
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
  //   design: {
  //     backgroundColor: 'red',
  //     height: 20,
  //     width: 20,
  //     padding: 40,
  //     borderWidth: 3,
  //   },
  //   topFlex: {
  //     flex: 1,
  //     alignItems: 'center',
  //     justifyContent: 'flex-start',
  //   },
  //   midFlex: {
  //     flex: 1,
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //     justifyContent: 'space-between',
  //   },
  //   bottomFlex: {
  //     flex: 1,
  //     alignItems: 'center',
  //     justifyContent: 'flex-end',
  //   },
});

export default FirstScreen;
