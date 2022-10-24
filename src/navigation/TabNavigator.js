import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CreditScoreScreen from '../screens/CreditScoreScreen';
import PendingBillsScreen from '../screens/PendingBillsScreen';
import SubscriptionManagementScreen from '../screens/SubscriptionManagementScreen';
import TrackExpenseScreen from '../screens/TrackExpenseScreen';
import colors from '../../assests/colors';

const BottomTab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.lightHeaders,
        },
        headerTitleStyle: {
          color: colors.black,
        },
      }}>
      <BottomTab.Screen name="credits" component={CreditScoreScreen} />
      <BottomTab.Screen name="pending-bills" component={PendingBillsScreen} />
      <BottomTab.Screen
        name="subscriptions"
        component={SubscriptionManagementScreen}
      />
      <BottomTab.Screen name="track-expense" component={TrackExpenseScreen} />
    </BottomTab.Navigator>
  );
};

export default TabNavigator;
