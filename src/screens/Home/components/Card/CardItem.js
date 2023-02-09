import { View, Text, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CardItem = ({ item }) => {
  const navigation = useNavigation();
  const [isLiked, setIsLiked] = useState(false);

  return (
    <View style={styles.grid}>
      <Pressable onPress={() => navigation.navigate('Details')}>
        <View style={styles.container}>
          <Image source={item?.image} style={styles.image} />
          <View style={styles.heart}>
            <Pressable
              onPress={() => setIsLiked((prevState) => !prevState)}
            >
              <FontAwesome
                name={isLiked ? 'heart' : 'heart-o'}
                size={15}
                color={isLiked ? 'white' : 'white'}
              />
            </Pressable>
          </View>

          <Text numberOfLines={1} style={styles.title}>
            {item?.title}
          </Text>
          <Text style={styles.subtitle}>{item?.subtitle}</Text>
          <View style={styles.row}>
            <Text style={styles.price}>{item?.price}</Text>
            <Image source={item?.star} style={styles.star} />
            <Text style={styles.rating}>{item?.rating}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default CardItem;
