import {Text, View} from 'react-native';
import React, {Component} from 'react';

export default class SearchScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#DDF093',
        }}>
        <Text style={{fontSize: 25, textTransform: 'uppercase'}}>
          Search Screen
        </Text>
      </View>
    );
  }
}
