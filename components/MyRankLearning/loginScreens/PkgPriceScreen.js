import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
  ImageBackground,
  FlatList,
  Modal,ActivityIndicator
} from 'react-native';
import React, {Component} from 'react';

export default class PkgPriceScreen extends Component {
  constructor() {
    super();
    this.state = {
      modalvisable: false,
      pricingData: [],
      modalData: {},
      loder: true,
    };
  }
  async componentDidMount() {
    console.log('@@@@checkID', this.props.route.params.packageID);
    this.getPricingApi();
  }

  getPricingApi = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://myrankelearningapp-96162-ruby.b96162.dev.eastus.az.svc.builder.cafe/bx_block_plan/pack_finals/${this.props.route.params.packageID}`,
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        // console.log('----> pricingData', result.data);
        this.setState({
          pricingData: result.data.attributes.pack_pricing.data,
          loder: false,
        });
        // console.log('---log--->', this.state.pricingData.map((e)=>e.attributes.feature_name));
      })

      .catch(error => console.log('error', error));
  };

  getPackageSeclectedApi = id => {
    var myHeaders = new Headers();
    myHeaders.append('token', '{{token}}');

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow',
    };
    console.log(this.props.route.params.packageID, id);
    fetch(
      `https://myrankelearningapp-96162-ruby.b96162.dev.eastus.az.svc.builder.cafe//select_package?pack_final_id=${this.props.route.params.packageID}&pack_pricing_id=${id}`,
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        this.props.navigation.navigate('registerForm', {token: result.token});
        // alert(result.message)
        console.log('--result-->', result.token);
      })
      .catch(error => console.log('error', error));
  };
  progressBar = () => {
    return (
      <View style={[styles.progress.container]}>
        <View style={{width: '24%'}}>
          <View style={[styles.progress.insideCon]}>
            <View style={[styles.progress.dot, {backgroundColor: '#309315'}]} />
            <View
              style={[styles.progress.line, {backgroundColor: '#309315'}]}
            />
          </View>
          <Text style={[styles.progress.text, {color: '#309315'}]}>
            Choose{'\n'}Package
          </Text>
        </View>
        <View style={{width: '24%'}}>
          <View style={[styles.progress.insideCon]}>
            <View style={[styles.progress.dot, {color: '#68397f'}]} />
            <View
              style={[styles.progress.line, {backgroundColor: '#aaaaaa'}]}
            />
          </View>
          <Text style={[styles.progress.text, {color: '#68397f'}]}>
            Pricing
          </Text>
        </View>
        <View style={{width: '24%'}}>
          <View style={[styles.progress.insideCon]}>
            <View style={[styles.progress.dot, {backgroundColor: '#aaaaaa'}]} />
            <View
              style={[styles.progress.line, {backgroundColor: '#aaaaaa'}]}
            />
          </View>
          <Text style={[styles.progress.text]}>Registration</Text>
        </View>
        <View style={{width: '20%'}}>
          <View style={[styles.progress.dot, {backgroundColor: '#aaaaaa'}]} />
          <Text style={[styles.progress.text]}>Payment{'\n'}successful</Text>
        </View>
      </View>
    );
  };
  priceCard = value => {
    return (
      <View style={styles.pkgPrice.pkgCon}>
        <View>
          <Text style={[styles.pkgPrice.pkgTitle]}>
            {value.attributes.feature_name}
          </Text>
          <Text style={[styles.pkgPrice.pkgDesc]}>
            {value.attributes.description}
          </Text>
          <TouchableOpacity
            onPress={() =>
              this.setState({
                modalvisable: true,
                modalData: value.attributes.pack_highlights.data.map(
                  e => e.attributes.category_value,
                ),
              })
            }
            style={[styles.pkgPrice.pkgBtn]}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>
              View more Details
            </Text>
            <Image
              style={[styles.pkgPrice.priceImg]}
              source={require('../asset/arrow.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.pkgPrice.priceView]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 30, color: '#fff'}}>
              {value.attributes.price}{' '}
            </Text>
            <Text style={{color: '#fff'}}>/ Year</Text>
          </View>
          <TouchableOpacity
            style={[styles.pkgPrice.priceBtn]}
            onPress={() => {
              this.getPackageSeclectedApi(value.id);
            }}>
            <Text style={{fontSize: 16, color: 'tomato', fontWeight: 'bold'}}>
              Get Now
            </Text>
          </TouchableOpacity>
        </View>
        <Modal visible={this.state.modalvisable} style={{flex: 1}}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 30,
                      fontWeight: 'bold',
                      color: '#743996',
                    }}>
                    Basic
                  </Text>
                  <TouchableOpacity
                    onPress={() => this.setState({modalvisable: false})}>
                    <Image
                      style={{height: 30, width: 30, tintColor: 'gray'}}
                      source={require('../asset/close.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                    marginBottom: 5,
                  }}>
                  <Text style={{fontSize: 30, color: '#743996'}}>₹5499</Text>
                  <Text style={{fontSize: 12, color: '#743996'}}>/ Year</Text>
                </View>
                <FlatList
                  data={this.state.modalData}
                  renderItem={({item}) => (
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 20,
                      }}>
                      <Image source={require('../asset/orangeTick.png')} />
                      {/* <Text style={{fontSize: 15, marginLeft: 15}}>
                          It is long estabilshed fact that a render will be
                          distracted by the readable contant
                        </Text> */}
                      <Text style={{fontSize: 15, marginLeft: 15}}>{item}</Text>
                    </View>
                  )}
                  keyExtractor={item => item.id}
                />
                <Text>{}</Text>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: 'tomato',
                  paddingVertical: 15,
                  borderRadius: 10,
                  marginTop: 30,
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#fff',
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  GET NOW
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  };
  render() {
    // console.log('---log--->', this.state.pricingData.map((e)=>e.attributes.pack_highlights.data.map((item)=>item.attributes.category_value)));
    let value = this.state.pricingData;
    console.log('--desc-->', this.state.modalData);
    return (
      <SafeAreaView>
        <View style={{marginHorizontal: 15}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={{marginTop: 8}}>
            <Image
              style={{height: 25, width: 25}}
              source={require('../asset/back.png')}
            />
          </TouchableOpacity>
          {/* progress Bar  */}
          <View style={{marginTop: 10, height: 60, marginBottom: 10}}>
            {this.progressBar()}
          </View>
          {this.state.loder ? (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <ActivityIndicator size="large" color="tomato" />
            </View>
          ) : (
            <FlatList
              data={this.state.pricingData}
              renderItem={({item}) => this.priceCard(item)}
              keyExtractor={item => item.id}
            />
          )}

          {/* <Modal visible={this.state.modalvisable} style={{flex: 1}}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: '#743996',
                      }}>
                      Basic
                    </Text>
                    <TouchableOpacity
                      onPress={() => this.setState({modalvisable: false})}>
                      <Image
                        style={{height: 30, width: 30, tintColor: 'gray'}}
                        source={require('../asset/close.png')}
                      />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 10,
                      marginBottom: 5,
                    }}>
                    <Text style={{fontSize: 30, color: '#743996'}}>₹5499</Text>
                    <Text style={{fontSize: 12, color: '#743996'}}>/ Year</Text>
                  </View>
                  <FlatList
                    data={this.state.modalData}
                    renderItem={({item}) => (
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginTop: 20,
                        }}>
                        <Image source={require('../asset/orangeTick.png')} />
                        <Text style={{fontSize: 15, marginLeft: 15}}>
                          It is long estabilshed fact that a render will be
                          distracted by the readable contant
                        </Text>
                      </View>
                    )}
                    keyExtractor={item => item.id}
                  />
                  <Text>{value}</Text>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'tomato',
                    paddingVertical: 15,
                    borderRadius: 10,
                    marginTop: 30,
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      color: '#fff',
                      textAlign: 'center',
                      fontWeight: 'bold',
                    }}>
                    GET NOW
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal> */}
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#ffffff00',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    width: '100%',
    height: '90%',
    justifyContent: 'space-between',
  },
  progress: {
    container: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',

      position: 'absolute',
      left: 25,
    },
    insideCon: {flexDirection: 'row', alignItems: 'center'},
    dot: {
      height: 20,
      width: 20,
      borderRadius: 10,
      backgroundColor: '#68397f',
    },
    line: {
      height: 3,
      backgroundColor: '#68397f',
      width: '80%',
    },
    text: {
      position: 'absolute',
      fontSize: 12,
      color: '#aaaaaa',
      top: 30,
      left: -12,
    },
  },
  pkgPrice: {
    pkgCon: {
      backgroundColor: 'tomato',
      padding: 20,
      borderRadius: 12,
      marginTop: 15,
    },
    pkgTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
      color: '#fff',
    },
    pkgDesc: {fontSize: 13, color: '#fff'},
    pkgBtn: {flexDirection: 'row', alignItems: 'center', marginTop: 5},
    priceView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    priceImg: {height: 23, width: 23, marginLeft: 5, tintColor: '#fff'},
    priceBtn: {
      backgroundColor: '#fff',
      paddingVertical: 8,
      paddingHorizontal: 25,
      borderRadius: 8,
    },
  },

  pkgCard: {
    pkgCon: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      borderWidth: 1.5,
      borderRadius: 10,
      padding: 15,
      borderColor: '#f65661',
      marginTop: 10,
    },
    demoImg: {height: 70, width: 70, borderRadius: 10},
    title: {fontSize: 18, color: '#68397f', fontWeight: 'bold'},
    btn: {flexDirection: 'row', alignItems: 'center'},
    btnTxt: {color: '#969696'},
    btnImg: {height: 23, width: 23, marginLeft: 5},
  },
});
