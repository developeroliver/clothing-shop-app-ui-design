import { View, FlatList } from 'react-native';
import React from 'react';
import CardItem from './CardItem';

const Card = () => {
  const data = [
    {
      id: 1,
      image: require('../../../../../assets/images/image-01.png'),
      title: 'Modern light clothes',
      subtitle: 'Dress modern',
      price: '$212.99',
      star: require('../../../../../assets/images/star.png'),
      rating: '5.0',
    },
    {
      id: 2,
      image: require('../../../../../assets/images/image-02.png'),
      title: 'Modern light clothes',
      subtitle: 'Dress modern',
      price: '$212.99',
      star: require('../../../../../assets/images/star.png'),
      rating: '5.0',
    },
    {
      id: 3,
      image: require('../../../../../assets/images/image-03.png'),
      title: 'Modern light clothes',
      subtitle: 'Dress modern',
      price: '$212.99',
      star: require('../../../../../assets/images/star.png'),
      rating: '5.0',
    },
    {
      id: 4,
      image: require('../../../../../assets/images/image-04.png'),
      title: 'Modern light clothes',
      subtitle: 'Dress modern',
      price: '$212.99',
      star: require('../../../../../assets/images/star.png'),
      rating: '5.0',
    },
    {
      id: 5,
      image: require('../../../../../assets/images/image-05.jpg'),
      title: 'Modern light clothes',
      subtitle: 'Dress modern',
      price: '$212.99',
      star: require('../../../../../assets/images/star.png'),
      rating: '5.0',
    },
    {
      id: 6,
      image: require('../../../../../assets/images/image-06.jpg'),
      title: 'Modern light clothes',
      subtitle: 'Dress modern',
      price: '$212.99',
      star: require('../../../../../assets/images/star.png'),
      rating: '5.0',
    },
    {
      id: 7,
      image: require('../../../../../assets/images/image-07.jpg'),
      title: 'Modern light clothes',
      subtitle: 'Dress modern',
      price: '$212.99',
      star: require('../../../../../assets/images/star.png'),
      rating: '5.0',
    },
    {
      id: 8,
      image: require('../../../../../assets/images/image-08.jpg'),
      title: 'Modern light clothes',
      subtitle: 'Dress modern',
      price: '$212.99',
      star: require('../../../../../assets/images/star.png'),
      rating: '5.0',
    },
  ];

  return (
    <FlatList
      data={data}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <CardItem item={item} />}
    />
  );
};

export default Card;
