import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class CustomDrawerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFollowing: false,
      isExplore: false,
    };
  }
  render() {
    return (
      <SafeAreaView>
        <View style={[styles.contentContainer]}>
          <TouchableOpacity
            onPress={() => {
              this.setState({isFollowing: true, isExplore: false});
            }}
            style={{borderBottomWidth: 1, padding: 5, width: 80 , }}>
            <Text
              style={[
                styles.optionText,
                this.state.isFollowing ? {color: '#5863F8'} : null,
              ]}>
              Following
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({isFollowing: false, isExplore: true});
            }}
            style={{borderBottomWidth: 1, padding: 5, width: 80}}>
            <Text
              style={[
                styles.optionText,
                this.state.isExplore ? {color: '#5863F8'} : null,
              ]}>
              Explore
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 1,

            marginBottom: 3,
            backgroundColor: 'gray',
            alignContent: 'stretch',
          }}></View>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            {this.state.isFollowing
              ? [1, 2, 33, 4, 5, 5, 6, 7, 78, 3].map((e, idx) => (
                  <View
                    key={idx}
                    style={{
                      height: 200,
                      width: 130,
                      marginBottom: 5,
                      backgroundColor: '#E7E7E7',
                      alignContent: 'stretch',
                    }}></View>
                ))
              : this.state.isExplore
              ? [1, 2, 33, 4, 5, 5, 6, 7, 78, 3].map((e, idx) => (
                  <View
                    key={idx}
                    style={{
                      height: 200,
                      width: 130,
                      marginBottom: 5,
                      backgroundColor: '#E7E7E7',
                      alignContent: 'stretch',
                    }}></View>
                ))
              : [1, 2, 33, 4, 5, 5, 6, 7, 78, 3].map((e, idx) => (
                  <View
                    key={idx}
                    style={{
                      height: 200,
                      width: 130,
                      marginBottom: 5,
                      backgroundColor: '#E7E7E7',
                      alignContent: 'stretch',
                    }}></View>
                ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop:45
    // padding: 5,
  },
  optionText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
