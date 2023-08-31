import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';

export default class TwelthScreen extends Component {
  render() {
    return (
      <View style={styles.flexScreen}>
        <View
          style={{
            justifyContent: 'flex-start',
            flex: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <View style={[styles.largeBox, {backgroundColor: 'red'}]}>
              <Text style={{textAlign: 'center'}}>1</Text>
            </View>
            <View style={[styles.largeBox, {backgroundColor: 'yellow'}]}>
              <Text style={{textAlign: 'center'}}>2</Text>
            </View>
            <View style={[styles.largeBox, {backgroundColor: 'green'}]}>
              <Text style={{textAlign: 'center'}}>3</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            flex: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <View style={[styles.largeBox, {backgroundColor: 'red'}]}>
              <Text style={{textAlign: 'center'}}>1</Text>
            </View>
            <View style={[styles.largeBox, {backgroundColor: 'yellow'}]}>
              <Text style={{textAlign: 'center'}}>2</Text>
            </View>
            <View style={[styles.largeBox, {backgroundColor: 'green'}]}>
              <Text style={{textAlign: 'center'}}>3</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            flex: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={[styles.largeBox, {backgroundColor: 'red'}]}>
              <Text style={{textAlign: 'center'}}>1</Text>
            </View>
            <View style={[styles.largeBox, {backgroundColor: 'yellow'}]}>
              <Text style={{textAlign: 'center'}}>2</Text>
            </View>
            <View style={[styles.largeBox, {backgroundColor: 'green'}]}>
              <Text style={{textAlign: 'center'}}>3</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            flex: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}>
            <View style={[styles.largeBox, {backgroundColor: 'red'}]}>
              <Text style={{textAlign: 'center'}}>1</Text>
            </View>
            <View style={[styles.largeBox, {backgroundColor: 'yellow'}]}>
              <Text style={{textAlign: 'center'}}>2</Text>
            </View>
            <View style={[styles.largeBox, {backgroundColor: 'green'}]}>
              <Text style={{textAlign: 'center'}}>3</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'flex-end',
            flex: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <View style={[styles.largeBox, {backgroundColor: 'red'}]}>
              <Text style={{textAlign: 'center'}}>1</Text>
            </View>
            <View style={[styles.largeBox, {backgroundColor: 'yellow'}]}>
              <Text style={{textAlign: 'center'}}>2</Text>
            </View>
            <View style={[styles.largeBox, {backgroundColor: 'green'}]}>
              <Text style={{textAlign: 'center'}}>3</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  flexScreen: {
    flex: 1,
  },
  largeBox: {
    height: 25,
    width: 40,
    backgroundColor: 'red',
    justifyContent: 'center',
    // borderColor: 'red',
  },
  smallBox: {
    backgroundColor: 'white',
    width: 40,
    height: 25,
    justifyContent: 'center',
  },
});
