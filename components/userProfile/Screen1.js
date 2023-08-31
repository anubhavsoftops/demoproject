import {
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import React, {Component} from 'react';
import {data} from './data';

export default class Screen1 extends Component {
  constructor() {
    super();
    this.state = {
      flatlistData: data,
    };
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
  declined = val => {
    let temp = this.state.flatlistData.map((item, i) => {
      if (val === i) {
        return {
          ...item,
          isDeclined: !this.state.isDeclined,
        };
      }
      return item;
    });
    this.setState({
      flatlistData: temp,
    });
  };
  accepted = val => {
    let temp = this.state.flatlistData.map((item, i) => {
      if (val === i) {
        return {
          ...item,
          isAccepted: !this.state.isAccepted,
        };
      }
      return item;
    });
    this.setState({
      flatlistData: temp,
    });
  };

  render() {
    return (
      <SafeAreaView>

      <View style={{height: '100%'}}>
        <View>{this.topNavBar()}</View>
        <View style={{flex: 1, paddingHorizontal: 20}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: 20,
              marginBottom: 15,
            }}>
            Follow Requests
          </Text>
          <FlatList
            data={this.state.flatlistData}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <View
              key={index}
              style={{
                flexDirection: 'row',
                marginBottom: 10,
              }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    flex: 1,
                    width: '100%',
                  }}>
                  <View
                    style={{
                      borderWidth: 2,
                      padding: 4,
                      borderRadius: 30,
                      marginRight: 15,
                    }}>
                    <View
                      style={{
                        height: 35,
                        width: 35,
                        backgroundColor: '#585BA8',
                        borderRadius: 25,
                      }}></View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      flex: 1,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                        {item.name}
                      </Text>
                      <Text style={{fontSize: 15, color: 'gray'}}>
                        {item.active}
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      {item.isDeclined ? (
                        <TouchableOpacity style={[styles.touchButton]}>
                          <Text
                            style={{
                              textAlign: 'center',
                              color: 'white',
                              fontSize: 10,
                            }}>
                            Declined
                          </Text>
                        </TouchableOpacity>
                      ) : item.isAccepted ? (
                        <TouchableOpacity
                        style={[
                          styles.touchButton,
                          {backgroundColor: '#585BA8'},
                        ]}>
                          <Text
                            style={{
                              textAlign: 'center',
                              color: 'white',
                              fontSize: 10,
                            }}>
                            Follow Back
                          </Text>
                        </TouchableOpacity>
                      ) : (
                        // item.button === true &&
                        (
                          <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity
                              onPress={() => this.declined(index)}
                              style={[
                                styles.touchButton,
                                {
                                  borderWidth: 1,
                                  borderColor: '#cfcfcf',
                                  backgroundColor: 'white',
                                },
                              ]}>
                              <Text style={{textAlign: 'center', fontSize: 10}}>
                                Decline
                              </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                              onPress={() => this.accepted(index)}
                              style={[
                                styles.touchButton,
                                {
                                  borderWidth: 1,
                                  borderColor: '#cfcfcf',
                                  backgroundColor: 'white',
                                },
                              ]}>
                              <Text style={{textAlign: 'center', fontSize: 10}}>
                                Accept
                              </Text>
                            </TouchableOpacity>
                          </View>
                        )
                        )}
                    </View>
                  </View>
                </View>
              </View>
            )}
            />
        </View>

        {/* <View>{this.bottomNavBar()}</View> */}
      </View>
            </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  touchButton: {
    width: 70,
    height: 24,
    borderRadius: 4,
    justifyContent: 'center',
    backgroundColor: '#D42028',
    marginRight: 10,
  },
});
