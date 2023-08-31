import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LiveClassScreen from './LiveClassScreen';
import Instructions from './Instructions';
import Timing from './Timing';
import Video from './Video';
import Notes from './Notes';


const Stack = createNativeStackNavigator();

export default class ClassNavigator extends Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName='liveclass'
        >
        <Stack.Screen name="liveclass" component={LiveClassScreen} />
        <Stack.Screen name="instruction" component={Instructions} />
        <Stack.Screen name="timing" component={Timing} />
        <Stack.Screen name="video" component={Video} />
        <Stack.Screen name="notes" component={Notes} />
      


      </Stack.Navigator>
    );
  }
}
