import React from 'react';
import {useColorScheme} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ActiveSubscriptionsScreen from '../screens/subscriptions/AllSubscriptions';
import SubscriptionManagementScreen from '../screens/subscriptions/SubscriptionManagementScreen';
import colors from '../../assests/colors';
import SubscriptionDetails from '../screens/subscriptions/SubscriptionDetails';
import AddSubscriptionDetailsScreen from '../screens/subscriptions/AddSubscriptionDetails';

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
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="subscriptions-home"
        component={SubscriptionManagementScreen}
      />
      <Stack.Screen
        name="all-subscriptions"
        component={ActiveSubscriptionsScreen}
      />
      <Stack.Screen
        name="subscription-details"
        component={SubscriptionDetails}
      />
      <Stack.Screen
        name="add-subscription-details"
        component={AddSubscriptionDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default SubscriptionsNavigator;
