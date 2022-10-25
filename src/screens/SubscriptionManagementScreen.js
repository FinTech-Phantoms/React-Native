import React from 'react';
import {View, StyleSheet, Text, useColorScheme} from 'react-native';
import SubscriptionTitleCard from '../components/subscriptionTitleCard/SubscriptionTitleCard';
import colors from '../../assests/colors';

const SubscriptionManagementScreen = () => {
  var isDarkMode = useColorScheme() === 'dark';
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
    </View>
  );
};

const styles = StyleSheet.create({});

export default SubscriptionManagementScreen;
