import LandingPage from '../screens/LandingPage';
import React from 'react';
import {Component} from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import CustomDrawerContent from './CustomDrawerContent';
import {StyleSheet} from 'react-native';

const Drawer = createDrawerNavigator();

export default class AppDrawer extends Component {
  render() {
    return (
      <>
        <Drawer.Navigator
          screenOptions={{
            headerShown: false,
            defaultStatus: false,
            drawerType: 'front',
            drawerPosition: 'left',//for drawer position
            drawerStyle: styles.drawerStyle,//for styleing drawer
            drawerStatusBarAnimation:'slide',
            drawerHideStatusBarOnOpen:true,//for hiding status bar 
            overlayColor:'rgba(94, 94, 94, 0.09)',
            swipeEnabled:false
          }}
          drawerContent={props => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="Landing Page" component={LandingPage} />
          <Drawer.Screen name="Article" component={HomeScreen} />
        </Drawer.Navigator>
      </>
    );
  }
}
const styles = StyleSheet.create({
  drawerStyle: {backgroundColor: '#fff', borderTopEndRadius: 100},
});
