import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoarding from './loginScreens/OnBoarding';
import MyRankLearningHome from './MyRankLearningHome';
import RegisterScreen from './loginScreens/registerScreen';
import PackageScreen from './loginScreens/PackageScreen';
import PkgPriceScreen from './loginScreens/PkgPriceScreen';
// import RegistrationForm from './loginScreens/RegistrationForm';
import LoginScreen from './loginScreens/LoginScreen';
import OTPVerify from './loginScreens/OTPVerify';
import LoginSuccess from './loginScreens/LoginSuccess';
import Forget from './loginScreens/Forget';
import Register from './loginScreens/register';
import LiveClassScreen from './liveClasses/LiveClassScreen';

const Stack = createNativeStackNavigator();

export default class AppNavigation extends Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName='liveclass'
        >
        <Stack.Screen name="onBorading" component={OnBoarding} />
        <Stack.Screen name="pkgScreen" component={PackageScreen} />
        <Stack.Screen name="pkgPriceScreen" component={PkgPriceScreen} />
        <Stack.Screen name="register" component={RegisterScreen} />
        <Stack.Screen name="registerForm" component={Register} />
        <Stack.Screen name="loginscreen"  component={LoginScreen} />
        <Stack.Screen name="otpverify" component={OTPVerify} />
        <Stack.Screen name="loginsuccess" component={LoginSuccess} />
        <Stack.Screen name="forget" component={Forget} />
        <Stack.Screen name="home" component={MyRankLearningHome} />
        <Stack.Screen name="liveclass" component={LiveClassScreen} />


      </Stack.Navigator>
    );
  }
}
