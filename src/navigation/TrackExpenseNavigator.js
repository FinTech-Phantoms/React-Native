import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TrackExpenseScreen from '../screens/TrackExpenseScreen';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import ExpenseDetailsScreen from '../screens/ExpenseDetailsScreen';

const Stack = createNativeStackNavigator();
const TrackExpenseNavigator = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
};

export default TrackExpenseNavigator;
