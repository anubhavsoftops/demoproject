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

export default class OTPVerify extends Component {
  constructor() {
    super();
    this.state = {
      timer: 5,
      isTimerActive: true,
      val1: '',
      val2: '',
      val3: '',
      val4: '',
      token: '',
      switchToken: false,
    };
  }
  componentDidMount() {
    this.startTimer();
  }
  startTimer = () => {
    let timerInterval = setInterval(() => {
      if (this.state.timer > 0) {
        this.setState(preState => ({timer: preState.timer - 1}));
      } else {
        clearInterval(timerInterval);
        this.setState({isTimerActive: false});
      }
    }, 1000);
  };
  hendleResend = () => {
    this.setState({timer: 10, isTimerActive: true});
    this.startTimer();
  };
  resendOTPApi = () => {
    let myHeaders = new Headers();
    myHeaders.append('token', this.props.route.params.OTPToken);

    let raw = JSON.stringify({
      data: {
        attributes: {
          full_phone_number: this.props.route.params.number,
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
      'https://myrankelearningapp-96162-ruby.b96162.dev.eastus.az.svc.builder.cafe//bx_block_login/logins/resend_otp_for_login',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        console.log('!!!!', result.meta.token);
        this.setState({token: result.meta.token, switch: true});
        this.hendleResend();
        console.log(result.data.attributes.pin);
        alert(result?.data?.attributes?.pin);
      })
      .catch(error => console.log('error', error));
  };

  verifyOtpApi = () => {
    // console.warn(this.state.val1+this.state.val2+this.state.val3+this.state.val4);
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    let otp =
      this.state.val1 + this.state.val2 + this.state.val3 + this.state.val4;
    // `${this.state.val1}${this.state.val2}${this.state.val3}${this.state.val4}`
    let token = this.state.switchToken
      ? this.state.token
      : this.props.route.params.OTPToken;
    console.log('==otp==>', typeof otp, '\n', this.props.route.params.OTPToken);
    let raw = JSON.stringify({
      data: {
        token: token,
        pin: otp,
      },
    });
    console.log('data', raw);

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(
      'https://myrankelearningapp-96162-ruby.b96162.dev.eastus.az.svc.builder.cafe//bx_block_login/logins/login_otp_confirmation',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        console.log(
          result.data.attributes.phone_number ===
            this.props.route.params.number,
        );
        if (result) {
          this.setState({switchToken: 'false'});
          this.props.navigation.navigate('loginsuccess');
        }
      })
      .catch(error => console.log('error', error));
  };
  render() {
    // const [timer, isTimerActive] = this.state;
    // console.log(this.state.otp);
    return (
      <SafeAreaView style={{backgroundColor: '#600181'}}>
        <View style={[styles.topConitainer]}>
          <View style={[styles.contentView]}>
            <Text style={[styles.titleTxt]}>Verify Code</Text>
            <Text style={[styles.descTxt]}>
              Check your SMS inbox , we have send you the code at +0 000 000
              0000
            </Text>
            <View style={[styles.inputView]}>
              <TextInput
                textAlign="center"
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={value => this.setState({val1: value})}
                style={[styles.otpBox]}
              />
              <TextInput
                textAlign="center"
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={value => this.setState({val2: value})}
                style={[styles.otpBox]}
              />
              <TextInput
                textAlign="center"
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={value => this.setState({val3: value})}
                style={[styles.otpBox]}
              />
              <TextInput
                textAlign="center"
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={value => this.setState({val4: value})}
                style={[styles.otpBox]}
              />
            </View>

            {this.state.isTimerActive ? (
              <Text style={[styles.timmerTxt]}>{this.state.timer}</Text>
            ) : (
              <TouchableOpacity onPress={() => this.resendOTPApi()}>
                <Text style={[styles.timmerTxt]}>Resend OTP</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={[styles.btnView]}>
            <TouchableOpacity
              onPress={() => this.verifyOtpApi()}
              style={[styles.btn]}>
              <Text style={[styles.btnTxt]}>Verify OTP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  topConitainer: {marginHorizontal: 20, height: '100%'},
  contentView: {height: '60%', justifyContent: 'center'},
  titleTxt: {color: '#fff', fontSize: 25, fontWeight: 'bold'},
  descTxt: {color: '#fff', fontSize: 15, marginTop: 20, width: 280},
  inputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 20,
  },
  otpBox: {
    height: 70,
    width: 70,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25,
  },
  timmerTxt: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 25,
  },
  btnView: {height: '40%', justifyContent: 'center'},
  btn: {
    backgroundColor: 'tomato',
    paddingVertical: 18,
    borderRadius: 10,
  },
  btnTxt: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
  },
});
