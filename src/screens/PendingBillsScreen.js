import React from 'react';
import {View, StyleSheet, Text, useColorScheme} from 'react-native';
import colors from '../../assests/colors';

const PendingBillsScreen = () => {
  var isDarkMode = useColorScheme() === 'dark';
  return (
    <View
      style={{
        backgroundColor: isDarkMode
          ? colors.darkbackground
          : colors.lightbackground,
        flex: 1,
      }}>
      <Text style={{color: isDarkMode ? colors.darkText : colors.lightText}}>
        PendingBillsScreen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PendingBillsScreen;
