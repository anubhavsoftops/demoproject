import {SafeAreaView, Text, View} from 'react-native';
import React, {Component} from 'react';
import Screen1 from './screen1';
import Screen2 from './screen2';
import Screen3 from './screen3';

export default class OrderHome extends Component {
  render() {
    return <SafeAreaView style={{}}>
        {/* <Screen1/> */}
        <Screen2/>
        {/* <Screen3/> */}
    </SafeAreaView>;
  }
}
