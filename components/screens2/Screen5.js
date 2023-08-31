import {
  Text,
  Image,
  View,
  Modal,
  Button,
  Pressable,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import React, {Component} from 'react';
import styles from './screenStyle5';

export class Screen5 extends Component {
  constructor(props) {
    super(props);

    this.state = {modalVisible: true};
  }
  render() {
    let users = ['anubhav', 'pradeep', 'rahul', 'ayush', 'puja', 'chaten','swati','pushpa'];
    return (
      <View style={[styles.topCon]}>
        <View style={{alignItems: 'flex-end', paddingTop: 50}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: 280,
              paddingRight: 15,
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 25,
                width: 150,
                backgroundColor: 'pink',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Text>Ahmed Al Jaber st</Text>
            </View>
            <TouchableOpacity
              onPress={() => this.setState({modalVisible: true})}>
              <Image
                style={{height: 40, width: 40}}
                source={require('./icons/home.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Modal visible={this.state.modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                onPress={() => this.setState({modalVisible: false})}>
                <View style={[styles.modalBar]}></View>
              </TouchableOpacity>
              {/* {users.map(item => (
                <>
                
                <View style={[styles.modalNameSection]}>
                  <View style={{width: 260}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <View style={[styles.nameSectionProfile]}></View>
                      <Text
                        style={[styles.nameSectionText1, {fontWeight: 'bold'}]}>
                        {item}
                      </Text>
                      <Text style={styles.nameSectionText1}>
                        Lorem ipsum dolor sit amet
                      </Text>
                    </View>
                    <View style={[styles.bottomText]}>
                      <Image
                        style={[styles.nameSectionImage]}
                        source={require('./icons/pin.png')}
                      />
                      <Text style={[styles.nameSectionText2]}>5d</Text>
                      <Text style={[styles.nameSectionText2]}>33likes</Text>
                      <Text style={[styles.nameSectionText2]}>Reply</Text>
                    </View>
                  </View>
                  <View>
                    <Image
                      style={[styles.modalLikeSection.modalimage]}
                      source={require('./icons/likeHeart.png')}
                    />
                  </View>
                </View>
                  <View style={{height:1,width:'80%',alignItems:'center',backgroundColor:'gray',marginTop:15}}></View>
                  </>
              ))} */}

              <View style={[{paddingTop: 20, paddingBottom: 15}]}>
                <View
                  style={[
                    {backgroundColor: 'gray', height: 1, width: 1000},
                  ]}></View>
              </View>
              <View
                style={[
                  {
                    backgroundColor: '#ededed',
                    width: '100%',
                    height: 45,
                    borderRadius: 120,
                    paddingLeft: 16,
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                  },
                ]}>
                <TextInput
                  style={[{fontSize: 18, color: 'gray', width: '100%'}]}
                  placeholder="Add a Comment"
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default Screen5;
