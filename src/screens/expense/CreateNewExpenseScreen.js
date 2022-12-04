import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, ScrollView, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
const CreateNewExpenseScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [indexOfSpendings, setIndexOfSpendings] = useState(1);
  const [focusColor, setFocusColor] = useState('');
  const [spendingsList, setSpendingsList] = useState([
    {
      id: 0,
      title: '',
      amount: '0',
    },
    {
      id: 1,
      title: '',
      amount: '0',
    },
  ]);

  const navigation = useNavigation();
  const handleAddNew = () => {
    console.warn(spendingsList.length);
    setSpendingsList(prev => {
      var x = {
        id: prev.length,
        title: '',
        amount: '0',
      };
      var tmp = [...prev];
      tmp.push(x);
      return tmp;
    });
  };

  return (
    <ScrollView style={{paddingHorizontal: 5, paddingVertical: 5}}>
      <View>
        <TextInput
          value={title}
          onChange={txt => {
            setTitle(txt);
          }}
          placeholder="Enter Title"
          style={{
            backgroundColor: '#e0dede',
            borderBottomWidth: StyleSheet.hairlineWidth,
            textAlign: 'center',
            fontSize: 21,
            color: 'black',
          }}
        />

        <TextInput
          value={description}
          onChangeText={txt => {
            console.warn(description);
            setDescription(txt);
          }}
          placeholder={'Describe your spendings here...'}
          style={{
            borderWidth: StyleSheet.hairlineWidth,
            margin: 2,
            borderTopWidth: 0,
            marginBottom: 20,
          }}
        />
        {spendingsList.length &&
          spendingsList.map((el, ind) => (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 13,
                backgroundColor: ind === indexOfSpendings ? '#ccc' : '#efefef',
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
              key={el.id}
              onFocus={e => {
                setIndexOfSpendings(prev => ind);
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flex: 1,
                }}>
                <TextInput
                  value={el.title}
                  onChangeText={txt => {
                    setSpendingsList(prev => {
                      var tmp = [...prev];
                      tmp[ind].title = txt;
                      console.warn(tmp[ind]);
                      return tmp;
                    });
                  }}
                  style={{flex: 0.75}}
                  placeholder={'Enter your spendings here...'}
                />

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    flex: 0.2,
                    justifyContent: 'flex-end',
                  }}>
                  <Text>$ </Text>
                  <TextInput
                    value={el.amount}
                    keyboardType="numeric"
                    onChangeText={txt => {
                      setSpendingsList(prev => {
                        var tmp = [...prev];
                        tmp[ind].amount = txt;
                        return tmp;
                      });
                    }}
                  />
                </View>
              </View>

              {ind === indexOfSpendings && (
                <FontAwesome
                  name="remove"
                  size={25}
                  color="red"
                  style={{
                    position: 'absolute',
                    right: -2,
                    top: -13,
                  }}
                  onPress={() => {
                    setSpendingsList(prev => {
                      var tmp = [...prev];
                      tmp.splice(ind, 1);
                      return tmp;
                    });
                  }}
                />
              )}
            </View>
          ))}
        <Text>{spendingsList.length}</Text>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 5,
          }}>
          <Ionicons
            name="ios-add-circle-sharp"
            size={25}
            color="royalblue"
            onPress={handleAddNew}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default CreateNewExpenseScreen;
