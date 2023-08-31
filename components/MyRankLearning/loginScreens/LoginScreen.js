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
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import React, {Component} from 'react';

export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      loginByMyrank: true,
      loginByMobile: false,
      toggleInput: true,
      mobileNumber: '',
      rankId: '',
      rankPassword: '',
      staticToken:
        'eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MTA2MCwiZXhwIjoxNjkyOTY5MjM5fQ.X2Zz3_XmA8GfgeWFB5a2iCAvBQUKKDQ0zEDTuVxGNag5QlU4BE0EMM9Z-boQF1JtVegKYGYaXgFWDkKqx4uyeg',
      staticRankId: 'MR22JEE1009',
      staticPass: 'Sumit@123456789',
      staticNumber: '8962422123',
    };
  }
  hendleSubmit = () => {
    // let raw = JSON.stringify({
    //   "data": {
    //     "attributes": {
    //       "full_phone_number": "918871379123"
    //     }
    //   }
    // });

    // let url =
    //   'https://myrankelearningapp-96162-ruby.b96162.dev.eastus.az.svc.builder.cafe/send_sms_otp';
    // fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'apilication/json',
    //   },
    //   body: raw,
    // })
    //   .then(res => res.json())
    //   .then(data => console.log('---- >', data))
    //   .catch(err => console.log(err));
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    let raw = JSON.stringify({
      data: {
        attributes: {
          full_phone_number: this.state.mobileNumber,
        },
      },
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(
      'https://myrankelearningapp-96162-ruby.b96162.dev.eastus.az.svc.builder.cafe/send_sms_otp',
      requestOptions,
    )
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };
  hendleLoginWithIdApi = () => {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    let data = this.state.loginByMyrank
      ? {myrank_id: this.state.staticRankId, password: this.state.staticPass}
      : {phone_number: this.state.staticNumber};
    console.log(data);
    let raw = JSON.stringify({
      data: {
        type: 'sms_account',
        attributes:data 
        // {
        //   myrank_id: this.state.staticRankId,
        //   password: this.state.staticPass,
        // },
      },
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(
      'https://myrankelearningapp-96162-ruby.b96162.dev.eastus.az.svc.builder.cafe//bx_block_login/logins',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {console.log('hendleLoginWithIdApi-- >',result)
      if(result?.data?.attributes?.pin){
        alert(result?.data?.attributes?.pin)
        console.log(result.meta.token);
        this.props.navigation.navigate('otpverify',{OTPToken:result.meta.token,number:this.state.staticNumber})
      }
    })
      .catch(error => console.log('error', error));
  };
  render() {
    console.log(this.state.mobileNumber);
    return (
      <SafeAreaView style={{backgroundColor: '#6d0282'}}>
        <View style={[styles.topContainer]}>
          <View style={[styles.imgView]}>
            <Image
              style={{height: 250, width: 350, marginLeft: 5}}
              resizeMode="stretch"
              source={require('../asset/loginDummy1.png')}
            />
          </View>

          <View style={{marginHorizontal: 20}}>
            <Text style={[styles.loginContainer.titleTxt]}>Login with </Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() =>
                  this.setState({loginByMyrank: true, loginByMobile: false})
                }
                style={[
                  this.state.loginByMyrank
                    ? styles.loginContainer.toggleBtn
                    : styles.loginContainer.toggleBtn2,
                ]}>
                <Text
                  style={[
                    this.state.loginByMyrank
                      ? {fontWeight: 'bold'}
                      : {color: '#fff', fontWeight: 'bold'},
                  ]}>
                  MyRank ID
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.setState({loginByMyrank: false, loginByMobile: true})
                }
                style={[
                  this.state.loginByMobile
                    ? styles.loginContainer.toggleBtn
                    : styles.loginContainer.toggleBtn2,
                ]}>
                <Text
                  style={[
                    this.state.loginByMobile
                      ? {fontWeight: 'bold'}
                      : {color: '#fff', fontWeight: 'bold'},
                  ]}>
                  Mobile Number
                </Text>
              </TouchableOpacity>
            </View>

            {this.state.loginByMyrank ? (
              <>
                <View style={[styles.loginContainer.idInput]}>
                  <TextInput
                    onChangeText={value => this.setState({rankId: value})}
                    placeholder="Enter MyRankID"
                    style={[styles.loginContainer.inputBox]}
                  />
                </View>
                <View style={[styles.loginContainer.passwordInput]}>
                  <TextInput
                    onChangeText={value => this.setState({rankPassword: value})}
                    secureTextEntry={this.state.toggleInput}
                    placeholder="Enter Password"
                    style={[styles.loginContainer.inputBox]}
                  />
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({toggleInput: !this.state.toggleInput})
                    }>
                    <Image
                      style={{height: 30, width: 30, tintColor: '#6e0183'}}
                      source={require('../asset/visible.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View style={[styles.loginContainer.bottomTxtView]}>
                  <View style={[styles.loginContainer.bottomDot]} />
                  <Text style={[styles.loginContainer.bottomTxt]}>
                    Minimum 4 characters
                  </Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={[styles.loginContainer.bottomDot]} />
                  <Text style={[styles.loginContainer.bottomTxt]}>
                    Maximum 25 characters
                  </Text>
                </View>
              </>
            ) : this.state.loginByMobile ? (
              <>
                <Text style={[styles.loginContainer.mobileTxt]}>
                  Please enter your phone number then we will send{' '}
                  <Text style={{color: 'tomato', fontWeight: 'bold'}}>OTP</Text>{' '}
                  to verify you.
                </Text>
                <View style={[styles.loginContainer.phoneInput]}>
                  <View style={[styles.loginContainer.inputImgview]}>
                    <Image
                      style={{height: 25, width: 25}}
                      source={require('../asset/india.png')}
                    />
                    <Text style={{fontSize: 15, fontWeight: 'bold'}}>+91</Text>
                  </View>
                  <TextInput
                    value={this.state.mobileNumber}
                    placeholder="Enter Mobile number"
                    maxLength={12}
                    onChangeText={value => this.setState({mobileNumber: value})}
                    style={[styles.loginContainer.mobileInputBox]}
                  />
                </View>
              </>
            ) : null}
              <TouchableOpacity
                  style={[styles.loginContainer.btnView]}
                  onPress={() => {
                    this.hendleLoginWithIdApi();
                    // this.props.navigation.navigate('loginsuccess')
                  }}>
                  <Text style={[styles.loginContainer.btnTxt]}>
                    Log in 
                  </Text>
                </TouchableOpacity>
            {this.state.loginByMyrank ? (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('forget')}>
                <Text style={{fontSize: 12, color: '#fff', marginTop: 10}}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            ) : null}

            {/* {this.state.loginByMyrank ? (
              <>
                <TouchableOpacity
                  style={[styles.loginContainer.btnView]}
                  onPress={() => {
                    this.hendleLoginWithIdApi();
                    // this.props.navigation.navigate('loginsuccess')
                  }}>
                  <Text style={[styles.loginContainer.btnTxt]}>
                    Log in My Rank id
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('forget')}>
                  <Text style={{fontSize: 12, color: '#fff', marginTop: 10}}>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </>
            ) : this.state.loginByMobile ? (
              <TouchableOpacity
                style={[styles.loginContainer.btnView]}
                // onPress={() =>this.props.navigation.navigate('otpverify')}
                onPress={() => this.hendleSubmit()}>
                <Text style={[styles.loginContainer.btnTxt]}>Log in</Text>
              </TouchableOpacity>
            ) : null} */}
          </View>

          <View style={[styles.signupTxtView]}>
            <Text style={{color: '#fff', fontSize: 12}}>
              Don't have an account
            </Text>
            <TouchableOpacity>
              <Text style={{color: '#6379fe', fontSize: 12}}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: '#6d0282',
    height: '100%',
    justifyContent: 'space-evenly',
  },
  imgView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '40%',
  },
  loginContainer: {
    titleTxt: {
      fontSize: 30,
      color: '#fff',
      marginBottom: 25,
      fontWeight: 'bold',
    },
    toggleBtn: {
      backgroundColor: '#f799fe',
      paddingVertical: 7,
      paddingHorizontal: 10,
      borderRadius: 6,
      marginRight: 15,
    },
    toggleBtn2: {
      borderWidth: 1,
      borderColor: '#fff',
      paddingVertical: 7,
      paddingHorizontal: 10,
      borderRadius: 6,
      marginRight: 15,
    },
    idInput: {
      width: '100%',
      height: 50,
      borderRadius: 10,
      paddingHorizontal: 15,
      backgroundColor: '#fff',
      marginVertical: 20,
    },
    passwordInput: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: 50,
      backgroundColor: '#fff',
      borderRadius: 10,
      paddingHorizontal: 15,
      fontSize: 18,
    },
    phoneInput: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: 50,
      backgroundColor: '#fff',
      borderRadius: 10,
      fontSize: 18,
    },
    inputImgview: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 15,
      borderRightWidth: 0.2,
      height: '100%',
    },
    mobileInputBox: {
      height: '100%',
      width: '90%',
      paddingHorizontal: 15,
      fontSize: 18,
    },
    inputBox: {height: '100%', width: '90%', fontSize: 18},
    bottomTxtView: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
    },
    bottomDot: {
      height: 5,
      width: 5,
      backgroundColor: '#fff',
      borderRadius: 10,
      marginRight: 20,
    },
    bottomTxt: {color: '#fff', fontSize: 10},
    mobileTxt: {
      marginVertical: 20,
      fontSize: 16,
      width: '80%',
      color: '#ffd',
    },
    btnView: {
      paddingVertical: 12,
      backgroundColor: 'tomato',
      borderRadius: 10,
      marginTop: 20,
    },
    btnTxt: {
      fontSize: 20,
      textTransform: 'uppercase',
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#fff',
    },
  },
  signupTxtView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
});
