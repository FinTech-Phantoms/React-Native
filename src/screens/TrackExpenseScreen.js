import React from 'react';
import {View, StyleSheet, Text, useColorScheme, FlatList} from 'react-native';
import colors from '../../assests/colors';
import MoneyCard from '../components/moneyCard/MoneyCard';
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
const TrackExpenseScreen = () => {
  var isDarkMode = useColorScheme() === 'dark';
  return (
    <View
      style={{
        backgroundColor: isDarkMode
          ? colors.darkbackground
          : colors.lightbackground,
        flex: 1,
        alignItems: 'center',
      }}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({item}) => <MoneyCard />}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackExpenseScreen;
