import React from 'react';
import {useColorScheme} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ActiveSubscriptionsScreen from '../screens/subscriptions/ActiveSubscriptionsScreen';
import SubscriptionManagementScreen from '../screens/SubscriptionManagementScreen';
import colors from '../../assests/colors';

const Stack = createNativeStackNavigator();

const SubscriptionsNavigator = () => {
  var isDarkMode = useColorScheme() === 'dark';
  return (
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
      }}>
      <Stack.Screen
        name="subscriptions-home"
        component={SubscriptionManagementScreen}
      />
      <Stack.Screen
        name="my-active-subscriptions"
        component={ActiveSubscriptionsScreen}
      />
    </Stack.Navigator>
  );
};

export default SubscriptionsNavigator;
