import {Text, View, StyleSheet} from 'react-native';
import React, {PureComponent} from 'react';

export default class ThartenthScreen extends PureComponent {
  render() {
    return (
      <View style={style.flexScreen}>
        <View style={style.container}>
          <View style={[style.viewContainer]}></View>
          <View
            style={[style.viewContainer, {backgroundColor: 'white'}]}></View>
          <View style={[style.viewContainer]}></View>
          <View style={[style.viewContainer]}></View>
        </View>
        <View style={style.container}>
          <View style={[style.viewContainer, {backgroundColor: 'orange'}]}></View>
          <View
            style={[style.viewContainer]}></View>
          <View style={[style.viewContainer, {backgroundColor: 'orange'}]}></View>
          <View style={[style.viewContainer, {backgroundColor: 'orange'}]}></View>
        </View>
        <View style={style.container}>
          <View style={[style.viewContainer, {backgroundColor: 'yellow'}]}></View>
          <View
            style={[style.viewContainer, {backgroundColor: 'orange'}]}></View>
          <View style={[style.viewContainer, {backgroundColor: 'white'}]}></View>
          <View style={[style.viewContainer, {backgroundColor: 'orange'}]}></View>
        </View>
        <View style={style.container}>
          <View
            style={[style.viewContainer, {backgroundColor: 'white'}]}></View>
          <View style={[style.viewContainer, {backgroundColor: 'yellow'}]}></View>
          <View style={[style.viewContainer, {backgroundColor: 'yellow'}]}></View>
          <View style={[style.viewContainer, {backgroundColor: 'yellow'}]}></View>
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  flexScreen: {flex: 1, justifyContent: 'space-between'},
  container: {
    flex: 1,
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'red',
  },
});
