import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Text,
  ScrollView,
  Button,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Field = ({filedName, value, setValue, editable}) => {
  return (
    <View style={styles.row}>
      <View>
        <Text style={{color: 'black', fontSize: 18, fontWeight: '500'}}>
          {filedName}
        </Text>
      </View>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={txt => {
          console.warn(txt);
          setValue(txt);
        }}
        editable={editable}
      />
    </View>
  );
};

const ModifySubscription = () => {
  const router = useRoute();
  const navigaiton = useNavigation();

  const [name, setName] = useState(router.params?.title);
  const [description, setDescription] = useState('');
  const [firstBill, setFirstBill] = useState('');
  const [cycle, setCycle] = useState('');
  const [duration, setDuration] = useState('');
  const [Currency, setCurrency] = useState('USD');
  const [category, setCategory] = useState('Entertainment');
  useEffect(() => {
    navigaiton.setOptions({
      headerRight: () => (
        <Feather
          name="check"
          size={22}
          color={'royalblue'}
          onPress={() => {
            console.warn('save');
          }}
        />
      ),
    });
  }, [navigaiton]);
  return (
    <ScrollView>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
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
      <Field
        filedName={'Name'}
        editable={false}
        value={name}
        setValue={setName}
      />
      <Field
        filedName={'Description'}
        editable={true}
        value={description}
        setValue={setDescription}
      />
      <Field
        filedName={'First Bill'}
        editable={false}
        value={firstBill}
        setValue={setFirstBill}
      />
      <Field
        filedName={'Cycle'}
        editable={true}
        value={cycle}
        setValue={setCycle}
      />
      <Field
        filedName={'Duration'}
        editable={true}
        value={duration}
        setValue={setDuration}
      />
      <Field
        filedName={'Category'}
        editable={true}
        value={category}
        setValue={setCategory}
      />
      <Field
        filedName={'Currency'}
        editable={true}
        value={Currency}
        setValue={setCurrency}
      />
      <View style={{marginVertical: 10}}>
        <Button
          title="Save Subscription"
          onPress={() => {
            console.warn('save pressed');
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#e8e8e8',
    flex: 0.6,
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
});

export default ModifySubscription;
