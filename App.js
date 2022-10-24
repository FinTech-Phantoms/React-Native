/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar,
  Text,
  useColorScheme,
  View,
  SafeAreaView,
  FlatList,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import colors from './assests/colors';
import PendingBillsScreen from './src/screens/PendingBillsScreen';
import MainNavigator from './src/navigation/index';
import MoneyCard from './src/components/moneyCard/MoneyCard';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: isDarkMode
          ? colors.darkbackground
          : colors.lightbackground,
        flex: 1,
      }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      {/* <PendingBillsScreen /> */}
      <MainNavigator />
    </SafeAreaView>
  );
};

export default App;
