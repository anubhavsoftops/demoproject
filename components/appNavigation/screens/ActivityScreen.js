import {Text, View} from 'react-native';
import React, {Component} from 'react';

export default class ActivityScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#CE4760',
        }}>
        <Text style={{fontSize: 25, textTransform: 'uppercase'}}>
          Activity Screen
        </Text>
      </View>
    );
  }
}
