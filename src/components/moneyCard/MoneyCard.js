import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  TouchableNativeFeedback,
} from 'react-native';
import colors from '../../../assests/colors';

const MoneyCard = () => {
  return (
    <View style={styles.rootContainer}>
      {/* <View style={{flex: 1}}> */}
      <View style={styles.headContainer}>
        <Text style={styles.title}>Wells Frago Checking</Text>
        <Text style={styles.money}>$17,053.99</Text>
      </View>
      <View style={{flex: 0.3, overflow: 'hidden'}}>
        <TouchableNativeFeedback
          onPress={() => {
            console.warn('hi');
          }}
          background={TouchableNativeFeedback.Ripple('whitesmoke', true)}>
          <View style={[styles.footContainer]}>
            <Text style={styles.viewDetailsBtn}>View Details</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    zIndex: 1,
    borderRadius: 6,
    height: 200,
    backgroundColor: 'white',
    width: 180,
    marginVertical: 10,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
  headContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 20,
    color: 'gray',
  },
  money: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 22,
  },
  footContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    overflow: 'hidden',
    flex: 1,
  },
  viewDetailsBtn: {
    fontSize: 17,
    marginVertical: 10,
    color: 'royalblue',
  },
});

export default MoneyCard;
