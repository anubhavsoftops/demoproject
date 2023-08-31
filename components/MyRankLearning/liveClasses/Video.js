import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ImageBackground,
} from 'react-native';
import React, {Component} from 'react';

export default class Video extends Component {
  navBar = () => {
    return (
      <>
        <View style={[styles.navbar.navView]}>
          <TouchableOpacity  onPress={() => this.props.navigation.goBack()} style={styles.navbar.navBtn}>
            <Image
              style={[styles.navbar.navImg]}
              source={require('../asset/back.png')}
            />
          </TouchableOpacity>
          <Text style={[styles.navbar.navTxt,{position:'absolute',left:120}]}>recorded Class</Text>
        </View>
      </>
    );
  };
  render() {
    return (
      <SafeAreaView>
        <View style={[styles.container]}>{this.navBar()}</View>
        <View
          style={{
            marginTop: 30,
            height: 50,
            backgroundColor: '#520081',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#fff',
              textTransform: 'capitalize',
            }}>
            Subject - methmatices
          </Text>
        </View>
        <View style={[styles.container]}>
          <Text
            style={{
              fontSize: 15,
              paddingVertical: 18,
              textAlign: 'center',
              color: '#000',
              textTransform: 'capitalize',
            }}>
            chapter - technologies
          </Text>
          <View
            style={{
              height: 220,
              width: '100%',
              borderRadius: 10,
              overflow: 'hidden',
            }}>
            <ImageBackground
              style={{
                height: '100%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              source={{
                uri: 'https://plus.unsplash.com/premium_photo-1668017178979-9e341bfaa464?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60',
              }}>
              <Image
                style={{
                  height: 60,
                  width: 80,
                  borderRadius: 20,
                  tintColor: 'tomato',
                }}
                source={require('../asset/play.png')}
              />
            </ImageBackground>
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <View
              style={{
                padding: 8,
                backgroundColor: '#fae4e0',
                borderRadius: 100,
                marginRight: 10,
              }}>
              <Image
                style={{height: 35, width: 35}}
                source={require('../asset/danger.png')}
              />
            </View>
            <View
              style={{
                padding: 8,
                backgroundColor: '#fae4e0',
                borderRadius: 100,
              }}>
              <Image
                style={{height: 35, width: 35}}
                source={require('../asset/star.png')}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {marginHorizontal: 15},
  navbar: {
    navView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    navTxt: {
      fontSize: 18,
      fontWeight: 'bold',
      textTransform: 'capitalize',
    },
    navBtn: {padding: 3},
    navImg: {height: 30, width: 30},
    navOptionTop: {position: 'absolute', top: 35, right: 0, zIndex: 1},
    navOptionInner: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'tomato',
      alignItems: 'flex-start',
    },
    navOptionBtn: {paddingVertical: 5, paddingHorizontal: 10, marginRight: 30},
  },
  options: {
    optionsView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
      marginBottom: 20,
    },
    optionBtn: {
      height: 32,
      width: 85,
      backgroundColor: 'tomato',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    optionTxt: {
      color: '#fff',
      textTransform: 'capitalize',
      fontSize: 13,
      fontWeight: '500',
    },
  },
  chapter: {
    chapterView: {
      borderColor: 'tomato',
      borderWidth: 1,
      borderRadius: 10,
      marginTop: 10,
      flexDirection: 'row',
      padding: 10,
      justifyContent: 'flex-start',
    },
    topic: {fontSize: 15, fontWeight: 'bold'},
    time: {
      fontSize: 12,
      color: 'gray',
      marginBottom: 5,
      marginTop: 2,
    },
    chapterBtn: {
      borderRadius: 10,
      paddingHorizontal: 20,
      marginRight: 10,
      backgroundColor: 'tomato',
      paddingVertical: 10,
      alignItems: 'center',
      marginTop: 10,
    },
  },
  filter: {
    filterView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    searchView: {
      height: 50,
      backgroundColor: '#e9e0f0',
      alignItems: 'center',
      flexDirection: 'row',
      width: '70%',
      justifyContent: 'space-evenly',
      borderRadius: 100,
      borderWidth: 1,
      borderColor: '#510081',
    },
    searchImg: {
      height: 25,
      width: 25,
      position: 'absolute',
      zIndex: 1,
      left: 12,
    },
    searchIn: {
      height: '100%',
      width: '100%',
      borderRadius: 100,
      fontSize: 18,
      paddingLeft: 50,
    },
    filterImg: {height: 30, width: 30, tintColor: '#500183'},
  },
});
