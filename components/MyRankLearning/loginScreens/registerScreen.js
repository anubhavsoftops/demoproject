import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
  ImageBackground,
} from 'react-native';
import React, {Component} from 'react';

export default class RegisterScreen extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Image
          resizeMode="stretch"
          style={[{height: '50%', width: '100%'}]}
          source={require('../asset/onBordingScreens/login.png')}></Image>
        <View style={[styles.btnView]}>
          <Text style={[styles.btnViewTxt]}>
            Welcome description title goes have welcome title gose here
          </Text>
          <TouchableOpacity style={[styles.btn]} onPress={() => this.props.navigation.navigate('loginscreen')}>
            <Text style={[styles.btnTxt]}>login</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => this.props.navigation.navigate('pkgScreen')} style={[styles.btn]} >
            <Text style={[styles.btnTxt]}>register</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn]}>
            <Text style={[styles.btnTxt]}>continue as guest</Text>
          </TouchableOpacity>
          <View style={[styles.dividerCon]}>
            <View style={[styles.dividerCon.divider]} />
            <Text style={[styles.dividerCon.dividerTxt]}>OR</Text>
            <View style={[styles.dividerCon.divider]} />
          </View>
          <TouchableOpacity style={[styles.googleBtn]}>
            <Image
              style={[styles.googleBtnTxt]}
              source={require('../asset/onBordingScreens/google.png')}
            />
            <Text style={[styles.btnTxt]}>Connect with Google</Text>
          </TouchableOpacity>
          <View style={[styles.footer,{flexDirection:'row',marginTop:10}]}>
            <Text>Have trobule logged in ? </Text><TouchableOpacity><Text style={{color:'#530082'}}>Contact us</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-between',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  btnView: {marginHorizontal: 20, alignItems: 'center', width: '80%',justifyContent:'space-between'},
  btnViewTxt: {
    color: '#aaaaaa',
    fontSize: 15,
    fontWeight: '600',
    textTransform: 'capitalize',
    textAlign: 'center',marginBottom:10
  },
  btn: {
    width: '100%',
    borderRadius: 10,
    borderWidth: 1.2,
    paddingVertical: 15,
    alignItems: 'center',
    borderColor: 'tomato',
    justifyContent: 'center',
    marginTop: 8,
  },
  btnTxt: {
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'tomato',
  },
  dividerCon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    dividerTxt: {fontSize: 20, color: '#8395a3', marginHorizontal: 5},
    divider: {width: '40%', backgroundColor: '#8395a3', height: 1},
  },
  googleBtn: {
    width: '100%',
    borderRadius: 10,
    borderWidth: 1.2,
    paddingVertical: 6,
    alignItems: 'center',
    borderColor: 'tomato',
    flexDirection: 'row',
  },
  googleBtnTxt: {height: 40, width: 40, marginHorizontal: 10},
});
