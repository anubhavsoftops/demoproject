import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

export default class Screen6 extends Component {
  constructor(props) {
    super(props);

    this.state = {tickVisibleFirst: false};
    this.state = {tickVisibleSecond: false};
  }
  topNavBar = () => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            paddingVertical: 20,
          }}>
          <Image
            style={{height: 30, width: 30}}
            source={require('./src/back.png')}></Image>
          <Image
            style={{height: 30, width: 30}}
            source={require('./src/thereDot.png')}></Image>
        </View>
      </>
    );
  };
  bottomNavBar = () => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            paddingVertical: 15,
            alignItems: 'center',
            borderTopColor: '#ebebeb',
            borderTopWidth: 1,
          }}>
          <Image
            style={{height: 30, width: 30}}
            source={require('./src/compassGray.png')}
          />
          <Image
            style={{height: 30, width: 30}}
            source={require('./src/searchGray.png')}
          />
          <Image
            style={{height: 30, width: 30}}
            source={require('./src/homeGray.png')}
          />
          <Image
            style={{height: 30, width: 30}}
            source={require('./src/commentGray.png')}
          />
          <Image
            style={{height: 30, width: 30}}
            source={require('./src/user.png')}
          />
        </View>
      </>
    );
  };
  render() {
    return (
      <View style={{height: '100%'}}>
        <View>{this.topNavBar()}</View>
        <View>
          <View
            style={{
              height: 200,
              width: '100%',
              backgroundColor: '#402B9D',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('./src/plusWhite.png')}
              style={{height: 100, width: 100}}
            />
          </View>
          <View style={{justifyContent: 'space-between', height: '60%'}}>
            <View style={{paddingHorizontal: 20}}>
              <Text style={{marginTop: 20, fontSize: 20, fontWeight: 'bold'}}>
                Product Name
              </Text>
              <Text style={{marginTop: 5}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt laborum magni soluta dignissimos libero quos laboriosam
                maxime, ex dolores illo. Officia, maiores numquam! Modi corporis
                iure natus laboriosam officiis. Quisquam!
              </Text>
              {/* Options  */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 20,
                  marginBottom: 10,
                }}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Options</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: 100,
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({
                        tickVisibleFirst: !this.state.tickVisibleFirst,
                      })
                    }
                    style={{
                      height: 25,
                      width: 25,
                      borderWidth: 1,
                      borderRadius: 15,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {this.state.tickVisibleFirst ? (
                      <Image
                        style={{
                          height: 50,
                          width: 50,
                          marginLeft: 8,
                          marginBottom: 14,
                        }}
                        source={require('./src/donePurple.png')}
                      />
                    ) : null}
                  </TouchableOpacity>

                  <Text>Required</Text>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: '#f0f0f0',
                  height: 50,
                  borderRadius: 25,
                  paddingHorizontal: 25,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 6,
                }}>
                <Text>Large</Text>
                <Text>Input extra cost</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#f0f0f0',
                  height: 50,
                  borderRadius: 25,
                  paddingHorizontal: 25,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 20,
                }}>
                <Text>Large</Text>
                <Text>Input extra cost</Text>
              </View>
              {/* Add Options  */}
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: 170,
                    justifyContent: 'space-between',
                  }}>
                  <Image
                    style={{height: 40, width: 40}}
                    source={require('./src/plus.png')}
                  />
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    Add Options
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: 100,
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({
                        tickVisibleSecond: !this.state.tickVisibleSecond,
                      })
                    }
                    style={{
                      height: 25,
                      width: 25,
                      borderWidth: 1,
                      borderRadius: 15,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {this.state.tickVisibleSecond ? (
                      <Image
                        style={{
                          height: 50,
                          width: 50,
                          marginLeft: 8,
                          marginBottom: 14,
                        }}
                        source={require('./src/donePurple.png')}
                      />
                    ) : null}
                  </TouchableOpacity>
                  <Text>Required</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity
              style={{
                alignItems: 'center',
                backgroundColor: '#402B9D',
                paddingVertical: 15,
                marginHorizontal: 20,
                borderRadius: 30,
                marginTop: 80,
              }}>
              <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                Press Here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>{this.bottomNavBar()}</View>
      </View>
    );
  }
}
