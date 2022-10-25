import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import PlanContainer from './PlanContainer';

const SubscriptionsCard = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.topRow}>
        <Text style={styles.activeTitle}>My Active</Text>
        <View style={styles.numOfActiveContainer}>
          <Text style={styles.numOfActive}>9</Text>
        </View>
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
