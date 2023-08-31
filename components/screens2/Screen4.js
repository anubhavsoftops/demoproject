import {
  Text,
  Image,
  View,
  Modal,
  Button,
  Pressable,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {Component} from 'react';
import styles from './screenStyle4';

export class Screen4 extends Component {
  constructor(props) {
    super(props);

    this.state = {modalVisible: false};
  }
  render() {
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
              <View style={[styles.modalNameSection]}>
                <View style={[styles.nameSectionName]}>
                  <View style={[styles.nameSectionProfile]}></View>
                  <Text style={[styles.nameSectionTime]}>Name</Text>
                </View>
                <Text>5d</Text>
              </View>
              <View style={[styles.modalBodySection]}>
                <Text style={styles.modalBodySection.textStyle}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laborum illum sed, accusantium tempora, consequatur cupiditate
                  eveniet eligendi magni quo excepturi nemo cumque animi et ex
                  perferendis deleniti, quod qui? Commodi laudantium impedit
                  facere voluptas nobis sequi, nulla beatae culpa, velit minus
                  dolore numquam, qui inventore ducimus? Non asperiores dolorem
                  nesciunt recusandae reprehenderit labore, doloremque voluptate
                  {'\n'}
                  {'\n'}corporis totam vero delectus ab dolore animi
                  necessitatibus ad incidunt itaque odit harum esse! Dolorum
                  nemo iure culpa omnis quod quis? Cupiditate maxime distinctio
                  eveniet, nemo sapiente alias odit dolore dicta suscipit
                  perferendis, excepturi molestias repellat? Molestiae{' '}
                </Text>
              </View>
              <View style={[styles.modalLikeSection]}>
                <View style={[styles.modalLikeSection.modalLike]}>
                  <Image
                    style={[styles.modalLikeSection.modalimage]}
                    source={require('./icons/likeHeart.png')}
                  />
                  <Text style={[styles.modalLikeSection.modalComment]}>
                    33 Likes
                  </Text>
                </View>
                <Text style={[styles.modalLikeSection.modalLikeText]}>
                  Show Comments
                </Text>
              </View>
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
                  style={[{fontSize: 18, color: 'gray',width:'100%'}]}
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

export default Screen4;
