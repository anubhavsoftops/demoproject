import {Text, View, Image} from 'react-native';
import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeProfile1 from '../userProfile/Screen1';
import OrderHome from '../orderingPages/orderHome';
import Screen2 from '../screens2/parent';
import UserProfile1 from '../userProfile/Screen1';
import UserProfile2 from '../userProfile/Screen2';
import Contact11 from '../contactScreen/Screen11';
import UserProfile3 from '../userProfile/Screen3';

const Tab = createBottomTabNavigator();

export default class AppNavigate extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name="Home"
          component={OrderHome}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center'}}>
                <Image
                  style={{
                    height: 30,
                    width: 30,
                    tintColor: focused ? '#b59de3' : '#C8C8C8',
                  }}
                  source={require('../src/homeGray.png')}
                />
                {focused ? <Text style={{fontSize:10,color:focused?'#b59de3':'#c8c8c8'}}>Home</Text> : null}
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="order"
          component={UserProfile3}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center'}}>
                <Image
                  style={{
                    height: 30,
                    width: 30,
                    tintColor: focused ? '#b59de3' : '#C8C8C8',
                  }}
                  source={require('../src/searchGray.png')}
                />
                {focused ? <Text style={{fontSize:10,color:focused?'#b59de3':'#c8c8c8'}}>Search</Text> : null}
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Screen2"
          component={UserProfile1}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center'}}>
                <Image
                  style={{
                    height: 30,
                    width: 30,
                    tintColor: focused ? '#b59de3' : '#C8C8C8',
                  }}
                  source={require('../src/compassGray.png')}
                />
                {focused ? <Text style={{fontSize:10,color:focused?'#b59de3':'#c8c8c8'}}>Compass</Text> : null}
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="UserProfile1"
          component={UserProfile2}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center'}}>
                <Image
                  style={{
                    height: 30,
                    width: 30,
                    tintColor: focused ? '#b59de3' : '#C8C8C8',
                  }}
                  source={require('../src/commentGray.png')}
                />
                {focused ? <Text style={{fontSize:10,color:focused?'#b59de3':'#c8c8c8'}}>Comment</Text> : null}
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="UserProfile2"
          component={Contact11}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center'}}>
                <Image
                  style={{
                    height: 30,
                    width: 30,
                    tintColor: focused ? '#b59de3' : '#C8C8C8',
                  }}
                  source={require('../src/user.png')}
                />
                {focused ? <Text style={{fontSize:10,color:focused?'#b59de3':'#c8c8c8'}}>Profile</Text> : null}
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
