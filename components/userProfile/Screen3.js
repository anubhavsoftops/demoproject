import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SafeAreaView
} from 'react-native';
import React, {Component} from 'react';
import {profileData, userData} from './data';

// console.log(profileData);
export default class Screen3 extends Component {
  constructor() {
    super();
    this.state = {
      isData: userData,
      filterText: '',
      place: false,
      people: false,
      service: false,
    };
  }
  accepted = val => {
    console.log(val);
    let temp = this.state.isData.map((item, i) => {
      if (val === i) {
        console.log('===>', val, i);
        return {
          ...item,
          isFollow: !item.isFollow,
        };
      }
      return item;
    });
    // console.log(temp);
    this.setState({
      isData: temp,
    });
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
  listView = (e, index) => {
    return (
      <>
        <View style={[styles.list.listTopView]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={[styles.list.storyCircle]}>
              <View style={[styles.list.storyInnerCircle]} />
            </View>
            <Text style={[styles.list.listText]}>
              {/* {e.place} */}
              {this.state.place
                ? e.place
                : this.state.people
                ? e.name
                : this.state.service
                ? e.service
                : e.place}
            </Text>
          </View>
          {this.state.people ? (
            this.state.people && e.isFollow ? (
              <TouchableOpacity
                onPress={() => {
                  this.accepted(index);
                }}
                style={{
                  backgroundColor: '#585BA8',
                  height: 30,
                  width: 70,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text>Follow</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  this.accepted(index);
                }}
                style={{
                  height: 30,
                  width: 90,
                  borderRadius: 5,
                  alignItems: 'center',
                  borderWidth: 1,
                  justifyContent: 'center',
                }}>
                <Text>Following</Text>
              </TouchableOpacity>
            )
          ) : null}
        </View>
      </>
    );
  };
  handleSearch = text => {
    // console.log(text);
    this.setState({filterText: text});
    const filterItem = userData.filter(item => {
      let state = this.state.place
        ? item.place
        : this.state.people
        ? item.name
        : this.state.service
        ? item.service
        : item.place;
      // console.log('===>',state);
      return state.toLowerCase().includes(text.toLowerCase());
    });
    this.setState({isData: filterItem});
  };

  render() {
    return (
      <SafeAreaView>

      <View style={{height: '100%'}}>
        <View style={{flex: 1}}>
          <View style={[styles.search.searchOuter]}>
            <View style={[styles.search.searchInner]}>
              <View style={[styles.search.inputSection]}>
                <Image
                  style={{height: 30, width: 30}}
                  source={require('./src/k.png')}
                  />
                <TextInput
                  placeholder="Type to search"
                  onChangeText={this.handleSearch}
                  value={this.state.filterText}
                  style={[styles.search.textInput]}
                  />
              </View>
              <TouchableOpacity>
                <Image
                  style={{height: 25, width: 25}}
                  source={require('./src/searchGray.png')}
                  />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={[styles.button.topView]}>
              <TouchableOpacity
                style={[
                  styles.button.buttonStyle,
                  {borderColor: this.state.place ? '#6d92f7' : '#C8C8C8'},
                ]}
                onPress={() => {
                  this.setState({place: true, people: false, service: false});
                }}>
                <Text
                  style={[
                    styles.button.textColor,
                    {color: this.state.place ? '#6d92f7' : '#C8C8C8'},
                  ]}>
                  Places
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button.buttonStyle,
                  {borderColor: this.state.people ? '#6d92f7' : '#C8C8C8'},
                ]}
                onPress={() => {
                  this.setState({people: true, place: false, service: false});
                }}>
                <Text
                  style={[
                    styles.button.textColor,
                    {color: this.state.people ? '#6d92f7' : '#C8C8C8'},
                  ]}>
                  People
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button.buttonStyle,
                  {borderColor: this.state.service ? '#6d92f7' : '#C8C8C8'},
                ]}
                onPress={() => {
                  this.setState({service: true, people: false, place: false});
                }}>
                <Text
                  style={[
                    styles.button.textColor,
                    {color: this.state.service ? '#6d92f7' : '#C8C8C8'},
                  ]}>
                  Services
                </Text>
              </TouchableOpacity>
            </View>
          </View>

         
            <FlatList
              data={this.state.isData}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => this.listView(item, index)}
              />
          
        </View>

        {/* <View>{this.bottomNavBar()}</View> */}
      </View>
</SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  search: {
    searchOuter: {paddingHorizontal: 20, alignItems: 'center'},
    searchInner: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 45,
      backgroundColor: 'white',
      width: '90%',
      borderRadius: 45,
      alignItems: 'center',
      paddingHorizontal: 10,
      shadowColor: '#000000',
      shadowOffset: {
        width: 4,
        height: 3,
      },
      shadowOpacity: 0.5,
      shadowRadius: 3,
    },
    inputSection: {
      flexDirection: 'row',
      height: '100%',
      width: '70%',
      alignItems: 'center',
    },
    textInput: {height: '100%', width: '100%', fontSize: 20},
  },
  button: {
    topView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
      borderBottomWidth: 1,
      borderColor: '#C8C8C8',
    },
    buttonStyle: {
      paddingHorizontal: 18,
      paddingVertical: 5,
      borderColor: '#C8C8C8',
      borderBottomWidth: 1,
      marginHorizontal: 10,
    },
    textColor: {color: '#A8A8A8', fontWeight: 'bold'},
  },
  list: {
    listTopView: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 20,
      paddingVertical: 10,
      justifyContent: 'space-between',
    },
    storyCircle: {
      borderWidth: 2,
      padding: 3,
      borderRadius: 30,
      marginRight: 15,
      borderColor: '#9729d6',
    },
    storyInnerCircle: {
      height: 35,
      width: 35,
      backgroundColor: '#585BA8',
      borderRadius: 25,
    },
    listText: {
      fontSize: 20,
      fontWeight: 'bold',
      textTransform: 'capitalize',
    },
  },
});
