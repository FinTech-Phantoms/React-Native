import React, {useEffect} from 'react';
import {View, StyleSheet, Text, useColorScheme} from 'react-native';
import SubscriptionTitleCard from '../../components/subscriptions/SubscriptionTitleCard';
import colors from '../../../assests/colors';
import SubscriptionsCard from '../../components/subscriptions/SubscriptionsCard';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SubscriptionManagementScreen = () => {
  var isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons
          name="ios-add"
          size={30}
          color="royalblue"
          onPress={() => {
            navigation.navigate('all-subscriptions', {
              title: 'Add Subscription',
              action: 'add-new',
            });
          }}
        />
      ),
    });
  }, [navigation]);
  return (
    <View
      style={{
        backgroundColor: isDarkMode
          ? colors.darkbackground
          : colors.lightbackground,
        flex: 1,
        padding: 20,
      }}>
      <SubscriptionTitleCard />
      <SubscriptionsCard />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SubscriptionManagementScreen;
