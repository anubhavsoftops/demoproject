import {Text, View} from 'react-native';
import React, {Component} from 'react';
// import Drawer from './LandingPage';

export default class HomeScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#90E39A',
        }}>
          {/* <Drawer/> */}
        <Text style={{fontSize: 25, textTransform: 'uppercase'}}>
          Home Screen
        </Text>
      </View>
    );
  }
}
