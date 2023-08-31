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
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {Component} from 'react';

export default class PackageScreen extends Component {
  constructor(props) {
    super();
    this.state = {
      packageData: [],
      loder: true,
    };
  }
  progressBar = () => {
    return (
      <View style={[styles.progress.container]}>
        <View style={{width: '24%'}}>
          <View style={[styles.progress.insideCon]}>
            <View style={[styles.progress.dot]} />
            <View style={[styles.progress.line]} />
          </View>
          <Text style={[styles.progress.text, {color: '#68397f'}]}>
            Choose{'\n'}Package
          </Text>
        </View>
        <View style={{width: '24%'}}>
          <View style={[styles.progress.insideCon]}>
            <View style={[styles.progress.dot, {backgroundColor: '#aaaaaa'}]} />
            <View
              style={[styles.progress.line, {backgroundColor: '#aaaaaa'}]}
            />
          </View>
          <Text style={[styles.progress.text]}>Choose{'\n'}Package</Text>
        </View>
        <View style={{width: '24%'}}>
          <View style={[styles.progress.insideCon]}>
            <View style={[styles.progress.dot, {backgroundColor: '#aaaaaa'}]} />
            <View
              style={[styles.progress.line, {backgroundColor: '#aaaaaa'}]}
            />
          </View>
          <Text style={[styles.progress.text]}>Choose{'\n'}Package</Text>
        </View>
        <View style={{width: '20%'}}>
          <View style={[styles.progress.dot, {backgroundColor: '#aaaaaa'}]} />
          <Text style={[styles.progress.text]}>Payment{'\n'}successful</Text>
        </View>
      </View>
    );
  };

  getPackagesApi = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://myrankelearningapp-96162-ruby.b96162.dev.eastus.az.svc.builder.cafe/bx_block_plan/pack_finals',
      requestOptions,
    )
      .then(response => response.json())
      // .then(result=>console.log(result))
      .then(result =>
        this.setState({packageData: result.data, loder: false}, () => {
          console.log('fgh', result.data[0].attributes.id);
        }),
      )
      .catch(error => console.log('error', error));
  };
  async componentDidMount() {
    this.getPackagesApi();
  }

  pkgCard = item => {
    return (
      <View style={[styles.pkgCard.pkgCon]}>
        <Image
          style={[styles.pkgCard.demoImg]}
          source={{
            uri: item.attributes.image,
          }}
        />
        <View style={{marginLeft: 15}}>
          <Text style={[styles.pkgCard.title]}>
            {item.attributes.pack_name}
          </Text>
          <TouchableOpacity
            style={[styles.pkgCard.btn]}
            onPress={() =>
              this.props.navigation.navigate('pkgPriceScreen', {
                packageID: item.attributes.id,
              })
            }>
            <Text style={[styles.pkgCard.btnTxt]}>View Pricing</Text>
            <Image
              style={[styles.pkgCard.btnImg]}
              source={require('../asset/orangeFilledArrow.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  render() {
    // console.log('state--->',this.state.packageData.data.map((e)=>e));
    return (
      <SafeAreaView>
        <View style={{marginHorizontal: 10}}>
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
            <View style={{justifyContent:'center',alignItems:'center'}}>
              <ActivityIndicator size="large" color="tomato" />
            </View>
          ) : (
            <FlatList
              data={this.state.packageData}
              renderItem={({item}) => this.pkgCard(item)}
              keyExtractor={item => item.id}
            />
          )}
        </View>
        <View style={{height: 500}}></View>
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
