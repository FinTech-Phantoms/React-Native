import React from 'react';
import {View, StyleSheet, Text, useColorScheme, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import CreateNewExpenseScreen from '../screens/CreateNewExpenseScreen';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // statusBarStyle: isDarkMode ? 'dark' : 'light',
          headerStyle: {
            // backgroundColor: isDarkMode ? Colors.darker : colors.lightHeaders,
          },
        }}>
        <Stack.Screen
          name="home"
          component={TabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="create-new-expense"
          component={CreateNewExpenseScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default MainNavigator;
