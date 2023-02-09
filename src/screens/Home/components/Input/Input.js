import { View, TextInput, Image } from 'react-native';
import React from 'react';
import styles from './styles';

const Input = () => {
  return (
    <View style={styles.row}>
      <View style={styles.inputContainer}>
        <Image
          source={require('../../../../../assets/images/search.png')}
          style={styles.search}
        />
        <TextInput
          placeholder="Search Clothes..."
          style={styles.input}
        />
      </View>
      <View style={styles.filterContainer}>
        <Image
          source={require('../../../../../assets/images/filter.png')}
          style={styles.filter}
        />
      </View>
    </View>
  );
};

export default Input;
