import React from 'react';
import {
  View,
  StyleSheet,
  useColorScheme,
  FlatList,
  Text,
  Image,
  TouchableNativeFeedback,
} from 'react-native';
import colors from '../../../assests/colors';
import PlanContainer from '../../components/subscriptions/PlanContainer';
import spotify from '../../../assests/spotify.png';
import {useNavigation} from '@react-navigation/native';
var data = [
  {
    id: 1,
    bgColor: '#1ccb5a',
    logo: spotify,
    timeLeft: '2 days',
    price: '7.99',
  },
  {
    id: 2,
    bgColor: '',
    logo: spotify,
    timeLeft: '2 days',
    price: '7.99',
  },
  {
    id: 3,
    bgColor: 'red',
    logo: spotify,
    timeLeft: '2 days',
    price: '7.99',
  },
  {
    id: 4,
    bgColor: 'orange',
    logo: spotify,
    timeLeft: '2 days',
    price: '7.99',
  },
  {
    id: 5,
    bgColor: 'purple',
    logo: spotify,
    timeLeft: '2 days',
    price: '7.99',
  },
  {
    id: 6,
    bgColor: '#1ccb5a',
    logo: spotify,
    timeLeft: '2 days',
    price: '7.99',
  },
  {
    id: 7,
    bgColor: 'yellow',
    logo: spotify,
    timeLeft: '2 days',
    price: '7.99',
  },
  {
    id: 8,
    bgColor: '#1ccb5a',
    logo: spotify,
    timeLeft: '2 days',
    price: '7.99',
  },
  {
    id: 9,
    bgColor: '',
    logo: spotify,
    timeLeft: '2 days',
    price: '7.99',
  },
  {
    id: 10,
    bgColor: 'red',
    logo: spotify,
    timeLeft: '2 days',
    price: '7.99',
  },
  {
    id: 11,
    bgColor: 'orange',
    logo: spotify,
    timeLeft: '2 days',
    price: '7.99',
  },
  {
    id: 12,
    bgColor: 'purple',
    logo: spotify,
    timeLeft: '2 days',
    price: '7.99',
  },
  {
    id: 13,
    bgColor: '#1ccb5a',
    logo: spotify,
    timeLeft: '2 days',
    price: '7.99',
  },
  {
    id: 14,
    bgColor: 'yellow',
    logo: spotify,
    timeLeft: '2 days',
    price: '7.99',
  },
];

const SubsContainer = ({bgColor, logo, price, timeLeft, id}) => {
  const navigation = useNavigation();
  return (
    <TouchableNativeFeedback
      onPress={() => {
        navigation.navigate('subscription-details', {
          sub_id: id,
          action: 'modify',
        });
      }}>
      <View
        style={[
          styles.subsContainer,
          {
            backgroundColor: bgColor ? bgColor : 'royalblue',
          },
        ]}>
        <Image source={logo} style={{height: 50, width: 120}} />
        <View>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 19}}>
            $ {price}
          </Text>
          <Text style={{color: 'white', fontWeight: '500'}}>{timeLeft}</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};
const ActiveSubscriptionsScreen = () => {
  var isDarkMode = useColorScheme() === 'dark';
  return (
    <View
      style={{
        backgroundColor: isDarkMode
          ? colors.darkbackground
          : colors.lightbackground,
        flex: 1,
        justifyContent: 'center',
      }}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <SubsContainer
            price={item.price}
            bgColor={item.bgColor}
            timeLeft={item.timeLeft}
            logo={item.logo}
            id={item.id}
          />
        )}
        // numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  subsContainer: {
    height: 70,
    marginVertical: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});

export default ActiveSubscriptionsScreen;
