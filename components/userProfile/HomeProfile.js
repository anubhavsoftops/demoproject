import {SafeAreaView, Text, View} from 'react-native';
import React, {Component} from 'react';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';

export default class HomeProfile extends Component {
  render() {
    return (
      <SafeAreaView style={{}}>
        {/* <Screen1 /> */}
        {/* <Screen2 /> */}
        <Screen3/>
        {/* <Screen4/> */}
      </SafeAreaView>
    );
  }
}
