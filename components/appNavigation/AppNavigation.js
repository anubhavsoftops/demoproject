import {Text, View, SafeAreaView} from 'react-native';
import React, {Component} from 'react';
import LandingPage from './screens/LandingPage';
import AppDrawer from './navigation/AppDrawer';

export default class AppNavigation extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
       <AppDrawer/>
      </View>
    );
  }
}
