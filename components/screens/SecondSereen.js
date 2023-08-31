import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import React, {Component} from 'react';

export class SecondScreen extends Component {
  render() {
    return (
      <>
        <View style={{flex: 1}}>
          <View style={[{flex: 1}]}>
            <View style={[style.boxContainer,{width:900}]} />
          </View>
          
          <View style={[{flex: 1,justifyContent:'center'}]}>
            <View style={[style.boxContainer,{width:220,backgroundColor:'yellow'}]} />
          </View>
          <View style={[{flex: 1,justifyContent:'flex-end'}]}>
            <View style={[style.boxContainer,{width:150,backgroundColor:'blue'}]} />
          </View>
        </View>
      </>
    );
  }
}
const style = StyleSheet.create({
  flexScreen: {
    flex: 1,
  },
  boxContainer: {
    backgroundColor: 'red',
    width: 50,
    height: 50,
    padding: 40,
    borderWidth: 2,
  },
  //   design: {
  //     backgroundColor: 'red',
  //     height: 20,
  //     width: 20,
  //     padding: 40,
  //     borderWidth: 3,
  //   },
  //   topFlex: {
  //     flex: 1,
  //     alignItems: 'center',
  //     justifyContent: 'flex-start',
  //   },
  //   midFlex: {
  //     flex: 1,
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //     justifyContent: 'space-between',
  //   },
  //   bottomFlex: {
  //     flex: 1,
  //     alignItems: 'center',
  //     justifyContent: 'flex-end',
  //   },
});

export default SecondScreen;
