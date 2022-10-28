/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import PlanContainer from './PlanContainer';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
var data = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6},
  {id: 7},
  {id: 8},
  {id: 9},
  {id: 10},
];
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
            navigation.navigate('all-subscriptions', {
              title: 'Active Subscriptions',
              action: 'active-subscriptions',
            });
          }}
        />
      </View>
      <View style={styles.bottomRow}>
        <FlatList
          data={data}
          renderItem={({item}) => <PlanContainer id={item.id} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: 'flex-start',
          }}
        />
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
    padding: 10,
    paddingBottom: 10,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
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
