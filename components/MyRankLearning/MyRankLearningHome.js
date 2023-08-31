import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import Swiper from 'react-native-swiper';
import {PieChart} from 'react-native-gifted-charts';

export default class MyRankLearningHome extends Component {
  swiperView = () => {
    return (
      <ImageBackground
        source={require('./asset/Group-4.png')}
        resizeMode="cover"
        style={[styles.swiper.imgBack]}>
        <View style={[styles.swiper.textView]}>
          <Text>MPSIC{'\n'}Expiry - 31/10/2023</Text>

          <TouchableOpacity style={[styles.swiper.amountBtn]}>
            <Text>amount cost - 12000/-</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  };
  data = [{value: 50}, {value: 80}, {value: 90}, {value: 70}];
  firstList = () => {
    return (
      <View style={[styles.firstList.listView]}>
        <View style={[styles.firstList.imgView]}>
          <Image
            style={{height: 40, width: 40}}
            source={require('./asset/circle.png')}
          />
          <Image
            style={{height: 20, width: 20}}
            source={require('./asset/timer-start.png')}
          />
        </View>
        <View style={[styles.firstList.subjectView]}>
          <Text style={{fontSize: 12}}>Subject - Physics</Text>
          <Text style={{fontSize: 12}}>Topic - Physics</Text>
        </View>
      </View>
    );
  };
  secondList = () => {
    return (
      <View style={[styles.secondList.listView]}>
        <Image
          style={{height: 90, width: 260, tintColor: '#6261A5'}}
          source={require('./asset/box.png')}
        />
        <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 8}}>
          Mathematics
        </Text>
        <Text style={{fontSize: 15, marginTop: 5}}>
          Chapter : trigomatric ratios
        </Text>
        <Text style={{fontSize: 13, marginTop: 5}}>22 Feb 2023, 1:45PM</Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#F5455E',
            paddingHorizontal: 14,
            paddingVertical: 8,
            borderRadius: 8,
            marginTop: 8,
          }}>
          <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
            Attend Class
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  thirdList = () => {
    return (
      <View
        style={{
          borderWidth: 2,
          backgroundColor: '#fae5d4',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          width: 200,
          height: 100,
          marginRight: -10,
          marginLeft: 20,
          borderColor: '#D2BAB5',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{height: 40, width: 40}}
            source={require('./asset/circle.png')}
          />
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              padding: 5,
              color: '#4F0063',
            }}>
            NEER Grand Test 1
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#F5455E',
            paddingHorizontal: 14,
            paddingVertical: 6,
            borderRadius: 8,
          }}>
          <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
            Take Test
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  renderLegend = (text, color) => {
    return (
      <View style={{flexDirection: 'row', marginBottom: 12}}>
        <View
          style={{
            height: 13,
            width: 13,
            marginRight: 10,
            borderRadius: 10,
            backgroundColor: color || 'Black',
          }}
        />
        <Text style={{color: 'black', fontSize: 16}}>{text || ''}</Text>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView>
        <View style={{backgroundColor:'white'}}>
          <View style={{paddingHorizontal: 20}}>
            <View style={{alignItems: 'center', marginBottom: 30}}>
              <Image
                style={[styles.logo]}
                source={require('./asset/logo.png')}
              />
            </View>
            {/* profile name view  */}
            <View style={[styles.profile.profileView]}>
              <View>
                <Text style={[styles.profile.profileName]}>Hello John Doe</Text>
                <Text style={[styles.profile.profileDesc]}>
                  Welcome in e-learn
                </Text>
              </View>
              <View style={[styles.profile.iconContainer]}>
                <TouchableOpacity>
                  <Image
                    style={[styles.profile.icon]}
                    source={require('./asset/profile-ico.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={[styles.profile.icon]}
                    source={require('./asset/notification-icon.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* Search Box */}
            <View style={[styles.search.searchView]}>
              <Image
                style={[styles.search.searchImg]}
                source={require('./asset/search-normal.png')}
              />
              <TextInput
                placeholder="Search"
                style={[styles.search.searchInput]}
              />
            </View>
          </View>
          <ScrollView>
            {/* swiper view  */}
            <View style={[styles.swiper.swiperView]}>
              <Swiper autoplay={true} autoplayTimeout={1}>
                {this.swiperView()}
                {this.swiperView()}
              </Swiper>
            </View>
            {/* 1st -- flatlist view  */}

            <Text style={[styles.firstList.listText]}>
              Continue where you left
            </Text>
            <FlatList
              data={[1, 2, 3, 4, 5, 67, 8, 9]}
              horizontal={true}
              renderItem={({item}) => this.firstList()}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
            />

            {/* 2nd & 3rd -- flatlist view  */}
            <View style={[styles.secondList.topContainer]}>
              <View style={{paddingHorizontal: 20}}>
                <View style={[styles.secondList.listTextView]}>
                  <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                    Live Classes for today
                  </Text>
                  <TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: '#4F0063',
                      }}>
                      See All
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <FlatList
                data={[1, 2, 3, 4, 5, 67, 8, 9]}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => this.secondList()}
                keyExtractor={item => item.id}
              />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  marginTop: 15,
                  marginBottom: 15,
                  marginLeft: 20,
                }}>
                Retake test based on review analysis
              </Text>
              <FlatList
                data={[1, 2, 3, 4, 5, 67, 8, 9]}
                horizontal={true}
                renderItem={({item}) => this.thirdList()}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
              />
            </View>
            {/* 4th -- flatlist view  */}
            <View style={{paddingHorizontal: 20, paddingBottom: 20 ,backgroundColor:'white'}}>
              <Text style={[styles.saveView.saveText]}>
                Bookmarks & saved notes
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                    <View style={[styles.saveView.saveContainer]}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      style={{height: 30, width: 30,tintColor:'#4F0063'}}
                      source={require('./asset/bookmark.png')}
                    />
                    <View style={{alignItems: 'center'}}>
                      <Text style={[styles.saveView.insideText]}>
                        Bookmarks
                      </Text>
                      <TouchableOpacity style={[styles.saveView.btn]}>
                        <Text style={[styles.saveView.btnText]}>View</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={[styles.saveView.saveContainer]}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      style={{height: 30, width: 30,tintColor:'#4F0063'}}
                      source={require('./asset/save.png')}
                    />
                    <View style={{alignItems: 'center'}}>
                      <Text style={[styles.saveView.insideText]}>
                        Saved Notes
                      </Text>
                      <TouchableOpacity style={[styles.saveView.btn]}>
                        <Text style={[styles.saveView.btnText]}>View</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>

              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '500',
                  paddingVertical: 15,
                }}>
                Statistics
              </Text>
              <Text style={{fontSize: 16, color: 'gray'}}>
                Total number of AYQ'S : 3
              </Text>
              <Text style={{fontSize: 16, color: 'gray'}}>
                Last query was posted on : 21/06/2022
              </Text>
            </View>
            <View
              style={{
                // justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 40,
                backgroundColor: '#f6f4f7',
                paddingBottom: 100,
              }}>
              <PieChart
                donut
                data={[
                  {value: 14, color: 'red'},
                  {value: 100, color: 'blue'},
                  {value: 66, color: '#f89105'},
                ]}
                innerRadius={65}
                textColor="white"
                showValuesAsLabels={true}
                showText
              />
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginTop: 20,
                }}>
                {this.renderLegend('Math', '#f89105')}
                {this.renderLegend('Physics', 'red')}
                {this.renderLegend('Social Science', 'blue')}
              </View>
            </View>
            <View style={{height: 300}}></View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  logo: {height: 40, width: 140},
  profile: {
    profileView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    profileName: {
      fontSize: 20,
      fontWeight: 'bold',
      textTransform: 'capitalize',
      marginBottom: 4,
    },
    profileDesc: {
      fontSize: 10,
      fontWeight: 'bold',
      textTransform: 'capitalize',
    },
    iconContainer: {
      flexDirection: 'row',
      width: '23%',
      justifyContent: 'space-between',
    },
    icon: {height: 40, width: 40},
  },
  search: {
    searchView: {
      borderWidth: 2,
      height: 50,
      borderRadius: 50,
      borderColor: 'purple',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',marginBottom:10
    },
    searchImg: {height: 30, width: 30, marginLeft: 10},
    searchInput: {
      width: '100%',
      height: '100%',
      paddingHorizontal: 10,
      fontSize: 18,
    },
  },
  swiper: {
    swiperView: {
      height: 120,
      width: '100%',
      marginTop: 15,
      paddingHorizontal: 20,
    },
    imgBack: {
      width: '100%',
      height: 120,
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row',
    },
    textView: {marginLeft: 25, padding: 5},
    amountBtn: {
      backgroundColor: '#FEF7EC',
      paddingHorizontal: 15,
      paddingVertical: 5,
      borderRadius: 5,
      marginTop: 5,
    },
  },
  firstList: {
    listText: {
      fontSize: 16,
      fontWeight: '400',
      marginBottom: 15,
      marginTop: 10,
      marginLeft: 20,
    },
    listView: {
      height: 100,
      width: 140,
      borderRadius: 10,
      backgroundColor: '#F6F4F7',
      justifyContent: 'space-evenly',
      borderColor: '#D2BAB5',
      borderWidth: 2,
      marginLeft: 20,
      paddingHorizontal: 5,
      marginRight: -10,
    },
    imgView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 5,
    },
    subjectView: {paddingHorizontal: 5, paddingTop: 3},
  },
  secondList: {
    topContainer: {
      backgroundColor: '#fae5d4',
      marginTop: 20,
      paddingBottom: 30,
    },
    listTextView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
      marginBottom: 20,
    },
    listView: {
      backgroundColor: '#fff',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: 280,
      paddingVertical: 10,
      paddingHorizontal: 10,
      marginLeft: 20,
      marginRight: -10,
      borderColor: 'gray',
      borderWidth: 1,
    },
  },
  saveView: {
    saveText: {fontSize: 18, paddingVertical: 15},
    saveContainer: {
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      width: '48%',
      height: 90,
      marginRight: 10,
      borderColor: '#D2BAB5',
    },
    insideText: {
      fontSize: 16,
      fontWeight: '500',
      padding: 5,
      color: '#4F0063',
    },
    btn: {
      backgroundColor: '#F5455E',
      paddingHorizontal: 25,
      paddingVertical: 5,
      borderRadius: 8,
      marginTop: 5,
    },
    btnText: {color: '#fff', fontSize: 16},
  },
});
