import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  topCon: {
    flex: 1,
    justifyContent: 'space-between',
    
  },
  topModal: {
    flex: 1,
    backgroundColor: 'tomato',
    flexDirection: 'row',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    
    backgroundColor:"#000000AA"
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 35,
    alignItems: 'center',
    shadowColor: '#000',
    width: '100%',
    // height: '60%',
    paddingBottom:20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalBar: {
    backgroundColor: 'gray',
    height: 8,
    width: 50,
    borderRadius: 10,
  },
  modalNameSection: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingTop: 15,
    alignItems: 'center',
  },
  nameSectionName: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '27%',
  },
  nameSectionProfile: {
    backgroundColor: 'pink',
    height: 30,
    width: 30,
    borderRadius: 100,
  },
  nameSectionTime: {fontSize: 20, fontWeight: '600'},
  modalBodySection: {
    paddingTop: 15,
    textStyle: {
      fontSize: 15,
      fontWeight: '400',
      color: 'gray',
    },
  },
  modalLikeSection: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingTop: 15,
    alignItems: 'center',
    modalLike: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '20%',
    },
    modalimage: {height: 20, width: 20},
    modalLikeText: {fontSize: 10, color: 'gray'},
    modalComment: {fontSize: 10, fontWeight: '300', color: 'gray'},
  },
});
export default styles;
