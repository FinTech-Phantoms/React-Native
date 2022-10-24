import React from 'react';
import {View, StyleSheet, Text, useColorScheme} from 'react-native';
import colors from '../../assests/colors';

const CreditScoreScreen = () => {
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
        Credit Score Screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CreditScoreScreen;
