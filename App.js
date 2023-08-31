import React, {useState} from 'react';
import {
  Button,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  FlatList,
  StyleSheet,
  Alert,
} from 'react-native';
import UserData from './components/userData';
import Screen1 from './components/screens/parent';
import Screen2 from './components/screens2/parent';
import HomeContact from './components/contactScreen/HomeContact';
import HomeProfile from './components/userProfile/HomeProfile';
import OrderHome from './components/orderingPages/orderHome';
import AppNavigate from './components/navigation/AppNavigate';
import AppNavigations from './components/appNavigation/AppNavigation';

import 'react-native-gesture-handler';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTab from './components/appNavigation/navigation/BottomTab';
import MyRankLearningHome from './components/MyRankLearning/MyRankLearningHome';
import OnBoarding from './components/MyRankLearning/loginScreens/OnBoarding';
import RegisterScreen from './components/MyRankLearning/loginScreens/registerScreen';
import PackageScreen from './components/MyRankLearning/loginScreens/PackageScreen';
import PkgPriceScreen from './components/MyRankLearning/loginScreens/PkgPriceScreen';
import RegistrationForm from './components/MyRankLearning/loginScreens/RegistrationForm';
import AppNavigation from './components/MyRankLearning/AppNavigation';
import LoginScreen from './components/MyRankLearning/loginScreens/LoginScreen';
import LoginSuccess from './components/MyRankLearning/loginScreens/LoginSuccess';
import OTPVerify from './components/MyRankLearning/loginScreens/OTPVerify';
import Forget from './components/MyRankLearning/loginScreens/Forget';
import Register from './components/MyRankLearning/loginScreens/register';
import LiveClassScreen from './components/MyRankLearning/liveClasses/LiveClassScreen';
import ClassNavigator from './components/MyRankLearning/liveClasses/ClassNavigator';

const App = () => {
  return (
    <>
      <NavigationContainer>
        {/* <AppNavigations/> */}
        {/* <AppNavigate/> */}
        {/* <BottomTab/> */}
        {/* <OnBoarding /> */}
        {/* <RegisterScreen/> */}
        {/* <PackageScreen/> */}
        {/* <PkgPriceScreen/> */}
        {/* <RegistrationForm/> */}
        {/* <AppNavigation /> */}
       <ClassNavigator/>
      
        {/* <Register/> */}
        {/* <Forget/> */}
        {/* <LoginScreen/> */}
        {/* <LoginSuccess/> */}
        {/* <OTPVerify/> */}
        {/* <MyRankLearningHome/> */}
        {/* <HomeContact/> */}
        {/* <HomeProfile/> */}
      </NavigationContainer>
    </>
  );
};

export default App;

// import React, { Component } from 'react'
// import { AppRegistry, StyleSheet, Text, View } from 'react-native'

// import Swiper from 'react-native-swiper'

// const styles = StyleSheet.create({
//   wrapper: {},
//   slide1: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#9DD6EB'
//   },
//   slide2: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#97CAE5'
//   },
//   slide3: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#92BBD9'
//   },
//   text: {
//     color: '#fff',
//     fontSize: 30,
//     fontWeight: 'bold'
//   }
// })

// export default class App extends Component {
//   render() {
//     return (
//       <Swiper style={styles.wrapper} >
//         <View style={styles.slide1}>
//           <Text style={styles.text}>Hello Swiper</Text>
//         </View>
//         <View style={styles.slide2}>
//           <Text style={styles.text}>Beautiful</Text>
//         </View>

//       </Swiper>
//     )
//   }
// }
