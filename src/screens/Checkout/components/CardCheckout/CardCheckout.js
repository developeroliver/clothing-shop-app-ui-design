import { View, Text, FlatList } from 'react-native';
import React from 'react';
import styles from '../../styles';
import CardCheckoutItem from './CardCheckoutItem';

const CardCheckout = () => {
  const data = [
    {
      id: 1,
      image: require('../../../../../assets/images/image-01.png'),
      title: 'Modern light clothes',
      subtitle: 'Dress modern',
      price: '$212.99',
    },
    {
      id: 2,
      image: require('../../../../../assets/images/image-04.png'),
      title: 'Modern light clothes',
      subtitle: 'Dress modern',
      price: '$212.99',
    },
    {
      id: 3,
      image: require('../../../../../assets/images/image-02.png'),
      title: 'Modern light clothes',
      subtitle: 'Dress modern',
      price: '$212.99',
    },
  ];

  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <CardCheckoutItem item={item} />}
    />
  );
};

export default CardCheckout;
