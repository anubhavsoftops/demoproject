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
export default class LiveClassScreen extends Component {
  constructor(params) {
    super();
    this.state = {
      showOptions: false,
    };
  }
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
                <TouchableOpacity onPress={() => this.props.navigation.navigate('instruction')} style={[styles.navbar.navOptionBtn]}>
                  <Text>instructions</Text>
                </TouchableOpacity>
                <View style={{borderWidth: 0.5, width: '100%'}} />
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('timing')} style={[styles.navbar.navOptionBtn]}>
                  <Text>Class Timings</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : null}
          
        </View>
        <View style={[styles.options.optionsView]}>
            {['upcomming', 'previous', 'notes', 'materials'].map((e, idx) => (
              <TouchableOpacity key={idx} style={[styles.options.optionBtn]}>
                <Text style={[styles.options.optionTxt]}>{e}</Text>
              </TouchableOpacity>
            ))}
          </View>
      </>
    );
  };
  upComingChapter = (e, idx) => {
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
              style={[styles.chapter.chapterBtn, {width: '40%'}]}>
              <Text style={{fontSize: 13, fontWeight: 'bold', color: '#fff'}}>
                Attand Class
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };
  previousChapter = (e, idx) => {
    return (
      <>
        <View key={idx} style={[styles.chapter.chapterView]}>
          <Image
            style={{height: 50, width: 50}}
            source={require('../asset/circle.png')}
          />
          <View style={{marginLeft: 15, width: '85%'}}>
            <Text style={[styles.chapter.topic]}>Mathmatices</Text>
            <Text style={[styles.chapter.time]}>22 oct 2020 1:41 PM</Text>
            <Text>Chapter : Technologies</Text>
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
              <TouchableOpacity onPress={() => this.props.navigation.navigate('video')} style={[styles.chapter.chapterBtn]}>
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
        <View style={[styles.chapter.chapterView,]}>
          <Image
            style={{height: 50, width: 50}}
            source={require('../asset/circle.png')}
          />
          <View style={{marginLeft: 15, width: '85%'}}>
            <Text style={[styles.chapter.topic]}>Mathmatices</Text>
            
            <Text>Chapter : Technologies</Text>

            <TouchableOpacity
              style={[styles.chapter.chapterBtn, {width: '40%',marginBottom:8}]}>
              <Text style={{fontSize: 13, fontWeight: 'bold', color: '#fff'}}>
               View Notes
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };
  render() {
    return (
      <SafeAreaView>
        <View style={[styles.container]}>
          {this.navBar()}
          {/* Option's  */}
        
          {/* Chapter's  */}
          <View style={[styles.filter.filterView]}>
            <View style={[styles.filter.searchView]}>
              <Image
                style={[styles.filter.searchImg]}
                source={require('../asset/search-normal.png')}
              />
              <TextInput
                placeholder="Search"
                style={[styles.filter.searchIn]}
              />
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
          <ScrollView>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((e, idx) =>
              this.previousChapter(e, idx),
            )}
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
      alignItems: 'flex-start',backgroundColor:'#fff'
    },
    navOptionBtn: {paddingVertical: 5, paddingHorizontal: 10, marginRight: 30},
  },
  options: {
    optionsView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
      marginBottom: 20,zIndex:-1
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
      paddingHorizontal: 20,
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
