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

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      isEmail: false,
      isMobile: false,
      isEmailVerfied: false,
      isMobileVerfied: false,
      isPasswordVisiable: true,
      isConfirmVisiable: true,
      nameInput: '',
      nameMsg: '',
      emailInput: '',
      emailMsg: '',
      mobileInput: '',
      mobileMsg: '',
      passwordInput: '',
      passwordMsg: '',
      confirmInput: '',
      confirmMsg: '',
      validityInput: '',
      payMode: '',
      isEmailOtp: false,
      isMobileOtp: false,
      emailotpInput: '',
      otpForEmail: '',
      otpForMobile: '',
      mobileotpInput: '',
      acceptTNC: false,
      accessToken: '',
      emailOTPResponce: '',
      emailVerifyToken: '',
      mobileOTPResponce: '',
      MobileTokenVerify: '',
      isBtnActive: false,
    };
  }

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
            <View style={[styles.progress.dot, {backgroundColor: '#309315'}]} />
            <View
              style={[styles.progress.line, {backgroundColor: '#309315'}]}
            />
          </View>
          <Text style={[styles.progress.text, {color: '#309315'}]}>
            Pricing
          </Text>
        </View>
        <View style={{width: '24%'}}>
          <View style={[styles.progress.insideCon]}>
            <View style={[styles.progress.dot, {backgroundColor: '#68397f'}]} />
            <View
              style={[styles.progress.line, {backgroundColor: '#aaaaaa'}]}
            />
          </View>
          <Text style={[styles.progress.text, {color: '#68397f'}]}>
            Registration
          </Text>
        </View>
        <View style={{width: '20%'}}>
          <View style={[styles.progress.dot, {backgroundColor: '#aaaaaa'}]} />
          <Text style={[styles.progress.text]}>Payment{'\n'}successful</Text>
        </View>
      </View>
    );
  };
  nameValidate = value => {
    // const hasSpcialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const hasSpcialChar = /^[a-zA-Z\s]*$/.test(value);

    if (value === '') {
      this.setState({nameInput: value, nameMsg: 'please fill Name'});
    } else if (value.length < 3) {
      this.setState({
        nameInput: value,
        nameMsg: 'name must be at least 3 characters long!',
      });
    } else if (!hasSpcialChar) {
      this.setState({
        nameInput: value,
        nameMsg: 'spcial characters and numbers are not allowed',
      });
    } else {
      this.setState({nameInput: value, nameMsg: null});
    }
  };
  emailValidate = value => {
    const isValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);
    if (value === '') {
      this.setState({emailInput: value, emailMsg: 'please fill email'});
    } else if (!isValid) {
      this.setState({emailInput: value, emailMsg: 'email format not correct'});
    } else {
      this.setState({emailInput: value, emailMsg: '', isEmailOtp: true});
    }
  };
  mobileValidate = value => {
    const isValid = /^[0-9\b]+$/.test(value);
    if (value === '') {
      this.setState({
        mobileInput: value,
        mobileMsg: 'please enter mobile number',
      });
    } else if (value.length > 10) {
      this.setState({
        mobileInput: value,
        mobileMsg: 'mobile number only 10 numbers',
        isMobileOtp: false,
      });
    } else if (!isValid) {
      this.setState({
        mobileInput: value,
        mobileMsg: 'Phone Number is not correct',
        isMobileOtp: false,
      });
    } else if (value.length < 10) {
      this.setState({
        mobileInput: value,
        mobileMsg: 'mobile number only 10 numbers',
        isMobileOtp: false,
      });
    } else {
      this.setState({mobileInput: value, mobileMsg: '', isMobileOtp: true});
    }
  };
  passwordValidate = value => {
    const isValid =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(value);
    if (value === '') {
      this.setState({passwordInput: value, passwordMsg: 'enter password'});
    } else if (value.length < 6) {
      this.setState({
        passwordInput: value,
        passwordMsg: 'password must be 6 charactors',
      });
    } else if (value.length > 16) {
      this.setState({
        passwordInput: value,
        passwordMsg: 'password must be 16 or lessthen 16 charactors',
      });
    } else if (!isValid) {
      this.setState({
        passwordInput: value,
        passwordMsg:
          'password must contain one number and one spcial charactors',
      });
    } else {
      this.setState({passwordInput: value, passwordMsg: ''});
    }
  };
  confirmMatch = value => {
    if (value === '') {
      this.setState({
        confirmInput: value,
        confirmMsg: 'enter confirm password',
      });
    } else if (value !== this.state.passwordInput) {
      this.setState({confirmInput: value, confirmMsg: 'password not match'});
    } else {
      this.setState({confirmInput: value, confirmMsg: ''});
    }
  };
  genrateOTP = val => {
    if (val == 'email') {
      const otp = Math.floor(Math.random() * 9000) + 1000;
      this.setState({otpForEmail: `${otp}`});
      Alert.alert(`${otp}`);
    } else {
      const otp = Math.floor(Math.random() * 9000) + 1000;
      this.setState({otpForMobile: `${otp}`});
      Alert.alert(`${otp}`);
    }
  };
  componentDidMount() {
    this.setState({accessToken: this.props.route.params.token});
  }

  sendEmailOTPApi = () => {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    let raw = JSON.stringify({
      data: {
        attributes: {
          email: this.state.emailInput,
        },
      },
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };
    if (!this.state.isEmailOtp) {
      alert('enter email');
    } else {
      this.setState({isEmail: true, isEmailOtp: true});
      fetch(
        'https://myrankelearningapp-96162-ruby.b96162.dev.eastus.az.svc.builder.cafe//send_email_otp',
        requestOptions,
      )
        .then(response => response.json())
        .then(result => {
          this.setState({
            emailOTPResponce: result.data.attributes.pin,
            emailVerifyToken: result.meta.token,
            isEmail: true,
          });
          alert(this.state.emailOTPResponce);
        })
        .catch(error => {
          console.log('error', error);
          alert(error);
        });
    }
  };

  verifyEmailOTPApi = () => {
    let myHeaders = new Headers();
    myHeaders.append('token', this.state.emailVerifyToken);
    myHeaders.append('Content-Type', 'application/json');

    let raw = JSON.stringify({
      data: {
        attributes: {
          pin: this.state.emailotpInput,
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
      'https://myrankelearningapp-96162-ruby.b96162.dev.eastus.az.svc.builder.cafe//verify_email',
      requestOptions,
    )
      .then(response => {
        response.json();
        if (response.status === 200) {
          this.setState({isEmailVerfied: true});

          this.setState({isEmail: false});
        } else if (response.status === 422) {
          alert('Worng OTP');
          this.setState({isEmail: false});
        }
      })
      .then(result => {
        console.log('verifyEmailOTPApi', result);
      })
      .catch(error => console.log('error', error));
  };
  sendMobileOTPApi = () => {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    // console.log('-email->', this.state.mobileInput);
    let raw = JSON.stringify({
      data: {
        attributes: {
          full_phone_number: this.state.mobileInput,
        },
      },
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };
    if (!this.state.isMobileOtp) {
      alert('enter mobile no');
    } else {
      this.setState({isMobile: true, isMobileOtp: true});
      fetch(
        'https://myrankelearningapp-96162-ruby.b96162.dev.eastus.az.svc.builder.cafe/send_sms_otp',
        requestOptions,
      )
        .then(response => response.json())
        .then(result => {
          this.setState({
            mobileOTPResponce: result.data.attributes.pin,
            MobileTokenVerify: result.meta.token,
            isMobile: true,
          });
          alert(this.state.mobileOTPResponce);
          console.log('--mobile-OTP-->', this.state.mobileOTPResponce);
        })
        .catch(error => {
          console.log('error', error);
          alert(error);
        });
    }
  };
  verifyMobileOTPApi = () => {
    let myHeaders = new Headers();
    myHeaders.append('token', this.state.MobileTokenVerify);
    myHeaders.append('Content-Type', 'application/json');

    let raw = JSON.stringify({
      data: {
        attributes: {
          pin: this.state.mobileotpInput,
        },
      },
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    // async function fetchData(url) {
    //   const response = await fetch(
    //     'https://myrankelearningapp-96162-ruby.b96162.dev.eastus.az.svc.builder.cafe//verify_email',
    //     requestOptions,
    //   );
    //   if (response.status === 200) {
    //     console.log('Page not found');
    //     this.setState({isEmailVerfied: true});
    //   }
    //   const data = await response.json();
    //   console.log(data);
    // }
    // fetchData();

    fetch(
      'https://myrankelearningapp-96162-ruby.b96162.dev.eastus.az.svc.builder.cafe/verify_mobile_otp',
      requestOptions,
    )
      .then(response => {
        response.json();
        if (response.status === 200) {
          this.setState({isMobileVerfied: true});
          this.setState({isMobile: false});

          // console.log('verify');
        } else if (response.status === 422) {
          this.setState({isMobile: false});
          alert('Worng OTP');
        }
      })
      .then(result => {
        console.log('verifyMobileotp', result);
      })
      .catch(error => console.log('error', error));
  };
  handleSubmitApi = val => {
    let myHeaders = new Headers();
    // console.log('--tocken-- >', this.state.accessToken);
    myHeaders.append('token', this.state.accessToken);
    myHeaders.append('Content-Type', 'application/json');

    let raw = JSON.stringify({
      data: {
        type: 'sms_account',
        attributes: {
          name: this.state.nameInput,
          email: this.state.emailInput,
          phone_number: this.state.mobileInput,
          password: this.state.passwordInput,
          password_confirmation: this.state.confirmInput,
          validity: this.state.validityInput,
          // name: 'shivani 817',
          // email: 'sumidt@mail.com',
          // phone_number: '1234567890',
          // password: 'assword',
          // password_confirmation: 'assword',
          // validity: 'jygh',
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
      'https://myrankelearningapp-96162-ruby.b96162.dev.eastus.az.svc.builder.cafe//account_block/accounts',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        console.log('handleSubmitApi-->', result);
        if (result?.errors) {
          result?.errors.map(res => {
            if (res?.email) {
              this.setState({isEmailVerfied: false});
              alert(`email ${res.email}`);
              console.log(res.email);
            } else if (res?.phone_number) {
              this.setState({isMobileVerfied: false});
              alert(`Mobile Number ${res.phone_number}`);
            } else if (res?.exception) {
              alert(res.exception);
            }
          });
        } else if (result?.error) {
          alert(result.exception);
        } else {
          let userId = result.data.attributes.package[0].onlineaccount_id;
          let signUpToken = result.meta.token;
          this.signUpSuccessApi(userId, signUpToken);
          console.log(userId, signUpToken);
        }
        // if (result?.errors[0]?.email) {
        //   let val = Object.values(result?.errors[0]);
        //   let key = Object.keys(result?.errors[0]);
        //   this.setState({isEmailVerfied: false});
        //   alert(`${key} : ${val}`);
        // } else
        // if (result?.errors[0]?.phone_number) {
        //   let val = Object.values(result?.errors[0]);
        //   let key = Object.keys(result?.errors[0]);
        //   this.setState({isMobileVerfied: false});
        //   alert(`${key} : ${val}`);
        // } else if (result?.error) {
        //   alert(result?.error);
        // } else {
        //   let userId = result.data.attributes.package[0].onlineaccount_id;
        //   let signUpToken = result.meta.token;
        //   this.signUpSuccessApi(userId, signUpToken);
        // }
      })
      .catch(error => console.log('handleSubmitApi--catch-->', error));
  };
  signUpSuccessApi = (id, token) => {
    let myHeaders = new Headers();
    myHeaders.append('token', token);

    let requestOptions = {
      method: 'PATCH',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(
      `https://myrankelearningapp-96162-ruby.b96162.dev.eastus.az.svc.builder.cafe//account_block/accounts/${id}`,
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        console.log('result', result);
        alert('account successfully created');
        this.props.navigation.navigate('loginscreen');
      })
      .catch(error => console.log('error', error));
  };

  render() {
    const {
      nameInput,
      nameMsg,
      emailInput,
      emailMsg,
      mobileInput,
      mobileMsg,
      passwordInput,
      passwordMsg,
      confirmInput,
      confirmMsg,
      isEmailOtp,
      isMobileOtp,
    } = this.state;
    const activeBtn =
      this.state.isMobileVerfied &&
      this.state.isEmailVerfied &&
      this.state.acceptTNC;
    let active =
      !this.state.nameInput == '' &&
      !this.state.passwordInput == '' &&
      !this.state.confirmInput == '' &&
      !this.state.validityInput == '' &&
      activeBtn;

    return (
      <SafeAreaView>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Image
            style={{height: 25, width: 25}}
            source={require('../asset/back.png')}
          />
        </TouchableOpacity>
        <View style={{marginHorizontal: 20}}>
          <View style={{marginTop: 10, height: 60, marginBottom: 10}}>
            {this.progressBar()}
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* ----- Name ----- */}
            <View>
              <Text style={[styles.title]}>Student Name</Text>
              <View style={[styles.name.inputView]}>
                <TextInput
                  placeholder="Student Name"
                  value={nameInput}
                  onChangeText={value => this.nameValidate(value)}
                  style={[styles.name.textInput]}
                />
              </View>
              {nameInput && nameMsg ? (
                <Text style={[styles.errorMsg]}>{nameMsg}</Text>
              ) : null}
            </View>
            {/* ------ Email ------ */}
            <View>
              <Text style={[styles.title]}>Email</Text>
              <View style={[styles.email.emailView]}>
                <TextInput
                  placeholder="Email"
                  value={emailInput}
                  onChangeText={value => this.emailValidate(value)}
                  style={[styles.email.textInput]}
                />
                {this.state.isEmailVerfied ? (
                  <View style={[styles.email.verifedView]}>
                    <Image
                      style={[styles.email.verifiedImg]}
                      source={require('../asset/orangeTick.png')}
                    />
                    <Text style={[styles.email.verifiedTxt]}>Verified</Text>
                  </View>
                ) : this.state.isEmail ? (
                  <Text style={[styles.email.sendTxt]}>otp sent</Text>
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      this.sendEmailOTPApi();
                      // this.genrateOTP('email');
                    }}>
                    <Text style={[styles.email.sendTxt]}>get otp</Text>
                  </TouchableOpacity>
                )}
              </View>
              {/* ---- Error Msg ---- */}
              {emailInput && emailMsg ? (
                <Text style={[styles.errorMsg]}>{emailMsg}</Text>
              ) : null}
              {/* -----verify email otp----- */}
              {this.state.isEmail ? (
                <View style={[styles.email.emailVerifyView]}>
                  <View
                    style={{borderBottomWidth: 1, width: '60%', height: 45}}>
                    <TextInput
                      placeholder="Enter OTP"
                      onChangeText={value =>
                        this.setState({emailotpInput: value})
                      }
                      style={[styles.email.emailVerifyTextInput]}
                    />
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      this.verifyEmailOTPApi();
                    }}>
                    <Text style={styles.email.otpTxt}>verify</Text>
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
            {/* ----- Mobile No ----- */}
            <View>
              <Text style={[styles.title]}>mobile number</Text>
              <View style={[styles.email.emailView]}>
                <TextInput
                  placeholder="Mobile Number"
                  value={mobileInput}
                  onChangeText={value => this.mobileValidate(value)}
                  style={[styles.email.textInput]}
                />

                {this.state.isMobileVerfied ? (
                  <View style={[styles.email.verifedView]}>
                    <Image
                      style={[styles.email.verifiedImg]}
                      source={require('../asset/orangeTick.png')}
                    />
                    <Text style={[styles.email.verifiedTxt]}>Verified</Text>
                  </View>
                ) : this.state.isMobile ? (
                  <Text style={[styles.email.sendTxt]}>otp sent</Text>
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      this.sendMobileOTPApi();
                      // this.genrateOTP('email');
                    }}>
                    <Text style={[styles.email.sendTxt]}>get otp</Text>
                  </TouchableOpacity>
                )}
              </View>
              {mobileInput && mobileMsg ? (
                <Text style={[styles.errorMsg]}>{mobileMsg}</Text>
              ) : null}
              {/* ------ verify mobile otp -------- */}
              {this.state.isMobile ? (
                <View style={[styles.email.emailVerifyView]}>
                  <View
                    style={{borderBottomWidth: 1, width: '60%', height: 45}}>
                    <TextInput
                      placeholder="Enter OTP"
                      onChangeText={value =>
                        this.setState({mobileotpInput: value})
                      }
                      style={[styles.email.emailVerifyTextInput]}
                    />
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      this.verifyMobileOTPApi();
                      // this.verifyMobile();
                      // this.setState({isMobile: null});
                    }}>
                    <Text style={styles.email.otpTxt}>verify</Text>
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
            {/* ----- Password ----- */}
            <View>
              <Text style={[styles.title]}>password</Text>
              <View style={[styles.email.emailView]}>
                <TextInput
                  placeholder="Enter password"
                  secureTextEntry={this.state.isPasswordVisiable}
                  value={passwordInput}
                  onChangeText={value => this.passwordValidate(value)}
                  style={[styles.password.inputTxt]}
                />
                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      isPasswordVisiable: !this.state.isPasswordVisiable,
                    })
                  }>
                  <Image
                    style={[styles.password.toggleImg]}
                    source={require('../asset/visible.png')}
                  />
                </TouchableOpacity>
              </View>

              {passwordInput && passwordMsg ? (
                <Text style={[styles.errorMsg]}>{passwordMsg}</Text>
              ) : null}
            </View>
            {/* ----- Confirm PassWord ----- */}
            <View>
              <Text style={[styles.title]}>confirm password</Text>
              <View style={[styles.email.emailView]}>
                <TextInput
                  secureTextEntry={this.state.isConfirmVisiable}
                  placeholder="Enter Confirm Password"
                  value={confirmInput}
                  onChangeText={value => this.confirmMatch(value)}
                  style={[styles.password.inputTxt]}
                />
                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      isConfirmVisiable: !this.state.isConfirmVisiable,
                    })
                  }>
                  <Image
                    style={[styles.password.toggleImg]}
                    source={require('../asset/visible.png')}
                  />
                </TouchableOpacity>
              </View>
              {confirmInput && confirmMsg ? (
                <Text style={[styles.errorMsg]}>{confirmMsg}</Text>
              ) : null}
            </View>
            {/* ----- Validaty ----- */}
            <View>
              <Text style={[styles.title]}>validity</Text>
              <View style={[styles.email.emailView]}>
                <TextInput
                  placeholder="Select Validity"
                  onChangeText={value => this.setState({validityInput: value})}
                  style={[styles.password.inputTxt]}
                />
                <TouchableOpacity style={{marginRight: 10}}>
                  <Image
                    style={[styles.password.confirmImg]}
                    source={require('../asset/orangeFilledArrow.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* ----- Payment Mode ----- */}
            <View>
              <Text style={[styles.title]}>payment mode</Text>
              <View style={[styles.name.inputView]}>
                <TextInput
                  placeholder="Seclect Payment Mode"
                  onChangeText={value => this.setState({payMode: value})}
                  style={[styles.name.textInput]}
                />
              </View>
            </View>
            {/* ---terms and condations------÷ */}
            <View style={[styles.tnd.tndView]}>
              <TouchableOpacity
                onPress={() =>
                  this.setState({acceptTNC: !this.state.acceptTNC})
                }>
                <View style={[styles.tnd.tickView]}>
                  {this.state.acceptTNC ? (
                    <Image
                      style={[styles.tnd.tickImg]}
                      source={require('../asset/tick.png')}
                    />
                  ) : null}
                </View>
              </TouchableOpacity>

              <Text style={{fontSize: 15, marginLeft: 10}}>I agree to the</Text>
              <TouchableOpacity>
                <Text style={[styles.tnd.readTndTxt]}>
                  Terms and Condations
                </Text>
              </TouchableOpacity>
              {/* -------register button-------- */}
            </View>
            {/* ---- Submit Button ----- */}
            <TouchableOpacity
              disabled={!active}
              style={[styles.submit.submitBtn]}
              onPress={() => {
                this.handleSubmitApi();
              }}>
              <Text style={[styles.submit.submitBtnTxt]}>Register</Text>
            </TouchableOpacity>
            <View style={{height: 220}} />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#68397f',
    textTransform: 'uppercase',
    //   marginBottom: 5,
    marginVertical: 8,
  },
  name: {
    inputView: {
      height: 45,
      width: '100%',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'tomato',
    },
    textInput: {
      height: '100%',
      width: '100%',
      fontSize: 20,
      paddingHorizontal: 15,
    },
  },
  email: {
    emailView: {
      height: 45,
      width: '100%',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'tomato',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    textInput: {
      height: '100%',
      width: '70%',
      fontSize: 20,
      paddingHorizontal: 15,
    },
    verifedView: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 10,
    },
    verifiedImg: {height: 20, width: 20, marginRight: 5},
    verifiedTxt: {fontSize: 15, color: '#68397f'},
    sendTxt: {
      fontSize: 20,
      color: '#68397f',
      textTransform: 'uppercase',
      marginRight: 10,
    },
    emailVerifyView: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5,
      marginHorizontal: 15,
    },
    emailVerifyTextInput: {
      height: '100%',
      width: '70%',
      fontSize: 20,
      paddingHorizontal: 5,
    },
    otpTxt: {
      fontSize: 18,
      color: '#68397f',
      textTransform: 'uppercase',
      marginLeft: 20,
    },
  },
  password: {
    inputTxt: {
      height: '100%',
      width: '88%',
      fontSize: 20,
      paddingHorizontal: 15,
    },
    toggleImg: {
      height: 25,
      width: 25,
      marginLeft: 5,
      tintColor: '#aaaaaa',
      marginRight: 10,
    },
    confirmImg: {
      height: 25,
      width: 25,
      marginLeft: 5,
      transform: [{rotate: '90deg'}],
    },
  },
  tnd: {
    tndView: {
      flexDirection: 'row',
      marginTop: 20,
      alignItems: 'center',
    },
    tickView: {
      borderWidth: 2,
      borderColor: 'tomato',
      height: 25,
      width: 25,
      alignItems: 'center',
      justifyContent: 'center',
    },
    tickImg: {height: 18, width: 18, tintColor: 'tomato'},
    readTndTxt: {
      fontSize: 15,
      color: '#68397f',
      fontWeight: 'bold',
      paddingLeft: 5,
    },
  },
  submit: {
    submitBtn: {
      paddingHorizontal: 50,
      paddingVertical: 15,
      backgroundColor: 'tomato',
      alignItems: 'center',
      marginHorizontal: 25,
      borderRadius: 10,
      marginTop: 25,
    },
    submitBtnTxt: {
      fontSize: 20,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      color: '#fff',
    },
  },
  errorMsg: {
    fontSize: 12.5,
    color: 'red',
    textTransform: 'capitalize',
    marginLeft: 10,
    marginTop: 3,
  },
});
