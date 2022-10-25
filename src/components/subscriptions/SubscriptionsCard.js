import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import PlanContainer from './PlanContainer';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
const SubscriptionsCard = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.rootContainer}>
      <View style={styles.topRow}>
        <View style={styles.activeContainer}>
          <Text style={styles.activeTitle}>My Active</Text>
          <View style={styles.numOfActiveContainer}>
            <Text style={styles.numOfActive}>9</Text>
          </View>
        </View>
        <Feather
          name="arrow-up-right"
          size={25}
          onPress={() => {
            navigation.navigate('my-active-subscriptions');
          }}
        />
      </View>
      <View style={styles.bottomRow}>
        {[0, 0].map((el, ind) => (
          <PlanContainer key={ind} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 0.5,
    backgroundColor: '#f1f5f9',
    marginVertical: 20,
    borderRadius: 20,
    borderTopLeftRadius: 0,
    padding: 20,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    justifyContent: 'space-between',
  },
  activeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activeTitle: {fontSize: 30, fontWeight: 'bold', color: 'black'},

  numOfActiveContainer: {
    marginLeft: 10,
    backgroundColor: '#e2e7ee',
    borderRadius: 4,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    height: 25,
  },
  numOfActive: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomRow: {flexDirection: 'row', justifyContent: 'space-between'},
});

export default SubscriptionsCard;
