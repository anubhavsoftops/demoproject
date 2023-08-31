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
import Swiper from 'react-native-swiper';

export default class OnBoarding extends Component {
  constructor() {
    super();
    this.state = {
      num: 0,
    };
  }
  changeIndex = index => {
    this.setState({num: index});
    console.log(this.state.num);
  };
  render() {
    return (
      <>
        <View style={[styles.container]}>
          <View style={{height: '80%'}}>
            <Swiper
              index={0}
              onIndexChanged={index => this.changeIndex(index)}
              loop={false}
              dot={<View style={[styles.dot]} />}
              activeDot={<View style={[styles.activeDot]} />}>
              <View style={{height: '100%'}}>
                <ImageBackground
                  resizeMode="stretch"
                  style={[styles.backImg, {height: '82%'}]}
                  source={require('../asset/onBordingScreens/onboardingOne.png')}>
                  <Image
                    style={[styles.insiderImg]}
                    resizeMode="contain"
                    source={require('../asset/onBordingScreens/onBoardingOneChar.png')}
                  />
                </ImageBackground>

                <View style={[styles.textView]}>
                  <Text style={[styles.titleText]}>Learn Online</Text>
                  <Text style={[styles.textDesc]}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Illo distinctio provident nemo, voluptate voluptates
                    consectetur at perspiciatis voluptatum soluta eum!
                  </Text>
                </View>
              </View>

              {/* Slide2  */}
              <View style={{height: '100%'}} index={2}>
                <ImageBackground
                  resizeMode="stretch"
                  style={[styles.backImg]}
                  source={require('../asset/onBordingScreens/onboardingTwo.png')}>
                  <Image
                    style={[styles.insiderImg]}
                    resizeMode="contain"
                    source={require('../asset/onBordingScreens/onBoardingTwoChar.png')}
                  />
                </ImageBackground>

                <View style={[styles.textView]}>
                  <Text style={[styles.titleText]}>Widen Horizons</Text>
                  <Text style={[styles.textDesc]}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Illo distinctio provident nemo, voluptate voluptates
                    consectetur at perspiciatis voluptatum soluta eum!
                  </Text>
                </View>
              </View>
              {/* slide 3 */}
              <View style={{height: '100%'}} index={3}>
                <ImageBackground
                  resizeMode="stretch"
                  style={[styles.backImg]}
                  source={require('../asset/onBordingScreens/onboardingThree.png')}>
                  <Image
                    style={[styles.insiderImg]}
                    resizeMode="contain"
                    source={require('../asset/onBordingScreens/onBoardingThreeChar.png')}
                  />
                </ImageBackground>

                <View style={[styles.textView]}>
                  <Text style={[styles.titleText]}>Gain Knowledge</Text>
                  <Text style={[styles.textDesc]}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Illo distinctio provident nemo, voluptate voluptates
                    consectetur at perspiciatis voluptatum soluta eum!
                  </Text>
                </View>
              </View>
            </Swiper>
          </View>
          <View>
            {this.state.num === 2 ? (
              <TouchableOpacity onPress={() => this.props.navigation.navigate('register')}
                style={{
                  backgroundColor: 'tomato',
                  paddingHorizontal: 120,
                  paddingVertical: 15,
                  borderRadius: 10,
                  marginBottom: 50,
                }}>
                <Text
                  style={{textAlign: 'center', fontSize: 18, color: '#fff'}}>
                  Get Started
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('register')}
                style={{marginBottom: 50}}>
                <Text
                  style={{textAlign: 'center', fontSize: 18, color: '#610282'}}>
                  Skip
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backImg: {
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  insiderImg: {height: '60%', width: '60%', marginTop: -80},
  textView: {marginTop: -100},
  titleText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#610282',
  },
  textDesc: {textAlign: 'center', marginTop: 50, color: 'gray'},
  dot: {
    height: 8,
    width: 8,
    backgroundColor: '#aeaeae',
    marginHorizontal: 5,
    borderRadius: 10,
  },
  activeDot: {
    height: 12,
    width: 12,
    backgroundColor: '#680382',
    borderRadius: 10,
  },
});
