import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
  ImageBackground,
  FlatList,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import React, {Component} from 'react';

export default class Forget extends Component {
  render() {
    return (
      <SafeAreaView style={{backgroundColor: '#6d0282'}}>
        <View style={[styles.topContainer]}>
          <View style={styles.contentView}>
            <Text style={[styles.titleTxt]}>Enter Email</Text>
            <Text style={[styles.descTxt]}>
              Enter email-id to send link for change password{' '}
            </Text>
            <View style={[styles.idInput]}>
              <TextInput
                placeholder="Enter mail id"
                style={[styles.inputBox]}
              />
            </View>
          </View>
          <View style={[styles.btnView]}>
            <TouchableOpacity
              style={[styles.btn]}>
              <Text
                style={[styles.btnTxt]}>
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  topContainer: {height: '100%', marginHorizontal: 20},
  contentView: {height: '50%', justifyContent: 'center'},
  titleTxt: {
    fontSize: 30,
    color: '#fff',
    marginBottom: 25,
    fontWeight: 'bold',
  },
  descTxt: {color: '#fff', fontSize: 15, width: 300},
  idInput: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginVertical: 20,
  },
  inputBox: {height: '100%', width: '90%', fontSize: 18},
  btnView:{height: '50%', justifyContent: 'center'},btn:{
    backgroundColor: 'tomato',
    paddingVertical: 20,
    borderRadius: 10,
  },btnTxt:{
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
