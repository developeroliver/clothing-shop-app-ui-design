import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';

const ButtonDetails = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.buttonContainer}>
      <View style={styles.button}>
        <Image
          source={require('../../../../assets/images/shopping-cart.png')}
          style={styles.buttonIcon}
        />
        <Pressable onPress={() => navigation.navigate('Checkout')}>
          <Text style={styles.buttonText}>
            Add to Cart | $100.99
            <Text style={styles.buttonTextLight}>$190.99</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ButtonDetails;
