import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  FlatList,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {options} from './data';

export default class Screen2 extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      sizeOption: options.optionOne,
      toppingsOption: options.optionTwo,
      sizeToggle: null,
    };
  }
  toppingsOption=(val)=>{
    let temp = this.state.toppingsOption.map((item, i) => {
      if (val === i) {
        console.log('===>', i,val);
        return {
          ...item,
          isSelected : !item.isSelected, 
        };
      }
      return item;
    });
    // console.log(temp);
    this.setState({ 
      toppingsOption: temp,
    });
  }
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
  sizeBar = (e, idx) => {
   
    return (
      <View>
        {this.state.sortByToggle === idx ? (
          <TouchableOpacity style={[styles.options.btnView]}>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#fff'}}>
              {e.size}
            </Text>
            <Text style={{fontSize: 14, color: '#fff'}}>{e.price}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
          onPress={() => {
            this.setState({sortByToggle: idx});
          }}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#e3e3e3',
              paddingHorizontal: 40,
              paddingVertical: 10,
              borderRadius: 100,marginBottom:5
            }}>
            <Text style={{fontSize: 14}}>{e.size}</Text>
            <Text style={{fontSize: 14}}>{e.price}</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };
  toppingsBar=(e,idx)=>{
    return(
        <View>
        {e.isSelected ? (
          <TouchableOpacity onPress={() => {
            this.toppingsOption(idx)
          }} style={[styles.options.btnView]}>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#fff'}}>
              {e.toppings}
            </Text>
            <Text style={{fontSize: 14, color: '#fff'}}>{e.price}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              this.toppingsOption(idx)
            }}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#e3e3e3',
              paddingHorizontal: 40,
              paddingVertical: 10,
              borderRadius: 100,marginBottom:5
            }}>
            <Text style={{fontSize: 14}}>{e.toppings}</Text>
            <Text style={{fontSize: 14}}>${e.price}</Text>
          </TouchableOpacity>
        )}
      </View>
    )
  }
  render() {
    return (
      <View style={{height: '100%'}}>
        <View>{this.topNavBar()}</View>
        <View
          style={{
            // justifyContent: 'space-between',
            flex: 1,
            // paddingHorizontal: 25,
          }}>
          {/* top Purple Box  */}
          <View
            style={{
              height: 220,
              width: '100%',
              backgroundColor: '#585BA8',
            }}></View>

          {/* product Section  */}
          <View style={{width: '100%', flex: 1, paddingHorizontal: 20}}>
            <Text style={[styles.productName.nameText]}>Product Name</Text>
            <Text style={styles.productName.descText}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium quisquam nesciunt labore totam, saepe eveniet tempora
              quae repellat harum doloremque blanditiis culpa in quia!
            </Text>
            {/* options */}
            <View style={{flex: 1}}>
            <ScrollView>
              <View
                style={{
                  justifyContent: 'space-between',
                  flex: 1,
                }}>
                <View>
                  <View style={[styles.options.optionView]}>
                    <Text style={{fontSize: 16, fontWeight: '500'}}>
                      Options
                    </Text>
                    <Text style={{fontSize: 10, fontWeight: '200'}}>
                      Required
                    </Text>
                  </View>
                  {/* option Button 1 */}
                  <ScrollView>
                    {console.log(this.state.sizeOption)}
                    <FlatList
                      data={this.state.sizeOption}
                      keyExtractor={item => item.id}
                      renderItem={({item, index}) => this.sizeBar(item, index)}
                    />
                  
                  {/* option Button 2 */}

                  <View style={[styles.options.optionView]}>
                    <Text style={{fontSize: 16, fontWeight: '500'}}>
                      Options
                    </Text>
                    <Text style={{fontSize: 10, fontWeight: '200'}}>
                      Required
                    </Text>
                  </View>
                  {/* option Button 1 */}
                  
                    {console.log(this.state.toppingsOption)}
                    <FlatList
                      data={this.state.toppingsOption}
                      keyExtractor={item => item.id}
                      renderItem={({item, index}) => this.toppingsBar(item, index)}
                    />
                  </ScrollView>
                </View>
                {/* add to cart button  */}
                <TouchableOpacity
                  style={{
                    backgroundColor: '#585BA8',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 40,
                    paddingVertical: 14,
                    borderRadius: 100,
                    marginBottom: 10,
                    marginTop:10
                  }}>
                  <Text>add to cart</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity
                      onPress={() =>
                        this.setState({counter: this.state.counter - 1})
                      }>
                      <Image
                        style={{height: 20, width: 20}}
                        source={require('./src/plusWhite.png')}
                      />
                    </TouchableOpacity>
                    <Text style={{fontSize: 18, paddingHorizontal: 10}}>
                      {this.state.counter}
                    </Text>
                    <TouchableOpacity
                      onPress={() =>
                        this.setState({counter: this.state.counter + 1})
                      }>
                      <Image
                        style={{height: 20, width: 20}}
                        source={require('./src/plusWhite.png')}
                      />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
              </ScrollView>
            </View>
          </View>
        </View>
        {/* <View>{this.bottomNavBar()}</View> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  productName: {
    nameText: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 6,
      marginTop: 10,
    },
    descText: {fontSize: 10, color: '#737272'},
  },
  options: {
    optionView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
      marginTop: 15,
    },
    btnView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#3ABDEB',
      paddingHorizontal: 40,
      paddingVertical: 14,
      borderRadius: 100,
      marginBottom: 5,
    },
  },
});
