import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React, {Component} from 'react';
import {profileData, activityData} from './data';

// console.log(profileData);
export default class Screen2 extends Component {
  constructor() {
    super();
    this.state = {
      isData: activityData,
      isFollow: false,
    };
  }
  accepted = val => {
    let temp = this.state.isData.map((item, i) => {
      if (val === i) {
        return {
          ...item,
          isFollowing: !item.isFollowing,
        };
      }
      return item;
    });
    this.setState({
      isData: temp,
    });
  };
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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <Image
              style={{height: 30, width: 30}}
              source={require('./src/back.png')}
            />
            <Text style={{marginLeft: 15, fontSize: 16, fontWeight: 'bold'}}>
              Suggestion for you
            </Text>
          </View>
          <Text>See all</Text>
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
  profileSection = (item, index) => {
    return (
      <View key={index} style={[styles.profile.profileCon]}>
        <View style={[styles.profile.profilePic]} />
        <Text style={[styles.profile.profileName]}>{item.name}</Text>
        <Text style={[styles.profile.profileUserName]}>{item.username}</Text>
        <TouchableOpacity style={[styles.profile.profileButton]}>
          <Text style={[styles.profile.ButtonText]}> Follow </Text>
        </TouchableOpacity>
      </View>
    );
  };
  activitySection = (e, index) => {
    return (
      <>
        <View key={index} style={[styles.list.listView]}>
          <View style={[styles.list.listViewInside]}>
            <View style={[styles.list.storyCircle]}>
              <View style={[styles.list.listCircle]}></View>
            </View>
            <View style={[styles.list.listNameView]}>
              <View style={[styles.list.listNameInside]}>
                <Text style={{fontSize: 13, fontWeight: 'bold'}}>{e.name}</Text>
                <Text style={{fontSize: 12, color: 'gray', marginLeft: 3}}>
                  {e.isLiked
                    ? 'Liked your post'
                    : e.isCommented
                    ? 'commented on your post'
                    : e.isFollowing
                    ? 'is now following you'
                    : null}
                </Text>
                <Text style={{fontSize: 12, color: 'gray', marginLeft: 3}}>
                  45d
                </Text>
              </View>
              <View style={[styles.list.listButtonView]}>
                {e.isImage ? (
                  <View style={[styles.list.picView]} />
                ) : e.isFollowing ? (
                  <TouchableOpacity
                    onPress={() => {
                      this.accepted(index);
                    }}
                    style={[
                      styles.list.touchButton,
                      {backgroundColor: '#585BA8'},
                    ]}>
                    <Text
                      style={[styles.list.touchButtonText, {color: 'white'}]}>
                      Follow
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      this.accepted(index);
                    }}
                    style={[
                      styles.list.touchButton,
                      {
                        borderWidth: 1,
                        borderColor: '#cfcfcf',
                        backgroundColor: 'white',
                      },
                    ]}>
                    <Text style={[styles.list.touchButtonText]}>Following</Text>
                  </TouchableOpacity>
                )}
                {/* {e.isFollowing ? (
                  e.isFollowing ? (
                    <TouchableOpacity
                      onPress={() => {
                        this.accepted(index);
                      }}
                      style={[
                        styles.list.touchButton,
                        {backgroundColor: '#585BA8'},
                      ]}>
                      <Text
                        style={[styles.list.touchButtonText, {color: 'white'}]}>
                        Follow
                      </Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => {
                        this.accepted(index);
                      }}
                      style={[
                        styles.list.touchButton,
                        {
                          borderWidth: 1,
                          borderColor: '#cfcfcf',
                          backgroundColor: 'white',
                        },
                      ]}>
                      <Text style={[styles.list.touchButtonText]}>
                        Following
                      </Text>
                    </TouchableOpacity>
                  )
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      this.accepted(index);
                    }}
                    style={[
                      styles.list.touchButton,
                      {
                        borderWidth: 1,
                        borderColor: '#cfcfcf',
                        backgroundColor: 'white',
                      },
                    ]}>
                    <Text style={[styles.list.touchButtonText]}>Following</Text>
                  </TouchableOpacity>
                )} */}
              </View>
            </View>
          </View>
        </View>
      </>
    );
  };
  render() {
    return (
      <SafeAreaView>
        <View style={{height: '100%'}}>
          <View>{this.topNavBar()}</View>
          <View style={{flex: 1}}>
            <View style={{paddingLeft: 20}}>
              <ScrollView>
                <FlatList
                  horizontal
                  data={profileData}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item, index}) => (
                    <View style={{}}>{this.profileSection(item, index)}</View>
                  )}
                />
              </ScrollView>
            </View>
            <View style={[styles.activity.activityView]}>
              <Text style={[styles.activity.activityText]}>Activity</Text>
              <Text style={{fontSize: 10}}>Follow Request +99</Text>
            </View>
            <ScrollView>
              <View style={{paddingHorizontal: 15}}>
                <Text style={{marginBottom: 12}}>New</Text>
                {/* {this.activitySection()} */}
                {this.state.isData
                  .slice(0, 3)
                  .map((e, index) => this.activitySection(e, index))}
              </View>
              <View style={{paddingHorizontal: 15}}>
                <Text style={{marginBottom: 12}}>Today</Text>
                {/* {this.activitySection()} */}
                {this.state.isData.map((e, index) =>
                  this.activitySection(e, index),
                )}
              </View>
            </ScrollView>
          </View>

          {/* <View>{this.bottomNavBar()}</View> */}
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  profile: {
    profileCon: {
      height: 160,
      width: 120,
      backgroundColor: '#F5F6F7',
      borderRadius: 12,
      alignItems: 'center',
      paddingVertical: 10,
      marginRight: 10,
      justifyContent: 'space-around',
    },
    profilePic: {
      height: 70,
      width: 70,
      backgroundColor: 'white',
      borderRadius: 100,
    },
    profileName: {
      fontSize: 18,
      fontWeight: 'bold',
      // marginTop: 3,
    },
    profileUserName: {
      fontSize: 8,
    },
    profileButton: {
      width: '80%',
      backgroundColor: '#585BA8',
      height: 30,
      borderRadius: 6,
      justifyContent: 'center',
      alignItems: 'center',
    },
    ButtonText: {
      fontWeight: 'bold',
      color: 'white',
      fontSize: 13,
    },
  },
  activity: {
    activityView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
      paddingVertical: 20,
      alignItems: 'center',
    },
    activityText: {fontSize: 20, fontWeight: 'bold'},
  },
  list: {
    listView: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    listViewInside: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      width: '100%',
    },
    storyCircle: {
      borderWidth: 2,
      padding: 4,
      borderRadius: 30,
      marginRight: 15,
    },
    listCircle: {
      height: 35,
      width: 35,
      backgroundColor: '#585BA8',
      borderRadius: 25,
    },
    listNameView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flex: 1,
    },
    listNameInside: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    listButtonView: {flexDirection: 'row', alignItems: 'center'},
    picView: {
      height: 40,
      width: 40,
      backgroundColor: '#E6E7E7',
      borderRadius: 8,
    },
    touchButton: {
      width: 70,
      height: 24,
      borderRadius: 4,
      justifyContent: 'center',
      backgroundColor: '#D42028',
    },
    touchButtonText: {
      textAlign: 'center',
      fontSize: 10,
      fontWeight: 'bold',
    },
  },
});
