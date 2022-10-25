import React from 'react';
import {View, StyleSheet, Text, ImageBackground, Image} from 'react-native';
import bg from '../../../assests/bg.png';

const SubscriptionTitleCard = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.backgroundImage}>
        <View
          style={{
            flex: 0.6,
            marginVertical: 20,
          }}>
          <Text style={styles.offerSubTitle}>Offer of the day</Text>
          <Text style={styles.offerTitle}>Apple Music 50% off</Text>
          <Text style={styles.offerSubTitle}>Individual Subscription</Text>
        </View>
        <View style={{flex: 0.4}}>
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
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    overflow: 'hidden',
    borderRadius: 20,
    borderBottomLeftRadius: 0,
  },
  backgroundImage: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-evenly',
  },
  offerTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    marginVertical: 10,
  },
  offerSubTitle: {color: 'white', fontSize: 20},
  priceContainer: {
    backgroundColor: 'white',
    flex: 0.85,
    width: '60%',
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  appLogo: {
    height: 50,
    width: 50,
    borderRadius: 10,
    marginLeft: 20,
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

export default SubscriptionTitleCard;
