import {Text, View, Image, TextInput} from 'react-native';
import React, {Component} from 'react';

export default class Screen7 extends Component {
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
                width: '90%',
                height: 50,
                borderWidth: 1,
                borderRadius: 25,
                borderColor: '#d6d6d6',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}>
              <Image
                style={{height: 25, width: 25, color: 'red'}}
                source={require('./src/phonePurple.png')}
              />

              <TextInput
                style={{
                  height: '100%',
                  width: '80%',
                  fontSize: 20,
                  paddingLeft: 8,
                }}
                placeholder="Phone Number"
              />
            </View>
            <Text style={{marginTop: 50, marginBottom: 30}}>
              Add phone number
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 25,
                fontWeight: 'bold',
                color: '#dbdbdb',
              }}>
              +965
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 15,
                marginBottom: 40,
              }}>
              {/* Number Boxs  */}
              <View
                style={{
                  borderWidth: 1,
                  height: 50,
                  width: 35,
                  borderColor: '#dbdbdb',
                  alignItems: 'center',
                  borderRadius: 10,
                  justifyContent: 'center',
                  paddingLeft: 5,
                }}>
                <TextInput
                  maxLength={1}
                  style={{height: '80%', width: '80%', fontSize: 30}}
                />
              </View>
              <View
                style={{
                  borderWidth: 1,
                  height: 50,
                  width: 35,
                  borderColor: '#dbdbdb',
                  alignItems: 'center',
                  borderRadius: 10,
                  justifyContent: 'center',
                  paddingLeft: 5,
                }}>
                <TextInput
                  maxLength={1}
                  style={{height: '80%', width: '80%', fontSize: 30}}
                />
              </View>
              <View
                style={{
                  borderWidth: 1,
                  height: 50,
                  width: 35,
                  borderColor: '#dbdbdb',
                  alignItems: 'center',
                  borderRadius: 10,
                  justifyContent: 'center',
                  paddingLeft: 5,
                }}>
                <TextInput
                  maxLength={1}
                  style={{height: '80%', width: '80%', fontSize: 30}}
                />
              </View>
              <View
                style={{
                  borderWidth: 1,
                  height: 50,
                  width: 35,
                  borderColor: '#dbdbdb',
                  alignItems: 'center',
                  borderRadius: 10,
                  justifyContent: 'center',
                  paddingLeft: 5,
                }}>
                <TextInput
                  maxLength={1}
                  style={{height: '80%', width: '80%', fontSize: 30}}
                />
              </View>
              <View
                style={{
                  borderWidth: 1,
                  height: 50,
                  width: 35,
                  borderColor: '#dbdbdb',
                  alignItems: 'center',
                  borderRadius: 10,
                  justifyContent: 'center',
                  paddingLeft: 5,
                }}>
                <TextInput
                  maxLength={1}
                  style={{height: '80%', width: '80%', fontSize: 30}}
                />
              </View>
              <View
                style={{
                  borderWidth: 1,
                  height: 50,
                  width: 35,
                  borderColor: '#dbdbdb',
                  alignItems: 'center',
                  borderRadius: 10,
                  justifyContent: 'center',
                  paddingLeft: 5,
                }}>
                <TextInput
                  maxLength={1}
                  style={{height: '80%', width: '80%', fontSize: 30}}
                />
              </View>
              <View
                style={{
                  borderWidth: 1,
                  height: 50,
                  width: 35,
                  borderColor: '#dbdbdb',
                  alignItems: 'center',
                  borderRadius: 10,
                  justifyContent: 'center',
                  paddingLeft: 5,
                }}>
                <TextInput
                  maxLength={1}
                  style={{height: '80%', width: '80%', fontSize: 30}}
                />
              </View>
              <View
                style={{
                  borderWidth: 1,
                  height: 50,
                  width: 35,
                  borderColor: '#dbdbdb',
                  alignItems: 'center',
                  borderRadius: 10,
                  justifyContent: 'center',
                  paddingLeft: 5,
                }}>
                <TextInput
                  maxLength={1}
                  style={{height: '80%', width: '80%', fontSize: 30}}
                />
              </View>
            </View>
            <Text style={{fontSize:18,textAlign:'center',fontWeight:'bold',color: '#8634eb',}}>Send verifaction code</Text>
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
