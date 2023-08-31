import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Modal,
} from 'react-native';
import React, {Component} from 'react';
import {profileData, userData,filterData} from './data';

// console.log(profileData);
export default class Screen4 extends Component {
  constructor() {
    super();
    this.state = {
      isData: userData,
      filterText: '',
      place: true,
      people: false,
      service: false,
      isMark: false,
      modalVisible: false,
      sortBy:filterData.sortList,
      categories:filterData.categoriesList,
      sortByToggle: null
    }; 
  }
  sclectCategorie=(val)=>{
    let temp = this.state.categories.map((item, i) => {
      if (val === i) {
        console.log('===>', i,val);
        return {
          ...item,
          isCategorie : !item.isCategorie, 
        };
      }
      return item;
    });
    // console.log(temp);
    this.setState({ 
      categories: temp,
    });
  }
  // seclectSort=(val)=>{
  //   let temp = this.state.sortBy.map((item, i) => {
  //     if (val === i) {
  //       console.log('===>', i,val);
  //       return {
  //         ...item,
  //         isSort : !item.isSort, 
  //       };
  //     }
  //     return item;
  //   });
  //   // console.log(temp);
  //   this.setState({ 
  //     sortBy: temp,
  //   });
  // }

  mark = val => {
    let temp = this.state.isData.map((item, i) => {
      if (val === i) {
        console.log('===>', val, i);
        return {
          ...item,
          isMark: !item.isMark,
        };
      }
      return item;
    });
    // console.log(temp);
    this.setState({
      isData: temp,
    });
    // this.setState({isMark:!this.state.isMark})
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
            zIndex: 1,
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
  cardView = (e, i) => {
    return (
      <>
        <View style={[styles.card.cardInside]}>
          {e.isMark ? (
            this.state.place ? (
              <TouchableOpacity
                onPress={() => {
                  this.mark(i);
                }}
                style={[styles.card.imageFlex]}>
                <Image
                  style={[styles.card.cardImage]}
                  source={require('./src/starPurple.png')}
                />
              </TouchableOpacity>
            ) : this.state.people ? (
              <TouchableOpacity
                onPress={() => {
                  this.mark(i);
                }}
                style={[styles.card.imageFlex]}>
                <Image
                  style={[styles.card.cardImage]}
                  source={require('./src/starPurple.png')}
                />
              </TouchableOpacity>
            ) : this.state.service ? (
              <TouchableOpacity
                onPress={() => {
                  this.mark(i);
                }}
                style={[styles.card.imageFlex]}>
                <Image
                  style={[styles.card.cardImage]}
                  source={require('./src/starPurple.png')}
                />
              </TouchableOpacity>
            ) : null
          ) : (
            <TouchableOpacity
              onPress={() => {
                this.mark(i);
              }}
              style={[styles.card.imageFlex]}>
              <Image
                style={[styles.card.cardImage]}
                source={require('./src/starWhite.png')}
              />
            </TouchableOpacity>
          )}
          {/* {e.isMark ? (
            this.state.place ? (
              <TouchableOpacity
                onPress={() => {
                  this.mark(i);
                }}
                style={[styles.card.imageFlex]}>
                <Image
                  style={[styles.card.cardImage]}
                  source={require('./src/starWhite.png')}
                />
              </TouchableOpacity>
            ) : this.state.people ? (
              <TouchableOpacity
                onPress={() => {
                  this.mark(i);
                }}
                style={[styles.card.imageFlex]}>
                <Image
                  style={[styles.card.cardImage]}
                  source={require('./src/starWhite.png')}
                />
              </TouchableOpacity>
            ) : this.state.service ? (
              <TouchableOpacity
                onPress={() => {
                  this.mark(i);
                }}
                style={[styles.card.imageFlex]}>
                <Image
                  style={[styles.card.cardImage]}
                  source={require('./src/starWhite.png')}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  this.mark(i);
                }}
                style={[styles.card.imageFlex]}>
                <Image
                  style={[styles.card.cardImage]}
                  source={require('./src/starPurple.png')}
                />
              </TouchableOpacity>
            )
          ) : <TouchableOpacity
          onPress={() => {
            this.mark(i);
          }}
          style={[styles.card.imageFlex]}>
          <Image
            style={[styles.card.cardImage]}
            source={require('./src/starWhite.png')}
          />
        </TouchableOpacity>} */}
          {/* {this.state.isMark ? (
          <TouchableOpacity
            onPress={() => {
              this.mark(i);
            }}
            style={[styles.card.imageFlex]}>
            <Image
              style={[styles.card.cardImage]}
              source={require('./src/starWhite.png')}
            />
          </TouchableOpacity>
          ) : (
          <TouchableOpacity
            onPress={() => {
              this.mark(i);
            }}
            style={[styles.card.imageFlex]}>
            <Image
              style={[styles.card.cardImage]}
              source={require('./src/starPurple.png')}
            />
          </TouchableOpacity>
          )} */}
          <View>
            <Text style={[styles.card.cardText]}>
              {' '}
              {this.state.place
                ? e.place
                : this.state.people
                ? e.name
                : this.state.service
                ? e.service
                : e.place}
            </Text>
          </View>
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
  filterSortList = (e,i) => {
    return (
      <>
      {console.log(this.state.sortByToggle)}
        <View key={i} style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
          onPress={()=>{this.setState({sortByToggle:i})}}
            style={{
              height: 20, 
              width: 20,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: 'gray',
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 5,
              marginRight: 20,
            }}>
              {this.state.sortByToggle===i?<Image
              style={{height: 30, width: 30}} 
              source={require('./src/donePurple.png')}
            />:null}
            
          </TouchableOpacity>
          <Text style={{fontSize: 20, textTransform: 'capitalize'}}>{e.sort}</Text>
        </View>
      </>
    );
  };
  filterCategorieList = (e,i) => {
    return (
      <>
        <View key={i} style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
          onPress={()=>{this.sclectCategorie(i)}}
            style={{
              height: 20, 
              width: 20,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: 'gray',
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 5,
              marginRight: 20,
            }}>
              {!e.isCategorie?<Image
              style={{height: 30, width: 30}} 
              source={require('./src/donePurple.png')}
            />:null}
            
          </TouchableOpacity>
          <Text style={{fontSize: 20, textTransform: 'capitalize'}}>{e.categories}</Text>
        </View>
      </>
    );
  };

  render() {
    return (
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
              <View
                style={{
                  flexDirection: 'row',
                  width: '20%',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  onPress={() => this.setState({modalVisible: true})}>
                  <Image
                    style={{height: 25, width: 25}}
                    source={require('./src/filterGray.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={{height: 25, width: 25}}
                    source={require('./src/searchGray.png')}
                  />
                </TouchableOpacity>
              </View>
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

          {/* <ScrollView>
            <FlatList
              data={this.state.isData}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => this.listView(item, index)}
            />
          </ScrollView> */}
         
            <View style={{width: '100%'}}>
              <FlatList
                columnWrapperStyle={{justifyContent: 'space-between'}}
                data={this.state.isData}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                numColumns={3}
                renderItem={({item, index}) => this.cardView(item, index)}
              />
            </View>
         
          <Modal visible={this.state.modalVisible} transparent>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <TouchableOpacity
                 >
                  <View style={[styles.modalBar]}></View>
                </TouchableOpacity>

                <View style={[{paddingTop: 20, paddingBottom: 15}]}>
                  <View
                    style={[
                      {backgroundColor: 'gray', height: 1, width: 1000},
                    ]}></View>
                </View>
                <View style={{justifyContent: 'flex-start', width: '100%'}}>
                  <Text style={{fontSize: 20, fontWeight: 'bold',marginBottom:10}}>
                    Sort by :
                  </Text>
                  <FlatList
                    data={this.state.sortBy}
                    keyExtractor={item => item.id}
                    renderItem={({item, index}) => this.filterSortList(item, index)}
                  />
                  <Text
                    style={{fontSize: 20, fontWeight: 'bold', marginTop: 20}}>
                    Categories
                  </Text>
                  <FlatList
                    data={this.state.categories}
                    keyExtractor={item => item.id}
                    renderItem={({item, index}) => this.filterCategorieList(item, index)}
                  />
                </View>
                <TouchableOpacity  onPress={() => this.setState({modalVisible: false})} style={{marginVertical:20}}><Text style={{fontSize:25 ,color:'purple'}}>Done</Text></TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>

        {/* <View>{this.bottomNavBar()}</View> */}
      </View>
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
  card: {
    cardTop: {
      flexWrap: 'wrap',
      flexDirection: 'row',
      // justifyContent: 'space-evenly',
      width: '100%',
    },
    cardInside: {
      height: 200,
      width: 140,
      backgroundColor: '#c2c3c4',
      justifyContent: 'space-between',
      marginBottom: 2,
    },
    imageFlex: {
      justifyContent: 'flex-end',
      width: '100%',
      flexDirection: 'row',
    },
    cardImage: {margin: 10, height: 25, width: 25},
    cardText: {padding: 10, fontSize: 20},
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',

    backgroundColor: '#000000AA',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 35,
    alignItems: 'center',
    shadowColor: '#000',
    width: '100%',
    // height: '60%',
    paddingBottom: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    // marginBottom:100
  },
  modalBar: {
    backgroundColor: 'gray',
    height: 8,
    width: 50,
    borderRadius: 10,
  },
});
