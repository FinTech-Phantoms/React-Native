import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TrackExpenseScreen from '../screens/TrackExpenseScreen';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import ExpenseDetailsScreen from '../screens/expense/ExpenseDetailsScreen';
import {useColorScheme} from 'react-native';
import colors from '../../assests/colors';
import EditExpense from '../screens/expense/EditExpense';

const Stack = createNativeStackNavigator();
const TrackExpenseNavigator = () => {
  var isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();
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
        name="track-expense-home"
        component={TrackExpenseScreen}
        options={{
          headerRight: () => (
            <Entypo
              onPress={() => navigation.navigate('create-new-expense')}
              name="new-message"
              color={'royalblue'}
              size={18}
              style={{
                marginRight: 20,
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="view-expense-details"
        component={ExpenseDetailsScreen}
      />
      <Stack.Screen name="edit-expense" component={EditExpense} />
    </Stack.Navigator>
  );
};

export default TrackExpenseNavigator;
