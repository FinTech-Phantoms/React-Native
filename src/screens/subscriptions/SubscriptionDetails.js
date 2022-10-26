import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
const SubscriptionDetails = () => {
  const router = useRoute();
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Hello world',
    });
  }, []);
  return (
    <View>
      <Text>{router.params?.sub_id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SubscriptionDetails;
