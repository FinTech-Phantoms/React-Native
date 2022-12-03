import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  ScrollView,
  FlatList,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';

const data = [
  {id: 1, title: 'Kurkure', price: 200},
  {id: 2, title: 'Chips', price: 200},
  {id: 3, title: 'Lays', price: 200},
  {id: 4, title: 'Taka Tak', price: 200},
  {id: 5, title: 'Bhature', price: 200},
  {id: 11, title: 'Kurkure', price: 200},
  {id: 22, title: 'Chips', price: 200},
  {id: 33, title: 'Lays', price: 200},
  {id: 44, title: 'Taka Tak', price: 200},
  {id: 55, title: 'Bhature', price: 200},
  {id: 113, title: 'Kurkure', price: 200},
  {id: 242, title: 'Chips', price: 200},
  {id: 32343, title: 'Lays', price: 200},
  {id: 4434, title: 'Taka Tak', price: 200},
  {id: 5325, title: 'Bhature', price: 200},
  {id: 116, title: 'Kurkure', price: 200},
  {id: 272, title: 'Chips', price: 200},
  {id: 336, title: 'Lays', price: 200},
  {id: 444, title: 'Taka Tak', price: 200},
  {id: 555, title: 'Bhature', price: 200},
];

const ExpenseDetailsScreen = () => {
  const router = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: router.params?.title,
      headerRight: () => (
        <Entypo
          onPress={() => navigation.navigate('edit-expense')}
          name="new-message"
          color={'royalblue'}
          size={18}
          style={{
            marginRight: 20,
          }}
        />
      ),
    });
  }, [navigation, router.params]);

  return (
    <View style={{padding: 5, display: 'flex', flex: 1}}>
      <View>
        <Button title="Delete Expense" color={'red'} />
      </View>
      <Text style={styles.title}>{router.params?.title}</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        venenatis tortor maximus, luctus mauris sed, tempor felis. Nunc quis
        lacinia felis. Aliquam quis congue tortor.
      </Text>
      <View
        style={{
          ...styles.spendings,
          borderBottomWidth: 1,
          marginTop: 10,
        }}>
        <Text style={{...styles.text, fontWeight: 'bold'}}>
          Total Spendings
        </Text>
        <Text style={{...styles.text, fontWeight: 'bold'}}>$ 100.00</Text>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View
              style={{
                ...styles.spendings,
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}>
              <Text style={styles.text}>{item.title}</Text>
              <Text style={styles.text}>$ {item.price}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'black',
    textAlign: 'center',
    fontSize: 22,
    marginVertical: 5,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
  spendings: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
});

export default ExpenseDetailsScreen;
