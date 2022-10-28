import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Image, ScrollView, Button} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Field = ({fieldName, description}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
      }}>
      <Text style={{color: 'black', fontSize: 18, fontWeight: '500'}}>
        {fieldName}
      </Text>
      <Text style={{color: 'black', fontSize: 18, fontWeight: '500'}}>
        {description}
      </Text>
    </View>
  );
};
const AddSubscriptionDetailsScreen = () => {
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
  }, [
    navigation,
    router.params?.title,
    router.params?.sub_id,
    router.params?.action,
  ]);
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        paddingTop: 0,
        justifyContent: 'space-evenly',
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: 'red',
          marginVertical: 30,
        }}>
        <Image
          source={{
            uri: 'https://www.scdn.co/i/_global/twitter_card-default.jpg',
          }}
          style={{width: 60, height: 60, marginBottom: 30}}
        />
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          $ 7.99
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'space-evenly',
          flex: 0.8,
          // backgroundColor: 'red',
        }}>
        <Field fieldName="Name" description={'Spotify'} />
        <Field fieldName="Description" description={'Premium Plan'} />
        <Field fieldName="First Bill" description={'21 July 2022'} />
        <Field fieldName="Cycle" description={'Every Month'} />
        <Field fieldName="Duration" description={'Forever'} />
        <Field fieldName="Currency" description={'USD'} />
      </View>
      <Button
        title="Delete Subscription"
        onPress={() => {
          console.warn('Delete Subscription');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default AddSubscriptionDetailsScreen;
