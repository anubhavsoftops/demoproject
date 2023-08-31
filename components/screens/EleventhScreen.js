import {Text, View, StyleSheet} from 'react-native';
import React, {PureComponent} from 'react';

export default class EleventhScreen extends PureComponent {
  render() {
    return (
      <View style={style.flexScreen}>
        <View
          style={{
            backgroundColor: 'grey',
            justifyContent: 'flex-end',
            height: 100,
            borderWidth: 1,
            borderColor: 'red',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: 200,
            }}>
            <View style={style.largeBox}></View>
            <View style={style.smallBox}></View>
            <View style={style.largeBox}></View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'grey',
            justifyContent: 'flex-end',
            height: 100,
            borderWidth: 1,
            borderColor: 'red',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              
            }}>
            <View style={style.largeBox}></View>
            <View style={style.smallBox}></View>
            <View style={style.largeBox}></View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'grey',
            justifyContent: 'flex-end',
            height: 100,
            borderWidth: 1,
            borderColor: 'red',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              
            }}>
            <View style={style.largeBox}></View>
            <View style={style.smallBox}></View>
            <View style={style.largeBox}></View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'grey',
            justifyContent: 'flex-end',
            height: 100,
            borderWidth: 1,
            borderColor: 'red',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              
            }}>
            <View style={style.largeBox}></View>
            <View style={style.smallBox}></View>
            <View style={style.largeBox}></View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'grey',
            justifyContent: 'flex-end',
            height: 100,
            borderWidth: 1,
            borderColor: 'red',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width:200
              
            }}>
            <View style={style.largeBox}></View>
            <View style={style.smallBox}></View>
            <View style={style.largeBox}></View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'grey',
            justifyContent: 'flex-end',
            height: 100,
            borderWidth: 1,
            borderColor: 'red',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              
            }}>
            <View style={style.largeBox}></View>
            <View style={style.smallBox}></View>
            <View style={style.largeBox}></View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'grey',
            justifyContent: 'flex-end',
            height: 100,
            borderWidth: 1,
            borderColor: 'red',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              
            }}>
            <View style={style.largeBox}></View>
            <View style={style.smallBox}></View>
            <View style={style.largeBox}></View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'grey',
            justifyContent: 'flex-end',
            height: 100,
            borderWidth: 1,
            borderColor: 'red',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              
            }}>
            <View style={style.largeBox}></View>
            <View style={style.smallBox}></View>
            <View style={style.largeBox}></View>
          </View>
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  flexScreen: {
    flex: 1,
width:420
    // justifyContent: 'flex-end',
  },
  largeBox: {
    backgroundColor: 'white',
    width: 60,
    height: 40,
    alignSelf: 'baseline',
    borderWidth: 2,
    borderColor: 'red',
  },
  smallBox: {
    backgroundColor: 'white',
    width: 60,
    height: 30,
    alignSelf: 'baseline',
    borderWidth: 2,
    borderColor: 'red',
  },
});
