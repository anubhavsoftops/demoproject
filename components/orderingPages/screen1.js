import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {Component} from 'react';

export default class Screen1 extends Component {
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
            // justifyContent: 'space-between',
            flex: 1,
            paddingHorizontal: 25,
          }}>
          {/* Name Section  */}
          <View style={[styles.nameSection.topContainer]}>
            <View style={[styles.nameSection.profileSection]}>
              <View style={[styles.nameSection.profileImg]} />
              <View>
                <Text style={[styles.nameSection.profileName]}>Name</Text>
                <Text>Tag</Text>
              </View>
            </View>
            <View>
              <Image
                style={[styles.nameSection.bagImg]}
                source={require('./src/bagBlack.png')}
              />
              <View style={[styles.nameSection.bagCircle]}>
                <Text style={[styles.nameSection.bagText]}>99+</Text>
              </View>
            </View>
          </View>
          <Text style={{textAlign: 'right', fontSize: 10, marginBottom: 10}}>
            Delivers in 30 minutes
          </Text>
          {/* End of name section  */}

          
            <ScrollView showsVerticalScrollIndicator={false}>
            <FlatList
              columnWrapperStyle={{justifyContent: 'space-between'}}
              data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.id}
              numColumns={2}
              renderItem={({item, index}) => (
                <View key={item} style={[styles.boxes.topBox]}>
                  <View style={[styles.boxes.topInsider]}></View>
                </View>
              )}
            />
            </ScrollView>
          
        </View>
        <View>{this.bottomNavBar()}</View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  nameSection: {
    topContainer: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
    },
    profileSection: {flexDirection: 'row', alignItems: 'center'},
    profileImg: {
      height: 70,
      width: 70,
      backgroundColor: '#585BA8',
      borderRadius: 50,
      marginRight: 10,
    },
    profileName: {fontSize: 20, fontWeight: 'bold'},
    bagImg: {height: 35, width: 35},
    bagCircle: {
      position: 'absolute',
      right: -10,
      backgroundColor: 'red',
      height: 22,
      width: 22,
      borderRadius: 1000,
      alignItems: 'center',
      justifyContent: 'center',
    },
    bagText: {fontSize: 10, color: 'white', fontWeight: '700'},
  },
  boxes: {
    topBox: {
      height: 220,
      width: 180,
      backgroundColor: '#F5F6F7',
      justifyContent: 'flex-end',
      borderRadius: 10,
      marginBottom: 10,
    },
    topInsider: {
      height: 40,
      width: '100%',
      backgroundColor: '#E6E7E7',
      borderBottomEndRadius: 10,
      borderBottomLeftRadius: 10,
    },
  },
});
