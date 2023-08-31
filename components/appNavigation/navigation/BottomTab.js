import {Text, View, Image} from 'react-native';
import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ActivityScreen from '../screens/ActivityScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {options} from '../../orderingPages/data';
import MyRankLearning from '../../MyRankLearning/MyRankLearningHome';
const Tab = createBottomTabNavigator();

export default class BottomTab extends Component {
  constructor(props) {
    super(props);
  }
  focusButton = (name, image) => {
    return (
      <View style={{marginBottom: 30, alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: '#F46365',
            padding: 12,
            borderRadius: 30,
          }}>
          <Image
            style={{height: 30, width: 30, tintColor: '#fff'}}
            source={require('../../src/user.png')}
          />
        </View>
        <Text style={{color: '#F46365'}}>{name}</Text>
      </View>
    );
  };
  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          options={{
            title: 'Home',

            tabBarIcon: ({focused}) =>
              focused ? (
                <View style={{marginBottom: 30, alignItems: 'center'}}>
                  <View
                    style={{
                      backgroundColor: '#F46365',
                      padding: 12,
                      borderRadius: 30,
                    }}>
                    <Image
                      style={{height: 30, width: 30, tintColor: '#fff'}}
                      source={require('../../src/homeGray.png')}
                    />
                  </View>
                  <Text style={{color: '#56008E'}}>Home</Text>
                </View>
              ) : (
                <View>
                  <Image
                    style={{height: 30, width: 30, tintColor: '#56008E'}}
                    source={require('../../src/homeGray.png')}
                  />
                </View>
              ),
          }}
          name="Home"
          component={MyRankLearning}
        />
        <Tab.Screen
          options={{
            title: 'Home',

            tabBarIcon: ({focused}) =>
              focused ? (
                <View style={{marginBottom: 30, alignItems: 'center'}}>
                  <View
                    style={{
                      backgroundColor: '#F46365',
                      padding: 12,
                      borderRadius: 30,
                    }}>
                    <Image
                      style={{height: 30, width: 30, tintColor: '#fff'}}
                      source={require('../../src/searchGray.png')}
                    />
                  </View>
                  <Text style={{color: '#56008E'}}>Search</Text>
                </View>
              ) : (
                <View>
                  <Image
                    style={{height: 30, width: 30, tintColor: '#56008E'}}
                    source={require('../../src/searchGray.png')}
                  />
                </View>
              ),
          }}
          name="Search"
          component={SearchScreen}
        />
        <Tab.Screen
          options={{
            title: 'Home',

            tabBarIcon: ({focused}) =>
              focused ? (
                <View style={{marginBottom: 30, alignItems: 'center'}}>
                  <View
                    style={{
                      backgroundColor: '#F46365',
                      padding: 12,
                      borderRadius: 30,
                    }}>
                    <Image
                      style={{height: 30, width: 30, tintColor: '#fff'}}
                      source={require('../../src/community.png')}
                    />
                  </View>
                  <Text style={{color: '#56008E'}}>Community</Text>
                </View>
              ) : (
                <View>
                  <Image
                    style={{height: 30, width: 30, tintColor: '#56008E'}}
                    source={require('../../src/community.png')}
                  />
                </View>
              ),
          }}
          name="Activity"
          component={ActivityScreen}
        />
        <Tab.Screen
          options={{
            title: 'Home',

            tabBarIcon: ({focused}) =>
              focused ? (
                <View style={{marginBottom: 30, alignItems: 'center'}}>
                  <View
                    style={{
                      backgroundColor: '#F46365',
                      padding: 12,
                      borderRadius: 30,
                    }}>
                    <Image
                      style={{height: 30, width: 30, tintColor: '#fff'}}
                      source={require('../../src/user.png')}
                    />
                  </View>
                  <Text style={{color: '#56008E'}}>Profile </Text>
                </View>
              ) : (
                <View>
                  <Image
                    style={{height: 30, width: 30, tintColor: '#56008E'}}
                    source={require('../../src/user.png')}
                  />
                </View>
              ),
          }}
          name="Profile"
          component={ProfileScreen}
        />
      </Tab.Navigator>
    );
  }
}
