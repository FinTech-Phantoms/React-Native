import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const PlanContainer = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.priceContainer}>
        <Image
          source={{
            uri: 'https://www.scdn.co/i/_global/twitter_card-default.jpg',
          }}
          style={styles.appLogo}
        />
        <View>
          <Text style={styles.offerPrice}>$0.99</Text>
          <Text style={{padding: 0, marginTop: -5}}>/mo</Text>
        </View>
      </View>
      <View>
        <Text style={{color: 'black', fontSize: 17, fontWeight: 'bold'}}>
          Learn English
        </Text>
        <Text style={{fontSize: 13}}>Premium</Text>
      </View>
      <Text
        style={{
          color: 'black',
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        5 days left
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    height: 150,
    width: 145,
    backgroundColor: 'white',
    borderRadius: 15,
    borderTopLeftRadius: 0,
    padding: 10,
    justifyContent: 'space-evenly',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  appLogo: {
    height: 50,
    width: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  offerPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    padding: 0,
    margin: 0,
  },
});

export default PlanContainer;
