import {Text, View, StyleSheet, Image, ImageBackground} from 'react-native';
import React, {Component} from 'react';

export class Screen2 extends Component {
    render() {

    return (
      <View style={[styles.topCon, {}]}>
         
        <View style={{justifyContent: 'center'}}>
          <View style={{paddingLeft:15}}>

          <Image
            style={{height: 40, width: 40}}
            source={require('./icons/rightArrow.png')}
            />
            </View>
        </View>
        {/* second container */}
        <View style={{justifyContent: 'space-between',alignItems:'center',width:150,}}>
          <View
            style={{
              backgroundColor: 'white',
              height: 30,
              width: 140,
              justifyContent: 'center',
              borderRadius: 20,
              marginTop:30
            }}>
            <Text style={{textAlign: 'center', fontSize: 15}}>
              Take me there
            </Text>
          </View>
          <View style={{justifyContent:'space-evenly',height:150,width:130}}>
            {/* <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <View style={{height:10,width:10,borderWidth:1,borderRadius:10}}></View>
              <View style={{height:10,width:10,borderWidth:1,borderRadius:10}}></View>
              <View style={{height:10,width:10,borderWidth:1,borderRadius:10}}></View>
              <View style={{height:10,width:10,borderWidth:1,borderRadius:10,backgroundColor:'white'}}></View>
              <View style={{height:10,width:10,borderWidth:1,borderRadius:10}}></View>
              <View style={{height:10,width:10,borderWidth:1,borderRadius:10}}></View>
            </View> */}
            <View style={{alignItems:'center'}}>
              <View style={{
              height: 30,
              width: 140,
              justifyContent: 'center',
              borderWidth:1,
              borderRadius: 20,
              borderColor:'white',
              position:'relative',
              top:36,
              right:100,
              marginTop:30,}}>
                <Text style={{textAlign: 'center', fontSize: 15,color:'white'}}>Photo Description</Text>
              </View>

            <Image style={{height: 40, width: 40}} source={require('./icons/upArrow.png')} />
            </View>
          </View>
        </View>
        {/* third container */}
        <View style={{flexDirection:'column',justifyContent:'space-between'}}>
        <View>
          <Image style={{height:40,width:40,marginTop:26, }}source={require('./icons/home.png')} />
        </View>
        <View style={{justifyContent:'space-evenly',height:400 ,width:60,alignItems:'center',paddingBottom:60,paddingEnd:20}}>
        <View>
          <Image style={{height:40,width:40}} source={require('./icons/addUser.png')} />
        </View><View>
          <Image style={{height:40,width:40}} source={require('./icons/heart.png')} />
        </View><View>
          <Image style={{height:40,width:40}} source={require('./icons/comment.png')} />
        </View><View>
          <Image style={{height:40,width:40}} source={require('./icons/bookmark.png')} />
        </View><View>
          <Image style={{height:40,width:40}} source={require('./icons/share.png')} />
        </View>
        </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topCon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-between'
  },
});
export default Screen2;
