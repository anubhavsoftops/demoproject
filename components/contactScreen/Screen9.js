import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

export default class Screen9 extends Component {
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
          <View style={{width: '100%'}}>
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
                alignSelf: 'center',marginBottom:50
              }}>
              <Image
                style={{height: 32, width: 32, color: 'red'}}
                source={require('./src/locationPurple.png')}
              />

              <TextInput
                style={{
                  height: '100%',
                  width: '80%',
                  fontSize: 25,
                  paddingLeft: 8,
                }}
                placeholder="Location"
              />
            </View>
            <View style={{}}>
              <Image
                style={{height: 250, width: '100%'}}
                source={require('./src/maps.png')}
              />
              <View
                style={{
                  backgroundColor: '#3BBEEB',
                  paddingHorizontal: 35,
                  paddingVertical: 5,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 12}}>
                  Hitteen, Block X, Street X , house X
                </Text>
                <Text style={{color: 'white', fontSize: 10}}>Edit on map</Text>
              </View>
              <View>
                <View style={{paddingHorizontal: 25, paddingTop: 10}}>
                  <Text style={{fontSize: 12}}>Add address manually</Text>
                  <View style={{flexDirection: 'row', marginTop: 10}}>
                    <TouchableOpacity
                      style={{
                        width: 80,
                        height: 28,
                        backgroundColor: '#3BBEEB',
                        borderRadius: 4,
                        justifyContent: 'center',
                        marginRight: 10,
                      }}>
                      <Text style={{textAlign: 'center', color: 'white'}}>
                        Home
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        width: 80,
                        height: 28,
                        borderRadius: 4,
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: '#cfcfcf',
                      }}>
                      <Text style={{textAlign: 'center'}}>Work</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{marginTop:20}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: 180,
                      }}>
                      <View style={{width:'50%'}}>
                        <Text  style={{color:'gray'}}>Area:</Text>
                      </View>
                      <View style={{width:'50%'}}>
                        <Text style={{fontWeight:'bold'}}>XXXXXXX</Text>
                      </View>
                    </View>
                      <View style={{width:'100%',height:0.5,backgroundColor:'#cfcfcf',marginTop:5}} />
                    <View />
                  </View>
                  <View style={{marginTop:20}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: 180,
                      }}>
                      <View style={{width:'50%'}}>
                        <Text  style={{color:'gray'}}>Block:</Text>
                      </View>
                      <View style={{width:'50%'}}>
                        <Text style={{fontWeight:'bold'}}>XX</Text>
                      </View>
                    </View>
                      <View style={{width:'100%',height:0.5,backgroundColor:'#cfcfcf',marginTop:5}} />
                    <View />
                  </View>
                  <View style={{marginTop:20}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: 180,
                      }}>
                      <View style={{width:'50%'}}>
                        <Text  style={{color:'gray'}}>Street:</Text>
                      </View>
                      <View style={{width:'50%'}}>
                        <Text style={{fontWeight:'bold'}}>XXXX</Text>
                      </View>
                    </View>
                      <View style={{width:'100%',height:0.5,backgroundColor:'#cfcfcf',marginTop:5}} />
                    <View />
                  </View>
                  <View style={{marginTop:20}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: 180,
                      }}>
                      <View style={{width:'50%'}}>
                        <Text  style={{color:'gray'}}>House:</Text>
                      </View>
                      <View style={{width:'50%'}}>
                        <Text style={{fontWeight:'bold'}}>XXXX</Text>
                      </View>
                    </View>
                      <View style={{width:'100%',height:0.5,backgroundColor:'#cfcfcf',marginTop:5}} />
                    <View />
                  </View>
                </View>
              </View>
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
