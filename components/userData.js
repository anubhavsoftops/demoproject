import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  Button,
  ActivityIndicator,
} from 'react-native';
import data from '../data';

const ListData = data => {
  return (
    <>
      <View key={data.id} style={listStyle.container}>
        <View>
          <Text>Name : {data.name}</Text>
          <Text>Username : {data.username}</Text>
          <Text>Email : {data.email}</Text>
          <Text>Phone : {data.phone}</Text>
          <Text>Company Name : {data.company.name}</Text>
        </View>
        <View>
          <Image
            style={{height: 80, width: 70, borderRadius: 10}}
            source={{
              uri: data.image,
            }}
          />
        </View>
      </View>
    </>
  );
};
const PostData = data => {
  return (
    <>
      <View key={data.id} style={listStyle.container}>
        <View>
          <Text>Title : {data.title}</Text>
          <Text>Post : {data.body}</Text>
        </View>
      </View>
    </>
  );
};

const listStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f0d5c7',
    padding: 5,
    margin: 5,
    borderRadius: 10,
    paddingLeft: 12,
  },
});
const FlatListBasics = () => {
  const [showUser, setShowUser] = useState(false);
  const [state, setState] = useState(null);

  return (
    <View>
      <Button
        onPress={() => {
          setShowUser(!showUser);
        }}
        title="Show Users"
      />
      <View>{showUser ? data.map(data => ListData(data)) : null}</View>
      
      {/* <View>{showUser ? state.map(state => PostData(state)) : null}</View> */}
      {/* <FlatList data={data} renderItem={({item}) => ListData(item)} /> */}
      {/* {data.map(data => ListData(data))} */}
    </View>
  );
};

export default FlatListBasics;
