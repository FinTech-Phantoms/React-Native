import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CreditScoreScreen from '../screens/CreditScoreScreen';
import PendingBillsScreen from '../screens/PendingBillsScreen';
import colors from '../../assests/colors';
import {useColorScheme} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import TrackExpenseNavigator from './TrackExpenseNavigator';
import SubscriptionsNavigator from './SubscriptionsNavigator';

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
        component={SubscriptionsNavigator}
        options={{headerShown: false}}
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
