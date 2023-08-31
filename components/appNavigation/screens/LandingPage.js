import {Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFollowing: false,
      isExplore: false,
    };
    console.log(props);
  }
  render() {
    return (
      <SafeAreaView>
        <View style={{width: '100%', height: 100}}>
          <TouchableOpacity
            style={{
              margin: 15,
              position: 'absolute',
              bottom: 0,
              right: 0,
            }}
            onPress={() => this.props.navigation.toggleDrawer()}>
            <Image
              style={{tintColor: 'gray', height: 50, width: 50}}
              source={require('../../src/menuIcon.png')}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
