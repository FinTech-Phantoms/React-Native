import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const SubscriptionDetails = () => {
  const router = useRoute();
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerTitle: router.params?.title,
      headerStyle: {},
      headerRight: () => {
        return (
          <View>
            {router.params?.action === 'modify' && (
              <AntDesign
                name="edit"
                size={22}
                color="royalblue"
                onPress={() => {
                  navigation.navigate('modify-subscription', {
                    sub_id: router.params?.sub_id,
                    title: router.params?.title,
                    action: 'modify',
                  });
                }}
              />
            )}
          </View>
        );
      },
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
