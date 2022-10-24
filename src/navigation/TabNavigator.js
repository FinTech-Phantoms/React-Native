import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CreditScoreScreen from '../screens/CreditScoreScreen';
import PendingBillsScreen from '../screens/PendingBillsScreen';
import SubscriptionManagementScreen from '../screens/SubscriptionManagementScreen';
import TrackExpenseScreen from '../screens/TrackExpenseScreen';
import colors from '../../assests/colors';
import {Text, useColorScheme} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import TrackExpenseNavigator from './TrackExpenseNavigator';
// import TrackExpenseNavigator from './TrackExpenseNavigator';

const BottomTab = createBottomTabNavigator();
const TabNavigator = () => {
  const navigation = useNavigation();
  var isDarkMode = useColorScheme() === 'dark';
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: isDarkMode
            ? colors.darkHeaders
            : colors.lightHeaders,
        },
        headerTitleStyle: {
          color: isDarkMode ? colors.darkText : colors.lightText,
        },
        tabBarStyle: {
          backgroundColor: isDarkMode
            ? colors.darkHeaders
            : colors.lightHeaders,
        },
        tabBarInactiveTintColor: isDarkMode
          ? colors.darkText
          : colors.lightText,
      }}>
      <BottomTab.Screen name="credits" component={CreditScoreScreen} />
      <BottomTab.Screen name="pending-bills" component={PendingBillsScreen} />
      <BottomTab.Screen
        name="subscriptions"
        component={SubscriptionManagementScreen}
      />
      <BottomTab.Screen
        name="track-expense"
        component={TrackExpenseNavigator}
        options={{
          headerShown: false,
        }}
        // options={{
        //   headerRight: () => (
        //     <Entypo
        //       onPress={() => navigation.navigate('create-new-expense')}
        //       name="new-message"
        //       color={'royalblue'}
        //       size={18}
        //       style={{
        //         marginRight: 20,
        //       }}
        //     />
        //   ),
        // }}
      />
    </BottomTab.Navigator>
  );
};

export default TabNavigator;
