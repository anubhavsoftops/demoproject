import {Text, View, Image, TextInput} from 'react-native';
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
            alignItems: 'center',
            justifyContent: 'space-between',
            flex: 1,
          }}>
          <View
            style={{
              width: '90%',
              height: 270,
              borderWidth: 1,
              borderRadius: 25,
              borderColor: '#d6d6d6',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}>
              <Image
                style={{height: 32, width: 32, }}
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
            </View>
             <View style={{width:'100%',paddingLeft:23,paddingTop:10}} >
              <View style={{flexDirection:'row',paddingVertical:5,justifyContent:'flex-start'}}>
                <Image style={{height: 32, width: 32, }} source={require('./src/catalogPurple.png')} />
                <Text style={{ fontSize: 25,
                  paddingLeft: 8,color:'gray'}}>Catalog</Text>
              </View>
              <View style={{flexDirection:'row',paddingVertical:5,justifyContent:'flex-start'}}>
                <Image style={{height: 32, width: 32, }} source={require('./src/menuPurple.png')} />
                <Text style={{ fontSize: 25,
                  paddingLeft: 8,color:'gray'}}>Menu</Text>
              </View>
              <View style={{flexDirection:'row',paddingVertical:5,justifyContent:'flex-start'}}>
                <Image style={{height: 32, width: 32, }} source={require('./src/locationPurple.png')} />
                <Text style={{ fontSize: 25,
                  paddingLeft: 8,color:'gray'}}>Location</Text>
              </View>
              <View style={{flexDirection:'row',paddingVertical:5,justifyContent:'flex-start'}}>
                <Image style={{height: 32, width: 32, }} source={require('./src/phonePurple.png')} />
                <Text style={{ fontSize: 25,
                  paddingLeft: 8,color:'gray'}}>Phone Number</Text>
              </View>
              <View style={{flexDirection:'row',paddingVertical:5,justifyContent:'flex-start'}}>
                <Image style={{height: 32, width: 32, }} source={require('./src/linkPurple.png')} />
                <Text style={{ fontSize: 25,
                  paddingLeft: 8,color:'gray'}}>Website</Text>
              </View>
            </View>
            {/* <View style={{flexDirection:'row',paddingVertical:5,justifyContent:'flex-start'}}>
                <Image style={{height: 32, width: 32, }} source={require('./src/catalogPurple.png')} />
                <Text style={{ fontSize: 25,
                  paddingLeft: 8,color:'gray'}}>Catalog</Text>
              </View>
            <View style={{flexDirection:'row',paddingVertical:5,justifyContent:'flex-start'}}>
                <Image style={{height: 32, width: 32, }} source={require('./src/catalogPurple.png')} />
                <Text style={{ fontSize: 25,
                  paddingLeft: 8,color:'gray'}}>Catalog</Text>
              </View>
            <View style={{flexDirection:'row',paddingVertical:5,justifyContent:'flex-start'}}>
                <Image style={{height: 32, width: 32, }} source={require('./src/catalogPurple.png')} />
                <Text style={{ fontSize: 25,
                  paddingLeft: 8,color:'gray'}}>Catalog</Text>
              </View>
            <View style={{flexDirection:'row',paddingVertical:5,justifyContent:'flex-start'}}>
                <Image style={{height: 32, width: 32, }} source={require('./src/catalogPurple.png')} />
                <Text style={{ fontSize: 25,
                  paddingLeft: 8,color:'gray'}}>Catalog</Text>
              </View>
            <View style={{flexDirection:'row',paddingVertical:5,justifyContent:'flex-start'}}>
                <Image style={{height: 32, width: 32, }} source={require('./src/catalogPurple.png')} />
                <Text style={{ fontSize: 25,
                  paddingLeft: 8,color:'gray'}}>Catalog</Text>
              </View> */}
            {/* <View style={{width:'100%',paddingLeft:23}} >
              <View style={{flexDirection:'row',paddingVertical:5,justifyContent:'flex-start'}}>
                <Image style={{height: 32, width: 32, }} source={require('./src/catalogPurple.png')} />
                <Text style={{ fontSize: 25,
                  paddingLeft: 8,color:'gray'}}>Catalog</Text>
              </View>
              <View style={{flexDirection:'row',paddingVertical:5,justifyContent:'flex-start'}}>
                <Image style={{height: 32, width: 32, }} source={require('./src/menuPurple.png')} />
                <Text style={{ fontSize: 25,
                  paddingLeft: 8,color:'gray'}}>Menu</Text>
              </View>
              <View style={{flexDirection:'row',paddingVertical:5,justifyContent:'flex-start'}}>
                <Image style={{height: 32, width: 32, }} source={require('./src/locationPurple.png')} />
                <Text style={{ fontSize: 25,
                  paddingLeft: 8,color:'gray'}}>Location</Text>
              </View>
              <View style={{flexDirection:'row',paddingVertical:5,justifyContent:'flex-start'}}>
                <Image style={{height: 32, width: 32, }} source={require('./src/phonePurple.png')} />
                <Text style={{ fontSize: 25,
                  paddingLeft: 8,color:'gray'}}>Phone Number</Text>
              </View>
              <View style={{flexDirection:'row',paddingVertical:5,justifyContent:'flex-start'}}>
                <Image style={{height: 32, width: 32, }} source={require('./src/linkPurple.png')} />
                <Text style={{ fontSize: 25,
                  paddingLeft: 8,color:'gray'}}>Website</Text>
              </View>
            </View> */}
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
