import {Text, View, Image, TextInput} from 'react-native';
import React, {Component} from 'react';

export default class Screen5 extends Component {
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
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            flex: 1,
          }}>
          <View>
            <View
              style={{
                width: 380,
                height: 50,
                borderWidth: 1,
                borderRadius: 25,
                borderColor: '#d6d6d6',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginBottom: 10,
              }}>
              <Image
                style={{height: 32, width: 32, marginLeft: 10}}
                source={require('./src/menuPurple.png')}
              />

              <Text
                style={{
                  fontSize: 20,
                  paddingLeft: 8,
                  textAlign: 'center',
                }}>
                {' '}
                Menu
              </Text>
            </View>

            <View style={{marginTop: 25}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Breakfast</Text>
            </View>

            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <View
                style={{
                  height: 100,
                  width: 380,
                  borderColor: '#d6d6d6',
                  borderWidth: 1,
                  borderRadius: 10,
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginBottom:10
                }}>
                <View
                  style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      height: 80,
                      width: 80,
                      backgroundColor: '#402B9D',
                      borderRadius: 5,
                    }}></View>
                  <View style={{marginLeft: 10}}>
                    <Text style={{fontWeight: 'bold'}}>Product Name</Text>
                    <Text
                      numberOfLines={3}
                      style={{width: 200, fontSize: 10, color: 'gray'}}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consectetur quae maxime tempora deserunt.
                    </Text>
                  </View>
                </View>
                <View style={{justifyContent: 'flex-start', height: '100%'}}>
                  <Text style={{fontSize: 12, marginTop: 5}}>2.250K.D</Text>
                </View>
              </View>
              <View
                style={{
                  height: 100,
                  width: 380,
                  borderColor: '#d6d6d6',
                  borderWidth: 1,
                  borderRadius: 10,
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginBottom:10
                }}>
                <View
                  style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      height: 80,
                      width: 80,
                      backgroundColor: '#402B9D',
                      borderRadius: 5,
                    }}></View>
                  <View style={{marginLeft: 10}}>
                    <Text style={{fontWeight: 'bold'}}>Product Name</Text>
                    <Text
                      numberOfLines={3}
                      style={{width: 200, fontSize: 10, color: 'gray'}}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consectetur quae maxime tempora deserunt.
                    </Text>
                  </View>
                </View>
                <View style={{justifyContent: 'flex-start', height: '100%'}}>
                  <Text style={{fontSize: 12, marginTop: 5}}>2.250K.D</Text>
                </View>
              </View>
              <View
                style={{
                  height: 100,
                  width: 380,
                  borderColor: '#d6d6d6',
                  borderWidth: 1,
                  borderRadius: 10,
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginBottom:10
                }}>
                <View
                  style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      height: 80,
                      width: 80,
                      backgroundColor: '#402B9D',
                      borderRadius: 5,
                    }}></View>
                  <View style={{marginLeft: 10}}>
                    <Text style={{fontWeight: 'bold'}}>Product Name</Text>
                    <Text
                      numberOfLines={3}
                      style={{width: 200, fontSize: 10, color: 'gray'}}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consectetur quae maxime tempora deserunt.
                    </Text>
                  </View>
                </View>
                <View style={{justifyContent: 'flex-start', height: '100%'}}>
                  <Text style={{fontSize: 12, marginTop: 5}}>2.250K.D</Text>
                </View>
              </View>
              <Image
                source={require('./src/filledPlusPurple.png')}
                style={{height: 30, width: 30, marginTop: 15}}
              />
            </View>
            {/* Add category  */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Image
                style={{height: 30, width: 30, marginRight: 10}}
                source={require('./src/plus.png')}
              />
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Add Category
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                paddingBottom: 20,
                color: '#8634eb',
              }}>
              Done
            </Text>
          </View>
        </View>
        <View>{this.bottomNavBar()}</View>
      </View>
    );
  }
}
