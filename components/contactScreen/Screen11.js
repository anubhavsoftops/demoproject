import {
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  SafeAreaViewComponent,
} from 'react-native';
import React, {Component} from 'react';

export default class Screen11 extends Component {
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
      <SafeAreaView>
        <View style={{height: '100%'}}>
          <View>{this.topNavBar()}</View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'space-between',
              flex: 1,
            }}>
            {/* select category 
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
          style={{height: 32, width: 32, color: 'red'}}
          source={require('./src/plus.png')}
          />
          
          <TextInput
          style={{
            height: '100%',
            width: '80%',
            fontSize: 25,
            paddingLeft: 8,
          }}
          placeholder="Select Category"
          />
        </View> */}
            <View style={{width: '100%', paddingHorizontal: 25}}>
              <View style={{alignItems: 'center', marginBottom: 25}}>
                <View
                  style={{
                    height: 80,
                    width: 80,
                    backgroundColor: '#CCCCCC',
                    borderRadius: 40,
                    marginBottom: 15,
                  }}></View>
                <Text
                  style={{color: '#8634eb', fontWeight: 'bold', fontSize: 12}}>
                  Change profile photo
                </Text>
              </View>
              <View style={{marginBottom: 20}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    width: 200,
                  }}>
                  <View style={{width: '40%'}}>
                    <Text style={{color: 'gray'}}>Name:</Text>
                  </View>
                  <View style={{width: '60%'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 12}}>
                      Lina Abdullah
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: 0.5,
                    backgroundColor: '#cfcfcf',
                    marginTop: 5,
                  }}
                />
                <View />
              </View>
              <View style={{marginBottom: 20}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    width: 200,
                  }}>
                  <View style={{width: '40%'}}>
                    <Text style={{color: 'gray'}}>Name:</Text>
                  </View>
                  <View style={{width: '60%'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 12}}>
                      Lina Abdullah
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: 0.5,
                    backgroundColor: '#cfcfcf',
                    marginTop: 5,
                  }}
                />
                <View />
              </View>
              <View style={{marginBottom: 20}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    width: 200,
                  }}>
                  <View style={{width: '40%'}}>
                    <Text style={{color: 'gray'}}>Category:</Text>
                  </View>
                  <View style={{width: '60%'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 12}}>
                      Content Creater
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: 0.5,
                    backgroundColor: '#cfcfcf',
                    marginTop: 5,
                  }}
                />
                <View />
              </View>

              <View
                style={{
                  width: '100%',
                  height: 45,
                  borderWidth: 1,
                  borderRadius: 25,
                  borderColor: '#d6d6d6',
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginBottom: 18,
                }}>
                <Image
                  style={{height: 32, width: 32, color: 'red'}}
                  source={require('./src/plus.png')}
                />

                <TextInput
                  style={{
                    height: '100%',
                    width: '80%',
                    fontSize: 15,
                    paddingLeft: 8,
                  }}
                  placeholder="Select Content Category"
                />
              </View>
              <View
                style={{
                  width: '100%',
                  height: 45,
                  borderWidth: 1,
                  borderRadius: 25,
                  borderColor: '#d6d6d6',
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                }}>
                <Image
                  style={{height: 32, width: 32, color: 'red'}}
                  source={require('./src/plus.png')}
                />

                <TextInput
                  style={{
                    height: '100%',
                    width: '80%',
                    fontSize: 15,
                    paddingLeft: 8,
                  }}
                  placeholder="Edit Page Header"
                />
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
          {/* <View>{this.bottomNavBar()}</View> */}
        </View>
      </SafeAreaView>
    );
  }
}
