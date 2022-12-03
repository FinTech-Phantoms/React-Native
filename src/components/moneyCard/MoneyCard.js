import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  TouchableNativeFeedback,
} from 'react-native';
import colors from '../../../assests/colors';
import {useColorScheme} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const MoneyCard = ({id}) => {
  var isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();
  return (
    <View
      style={[
        styles.rootContainer,
        {
          shadowColor: isDarkMode ? '#fff' : '#000',
          backgroundColor: isDarkMode ? '#000' : '#fff',
        },
      ]}>
      <View style={styles.headContainer}>
        <Text style={styles.title}>Wells Frago Checking</Text>
        <Text
          style={[
            styles.money,
            {
              color: isDarkMode ? colors.white : colors.lightText,
            },
          ]}>
          $17,053.99
        </Text>
      </View>
      <View style={{flex: 0.3, overflow: 'hidden'}}>
        <TouchableNativeFeedback
          onPress={() => {
            navigation.navigate('view-expense-details', {
              id,
              title: 'Title of expense',
            });
          }}
          background={TouchableNativeFeedback.Ripple(
            isDarkMode ? '#3b3939' : 'whitesmoke',
            true,
          )}>
          <View
            style={[
              styles.footContainer,
              {
                overflow: 'hidden',
                borderTopColor: isDarkMode ? 'gray' : '#ccc',
              },
            ]}>
            <Text style={styles.viewDetailsBtn}>View Details</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    zIndex: 1,
    borderRadius: 6,
    height: 200,
    width: 180,
    marginVertical: 10,
    marginHorizontal: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
  headContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 20,
    color: 'gray',
  },
  money: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  footContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    overflow: 'hidden',
    flex: 1,
  },
  viewDetailsBtn: {
    fontSize: 17,
    marginVertical: 10,
    color: 'royalblue',
  },
});

export default MoneyCard;
