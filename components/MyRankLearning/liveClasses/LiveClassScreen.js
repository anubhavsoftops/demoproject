import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {Component} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
export default class LiveClassScreen extends Component {
  constructor(params) {
    super();
    this.state = {
      showOptions: false,
      loginToken: '',
      previousClassData: [],
      btnstyle: 0,
      setUpcoming: true,
      setPrevious: false,
      setNotes: false,
    };
  }
  componentDidMount() {
    this.getData();
    console.log('token', this.state.loginToken);
  }
  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('loginToken');
      parseValue = JSON.parse(value);
      this.setState({loginToken: parseValue});
      this.getPreviousClassApi();
      console.log('get value ---> ', value);
    } catch (e) {
      console.log('get error -->', e);
    }
  };
  getUpcomingClassApi = () => {
    var myHeaders = new Headers();
    myHeaders.append('token', this.state.loginToken);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(
      'https://myrankelearningapp-96162-ruby.b96162.dev.eastus.az.svc.builder.cafe//bx_block_scheduling/live_classes/upcoming_classes',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => console.log('getUpcomingClassApi -->', result))
      .catch(error => console.log('error', error));
  };
  getPreviousClassApi = () => {
    var myHeaders = new Headers();
    myHeaders.append('token', this.state.loginToken);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(
      'https://myrankelearningapp-96162-ruby.b96162.dev.eastus.az.svc.builder.cafe//bx_block_scheduling/live_classes/previous_classes?subject_id=4',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        console.log(
          'getPreviousClassApi-->',
          result.data.map(e => e.attributes.subject_name),
        );
        this.setState({previousClassData: result.data});
      })
      .catch(error => console.log('error', error));
  };
  toggleClass = (e, idx) => {
    console.log('classID-->', idx);
    if (idx === 0) {
      this.setState({
        btnstyle: idx,
        setUpcoming: true,
        setPrevious: false,
        setNotes: false,
      });
    } else if (idx === 1) {
      this.setState({
        btnstyle: idx,
        setUpcoming: false,
        setPrevious: true,
        setNotes: false,
      });
    } else if (idx === 2) {
      this.setState({
        btnstyle: idx,
        setUpcoming: false,
        setPrevious: false,
        setNotes: true,
      });
    }
  };
  navBar = () => {
    return (
      <>
        <View style={[styles.navbar.navView]}>
          <TouchableOpacity style={styles.navbar.navBtn}>
            <Image
              style={[styles.navbar.navImg]}
              source={require('../asset/back.png')}
            />
          </TouchableOpacity>
          <Text style={[styles.navbar.navTxt]}>Live Classes</Text>
          <TouchableOpacity
            onPress={() =>
              this.setState({showOptions: !this.state.showOptions})
            }
            style={styles.navbar.navBtn}>
            <Image
              style={[styles.navbar.navImg]}
              source={require('../asset/threeDots.png')}
            />
          </TouchableOpacity>
          {this.state.showOptions ? (
            <View style={[styles.navbar.navOptionTop]}>
              <View style={[styles.navbar.navOptionInner]}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('instruction')}
                  style={[styles.navbar.navOptionBtn]}>
                  <Text>instructions</Text>
                </TouchableOpacity>
                <View style={{borderWidth: 0.5, width: '100%'}} />
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('timing')}
                  style={[styles.navbar.navOptionBtn]}>
                  <Text>Class Timings</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : null}
        </View>
        <View style={[styles.options.optionsView]}>
          {['upcomming', 'previous', 'notes', 'materials'].map((e, idx) => (
            <TouchableOpacity
              key={idx}
              onPress={() => this.toggleClass(e, idx)}
              style={
                this.state.btnstyle === idx
                  ? [styles.options.optionBtn]
                  : [styles.options.toggleBtn]
              }>
              <Text
                style={
                  this.state.btnstyle === idx
                    ? [styles.options.optionTxt]
                    : [styles.options.toggleTxt]
                }>
                {e}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </>
    );
  };
  upComingClass = (e, idx) => {
    return (
      <>
        <View style={[styles.chapter.chapterView]}>
          <Image
            style={{height: 50, width: 50}}
            source={require('../asset/circle.png')}
          />
          <View style={{marginLeft: 15, width: '85%'}}>
            <Text style={[styles.chapter.topic]}>Mathmatices</Text>
            <Text style={[styles.chapter.time]}>22 oct 2020 1:41 PM</Text>
            <Text>Chapter : Technologies</Text>

            <TouchableOpacity
              style={[styles.chapter.chapterBtn, {width: '45%'}]}>
              <Text style={{fontSize: 13, fontWeight: 'bold', color: '#fff'}}>
                Attand Class
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };
  previousClass = (e, idx) => {
    return (
      <>
        <View
          key={e.attributes.subject_nam}
          style={[styles.chapter.chapterView]}>
          <Image
            style={{height: 50, width: 50}}
            source={require('../asset/circle.png')}
          />
          <View style={{marginLeft: 15, width: '80%'}}>
            <Text style={[styles.chapter.topic]}>
              {e.attributes.subject_name}
            </Text>
            <Text style={[styles.chapter.time]}>{e.attributes.class_date}</Text>
            <Text>Chapter : {e.attributes.chapter_name}</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={[
                  styles.chapter.chapterBtn,
                  {backgroundColor: '#e8e0ef'},
                ]}>
                <Text
                  style={{fontSize: 13, fontWeight: 'bold', color: '#500183'}}>
                  status : Raw video
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('video')}
                style={[styles.chapter.chapterBtn]}>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: '#fff'}}>
                  View Recording
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };
  notesChapter = (e, idx) => {
    return (
      <>
        <View style={[styles.chapter.chapterView]}>
          <Image
            style={{height: 50, width: 50}}
            source={require('../asset/circle.png')}
          />
          <View style={{marginLeft: 15, width: '85%'}}>
            <Text style={[styles.chapter.topic]}>Mathmatices</Text>

            <Text>Chapter : Technologies</Text>

            <TouchableOpacity
              style={[
                styles.chapter.chapterBtn,
                {width: '40%', marginBottom: 8},
              ]}>
              <Text style={{fontSize: 13, fontWeight: 'bold', color: '#fff'}}>
                View Notes
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };
  searchComponent = () => {
    return (
      <View style={[styles.filter.filterView]}>
        <View style={[styles.filter.searchView]}>
          <Image
            style={[styles.filter.searchImg]}
            source={require('../asset/search-normal.png')}
          />
          <TextInput placeholder="Search" style={[styles.filter.searchIn]} />
        </View>
        <TouchableOpacity>
          <Image
            style={[styles.filter.filterImg]}
            source={require('../asset/filter-normal.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={[styles.filter.filterImg]}
            source={require('../asset/filter-filled.png')}
          />
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    return (
      <SafeAreaView>
        <View style={[styles.container]}>
          {this.navBar()}
          {/* {this.searchComponent()} */}
          {this.state.setUpcoming ? null : this.searchComponent()}
          <ScrollView>
            {this.state.setUpcoming
              ? this.state.previousClassData?.map((e, idx) =>
                  this.upComingClass(e, idx),
                )
              : this.state.setPrevious
              ? this.state.previousClassData?.map((e, idx) =>
                  this.previousClass(e, idx),
                )
              : this.state.setNotes
              ? this.state.previousClassData?.map((e, idx) =>
                  this.notesChapter(e, idx),
                )
              : this.state.previousClassData?.map((e, idx) =>
                  this.upComingClass(e, idx),
                )}
            {/* {this.state.previousClassData?.map((e, idx) =>
              this.notesChapter(e, idx),
            )} */}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {marginHorizontal: 15},
  navbar: {
    navView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    navTxt: {
      fontSize: 18,
      fontWeight: 'bold',
      textTransform: 'capitalize',
    },
    navBtn: {padding: 3},
    navImg: {height: 30, width: 30},
    navOptionTop: {position: 'absolute', top: 35, right: 0, zIndex: 1},
    navOptionInner: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'tomato',
      alignItems: 'flex-start',
      backgroundColor: '#fff',
    },
    navOptionBtn: {paddingVertical: 5, paddingHorizontal: 10, marginRight: 30},
  },
  options: {
    optionsView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
      marginBottom: 20,
      zIndex: -1,
    },
    toggleBtn: {
      height: 32,
      width: 85,
      borderWidth: 1,
      borderColor: 'tomato',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    optionBtn: {
      height: 32,
      width: 85,
      backgroundColor: 'tomato',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    optionTxt: {
      color: '#fff',
      textTransform: 'capitalize',
      fontSize: 13,
      fontWeight: '500',
    },
    toggleTxt: {
      color: '#000',
      textTransform: 'capitalize',
      fontSize: 13,
      fontWeight: '500',
    },
  },
  chapter: {
    chapterView: {
      borderColor: 'tomato',
      borderWidth: 1,
      borderRadius: 10,
      marginTop: 10,
      flexDirection: 'row',
      padding: 10,
      justifyContent: 'flex-start',
    },
    topic: {fontSize: 15, fontWeight: 'bold'},
    time: {
      fontSize: 12,
      color: 'gray',
      marginBottom: 5,
      marginTop: 2,
    },
    chapterBtn: {
      borderRadius: 10,
      paddingHorizontal: 12,
      marginRight: 10,
      backgroundColor: 'tomato',
      paddingVertical: 10,
      alignItems: 'center',
      marginTop: 10,
    },
  },
  filter: {
    filterView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    searchView: {
      height: 50,
      backgroundColor: '#e9e0f0',
      alignItems: 'center',
      flexDirection: 'row',
      width: '70%',
      justifyContent: 'space-evenly',
      borderRadius: 100,
      borderWidth: 1,
      borderColor: '#510081',
    },
    searchImg: {
      height: 25,
      width: 25,
      position: 'absolute',
      zIndex: 1,
      left: 12,
    },
    searchIn: {
      height: '100%',
      width: '100%',
      borderRadius: 100,
      fontSize: 18,
      paddingLeft: 50,
    },
    filterImg: {height: 30, width: 30, tintColor: '#500183'},
  },
});
