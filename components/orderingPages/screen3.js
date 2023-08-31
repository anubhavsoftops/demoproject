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
  Modal,
  VirtualizedScrollView,
} from 'react-native';
import React, {Component} from 'react';
import {options} from './data';

export default class Screen3 extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      sizeOption: options.optionOne,
      toppingsOption: options.optionTwo,
      sizeToggle: null,
      modalVisible: false,
      addressModal: options.addressData,
      addressToggle: null,
      
    };
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
  addProduct = index => {

    let filterElement = this.state.toppingsOption.map((e, idx) => {
      
      if (index === idx) {console.log(e.price+e.price);
        return {
          ...e,
          productCount: e.productCount + 1,
        };
      }
      // console.log(e);
      return e;
    });
    let priceIncrese = this.state.toppingsOption.map((e, idx) => {
      
      if (index === idx) {
        return {
          ...e,
          productCount: e.productCount + 1,
        };
      }
      // console.log(e);
      return e;
    });

    this.setState({
      toppingsOption: filterElement,
    });
  };
  removeProduct = index => {
    let filterElement = this.state.toppingsOption.map((e, idx) => {
      
      if (index === idx) {
      if (e.productCount>=0) {
        
        return {
         
          ...e,
          productCount: e.productCount-1,
        }
      }else{
          console.log('=>',e.productCount);
        }
      }
      // console.log(e);
      return e;
    });
    this.setState({
      toppingsOption: filterElement,
    });
  };
  cartPrice = (e, idx) => {
    return (
      <View key={idx} style={{paddingVertical: 5, flexDirection: 'row'}}>
        <View style={{flexDirection: 'row'}}>
          {
            e.productCount>0?<TouchableOpacity  onPress={() => this.removeProduct(idx)}>
            <Image
              style={{height: 20, width: 20}}
              source={require('./src/plusGray.png')}
            />
          </TouchableOpacity>:<TouchableOpacity disabled={true} onPress={() => this.removeProduct(idx)}>
            <Image
              style={{height: 20, width: 20}}
              source={require('./src/plusGray.png')}
            />
          </TouchableOpacity>
          }
          
          <Text style={{fontSize: 18, paddingHorizontal: 10}}>
            {e.productCount}
          </Text>
          <TouchableOpacity onPress={() => this.addProduct(idx)}>
            <Image
              style={{height: 20, width: 20}}
              source={require('./src/plusGray.png')}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',

            width: '80%',
            paddingLeft: 10,
          }}>
          <Text>{e.toppings}</Text>

          <Text>{e.price}</Text>
        </View>
      </View>
    );
  };
  selectPrice = (e, idx) => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              this.setState({sortByToggle: idx});
            }}
            style={{
              height: 20,
              width: 20,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: 'gray',
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 5,
              marginRight: 10,
            }}>
            {this.state.sortByToggle === idx ? (
              <Image
                style={{height: 30, width: 30}}
                source={require('./src/donePurple.png')}
              />
            ) : null}
          </TouchableOpacity>
          <Text style={{fontSize: 15, textTransform: 'capitalize'}}>{e}</Text>
        </View>
      </>
    );
  };
  selectAddress = (e, idx) => {
    return (
      <>
        {this.state.addressToggle === idx ? (
          <TouchableOpacity
            style={{
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 7,
              backgroundColor: '#3ABDEB',
              width: '100%',
              marginBottom: 10,
            }}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>
              {e.addressType}
            </Text>
            <Text style={{color: '#fff', fontSize: 12}}>{e.addressName}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              this.setState({addressToggle: idx});
            }}
            style={{
              borderWidth: 1,
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 7,
              borderColor: '#bdbdbd',
              width: '100%',
              marginBottom: 10,
            }}>
            <Text style={{color: '#bdbdbd', fontWeight: 'bold'}}>
              {e.addressType}
            </Text>
            <Text style={{color: '#bdbdbd', fontSize: 12}}>
              {e.addressName}
            </Text>
          </TouchableOpacity>
        )}
      </>
    );
  };

  render() {
    return (
      <View style={{height: '100%'}}>
        <View>{this.topNavBar()}</View>
        <View
          style={{
            flex: 1,
          }}>
          <View style={{flex: 1}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                paddingHorizontal: 20,
                paddingBottom: 10,
              }}>
              Deliver to
            </Text>
            <Image
              style={{width: '100%', height: 250}}
              source={require('./src/maps.png')}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                paddingVertical: 6,
                backgroundColor: '#3ABDEB',
              }}>
              <Text>Vijay Nagar, Indore, Madhya Pradesh</Text>
              <TouchableOpacity
                onPress={() => this.setState({modalVisible: true})}>
                <Text>Change Address</Text>
              </TouchableOpacity>
            </View>
            <ScrollView>
              {/* number of products  */}
              <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
                <FlatList
                  data={this.state.toppingsOption}
                  keyExtractor={item => item.id}
                  renderItem={({item, index}) => this.cartPrice(item, index)}
                />
              </View>

              {/* total price  */}
              <Text
                style={{
                  textAlign: 'right',
                  paddingBottom: 10,
                  paddingHorizontal: 20,
                }}>
                Total 12000
              </Text>
              <TextInput
                placeholder="Order notes"
                style={{
                  height: 40,
                  width: '91%',
                  paddingHorizontal: 10,
                  borderWidth: 1,
                  borderRadius: 5,
                  marginHorizontal: 20,
                }}
              />
              <View style={{paddingHorizontal: 20, paddingVertical: 15}}>
                <Text>Payment Mode</Text>

                <FlatList
                  data={['cash', 'GPay', 'Debit/Credit Card']}
                  columnWrapperStyle={{justifyContent: 'space-evenly'}}
                  keyExtractor={item => item.id}
                  numColumns={3}
                  renderItem={({item, index}) => this.selectPrice(item, index)}
                />
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: '#585BA8',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 40,
                  paddingVertical: 14,
                  borderRadius: 100,
                  marginBottom: 10,
                  marginTop: 10,
                  marginHorizontal: 20,
                }}>
                <Text style={{textAlign: 'center', color: 'white'}}>
                  Complete Order
                </Text>
              </TouchableOpacity>
            </ScrollView>
            <Modal visible={this.state.modalVisible} transparent>
              <View style={styles.centeredView}>
                <View style={[styles.modalView, {}]}>
                  <FlatList
                    data={this.state.addressModal}
                    keyExtractor={item => item.id}
                    renderItem={({item, index}) =>
                      this.selectAddress(item, index)
                    }
                  />
                  <Image
                    style={{height: 35, width: 35, marginTop: 10}}
                    source={require('./src/plusFilled.png')}
                  />

                  <TouchableOpacity
                    onPress={() => this.setState({modalVisible: false})}
                    style={{marginVertical: 20}}>
                    <Text style={{fontSize: 25, color: 'purple'}}>Done</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
        </View>
        <View>{this.bottomNavBar()}</View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',

    backgroundColor: '#000000AA',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 35,
    alignItems: 'center',
    shadowColor: '#000',
    width: '100%',
    // height: '60%' ,
    paddingBottom: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
