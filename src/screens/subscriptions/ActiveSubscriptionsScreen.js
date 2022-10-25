import React from 'react';
import {View, StyleSheet, useColorScheme, FlatList, Text} from 'react-native';
import colors from '../../../assests/colors';
import PlanContainer from '../../components/subscriptions/PlanContainer';
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

const SubsContainer = () => {
  return (
    <View
      style={{
        height: 100,
        backgroundColor: 'red',
        marginVertical: 5,
      }}>
      <Text>hi</Text>
    </View>
  );
};
const ActiveSubscriptionsScreen = () => {
  var isDarkMode = useColorScheme() === 'dark';
  return (
    <View
      style={{
        backgroundColor: isDarkMode
          ? colors.darkbackground
          : colors.lightbackground,
        flex: 1,
        justifyContent: 'center',
      }}>
      <FlatList data={data} renderItem={({item}) => <SubsContainer />} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ActiveSubscriptionsScreen;
