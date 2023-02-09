import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from '../../styles';
import { Entypo } from '@expo/vector-icons';

const CardCheckoutItem = ({ item }) => {
  return (
    <View style={styles.containerCard}>
      <View style={styles.containerCardDetails}>
        <View style={{ width: '17%' }}>
          <Image
            source={item.image}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        <View style={styles.containerDetails}>
          <View style={styles.columnCard}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
            <Text style={styles.title}>{item.price}</Text>
          </View>

          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}
          >
            <Entypo
              name="dots-three-horizontal"
              size={14}
              color="black"
            />
            <View style={styles.add}>
              <Text style={styles.textAdd}>-</Text>
              <Text style={styles.textAdd}>4</Text>
              <Text style={styles.textAdd}>+</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.borderCard} />
    </View>
  );
};

export default CardCheckoutItem;
