import React from 'react';
import { Text, View, FlatList } from 'react-native';
import CategoriesItem from './CategoriesItem';

const Categories = () => {
  const categories = [
    {
      id: '1',
      icon: require('../../../../../assets/images/category.png'),
      title: 'All Items',
    },
    {
      id: '2',
      icon: require('../../../../../assets/images/dress.png'),
      title: 'Dress',
    },
    {
      id: '3',
      icon: require('../../../../../assets/images/hat.png'),
      title: 'Hat',
    },
    {
      id: '4',
      icon: require('../../../../../assets/images/watch.png'),
      title: 'Watch',
    },
  ];

  return (
    <FlatList
      data={categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <CategoriesItem
          id={item.id}
          icon={item.icon}
          title={item.title}
        />
      )}
    />
  );
};

export default Categories;
