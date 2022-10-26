import React from 'react';
import {View, StyleSheet, Text, useColorScheme, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import CreateNewExpenseScreen from '../screens/CreateNewExpenseScreen';
import colors from '../../assests/colors';
import ModifySubscription from '../screens/subscriptions/ModifySubscription';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: isDarkMode
              ? colors.darkHeaders
              : colors.lightHeaders,
          },
          headerTitleStyle: {
            color: isDarkMode ? colors.darkText : colors.lightText,
          },
          headerTitleAlign: 'center',
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
        <Stack.Screen
          name="modify-subscription"
          component={ModifySubscription}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default MainNavigator;
