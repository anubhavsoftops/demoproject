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
} from 'react-native';import React, { Component } from 'react'

export default class Notes extends Component {
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
          <Text style={[styles.navbar.navTxt,{position:'absolute',left:170}]}>notes</Text>
        </View>
      </>
    );}
  render() {
    return (
      <SafeAreaView>
       <View style={[styles.container]}>{this.navBar()}
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
          <View style={{width:'100%',paddingVertical:15,paddingHorizontal:8,borderRadius:10,borderColor:'#520081',borderWidth:1.5}}>
            <Text style={{fontSize:16,fontWeight:'600'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero quod porro fugiat quasi est nam eaque itaque. Natus atque dignissimos beatae blanditiis ab vel? Minima nesciunt, deserunt nemo distinctio nisi obcaecati quibusdam hic commodi ut nostrum fugit molestiae, quia expedita laudantium aliquam quo. Quidem totam libero, ratione cumque est sint.</Text>
          </View>
       </View>
      </SafeAreaView>
    )
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
