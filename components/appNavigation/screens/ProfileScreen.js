import {Text, View} from 'react-native';
import React, {Component} from 'react';

export default class ProfileScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#E88873',
        }}>
        <Text style={{fontSize: 25, textTransform: 'uppercase'}}>
          Profile Screen
        </Text>
      </View>
    );
  }
}
