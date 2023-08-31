import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import React, {Component} from 'react';
import Screen1 from './screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import Screen5 from './Screen5';
import Screen6 from './Screen6';


export class Praent extends Component {
  render() {
    return (
      <SafeAreaView style={style.flexScreen}>
      {/* <Screen1/> */}
      {/* <Screen2/> */}
      {/* <Screen3/> */}
      {/* <Screen4/> */}
      {/* <Screen5/> */}
      {/* <Screen6/> */}
      </SafeAreaView>
    );
  }
}
const style = StyleSheet.create({
  flexScreen: {
    backgroundColor: '#d6c7fc',
    flex: 1,
  },
});

export default Praent;
